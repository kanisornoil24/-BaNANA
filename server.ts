import express from 'express';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import { GoogleGenAI } from '@google/genai';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// API route for AI natural language search proxy
app.post('/api/ai-search', async (req, res) => {
  try {
    const { query, products } = req.body || {};
    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
      return res.status(200).json({
        error: 'GEMINI_API_KEY is not configured',
        matchedIds: [],
        intent: 'general'
      });
    }

    const ai = new GoogleGenAI({
      apiKey,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build'
        }
      }
    });

    const prompt = `ผู้ใช้งานค้นหาด้วยภาษาพูดในร้านขายสินค้า IT: "${query}"

รายการสินค้าที่มีอยู่ในร้าน:
${JSON.stringify(products, null, 2)}

จงวิเคราะห์คำค้นหาภาษาพูดนี้ตามนโยบายของร้านอย่างเคร่งครัด:
- **กฎสำคัญสูงสุด:** หากคำค้นหาหรือคำสั่งมีคำว่า "เกม", "เกมมิ่ง", "เล่นเกม", "game", "gaming", "เกมส์" ให้เข้าใจตรงกันทันทีว่าหมายถึง **"เครื่องที่แรงที่สุด"** (เครื่องที่มีชิปประมวลผล CPU/GPU ความเร็วสูงสุด ประสิทธิภาพกราฟิกและพลังความแรงสูงที่สุด เช่น โน้ตบุ๊ก Intel Core i9 + RTX 4070 หรือ สมาร์ทโฟนชิป A18 Pro, Snapdragon 8 Gen 3, Dimensity 9300+) โดยต้องจัดอันดับเรียงลำดับสินค้าจาก "เครื่องที่แรงที่สุด" ลงมาเป็นอันดับ 1 เสมอ และเขียนใน explanation ว่า: "วิเคราะห์คำสั่ง 'เกม' หมายถึง 'เครื่องที่แรงที่สุด' ในร้าน..."
- หากเป็นคำถามหามือถือแบรนด์หรือราคาไม่เกินกำหนด ให้คัดกรองสินค้าที่ตรงเงื่อนไข
- หากเป็นการจัดอันดับ เช่น "จัดอันดับมือถือ ราคา ไม่เกิน 15,000 บาท ที่สเปคคุ้มที่สุด มา 5 เครื่อง" ให้จัดอันดับตามความคุ้มค่าของสเปกและราคา เรียงจากดีที่สุดลงมา
- หากเป็นการเน้นแบตเตอรี่และชาร์จเร็ว ให้เลือกสินค้าที่มีแบตเตอรี่ความจุสูงและระบบชาร์จไว Watts สูง
- หากเป็นการเปรียบเทียบ เช่น "เปรียบเทียบ มือถือ realme 16 pro กับ realme 16 pro+ บอกข้อที่แตกต่างกันได้" ให้ระบุ comparisonIds ทั้ง 2 ชิ้น และเขียนอธิบายข้อแตกต่าง จุดเด่น จุดด้อยของแต่ละรุ่นอย่างละเอียด ชัดเจน ภาษาไทยเข้าใจง่าย

ตอบเป็น JSON รูปแบบนี้เท่านั้น:
{
  "matchedIds": ["id1", "id2"],
  "intent": "filter" หรือ "rank" หรือ "compare" หรือ "general",
  "comparisonIds": ["id1", "id2"],
  "explanation": "คำอธิบายและคำแนะนำภาษาไทยที่เป็นธรรมชาติ สุภาพ เจาะจงสเปกและราคา"
}`;

    const response = await ai.models.generateContent({
      model: 'gemini-3.8-flash',
      contents: prompt,
      config: {
        responseMimeType: 'application/json',
        systemInstruction:
          'You are an expert IT and mobile smartphone specialist for an IT retail store in Thailand. You always answer in polite, clear Thai language with precise technical insights.',
        temperature: 0.3
      }
    });

    const textOutput = response.text || '{}';
    res.setHeader('Content-Type', 'application/json');
    res.send(textOutput);
  } catch (err: any) {
    console.error('Server AI search error:', err);
    res.status(500).json({
      error: err.message || 'Internal AI error',
      matchedIds: [],
      intent: 'general'
    });
  }
});

// Serve frontend static build
const distPath = path.resolve(process.cwd(), 'dist');
app.use(express.static(distPath));

app.get('*', (req, res) => {
  const indexPath = path.join(distPath, 'index.html');
  if (fs.existsSync(indexPath)) {
    res.sendFile(indexPath);
  } else {
    res.send('IT SmartFinder backend is running.');
  }
});

app.listen(PORT, () => {
  console.log(`IT SmartFinder server running on port ${PORT}`);
});
