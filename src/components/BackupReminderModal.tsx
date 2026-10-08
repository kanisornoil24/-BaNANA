import React, { useState } from 'react';
import {
  X,
  Bell,
  ShieldCheck,
  Download,
  Upload,
  Calendar,
  Clock,
  Plus,
  Trash2,
  CheckCircle,
  FileCheck,
  Lock
} from 'lucide-react';
import { Product, ReminderConfig } from '../types/product';
import {
  exportEncryptedBackup,
  importEncryptedBackup,
  setLastBackupTime,
  getLastBackupTime
} from '../services/storageService';

interface BackupReminderModalProps {
  isOpen: boolean;
  onClose: () => void;
  products: Product[];
  onRestoreProducts: (products: Product[]) => void;
  reminders: ReminderConfig[];
  onUpdateReminders: (reminders: ReminderConfig[]) => void;
  isLocked?: boolean;
  onRequireUnlock?: () => void;
}

export const BackupReminderModal: React.FC<BackupReminderModalProps> = ({
  isOpen,
  onClose,
  products,
  onRestoreProducts,
  reminders,
  onUpdateReminders,
  isLocked = false,
  onRequireUnlock
}) => {
  if (!isOpen) return null;

  if (isLocked) {
    return (
      <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 animate-fadeIn">
        <div className="w-full max-w-md bg-white rounded-3xl p-6 text-center space-y-4 shadow-xl border border-slate-200">
          <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center mx-auto shadow-xs">
            <Lock className="w-6 h-6" />
          </div>
          <h3 className="font-bold text-slate-900 text-lg">ระบบสำรองข้อมูลและการแจ้งเตือนถูกล็อก</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            ต้องใช้รหัสผ่านกลางของผู้ดูแลระบบที่คุณตั้งไว้เท่านั้นในการสำรองข้อมูลหรือปรับแต่งการแจ้งเตือน
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

  const [activeTab, setActiveTab] = useState<'reminders' | 'backup'>('reminders');
  const [encryptPassword, setEncryptPassword] = useState('');
  const [importPassword, setImportPassword] = useState('');
  const [importFile, setImportFile] = useState<File | null>(null);
  const [feedback, setFeedback] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  // New reminder form
  const [newTitle, setNewTitle] = useState('');
  const [newDays, setNewDays] = useState(3);

  const lastBackup = getLastBackupTime();

  const handleExport = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!encryptPassword) {
      setFeedback({ type: 'error', text: 'กรุณากำหนดรหัสผ่านสำหรับเข้ารหัสไฟล์สำรองข้อมูล' });
      return;
    }

    try {
      const blob = await exportEncryptedBackup(encryptPassword, products);
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `it_smartfinder_backup_${new Date().toISOString().split('T')[0]}.enc`;
      a.click();
      URL.revokeObjectURL(url);

      setLastBackupTime();
      setFeedback({
        type: 'success',
        text: 'ส่งออกไฟล์สำรองข้อมูลที่เข้ารหัสปลอดภัย AES-256 เรียบร้อยแล้ว!'
      });
      setEncryptPassword('');
    } catch (err: any) {
      setFeedback({ type: 'error', text: err.message || 'การเข้ารหัสส่งออกล้มเหลว' });
    }
  };

  const handleImport = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!importFile) {
      setFeedback({ type: 'error', text: 'กรุณาเลือกไฟล์สำรองข้อมูล (.enc)' });
      return;
    }
    if (!importPassword) {
      setFeedback({ type: 'error', text: 'กรุณากรอกรหัสผ่านสำหรับถอดรหัส' });
      return;
    }

    try {
      const restored = await importEncryptedBackup(importFile, importPassword);
      onRestoreProducts(restored);
      setFeedback({
        type: 'success',
        text: `กู้คืนข้อมูลสำเร็จ! นำเข้าสินค้าจำนวน ${restored.length} รายการแล้ว`
      });
      setImportPassword('');
      setImportFile(null);
    } catch (err: any) {
      setFeedback({ type: 'error', text: err.message || 'การถอดรหัสกู้คืนล้มเหลว' });
    }
  };

  const handleAddReminder = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle.trim()) return;

    const newRem: ReminderConfig = {
      id: `rem-${Date.now()}`,
      title: newTitle.trim(),
      intervalDays: newDays,
      enabled: true,
      type: 'backup',
      lastTriggered: new Date().toISOString()
    };

    onUpdateReminders([...reminders, newRem]);
    setNewTitle('');
    setFeedback({ type: 'success', text: 'เพิ่มการแจ้งเตือนเตือนความจำใหม่เรียบร้อยแล้ว' });
  };

  const handleToggleReminder = (id: string) => {
    const updated = reminders.map((r) => (r.id === id ? { ...r, enabled: !r.enabled } : r));
    onUpdateReminders(updated);
  };

  const handleDeleteReminder = (id: string) => {
    onUpdateReminders(reminders.filter((r) => r.id !== id));
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 animate-fadeIn">
      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[92vh]">
        {/* Header */}
        <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between bg-slate-50">
          <div className="flex items-center space-x-2.5">
            <div className="p-2 rounded-xl bg-yellow-400 text-slate-950 font-bold shadow-xs">
              <Bell className="w-5 h-5 text-slate-950" />
            </div>
            <div>
              <h2 className="text-base sm:text-lg font-bold text-slate-900">
                ระบบสำรองข้อมูล & แจ้งเตือนเตือนความจำ
              </h2>
              <p className="text-xs text-slate-500">
                สำรองข้อมูลเข้ารหัส AES-256 และตั้งการแจ้งเตือนปรับแต่งได้ตามใจ
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

        {/* Tab switch */}
        <div className="flex border-b border-slate-100 bg-slate-50/50 p-1">
          <button
            onClick={() => setActiveTab('reminders')}
            className={`flex-1 py-2 text-xs font-bold border-b-2 flex items-center justify-center gap-1.5 ${
              activeTab === 'reminders'
                ? 'border-yellow-400 text-amber-950'
                : 'border-transparent text-slate-500 hover:text-slate-700'
            }`}
          >
            <Bell className="w-3.5 h-3.5" />
            <span>การแจ้งเตือนเตือนความจำ ({reminders.filter((r) => r.enabled).length})</span>
          </button>
          <button
            onClick={() => setActiveTab('backup')}
            className={`flex-1 py-2 text-xs font-bold border-b-2 flex items-center justify-center gap-1.5 ${
              activeTab === 'backup'
                ? 'border-yellow-400 text-amber-950'
                : 'border-transparent text-slate-500 hover:text-slate-700'
            }`}
          >
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>สำรองข้อมูลเข้ารหัส (AES-256)</span>
          </button>
        </div>

        {/* Body */}
        <div className="p-6 space-y-5 overflow-y-auto">
          {feedback && (
            <div
              className={`p-3 rounded-xl text-xs flex items-center gap-2 ${
                feedback.type === 'success'
                  ? 'bg-emerald-50 text-emerald-800 border border-emerald-200'
                  : 'bg-rose-50 text-rose-800 border border-rose-200'
              }`}
            >
              <span>{feedback.text}</span>
            </div>
          )}

          {/* 1. Reminders Tab */}
          {activeTab === 'reminders' && (
            <div className="space-y-4">
              {/* Existing Reminders List */}
              <div className="space-y-2">
                <h3 className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                  รายการเตือนความจำที่ตั้งไว้
                </h3>
                {reminders.map((rem) => (
                  <div
                    key={rem.id}
                    className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl flex items-center justify-between gap-3 text-xs sm:text-sm"
                  >
                    <div className="flex items-center space-x-3">
                      <input
                        type="checkbox"
                        checked={rem.enabled}
                        onChange={() => handleToggleReminder(rem.id)}
                        className="w-4 h-4 text-amber-500 rounded-sm focus:ring-yellow-400 cursor-pointer"
                      />
                      <div>
                        <div className={`font-semibold ${rem.enabled ? 'text-slate-800' : 'text-slate-400 line-through'}`}>
                          {rem.title}
                        </div>
                        <div className="text-[11px] text-slate-500 flex items-center gap-2 mt-0.5">
                          <span className="flex items-center gap-1">
                            <Clock className="w-3 h-3" /> ทุก {rem.intervalDays} วัน
                          </span>
                        </div>
                      </div>
                    </div>

                    <button
                      onClick={() => handleDeleteReminder(rem.id)}
                      className="p-1 text-slate-400 hover:text-rose-600 rounded-lg hover:bg-slate-200/50"
                      title="ลบการแจ้งเตือน"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>

              {/* Add New Reminder Form */}
              <form onSubmit={handleAddReminder} className="pt-3 border-t border-slate-100 space-y-2.5">
                <h4 className="text-xs font-bold text-slate-700">เพิ่มการแจ้งเตือนใหม่</h4>
                <div className="flex flex-col sm:flex-row gap-2">
                  <input
                    type="text"
                    required
                    value={newTitle}
                    onChange={(e) => setNewTitle(e.target.value)}
                    placeholder="เช่น ตรวจสอบโปรโมชั่นใหม่ทุกสัปดาห์..."
                    className="flex-1 px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 focus:outline-none focus:ring-1 focus:ring-yellow-400"
                  />
                  <div className="flex items-center gap-1.5 shrink-0">
                    <span className="text-xs text-slate-500">ทุก</span>
                    <input
                      type="number"
                      min={1}
                      max={90}
                      value={newDays}
                      onChange={(e) => setNewDays(Number(e.target.value))}
                      className="w-16 px-2 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 text-center font-bold focus:outline-none focus:ring-1 focus:ring-yellow-400"
                    />
                    <span className="text-xs text-slate-500">วัน</span>
                    <button
                      type="submit"
                      className="px-3 py-2 bg-yellow-400 hover:bg-yellow-300 text-slate-950 font-bold rounded-xl text-xs flex items-center gap-1 shadow-xs transition-colors"
                    >
                      <Plus className="w-3.5 h-3.5 text-slate-950" />
                      <span>เพิ่ม</span>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          )}

          {/* 2. Encrypted Backup & Restore Tab */}
          {activeTab === 'backup' && (
            <div className="space-y-6">
              {/* Export Encrypted File */}
              <form onSubmit={handleExport} className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-3">
                <div className="flex items-center gap-2">
                  <Download className="w-4 h-4 text-amber-600" />
                  <h3 className="font-bold text-slate-800 text-xs sm:text-sm">
                    ส่งออกไฟล์สำรองข้อมูลแบบเข้ารหัส (Encrypted Export)
                  </h3>
                </div>
                <p className="text-xs text-slate-500">
                  ไฟล์สำรองจะถูกเข้ารหัสด้วยอัลกอริทึม AES-GCM 256-bit ปลอดภัยสูงสุด คุณสามารถเก็บไฟล์นี้ไว้ในคอมพิวเตอร์ แฟลชไดรฟ์ หรือส่งต่อได้โดยไม่มีใครอ่านข้อมูลได้หากไม่มีรหัสผ่าน
                </p>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    ตั้งรหัสผ่านสำหรับเข้ารหัสไฟล์นี้:
                  </label>
                  <input
                    type="password"
                    required
                    value={encryptPassword}
                    onChange={(e) => setEncryptPassword(e.target.value)}
                    placeholder="กรอกรหัสผ่านเพื่อล็อกไฟล์สำรอง"
                    className="w-full px-3.5 py-2 bg-white border border-slate-200 rounded-xl text-xs focus:outline-none focus:ring-1 focus:ring-yellow-400"
                  />
                </div>

                <div className="flex items-center justify-between pt-1">
                  <span className="text-[11px] text-slate-400">
                    {lastBackup ? `สำรองล่าสุด: ${new Date(lastBackup).toLocaleString('th-TH')}` : 'ยังไม่เคยสำรองข้อมูล'}
                  </span>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-yellow-400 hover:bg-yellow-300 text-slate-950 font-bold rounded-xl text-xs shadow-xs flex items-center gap-1.5 transition-colors"
                  >
                    <Lock className="w-3.5 h-3.5 text-slate-950" />
                    <span>ดาวน์โหลดไฟล์เข้ารหัส</span>
                  </button>
                </div>
              </form>

              {/* Import Encrypted File */}
              <form onSubmit={handleImport} className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-3">
                <div className="flex items-center gap-2">
                  <Upload className="w-4 h-4 text-emerald-600" />
                  <h3 className="font-bold text-slate-800 text-xs sm:text-sm">
                    กู้คืนข้อมูลจากไฟล์สำรอง (Encrypted Import)
                  </h3>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    เลือกไฟล์สำรองข้อมูล (.enc):
                  </label>
                  <input
                    type="file"
                    accept=".enc"
                    onChange={(e) => setImportFile(e.target.files?.[0] || null)}
                    className="w-full text-xs text-slate-500 file:mr-3 file:py-1.5 file:px-3 file:rounded-lg file:border-0 file:text-xs file:font-semibold file:bg-slate-200 file:text-slate-700 hover:file:bg-slate-300"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    รหัสผ่านสำหรับถอดรหัส:
                  </label>
                  <input
                    type="password"
                    required
                    value={importPassword}
                    onChange={(e) => setImportPassword(e.target.value)}
                    placeholder="กรอกรหัสผ่านที่ใช้ตอนเข้ารหัส"
                    className="w-full px-3.5 py-2 bg-white border border-slate-200 rounded-xl text-xs"
                  />
                </div>

                <div className="pt-1 flex justify-end">
                  <button
                    type="submit"
                    className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-semibold shadow-xs flex items-center gap-1.5"
                  >
                    <FileCheck className="w-3.5 h-3.5" />
                    <span>ถอดรหัสและกู้คืนข้อมูล</span>
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-3.5 border-t border-slate-100 bg-slate-50 flex items-center justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 bg-slate-800 hover:bg-slate-900 text-white rounded-xl text-xs sm:text-sm font-semibold transition-colors"
          >
            ปิด
          </button>
        </div>
      </div>
    </div>
  );
};
