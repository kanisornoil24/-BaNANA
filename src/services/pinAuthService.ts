/**
 * Custom PIN / Passcode Authentication Service
 * User sets their own custom code (no external social accounts required, max privacy).
 * Uses Web Crypto SHA-256 + Salt hashing.
 */

const STORAGE_KEY_PIN_HASH = 'it_smartfinder_pin_hash';
const STORAGE_KEY_PIN_SALT = 'it_smartfinder_pin_salt';
const STORAGE_KEY_IS_LOCKED = 'it_smartfinder_is_locked';
const STORAGE_KEY_SESSION_EXP = 'it_smartfinder_session_exp';
const STORAGE_KEY_AUTOLOCK_MINS = 'it_smartfinder_autolock_mins';

// Default initial PIN for easy first-time launch is '123456'
const DEFAULT_INITIAL_PIN = '123456';

export async function hashPin(pin: string, salt: string): Promise<string> {
  const enc = new TextEncoder();
  const data = enc.encode(pin + ':' + salt);
  const hashBuffer = await crypto.subtle.digest('SHA-256', data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
}

export function generateSalt(): string {
  const arr = new Uint8Array(16);
  crypto.getRandomValues(arr);
  return Array.from(arr).map(b => b.toString(16).padStart(2, '0')).join('');
}

export async function initDefaultPinIfNeeded(): Promise<void> {
  const existingHash = localStorage.getItem(STORAGE_KEY_PIN_HASH);
  if (!existingHash) {
    const salt = generateSalt();
    const hash = await hashPin(DEFAULT_INITIAL_PIN, salt);
    localStorage.setItem(STORAGE_KEY_PIN_SALT, salt);
    localStorage.setItem(STORAGE_KEY_PIN_HASH, hash);
    localStorage.setItem(STORAGE_KEY_AUTOLOCK_MINS, '15');
    // Locked by default so only someone with the central PIN can manage products or access Google Sheets
    localStorage.setItem(STORAGE_KEY_IS_LOCKED, 'true');
  }
}

export async function verifyPin(pin: string): Promise<boolean> {
  let salt = localStorage.getItem(STORAGE_KEY_PIN_SALT);
  let storedHash = localStorage.getItem(STORAGE_KEY_PIN_HASH);

  if (!salt || !storedHash) {
    await initDefaultPinIfNeeded();
    salt = localStorage.getItem(STORAGE_KEY_PIN_SALT)!;
    storedHash = localStorage.getItem(STORAGE_KEY_PIN_HASH)!;
  }

  const computed = await hashPin(pin, salt);
  if (computed === storedHash) {
    const autoLockMins = parseInt(localStorage.getItem(STORAGE_KEY_AUTOLOCK_MINS) || '15', 10);
    const expTime = Date.now() + (autoLockMins > 0 ? autoLockMins : 60) * 60 * 1000;
    localStorage.setItem(STORAGE_KEY_SESSION_EXP, expTime.toString());
    localStorage.setItem(STORAGE_KEY_IS_LOCKED, 'false');
    return true;
  }
  return false;
}

const STORAGE_KEY_PIN_IS_CUSTOM = 'it_smartfinder_pin_is_custom';

export async function setCustomPin(newPin: string): Promise<void> {
  const salt = generateSalt();
  const hash = await hashPin(newPin, salt);
  localStorage.setItem(STORAGE_KEY_PIN_SALT, salt);
  localStorage.setItem(STORAGE_KEY_PIN_HASH, hash);
  localStorage.setItem(STORAGE_KEY_PIN_IS_CUSTOM, 'true');
}

export function hasCustomPinBeenSet(): boolean {
  return localStorage.getItem(STORAGE_KEY_PIN_IS_CUSTOM) === 'true';
}

export function isSystemLocked(): boolean {
  const isExplicitLocked = localStorage.getItem(STORAGE_KEY_IS_LOCKED);
  if (isExplicitLocked === 'true') return true;

  const expStr = localStorage.getItem(STORAGE_KEY_SESSION_EXP);
  if (!expStr) {
    // If not unlocked in this session, keep locked for privacy & security
    return true;
  }

  const exp = parseInt(expStr, 10);
  if (Date.now() > exp) {
    localStorage.setItem(STORAGE_KEY_IS_LOCKED, 'true');
    return true;
  }
  return false;
}

export function lockSystem(): void {
  localStorage.setItem(STORAGE_KEY_IS_LOCKED, 'true');
  localStorage.removeItem(STORAGE_KEY_SESSION_EXP);
}

export function getAutoLockMinutes(): number {
  return parseInt(localStorage.getItem(STORAGE_KEY_AUTOLOCK_MINS) || '15', 10);
}

export function setAutoLockMinutes(mins: number): void {
  localStorage.setItem(STORAGE_KEY_AUTOLOCK_MINS, mins.toString());
}
