import { initializeApp, getApps, getApp } from 'firebase/app';
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  User,
  signOut
} from 'firebase/auth';
import firebaseConfig from '../../firebase-applet-config.json';
import { Product } from '../types/product';

// Initialize Firebase App singleton
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
export const auth = getAuth(app);

const provider = new GoogleAuthProvider();
provider.addScope('https://www.googleapis.com/auth/spreadsheets');
provider.addScope('https://www.googleapis.com/auth/drive.file');

// In-memory token caching (NOT in localStorage per guidelines)
let cachedAccessToken: string | null = null;
let isSigningIn = false;

export const initAuth = (
  onAuthSuccess?: (user: User, token: string) => void,
  onAuthFailure?: () => void
) => {
  return onAuthStateChanged(auth, async (user: User | null) => {
    if (user && cachedAccessToken) {
      if (onAuthSuccess) onAuthSuccess(user, cachedAccessToken);
    } else if (!isSigningIn) {
      cachedAccessToken = null;
      if (onAuthFailure) onAuthFailure();
    }
  });
};

export const googleSignIn = async (): Promise<{ user: User; accessToken: string } | null> => {
  try {
    isSigningIn = true;
    const result = await signInWithPopup(auth, provider);
    const credential = GoogleAuthProvider.credentialFromResult(result);
    if (!credential?.accessToken) {
      throw new Error('ไม่พบ Access Token จาก Google Sign-In');
    }
    cachedAccessToken = credential.accessToken;
    return { user: result.user, accessToken: cachedAccessToken };
  } catch (error: any) {
    console.error('Sign-in error:', error);
    throw error;
  } finally {
    isSigningIn = false;
  }
};

export const getAccessToken = async (): Promise<string | null> => {
  return cachedAccessToken;
};

export const googleSignOut = async (): Promise<void> => {
  await signOut(auth);
  cachedAccessToken = null;
};

export const getCurrentUser = (): User | null => {
  return auth.currentUser;
};

/**
 * Creates a brand new Google Spreadsheet formatted for IT SmartFinder catalog
 */
export async function createCatalogSpreadsheet(title: string = 'IT SmartFinder - สินค้า IT'): Promise<string> {
  const token = await getAccessToken();
  if (!token) throw new Error('กรุณาลงชื่อเข้าใช้ Google บัญชีก่อนสร้างตาราง');

  const headers = [
    'ID',
    'ชื่อสินค้า',
    'หมวดหมู่',
    'แบรนด์',
    'ราคาขาย (บาท)',
    'ราคาปกติ (บาท)',
    'สถานะสินค้า',
    'จำนวนคงเหลือ',
    'สีที่มีจำหน่าย',
    'สเปกย่อ',
    'โปรโมชั่น',
    'ของแถม',
    'การรับประกัน',
    'อัปเดตล่าสุด'
  ];

  const payload = {
    properties: {
      title: `${title} [${new Date().toLocaleDateString('th-TH')}]`
    },
    sheets: [
      {
        properties: {
          title: 'รายการสินค้า',
          gridProperties: {
            frozenRowCount: 1
          }
        },
        data: [
          {
            startRow: 0,
            startColumn: 0,
            rowData: [
              {
                values: headers.map(h => ({
                  userEnteredValue: { stringValue: h },
                  userEnteredFormat: {
                    textFormat: { bold: true, foregroundColor: { red: 1, green: 1, blue: 1 } },
                    backgroundColor: { red: 0.15, green: 0.38, blue: 0.92 }
                  }
                }))
              }
            ]
          }
        ]
      }
    ]
  };

  const res = await fetch('https://sheets.googleapis.com/v4/spreadsheets', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload)
  });

  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error(err.error?.message || 'ไม่สามารถสร้าง Google Sheet ได้');
  }

  const data = await res.json();
  return data.spreadsheetId;
}

/**
 * Pushes entire local product catalog to Google Sheets
 */
export async function pushProductsToSheet(spreadsheetId: string, products: Product[]): Promise<number> {
  const token = await getAccessToken();
  if (!token) throw new Error('กรุณาเข้าสู่ระบบ Google เพื่อเชื่อมต่อ Sheets');

  const headers = [
    'ID',
    'ชื่อสินค้า',
    'หมวดหมู่',
    'แบรนด์',
    'ราคาขาย (บาท)',
    'ราคาปกติ (บาท)',
    'สถานะสินค้า',
    'จำนวนคงเหลือ',
    'สีที่มีจำหน่าย',
    'สเปกย่อ',
    'โปรโมชั่น',
    'ของแถม',
    'การรับประกัน',
    'อัปเดตล่าสุด'
  ];

  const rows = products.map(p => [
    p.id,
    p.name,
    p.category,
    p.brand,
    p.price,
    p.originalPrice,
    p.inStock ? 'พร้อมส่ง' : 'สินค้าหมด',
    p.stockCount,
    p.colors.map(c => c.name).join(', '),
    `${p.specs.screen} | ${p.specs.processor} | RAM ${p.specs.ram} | ROM ${p.specs.storage} | Battery ${p.specs.battery} (${p.specs.charging})`,
    p.promotions.join('; '),
    p.freeGifts.join('; '),
    p.warranty,
    p.lastUpdated
  ]);

  const allValues = [headers, ...rows];

  const range = 'รายการสินค้า!A1:N' + (allValues.length + 5);

  const res = await fetch(
    `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${encodeURIComponent(range)}?valueInputOption=USER_ENTERED`,
    {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        range,
        majorDimension: 'ROWS',
        values: allValues
      })
    }
  );

  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error(err.error?.message || 'ไม่สามารถบันทึกข้อมูลไปยัง Google Sheets ได้');
  }

  return products.length;
}

/**
 * Reads products from Google Sheets
 */
export async function pullProductsFromSheet(spreadsheetId: string): Promise<Partial<Product>[]> {
  const token = await getAccessToken();
  if (!token) throw new Error('กรุณาเข้าสู่ระบบ Google เพื่ออ่านข้อมูล');

  // First fetch spreadsheet metadata to get exact sheet title
  const metaRes = await fetch(`https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}`, {
    headers: { Authorization: `Bearer ${token}` }
  });

  if (!metaRes.ok) {
    const err = await metaRes.json().catch(() => ({}));
    throw new Error(err.error?.message || 'ไม่พบ Google Sheet นี้ โปรดตรวจสอบ Spreadsheet ID');
  }

  const metaData = await metaRes.json();
  const sheetName = metaData.sheets?.[0]?.properties?.title || 'Sheet1';

  const valuesRes = await fetch(
    `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${encodeURIComponent(sheetName)}!A2:N500`,
    {
      headers: { Authorization: `Bearer ${token}` }
    }
  );

  if (!valuesRes.ok) {
    throw new Error('ไม่สามารถดึงข้อมูลตารางสินค้าได้');
  }

  const data = await valuesRes.json();
  const rows: any[][] = data.values || [];

  return rows.map((r, idx) => ({
    id: r[0] || `sheet-prod-${idx}`,
    name: r[1] || 'สินค้าไม่มีชื่อ',
    category: (r[2] || 'mobile') as any,
    brand: r[3] || 'ทั่วไป',
    price: Number(r[4]) || 0,
    originalPrice: Number(r[5]) || Number(r[4]) || 0,
    inStock: r[6] === 'พร้อมส่ง',
    stockCount: Number(r[7]) || 1,
    warranty: r[12] || 'ประกันศูนย์ 1 ปี',
    lastUpdated: r[13] || new Date().toISOString().split('T')[0]
  }));
}
