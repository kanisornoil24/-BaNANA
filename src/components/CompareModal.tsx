import React, { useState } from 'react';
import {
  X,
  Scale,
  Sparkles,
  Check,
  AlertCircle,
  Trophy,
  ArrowRight,
  Plus,
  Trash2
} from 'lucide-react';
import { Product } from '../types/product';
import { analyzeComparison } from '../utils/compareEngine';
import { CompareChartVisualizer } from './CompareChartVisualizer';

interface CompareModalProps {
  products: Product[];
  onClose: () => void;
  onRemoveProduct: (productId: string) => void;
  onClearAll: () => void;
  onSelectProductDetails: (product: Product) => void;
}

export const CompareModal: React.FC<CompareModalProps> = ({
  products,
  onClose,
  onRemoveProduct,
  onClearAll,
  onSelectProductDetails
}) => {
  if (products.length === 0) return null;

  const [onlyDifferences, setOnlyDifferences] = useState(false);
  const analysis = analyzeComparison(products);

  const specRows: Array<{
    title: string;
    getValue: (p: Product) => string | React.ReactNode;
    isKeySpec?: boolean;
  }> = [
    {
      title: 'ราคาขายหน้าร้าน',
      getValue: (p) => (
        <div>
          <span className="text-base sm:text-lg font-bold text-slate-900">
            ฿{p.price.toLocaleString()}
          </span>
          {p.originalPrice > p.price && (
            <span className="block text-[11px] text-slate-400 line-through">
              ฿{p.originalPrice.toLocaleString()}
            </span>
          )}
        </div>
      ),
      isKeySpec: true
    },
    {
      title: 'หน้าจอแสดงผล',
      getValue: (p) => p.specs.screen,
      isKeySpec: true
    },
    {
      title: 'ชิปประมวลผล (CPU)',
      getValue: (p) => p.specs.processor,
      isKeySpec: true
    },
    {
      title: 'RAM / ความจุ ROM',
      getValue: (p) => `RAM ${p.specs.ram} / ROM ${p.specs.storage}`,
      isKeySpec: true
    },
    {
      title: 'กล้องหลัง',
      getValue: (p) => p.specs.rearCamera,
      isKeySpec: true
    },
    {
      title: 'กล้องหน้า',
      getValue: (p) => p.specs.frontCamera
    },
    {
      title: 'แบตเตอรี่',
      getValue: (p) => p.specs.battery,
      isKeySpec: true
    },
    {
      title: 'ระบบชาร์จไว',
      getValue: (p) => p.specs.charging,
      isKeySpec: true
    },
    {
      title: 'ระบบปฏิบัติการ',
      getValue: (p) => p.specs.os
    },
    {
      title: 'น้ำหนัก & บอดี้',
      getValue: (p) => p.specs.weight
    },
    {
      title: 'การเชื่อมต่อ',
      getValue: (p) => p.specs.connectivity
    },
    {
      title: 'ของแถมพิเศษ',
      getValue: (p) => (
        <ul className="list-disc pl-4 space-y-1 text-slate-700 text-xs">
          {p.freeGifts.map((g, i) => (
            <li key={i}>{g}</li>
          ))}
        </ul>
      )
    },
    {
      title: 'โปรโมชั่นที่ร้าน',
      getValue: (p) => (
        <ul className="list-disc pl-4 space-y-1 text-slate-700 text-xs">
          {p.promotions.map((pr, i) => (
            <li key={i}>{pr}</li>
          ))}
        </ul>
      )
    },
    {
      title: 'การรับประกัน',
      getValue: (p) => p.warranty
    },
    {
      title: 'บริการหลังการขาย',
      getValue: (p) => p.afterSales
    }
  ];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 animate-fadeIn">
      <div className="relative w-full max-w-6xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[92vh]">
        {/* Modal Top Header */}
        <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between bg-slate-50">
          <div className="flex items-center space-x-2.5">
            <div className="p-2 rounded-xl bg-yellow-400 text-slate-950 font-bold shadow-xs">
              <Scale className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-base sm:text-lg font-bold text-slate-900">
                ตารางเปรียบเทียบสเปกเชิงลึก (ตรงรายการต่อรายการ)
              </h2>
              <p className="text-xs text-slate-500">
                เปรียบเทียบสินค้า {products.length} รายการ พร้อมวิเคราะห์จุดเด่นและจุดด้อยอัตโนมัติ
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <button
              onClick={onClearAll}
              className="text-xs text-rose-600 hover:text-rose-700 font-semibold px-2 py-1 rounded-lg hover:bg-rose-50 transition-colors"
            >
              ล้างทั้งหมด
            </button>
            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-slate-700 rounded-full hover:bg-slate-200/60 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6">
          {/* Section 0: Interactive Radar / Bar Chart Visualizer */}
          <CompareChartVisualizer products={products} />

          {/* Section 1: Automated Pros & Cons Analysis Cards (จุดเด่น - จุดด้อยกว่า) */}
          <div className="p-4 sm:p-5 bg-linear-to-br from-yellow-50/90 via-amber-50/50 to-slate-50 rounded-2xl border border-yellow-200">
            <div className="flex items-center gap-2 mb-3">
              <Sparkles className="w-4 h-4 text-yellow-600" />
              <h3 className="font-bold text-sm sm:text-base text-slate-900">
                สรุปการวิเคราะห์เปรียบเทียบ: จุดเด่น vs จุดด้อย
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {analysis.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-xl p-4 border border-slate-200 shadow-xs flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between pb-2 border-b border-slate-100 mb-2.5">
                      <span className="font-bold text-sm text-slate-900 truncate">
                        {item.productName}
                      </span>
                    </div>

                    {/* Best For Tag */}
                    <div className="mb-3 px-2.5 py-1 rounded-lg bg-yellow-100 text-amber-950 border border-yellow-300/60 text-[11px] font-bold flex items-center gap-1.5">
                      <Trophy className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                      <span>{item.bestFor}</span>
                    </div>

                    {/* Pros (จุดเด่นกว่า) */}
                    <div className="space-y-1.5 mb-3">
                      <span className="text-[11px] font-bold text-emerald-700 uppercase tracking-wider flex items-center gap-1">
                        <Check className="w-3.5 h-3.5 text-emerald-600" /> จุดเด่นกว่า
                      </span>
                      <ul className="space-y-1 pl-4 text-xs text-slate-700 list-disc">
                        {item.pros.map((pro, pIdx) => (
                          <li key={pIdx} className="leading-snug">{pro}</li>
                        ))}
                      </ul>
                    </div>

                    {/* Cons (จุดด้อยกว่า / ข้อจำกัด) */}
                    {item.cons.length > 0 && (
                      <div className="space-y-1.5">
                        <span className="text-[11px] font-bold text-amber-700 uppercase tracking-wider flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5 text-amber-600" /> จุดที่ด้อยกว่า / ข้อสังเกต
                        </span>
                        <ul className="space-y-1 pl-4 text-xs text-slate-700 list-disc">
                          {item.cons.map((con, cIdx) => (
                            <li key={cIdx} className="leading-snug">{con}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section 2: Side-by-Side Detailed Matrix Table ("ตรง รายการต่อรายการ") */}
          <div className="overflow-x-auto border border-slate-200 rounded-2xl shadow-xs">
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              {/* Product Header Row */}
              <thead>
                <tr className="bg-slate-100 border-b border-slate-200">
                  <th className="p-3 sm:p-4 w-48 font-bold text-slate-700 text-xs uppercase tracking-wider shrink-0 bg-slate-100/90 sticky left-0 z-10 backdrop-blur-xs">
                    รายการสเปก
                  </th>
                  {products.map((p) => (
                    <th key={p.id} className="p-3 sm:p-4 min-w-[220px] max-w-[280px] align-top bg-white">
                      <div className="flex flex-col items-center text-center">
                        <div className="w-24 h-24 mb-2 flex items-center justify-center p-2 bg-slate-50 rounded-xl border border-slate-100">
                          <img
                            src={p.defaultImage}
                            alt={p.name}
                            className="max-h-full max-w-full object-contain"
                          />
                        </div>
                        <h4
                          onClick={() => onSelectProductDetails(p)}
                          className="font-bold text-slate-900 text-sm hover:text-amber-600 cursor-pointer"
                        >
                          {p.name}
                        </h4>
                        <span className="text-xs text-amber-600 font-bold uppercase mt-0.5">
                          {p.brand}
                        </span>

                        <button
                          onClick={() => onRemoveProduct(p.id)}
                          className="mt-2 text-[11px] text-rose-500 hover:text-rose-700 flex items-center gap-1"
                        >
                          <Trash2 className="w-3 h-3" />
                          <span>นำออก</span>
                        </button>
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>

              {/* Specs Rows */}
              <tbody className="divide-y divide-slate-200">
                {specRows.map((row, rIdx) => (
                  <tr
                    key={rIdx}
                    className={`hover:bg-slate-50/80 transition-colors ${
                      row.isKeySpec ? 'bg-yellow-50/40 font-medium' : ''
                    }`}
                  >
                    <td className="p-3 sm:p-4 font-semibold text-slate-700 bg-slate-50/90 sticky left-0 z-10 backdrop-blur-xs border-r border-slate-200">
                      {row.title}
                    </td>
                    {products.map((p) => (
                      <td key={p.id} className="p-3 sm:p-4 align-top leading-relaxed text-slate-800">
                        {row.getValue(p)}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-3.5 border-t border-slate-100 bg-slate-50 flex items-center justify-between">
          <span className="text-xs text-slate-500">
            * สเปกและราคาอ้างอิงจากฐานข้อมูลร้านค้าจริง อัปเดตล่าสุด
          </span>
          <button
            onClick={onClose}
            className="px-5 py-2 bg-yellow-400 hover:bg-yellow-300 text-slate-950 font-bold rounded-xl text-xs sm:text-sm shadow-xs transition-colors"
          >
            กลับสู่หน้าร้าน
          </button>
        </div>
      </div>
    </div>
  );
};
