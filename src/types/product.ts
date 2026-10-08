export type ProductCategory = 'mobile' | 'laptop' | 'tablet' | 'accessory';

export interface ProductColor {
  name: string;
  hex: string;
  overlayHex?: string;
  image?: string;
}

export interface ProductSpecs {
  screen: string;
  processor: string;
  ram: string;
  storage: string;
  rearCamera: string;
  frontCamera: string;
  battery: string;
  charging: string;
  os: string;
  weight: string;
  connectivity: string;
}

export interface Product {
  id: string;
  name: string;
  category: ProductCategory;
  brand: string;
  price: number;
  originalPrice: number;
  rating: number;
  reviewCount: number;
  inStock: boolean;
  stockCount: number;
  tags: string[];
  colors: ProductColor[];
  defaultImage: string;
  specs: ProductSpecs;
  promotions: string[];
  freeGifts: string[];
  warranty: string;
  afterSales: string;
  highlightPoints: string[];
  limitations: string[];
  lastUpdated: string;
}

export interface CompareSpecItem {
  key: keyof ProductSpecs | 'price' | 'brand' | 'category' | 'warranty';
  label: string;
  unit?: string;
}

export interface CompareAnalysis {
  productId: string;
  productName: string;
  pros: string[];
  cons: string[];
  bestFor: string;
}

export interface AISearchResult {
  matchedProducts: Product[];
  explanation: string;
  queryIntent: 'filter' | 'rank' | 'compare' | 'general';
  comparisonProducts?: Product[];
  rankingScores?: Record<string, { rank: number; reason: string }>;
}

export interface SheetsConfig {
  spreadsheetId: string;
  spreadsheetName: string;
  lastSyncedAt?: string;
  autoSync: boolean;
  syncStatus: 'idle' | 'syncing' | 'success' | 'error';
  errorMessage?: string;
}

export interface ReminderConfig {
  id: string;
  title: string;
  intervalDays: number;
  lastTriggered?: string;
  enabled: boolean;
  type: 'backup' | 'price_check' | 'restock';
}
