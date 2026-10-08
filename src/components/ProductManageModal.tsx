import React, { useState } from 'react';
import {
  X,
  Plus,
  Edit2,
  Trash2,
  Save,
  CheckCircle,
  AlertTriangle,
  RotateCcw,
  Sparkles,
  Package
} from 'lucide-react';
import { Product, ProductCategory } from '../types/product';
import { INITIAL_PRODUCTS } from '../data/initialProducts';

interface ProductManageModalProps {
  isOpen: boolean;
  onClose: () => void;
  products: Product[];
  onSaveProducts: (products: Product[]) => void;
  isLocked: boolean;
  onRequireUnlock: () => void;
}

export const ProductManageModal: React.FC<ProductManageModalProps> = ({
  isOpen,
  onClose,
  products,
  onSaveProducts,
  isLocked,
  onRequireUnlock
}) => {
  if (!isOpen) return null;

  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [isAddingNew, setIsAddingNew] = useState(false);
  const [filterText, setFilterText] = useState('');
  const [deleteConfirmId, setDeleteConfirmId] = useState<string | null>(null);

  // Form State
  const [formName, setFormName] = useState('');
  const [formCategory, setFormCategory] = useState<ProductCategory>('mobile');
  const [formBrand, setFormBrand] = useState('Samsung');
  const [formPrice, setFormPrice] = useState<number>(10000);
  const [formOriginalPrice, setFormOriginalPrice] = useState<number>(12000);
  const [formStockCount, setFormStockCount] = useState<number>(10);
  const [formImage, setFormImage] = useState('');
  const [formScreen, setFormScreen] = useState('6.7 นิ้ว AMOLED 120Hz');
  const [formProcessor, setFormProcessor] = useState('Octa-core 5G');
  const [formRam, setFormRam] = useState('8GB');
  const [formStorage, setFormStorage] = useState('256GB');
  const [formRearCamera, setFormRearCamera] = useState('50MP OIS');
  const [formBattery, setFormBattery] = useState('5,000 mAh');
  const [formCharging, setFormCharging] = useState('67W');
  const [formWarranty, setFormWarranty] = useState('ประกันศูนย์ไทย 2 ปี');
  const [formPromotions, setFormPromotions] = useState('ส่วนลดพิเศษหน้าร้าน 1,000 บาท; ผ่อน 0% 10 เดือน');
  const [formFreeGifts, setFormFreeGifts] = useState('หัวชาร์จเร็ว; เคสกันกระแทก; ฟิล์มกระจกนิรภัย');

  if (isLocked) {
    return (
      <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 animate-fadeIn">
        <div className="w-full max-w-md bg-white rounded-3xl p-6 text-center space-y-4 shadow-xl border border-slate-200">
          <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center mx-auto shadow-xs">
            <AlertTriangle className="w-6 h-6" />
          </div>
          <h3 className="font-bold text-slate-900 text-lg">การจัดการสินค้าถูกล็อก</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            ผู้ที่จัดการสินค้าได้ ต้องกรอกรหัสผ่านกลางที่คุณเป็นผู้ตั้งเพียงรหัสเดียวเท่านั้น
            ผู้ที่ไม่มีรหัสสามารถสืบค้นหาข้อมูลและเปรียบเทียบสินค้าได้ตามปกติ
          </p>
          <div className="flex gap-2 justify-center pt-2">
            <button
              onClick={onRequireUnlock}
              className="px-4 py-2.5 bg-yellow-400 hover:bg-yellow-300 text-slate-950 font-bold rounded-xl text-xs transition-colors shadow-xs"
            >
              กรอกรหัสผ่านกลางเพื่อจัดการสินค้า
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

  const handleStartAdd = () => {
    setIsAddingNew(true);
    setEditingProduct(null);
    setFormName('');
    setFormCategory('mobile');
    setFormBrand('Samsung');
    setFormPrice(12900);
    setFormOriginalPrice(14900);
    setFormStockCount(15);
    setFormImage('https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=800&q=80');
    setFormScreen('6.7 นิ้ว Curved AMOLED 120Hz');
    setFormProcessor('Snapdragon 5G');
    setFormRam('8GB');
    setFormStorage('256GB');
    setFormRearCamera('50MP OIS');
    setFormBattery('5,000 mAh');
    setFormCharging('67W Fast Charging');
    setFormWarranty('ประกันศูนย์ไทย 2 ปีเต็ม');
    setFormPromotions('ลดเพิ่ม 1,500 บาท; ผ่อน 0% สูงสุด 18 เดือน');
    setFormFreeGifts('หัวชาร์จเร็ว; เคสใส; ฟิล์มกระจก 9H');
  };

  const handleStartEdit = (p: Product) => {
    setEditingProduct(p);
    setIsAddingNew(false);
    setFormName(p.name);
    setFormCategory(p.category);
    setFormBrand(p.brand);
    setFormPrice(p.price);
    setFormOriginalPrice(p.originalPrice);
    setFormStockCount(p.stockCount);
    setFormImage(p.defaultImage);
    setFormScreen(p.specs.screen);
    setFormProcessor(p.specs.processor);
    setFormRam(p.specs.ram);
    setFormStorage(p.specs.storage);
    setFormRearCamera(p.specs.rearCamera);
    setFormBattery(p.specs.battery);
    setFormCharging(p.specs.charging);
    setFormWarranty(p.warranty);
    setFormPromotions(p.promotions.join('; '));
    setFormFreeGifts(p.freeGifts.join('; '));
  };

  const handleSaveForm = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formName.trim()) return;

    const promoList = formPromotions
      .split(';')
      .map((s) => s.trim())
      .filter(Boolean);
    const giftList = formFreeGifts
      .split(';')
      .map((s) => s.trim())
      .filter(Boolean);

    if (isAddingNew) {
      const newProd: Product = {
        id: `prod-custom-${Date.now()}`,
        name: formName.trim(),
        category: formCategory,
        brand: formBrand,
        price: Number(formPrice) || 0,
        originalPrice: Number(formOriginalPrice) || Number(formPrice) || 0,
        rating: 4.8,
        reviewCount: 25,
        inStock: formStockCount > 0,
        stockCount: Number(formStockCount) || 1,
        tags: ['สินค้ามาใหม่'],
        colors: [
          {
            name: 'ดำ Titanium Black',
            hex: '#1e2022',
            overlayHex: '#1e2022',
            image: formImage
          },
          {
            name: 'ขาว Pearl White',
            hex: '#f5f6f8',
            overlayHex: '#f5f6f8',
            image: formImage
          }
        ],
        defaultImage:
          formImage ||
          'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=800&q=80',
        specs: {
          screen: formScreen,
          processor: formProcessor,
          ram: formRam,
          storage: formStorage,
          rearCamera: formRearCamera,
          frontCamera: '32MP',
          battery: formBattery,
          charging: formCharging,
          os: 'Android 14',
          weight: '190 กรัม',
          connectivity: '5G, Wi-Fi 6, Bluetooth 5.3'
        },
        promotions: promoList,
        freeGifts: giftList,
        warranty: formWarranty,
        afterSales: 'บริการโอนย้ายข้อมูลและตรวจเช็กฟรีตลอดอายุการใช้งาน',
        highlightPoints: ['สเปกคุ้มค่าต่อราคา', 'กล้องถ่ายสวยคมชัด'],
        limitations: [],
        lastUpdated: new Date().toISOString().split('T')[0]
      };

      onSaveProducts([newProd, ...products]);
      setIsAddingNew(false);
    } else if (editingProduct) {
      const updatedList = products.map((p) => {
        if (p.id === editingProduct.id) {
          return {
            ...p,
            name: formName.trim(),
            category: formCategory,
            brand: formBrand,
            price: Number(formPrice) || 0,
            originalPrice: Number(formOriginalPrice) || Number(formPrice) || 0,
            stockCount: Number(formStockCount) || 0,
            inStock: Number(formStockCount) > 0,
            defaultImage: formImage || p.defaultImage,
            specs: {
              ...p.specs,
              screen: formScreen,
              processor: formProcessor,
              ram: formRam,
              storage: formStorage,
              rearCamera: formRearCamera,
              battery: formBattery,
              charging: formCharging
            },
            promotions: promoList,
            freeGifts: giftList,
            warranty: formWarranty,
            lastUpdated: new Date().toISOString().split('T')[0]
          };
        }
        return p;
      });

      onSaveProducts(updatedList);
      setEditingProduct(null);
    }
  };

  const handleDelete = (id: string) => {
    onSaveProducts(products.filter((p) => p.id !== id));
    setDeleteConfirmId(null);
  };

  const handleResetCatalog = () => {
    if (window.confirm('คุณต้องการรีเซ็ตแคตตาล็อกสินค้าเป็นข้อมูลเริ่มต้นจากโรงงานใช่หรือไม่?')) {
      onSaveProducts(INITIAL_PRODUCTS);
    }
  };

  const filteredProducts = products.filter(
    (p) =>
      p.name.toLowerCase().includes(filterText.toLowerCase()) ||
      p.brand.toLowerCase().includes(filterText.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 animate-fadeIn">
      <div className="relative w-full max-w-5xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[92vh]">
        {/* Header */}
        <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between bg-slate-50">
          <div className="flex items-center space-x-2.5">
            <div className="p-2 rounded-xl bg-slate-900 text-white">
              <Package className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-base sm:text-lg font-bold text-slate-900">
                ระบบจัดการข้อมูลสินค้า (Product Catalog Manager)
              </h2>
              <p className="text-xs text-slate-500">
                เพิ่ม แก้ไข ลบ และจัดการรายละเอียดสินค้า IT ในร้านของคุณ
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={handleResetCatalog}
              className="text-xs text-slate-500 hover:text-slate-800 px-2 py-1 rounded-lg hover:bg-slate-200/50 flex items-center gap-1 transition-colors"
              title="รีเซ็ตสินค้าตัวอย่างเริ่มต้น"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">รีเซ็ตค่าเริ่มต้น</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-slate-700 rounded-full hover:bg-slate-200/60"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Body */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6">
          {/* If Add / Edit form active */}
          {isAddingNew || editingProduct ? (
            <form onSubmit={handleSaveForm} className="space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <h3 className="font-bold text-slate-900 text-sm sm:text-base">
                  {isAddingNew ? 'เพิ่มสินค้าใหม่' : `แก้ไขข้อมูล: ${editingProduct?.name}`}
                </h3>
                <button
                  type="button"
                  onClick={() => {
                    setIsAddingNew(false);
                    setEditingProduct(null);
                  }}
                  className="text-xs text-slate-500 hover:text-slate-800"
                >
                  ยกเลิก
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 text-xs">
                <div className="sm:col-span-2">
                  <label className="block font-semibold text-slate-700 mb-1">ชื่อสินค้า:</label>
                  <input
                    type="text"
                    required
                    value={formName}
                    onChange={(e) => setFormName(e.target.value)}
                    placeholder="เช่น realme 16 Pro 5G"
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-slate-700 mb-1">หมวดหมู่:</label>
                  <select
                    value={formCategory}
                    onChange={(e) => setFormCategory(e.target.value as any)}
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl"
                  >
                    <option value="mobile">สมาร์ทโฟน</option>
                    <option value="laptop">แล็ปท็อป/คอม</option>
                    <option value="tablet">แท็บเล็ต</option>
                  </select>
                </div>

                <div>
                  <label className="block font-semibold text-slate-700 mb-1">แบรนด์:</label>
                  <input
                    type="text"
                    required
                    value={formBrand}
                    onChange={(e) => setFormBrand(e.target.value)}
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-slate-700 mb-1">ราคาขายจริง (บาท):</label>
                  <input
                    type="number"
                    required
                    value={formPrice}
                    onChange={(e) => setFormPrice(Number(e.target.value))}
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-slate-700 mb-1">ราคาเต็ม (บาท):</label>
                  <input
                    type="number"
                    value={formOriginalPrice}
                    onChange={(e) => setFormOriginalPrice(Number(e.target.value))}
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-slate-700 mb-1">จำนวนคงเหลือ (สต็อก):</label>
                  <input
                    type="number"
                    value={formStockCount}
                    onChange={(e) => setFormStockCount(Number(e.target.value))}
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="block font-semibold text-slate-700 mb-1">ลิงก์รูปภาพสินค้า:</label>
                  <input
                    type="url"
                    value={formImage}
                    onChange={(e) => setFormImage(e.target.value)}
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-slate-700 mb-1">หน้าจอ:</label>
                  <input
                    type="text"
                    value={formScreen}
                    onChange={(e) => setFormScreen(e.target.value)}
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-slate-700 mb-1">ชิปประมวลผล:</label>
                  <input
                    type="text"
                    value={formProcessor}
                    onChange={(e) => setFormProcessor(e.target.value)}
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-slate-700 mb-1">RAM / ROM:</label>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={formRam}
                      onChange={(e) => setFormRam(e.target.value)}
                      placeholder="8GB"
                      className="w-1/2 px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl"
                    />
                    <input
                      type="text"
                      value={formStorage}
                      onChange={(e) => setFormStorage(e.target.value)}
                      placeholder="256GB"
                      className="w-1/2 px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-semibold text-slate-700 mb-1">แบตเตอรี่ & ชาร์จ:</label>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={formBattery}
                      onChange={(e) => setFormBattery(e.target.value)}
                      placeholder="5,000 mAh"
                      className="w-1/2 px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl"
                    />
                    <input
                      type="text"
                      value={formCharging}
                      onChange={(e) => setFormCharging(e.target.value)}
                      placeholder="67W"
                      className="w-1/2 px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-semibold text-slate-700 mb-1">กล้องถ่ายรูป:</label>
                  <input
                    type="text"
                    value={formRearCamera}
                    onChange={(e) => setFormRearCamera(e.target.value)}
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-slate-700 mb-1">การรับประกัน:</label>
                  <input
                    type="text"
                    value={formWarranty}
                    onChange={(e) => setFormWarranty(e.target.value)}
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl"
                  />
                </div>

                <div className="sm:col-span-3">
                  <label className="block font-semibold text-slate-700 mb-1">
                    โปรโมชั่น (คั่นแต่ละรายการด้วยเครื่องหมายเซมิโคลอน ;) :
                  </label>
                  <input
                    type="text"
                    value={formPromotions}
                    onChange={(e) => setFormPromotions(e.target.value)}
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl"
                  />
                </div>

                <div className="sm:col-span-3">
                  <label className="block font-semibold text-slate-700 mb-1">
                    ของแถม (คั่นแต่ละรายการด้วยเครื่องหมายเซมิโคลอน ;) :
                  </label>
                  <input
                    type="text"
                    value={formFreeGifts}
                    onChange={(e) => setFormFreeGifts(e.target.value)}
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl"
                  />
                </div>
              </div>

              <div className="pt-3 flex gap-2">
                <button
                  type="submit"
                  className="px-5 py-2.5 bg-yellow-400 hover:bg-yellow-300 text-slate-950 font-bold rounded-xl text-xs flex items-center gap-1.5 shadow-xs transition-colors"
                >
                  <Save className="w-4 h-4 text-slate-950" />
                  <span>บันทึกสินค้า</span>
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setIsAddingNew(false);
                    setEditingProduct(null);
                  }}
                  className="px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs font-semibold"
                >
                  ยกเลิก
                </button>
              </div>
            </form>
          ) : (
            /* Product List View */
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                <input
                  type="text"
                  value={filterText}
                  onChange={(e) => setFilterText(e.target.value)}
                  placeholder="ค้นหาชื่อสินค้าเพื่อแก้ไข..."
                  className="px-3.5 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-800 focus:outline-none focus:ring-1 focus:ring-yellow-400"
                />

                <button
                  onClick={handleStartAdd}
                  className="px-4 py-2 bg-yellow-400 hover:bg-yellow-300 text-slate-950 font-bold rounded-xl text-xs flex items-center justify-center gap-1.5 shadow-xs transition-colors"
                >
                  <Plus className="w-4 h-4 text-slate-950" />
                  <span>เพิ่มสินค้าใหม่</span>
                </button>
              </div>

              {/* Table of products */}
              <div className="border border-slate-200 rounded-2xl overflow-hidden shadow-2xs">
                <table className="w-full text-left text-xs sm:text-sm">
                  <thead className="bg-slate-50 border-b border-slate-200 text-slate-600 font-bold">
                    <tr>
                      <th className="p-3">สินค้า</th>
                      <th className="p-3">หมวด</th>
                      <th className="p-3">ราคา</th>
                      <th className="p-3">สต็อก</th>
                      <th className="p-3 text-right">จัดการ</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {filteredProducts.map((p) => (
                      <tr key={p.id} className="hover:bg-slate-50/80">
                        <td className="p-3">
                          <div className="flex items-center space-x-2.5">
                            <img
                              src={p.defaultImage}
                              alt={p.name}
                              className="w-10 h-10 object-contain rounded-lg bg-slate-50 border border-slate-100"
                            />
                            <div>
                              <div className="font-bold text-slate-900 line-clamp-1">{p.name}</div>
                              <div className="text-[11px] text-slate-400">{p.brand}</div>
                            </div>
                          </div>
                        </td>
                        <td className="p-3 text-slate-600">
                          {p.category === 'mobile' ? 'มือถือ' : p.category === 'laptop' ? 'โน้ตบุ๊ก' : 'แท็บเล็ต'}
                        </td>
                        <td className="p-3 font-bold text-slate-900">
                          ฿{p.price.toLocaleString()}
                        </td>
                        <td className="p-3">
                          <span
                            className={`px-2 py-0.5 rounded-full text-[11px] font-semibold ${
                              p.inStock
                                ? 'bg-emerald-50 text-emerald-700'
                                : 'bg-rose-50 text-rose-700'
                            }`}
                          >
                            {p.inStock ? `${p.stockCount} ชิ้น` : 'หมด'}
                          </span>
                        </td>
                        <td className="p-3 text-right">
                          <div className="flex items-center justify-end space-x-1.5">
                            <button
                              onClick={() => handleStartEdit(p)}
                              className="p-1.5 text-amber-700 hover:bg-yellow-50 rounded-lg transition-colors"
                              title="แก้ไขสินค้า"
                            >
                              <Edit2 className="w-4 h-4" />
                            </button>

                            {deleteConfirmId === p.id ? (
                              <div className="flex items-center space-x-1">
                                <button
                                  onClick={() => handleDelete(p.id)}
                                  className="px-2 py-1 bg-rose-600 text-white rounded-md text-[11px] font-bold"
                                >
                                  ยืนยันลบ
                                </button>
                                <button
                                  onClick={() => setDeleteConfirmId(null)}
                                  className="px-1.5 py-1 text-slate-400 hover:text-slate-600 text-[11px]"
                                >
                                  ยกเลิก
                                </button>
                              </div>
                            ) : (
                              <button
                                onClick={() => setDeleteConfirmId(p.id)}
                                className="p-1.5 text-rose-500 hover:bg-rose-50 rounded-lg transition-colors"
                                title="ลบสินค้า"
                              >
                                <Trash2 className="w-4 h-4" />
                              </button>
                            )}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
