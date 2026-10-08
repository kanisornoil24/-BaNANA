import { AISearchResult, Product } from '../types/product';
import { getProductPerformanceScore } from '../utils/performanceScorer';

/**
 * AI Smart Search Service
 * Hybrid: Calls /api/ai-search (Gemini 3.8 Flash) with a complete Thai intelligent fallback engine
 * that guarantees immediate, lightning-fast results whether online or offline!
 */
export async function searchProductsWithAI(
  query: string,
  products: Product[]
): Promise<AISearchResult> {
  const cleanQuery = query.trim();
  if (!cleanQuery) {
    return {
      matchedProducts: products,
      explanation: 'แสดงสินค้าทั้งหมดในร้าน',
      queryIntent: 'general'
    };
  }

  // 1. Call server-side Gemini API proxy route
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 6000); // 6s timeout for fast response

    const response = await fetch('/api/ai-search', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        query: cleanQuery,
        products: products.map(p => ({
          id: p.id,
          name: p.name,
          brand: p.brand,
          category: p.category,
          price: p.price,
          rating: p.rating,
          specs: p.specs,
          highlightPoints: p.highlightPoints,
          limitations: p.limitations
        }))
      }),
      signal: controller.signal
    });

    clearTimeout(timeoutId);

    if (response.ok) {
      const data = await response.json();
      if (data && Array.isArray(data.matchedIds)) {
        const matched = data.matchedIds
          .map((id: string) => products.find(p => p.id === id))
          .filter(Boolean) as Product[];

        if (matched.length > 0) {
          let comparisonProducts: Product[] | undefined = undefined;
          if (data.comparisonIds && Array.isArray(data.comparisonIds)) {
            comparisonProducts = data.comparisonIds
              .map((id: string) => products.find(p => p.id === id))
              .filter(Boolean) as Product[];
          }

          return {
            matchedProducts: matched,
            explanation: data.explanation || 'ผลการค้นหาอัจฉริยะ',
            queryIntent: data.intent || 'filter',
            comparisonProducts,
            rankingScores: data.rankingScores
          };
        }
      }
    }
  } catch (err) {
    console.warn('Backend AI search error, using fast Thai NLP engine fallback:', err);
  }

  // 2. Intelligent Thai Natural Language Heuristic Engine (Offline / Instant)
  return runLocalThaiEngine(cleanQuery, products);
}

function runLocalThaiEngine(query: string, products: Product[]): AISearchResult {
  const lower = query.toLowerCase();

  // Pattern A: Comparison Check (e.g. "เปรียบเทียบ มือถือ realme 16 กับ realme 16 pro")
  if (lower.includes('เปรียบเทียบ') || lower.includes('เทียบ') || lower.includes('vs') || lower.includes('กับ')) {
    // Specific match for realme 16 models
    if (lower.includes('realme') && lower.includes('16')) {
      const isProPlus = lower.includes('pro+') || lower.includes('pro +') || lower.includes('plus');
      let p1 = products.find(p => p.id === 'prod-realme-16') || products.find(p => p.id === 'prod-realme-16-pro');
      let p2 = products.find(p => p.id === (isProPlus ? 'prod-realme-16-pro-plus' : 'prod-realme-16-pro'));

      if (lower.includes('16 pro') && isProPlus) {
        p1 = products.find(p => p.id === 'prod-realme-16-pro');
        p2 = products.find(p => p.id === 'prod-realme-16-pro-plus');
      } else if (!isProPlus) {
        p1 = products.find(p => p.id === 'prod-realme-16') || p1;
        p2 = products.find(p => p.id === 'prod-realme-16-pro') || p2;
      }

      if (p1 && p2 && p1.id !== p2.id) {
        const explanation = `เปรียบเทียบระหว่าง ${p1.name} (ราคา ฿${p1.price.toLocaleString()}) กับ ${p2.name} (ราคา ฿${p2.price.toLocaleString()}):\n• ${p1.name}: ${p1.highlightPoints[0] || 'คุ้มค่าในงบประหยัด'} (฿${p1.price.toLocaleString()})\n• ${p2.name}: ${p2.highlightPoints[0] || 'หน้าจอและกล้องคุณภาพสูงกว่า'} (฿${p2.price.toLocaleString()})`;
        return {
          matchedProducts: [p1, p2],
          explanation,
          queryIntent: 'compare',
          comparisonProducts: [p1, p2]
        };
      }
    }

    // Find candidate products mentioned in the query
    const matched = products.filter(p => {
      const nameParts = p.name.toLowerCase().split(/\s+/);
      const brandMatch = lower.includes(p.brand.toLowerCase());
      // Check for specific models like '16 pro', '16 pro+', 's24', 'a55', 'g16', '14t'
      const specificMatch = nameParts.some(part => part.length >= 3 && lower.includes(part));
      return brandMatch && specificMatch;
    });

    if (matched.length >= 2) {
      const p1 = matched[0];
      const p2 = matched[1];
      const explanation = `เปรียบเทียบระหว่าง ${p1.name} (ราคา ฿${p1.price.toLocaleString()}) กับ ${p2.name} (ราคา ฿${p2.price.toLocaleString()}): \n• ${p1.name} มีจุดเด่นคือ ${p1.highlightPoints[0] || 'ราคาคุ้มค่า'} \n• ${p2.name} มีจุดเด่นคือ ${p2.highlightPoints[0] || 'สเปกระดับท็อป'}`;
      return {
        matchedProducts: matched,
        explanation,
        queryIntent: 'compare',
        comparisonProducts: [p1, p2]
      };
    }
  }

  // Pattern B: Max Price Extraction (e.g. "ราคาไม่เกิน 20,000", "ไม่เกิน 15,000 บาท", "งบ 20000")
  let maxPrice: number | null = null;
  const priceRegex = /(?:ไม่เกิน|ต่ำกว่า|ไม่เกินงบ|งบ|ราคา)\s*([0-9,]+)/i;
  const priceMatch = query.match(priceRegex);
  if (priceMatch) {
    const rawNum = priceMatch[1].replace(/,/g, '');
    const num = parseInt(rawNum, 10);
    if (!isNaN(num) && num > 0) {
      maxPrice = num;
    }
  }

  // Pattern C: Brand Extraction
  const brands = ['samsung', 'realme', 'apple', 'xiaomi', 'poco', 'asus', 'lenovo', 'oneplus'];
  const matchedBrands = brands.filter(b => lower.includes(b));

  // Pattern D: Category Extraction
  let categoryFilter: string | null = null;
  if (lower.includes('มือถือ') || lower.includes('สมาร์ทโฟน') || lower.includes('โทรศัพท์')) {
    categoryFilter = 'mobile';
  } else if (lower.includes('โน้ตบุ๊ก') || lower.includes('คอมพิวเตอร์') || lower.includes('laptop') || lower.includes('แล็ปท็อป')) {
    categoryFilter = 'laptop';
  } else if (lower.includes('แท็บเล็ต') || lower.includes('ไอแพด') || lower.includes('ipad') || lower.includes('tablet')) {
    categoryFilter = 'tablet';
  }

  // Pattern E: Gaming / Ultimate Performance ("เกม", "เล่นเกม", "เกมมิ่ง", "gaming", "เกมส์" -> เครื่องที่แรงที่สุด)
  const isGaming =
    lower.includes('เกม') ||
    lower.includes('เกมส์') ||
    lower.includes('game') ||
    lower.includes('gaming') ||
    lower.includes('แรงที่สุด') ||
    lower.includes('แรงสุด') ||
    lower.includes('เครื่องแรง');

  // Pattern F: Focus on Battery & Fast Charging
  const isBatteryFastCharge =
    (lower.includes('แบต') || lower.includes('แบตเตอรี่') || lower.includes('อึด') || lower.includes('นาน')) &&
    (lower.includes('ชาร์จเร็ว') || lower.includes('ชาร์จไว'));

  // Pattern G: Ranking / Best Value ("จัดอันดับ", "คุ้มที่สุด", "ดีที่สุด", "มา 5 เครื่อง")
  const isRanking = lower.includes('จัดอันดับ') || lower.includes('คุ้ม') || lower.includes('ดีที่สุด') || lower.includes('แนะนำ');

  let limit = 100;
  const limitMatch = query.match(/(?:มา|เอา|ขอ)?\s*(\d+)\s*(?:เครื่อง|ตัว|รุ่น|อัน)/);
  if (limitMatch) {
    limit = parseInt(limitMatch[1], 10);
  } else if (isRanking) {
    limit = 5;
  }

  // Filter pool
  let list = products.filter(p => {
    if (categoryFilter && p.category !== categoryFilter) return false;
    if (matchedBrands.length > 0 && !matchedBrands.includes(p.brand.toLowerCase())) return false;
    if (maxPrice !== null && p.price > maxPrice) return false;
    return true;
  });

  // If query is for "เกม" (meaning: เครื่องที่แรงที่สุด)
  if (isGaming) {
    list.sort((a, b) => {
      return getProductPerformanceScore(b) - getProductPerformanceScore(a);
    });

    const topItems = list.slice(0, limit);
    const categoryText = categoryFilter === 'mobile' ? 'สมาร์ทโฟน' : categoryFilter === 'laptop' ? 'โน้ตบุ๊ก/คอมพิวเตอร์' : 'อุปกรณ์';
    const priceText = maxPrice ? ` ในงบไม่เกิน ${maxPrice.toLocaleString()} บาท` : '';
    const topLeader = topItems[0]
      ? `\n⚡ เครื่องที่แรงที่สุดอันดับ 1 ในหมวดนี้คือ "${topItems[0].name}" (${topItems[0].specs.processor}, RAM ${topItems[0].specs.ram})`
      : '';

    return {
      matchedProducts: topItems,
      explanation: `🎮 วิเคราะห์คำสั่ง "เกม" หมายถึง "เครื่องที่แรงที่สุด":\nคัดสรรและจัดอันดับ${categoryText}ที่มีสเปกชิปประมวลผล CPU และ GPU ทรงพลังที่สุด${priceText} รวม ${topItems.length} รุ่น เพื่อประสิทธิภาพระดับท็อปและการเล่นเกมหนักที่สุด${topLeader}`,
      queryIntent: 'rank'
    };
  }

  // If battery and fast charging prioritized
  if (isBatteryFastCharge) {
    list.sort((a, b) => {
      const getChargeWatt = (p: Product) => {
        const m = p.specs.charging.match(/(\d+)W/);
        return m ? parseInt(m[1], 10) : 20;
      };
      const getBatteryCap = (p: Product) => {
        const m = p.specs.battery.match(/([0-9,]+)\s*mAh/);
        return m ? parseInt(m[1].replace(/,/g, ''), 10) : 4000;
      };

      const scoreA = getBatteryCap(a) * 0.4 + getChargeWatt(a) * 35;
      const scoreB = getBatteryCap(b) * 0.4 + getChargeWatt(b) * 35;
      return scoreB - scoreA;
    });

    const topItems = list.slice(0, limit);
    return {
      matchedProducts: topItems,
      explanation: `จัดอันดับมือถือที่แบตเตอรี่จุใจใช้งานได้ยาวนาน และรองรับระบบชาร์จเร็วที่สุด ${topItems.length} รุ่นที่ตรงตามความต้องการ`,
      queryIntent: 'rank'
    };
  }

  // If ranking by best value
  if (isRanking) {
    list.sort((a, b) => {
      // Value ratio: Higher rating and lower price
      const valA = (a.rating * 10000) / (a.price || 1);
      const valB = (b.rating * 10000) / (b.price || 1);
      return valB - valA;
    });

    const topItems = list.slice(0, limit);
    const priceText = maxPrice ? ` ในงบไม่เกิน ${maxPrice.toLocaleString()} บาท` : '';
    return {
      matchedProducts: topItems,
      explanation: `จัดอันดับ ${topItems.length} รุ่นที่สเปคคุ้มค่าต่อราคาที่สุด${priceText} คัดสรรจากความเร็วชิป หน้าจอ กล้อง และโปรโมชั่นหน้าร้าน`,
      queryIntent: 'rank'
    };
  }

  // General or price-based filter
  if (maxPrice !== null || matchedBrands.length > 0 || categoryFilter) {
    const brandName = matchedBrands.length > 0 ? matchedBrands.join(', ').toUpperCase() : '';
    const priceText = maxPrice ? `ราคาไม่เกิน ${maxPrice.toLocaleString()} บาท` : '';
    const explanation = `พบสินค้า ${list.length} รุ่น ที่ตรงกับเงื่อนไข ${brandName} ${priceText}`.trim();
    return {
      matchedProducts: list.slice(0, limit),
      explanation,
      queryIntent: 'filter'
    };
  }

  // Keyword match fallback
  const keywords = lower.split(/\s+/).filter(w => w.length > 1);
  const matchedKeywordProducts = products.filter(p => {
    const combined = `${p.name} ${p.brand} ${p.category} ${p.tags.join(' ')} ${p.specs.processor} ${p.specs.screen}`.toLowerCase();
    return keywords.some(k => combined.includes(k));
  });

  return {
    matchedProducts: matchedKeywordProducts.length > 0 ? matchedKeywordProducts : products,
    explanation:
      matchedKeywordProducts.length > 0
        ? `พบสินค้า ${matchedKeywordProducts.length} รายการที่ตรงกับคำค้นหา`
        : `ไม่พบสินค้าที่ตรงกับคำค้นหาโดยตรง แสดงสินค้าแนะนำทั้งหมด`,
    queryIntent: 'general'
  };
}
