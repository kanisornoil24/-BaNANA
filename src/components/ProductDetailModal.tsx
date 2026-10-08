import React, { useState } from 'react';
import {
  X,
  Star,
  Check,
  ZoomIn,
  ZoomOut,
  Gift,
  Tag,
  ShieldCheck,
  Headphones,
  Scale,
  Sparkles,
  Info,
  Maximize2
} from 'lucide-react';
import { Product, ProductColor } from '../types/product';

interface ProductDetailModalProps {
  product: Product | null;
  initialColor?: ProductColor;
  onClose: () => void;
  onToggleCompare: (product: Product) => void;
  isCompared: boolean;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  initialColor,
  onClose,
  onToggleCompare,
  isCompared
}) => {
  if (!product) return null;

  const [selectedColor, setSelectedColor] = useState<ProductColor>(
    initialColor || product.colors[0]
  );
  const [isColorCoating, setIsColorCoating] = useState(false);
  const [isZoomed, setIsZoomed] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
  const [activeTab, setActiveTab] = useState<'specs' | 'promotions' | 'gifts' | 'warranty'>('specs');

  const handleColorChange = (newColor: ProductColor) => {
    if (newColor.name === selectedColor.name) return;
    setIsColorCoating(true);
    setSelectedColor(newColor);
    setTimeout(() => {
      setIsColorCoating(false);
    }, 700);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isZoomed) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePos({ x, y });
  };

  const displayImage = selectedColor.image || product.defaultImage;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 animate-fadeIn">
      <div className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[92vh]">
        {/* Top Header */}
        <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between bg-slate-50/80">
          <div className="flex items-center space-x-2">
            <span className="px-2.5 py-1 rounded-md text-xs font-bold uppercase bg-yellow-100 text-amber-900 border border-yellow-300/80">
              {product.brand}
            </span>
            <span className="text-xs text-slate-500">• {product.category === 'mobile' ? 'สมาร์ทโฟน' : product.category === 'laptop' ? 'แล็ปท็อป/คอม' : 'แท็บเล็ต'}</span>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={() => onToggleCompare(product)}
              className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                isCompared
                  ? 'bg-slate-900 text-yellow-400 shadow-xs'
                  : 'bg-yellow-400 hover:bg-yellow-300 text-slate-950 shadow-xs'
              }`}
            >
              <Scale className="w-3.5 h-3.5" />
              <span>{isCompared ? 'อยู่ในตารางเปรียบเทียบ' : 'เพิ่มเปรียบเทียบ'}</span>
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
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Left Column: Interactive Image Stage with Color Coating Effect & Zoom */}
          <div className="md:col-span-5 flex flex-col items-center">
            <div
              onMouseMove={handleMouseMove}
              onClick={() => setIsZoomed(!isZoomed)}
              className="relative w-full h-72 sm:h-80 bg-linear-to-b from-slate-100 to-slate-50 rounded-2xl border border-slate-200/80 flex items-center justify-center p-4 overflow-hidden cursor-crosshair group shadow-inner"
            >
              {/* Product Image with Zoom Lens support */}
              <div
                className="w-full h-full flex items-center justify-center transition-all duration-300"
                style={
                  isZoomed
                    ? {
                        transform: 'scale(2.2)',
                        transformOrigin: `${mousePos.x}% ${mousePos.y}%`
                      }
                    : {}
                }
              >
                <img
                  src={displayImage}
                  alt={product.name}
                  className="max-h-full max-w-full object-contain pointer-events-none"
                />
              </div>

              {/* Smooth Color Coating Overlay Transition */}
              {isColorCoating && (
                <div
                  className="absolute inset-0 pointer-events-none transition-all duration-700 ease-in-out mix-blend-color animate-colorCoat"
                  style={{
                    backgroundColor: selectedColor.overlayHex || selectedColor.hex,
                    opacity: 0.8
                  }}
                />
              )}

              {/* Zoom prompt badge */}
              <div className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-lg text-[11px] font-medium text-slate-700 shadow-xs flex items-center gap-1">
                {isZoomed ? (
                  <>
                    <ZoomOut className="w-3.5 h-3.5 text-amber-600" />
                    <span>คลิกเพื่อย่อ</span>
                  </>
                ) : (
                  <>
                    <ZoomIn className="w-3.5 h-3.5 text-amber-600" />
                    <span>คลิกเพื่อซูมดูรายละเอียด</span>
                  </>
                )}
              </div>
            </div>

            {/* Color Swatches and Live Label */}
            <div className="w-full mt-4 p-3 bg-slate-50 rounded-xl border border-slate-200/80">
              <div className="text-xs font-semibold text-slate-700 mb-2 flex items-center justify-between">
                <span>เลือกสีตัวอย่าง (เปลี่ยนสีแบบเคลือบเนียนตา):</span>
                <span className="text-amber-800 font-bold">{selectedColor.name}</span>
              </div>
              <div className="flex items-center gap-3">
                {product.colors.map((c, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleColorChange(c)}
                    className={`flex items-center gap-2 px-3 py-1.5 rounded-xl border-2 transition-all ${
                      selectedColor.name === c.name
                        ? 'border-slate-950 bg-white shadow-sm ring-2 ring-yellow-400'
                        : 'border-slate-200 bg-white/50 hover:bg-white'
                    }`}
                  >
                    <span
                      className="w-4 h-4 rounded-full border border-slate-300 shadow-xs"
                      style={{ backgroundColor: c.hex }}
                    />
                    <span className="text-xs font-medium text-slate-700">{c.name.split(' ')[0]}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Quick Price Banner */}
            <div className="w-full mt-4 p-4 bg-linear-to-r from-amber-500 via-yellow-400 to-yellow-500 rounded-2xl text-slate-950 shadow-md">
              <div className="text-xs text-slate-900 font-bold">ราคาพิเศษเฉพาะที่ร้าน</div>
              <div className="flex items-baseline gap-2 mt-0.5">
                <span className="text-2xl font-black">฿{product.price.toLocaleString()}</span>
                {product.originalPrice > product.price && (
                  <span className="text-xs text-slate-700 line-through">
                    ฿{product.originalPrice.toLocaleString()}
                  </span>
                )}
              </div>
              <div className="mt-2 text-[11px] text-slate-900 font-semibold flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-emerald-800" />
                <span>
                  {product.inStock ? `สินค้าพร้อมส่ง (คงเหลือ ${product.stockCount} ชิ้น)` : 'สินค้าหมดชั่วคราว'}
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Detail Tabs */}
          <div className="md:col-span-7 flex flex-col">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 leading-tight">
              {product.name}
            </h2>

            {/* Rating & Highlights summary */}
            <div className="flex items-center gap-3 mt-2 text-xs text-slate-500">
              <div className="flex items-center space-x-1">
                <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                <span className="font-bold text-slate-800">{product.rating}</span>
                <span>({product.reviewCount} รีวิวจากผู้ใช้จริง)</span>
              </div>
              <span>•</span>
              <span className="text-amber-900 font-semibold bg-yellow-100 px-2 py-0.5 rounded-full border border-yellow-300/60">
                {product.highlightPoints[0] || 'สินค้าคุณภาพยอดนิยม'}
              </span>
            </div>

            {/* Tab Navigation */}
            <div className="flex items-center gap-1 mt-5 border-b border-slate-200 overflow-x-auto pb-1">
              <button
                onClick={() => setActiveTab('specs')}
                className={`px-3 py-2 text-xs sm:text-sm font-bold border-b-2 whitespace-nowrap transition-colors ${
                  activeTab === 'specs'
                    ? 'border-yellow-500 text-amber-950'
                    : 'border-transparent text-slate-500 hover:text-slate-800'
                }`}
              >
                รายละเอียดสเปกตัวเครื่อง
              </button>
              <button
                onClick={() => setActiveTab('promotions')}
                className={`px-3 py-2 text-xs sm:text-sm font-bold border-b-2 whitespace-nowrap transition-colors flex items-center gap-1 ${
                  activeTab === 'promotions'
                    ? 'border-yellow-500 text-amber-950'
                    : 'border-transparent text-slate-500 hover:text-slate-800'
                }`}
              >
                <Tag className="w-3.5 h-3.5" />
                <span>โปรโมชั่นที่ร้านมีให้ ({product.promotions.length})</span>
              </button>
              <button
                onClick={() => setActiveTab('gifts')}
                className={`px-3 py-2 text-xs sm:text-sm font-bold border-b-2 whitespace-nowrap transition-colors flex items-center gap-1 ${
                  activeTab === 'gifts'
                    ? 'border-yellow-500 text-amber-950'
                    : 'border-transparent text-slate-500 hover:text-slate-800'
                }`}
              >
                <Gift className="w-3.5 h-3.5" />
                <span>ของแถม ({product.freeGifts.length})</span>
              </button>
              <button
                onClick={() => setActiveTab('warranty')}
                className={`px-3 py-2 text-xs sm:text-sm font-bold border-b-2 whitespace-nowrap transition-colors flex items-center gap-1 ${
                  activeTab === 'warranty'
                    ? 'border-yellow-500 text-amber-950'
                    : 'border-transparent text-slate-500 hover:text-slate-800'
                }`}
              >
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>ประกัน & บริการหลังการขาย</span>
              </button>
            </div>

            {/* Tab Contents */}
            <div className="mt-4 flex-1">
              {/* 1. Specs Tab */}
              {activeTab === 'specs' && (
                <div className="space-y-2.5 text-xs sm:text-sm">
                  <div className="grid grid-cols-3 p-2.5 bg-slate-50 rounded-xl">
                    <span className="font-medium text-slate-500">หน้าจอแสดงผล</span>
                    <span className="col-span-2 text-slate-800 font-semibold">{product.specs.screen}</span>
                  </div>
                  <div className="grid grid-cols-3 p-2.5 bg-white border border-slate-100 rounded-xl">
                    <span className="font-medium text-slate-500">ชิปประมวลผล (CPU)</span>
                    <span className="col-span-2 text-slate-800 font-semibold">{product.specs.processor}</span>
                  </div>
                  <div className="grid grid-cols-3 p-2.5 bg-slate-50 rounded-xl">
                    <span className="font-medium text-slate-500">RAM & ความจุ ROM</span>
                    <span className="col-span-2 text-slate-800 font-semibold">
                      RAM {product.specs.ram} / ROM {product.specs.storage}
                    </span>
                  </div>
                  <div className="grid grid-cols-3 p-2.5 bg-white border border-slate-100 rounded-xl">
                    <span className="font-medium text-slate-500">กล้องหลัง</span>
                    <span className="col-span-2 text-slate-800 font-semibold">{product.specs.rearCamera}</span>
                  </div>
                  <div className="grid grid-cols-3 p-2.5 bg-slate-50 rounded-xl">
                    <span className="font-medium text-slate-500">กล้องหน้า</span>
                    <span className="col-span-2 text-slate-800 font-semibold">{product.specs.frontCamera}</span>
                  </div>
                  <div className="grid grid-cols-3 p-2.5 bg-white border border-slate-100 rounded-xl">
                    <span className="font-medium text-slate-500">แบตเตอรี่ & ชาร์จไว</span>
                    <span className="col-span-2 text-slate-800 font-semibold">
                      {product.specs.battery} ({product.specs.charging})
                    </span>
                  </div>
                  <div className="grid grid-cols-3 p-2.5 bg-slate-50 rounded-xl">
                    <span className="font-medium text-slate-500">ระบบปฏิบัติการ</span>
                    <span className="col-span-2 text-slate-800 font-semibold">{product.specs.os}</span>
                  </div>
                  <div className="grid grid-cols-3 p-2.5 bg-white border border-slate-100 rounded-xl">
                    <span className="font-medium text-slate-500">น้ำหนักตัวเครื่อง</span>
                    <span className="col-span-2 text-slate-800 font-semibold">{product.specs.weight}</span>
                  </div>
                  <div className="grid grid-cols-3 p-2.5 bg-slate-50 rounded-xl">
                    <span className="font-medium text-slate-500">การเชื่อมต่อ & พิเศษ</span>
                    <span className="col-span-2 text-slate-800 font-semibold">{product.specs.connectivity}</span>
                  </div>
                </div>
              )}

              {/* 2. Promotions Tab */}
              {activeTab === 'promotions' && (
                <div className="space-y-3">
                  <div className="p-4 bg-linear-to-r from-amber-50 to-orange-50 border border-amber-200/80 rounded-2xl">
                    <div className="font-bold text-amber-900 text-sm flex items-center gap-1.5 mb-1">
                      <Tag className="w-4 h-4 text-amber-600" />
                      <span>สิทธิพิเศษประจำเดือนที่ร้าน IT SmartFinder</span>
                    </div>
                    <p className="text-xs text-amber-800 leading-relaxed">
                      โปรโมชั่นหน้าร้านจัดเต็ม อัปเดตราคาแบบเรียลไทม์ สามารถใช้สิทธิ์ได้ทันทีเมื่อสั่งซื้อ
                    </p>
                  </div>

                  <ul className="space-y-2.5">
                    {product.promotions.map((promo, idx) => (
                      <li
                        key={idx}
                        className="p-3.5 bg-white border border-slate-200 rounded-xl flex items-start gap-2.5 text-xs sm:text-sm text-slate-800 shadow-2xs"
                      >
                        <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                          ✓
                        </span>
                        <span className="font-medium leading-relaxed">{promo}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* 3. Free Gifts Tab */}
              {activeTab === 'gifts' && (
                <div className="space-y-3">
                  <div className="p-3.5 bg-emerald-50 border border-emerald-200 rounded-2xl text-xs sm:text-sm text-emerald-900 font-semibold flex items-center gap-2">
                    <Gift className="w-4 h-4 text-emerald-600" />
                    <span>ของแถมระดับพรีเมียม มูลค่ารวมกว่า 3,000+ บาท ติดตั้งพร้อมใช้ทันที</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {product.freeGifts.map((gift, idx) => (
                      <div
                        key={idx}
                        className="p-3 bg-white border border-slate-200 rounded-xl flex items-center gap-2.5 text-xs sm:text-sm shadow-2xs"
                      >
                        <div className="p-2 rounded-lg bg-yellow-100 text-amber-900 shrink-0">
                          <Gift className="w-4 h-4" />
                        </div>
                        <span className="font-medium text-slate-800">{gift}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* 4. Warranty & After-Sales Service Tab */}
              {activeTab === 'warranty' && (
                <div className="space-y-4">
                  {/* Warranty Card */}
                  <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl">
                    <div className="flex items-center gap-2 text-sm font-bold text-slate-900 mb-1.5">
                      <ShieldCheck className="w-4 h-4 text-blue-600" />
                      <span>เงื่อนไขการรับประกันเครื่อง</span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                      {product.warranty}
                    </p>
                  </div>

                  {/* After Sales Card */}
                  <div className="p-4 bg-yellow-50/80 border border-yellow-200 rounded-2xl">
                    <div className="flex items-center gap-2 text-sm font-bold text-amber-950 mb-1.5">
                      <Headphones className="w-4 h-4 text-amber-600" />
                      <span>บริการหลังการขายระดับ VIP</span>
                    </div>
                    <p className="text-xs sm:text-sm text-amber-900 leading-relaxed font-medium">
                      {product.afterSales}
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="px-6 py-4 border-t border-slate-100 bg-slate-50 flex items-center justify-between">
          <div className="text-xs text-slate-500">
            อัปเดตข้อมูลล่าสุด: <span className="font-medium text-slate-700">{product.lastUpdated}</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => onToggleCompare(product)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-colors flex items-center gap-1.5 ${
                isCompared
                  ? 'bg-rose-50 text-rose-700 border border-rose-200 hover:bg-rose-100'
                  : 'bg-yellow-400 text-slate-950 hover:bg-yellow-300 shadow-xs'
              }`}
            >
              <Scale className="w-4 h-4 text-slate-950" />
              <span>{isCompared ? 'ถอนออกจากเปรียบเทียบ' : 'เพิ่มในรายการเปรียบเทียบ'}</span>
            </button>
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-slate-200 hover:bg-slate-300 text-slate-700 transition-colors"
            >
              ปิดหน้าต่าง
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
