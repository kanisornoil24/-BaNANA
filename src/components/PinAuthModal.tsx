import React, { useState } from 'react';
import {
  X,
  Lock,
  Unlock,
  KeyRound,
  ShieldCheck,
  CheckCircle2,
  AlertCircle,
  Clock
} from 'lucide-react';
import {
  verifyPin,
  setCustomPin,
  lockSystem,
  getAutoLockMinutes,
  setAutoLockMinutes,
  hasCustomPinBeenSet
} from '../services/pinAuthService';

interface PinAuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  isLocked: boolean;
  onLockStatusChanged: (locked: boolean) => void;
  reason?: string | null;
  onSuccessUnlock?: () => void;
}

export const PinAuthModal: React.FC<PinAuthModalProps> = ({
  isOpen,
  onClose,
  isLocked,
  onLockStatusChanged,
  reason,
  onSuccessUnlock
}) => {
  if (!isOpen) return null;

  const [activeTab, setActiveTab] = useState<'unlock' | 'change' | 'settings'>(
    isLocked ? 'unlock' : 'change'
  );
  const [enteredPin, setEnteredPin] = useState('');
  const [currentPinForChange, setCurrentPinForChange] = useState('');
  const [newPin, setNewPin] = useState('');
  const [confirmNewPin, setConfirmNewPin] = useState('');
  const [autoLockMins, setAutoLockMins] = useState(getAutoLockMinutes());
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  const handleUnlock = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage(null);
    const valid = await verifyPin(enteredPin);
    if (valid) {
      onLockStatusChanged(false);
      setMessage({ type: 'success', text: 'ปลดล็อกสิทธิ์ผู้ดูแลระบบสำเร็จ! คุณสามารถจัดการสินค้าและ Google Sheets ได้แล้ว' });
      setTimeout(() => {
        onClose();
        if (onSuccessUnlock) {
          onSuccessUnlock();
        }
      }, 500);
    } else {
      setMessage({ type: 'error', text: 'รหัสผ่านไม่ถูกต้อง (รหัสเริ่มต้นของระบบคือ 123456 หากยังไม่ได้เปลี่ยน)' });
    }
  };

  const handleChangePin = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage(null);

    if (newPin.length < 4) {
      setMessage({ type: 'error', text: 'รหัสผ่านใหม่ต้องมีความยาวอย่างน้อย 4 ตัวอักษร' });
      return;
    }

    if (newPin !== confirmNewPin) {
      setMessage({ type: 'error', text: 'รหัสผ่านใหม่และการยืนยันรหัสผ่านไม่ตรงกัน' });
      return;
    }

    const validCurrent = await verifyPin(currentPinForChange);
    if (!validCurrent) {
      setMessage({ type: 'error', text: 'รหัสผ่านเดิมไม่ถูกต้อง' });
      return;
    }

    await setCustomPin(newPin);
    setMessage({ type: 'success', text: 'เปลี่ยนรหัสผ่านส่วนตัวใหม่เรียบร้อยแล้ว!' });
    setCurrentPinForChange('');
    setNewPin('');
    setConfirmNewPin('');
  };

  const handleManualLock = () => {
    lockSystem();
    onLockStatusChanged(true);
    setActiveTab('unlock');
    setMessage({ type: 'success', text: 'ล็อกระบบเรียบร้อยแล้ว' });
  };

  const handleSaveAutoLock = (mins: number) => {
    setAutoLockMins(mins);
    setAutoLockMinutes(mins);
    setMessage({ type: 'success', text: `ตั้งค่าล็อกอัตโนมัติเป็น ${mins === 0 ? 'ปิดใช้งาน' : mins + ' นาที'}` });
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 animate-fadeIn">
      <div className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col">
        {/* Header */}
        <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between bg-slate-50">
          <div className="flex items-center space-x-2.5">
            <div className={`p-2 rounded-xl ${isLocked ? 'bg-amber-500 text-slate-950 font-bold' : 'bg-yellow-400 text-slate-950 font-bold'} shadow-xs`}>
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-base font-bold text-slate-900">
                รหัสผ่านกลางสำหรับผู้ดูแลระบบ
              </h2>
              <p className="text-xs text-slate-500">
                รหัสเดียวสำหรับจัดการสินค้าทุกอย่างและเข้าถึง Google Sheets
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

        {/* Tab switcher */}
        <div className="flex border-b border-slate-100 bg-slate-50/50 p-1">
          {isLocked ? (
            <button
              onClick={() => setActiveTab('unlock')}
              className="flex-1 py-2 text-xs font-bold text-amber-900 border-b-2 border-yellow-400 flex items-center justify-center gap-1.5"
            >
              <KeyRound className="w-3.5 h-3.5 text-amber-600" />
              <span>ใส่รหัสผ่านกลางเพื่อปลดล็อก</span>
            </button>
          ) : (
            <>
              <button
                onClick={() => {
                  setActiveTab('change');
                  setMessage(null);
                }}
                className={`flex-1 py-2 text-xs font-bold border-b-2 flex items-center justify-center gap-1.5 ${
                  activeTab === 'change'
                    ? 'border-yellow-400 text-amber-950'
                    : 'border-transparent text-slate-500 hover:text-slate-700'
                }`}
              >
                <KeyRound className="w-3.5 h-3.5" />
                <span>เปลี่ยนรหัสผ่านกลาง</span>
              </button>
              <button
                onClick={() => {
                  setActiveTab('settings');
                  setMessage(null);
                }}
                className={`flex-1 py-2 text-xs font-bold border-b-2 flex items-center justify-center gap-1.5 ${
                  activeTab === 'settings'
                    ? 'border-yellow-400 text-amber-950'
                    : 'border-transparent text-slate-500 hover:text-slate-700'
                }`}
              >
                <Clock className="w-3.5 h-3.5" />
                <span>ตั้งเวลาล็อกอัตโนมัติ</span>
              </button>
            </>
          )}
        </div>

        {/* Body */}
        <div className="p-6 space-y-4">
          {reason && isLocked && (
            <div className="p-3 bg-amber-50 border border-amber-200 rounded-xl text-xs text-amber-900 flex items-center gap-2">
              <Lock className="w-4 h-4 text-amber-700 shrink-0" />
              <span>{reason}</span>
            </div>
          )}

          {message && (
            <div
              className={`p-3 rounded-xl text-xs flex items-center gap-2 ${
                message.type === 'success'
                  ? 'bg-emerald-50 text-emerald-800 border border-emerald-200'
                  : 'bg-rose-50 text-rose-800 border border-rose-200'
              }`}
            >
              {message.type === 'success' ? (
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              ) : (
                <AlertCircle className="w-4 h-4 text-rose-600 shrink-0" />
              )}
              <span>{message.text}</span>
            </div>
          )}

          {/* Mode 1: Unlock */}
          {activeTab === 'unlock' && (
            <form onSubmit={handleUnlock} className="space-y-4">
              <div className="text-center py-2">
                <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center mx-auto mb-2 shadow-xs">
                  <Lock className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-slate-900 text-sm">กรอกรหัสผ่านกลางของผู้ดูแลระบบ</h3>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed max-w-xs mx-auto">
                  ระบบถูกตั้งค่าให้ต้องใช้รหัสผ่านกลางเพียงรหัสเดียวเท่านั้น จึงจะสามารถจัดการสินค้าและ Google Sheets ได้ทุกอย่าง (ผู้ที่ไม่มีรหัสสามารถค้นหาและเปรียบเทียบสินค้าได้เท่านั้น)
                </p>
                {hasCustomPinBeenSet() ? (
                  <p className="text-[11px] text-emerald-700 font-medium mt-1.5 flex items-center justify-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>รหัสผ่านกลางถูกตั้งค่าโดยเจ้าของระบบเรียบร้อยแล้ว</span>
                  </p>
                ) : (
                  <p className="text-[11px] text-slate-500 mt-1.5 bg-yellow-50 border border-yellow-200 p-2 rounded-xl">
                    รหัสเริ่มต้นระบบครั้งแรก: <span className="font-mono font-bold text-amber-800">123456</span><br />
                    (กรอก 123456 เพื่อปลดล็อก แล้วเข้าไปตั้งรหัสส่วนตัวของคุณเองได้ทันที)
                  </p>
                )}
              </div>

              <div>
                <input
                  type="password"
                  value={enteredPin}
                  onChange={(e) => setEnteredPin(e.target.value)}
                  placeholder="กรอกรหัสผ่านกลางของคุณ"
                  className="w-full text-center tracking-widest text-lg font-bold px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-yellow-400/30 focus:border-yellow-400"
                  autoFocus
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-yellow-400 hover:bg-yellow-300 text-slate-950 font-bold rounded-xl text-xs sm:text-sm shadow-xs transition-colors"
              >
                ยืนยันรหัสผ่านกลางเพื่อเข้าสู่ระบบ
              </button>
            </form>
          )}

          {/* Mode 2: Change PIN */}
          {activeTab === 'change' && (
            <form onSubmit={handleChangePin} className="space-y-3">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  รหัสผ่านปัจจุบัน:
                </label>
                <input
                  type="password"
                  value={currentPinForChange}
                  onChange={(e) => setCurrentPinForChange(e.target.value)}
                  placeholder="กรอกรหัสเดิม (รหัสเริ่มต้นคือ 123456)"
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-yellow-400/30 focus:border-yellow-400"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  รหัสผ่านใหม่ที่คุณต้องการตั้งเอง:
                </label>
                <input
                  type="password"
                  value={newPin}
                  onChange={(e) => setNewPin(e.target.value)}
                  placeholder="เช่น รหัสตัวเลข 4-8 หลัก หรือข้อความ"
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-yellow-400/30 focus:border-yellow-400"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  ยืนยันรหัสผ่านใหม่อีกครั้ง:
                </label>
                <input
                  type="password"
                  value={confirmNewPin}
                  onChange={(e) => setConfirmNewPin(e.target.value)}
                  placeholder="กรอกรหัสใหม่อีกครั้งให้ตรงกัน"
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-yellow-400/30 focus:border-yellow-400"
                />
              </div>

              <div className="pt-2 flex gap-2">
                <button
                  type="submit"
                  className="flex-1 py-2.5 bg-yellow-400 hover:bg-yellow-300 text-slate-950 font-bold rounded-xl text-xs sm:text-sm shadow-xs transition-colors"
                >
                  บันทึกรหัสผ่านใหม่
                </button>
                <button
                  type="button"
                  onClick={handleManualLock}
                  className="px-3 py-2.5 bg-amber-50 hover:bg-amber-100 text-amber-700 border border-amber-200 rounded-xl text-xs font-semibold transition-colors flex items-center gap-1"
                >
                  <Lock className="w-3.5 h-3.5" />
                  <span>ล็อกทันที</span>
                </button>
              </div>
            </form>
          )}

          {/* Mode 3: Settings */}
          {activeTab === 'settings' && (
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-2">
                  ระยะเวลาล็อกระบบอัตโนมัติเมื่อไม่มีการใช้งาน:
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    { label: '5 นาที', val: 5 },
                    { label: '15 นาที (แนะนำ)', val: 15 },
                    { label: '30 นาที', val: 30 },
                    { label: 'ไม่ล็อกอัตโนมัติ', val: 0 }
                  ].map((item) => (
                    <button
                      key={item.val}
                      type="button"
                      onClick={() => handleSaveAutoLock(item.val)}
                      className={`py-2 px-3 rounded-xl text-xs font-semibold border transition-all ${
                        autoLockMins === item.val
                          ? 'bg-yellow-400 text-slate-950 font-bold border-yellow-400 shadow-xs'
                          : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="pt-3 border-t border-slate-100 flex justify-between items-center">
                <span className="text-xs text-slate-600">ต้องการล็อกระบบทันที:</span>
                <button
                  type="button"
                  onClick={handleManualLock}
                  className="px-3 py-1.5 bg-amber-600 hover:bg-amber-700 text-white rounded-lg text-xs font-semibold flex items-center gap-1 shadow-xs transition-colors"
                >
                  <Lock className="w-3.5 h-3.5" />
                  <span>ล็อกหน้าจอ</span>
                </button>
              </div>
            </div>
          )}

          {/* Privacy Guarantee footnote */}
          <div className="pt-3 border-t border-slate-100 text-[11px] text-slate-400 leading-relaxed flex items-start gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
            <span>
              รหัสผ่านของคุณถูกเข้ารหัสทางคณิตศาสตร์แบบ SHA-256 ผสม Salt ภายในเครื่องนี้เท่านั้น ไม่มีการเชื่อมต่อกับเซิร์ฟเวอร์ภายนอก เพื่อความเป็นส่วนตัวสูงสุด 100%
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
