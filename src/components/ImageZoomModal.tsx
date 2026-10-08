import React, { useState } from 'react';
import { X, ZoomIn, ZoomOut, Maximize2 } from 'lucide-react';
import { Product } from '../types/product';

interface ImageZoomModalProps {
  product: Product | null;
  imageUrl: string | null;
  onClose: () => void;
}

export const ImageZoomModal: React.FC<ImageZoomModalProps> = ({
  product,
  imageUrl,
  onClose
}) => {
  if (!product || !imageUrl) return null;

  const [scale, setScale] = useState(1.8);
  const [position, setPosition] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setPosition({ x, y });
  };

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-60 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 animate-fadeIn"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative max-w-4xl w-full bg-slate-900 rounded-3xl overflow-hidden border border-slate-800 flex flex-col"
      >
        {/* Header */}
        <div className="px-6 py-4 flex items-center justify-between border-b border-slate-800 text-white">
          <div>
            <h3 className="font-bold text-sm sm:text-base">{product.name}</h3>
            <p className="text-xs text-slate-400">
              เลื่อนเมาส์บนรูปภาพเพื่อซูมส่องดูรายละเอียดตัวเครื่อง กล้อง และขอบจอแบบคมชัด
            </p>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={() => setScale(scale === 1 ? 2.2 : 1)}
              className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
              title={scale > 1 ? 'ขนาดปกติ' : 'ซูมขยาย'}
            >
              {scale > 1 ? <ZoomOut className="w-4 h-4" /> : <ZoomIn className="w-4 h-4" />}
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Zoom Area */}
        <div
          onMouseMove={handleMouseMove}
          className="relative h-[65vh] w-full bg-radial from-slate-800 to-slate-950 flex items-center justify-center overflow-hidden cursor-crosshair"
        >
          <div
            className="w-full h-full flex items-center justify-center transition-transform duration-100 ease-out"
            style={{
              transform: `scale(${scale})`,
              transformOrigin: `${position.x}% ${position.y}%`
            }}
          >
            <img
              src={imageUrl}
              alt={product.name}
              className="max-h-full max-w-full object-contain pointer-events-none select-none"
            />
          </div>
        </div>

        {/* Footer controls */}
        <div className="px-6 py-3 bg-slate-950/80 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
          <span>ระดับการซูม: {Math.round(scale * 100)}%</span>
          <div className="flex gap-2">
            <button
              onClick={() => setScale(1)}
              className={`px-3 py-1 rounded-lg text-xs font-bold transition-colors ${scale === 1 ? 'bg-yellow-400 text-slate-950' : 'bg-slate-800 text-slate-300 hover:text-white'}`}
            >
              100%
            </button>
            <button
              onClick={() => setScale(1.8)}
              className={`px-3 py-1 rounded-lg text-xs font-bold transition-colors ${scale === 1.8 ? 'bg-yellow-400 text-slate-950' : 'bg-slate-800 text-slate-300 hover:text-white'}`}
            >
              180%
            </button>
            <button
              onClick={() => setScale(2.6)}
              className={`px-3 py-1 rounded-lg text-xs font-bold transition-colors ${scale === 2.6 ? 'bg-yellow-400 text-slate-950' : 'bg-slate-800 text-slate-300 hover:text-white'}`}
            >
              260%
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
