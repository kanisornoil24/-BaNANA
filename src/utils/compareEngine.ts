import { CompareAnalysis, Product } from '../types/product';

export function analyzeComparison(products: Product[]): CompareAnalysis[] {
  if (products.length < 2) {
    return products.map(p => ({
      productId: p.id,
      productName: p.name,
      pros: p.highlightPoints,
      cons: p.limitations,
      bestFor: 'เหมาะสำหรับการใช้งานทั่วไป'
    }));
  }

  return products.map((current, index) => {
    const others = products.filter((_, i) => i !== index);
    const pros: string[] = [];
    const cons: string[] = [];

    // 1. Price comparison
    const minPrice = Math.min(...products.map(p => p.price));
    if (current.price === minPrice) {
      pros.push(`ราคาประหยัดที่สุดในกลุ่ม (฿${current.price.toLocaleString()}) คุ้มค่าเงิน`);
    } else {
      const diff = current.price - minPrice;
      cons.push(`ราคาสูงกว่ารุ่นเริ่มต้น ฿${diff.toLocaleString()} บาท`);
    }

    // 2. Battery & Charging
    const currentBatt = parseBattery(current.specs.battery);
    const currentCharge = parseCharging(current.specs.charging);
    const maxBatt = Math.max(...products.map(p => parseBattery(p.specs.battery)));
    const maxCharge = Math.max(...products.map(p => parseCharging(p.specs.charging)));

    if (currentBatt >= maxBatt && currentBatt > 4500) {
      pros.push(`แบตเตอรี่จุใจที่สุด (${current.specs.battery}) ใช้งานได้ยาวนานกว่า`);
    }
    if (currentCharge >= maxCharge && currentCharge > 30) {
      pros.push(`ระบบชาร์จเร็วสูงสุด (${current.specs.charging}) ชาร์จแบตเต็มไวกว่าอย่างเห็นได้ชัด`);
    } else if (currentCharge < 35 && maxCharge >= 67) {
      cons.push(`ระบบชาร์จช้ากว่ารุ่นอื่น (${current.specs.charging}) ใช้เวลาชาร์จนานกว่า`);
    }

    // 3. Camera Analysis
    if (current.specs.rearCamera.includes('Periscope') || current.specs.rearCamera.includes('Leica') || current.specs.rearCamera.includes('200MP')) {
      pros.push(`ระบบกล้องถ่ายภาพคุณภาพระดับโปร มีเลนส์ซูมพิเศษหรือเซนเซอร์ขนาดใหญ่`);
    } else if (others.some(o => o.specs.rearCamera.includes('Periscope'))) {
      cons.push(`ไม่มีเลนส์ซูม Periscope ระยะไกลสำหรับถ่ายภาพบุคคลและคอนเสิร์ต`);
    }

    // 4. Storage & RAM
    const currentStorage = parseStorage(current.specs.storage);
    const maxStorage = Math.max(...products.map(p => parseStorage(p.specs.storage)));
    if (currentStorage >= maxStorage && currentStorage >= 512) {
      pros.push(`ความจุหน่วยความจำสูงมาก (${current.specs.storage}) ถ่ายวิดีโอและลงแอปได้จุใจ`);
    }

    // Add unique highlights from metadata
    current.highlightPoints.slice(0, 2).forEach(h => {
      if (!pros.some(p => p.includes(h.slice(0, 10)))) {
        pros.push(h);
      }
    });

    current.limitations.slice(0, 2).forEach(l => {
      if (!cons.some(c => c.includes(l.slice(0, 10)))) {
        cons.push(l);
      }
    });

    // Best For summary
    let bestFor = 'ผู้ใช้งานที่ต้องการความสมดุลระหว่างฟังก์ชันและราคา';
    if (current.price === minPrice) {
      bestFor = 'ผู้ที่เน้นความคุ้มค่าสูงสุด ได้ฟังก์ชันครบในงบประมาณจำกัด';
    } else if (current.specs.rearCamera.includes('Periscope') || current.specs.rearCamera.includes('200MP') || current.specs.rearCamera.includes('Leica')) {
      bestFor = 'สายถ่ายภาพ คอนเทนต์ครีเอเตอร์ และผู้ชื่นชอบการซูมถ่ายระยะไกล';
    } else if (currentCharge >= 80 || currentBatt >= 5500) {
      bestFor = 'ผู้ใช้งานหนัก ไรเดอร์ นักเดินทาง ที่เน้นแบตอึดและชาร์จเร็วทันใจ';
    } else if (current.category === 'laptop') {
      bestFor = 'ผู้ที่ต้องการประสิทธิภาพคอมพิวเตอร์ระดับสูงสำหรับการทำงานหรือเล่นเกม';
    }

    return {
      productId: current.id,
      productName: current.name,
      pros,
      cons,
      bestFor
    };
  });
}

function parseBattery(batteryStr: string): number {
  const match = batteryStr.match(/([0-9,]+)\s*mAh/);
  return match ? parseInt(match[1].replace(/,/g, ''), 10) : 4000;
}

function parseCharging(chargingStr: string): number {
  const match = chargingStr.match(/(\d+)W/);
  return match ? parseInt(match[1], 10) : 25;
}

function parseStorage(storageStr: string): number {
  if (storageStr.includes('1TB')) return 1024;
  if (storageStr.includes('512GB')) return 512;
  if (storageStr.includes('256GB')) return 256;
  if (storageStr.includes('128GB')) return 128;
  return 64;
}
