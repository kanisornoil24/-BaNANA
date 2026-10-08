/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useMemo } from 'react';
import {
  Scale,
  Sparkles,
  ShoppingBag,
  ArrowRight,
  RefreshCw,
  SlidersHorizontal,
  Flame,
  Award,
  Zap,
  CheckCircle2,
  BellRing,
  Lock,
  Unlock
} from 'lucide-react';
import { Navbar } from './components/Navbar';
import { SmartSearchBar } from './components/SmartSearchBar';
import { ProductCard } from './components/ProductCard';
import { ProductDetailModal } from './components/ProductDetailModal';
import { CompareModal } from './components/CompareModal';
import { GoogleSheetsModal } from './components/GoogleSheetsModal';
import { PinAuthModal } from './components/PinAuthModal';
import { ProductManageModal } from './components/ProductManageModal';
import { BackupReminderModal } from './components/BackupReminderModal';
import { ImageZoomModal } from './components/ImageZoomModal';

import { Product, ProductCategory, ProductColor, SheetsConfig, ReminderConfig } from './types/product';
import {
  loadProducts,
  saveProducts,
  loadSheetsConfig,
  saveSheetsConfig,
  loadReminders,
  saveReminders
} from './services/storageService';
import { searchProductsWithAI } from './services/aiSearchService';
import { initDefaultPinIfNeeded, isSystemLocked, lockSystem } from './services/pinAuthService';
import { pushProductsToSheet, getAccessToken } from './services/googleSheets';
import { getProductPerformanceScore } from './utils/performanceScorer';

export default function App() {
  // Products Catalog State
  const [products, setProducts] = useState<Product[]>([]);
  const [displayedProducts, setDisplayedProducts] = useState<Product[]>([]);

  // Search & Filter State
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory | 'all'>('all');
  const [selectedBrand, setSelectedBrand] = useState('');
  const [sortBy, setSortBy] = useState('recommended');
  const [aiExplanation, setAiExplanation] = useState<string>('');
  const [isLoadingAI, setIsLoadingAI] = useState(false);

  // Comparison State
  const [comparedProducts, setComparedProducts] = useState<Product[]>([]);
  const [isCompareModalOpen, setIsCompareModalOpen] = useState(false);

  // Modals & Popups
  const [selectedProductForDetail, setSelectedProductForDetail] = useState<{
    product: Product;
    initialColor?: ProductColor;
  } | null>(null);
  const [zoomModalData, setZoomModalData] = useState<{
    product: Product;
    imageUrl: string;
  } | null>(null);
  const [isSheetsModalOpen, setIsSheetsModalOpen] = useState(false);
  const [isPinModalOpen, setIsPinModalOpen] = useState(false);
  const [isManageModalOpen, setIsManageModalOpen] = useState(false);
  const [isRemindersModalOpen, setIsRemindersModalOpen] = useState(false);

  // Master Passcode Security & Action Routing
  const [pendingAdminAction, setPendingAdminAction] = useState<'sheets' | 'manage' | 'reminders' | null>(null);
  const [pinModalReason, setPinModalReason] = useState<string | null>(null);

  // Security & Cloud Configuration State
  const [isLocked, setIsLocked] = useState(true);
  const [sheetsConfig, setSheetsConfig] = useState<SheetsConfig>(loadSheetsConfig());
  const [reminders, setReminders] = useState<ReminderConfig[]>(loadReminders());
  const [toastNotification, setToastNotification] = useState<string | null>(null);

  // Initialize data on mount
  useEffect(() => {
    initDefaultPinIfNeeded();
    setIsLocked(isSystemLocked());

    const initial = loadProducts();
    setProducts(initial);
    setDisplayedProducts(initial);
  }, []);

  const showToast = (msg: string) => {
    setToastNotification(msg);
    setTimeout(() => {
      setToastNotification(null);
    }, 4500);
  };

  // Auto-sync function
  const autoSyncToCloudIfEnabled = async (currentProducts: Product[]) => {
    const cfg = loadSheetsConfig();
    if (cfg.autoSync && cfg.spreadsheetId) {
      try {
        const token = await getAccessToken();
        if (token) {
          await pushProductsToSheet(cfg.spreadsheetId, currentProducts);
          const updated: SheetsConfig = {
            ...cfg,
            lastSyncedAt: new Date().toLocaleString('th-TH'),
            syncStatus: 'success'
          };
          setSheetsConfig(updated);
          saveSheetsConfig(updated);
        }
      } catch (err) {
        console.warn('Auto sync failed (will retry next change):', err);
      }
    }
  };

  // Perform AI Natural Language Search
  const handleExecuteSearch = async (queryText: string) => {
    setIsLoadingAI(true);
    try {
      const result = await searchProductsWithAI(queryText, products);
      setDisplayedProducts(result.matchedProducts);
      setAiExplanation(result.explanation);

      // If search intent was explicitly a comparison (e.g. Realme 16 Pro vs Realme 16 Pro+)
      if (result.queryIntent === 'compare' && result.comparisonProducts && result.comparisonProducts.length >= 2) {
        setComparedProducts(result.comparisonProducts);
        setIsCompareModalOpen(true);
      }
    } catch (err) {
      console.error('Search failed:', err);
    } finally {
      setIsLoadingAI(false);
    }
  };

  // Filter & Sort Logic when inputs change without NLP
  const processedProducts = useMemo(() => {
    let list = [...displayedProducts];

    // Category Filter
    if (selectedCategory !== 'all') {
      list = list.filter((p) => p.category === selectedCategory);
    }

    // Brand Filter
    if (selectedBrand) {
      list = list.filter((p) => p.brand.toLowerCase() === selectedBrand.toLowerCase());
    }

    // Sorting
    if (sortBy === 'price_asc') {
      list.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price_desc') {
      list.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'gaming') {
      list.sort((a, b) => getProductPerformanceScore(b) - getProductPerformanceScore(a));
    } else if (sortBy === 'rating') {
      list.sort((a, b) => b.rating - a.rating);
    } else if (sortBy === 'battery') {
      list.sort((a, b) => {
        const getCap = (p: Product) => {
          const m = p.specs.battery.match(/([0-9,]+)\s*mAh/);
          return m ? parseInt(m[1].replace(/,/g, ''), 10) : 4000;
        };
        return getCap(b) - getCap(a);
      });
    }

    return list;
  }, [displayedProducts, selectedCategory, selectedBrand, sortBy]);

  // Comparison toggle
  const handleToggleCompare = (product: Product) => {
    if (comparedProducts.some((p) => p.id === product.id)) {
      setComparedProducts(comparedProducts.filter((p) => p.id !== product.id));
    } else {
      if (comparedProducts.length >= 4) {
        showToast('สามารถเปรียบเทียบได้สูงสุดครั้งละ 4 รายการ');
        return;
      }
      setComparedProducts([...comparedProducts, product]);
      showToast(`เพิ่ม ${product.name} เข้าสู่ตารางเปรียบเทียบแล้ว`);
    }
  };

  // Save updated products from Manage Modal
  const handleSaveProducts = (newProducts: Product[]) => {
    setProducts(newProducts);
    setDisplayedProducts(newProducts);
    saveProducts(newProducts);
    autoSyncToCloudIfEnabled(newProducts);
    showToast('บันทึกการเปลี่ยนแปลงรายการสินค้าแล้ว');
  };

  // Update sheets config
  const handleUpdateSheetsConfig = (cfg: SheetsConfig) => {
    setSheetsConfig(cfg);
    saveSheetsConfig(cfg);
  };

  // Update reminders
  const handleUpdateReminders = (newReminders: ReminderConfig[]) => {
    setReminders(newReminders);
    saveReminders(newReminders);
  };

  const dueRemindersCount = reminders.filter((r) => r.enabled).length;

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col antialiased selection:bg-yellow-400 selection:text-slate-950">
      {/* Toast Notification */}
      {toastNotification && (
        <div className="fixed bottom-6 right-6 z-50 bg-slate-900/95 text-white px-4 py-3 rounded-2xl shadow-2xl border border-slate-700 text-xs sm:text-sm font-medium flex items-center gap-2.5 animate-fadeIn backdrop-blur-md">
          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
          <span>{toastNotification}</span>
        </div>
      )}

      {/* Main Navbar */}
      <Navbar
        compareCount={comparedProducts.length}
        onOpenCompare={() => setIsCompareModalOpen(true)}
        onOpenSheets={() => {
          if (isLocked) {
            setPendingAdminAction('sheets');
            setPinModalReason('กรุณากรอกรหัสผ่านกลางเพื่อเข้าถึงและจัดการ Google Sheets');
            setIsPinModalOpen(true);
          } else {
            setIsSheetsModalOpen(true);
          }
        }}
        sheetsConfig={sheetsConfig}
        isLocked={isLocked}
        onOpenPinAuth={() => {
          setPendingAdminAction(null);
          setPinModalReason(null);
          setIsPinModalOpen(true);
        }}
        onOpenManage={() => {
          if (isLocked) {
            setPendingAdminAction('manage');
            setPinModalReason('กรุณากรอกรหัสผ่านกลางเพื่อเพิ่ม แก้ไข หรือลบสินค้า');
            setIsPinModalOpen(true);
          } else {
            setIsManageModalOpen(true);
          }
        }}
        onOpenReminders={() => {
          if (isLocked) {
            setPendingAdminAction('reminders');
            setPinModalReason('กรุณากรอกรหัสผ่านกลางเพื่อสำรองข้อมูลและตั้งการแจ้งเตือน');
            setIsPinModalOpen(true);
          } else {
            setIsRemindersModalOpen(true);
          }
        }}
        dueRemindersCount={dueRemindersCount}
      />

      {/* Access Permission Role Banner */}
      <aside aria-label="สถานะสิทธิ์การใช้งาน" className={`border-b transition-colors ${
        isLocked
          ? 'bg-amber-50/90 border-amber-200/80 text-amber-950'
          : 'bg-emerald-50 border-emerald-200 text-emerald-950'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex flex-wrap items-center justify-between gap-2 text-xs">
          <div className="flex items-center gap-2">
            {isLocked ? (
              <>
                <span className="inline-flex items-center gap-1 font-bold bg-amber-200/90 text-amber-950 px-2 py-0.5 rounded-md shadow-2xs">
                  <Lock className="w-3 h-3 text-amber-800" />
                  โหมดบุคคลทั่วไป
                </span>
                <span className="text-slate-600 hidden sm:inline">
                  สามารถสืบค้นหาข้อมูล ดูสเปก และเปรียบเทียบสินค้าได้เท่านั้น (การจัดการสินค้าและ Google Sheets ต้องใช้รหัสผ่านกลาง)
                </span>
                <span className="text-slate-600 sm:hidden">
                  ค้นหา & เปรียบเทียบสินค้าได้เท่านั้น
                </span>
              </>
            ) : (
              <>
                <span className="inline-flex items-center gap-1 font-bold bg-emerald-200 text-emerald-950 px-2 py-0.5 rounded-md shadow-2xs">
                  <Unlock className="w-3 h-3 text-emerald-800" />
                  โหมดผู้ดูแลระบบ (ปลดล็อกแล้ว)
                </span>
                <span className="text-emerald-800 hidden sm:inline">
                  สิทธิ์เต็ม: คุณสามารถจัดการสินค้า เพิ่ม แก้ไข ลบ และเชื่อมต่อ Google Sheets ได้ทุกอย่าง
                </span>
              </>
            )}
          </div>

          <div className="flex items-center gap-2">
            {isLocked ? (
              <button
                onClick={() => {
                  setPendingAdminAction(null);
                  setPinModalReason('กรอกรหัสผ่านกลางเพื่อเข้าสู่โหมดผู้ดูแลระบบ');
                  setIsPinModalOpen(true);
                }}
                className="px-2.5 py-1 bg-yellow-400 hover:bg-yellow-300 text-slate-950 font-bold rounded-lg transition-colors shadow-2xs flex items-center gap-1 active:scale-95"
              >
                <Lock className="w-3 h-3 text-slate-950" />
                <span>ใส่รหัสผ่านกลางเพื่อจัดการระบบ</span>
              </button>
            ) : (
              <button
                onClick={() => {
                  lockSystem();
                  setIsLocked(true);
                  setIsManageModalOpen(false);
                  setIsSheetsModalOpen(false);
                  setIsRemindersModalOpen(false);
                  showToast('ล็อกระบบเรียบร้อยแล้ว สลับกลับสู่โหมดบุคคลทั่วไป');
                }}
                className="px-2.5 py-1 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-lg transition-colors shadow-2xs flex items-center gap-1 active:scale-95"
              >
                <Lock className="w-3 h-3 text-amber-400" />
                <span>ออกจากโหมดจัดการ (ล็อกระบบ)</span>
              </button>
            )}
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        {/* Hero Section with Live Highlights - Banana Yellow Theme */}
        <section className="mb-6 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-4 p-6 bg-linear-to-r from-amber-400 via-yellow-400 to-yellow-300 rounded-3xl text-slate-950 shadow-xl shadow-yellow-500/20 border border-yellow-300/80 relative overflow-hidden">
          {/* Subtle warm glow elements */}
          <div className="absolute -top-12 -right-12 w-48 h-48 bg-yellow-200/50 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-amber-300/50 rounded-full blur-2xl pointer-events-none" />

          <div className="relative z-10 max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-950/10 border border-slate-950/15 text-slate-950 text-xs font-bold mb-3 shadow-2xs">
              <Sparkles className="w-3.5 h-3.5 text-amber-900 fill-amber-900" />
              <span>ค้นหาอัจฉริยะด้วยภาษาพูด พร้อมวิเคราะห์สเปกเชิงลึก</span>
            </div>
            <h1 className="text-2xl sm:text-4xl font-black tracking-tight text-slate-950 leading-tight">
              ค้นหาสินค้า IT มือถือ และคอมพิวเตอร์ในร้าน
            </h1>
            <p className="mt-2 text-xs sm:text-sm text-slate-800 font-medium leading-relaxed">
              เปรียบเทียบสเปกตรงจุด จัดอันดับความคุ้มค่า ดูโปรโมชั่นหน้าร้าน ของแถม และประกันศูนย์ พร้อมระบบซิงค์ Google Sheets
            </p>
          </div>

          {/* Quick Badges Pill */}
          <div className="relative z-10 flex sm:flex-col gap-2 shrink-0">
            <div className="px-3.5 py-2 rounded-xl bg-slate-950/10 backdrop-blur-md border border-slate-950/10 text-center sm:text-right shadow-2xs">
              <span className="block text-lg font-black text-slate-950">{products.length}</span>
              <span className="text-[11px] text-slate-800 font-semibold">สินค้าในแคตตาล็อก</span>
            </div>
            <div className="px-3.5 py-2 rounded-xl bg-slate-950/10 backdrop-blur-md border border-slate-950/10 text-center sm:text-right shadow-2xs">
              <span className="block text-lg font-black text-emerald-900">100%</span>
              <span className="text-[11px] text-slate-800 font-semibold">เชื่อมต่อคลาวด์สด</span>
            </div>
          </div>
        </section>

        {/* Smart Natural Language Search Engine */}
        <SmartSearchBar
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          onExecuteSearch={handleExecuteSearch}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
          selectedBrand={selectedBrand}
          onBrandChange={setSelectedBrand}
          sortBy={sortBy}
          onSortChange={setSortBy}
          aiExplanation={aiExplanation}
          isLoadingAI={isLoadingAI}
        />

        {/* Product Cards Catalog Grid */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
              <span>รายการสินค้าในร้าน</span>
              <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-slate-200 text-slate-700">
                {processedProducts.length} รายการ
              </span>
            </h2>

            {searchQuery && (
              <button
                onClick={() => {
                  setSearchQuery('');
                  setDisplayedProducts(products);
                  setAiExplanation('');
                }}
                className="text-xs font-semibold text-amber-700 hover:text-amber-900 flex items-center gap-1 transition-colors"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>แสดงสินค้าทั้งหมด</span>
              </button>
            )}
          </div>

          {processedProducts.length === 0 ? (
            <div className="text-center py-16 bg-white rounded-3xl border border-slate-200 p-8 shadow-xs">
              <ShoppingBag className="w-12 h-12 text-slate-300 mx-auto mb-3" />
              <h3 className="font-bold text-slate-800 text-base">ไม่พบสินค้าที่ตรงกับเงื่อนไข</h3>
              <p className="text-xs text-slate-500 mt-1 max-w-md mx-auto">
                ลองค้นหาด้วยคำค้นอื่น หรือคลิกปุ่มตัวอย่างคำสั่งเสียงพูดด้านบนเพื่อดูรายการสินค้าแนะนำ
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setDisplayedProducts(products);
                  setAiExplanation('');
                  setSelectedCategory('all');
                  setSelectedBrand('');
                }}
                className="mt-4 px-4 py-2 bg-yellow-400 hover:bg-yellow-300 text-slate-950 rounded-xl text-xs font-bold shadow-xs transition-colors"
              >
                ล้างตัวกรองทั้งหมด
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {processedProducts.map((product, idx) => {
                const isGamingActive =
                  sortBy === 'gaming' ||
                  searchQuery.toLowerCase().includes('เกม') ||
                  searchQuery.toLowerCase().includes('game') ||
                  searchQuery.toLowerCase().includes('gaming') ||
                  searchQuery.toLowerCase().includes('แรงที่สุด');

                const isMostPowerful = isGamingActive && idx === 0;
                const rankBadge = isGamingActive && idx > 0 && idx < 6 ? `อันดับ ${idx + 1}` : null;

                return (
                  <ProductCard
                    key={product.id}
                    product={product}
                    onSelectProduct={(p, color) => {
                      setSelectedProductForDetail({ product: p, initialColor: color });
                    }}
                    onToggleCompare={handleToggleCompare}
                    isCompared={comparedProducts.some((cp) => cp.id === product.id)}
                    onQuickZoom={(p, img) => {
                      setZoomModalData({ product: p, imageUrl: img });
                    }}
                    isMostPowerful={isMostPowerful}
                    rankBadge={rankBadge}
                  />
                );
              })}
            </div>
          )}
        </section>
      </main>

      {/* Floating Bottom Comparison Drawer (if 1 or more items selected) */}
      {comparedProducts.length > 0 && (
        <aside aria-label="แถบเปรียบเทียบสินค้า" className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-40 bg-slate-900/95 backdrop-blur-md text-white px-5 py-3 rounded-2xl shadow-2xl border border-yellow-400/40 flex items-center gap-4 animate-fadeIn max-w-2xl w-[94%] sm:w-auto">
          <div className="flex items-center -space-x-2">
            {comparedProducts.map((p) => (
              <img
                key={p.id}
                src={p.defaultImage}
                alt={p.name}
                className="w-8 h-8 rounded-full border-2 border-slate-900 object-cover bg-white shadow-xs"
                title={p.name}
              />
            ))}
          </div>

          <div className="text-xs">
            <span className="font-bold text-white">เลือกเปรียบเทียบ {comparedProducts.length} รายการ</span>
            <span className="hidden sm:inline text-slate-400"> (คลิกเพื่อเปิดตารางเชิงลึก)</span>
          </div>

          <button
            onClick={() => setIsCompareModalOpen(true)}
            className="ml-auto px-4 py-2 bg-yellow-400 hover:bg-yellow-300 text-slate-950 rounded-xl text-xs font-bold shadow-md shadow-yellow-500/30 flex items-center gap-1.5 transition-all active:scale-95"
          >
            <Scale className="w-3.5 h-3.5" />
            <span>เปรียบเทียบสเปก</span>
          </button>
        </aside>
      )}

      {/* Footer */}
      <footer className="mt-16 bg-white border-t border-slate-200 py-8 text-center text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4 space-y-2">
          <p className="font-semibold text-slate-700">
            IT SmartFinder — ระบบค้นหาและเปรียบเทียบสินค้า IT มือถือและคอมพิวเตอร์
          </p>
          <p>
            รองรับระบบค้นหาด้วยภาษาพูด • สเปกตรงรายการต่อรายการ • เชื่อมต่อ Google Sheets • รหัส PIN รักษาความปลอดภัยส่วนตัว
          </p>
        </div>
      </footer>

      {/* Modals & Overlays */}
      <ProductDetailModal
        product={selectedProductForDetail?.product || null}
        initialColor={selectedProductForDetail?.initialColor}
        onClose={() => setSelectedProductForDetail(null)}
        onToggleCompare={handleToggleCompare}
        isCompared={comparedProducts.some((p) => p.id === selectedProductForDetail?.product.id)}
      />

      {isCompareModalOpen && (
        <CompareModal
          products={comparedProducts}
          onClose={() => setIsCompareModalOpen(false)}
          onRemoveProduct={(id) => {
            setComparedProducts(comparedProducts.filter((p) => p.id !== id));
          }}
          onClearAll={() => setComparedProducts([])}
          onSelectProductDetails={(p) => {
            setSelectedProductForDetail({ product: p });
          }}
        />
      )}

      <GoogleSheetsModal
        isOpen={isSheetsModalOpen}
        onClose={() => setIsSheetsModalOpen(false)}
        sheetsConfig={sheetsConfig}
        onUpdateSheetsConfig={handleUpdateSheetsConfig}
        products={products}
        onProductsUpdatedFromSheet={handleSaveProducts}
        isLocked={isLocked}
        onRequireUnlock={() => {
          setIsSheetsModalOpen(false);
          setPendingAdminAction('sheets');
          setPinModalReason('กรุณากรอกรหัสผ่านกลางเพื่อเข้าถึงและจัดการ Google Sheets');
          setIsPinModalOpen(true);
        }}
      />

      <PinAuthModal
        isOpen={isPinModalOpen}
        onClose={() => {
          setIsPinModalOpen(false);
          setPendingAdminAction(null);
          setPinModalReason(null);
        }}
        isLocked={isLocked}
        onLockStatusChanged={(locked) => {
          setIsLocked(locked);
        }}
        reason={pinModalReason}
        onSuccessUnlock={() => {
          showToast('ปลดล็อกสิทธิ์ผู้ดูแลระบบสำเร็จ');
          if (pendingAdminAction === 'sheets') {
            setIsSheetsModalOpen(true);
          } else if (pendingAdminAction === 'manage') {
            setIsManageModalOpen(true);
          } else if (pendingAdminAction === 'reminders') {
            setIsRemindersModalOpen(true);
          }
          setPendingAdminAction(null);
          setPinModalReason(null);
        }}
      />

      <ProductManageModal
        isOpen={isManageModalOpen}
        onClose={() => setIsManageModalOpen(false)}
        products={products}
        onSaveProducts={handleSaveProducts}
        isLocked={isLocked}
        onRequireUnlock={() => {
          setIsManageModalOpen(false);
          setPendingAdminAction('manage');
          setPinModalReason('กรุณากรอกรหัสผ่านกลางเพื่อจัดการแคตตาล็อกสินค้า');
          setIsPinModalOpen(true);
        }}
      />

      <BackupReminderModal
        isOpen={isRemindersModalOpen}
        onClose={() => setIsRemindersModalOpen(false)}
        products={products}
        onRestoreProducts={handleSaveProducts}
        reminders={reminders}
        onUpdateReminders={handleUpdateReminders}
        isLocked={isLocked}
        onRequireUnlock={() => {
          setIsRemindersModalOpen(false);
          setPendingAdminAction('reminders');
          setPinModalReason('กรุณากรอกรหัสผ่านกลางเพื่อสำรองข้อมูลและตั้งการแจ้งเตือน');
          setIsPinModalOpen(true);
        }}
      />

      <ImageZoomModal
        product={zoomModalData?.product || null}
        imageUrl={zoomModalData?.imageUrl || null}
        onClose={() => setZoomModalData(null)}
      />
    </div>
  );
}
