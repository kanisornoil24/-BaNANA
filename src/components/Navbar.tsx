import React from 'react';
import {
  Smartphone,
  Scale,
  FileSpreadsheet,
  Lock,
  Unlock,
  Bell,
  PlusCircle
} from 'lucide-react';
import { SheetsConfig } from '../types/product';

interface NavbarProps {
  compareCount: number;
  onOpenCompare: () => void;
  onOpenSheets: () => void;
  sheetsConfig: SheetsConfig;
  isLocked: boolean;
  onOpenPinAuth: () => void;
  onOpenManage: () => void;
  onOpenReminders: () => void;
  dueRemindersCount: number;
}

export const Navbar: React.FC<NavbarProps> = ({
  compareCount,
  onOpenCompare,
  onOpenSheets,
  sheetsConfig,
  isLocked,
  onOpenPinAuth,
  onOpenManage,
  onOpenReminders,
  dueRemindersCount
}) => {
  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-linear-to-tr from-amber-500 via-yellow-400 to-yellow-300 flex items-center justify-center text-slate-950 shadow-md shadow-yellow-500/25 font-bold">
              <Smartphone className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="font-bold text-lg text-slate-900 tracking-tight">IT SmartFinder</span>
                <span className="text-[11px] font-semibold bg-yellow-100/90 text-amber-900 border border-yellow-300/80 px-2 py-0.5 rounded-full">
                  ระบบค้นหาอัจฉริยะ
                </span>
              </div>
              <p className="text-xs text-slate-500 hidden sm:block">
                ค้นหา เปรียบเทียบ สเปกมือถือและคอมพิวเตอร์ครบวงจร
              </p>
            </div>
          </div>

          {/* Action Tools */}
          <div className="flex items-center space-x-1.5 sm:space-x-3">
            {/* Google Sheets Sync Button */}
            <button
              onClick={onOpenSheets}
              className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-medium border transition-colors ${
                isLocked
                  ? 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-yellow-50 hover:border-yellow-300'
                  : sheetsConfig.spreadsheetId
                  ? 'bg-emerald-50 text-emerald-700 border-emerald-300 hover:bg-emerald-100'
                  : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
              }`}
              title={isLocked ? 'เข้าถึง Google Sheets (ต้องใช้รหัสผ่านกลาง)' : 'จัดการเชื่อมต่อ Google Sheets'}
            >
              <FileSpreadsheet className="w-4 h-4 text-emerald-600" />
              <span className="hidden md:inline">Google Sheets</span>
              {isLocked && <Lock className="w-3 h-3 text-amber-600 ml-0.5" />}
            </button>

            {/* Reminders / Backup */}
            <button
              onClick={onOpenReminders}
              className="relative p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors border border-transparent hover:border-slate-200"
              title={isLocked ? 'การแจ้งเตือนและการสำรองข้อมูล (ต้องใช้รหัสผ่านกลาง)' : 'การแจ้งเตือนและการสำรองข้อมูล'}
            >
              <Bell className="w-4 h-4" />
              {isLocked && (
                <span className="absolute -bottom-1 -right-1 w-3 h-3 rounded-full bg-amber-100 border border-amber-300 flex items-center justify-center">
                  <Lock className="w-2 h-2 text-amber-700" />
                </span>
              )}
              {dueRemindersCount > 0 && !isLocked && (
                <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-amber-500 text-[10px] font-bold text-white flex items-center justify-center">
                  {dueRemindersCount}
                </span>
              )}
            </button>

            {/* PIN Admin Lock / Status */}
            <button
              onClick={onOpenPinAuth}
              className={`flex items-center space-x-1 px-2.5 py-1.5 rounded-lg text-xs font-semibold border transition-all ${
                isLocked
                  ? 'bg-amber-100/90 text-amber-900 border-amber-300/80 hover:bg-amber-200/80'
                  : 'bg-emerald-50 text-emerald-800 border-emerald-300 hover:bg-emerald-100'
              }`}
              title={isLocked ? 'โหมดบุคคลทั่วไป: ค้นหา & เปรียบเทียบสินค้า (คลิกเพื่อใส่รหัสผ่านกลาง)' : 'โหมดผู้ดูแลระบบ: ปลดล็อกแล้ว (คลิกเพื่อล็อกหรือเปลี่ยนรหัส)'}
            >
              {isLocked ? (
                <>
                  <Lock className="w-3.5 h-3.5 text-amber-700" />
                  <span className="hidden sm:inline">ใส่รหัสกลาง</span>
                </>
              ) : (
                <>
                  <Unlock className="w-3.5 h-3.5 text-emerald-600" />
                  <span className="hidden sm:inline">สิทธิ์ผู้ดูแล</span>
                </>
              )}
            </button>

            {/* Manage Products */}
            <button
              onClick={onOpenManage}
              className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                isLocked
                  ? 'bg-slate-100 hover:bg-yellow-100 text-slate-800 border border-slate-200 hover:border-yellow-400'
                  : 'bg-slate-900 hover:bg-slate-800 text-white'
              }`}
              title={isLocked ? 'จัดการสินค้า (ต้องใช้รหัสผ่านกลาง)' : 'จัดการแคตตาล็อกสินค้า'}
            >
              <PlusCircle className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">จัดการสินค้า</span>
              {isLocked && <Lock className="w-3 h-3 text-amber-600 ml-0.5" />}
            </button>

            {/* Compare Button */}
            <button
              onClick={onOpenCompare}
              className="relative flex items-center space-x-1.5 px-3.5 py-1.5 rounded-lg text-xs font-bold bg-yellow-400 hover:bg-yellow-300 text-slate-950 shadow-sm shadow-yellow-500/20 transition-all active:scale-95"
            >
              <Scale className="w-4 h-4 text-slate-950" />
              <span className="hidden sm:inline">เปรียบเทียบ</span>
              {compareCount > 0 && (
                <span className="w-5 h-5 rounded-full bg-slate-950 text-yellow-400 text-[11px] font-bold flex items-center justify-center shadow-xs">
                  {compareCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
