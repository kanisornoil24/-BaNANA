import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig, Plugin } from 'vite';
import dotenv from 'dotenv';
import { GoogleGenAI } from '@google/genai';

dotenv.config();

function geminiApiPlugin(): Plugin {
  return {
    name: 'gemini-api-plugin',
    configureServer(server) {
      server.middlewares.use('/api/ai-search', async (req, res) => {
        if (req.method !== 'POST') {
          res.statusCode = 405;
          res.end(JSON.stringify({ error: 'Method Not Allowed' }));
          return;
        }

        let body = '';
        req.on('data', (chunk) => {
          body += chunk;
        });

        req.on('end', async () => {
          try {
            const { query, products } = JSON.parse(body || '{}');
            const apiKey = process.env.GEMINI_API_KEY;

            if (!apiKey) {
              res.setHeader('Content-Type', 'application/json');
              res.end(
                JSON.stringify({
                  error: 'GEMINI_API_KEY is not configured',
                  matchedIds: [],
                  intent: 'general'
                })
              );
              return;
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

กฎสำคัญของระบบ (ต้องปฏิบัติตามอย่างเคร่งครัด):
- หากคำค้นหามีคำว่า "เกม", "เล่นเกม", "เกมมิ่ง", "gaming", "เกมส์" หมายถึง "เครื่องที่แรงที่สุด" ทันที!
  ให้คัดกรองสินค้าตามเงื่อนไขงบประมาณหรือหมวดหมู่ที่ผู้ใช้ระบุ (ถ้ามี) แล้วจัดอันดับตาม "ความแรงของเครื่องมากที่สุด" เรียงจาก CPU/GPU สเปกฮาร์ดแวร์แรงที่สุด RAM สูงสุด และหน้าจอ Refresh Rate ลื่นที่สุดลงมา พร้อมอธิบายสเปกความแรงในการเล่นเกมให้ชัดเจน
- หากเป็นคำถามหามือถือแบรนด์หรือราคาไม่เกินกำหนด ให้คัดกรองสินค้าที่ตรงเงื่อนไข
- หากเป็นการจัดอันดับ เช่น "จัดอันดับมือถือ ราคา ไม่เกิน 15,000 บาท ที่สเปคคุ้มที่สุด มา 5 เครื่อง" ให้จัดอันดับตามความคุ้มค่าของสเปกและราคา เรียงจากดีที่สุดลงมา
- หากเป็นการเน้นแบตเตอรี่และชาร์จเร็ว ให้เลือกสินค้าที่มีแบตเตอรี่ความจุสูงและระบบชาร์จไว Watts สูง
- หากเป็นการเปรียบเทียบ เช่น "เปรียบเทียบ มือถือ realme 16 pro กับ realme 16 pro+ บอกข้อที่แตกต่างกันได้" ให้ระบุ comparisonIds ทั้ง 2 ชิ้น และเขียนอธิบายข้อแตกต่าง จุดเด่น จุดด้อยของแต่ละรุ่นอย่างละเอียด ชัดเจน ภาษาไทยเข้าใจง่าย

ตอบเป็น JSON รูปแบบนี้เท่านั้น:
{
  "matchedIds": ["id1", "id2"],
  "intent": "filter" หรือ "rank" หรือ "compare" หรือ "general",
  "comparisonIds": ["id1", "id2"],
  "explanation": "คำอธิบายและคำแนะนำภาษาไทยที่เป็นธรรมชาติ สุภาพ เจาะจงสเปก ความแรง และราคา"
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
            res.end(textOutput);
          } catch (err: any) {
            console.error('Gemini API Error in Vite middleware:', err);
            res.statusCode = 500;
            res.setHeader('Content-Type', 'application/json');
            res.end(
              JSON.stringify({
                error: err.message || 'AI search error',
                matchedIds: [],
                intent: 'general'
              })
            );
          }
        });
      });
    }
  };
}

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss(), geminiApiPlugin()],
    resolve: {
      alias: {
        '@': path.resolve(import.meta.dirname || '.', '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify—file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});

