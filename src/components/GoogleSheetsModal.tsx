import React, { useState, useEffect } from 'react';
import {
  X,
  FileSpreadsheet,
  UploadCloud,
  DownloadCloud,
  Plus,
  CheckCircle2,
  AlertCircle,
  ExternalLink,
  RefreshCw,
  LogOut,
  UserCheck
} from 'lucide-react';
import { Product, SheetsConfig } from '../types/product';
import {
  googleSignIn,
  googleSignOut,
  createCatalogSpreadsheet,
  pushProductsToSheet,
  pullProductsFromSheet,
  getCurrentUser,
  getAccessToken
} from '../services/googleSheets';

interface GoogleSheetsModalProps {
  isOpen: boolean;
  onClose: () => void;
  sheetsConfig: SheetsConfig;
  onUpdateSheetsConfig: (cfg: SheetsConfig) => void;
  products: Product[];
  onProductsUpdatedFromSheet: (products: Product[]) => void;
  isLocked?: boolean;
  onRequireUnlock?: () => void;
}

export const GoogleSheetsModal: React.FC<GoogleSheetsModalProps> = ({
  isOpen,
  onClose,
  sheetsConfig,
  onUpdateSheetsConfig,
  products,
  onProductsUpdatedFromSheet,
  isLocked = false,
  onRequireUnlock
}) => {
  if (!isOpen) return null;

  if (isLocked) {
    return (
      <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 animate-fadeIn">
        <div className="w-full max-w-md bg-white rounded-3xl p-6 text-center space-y-4 shadow-xl border border-slate-200">
          <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center mx-auto shadow-xs">
            <AlertCircle className="w-6 h-6" />
          </div>
          <h3 className="font-bold text-slate-900 text-lg">การเข้าถึง Google Sheets ถูกล็อก</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            ผู้ที่จัดการสินค้าและเข้าถึง Google Sheets ได้ ต้องกรอกรหัสผ่านกลางที่คุณเป็นผู้ตั้งเท่านั้น
            ผู้ที่ไม่มีรหัสสามารถสืบค้นหาข้อมูลและเปรียบเทียบสินค้าได้ตามปกติ
          </p>
          <div className="flex gap-2 justify-center pt-2">
            <button
              onClick={() => {
                if (onRequireUnlock) onRequireUnlock();
              }}
              className="px-4 py-2.5 bg-yellow-400 hover:bg-yellow-300 text-slate-950 font-bold rounded-xl text-xs transition-colors shadow-xs"
            >
              กรอกรหัสผ่านกลางเพื่อเข้าใช้งาน
            </button>
            <button
              onClick={onClose}
              className="px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs font-semibold"
            >
              ปิดหน้าต่าง
            </button>
          </div>
        </div>
      </div>
    );
  }

  const [currentUser, setCurrentUser] = useState<any>(getCurrentUser());
  const [spreadsheetInput, setSpreadsheetInput] = useState(sheetsConfig.spreadsheetId);
  const [isProcessing, setIsProcessing] = useState(false);
  const [statusMessage, setStatusMessage] = useState<{
    type: 'success' | 'error' | 'info';
    text: string;
  } | null>(null);

  useEffect(() => {
    setCurrentUser(getCurrentUser());
  }, [isOpen]);

  const handleSignIn = async () => {
    setIsProcessing(true);
    setStatusMessage(null);
    try {
      const res = await googleSignIn();
      if (res) {
        setCurrentUser(res.user);
        setStatusMessage({
          type: 'success',
          text: `เชื่อมต่อบัญชี Google: ${res.user.email} เรียบร้อยแล้ว`
        });
      }
    } catch (err: any) {
      setStatusMessage({
        type: 'error',
        text: err.message || 'การเข้าสู่ระบบ Google ล้มเหลว'
      });
    } finally {
      setIsProcessing(false);
    }
  };

  const handleSignOut = async () => {
    await googleSignOut();
    setCurrentUser(null);
    setStatusMessage({ type: 'info', text: 'ออกจากระบบ Google แล้ว' });
  };

  const handleCreateNewSheet = async () => {
    setIsProcessing(true);
    setStatusMessage(null);
    try {
      const newSheetId = await createCatalogSpreadsheet('IT SmartFinder แคตตาล็อกสินค้า');
      // Push current products right away
      await pushProductsToSheet(newSheetId, products);

      const updated: SheetsConfig = {
        ...sheetsConfig,
        spreadsheetId: newSheetId,
        lastSyncedAt: new Date().toLocaleString('th-TH'),
        syncStatus: 'success'
      };
      onUpdateSheetsConfig(updated);
      setSpreadsheetInput(newSheetId);

      setStatusMessage({
        type: 'success',
        text: `สร้าง Google Sheet ใหม่สำเร็จ และส่งข้อมูลสินค้า ${products.length} รายการเรียบร้อยแล้ว!`
      });
    } catch (err: any) {
      setStatusMessage({
        type: 'error',
        text: err.message || 'ไม่สามารถสร้าง Google Sheet ได้'
      });
    } finally {
      setIsProcessing(false);
    }
  };

  const handlePushToSheet = async () => {
    if (!sheetsConfig.spreadsheetId && !spreadsheetInput) {
      setStatusMessage({ type: 'error', text: 'กรุณาระบุ Spreadsheet ID หรือกดสร้างชีตใหม่' });
      return;
    }

    const targetId = spreadsheetInput.trim() || sheetsConfig.spreadsheetId;
    setIsProcessing(true);
    setStatusMessage(null);
    try {
      await pushProductsToSheet(targetId, products);
      const updated: SheetsConfig = {
        ...sheetsConfig,
        spreadsheetId: targetId,
        lastSyncedAt: new Date().toLocaleString('th-TH'),
        syncStatus: 'success'
      };
      onUpdateSheetsConfig(updated);
      setStatusMessage({
        type: 'success',
        text: `ซิงค์ข้อมูลสินค้า ${products.length} รายการไปยัง Google Sheets เรียบร้อยแล้ว!`
      });
    } catch (err: any) {
      setStatusMessage({
        type: 'error',
        text: err.message || 'ไม่สามารถซิงค์ข้อมูลไปยัง Google Sheets ได้'
      });
    } finally {
      setIsProcessing(false);
    }
  };

  const handlePullFromSheet = async () => {
    const targetId = spreadsheetInput.trim() || sheetsConfig.spreadsheetId;
    if (!targetId) {
      setStatusMessage({ type: 'error', text: 'กรุณาระบุ Spreadsheet ID' });
      return;
    }

    setIsProcessing(true);
    setStatusMessage(null);
    try {
      const rows = await pullProductsFromSheet(targetId);
      if (rows.length > 0) {
        // Merge or update local products
        const updatedProducts: Product[] = rows.map((r, i) => {
          const existing = products.find((p) => p.id === r.id);
          return {
            id: r.id || `prod-sheet-${i}`,
            name: r.name || 'สินค้า',
            category: r.category || 'mobile',
            brand: r.brand || 'ทั่วไป',
            price: r.price || 0,
            originalPrice: r.originalPrice || r.price || 0,
            rating: existing?.rating || 4.5,
            reviewCount: existing?.reviewCount || 10,
            inStock: r.inStock ?? true,
            stockCount: r.stockCount || 5,
            tags: existing?.tags || ['สินค้าจาก Google Sheets'],
            colors: existing?.colors || [
              { name: 'ดำ', hex: '#1e293b' },
              { name: 'ขาว', hex: '#f8fafc' }
            ],
            defaultImage:
              existing?.defaultImage ||
              'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=800&q=80',
            specs: existing?.specs || {
              screen: '6.7 นิ้ว AMOLED',
              processor: 'Octa-core 5G',
              ram: '8GB',
              storage: '256GB',
              rearCamera: '50MP OIS',
              frontCamera: '32MP',
              battery: '5,000 mAh',
              charging: '67W',
              os: 'Android 14',
              weight: '190g',
              connectivity: '5G, Wi-Fi 6'
            },
            promotions: existing?.promotions || ['ผ่อน 0% นาน 10 เดือน'],
            freeGifts: existing?.freeGifts || ['หัวชาร์จแท้', 'เคสกันรอย'],
            warranty: r.warranty || 'ประกันศูนย์ 1 ปี',
            afterSales: existing?.afterSales || 'บริการดูแลเครื่องฟรี',
            highlightPoints: existing?.highlightPoints || ['สินค้ามาตรฐานศูนย์'],
            limitations: existing?.limitations || [],
            lastUpdated: r.lastUpdated || new Date().toISOString().split('T')[0]
          };
        });

        onProductsUpdatedFromSheet(updatedProducts);
        const updated: SheetsConfig = {
          ...sheetsConfig,
          spreadsheetId: targetId,
          lastSyncedAt: new Date().toLocaleString('th-TH'),
          syncStatus: 'success'
        };
        onUpdateSheetsConfig(updated);

        setStatusMessage({
          type: 'success',
          text: `ดึงข้อมูลสินค้าจาก Google Sheets จำนวน ${updatedProducts.length} รายการสำเร็จ!`
        });
      } else {
        setStatusMessage({ type: 'info', text: 'ไม่พบข้อมูลแถวสินค้าในชีต' });
      }
    } catch (err: any) {
      setStatusMessage({
        type: 'error',
        text: err.message || 'ไม่สามารถดึงข้อมูลจากชีตได้'
      });
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 animate-fadeIn">
      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[92vh]">
        {/* Header */}
        <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between bg-slate-50">
          <div className="flex items-center space-x-2.5">
            <div className="p-2 rounded-xl bg-emerald-600 text-white shadow-xs">
              <FileSpreadsheet className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-base sm:text-lg font-bold text-slate-900">
                ระบบจัดการและซิงค์ข้อมูล Google Sheets
              </h2>
              <p className="text-xs text-slate-500">
                บันทึกแคตตาล็อกสินค้าลงสเปรดชีตของคุณ และซิงค์อัตโนมัติบนคลาวด์
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-700 rounded-full hover:bg-slate-200/60"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6 overflow-y-auto">
          {/* Status Message */}
          {statusMessage && (
            <div
              className={`p-3.5 rounded-xl text-xs sm:text-sm flex items-start gap-2.5 ${
                statusMessage.type === 'success'
                  ? 'bg-emerald-50 text-emerald-800 border border-emerald-200'
                  : statusMessage.type === 'error'
                  ? 'bg-rose-50 text-rose-800 border border-rose-200'
                  : 'bg-blue-50 text-blue-800 border border-blue-200'
              }`}
            >
              {statusMessage.type === 'success' ? (
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              ) : (
                <AlertCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
              )}
              <span className="leading-relaxed">{statusMessage.text}</span>
            </div>
          )}

          {/* Account Status / Login */}
          <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200">
            <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
              1. สถานะการเชื่อมต่อบัญชี Google
            </h3>

            {currentUser ? (
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  {currentUser.photoURL ? (
                    <img
                      src={currentUser.photoURL}
                      alt={currentUser.displayName || ''}
                      className="w-9 h-9 rounded-full border border-slate-200"
                    />
                  ) : (
                    <div className="w-9 h-9 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
                      <UserCheck className="w-4 h-4" />
                    </div>
                  )}
                  <div>
                    <div className="text-xs font-bold text-slate-800">
                      {currentUser.displayName || 'ผู้ใช้ Google'}
                    </div>
                    <div className="text-xs text-slate-500">{currentUser.email}</div>
                  </div>
                </div>

                <button
                  onClick={handleSignOut}
                  className="px-3 py-1.5 rounded-lg border border-slate-200 bg-white hover:bg-slate-100 text-xs font-semibold text-slate-600 flex items-center gap-1.5 transition-colors"
                >
                  <LogOut className="w-3.5 h-3.5" />
                  <span>ออกจากระบบ</span>
                </button>
              </div>
            ) : (
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <p className="text-xs text-slate-600">
                  เข้าสู่ระบบด้วยบัญชี Google เพื่อให้แอปสามารถอ่านและเขียนไฟล์ Sheets ใน Google Drive ของคุณ
                </p>
                {/* Official styled Google Sign In button */}
                <button
                  onClick={handleSignIn}
                  disabled={isProcessing}
                  className="flex items-center space-x-2 px-4 py-2 bg-white border border-slate-300 rounded-xl hover:bg-slate-50 shadow-xs text-xs sm:text-sm font-semibold text-slate-700 transition-all shrink-0"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24">
                    <path
                      fill="#4285F4"
                      d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.8-2.4 3.66v3.04h3.86c2.26-2.09 3.685-5.17 3.685-9.14z"
                    />
                    <path
                      fill="#34A853"
                      d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.86-3.04c-1.08.72-2.45 1.16-4.07 1.16-3.13 0-5.78-2.11-6.73-4.96H1.26v3.13C3.25 21.31 7.35 24 12 24z"
                    />
                    <path
                      fill="#FBBC05"
                      d="M5.27 14.25c-.25-.72-.38-1.49-.38-2.25s.13-1.53.38-2.25V6.62H1.26C.46 8.23 0 10.06 0 12s.46 3.77 1.26 5.38l4.01-3.13z"
                    />
                    <path
                      fill="#EA4335"
                      d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.35 0 3.25 2.69 1.26 6.62l4.01 3.13c.95-2.85 3.6-4.96 6.73-4.96z"
                    />
                  </svg>
                  <span>ลงชื่อเข้าใช้ด้วย Google</span>
                </button>
              </div>
            )}
          </div>

          {/* Spreadsheet ID & Actions */}
          <div className="space-y-4">
            <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider">
              2. กำหนดตาราง Google Sheets
            </h3>

            <div>
              <label className="block text-xs font-medium text-slate-700 mb-1">
                Google Spreadsheet ID:
              </label>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={spreadsheetInput}
                  onChange={(e) => setSpreadsheetInput(e.target.value)}
                  placeholder="เช่น 1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms"
                  className="flex-1 px-3.5 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 font-mono"
                />
                {sheetsConfig.spreadsheetId && (
                  <a
                    href={`https://docs.google.com/spreadsheets/d/${sheetsConfig.spreadsheetId}`}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded-xl border border-slate-200 text-slate-600 hover:text-emerald-600 hover:bg-slate-50 flex items-center justify-center transition-colors"
                    title="เปิดดูชีตบน Google Drive"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>
              <p className="text-[11px] text-slate-400 mt-1">
                คุณสามารถใส่ ID จาก URL ของ Google Sheets หรือกดปุ่มด้านล่างเพื่อสร้างไฟล์ใหม่อัตโนมัติ
              </p>
            </div>

            {/* Quick Action Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <button
                onClick={handleCreateNewSheet}
                disabled={isProcessing || !currentUser}
                className="p-3 bg-emerald-600 hover:bg-emerald-700 disabled:bg-slate-200 disabled:text-slate-400 text-white rounded-xl text-xs font-semibold shadow-xs flex flex-col items-center justify-center gap-1.5 transition-all"
              >
                <Plus className="w-4 h-4" />
                <span>สร้าง Sheet แคตตาล็อกใหม่</span>
              </button>

              <button
                onClick={handlePushToSheet}
                disabled={isProcessing || !currentUser}
                className="p-3 bg-yellow-400 hover:bg-yellow-300 disabled:bg-slate-200 disabled:text-slate-400 text-slate-950 font-bold rounded-xl text-xs shadow-xs flex flex-col items-center justify-center gap-1.5 transition-all"
              >
                <UploadCloud className="w-4 h-4 text-slate-950" />
                <span>ส่งข้อมูลขึ้น Google Sheets</span>
              </button>

              <button
                onClick={handlePullFromSheet}
                disabled={isProcessing || !currentUser}
                className="p-3 bg-slate-800 hover:bg-slate-900 disabled:bg-slate-200 disabled:text-slate-400 text-white rounded-xl text-xs font-semibold shadow-xs flex flex-col items-center justify-center gap-1.5 transition-all"
              >
                <DownloadCloud className="w-4 h-4" />
                <span>ดึงข้อมูลจาก Sheets ลงแอพ</span>
              </button>
            </div>
          </div>

          {/* Sync Preferences */}
          <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-2">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-xs font-bold text-slate-800">
                  ซิงค์อัตโนมัติแบบเรียลไทม์ (Auto-Sync)
                </div>
                <div className="text-[11px] text-slate-500">
                  เมื่อคุณเพิ่มหรือแก้ไขสินค้า ข้อมูลจะถูกซิงค์ไปยัง Google Sheets ทันที
                </div>
              </div>
              <input
                type="checkbox"
                checked={sheetsConfig.autoSync}
                onChange={(e) =>
                  onUpdateSheetsConfig({ ...sheetsConfig, autoSync: e.target.checked })
                }
                className="w-4 h-4 text-emerald-600 rounded-sm focus:ring-emerald-500"
              />
            </div>

            {sheetsConfig.lastSyncedAt && (
              <div className="text-[11px] text-slate-500 pt-1 border-t border-slate-200">
                ซิงค์ข้อมูลล่าสุดเมื่อ: <span className="font-semibold text-slate-700">{sheetsConfig.lastSyncedAt}</span>
              </div>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-slate-100 bg-slate-50 flex items-center justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 bg-slate-800 hover:bg-slate-900 text-white rounded-xl text-xs sm:text-sm font-semibold transition-colors"
          >
            เรียบร้อย
          </button>
        </div>
      </div>
    </div>
  );
};
