import React, { useState } from 'react';
import {
  Star,
  Check,
  Eye,
  Scale,
  Zap,
  Battery,
  Cpu,
  Gift,
  ShieldCheck,
  Sparkles
} from 'lucide-react';
import { Product, ProductColor } from '../types/product';

interface ProductCardProps {
  product: Product;
  onSelectProduct: (product: Product, selectedColor?: ProductColor) => void;
  onToggleCompare: (product: Product) => void;
  isCompared: boolean;
  onQuickZoom: (product: Product, colorImage: string) => void;
  rankBadge?: string | null;
  isMostPowerful?: boolean;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onSelectProduct,
  onToggleCompare,
  isCompared,
  onQuickZoom,
  rankBadge,
  isMostPowerful
}) => {
  const [selectedColorIndex, setSelectedColorIndex] = useState(0);
  const [isTransitioningColor, setIsTransitioningColor] = useState(false);
  const [previousColorIndex, setPreviousColorIndex] = useState(0);

  const currentColor = product.colors[selectedColorIndex] || {
    name: 'มาตรฐาน',
    hex: '#334155',
    overlayHex: '#334155',
    image: product.defaultImage
  };

  const handleColorChange = (newIndex: number) => {
    if (newIndex === selectedColorIndex) return;
    setPreviousColorIndex(selectedColorIndex);
    setSelectedColorIndex(newIndex);
    setIsTransitioningColor(true);

    setTimeout(() => {
      setIsTransitioningColor(false);
    }, 700);
  };

  const currentDisplayImage = currentColor.image || product.defaultImage;
  const discountPercent =
    product.originalPrice > product.price
      ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
      : 0;

  return (
    <div className="group relative bg-white rounded-2xl border border-slate-200/90 hover:border-yellow-400 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden">
      {/* Compare Badge / Toggle Button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onToggleCompare(product);
        }}
        className={`absolute top-3 right-3 z-20 flex items-center space-x-1 px-2.5 py-1 rounded-full text-xs font-semibold backdrop-blur-md transition-all ${
          isCompared
            ? 'bg-yellow-400 text-slate-950 font-bold shadow-md shadow-yellow-500/25 ring-2 ring-yellow-300'
            : 'bg-white/80 text-slate-700 hover:bg-white border border-slate-200 shadow-xs'
        }`}
        title={isCompared ? 'นำออกจากตารางเปรียบเทียบ' : 'เพิ่มเพื่อเปรียบเทียบสเปก'}
      >
        <Scale className="w-3.5 h-3.5" />
        <span>{isCompared ? 'เลือกแล้ว' : 'เทียบ'}</span>
      </button>

      {/* Discount / Highlights / Performance Badges */}
      <div className="absolute top-3 left-3 z-20 flex flex-col gap-1 items-start max-w-[70%]">
        {isMostPowerful && (
          <span className="px-2 py-0.5 rounded-lg bg-linear-to-r from-amber-400 via-yellow-400 to-yellow-300 text-slate-950 text-[11px] font-black shadow-md flex items-center gap-1 border border-yellow-300 animate-pulse">
            <Zap className="w-3.5 h-3.5 fill-slate-950 text-slate-950 shrink-0" />
            <span>อันดับ 1 เครื่องที่แรงที่สุด</span>
          </span>
        )}
        {rankBadge && !isMostPowerful && (
          <span className="px-2 py-0.5 rounded-md bg-slate-900/90 backdrop-blur-md text-yellow-300 text-[10px] font-bold shadow-xs flex items-center gap-1">
            <Sparkles className="w-3 h-3 text-yellow-400" />
            <span>{rankBadge}</span>
          </span>
        )}
        {discountPercent > 0 && (
          <span className="px-2 py-0.5 rounded-md bg-rose-500 text-white text-[11px] font-bold shadow-xs">
            ลด {discountPercent}%
          </span>
        )}
        {product.tags[0] && (
          <span className="px-2 py-0.5 rounded-md bg-slate-900/80 backdrop-blur-md text-white text-[10px] font-medium">
            {product.tags[0]}
          </span>
        )}
      </div>

      {/* Product Image Stage with Interactive Smooth Color Coating Overlay */}
      <div
        onClick={() => onSelectProduct(product, currentColor)}
        className="relative h-60 w-full bg-linear-to-b from-slate-100/80 to-slate-50 flex items-center justify-center p-4 cursor-pointer overflow-hidden"
      >
        {/* Underneath base image */}
        <img
          src={currentDisplayImage}
          alt={product.name}
          className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-105"
        />

        {/* Smooth Color Coating Wipe / Dissolve Effect */}
        {isTransitioningColor && (
          <div
            className="absolute inset-0 pointer-events-none transition-all duration-700 ease-in-out mix-blend-color animate-colorCoat"
            style={{
              backgroundColor: currentColor.overlayHex || currentColor.hex,
              opacity: 0.75
            }}
          />
        )}

        {/* Hover Action Overlay: Quick Zoom Lens */}
        <div className="absolute inset-0 bg-slate-900/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onQuickZoom(product, currentDisplayImage);
            }}
            className="px-3 py-1.5 rounded-lg bg-white/95 text-slate-800 text-xs font-semibold shadow-lg hover:bg-yellow-400 hover:text-slate-950 flex items-center gap-1.5 transition-all transform translate-y-2 group-hover:translate-y-0"
          >
            <Eye className="w-3.5 h-3.5" />
            <span>ซูมดูรูป</span>
          </button>
        </div>
      </div>

      {/* Interactive Color Swatches Palette */}
      <div className="px-4 pt-3 pb-1 border-b border-slate-100 flex items-center justify-between">
        <span className="text-[11px] font-medium text-slate-500">
          สี: <strong className="text-slate-800 font-semibold">{currentColor.name}</strong>
        </span>
        <div className="flex items-center space-x-1.5">
          {product.colors.map((c, idx) => (
            <button
              key={idx}
              onClick={(e) => {
                e.stopPropagation();
                handleColorChange(idx);
              }}
              style={{ backgroundColor: c.hex }}
              className={`w-5 h-5 rounded-full border-2 transition-all transform ${
                selectedColorIndex === idx
                  ? 'border-slate-950 ring-2 ring-yellow-400 scale-110 shadow-xs'
                  : 'border-white shadow-xs hover:scale-105'
              }`}
              title={c.name}
            />
          ))}
        </div>
      </div>

      {/* Product Content Details */}
      <div className="p-4 flex-1 flex flex-col justify-between">
        <div>
          {/* Brand & Reviews */}
          <div className="flex items-center justify-between text-xs text-slate-500 mb-1">
            <span className="font-bold text-amber-600 uppercase tracking-wider text-[11px]">
              {product.brand}
            </span>
            <div className="flex items-center space-x-1">
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              <span className="font-semibold text-slate-800">{product.rating}</span>
              <span className="text-[11px] text-slate-400">({product.reviewCount})</span>
            </div>
          </div>

          {/* Product Name */}
          <h3
            onClick={() => onSelectProduct(product, currentColor)}
            className="font-bold text-slate-900 text-base leading-snug line-clamp-1 hover:text-amber-600 cursor-pointer transition-colors"
          >
            {product.name}
          </h3>

          {/* Price Row */}
          <div className="mt-2 flex items-baseline space-x-2">
            <span className="text-xl font-extrabold text-slate-900">
              ฿{product.price.toLocaleString()}
            </span>
            {product.originalPrice > product.price && (
              <span className="text-xs text-slate-400 line-through">
                ฿{product.originalPrice.toLocaleString()}
              </span>
            )}
          </div>

          {/* Quick Key Specs Grid */}
          <div className="mt-3 grid grid-cols-2 gap-1.5 text-[11px] text-slate-600 bg-slate-50 p-2.5 rounded-xl border border-slate-100">
            <div className="flex items-center gap-1.5 truncate">
              <Cpu className="w-3.5 h-3.5 text-amber-500 shrink-0" />
              <span className="truncate">{product.specs.processor.split('(')[0]}</span>
            </div>
            <div className="flex items-center gap-1.5 truncate">
              <Battery className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
              <span className="truncate">{product.specs.battery}</span>
            </div>
            <div className="flex items-center gap-1.5 truncate col-span-2">
              <Zap className="w-3.5 h-3.5 text-amber-500 shrink-0" />
              <span className="truncate">{product.specs.charging}</span>
            </div>
          </div>

          {/* Free Gifts & Store Perks Brief */}
          <div className="mt-2.5 flex items-center gap-2 text-[11px] text-slate-500">
            <div className="flex items-center gap-1 text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded-md font-medium">
              <Gift className="w-3 h-3" />
              <span>ของแถม {product.freeGifts.length} ชิ้น</span>
            </div>
            <div className="flex items-center gap-1 text-blue-700 bg-blue-50 px-1.5 py-0.5 rounded-md font-medium">
              <ShieldCheck className="w-3 h-3" />
              <span>ประกันแท้</span>
            </div>
          </div>
        </div>

        {/* Bottom Actions */}
        <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
          <button
            onClick={() => onSelectProduct(product, currentColor)}
            className="flex-1 py-2 px-3 bg-slate-900 hover:bg-yellow-400 hover:text-slate-950 text-white rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 shadow-xs"
          >
            <span>ดูสเปก & โปรโมชั่น</span>
          </button>
        </div>
      </div>
    </div>
  );
};
