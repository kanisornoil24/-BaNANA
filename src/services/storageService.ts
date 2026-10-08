import { Product, ReminderConfig, SheetsConfig } from '../types/product';
import { INITIAL_PRODUCTS } from '../data/initialProducts';

const STORAGE_KEY_PRODUCTS = 'it_smartfinder_products';
const STORAGE_KEY_SHEETS_CONFIG = 'it_smartfinder_sheets_config';
const STORAGE_KEY_REMINDERS = 'it_smartfinder_reminders';
const STORAGE_KEY_LAST_BACKUP = 'it_smartfinder_last_backup';

export function loadProducts(): Product[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY_PRODUCTS);
    if (!raw) {
      saveProducts(INITIAL_PRODUCTS);
      return INITIAL_PRODUCTS;
    }
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) && parsed.length > 0 ? parsed : INITIAL_PRODUCTS;
  } catch (err) {
    console.error('Failed to load products from localStorage', err);
    return INITIAL_PRODUCTS;
  }
}

export function saveProducts(products: Product[]): void {
  try {
    localStorage.setItem(STORAGE_KEY_PRODUCTS, JSON.stringify(products));
  } catch (err) {
    console.error('Failed to save products to localStorage', err);
  }
}

export function loadSheetsConfig(): SheetsConfig {
  try {
    const raw = localStorage.getItem(STORAGE_KEY_SHEETS_CONFIG);
    if (raw) return JSON.parse(raw);
  } catch {}
  return {
    spreadsheetId: '',
    spreadsheetName: 'IT SmartFinder สินค้า',
    autoSync: true,
    syncStatus: 'idle'
  };
}

export function saveSheetsConfig(config: SheetsConfig): void {
  localStorage.setItem(STORAGE_KEY_SHEETS_CONFIG, JSON.stringify(config));
}

export function loadReminders(): ReminderConfig[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY_REMINDERS);
    if (raw) return JSON.parse(raw);
  } catch {}
  return [
    {
      id: 'rem-backup',
      title: 'สำรองข้อมูลสินค้าขึ้น Cloud / Google Sheets',
      intervalDays: 3,
      enabled: true,
      type: 'backup',
      lastTriggered: new Date().toISOString()
    },
    {
      id: 'rem-price',
      title: 'ตรวจสอบและอัปเดตราคาโปรโมชั่นหน้าร้าน',
      intervalDays: 1,
      enabled: true,
      type: 'price_check'
    },
    {
      id: 'rem-stock',
      title: 'ตรวจสอบสต็อกสินค้าคงเหลือและสั่งเพิ่ม',
      intervalDays: 7,
      enabled: true,
      type: 'restock'
    }
  ];
}

export function saveReminders(reminders: ReminderConfig[]): void {
  localStorage.setItem(STORAGE_KEY_REMINDERS, JSON.stringify(reminders));
}

export function setLastBackupTime(): void {
  localStorage.setItem(STORAGE_KEY_LAST_BACKUP, new Date().toISOString());
}

export function getLastBackupTime(): string | null {
  return localStorage.getItem(STORAGE_KEY_LAST_BACKUP);
}

// ----------------- AES-GCM Encryption / Decryption for Backup -----------------

async function getKeyFromPassword(password: string, salt: Uint8Array): Promise<CryptoKey> {
  const enc = new TextEncoder();
  const keyMaterial = await crypto.subtle.importKey(
    'raw',
    enc.encode(password),
    { name: 'PBKDF2' },
    false,
    ['deriveKey']
  );
  return crypto.subtle.deriveKey(
    {
      name: 'PBKDF2',
      salt: salt as any,
      iterations: 100000,
      hash: 'SHA-256'
    },
    keyMaterial,
    { name: 'AES-GCM', length: 256 },
    false,
    ['encrypt', 'decrypt']
  );
}

export async function exportEncryptedBackup(password: string, products: Product[]): Promise<Blob> {
  const enc = new TextEncoder();
  const rawData = JSON.stringify({
    version: '1.0',
    exportDate: new Date().toISOString(),
    products
  });

  const salt = crypto.getRandomValues(new Uint8Array(16));
  const iv = crypto.getRandomValues(new Uint8Array(12));
  const key = await getKeyFromPassword(password, salt);

  const encryptedBuffer = await crypto.subtle.encrypt(
    { name: 'AES-GCM', iv: iv as any },
    key,
    enc.encode(rawData)
  );

  // Combine [salt(16), iv(12), ciphertext]
  const combined = new Uint8Array(salt.byteLength + iv.byteLength + encryptedBuffer.byteLength);
  combined.set(salt, 0);
  combined.set(iv, salt.byteLength);
  combined.set(new Uint8Array(encryptedBuffer), salt.byteLength + iv.byteLength);

  return new Blob([combined], { type: 'application/octet-stream' });
}

export async function importEncryptedBackup(file: File, password: string): Promise<Product[]> {
  const buffer = await file.arrayBuffer();
  const bytes = new Uint8Array(buffer);

  if (bytes.length < 28) {
    throw new Error('ไฟล์สำรองข้อมูลไม่ถูกต้องหรือไม่สมบูรณ์');
  }

  const salt = bytes.slice(0, 16);
  const iv = bytes.slice(16, 28);
  const data = bytes.slice(28);

  const key = await getKeyFromPassword(password, salt);
  try {
    const decryptedBuffer = await crypto.subtle.decrypt(
      { name: 'AES-GCM', iv: iv as any },
      key,
      data
    );
    const dec = new TextDecoder();
    const jsonStr = dec.decode(decryptedBuffer);
    const parsed = JSON.parse(jsonStr);
    if (!parsed.products || !Array.isArray(parsed.products)) {
      throw new Error('โครงสร้างข้อมูลในไฟล์สำรองไม่ถูกต้อง');
    }
    return parsed.products;
  } catch (err: any) {
    throw new Error('รหัสผ่านไม่ถูกต้อง หรือไฟล์เสียหาย ไม่สามารถถอดรหัสได้');
  }
}
