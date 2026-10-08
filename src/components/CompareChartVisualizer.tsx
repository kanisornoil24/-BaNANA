import React, { useState } from 'react';
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from 'recharts';
import { Product } from '../types/product';
import { BarChart3, Radar as RadarIcon, Info } from 'lucide-react';

interface CompareChartVisualizerProps {
  products: Product[];
}

const PALETTE = [
  { stroke: '#eab308', fill: '#eab308', bg: 'bg-amber-500' }, // Gold / Yellow
  { stroke: '#3b82f6', fill: '#3b82f6', bg: 'bg-blue-500' },  // Blue
  { stroke: '#10b981', fill: '#10b981', bg: 'bg-emerald-500' },// Green
  { stroke: '#8b5cf6', fill: '#8b5cf6', bg: 'bg-purple-500' } // Purple
];

function calculateScores(p: Product, allProducts: Product[]) {
  // 1. Performance score (0-100)
  let perf = 70;
  const proc = p.specs.processor.toLowerCase();
  if (proc.includes('m3') || proc.includes('m4') || proc.includes('m2') || proc.includes('snapdragon 8 gen 3') || proc.includes('a17') || proc.includes('a18') || proc.includes('dimensity 9300')) {
    perf = 95;
  } else if (proc.includes('snapdragon 8 gen 2') || proc.includes('dimensity 8300') || proc.includes('core ultra') || proc.includes('i7') || proc.includes('ryzen 7')) {
    perf = 88;
  } else if (proc.includes('snapdragon 7') || proc.includes('i5') || proc.includes('ryzen 5') || proc.includes('dimensity 7200')) {
    perf = 78;
  } else {
    perf = 65;
  }

  // Bonus for RAM
  const ramMatch = p.specs.ram.match(/(\d+)\s*GB/i);
  if (ramMatch) {
    const ram = parseInt(ramMatch[1], 10);
    if (ram >= 16) perf = Math.min(100, perf + 5);
    else if (ram >= 12) perf = Math.min(100, perf + 3);
  }

  // 2. Battery & Charging score (0-100)
  const battMatch = p.specs.battery.match(/([0-9,]+)\s*mAh/);
  const battVal = battMatch ? parseInt(battMatch[1].replace(/,/g, ''), 10) : 4500;
  const chargeMatch = p.specs.charging.match(/(\d+)W/);
  const chargeVal = chargeMatch ? parseInt(chargeMatch[1], 10) : 25;

  let batteryScore = 50;
  if (p.category === 'laptop') {
    batteryScore = battVal > 70 ? 88 : 75;
  } else {
    const normBatt = Math.min(100, Math.max(50, (battVal / 5500) * 85));
    const normCharge = Math.min(100, Math.max(40, (chargeVal / 100) * 100));
    batteryScore = Math.round(normBatt * 0.6 + normCharge * 0.4);
  }

  // 3. Camera score (0-100)
  let cameraScore = 60;
  const cam = p.specs.rearCamera.toLowerCase();
  if (cam.includes('periscope') || cam.includes('200mp') || cam.includes('leica') || cam.includes('hasselblad')) {
    cameraScore = 95;
  } else if (cam.includes('50mp') || cam.includes('ois') || cam.includes('zoom')) {
    cameraScore = 85;
  } else if (cam.includes('108mp') || cam.includes('64mp')) {
    cameraScore = 78;
  } else if (p.category === 'laptop') {
    cameraScore = 65; // Laptops usually have webcams
  } else {
    cameraScore = 70;
  }

  // 4. Screen score (0-100)
  let screenScore = 75;
  const scr = p.specs.screen.toLowerCase();
  if (scr.includes('oled') || scr.includes('amoled') || scr.includes('120hz') || scr.includes('144hz') || scr.includes('retina')) {
    screenScore = 90;
    if (scr.includes('144hz') || scr.includes('ltpo') || scr.includes('3000 nits') || scr.includes('4000 nits')) {
      screenScore = 96;
    }
  }

  // 5. Value for Money / Price Score (Relative to group)
  // Higher score = better price/performance value
  const minPrice = Math.min(...allProducts.map(x => x.price));
  const maxPrice = Math.max(...allProducts.map(x => x.price));
  let valueScore = 80;
  if (maxPrice > minPrice) {
    // Relative inverted price scale (cheaper scores higher)
    const ratio = (maxPrice - p.price) / (maxPrice - minPrice);
    valueScore = Math.round(60 + ratio * 38);
  } else {
    valueScore = 85;
  }

  return {
    performance: perf,
    battery: batteryScore,
    camera: cameraScore,
    screen: screenScore,
    value: valueScore,
    rawPrice: p.price
  };
}

export const CompareChartVisualizer: React.FC<CompareChartVisualizerProps> = ({ products }) => {
  const [chartType, setChartType] = useState<'radar' | 'bar'>('radar');

  if (products.length === 0) return null;

  // Build product scores
  const productScores = products.map((p, idx) => ({
    product: p,
    scores: calculateScores(p, products),
    color: PALETTE[idx % PALETTE.length]
  }));

  // Radar Chart Data format: array of criteria with each product's value
  const radarData = [
    {
      subject: 'ความแรง CPU & RAM',
      fullMark: 100,
      ...Object.fromEntries(productScores.map((ps) => [ps.product.id, ps.scores.performance]))
    },
    {
      subject: 'แบต & ชาร์จไว',
      fullMark: 100,
      ...Object.fromEntries(productScores.map((ps) => [ps.product.id, ps.scores.battery]))
    },
    {
      subject: 'คุณภาพกล้องถ่ายรูป',
      fullMark: 100,
      ...Object.fromEntries(productScores.map((ps) => [ps.product.id, ps.scores.camera]))
    },
    {
      subject: 'หน้าจอ & การแสดงผล',
      fullMark: 100,
      ...Object.fromEntries(productScores.map((ps) => [ps.product.id, ps.scores.screen]))
    },
    {
      subject: 'ความคุ้มค่าต่อราคา',
      fullMark: 100,
      ...Object.fromEntries(productScores.map((ps) => [ps.product.id, ps.scores.value]))
    }
  ];

  // Bar Chart Data format: category comparison (Scores & Price comparison)
  const barScoreData = [
    {
      metric: 'ประสิทธิภาพ (CPU/RAM)',
      ...Object.fromEntries(productScores.map((ps) => [ps.product.name, ps.scores.performance]))
    },
    {
      metric: 'แบตเตอรี่ & ชาร์จไว',
      ...Object.fromEntries(productScores.map((ps) => [ps.product.name, ps.scores.battery]))
    },
    {
      metric: 'คุณภาพกล้อง',
      ...Object.fromEntries(productScores.map((ps) => [ps.product.name, ps.scores.camera]))
    },
    {
      metric: 'หน้าจอแสดงผล',
      ...Object.fromEntries(productScores.map((ps) => [ps.product.name, ps.scores.screen]))
    },
    {
      metric: 'ดัชนีความคุ้มค่าราคา',
      ...Object.fromEntries(productScores.map((ps) => [ps.product.name, ps.scores.value]))
    }
  ];

  return (
    <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200 shadow-xs space-y-4">
      {/* Chart Header & Controls */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-100">
        <div>
          <div className="flex items-center gap-2">
            <span className="p-1.5 rounded-lg bg-yellow-100 text-yellow-800">
              {chartType === 'radar' ? (
                <RadarIcon className="w-4 h-4 text-amber-700" />
              ) : (
                <BarChart3 className="w-4 h-4 text-amber-700" />
              )}
            </span>
            <h3 className="font-bold text-slate-900 text-sm sm:text-base">
              กราฟิกเปรียบเทียบสเปกเชิงลึก (Spec Visual Comparison)
            </h3>
          </div>
          <p className="text-xs text-slate-500 mt-0.5">
            ประเมินคะแนนเชิงเปรียบเทียบ 5 มิติ: ประสิทธิภาพ, แบตเตอรี่, กล้อง, หน้าจอ และความคุ้มค่า
          </p>
        </div>

        {/* Toggle Chart Type */}
        <div className="flex items-center bg-slate-100 p-1 rounded-xl self-start sm:self-auto border border-slate-200/80">
          <button
            type="button"
            onClick={() => setChartType('radar')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              chartType === 'radar'
                ? 'bg-white text-slate-900 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <RadarIcon className="w-3.5 h-3.5" />
            <span>Radar Chart (เรดาร์สเปก)</span>
          </button>
          <button
            type="button"
            onClick={() => setChartType('bar')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              chartType === 'bar'
                ? 'bg-white text-slate-900 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <BarChart3 className="w-3.5 h-3.5" />
            <span>Bar Chart (เปรียบเทียบคะแนน)</span>
          </button>
        </div>
      </div>

      {/* Legend Badge list */}
      <div className="flex flex-wrap items-center gap-3">
        {productScores.map((ps, idx) => (
          <div
            key={ps.product.id}
            className="flex items-center gap-2 px-2.5 py-1 rounded-lg border border-slate-200 bg-slate-50 text-xs text-slate-700 font-medium"
          >
            <span
              className="w-3 h-3 rounded-full shrink-0"
              style={{ backgroundColor: ps.color.stroke }}
            />
            <span className="truncate max-w-[160px] sm:max-w-[220px]">
              {ps.product.name}
            </span>
            <span className="text-slate-400">|</span>
            <span className="font-bold text-slate-900">
              ฿{ps.product.price.toLocaleString()}
            </span>
          </div>
        ))}
      </div>

      {/* Chart Canvas */}
      <div className="w-full h-72 sm:h-80 flex items-center justify-center pt-2">
        {chartType === 'radar' ? (
          <ResponsiveContainer width="100%" height="100%">
            <RadarChart cx="50%" cy="50%" outerRadius="75%" data={radarData}>
              <PolarGrid stroke="#e2e8f0" strokeDasharray="3 3" />
              <PolarAngleAxis
                dataKey="subject"
                tick={{ fill: '#334155', fontSize: 11, fontWeight: 600 }}
              />
              <PolarRadiusAxis
                angle={30}
                domain={[40, 100]}
                tick={{ fill: '#94a3b8', fontSize: 10 }}
              />
              {productScores.map((ps) => (
                <Radar
                  key={ps.product.id}
                  name={ps.product.name}
                  dataKey={ps.product.id}
                  stroke={ps.color.stroke}
                  fill={ps.color.fill}
                  fillOpacity={0.25}
                  strokeWidth={2}
                />
              ))}
              <Tooltip
                contentStyle={{
                  backgroundColor: '#0f172a',
                  color: '#ffffff',
                  borderRadius: '12px',
                  border: 'none',
                  fontSize: '12px',
                  boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)'
                }}
                formatter={(val: any, name: any) => {
                  const prod = products.find((p) => p.id === name || p.name === name);
                  return [`${val} คะแนน`, prod?.name || name];
                }}
              />
            </RadarChart>
          </ResponsiveContainer>
        ) : (
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={barScoreData}
              margin={{ top: 15, right: 10, left: -20, bottom: 25 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" vertical={false} />
              <XAxis
                dataKey="metric"
                tick={{ fill: '#475569', fontSize: 11 }}
                interval={0}
                angle={-10}
                textAnchor="end"
              />
              <YAxis domain={[40, 100]} tick={{ fill: '#94a3b8', fontSize: 10 }} />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#0f172a',
                  color: '#ffffff',
                  borderRadius: '12px',
                  border: 'none',
                  fontSize: '12px'
                }}
                formatter={(val: any) => [`${val} คะแนน`, '']}
              />
              <Legend
                verticalAlign="top"
                wrapperStyle={{ paddingBottom: '10px', fontSize: '11px' }}
              />
              {productScores.map((ps) => (
                <Bar
                  key={ps.product.id}
                  dataKey={ps.product.name}
                  fill={ps.color.fill}
                  radius={[4, 4, 0, 0]}
                  maxBarSize={45}
                />
              ))}
            </BarChart>
          </ResponsiveContainer>
        )}
      </div>

      {/* Mini Insight info */}
      <div className="flex items-start gap-2 p-3 bg-amber-50/60 rounded-xl border border-amber-200/60 text-xs text-amber-900">
        <Info className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
        <div>
          <span className="font-bold">เคล็ดลับการอ่านกราฟ:</span> ยิ่งเส้นกราฟเรดาร์แผ่ขยายออกด้านนอกมากเท่าใด แสดงว่ารุ่นนั้นมีสเปกที่โดดเด่นในด้านนั้นๆ มากขึ้น คะแนนคำนวณจากชิปประมวลผล, ขนาดแบตเตอรี่, ความเร็วชาร์จไว, ประเภทจอ และระดับราคาเมื่อเทียบกับรุ่นที่นำมาเปรียบเทียบ
        </div>
      </div>
    </div>
  );
};
