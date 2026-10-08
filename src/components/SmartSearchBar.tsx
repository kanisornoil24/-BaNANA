import React, { useState } from 'react';
import { Search, Sparkles, X, Mic, SlidersHorizontal, ArrowUpDown } from 'lucide-react';
import { ProductCategory } from '../types/product';

interface SmartSearchBarProps {
  searchQuery: string;
  onSearchChange: (q: string) => void;
  onExecuteSearch: (q: string) => void;
  selectedCategory: ProductCategory | 'all';
  onCategoryChange: (cat: ProductCategory | 'all') => void;
  selectedBrand: string;
  onBrandChange: (brand: string) => void;
  sortBy: string;
  onSortChange: (sort: string) => void;
  aiExplanation?: string;
  isLoadingAI?: boolean;
}

export const SmartSearchBar: React.FC<SmartSearchBarProps> = ({
  searchQuery,
  onSearchChange,
  onExecuteSearch,
  selectedCategory,
  onCategoryChange,
  selectedBrand,
  onBrandChange,
  sortBy,
  onSortChange,
  aiExplanation,
  isLoadingAI
}) => {
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [isListening, setIsListening] = useState(false);

  // Exact examples requested by the user in prompt
  const QUICK_EXAMPLES = [
    {
      label: '🎮 คำสั่ง "เกม" (เครื่องที่แรงที่สุด)',
      query: 'เกม'
    },
    {
      label: '⚡ โน้ตบุ๊กเกมมิ่ง สเปกท็อป',
      query: 'หาเครื่องเล่นเกมที่แรงที่สุด สเปกท็อปสุดในร้าน'
    },
    {
      label: '🕹️ มือถือเกมงบ 15,000 แรงสุด',
      query: 'มือถือเล่นเกม ราคาไม่เกิน 15,000 บาท เครื่องที่แรงที่สุด'
    },
    {
      label: '📱 Samsung ไม่เกิน 20,000 บ.',
      query: 'มือถือ samsung ราคาไม่เกิน 20,000 บาท มีรุ่นไหนบ้าง'
    },
    {
      label: '🏆 จัดอันดับงบไม่เกิน 15,000 คุ้มสุด 5 เครื่อง',
      query: 'จัดอันดับมือถือ ราคา ไม่เกิน 15,000 บาท ที่สเปคคุ้มที่สุด มา 5 เครื่อง'
    },
    {
      label: '⚡ เน้นแบตอึด + ชาร์จเร็ว 5 เครื่อง',
      query: 'หามือถือที่เน้นแบตเตอรี่ ใช้ได้นาน และชาร์จเร็ว มา 5 เครื่อง'
    },
    {
      label: '⚖️ เทียบ realme 16 vs 16 pro',
      query: 'เปรียบเทียบ มือถือ realme 16 กับ realme 16 pro บอกข้อที่แตกต่างกันได้'
    }
  ];

  const handleVoiceSearch = () => {
    // Check if webkitSpeechRecognition is supported
    const SpeechRecognition =
      (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;

    if (SpeechRecognition) {
      const recognition = new SpeechRecognition();
      recognition.lang = 'th-TH';
      recognition.interimResults = false;

      recognition.onstart = () => {
        setIsListening(true);
      };

      recognition.onresult = (event: any) => {
        const transcript = event.results[0][0].transcript;
        onSearchChange(transcript);
        onExecuteSearch(transcript);
        setIsListening(false);
      };

      recognition.onerror = () => {
        setIsListening(false);
      };

      recognition.onend = () => {
        setIsListening(false);
      };

      recognition.start();
    } else {
      // Fallback demo speech simulation
      setIsListening(true);
      setTimeout(() => {
        const simulated = 'หามือถือที่เน้นแบตเตอรี่ ใช้ได้นาน และชาร์จเร็ว มา 5 เครื่อง';
        onSearchChange(simulated);
        onExecuteSearch(simulated);
        setIsListening(false);
      }, 1500);
    }
  };

  const categories: Array<{ id: ProductCategory | 'all'; label: string }> = [
    { id: 'all', label: 'ทั้งหมด' },
    { id: 'mobile', label: 'สมาร์ทโฟน' },
    { id: 'laptop', label: 'แล็ปท็อป/คอม' },
    { id: 'tablet', label: 'แท็บเล็ต' }
  ];

  const brands = ['ทั้งหมด', 'Samsung', 'Realme', 'Xiaomi', 'Apple', 'OnePlus', 'ASUS', 'Lenovo'];

  return (
    <div className="w-full bg-white rounded-2xl shadow-sm border border-slate-200/80 p-4 sm:p-6 mb-8 transition-all">
      {/* Search Input Bar */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onExecuteSearch(searchQuery);
        }}
        className="relative flex items-center"
      >
        <div className="absolute left-4 pointer-events-none text-yellow-500">
          <Sparkles className="w-5 h-5 animate-pulse" />
        </div>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="ค้นหาด้วยภาษาพูด เช่น &quot;เกม&quot; (ค้นหาเครื่องที่แรงที่สุด), มือถือ samsung ไม่เกิน 20,000, จัดอันดับ..."
          className="w-full pl-12 pr-28 py-3.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-yellow-400/30 focus:border-yellow-500 text-sm sm:text-base transition-all"
        />

        <div className="absolute right-2.5 flex items-center space-x-1">
          {searchQuery && (
            <button
              type="button"
              onClick={() => {
                onSearchChange('');
                onExecuteSearch('');
              }}
              className="p-1.5 text-slate-400 hover:text-slate-600 rounded-lg hover:bg-slate-200/60 transition-colors"
              title="ล้างคำค้นหา"
            >
              <X className="w-4 h-4" />
            </button>
          )}

          <button
            type="button"
            onClick={handleVoiceSearch}
            className={`p-2 rounded-lg transition-colors ${
              isListening
                ? 'bg-rose-500 text-white animate-bounce'
                : 'text-slate-400 hover:text-amber-600 hover:bg-yellow-50'
            }`}
            title="ค้นหาด้วยเสียงภาษาไทย"
          >
            <Mic className="w-4 h-4" />
          </button>

          <button
            type="submit"
            disabled={isLoadingAI}
            className="flex items-center space-x-1.5 px-4 py-2 bg-yellow-400 hover:bg-yellow-300 disabled:bg-slate-200 text-slate-950 font-bold rounded-lg text-xs sm:text-sm shadow-xs transition-colors"
          >
            {isLoadingAI ? (
              <span className="w-4 h-4 border-2 border-slate-900/30 border-t-slate-900 rounded-full animate-spin"></span>
            ) : (
              <Search className="w-4 h-4 text-slate-950" />
            )}
            <span className="hidden sm:inline">ค้นหา</span>
          </button>
        </div>
      </form>

      {/* Suggested Spoken Thai Queries Chips */}
      <div className="mt-3.5 flex items-center gap-1.5 sm:gap-2 flex-wrap text-xs">
        <span className="text-slate-400 font-medium mr-1 flex items-center gap-1">
          <Sparkles className="w-3 h-3 text-yellow-500" />
          ตัวอย่างคำสั่งเสียงพูด:
        </span>
        {QUICK_EXAMPLES.map((item, idx) => (
          <button
            key={idx}
            type="button"
            onClick={() => {
              onSearchChange(item.query);
              onExecuteSearch(item.query);
            }}
            className="px-2.5 py-1.5 rounded-lg bg-yellow-100/70 hover:bg-yellow-200/80 text-amber-950 border border-yellow-300/60 font-medium transition-all text-[11px] sm:text-xs flex items-center gap-1 active:scale-95 shadow-2xs"
          >
            {item.label}
          </button>
        ))}
      </div>

      {/* AI Explanation Banner (if available) */}
      {aiExplanation && (
        <div className="mt-4 p-3.5 bg-linear-to-r from-yellow-50 via-amber-50/60 to-orange-50/30 border border-yellow-200 rounded-xl flex items-start gap-2.5 text-xs sm:text-sm text-slate-800 animate-fadeIn">
          <div className="p-1 rounded-md bg-yellow-400 text-slate-950 font-bold shrink-0 mt-0.5 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5" />
          </div>
          <div className="flex-1 leading-relaxed">
            <div className="font-semibold text-amber-950 mb-0.5 flex items-center gap-1.5">
              <span>คำแนะนำจากระบบค้นหาอัจฉริยะ</span>
              <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-yellow-200/80 text-amber-950 border border-yellow-300/60">
                วิเคราะห์สเปกแล้ว
              </span>
            </div>
            <div className="whitespace-pre-line text-slate-700">{aiExplanation}</div>
          </div>
        </div>
      )}

      {/* Filter Row: Category Tabs & Sort */}
      <div className="mt-5 pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
        {/* Category Filter */}
        <div className="flex items-center gap-1 bg-slate-100/80 p-1 rounded-xl">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => onCategoryChange(cat.id)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                selectedCategory === cat.id
                  ? 'bg-yellow-400 text-slate-950 font-bold shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Toggle Filters & Sort */}
        <div className="flex items-center gap-2">
          {/* Brand Selector */}
          <div className="flex items-center gap-1.5">
            <label className="text-xs text-slate-500 font-medium hidden sm:inline">แบรนด์:</label>
            <select
              value={selectedBrand}
              onChange={(e) => onBrandChange(e.target.value)}
              className="bg-slate-50 border border-slate-200 rounded-lg px-2.5 py-1.5 text-xs text-slate-700 focus:outline-none focus:ring-1 focus:ring-yellow-400 font-medium"
            >
              {brands.map((b) => (
                <option key={b} value={b === 'ทั้งหมด' ? '' : b}>
                  {b}
                </option>
              ))}
            </select>
          </div>

          {/* Sort Selector */}
          <div className="flex items-center gap-1.5">
            <label className="text-xs text-slate-500 font-medium hidden sm:inline">เรียงลำดับ:</label>
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => onSortChange(e.target.value)}
                className="bg-slate-50 border border-slate-200 rounded-lg pl-2.5 pr-7 py-1.5 text-xs text-slate-700 focus:outline-none focus:ring-1 focus:ring-yellow-400 font-medium appearance-none"
              >
                <option value="recommended">ความคุ้มค่าและแนะนำ</option>
                <option value="gaming">🎮 เครื่องที่แรงที่สุด (เล่นเกม)</option>
                <option value="price_asc">ราคา: ต่ำไปสูง</option>
                <option value="price_desc">ราคา: สูงไปต่ำ</option>
                <option value="battery">แบตเตอรี่ & ชาร์จไว</option>
                <option value="rating">คะแนนรีวิวสูงสุด</option>
              </select>
              <ArrowUpDown className="w-3 h-3 text-slate-400 absolute right-2 top-2.5 pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
