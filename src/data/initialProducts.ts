import { Product } from '../types/product';

export const INITIAL_PRODUCTS: Product[] = [
  // ==========================================
  // BRAND 1: APPLE (iPhone Lineup จาก BaNANA IT)
  // ==========================================
  {
    id: 'bnn-apple-iphone-18-pro-max',
    name: 'Apple iPhone 18 Pro Max',
    category: 'mobile',
    brand: 'Apple',
    price: 52900,
    originalPrice: 52900,
    rating: 4.9,
    reviewCount: 120,
    inStock: true,
    stockCount: 15,
    tags: ['Apple A20 Pro', 'กล้อง Variable Aperture', 'ซูม 10x Tetraprism', 'Apple Intelligence เจนใหม่', 'จอ 6.9 นิ้ว 120Hz ProMotion'],
    colors: [
      {
        name: 'ไทเทเนียมดีปคอสมิก Deep Cosmic Titanium',
        hex: '#3b3a4a',
        overlayHex: '#3b3a4a',
        image: 'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?auto=format&fit=crop&w=900&q=80',
        images: [
          'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?auto=format&fit=crop&w=900&q=80',
          'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&w=900&q=80'
        ]
      },
      {
        name: 'ไทเทเนียมธรรมชาติ Natural Titanium',
        hex: '#9e9c99',
        overlayHex: '#9e9c99',
        image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&w=900&q=80'
      },
      {
        name: 'ไทเทเนียมขาว White Titanium',
        hex: '#f4f4f4',
        overlayHex: '#f4f4f4',
        image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=900&q=80'
      }
    ],
    defaultImage: 'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?auto=format&fit=crop&w=900&q=80',
    specs: {
      screen: '6.9 นิ้ว Super Retina XDR OLED, ProMotion 1-120Hz, Dynamic Island ขอบจอบางระดับสถิติใหม่, กระจก Ceramic Shield เจนล่าสุด',
      processor: 'Apple A20 Pro (2nm) พร้อม 6-core GPU, 32-core Neural Engine ฮาร์ดแวร์ Ray Tracing',
      ram: '12GB Unified Memory สถาปัตยกรรมความเร็วสูงสำหรับ AI On-device เต็มพิกัด',
      storage: '256GB / 512GB / 1TB / 2TB NVMe',
      rearCamera: '48MP Fusion กล้องหลักพร้อมม่านรับแสงปรับได้ Variable Aperture (f/1.4 - f/2.8, Sensor-shift OIS) + 48MP Ultra-wide Macro + 48MP Periscope Telephoto ซูมออปติคอล 10x',
      frontCamera: '24MP TrueDepth (f/1.9) พร้อมระบบโฟกัสอัตโนมัติ และฟังก์ชันติดตามมุมมอง Center Stage',
      battery: '4,850 mAh เล่นวิดีโอนานสูงสุด 35 ชั่วโมง จัดการพลังงานอัจฉริยะ',
      charging: 'ชาร์จเร็วผ่าน Type-C 45W, MagSafe ไร้สาย 30W (ชาร์จ 50% ใน 20 นาที)',
      os: 'iOS 19/20 พร้อม Apple Intelligence 2.0',
      weight: '224 กรัม บอดี้ไทเทเนียมเกรด 5 แข็งแกร่งพรีเมียม',
      connectivity: '5G Dual eSIM, Wi-Fi 7, Bluetooth 5.4, UWB Gen 3, ปุ่ม Camera Control แบบ Haptic Force และปุ่ม Action Button'
    },
    promotions: [],
    freeGifts: [],
    warranty: 'ประกันศูนย์ Apple ประเทศไทย 1 ปีเต็ม เข้าศูนย์ Apple Authorized Service Provider (iCare / Apple Store) ได้ทุกสาขาทั่วประเทศ',
    afterSales: 'บริการถ่ายโอนข้อมูลจากเครื่องเก่าฟรีที่หน้าร้าน BaNANA IT ทุกสาขา',
    highlightPoints: [
      'ชิปเซ็ตประมวลผล Apple A20 Pro ระดับ 2 นาโนเมตร พร้อม RAM 12GB ประมวลผล Apple Intelligence ลื่นไหลสูงสุด',
      'กล้องหลักปรับขนาดรูรับแสงอัตโนมัติ Variable Aperture และกล้องซูม Periscope Tetraprism 10x คมชัดทุกระยะ',
      'หน้าจอ Super Retina XDR 6.9 นิ้ว 120Hz ProMotion ขอบจอบางเฉียบเต็มตาสูงสุด',
      'แบตเตอรี่อึดทนทานสูงสุด 35 ชั่วโมง พร้อมระบบชาร์จเร็ว 45W'
    ],
    limitations: [
      'ข้อมูลโปรโมชั่นและของแถมเว้นว่างไว้ตามคำขอ รอการยืนยันทางการจากหน้าร้าน',
      'ขนาดตัวเครื่อง 6.9 นิ้วเหมาะกับผู้ใช้ที่ชื่นชอบหน้าจอขนาดใหญ่'
    ],
    lastUpdated: '2026-10-20'
  },
  {
    id: 'bnn-apple-iphone-17-pro-max',
    name: 'Apple iPhone 17 Pro Max',
    category: 'mobile',
    brand: 'Apple',
    price: 48900,
    originalPrice: 48900,
    rating: 4.9,
    reviewCount: 230,
    inStock: true,
    stockCount: 20,
    tags: ['Apple A19 Pro', 'กล้อง 48MP ทั้ง 3 ตัว', 'RAM 12GB Apple Intelligence', 'จอ 6.9 นิ้ว 120Hz', 'ซูมออปติคอล 5x'],
    colors: [
      {
        name: 'ไทเทเนียมธรรมชาติ Natural Titanium',
        hex: '#9e9c99',
        overlayHex: '#9e9c99',
        image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&w=900&q=80',
        images: [
          'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&w=900&q=80',
          'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?auto=format&fit=crop&w=900&q=80'
        ]
      },
      {
        name: 'ไทเทเนียมดำ Black Titanium',
        hex: '#232426',
        overlayHex: '#232426',
        image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=900&q=80'
      },
      {
        name: 'ไทเทเนียมขาว White Titanium',
        hex: '#f4f4f4',
        overlayHex: '#f4f4f4',
        image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=900&q=80'
      }
    ],
    defaultImage: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&w=900&q=80',
    specs: {
      screen: '6.9 นิ้ว Super Retina XDR OLED, 1-120Hz ProMotion, Dynamic Island, กระจก Ceramic Shield ป้องกันรอยขีดข่วนขั้นสูง',
      processor: 'Apple A19 Pro (3nm N3P) พร้อม 6-core GPU และฮาร์ดแวร์ Ray Tracing',
      ram: '12GB Unified Memory เพิ่มความจุพิเศษรองรับโมเดล AI',
      storage: '256GB / 512GB / 1TB NVMe',
      rearCamera: 'กล้อง 48MP ครบทุกตัว: 48MP Fusion (f/1.78, OIS) + 48MP Ultra-wide มาโคร + 48MP Tetraprism Telephoto ซูมออปติคอล 5x (ดิจิทัล 30x)',
      frontCamera: '24MP TrueDepth Autofocus คมชัดกว่าเดิม',
      battery: '4,750 mAh เล่นวิดีโอนานสูงสุด 33 ชั่วโมง',
      charging: 'ชาร์จเร็ว Type-C 40W, MagSafe 25W (50% ใน 25 นาที)',
      os: 'iOS 19 พร้อม Apple Intelligence',
      weight: '225 กรัม กรอบไทเทเนียมเกรด 5',
      connectivity: '5G, Wi-Fi 7, Bluetooth 5.3, UWB Gen 2, ปุ่ม Camera Control และ Action Button'
    },
    promotions: [],
    freeGifts: [],
    warranty: 'ประกันศูนย์ Apple ประเทศไทย 1 ปีเต็ม เข้าศูนย์ Apple Authorized Service Provider ได้ทุกสาขาทั่วประเทศ',
    afterSales: 'บริการถ่ายโอนข้อมูลจากเครื่องเก่าฟรีที่สาขา BaNANA IT',
    highlightPoints: [
      'กล้องหลัง 48MP ครบทั้ง 3 เลนส์ ให้ความละเอียดคมชัดระดับโปรในทุกช่วงระยะเลนส์',
      'ชิปเซ็ตประมวลผล Apple A19 Pro พร้อม RAM อัปเกรดเป็น 12GB ทำงานร่วมกับระบบ Apple Intelligence อย่างลื่นไหล',
      'กล้องหน้าปรับปรุงเป็น 24MP เซลฟี่และวิดีโอคอลคมชัดยิ่งขึ้น',
      'หน้าจอ 6.9 นิ้ว Super Retina XDR ProMotion 120Hz'
    ],
    limitations: [
      'ข้อมูลโปรโมชั่นและของแถมเว้นว่างไว้ตามคำขอ รอการยืนยันทางการจากหน้าร้าน'
    ],
    lastUpdated: '2026-10-20'
  },
  {
    id: 'bnn-apple-iphone-17',
    name: 'Apple iPhone 17',
    category: 'mobile',
    brand: 'Apple',
    price: 32900,
    originalPrice: 32900,
    rating: 4.8,
    reviewCount: 180,
    inStock: true,
    stockCount: 25,
    tags: ['จอ 120Hz ProMotion ครั้งแรก', 'Apple A19', 'กล้องคู่ 48MP', 'Apple Intelligence', 'ปุ่ม Camera Control'],
    colors: [
      {
        name: 'ฟ้าทะเลลึก Ultramarine',
        hex: '#3b82f6',
        overlayHex: '#3b82f6',
        image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&w=900&q=80'
      },
      {
        name: 'เขียวมิ้นต์ Teal',
        hex: '#14b8a6',
        overlayHex: '#14b8a6',
        image: 'https://images.unsplash.com/photo-1565849904461-04a58ad377e0?auto=format&fit=crop&w=900&q=80'
      },
      {
        name: 'ชมพู Pink',
        hex: '#f472b6',
        overlayHex: '#f472b6',
        image: 'https://images.unsplash.com/photo-1589739900243-4b52cd9b104e?auto=format&fit=crop&w=900&q=80'
      },
      {
        name: 'ขาว White',
        hex: '#f8fafc',
        overlayHex: '#f8fafc',
        image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=900&q=80'
      },
      {
        name: 'ดำ Black',
        hex: '#1e293b',
        overlayHex: '#1e293b',
        image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=900&q=80'
      }
    ],
    defaultImage: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&w=900&q=80',
    specs: {
      screen: '6.3 นิ้ว Super Retina XDR OLED, 1-120Hz ProMotion ครั้งแรกในรุ่นมาตรฐาน, Dynamic Island, ขอบจอบางเฉียบ',
      processor: 'Apple A19 (3nm N3P) ประสิทธิภาพสูงและประหยัดพลังงาน',
      ram: '8GB Unified Memory รองรับ Apple Intelligence เต็มระบบ',
      storage: '128GB / 256GB / 512GB NVMe',
      rearCamera: '48MP Fusion (f/1.6, Sensor-shift OIS, 2x Optical Telephoto) + 48MP Ultra-wide มาโคร',
      frontCamera: '24MP TrueDepth Autofocus',
      battery: '3,650 mAh เล่นวิดีโอนานสูงสุด 25 ชั่วโมง',
      charging: 'ชาร์จเร็วผ่าน Type-C 30W, MagSafe 25W',
      os: 'iOS 19 พร้อม Apple Intelligence',
      weight: '172 กรัม อะลูมิเนียมเกรดอากาศยานพร้อมกระจกด้านหลังแต่งสีในเนื้อ',
      connectivity: '5G, Wi-Fi 7, Bluetooth 5.3, UWB Gen 2, ปุ่ม Camera Control และ Action Button'
    },
    promotions: [],
    freeGifts: [],
    warranty: 'ประกันศูนย์ Apple ประเทศไทย 1 ปีเต็ม เข้าศูนย์ Apple Store และ iCare ได้ทั่วประเทศ',
    afterSales: 'บริการถ่ายโอนข้อมูลจากเครื่องเก่าฟรีที่หน้าร้าน BaNANA IT',
    highlightPoints: [
      'อัปเกรดหน้าจอเป็น 120Hz ProMotion ลื่นไหลเนียนตาเป็นครั้งแรกในประวัติศาสตร์ iPhone รุ่นมาตรฐาน',
      'ชิปเซ็ตประมวลผล Apple A19 ทรงพลังและประหยัดพลังงาน รองรับฟีเจอร์ Apple Intelligence',
      'กล้องคู่ 48MP พร้อมเลนส์ Ultra-wide อัปเกรดเป็น 48MP ถ่ายภาพมาโครได้คมชัด',
      'ปุ่ม Camera Control คอนโทรลกล้องได้สะดวกฉับไว'
    ],
    limitations: [
      'ข้อมูลโปรโมชั่นและของแถมเว้นว่างไว้ตามคำขอ รอการยืนยันทางการจากหน้าร้าน',
      'ไม่มีเลนส์ซูม Periscope Telephoto (มีในรุ่น Pro)'
    ],
    lastUpdated: '2026-10-20'
  },
  {
    id: 'bnn-apple-iphone-16-pro-max',
    name: 'Apple iPhone 16 Pro Max',
    category: 'mobile',
    brand: 'Apple',
    price: 48900,
    originalPrice: 48900,
    rating: 4.9,
    reviewCount: 820,
    inStock: true,
    stockCount: 25,
    tags: ['Apple Intelligence', 'ปุ่ม Camera Control', 'A18 Pro', 'กล้องซูม 5x', 'จอ 6.9 นิ้ว 120Hz', 'เรือธงตัวท็อป'],
    colors: [
      {
        name: 'ไทเทเนียมทะเลทราย Desert Titanium',
        hex: '#c5b49e',
        overlayHex: '#c5b49e',
        image: 'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?auto=format&fit=crop&w=900&q=80',
        images: [
          'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?auto=format&fit=crop&w=900&q=80',
          'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&w=900&q=80'
        ]
      },
      {
        name: 'ไทเทเนียมธรรมชาติ Natural Titanium',
        hex: '#9e9c99',
        overlayHex: '#9e9c99',
        image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&w=900&q=80',
        images: [
          'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&w=900&q=80'
        ]
      },
      {
        name: 'ไทเทเนียมขาว White Titanium',
        hex: '#f4f4f4',
        overlayHex: '#f4f4f4',
        image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=900&q=80',
        images: [
          'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=900&q=80'
        ]
      },
      {
        name: 'ไทเทเนียมดำ Black Titanium',
        hex: '#232426',
        overlayHex: '#232426',
        image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=900&q=80',
        images: [
          'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=900&q=80'
        ]
      }
    ],
    defaultImage: 'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?auto=format&fit=crop&w=900&q=80',
    specs: {
      screen: '6.9 นิ้ว Super Retina XDR OLED, ProMotion 120Hz, Dynamic Island, ขอบจอบางที่สุดในตระกูล iPhone',
      processor: 'Apple A18 Pro (3nm Gen 2) พร้อม 6-core GPU และฮาร์ดแวร์ Ray Tracing',
      ram: '8GB Unified Memory ออกแบบมาเพื่อ Apple Intelligence โดยเฉพาะ',
      storage: '256GB / 512GB / 1TB NVMe ความเร็วสูง',
      rearCamera: '48MP Fusion (f/1.78, OIS Sensor-shift Gen 2) + 48MP Ultra-wide มาโคร + 12MP Telephoto 5x ซูมออปติคอล Tetraprism',
      frontCamera: '12MP TrueDepth (f/1.9) พร้อมออโต้โฟกัส รองรับ 4K Dolby Vision 60fps',
      battery: '4,685 mAh เล่นวิดีโอนานสูงสุด 33 ชั่วโมง (แบตเตอรี่อึดที่สุดในประวัติศาสตร์ iPhone)',
      charging: 'ชาร์จเร็วผ่าน Type-C (USB 3 10Gbps), รองรับ MagSafe สูงสุด 25W (ชาร์จ 50% ใน 30 นาที)',
      os: 'iOS 18 พร้อมรองรับฟีเจอร์ Apple Intelligence',
      weight: '227 กรัม กรอบไทเทเนียมเกรด 5 ผิวไมโครบลัชต์ ทนทานและพรีเมียม',
      connectivity: '5G, Wi-Fi 7, Bluetooth 5.3, UWB Gen 2, ปุ่ม Camera Control คาปาซิทีฟ, ปุ่ม Action Button'
    },
    promotions: [
      'ผ่อน 0% นานสูงสุด 36 เดือน ผ่านบัตรเครดิตที่ร่วมรายการ BaNANA (เริ่มต้นเพียงเดือนละ 1,358 บาท)',
      'นำเครื่องเก่ามาแลกซื้อ (Trade-in) รับ On-top เพิ่มทันทีสูงสุด 3,000 บาท',
      'รับสิทธิ์แลกซื้อ AppleCare+ หรือ AirPods 4 ในราคาพิเศษลดสูงสุด 20%'
    ],
    freeGifts: [
      'หัวชาร์จเร็ว Belkin 30W USB-C GaN Charger แท้',
      'เคสใสกันกระแทก Magnetic Case รองรับ MagSafe',
      'ฟิล์มกระจกนิรภัยเต็มจอเกรดพรีเมียม Focus 3D พร้อมประกันหน้าจอ 1 ปี'
    ],
    warranty: 'ประกันศูนย์ Apple ประเทศไทย 1 ปีเต็ม เข้าศูนย์ Apple Authorized Service Provider (iCare / Apple Store) ได้ทุกสาขาทั่วประเทศ',
    afterSales: 'บริการถ่ายโอนข้อมูลจากเครื่องเก่าฟรีที่หน้าร้าน BaNANA IT ทุกสาขา, ให้คำปรึกษาการตั้งค่า Apple Intelligence ฟรี',
    highlightPoints: [
      'หน้าจอใหญ่จุใจที่สุด 6.9 นิ้ว พร้อมขอบจอบางเฉียบ และรีเฟรชเรท 120Hz ProMotion ลื่นไหลสบายตา',
      'แบตเตอรี่อึดที่สุดเท่าที่ iPhone เคยมีมา เล่นวิดีโอต่อเนื่องได้ยาวนานถึง 33 ชั่วโมง',
      'ปุ่ม Camera Control ใหม่ล่าสุด กดบันทึกภาพ สไลด์ซูม และปรับค่ารูรับแสงได้อย่างมือโปร',
      'กล้อง Telephoto ซูมออปติคอล 5x พร้อมเลนส์ Ultra-wide อัปเกรดเป็น 48MP ถ่ายภาพคมชัดทุกระยะ'
    ],
    limitations: [
      'ตัวเครื่องขนาดใหญ่ 6.9 นิ้ว น้ำหนัก 227 กรัม อาจจับถือมือเดียวได้ยากสำหรับผู้ใช้มือเล็ก',
      'ราคาระดับท็อปเริ่มต้นที่ 48,900 บาท'
    ],
    lastUpdated: '2026-10-20'
  },
  {
    id: 'bnn-apple-iphone-16-pro',
    name: 'Apple iPhone 16 Pro',
    category: 'mobile',
    brand: 'Apple',
    price: 39900,
    originalPrice: 39900,
    rating: 4.9,
    reviewCount: 650,
    inStock: true,
    stockCount: 20,
    tags: ['Apple Intelligence', 'ปุ่ม Camera Control', 'วิดีโอ 4K 120fps', 'ชิป A18 Pro', 'จอ 6.3 นิ้ว 120Hz'],
    colors: [
      {
        name: 'ไทเทเนียมทะเลทราย Desert Titanium',
        hex: '#c5b49e',
        overlayHex: '#c5b49e',
        image: 'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?auto=format&fit=crop&w=900&q=80'
      },
      {
        name: 'ไทเทเนียมธรรมชาติ Natural Titanium',
        hex: '#9e9c99',
        overlayHex: '#9e9c99',
        image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&w=900&q=80'
      },
      {
        name: 'ไทเทเนียมขาว White Titanium',
        hex: '#f4f4f4',
        overlayHex: '#f4f4f4',
        image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=900&q=80'
      },
      {
        name: 'ไทเทเนียมดำ Black Titanium',
        hex: '#232426',
        overlayHex: '#232426',
        image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=900&q=80'
      }
    ],
    defaultImage: 'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?auto=format&fit=crop&w=900&q=80',
    specs: {
      screen: '6.3 นิ้ว Super Retina XDR OLED, ProMotion 120Hz, Dynamic Island, Always-On Display, ขอบจอบางเฉียบ',
      processor: 'Apple A18 Pro (3nm Gen 2) พร้อม 6-core GPU และฮาร์ดแวร์ Ray Tracing',
      ram: '8GB Unified Memory ออกแบบมาเพื่อ Apple Intelligence',
      storage: '128GB / 256GB / 512GB / 1TB NVMe',
      rearCamera: '48MP Fusion (24mm, 48mm 2x) + 48MP Ultra-wide มาโคร + 12MP Telephoto ซูมออปติคอล 5x Tetraprism',
      frontCamera: '12MP TrueDepth (f/1.9) พร้อมออโต้โฟกัส รองรับ 4K Dolby Vision 60fps',
      battery: '3,582 mAh เล่นวิดีโอนานสูงสุด 27 ชั่วโมง',
      charging: 'ชาร์จเร็วผ่าน USB-C (USB 3 10Gbps), MagSafe สูงสุด 25W',
      os: 'iOS 18 พร้อมรองรับ Apple Intelligence',
      weight: '199 กรัม กรอบไทเทเนียมเกรด 5 ขัดเงาไมโครบลัชต์ ขนาดกำลังดี',
      connectivity: '5G, Wi-Fi 7, Bluetooth 5.3, UWB Gen 2, ปุ่ม Camera Control และ Action Button'
    },
    promotions: [
      'ผ่อน 0% นานสูงสุด 36 เดือน ผ่านบัตร First Choice / SCB / KTC (เริ่มต้นเดือนละ 1,108 บาท)',
      'นำเครื่องเก่ามาแลก รับ On-top เพิ่มทันที 3,000 บาท',
      'สิทธิ์ซื้อ AppleCare+ ในราคาลด 15%'
    ],
    freeGifts: [
      'หัวชาร์จเร็ว Belkin 30W USB-C GaN Charger',
      'เคสแม่เหล็กใสรองรับ MagSafe แท้',
      'ฟิล์มกระจกเต็มจอเกรดพรีเมียมจาก Focus พร้อมประกัน 1 ปี'
    ],
    warranty: 'ประกันศูนย์ Apple Care ทั่วโลก 1 ปีเต็ม เข้าไอคอนสยาม หรือศูนย์ Apple Authorized (iCare) ได้ทุกสาขา',
    afterSales: 'บริการสอนใช้งาน Apple Intelligence และการตั้งค่าเครื่องใหม่โดยผู้เชี่ยวชาญ Com7 / BaNANA',
    highlightPoints: [
      'ปุ่ม Camera Control ใหม่ล่าสุด กดบันทึกภาพ สไลด์ซูม และปรับรูรับแสงได้สมจริงเหมือนกล้องมืออาชีพ',
      'กล้อง Telephoto ซูมออปติคอล 5x คุณภาพสูง และถ่ายวิดีโอ 4K 120fps Dolby Vision ได้เนียนตา',
      'ชิป A18 Pro ประมวลผลเร็วที่สุด พร้อมรองรับฟีเจอร์ AI อัจฉริยะ',
      'ขนาดตัวเครื่อง 6.3 นิ้ว จับกระชับมือ น้ำหนักกำลังดี พกพาสะดวก'
    ],
    limitations: [
      'ความจุเริ่มต้น 128GB ในราคาเกือบสี่หมื่นบาท',
      'ความเร็วการชาร์จยังคงตามหลังสมาร์ทโฟนฝั่ง Android'
    ],
    lastUpdated: '2026-10-20'
  },
  {
    id: 'bnn-apple-iphone-16-plus',
    name: 'Apple iPhone 16 Plus',
    category: 'mobile',
    brand: 'Apple',
    price: 34900,
    originalPrice: 34900,
    rating: 4.8,
    reviewCount: 410,
    inStock: true,
    stockCount: 30,
    tags: ['Apple Intelligence', 'แบตอึดยาวนาน', 'จอใหญ่ 6.7 นิ้ว', 'ปุ่ม Camera Control', 'ชิป A18'],
    colors: [
      {
        name: 'น้ำเงินอัลตร้ามารีน Ultramarine',
        hex: '#5271ff',
        overlayHex: '#5271ff',
        image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&w=900&q=80'
      },
      {
        name: 'เขียวอมฟ้า Teal',
        hex: '#72b2a6',
        overlayHex: '#72b2a6',
        image: 'https://images.unsplash.com/photo-1565849904461-04a58ad377e0?auto=format&fit=crop&w=900&q=80'
      },
      {
        name: 'ชมพู Pink',
        hex: '#e898aa',
        overlayHex: '#e898aa',
        image: 'https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&w=900&q=80'
      },
      {
        name: 'ขาว White',
        hex: '#f3f4f6',
        overlayHex: '#f3f4f6',
        image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=900&q=80'
      },
      {
        name: 'ดำ Black',
        hex: '#28282b',
        overlayHex: '#28282b',
        image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=900&q=80'
      }
    ],
    defaultImage: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&w=900&q=80',
    specs: {
      screen: '6.7 นิ้ว Super Retina XDR OLED, Dynamic Island, ความสว่างสูงสุด 2,000 nits, Ceramic Shield รุ่นใหม่',
      processor: 'Apple A18 (3nm Gen 2) พร้อม 5-core GPU และ 16-core Neural Engine',
      ram: '8GB Unified Memory รองรับ Apple Intelligence เต็มประสิทธิภาพ',
      storage: '128GB / 256GB / 512GB',
      rearCamera: '48MP Fusion (f/1.6, Sensor-shift OIS, ซูม 2x เทเลโฟโต้ในตัว) + 12MP Ultra-wide พร้อมถ่ายภาพและวิดีโอเชิงพื้นที่ Spatial Video',
      frontCamera: '12MP TrueDepth (f/1.9) พร้อม Autofocus',
      battery: '4,674 mAh เล่นวิดีโอนานสูงสุด 27 ชั่วโมง แบตอึดใช้งานได้ถึง 2 วัน',
      charging: 'ชาร์จเร็วผ่าน USB-C, MagSafe ไร้สายสูงสุด 25W',
      os: 'iOS 18 พร้อมรองรับฟีเจอร์ Apple Intelligence',
      weight: '199 กรัม อะลูมิเนียมเกรดอากาศยานและกระจกแต่งสีด้านหลัง',
      connectivity: '5G, Wi-Fi 7, Bluetooth 5.3, ปุ่ม Action Button และปุ่ม Camera Control'
    },
    promotions: [
      'ผ่อน 0% นานสูงสุด 24 เดือน (เพียงเดือนละ 1,454 บาท)',
      'ลดเพิ่มทันที 1,000 บาท เมื่อเปิดเบอร์ใหม่พร้อมแพ็กเกจที่ร่วมรายการ',
      'แลกซื้อเคสซิลิโคนแท้ Apple หรืออุปกรณ์เสริมลด 20%'
    ],
    freeGifts: [
      'หัวชาร์จเร็ว Apple 20W USB-C Power Adapter',
      'เคสใสกันกระแทก Magnetic Case',
      'ฟิล์มกระจก 9H Focus ติดตั้งฟรี'
    ],
    warranty: 'ประกันศูนย์ Apple ประเทศไทย 1 ปีเต็ม',
    afterSales: 'บริการย้ายข้อมูลจาก Android หรือ iOS เครื่องเดิมฟรีที่ BaNANA IT',
    highlightPoints: [
      'แบตเตอรี่ใหญ่สะใจ 4,674 mAh ใช้งานข้ามวันได้อย่างมั่นใจ ไม่ต้องพกพาวเวอร์แบงก์',
      'หน้าจอ 6.7 นิ้ว ขนาดใหญ่ อ่านคอนเทนต์ ทำงาน ดูหนัง สบายตา',
      'ได้ชิปใหม่ล่าสุด A18 รองรับ Apple Intelligence เต็มประสิทธิภาพ',
      'มีทั้งปุ่ม Action Button และ Camera Control ใช้งานสะดวกคล่องตัว'
    ],
    limitations: [
      'รีเฟรชเรทหน้าจอ 60Hz (ไม่มี ProMotion 120Hz)',
      'พอร์ต USB-C เป็นมาตรฐานความเร็ว USB 2'
    ],
    lastUpdated: '2026-10-20'
  },
  {
    id: 'bnn-apple-iphone-16',
    name: 'Apple iPhone 16',
    category: 'mobile',
    brand: 'Apple',
    price: 29900,
    originalPrice: 29900,
    rating: 4.8,
    reviewCount: 580,
    inStock: true,
    stockCount: 40,
    tags: ['Apple Intelligence', 'ชิป A18', 'ปุ่ม Camera Control', 'ไซซ์กะทัดรัด 6.1 นิ้ว', 'รุ่นยอดนิยม'],
    colors: [
      {
        name: 'น้ำเงินอัลตร้ามารีน Ultramarine',
        hex: '#5271ff',
        overlayHex: '#5271ff',
        image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&w=900&q=80'
      },
      {
        name: 'เขียวอมฟ้า Teal',
        hex: '#72b2a6',
        overlayHex: '#72b2a6',
        image: 'https://images.unsplash.com/photo-1565849904461-04a58ad377e0?auto=format&fit=crop&w=900&q=80'
      },
      {
        name: 'ชมพู Pink',
        hex: '#e898aa',
        overlayHex: '#e898aa',
        image: 'https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&w=900&q=80'
      },
      {
        name: 'ขาว White',
        hex: '#f3f4f6',
        overlayHex: '#f3f4f6',
        image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=900&q=80'
      },
      {
        name: 'ดำ Black',
        hex: '#28282b',
        overlayHex: '#28282b',
        image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=900&q=80'
      }
    ],
    defaultImage: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&w=900&q=80',
    specs: {
      screen: '6.1 นิ้ว Super Retina XDR OLED, Dynamic Island, ความสว่างกลางแจ้งสูงสุด 2,000 nits, กระจก Ceramic Shield แข็งแกร่งขึ้น 50%',
      processor: 'Apple A18 (3nm Gen 2) พร้อม 5-core GPU และ 16-core Neural Engine',
      ram: '8GB Unified Memory รองรับ Apple Intelligence',
      storage: '128GB / 256GB / 512GB',
      rearCamera: '48MP Fusion (f/1.6, Sensor-shift OIS) เทเลโฟโต้ 2x + 12MP Ultra-wide ถ่ายมาโครและ Spatial Video',
      frontCamera: '12MP TrueDepth (f/1.9) พร้อมออโต้โฟกัส',
      battery: '3,561 mAh เล่นวิดีโอนานสูงสุด 22 ชั่วโมง',
      charging: 'ชาร์จเร็ว USB-C, MagSafe สูงสุด 25W (ชาร์จ 50% ใน 30 นาที)',
      os: 'iOS 18 รองรับฟีเจอร์ Apple Intelligence',
      weight: '170 กรัม บางเบา จับถนัดมือที่สุด',
      connectivity: '5G, Wi-Fi 7, Bluetooth 5.3, ปุ่ม Action Button, ปุ่ม Camera Control'
    },
    promotions: [
      'ผ่อน 0% นานสูงสุด 24 เดือน เริ่มต้นเพียงเดือนละ 1,246 บาท',
      'นำเครื่องเก่ามาเทรดอิน รับ On-top เพิ่ม 2,000 บาท',
      'รับส่วนลดอุปกรณ์เสริม 15% ทันทีเมื่อซื้อพร้อมเครื่อง'
    ],
    freeGifts: [
      'หัวชาร์จไว 20W USB-C แท้',
      'เคสใสกันกระแทก',
      'ฟิล์มกระจก 9H'
    ],
    warranty: 'ประกันศูนย์ Apple ประเทศไทย 1 ปีเต็ม',
    afterSales: 'บริการตั้งค่า Apple ID และตรวจเช็กสภาพเครื่องฟรีที่ศูนย์ BaNANA IT',
    highlightPoints: [
      'รองรับ Apple Intelligence เต็มรูปแบบในงบไม่เกินสามหมื่นบาท',
      'ปุ่ม Camera Control ถ่ายภาพและปรับแต่งได้รวดเร็วทันใจ',
      'น้ำหนักเบาเพียง 170 กรัม พกพาง่าย ใส่กระเป๋าสะดวก',
      'กระจก Ceramic Shield รุ่นล่าสุด แข็งแกร่งทนทานต่อการตกกระแทก'
    ],
    limitations: [
      'หน้าจอ 60Hz ธรรมดา',
      'ไม่มีเลนส์ซูม Telephoto เฉพาะ (ใช้ Digital Crop 2x จากกล้องหลัก)'
    ],
    lastUpdated: '2026-10-20'
  },
  {
    id: 'bnn-apple-iphone-15',
    name: 'Apple iPhone 15',
    category: 'mobile',
    brand: 'Apple',
    price: 24900,
    originalPrice: 28900,
    rating: 4.8,
    reviewCount: 890,
    inStock: true,
    stockCount: 35,
    tags: ['คุ้มค่ายอดนิยม', 'Dynamic Island', 'พอร์ต USB-C', 'กล้อง 48MP', 'ปรับลดราคาพิเศษ'],
    colors: [
      {
        name: 'ชมพู Pink',
        hex: '#e5b9bd',
        overlayHex: '#e5b9bd',
        image: 'https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&w=900&q=80'
      },
      {
        name: 'เหลือง Yellow',
        hex: '#fae9a7',
        overlayHex: '#fae9a7',
        image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=900&q=80'
      },
      {
        name: 'เขียว Green',
        hex: '#d4e7d5',
        overlayHex: '#d4e7d5',
        image: 'https://images.unsplash.com/photo-1565849904461-04a58ad377e0?auto=format&fit=crop&w=900&q=80'
      },
      {
        name: 'ฟ้า Blue',
        hex: '#d3e2ea',
        overlayHex: '#d3e2ea',
        image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&w=900&q=80'
      },
      {
        name: 'ดำ Black',
        hex: '#383b3e',
        overlayHex: '#383b3e',
        image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=900&q=80'
      }
    ],
    defaultImage: 'https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&w=900&q=80',
    specs: {
      screen: '6.1 นิ้ว Super Retina XDR OLED, Dynamic Island, ความสว่างกลางแจ้งสูงสุด 2,000 nits',
      processor: 'Apple A16 Bionic (4nm) พร้อม 5-core GPU',
      ram: '6GB',
      storage: '128GB / 256GB / 512GB',
      rearCamera: '48MP Main (f/1.6, Sensor-shift OIS, ซูม 2x คุณภาพออปติคอล) + 12MP Ultra-wide 120°',
      frontCamera: '12MP TrueDepth (f/1.9) พร้อม Autofocus',
      battery: '3,349 mAh เล่นวิดีโอนานสูงสุด 20 ชั่วโมง',
      charging: 'ชาร์จผ่าน USB-C, ชาร์จไร้สาย MagSafe สูงสุด 15W',
      os: 'iOS 18 (การันตีอัปเกรดต่อเนื่องยาวนาน)',
      weight: '171 กรัม กระจกหลังแต่งสีพื้นผิวด้าน สัมผัสนุ่ม ไม่ลื่นมือ',
      connectivity: '5G, Wi-Fi 6, Bluetooth 5.3, Ultra Wideband Gen 2, Dynamic Island'
    },
    promotions: [
      'ปรับลดราคาถาวรลง 4,000 บาท (เหลือเพียง 24,900.- จากปกติ 28,900.-)',
      'ผ่อน 0% นานสูงสุด 18 เดือน เริ่มต้นเดือนละ 1,383 บาท',
      'รับสิทธิ์แลกซื้อหัวชาร์จแท้ Apple 20W ราคาพิเศษเพียง 490 บาท'
    ],
    freeGifts: [
      'เคสใสกันกระแทก TPU พรีเมียม',
      'ฟิล์มกระจก 9H Focus ติดตั้งฟรีหน้าร้าน',
      'สายชาร์จถัก USB-C แท้ในกล่อง'
    ],
    warranty: 'ประกันศูนย์ Apple ประเทศไทย 1 ปีเต็ม',
    afterSales: 'บริการตรวจเช็กสุขภาพแบตเตอรี่ และโอนย้ายข้อมูลฟรีที่สาขา BaNANA IT',
    highlightPoints: [
      'มี Dynamic Island แจ้งเตือนและควบคุมเพลงได้สะดวกสบาย',
      'เปลี่ยนมาใช้พอร์ต USB-C แล้ว ใช้สายชาร์จร่วมกับอุปกรณ์อื่นได้ทันที',
      'กล้องหลัก 48MP คมชัดสูง ซูม 2x คมกริบโดยภาพไม่แตก',
      'ราคาปรับลดลงมาเหลือ 24,900 บาท คุ้มค่าที่สุดสำหรับ iPhone ในงบสองหมื่นกลาง'
    ],
    limitations: [
      'ไม่รองรับระบบ Apple Intelligence (จำกัดเฉพาะชิป A17 Pro / A18 ขึ้นไป)',
      'หน้าจอยังเป็น 60Hz ธรรมดา'
    ],
    lastUpdated: '2026-10-20'
  },
  {
    id: 'bnn-apple-iphone-15-plus',
    name: 'Apple iPhone 15 Plus',
    category: 'mobile',
    brand: 'Apple',
    price: 28900,
    originalPrice: 32900,
    rating: 4.8,
    reviewCount: 420,
    inStock: true,
    stockCount: 18,
    tags: ['จอใหญ่ 6.7 นิ้ว', 'แบตอึดเป็นเลิศ', 'Dynamic Island', 'พอร์ต USB-C', 'ปรับลดราคา'],
    colors: [
      {
        name: 'ชมพู Pink',
        hex: '#e5b9bd',
        overlayHex: '#e5b9bd',
        image: 'https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&w=900&q=80'
      },
      {
        name: 'เหลือง Yellow',
        hex: '#fae9a7',
        overlayHex: '#fae9a7',
        image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=900&q=80'
      },
      {
        name: 'เขียว Green',
        hex: '#d4e7d5',
        overlayHex: '#d4e7d5',
        image: 'https://images.unsplash.com/photo-1565849904461-04a58ad377e0?auto=format&fit=crop&w=900&q=80'
      },
      {
        name: 'ฟ้า Blue',
        hex: '#d3e2ea',
        overlayHex: '#d3e2ea',
        image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&w=900&q=80'
      },
      {
        name: 'ดำ Black',
        hex: '#383b3e',
        overlayHex: '#383b3e',
        image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=900&q=80'
      }
    ],
    defaultImage: 'https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&w=900&q=80',
    specs: {
      screen: '6.7 นิ้ว Super Retina XDR OLED, Dynamic Island, ความสว่างสูงสุด 2,000 nits',
      processor: 'Apple A16 Bionic (4nm) พร้อม 5-core GPU',
      ram: '6GB',
      storage: '128GB / 256GB / 512GB',
      rearCamera: '48MP Main (f/1.6, Sensor-shift OIS) + 12MP Ultra-wide พร้อมซูม 2x ในตัว',
      frontCamera: '12MP TrueDepth (f/1.9) พร้อม Autofocus',
      battery: '4,383 mAh เล่นวิดีโอนานสูงสุด 26 ชั่วโมง แบตเตอรี่อึดมาก',
      charging: 'ชาร์จผ่าน USB-C, ชาร์จไร้สาย MagSafe 15W',
      os: 'iOS 18',
      weight: '201 กรัม กระจกหลังแต่งสีพื้นผิวแบบด้าน',
      connectivity: '5G, Wi-Fi 6, Bluetooth 5.3, UWB Gen 2'
    },
    promotions: [
      'ปรับลดราคา 4,000 บาท (เหลือเพียง 28,900.- จากเดิม 32,900.-)',
      'ผ่อน 0% นาน 18 เดือน เพียงเดือนละ 1,605 บาท'
    ],
    freeGifts: [
      'เคสใสกันกระแทก',
      'ฟิล์มกระจก 9H Focus',
      'สายชาร์จถัก USB-C'
    ],
    warranty: 'ประกันศูนย์ Apple ประเทศไทย 1 ปีเต็ม',
    afterSales: 'บริการดูแลตรวจเช็กเครื่องและย้ายข้อมูลฟรีที่ BaNANA IT',
    highlightPoints: [
      'แบตเตอรี่อึดใช้งานได้ถึง 2 วันเต็ม สำหรับผู้ที่ต้องการ iPhone จอใหญ่แบตทน',
      'หน้าจอ 6.7 นิ้ว และ Dynamic Island คมชัดสว่างสู้แดดได้ดี',
      'พอร์ต USB-C สะดวกต่อการเชื่อมต่อและชาร์จไฟ'
    ],
    limitations: [
      'รีเฟรชเรทหน้าจอ 60Hz',
      'ไม่รองรับ Apple Intelligence'
    ],
    lastUpdated: '2026-10-20'
  },
  {
    id: 'bnn-apple-iphone-14',
    name: 'Apple iPhone 14',
    category: 'mobile',
    brand: 'Apple',
    price: 21900,
    originalPrice: 24900,
    rating: 4.7,
    reviewCount: 760,
    inStock: true,
    stockCount: 25,
    tags: ['เริ่มต้นงบสองหมื่นต้น', 'กล้องคู่ถ่ายสวย', 'ตรวจจับการชนกัน Crash Detection', 'ขนาดพอดีมือ', 'ลดราคาพิเศษ'],
    colors: [
      {
        name: 'มิดไนท์ Midnight',
        hex: '#1f2024',
        overlayHex: '#1f2024',
        image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=900&q=80'
      },
      {
        name: 'สตาร์ไลท์ Starlight',
        hex: '#fbf7f4',
        overlayHex: '#fbf7f4',
        image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=900&q=80'
      },
      {
        name: 'แดง (PRODUCT)RED',
        hex: '#e11d48',
        overlayHex: '#e11d48',
        image: 'https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&w=900&q=80'
      },
      {
        name: 'ฟ้า Blue',
        hex: '#a7c1d9',
        overlayHex: '#a7c1d9',
        image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&w=900&q=80'
      },
      {
        name: 'ม่วง Purple',
        hex: '#e8d7f1',
        overlayHex: '#e8d7f1',
        image: 'https://images.unsplash.com/photo-1589739900243-4b52cd9b104e?auto=format&fit=crop&w=900&q=80'
      },
      {
        name: 'เหลือง Yellow',
        hex: '#f5ea86',
        overlayHex: '#f5ea86',
        image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=900&q=80'
      }
    ],
    defaultImage: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=900&q=80',
    specs: {
      screen: '6.1 นิ้ว Super Retina XDR OLED, ความละเอียด 2532x1170, True Tone, HDR10',
      processor: 'Apple A15 Bionic พร้อม 5-core GPU กราฟิกเร็วขึ้น 18%',
      ram: '6GB',
      storage: '128GB / 256GB',
      rearCamera: '12MP Main (f/1.5, Sensor-shift OIS ถ่ายแสงน้อยดีขึ้น 49%) + 12MP Ultra-wide 120°',
      frontCamera: '12MP TrueDepth (f/1.9) พร้อม Autofocus',
      battery: '3,279 mAh เล่นวิดีโอนานสูงสุด 20 ชั่วโมง',
      charging: 'พอร์ต Lightning, ชาร์จไร้สาย MagSafe 15W, ชาร์จ 50% ใน 30 นาที',
      os: 'iOS 18',
      weight: '172 กรัม Ceramic Shield แข็งแกร่ง ทนน้ำลึก 6 เมตร IP68',
      connectivity: '5G, Wi-Fi 6, Bluetooth 5.3, ตรวจจับการชนกัน Crash Detection'
    },
    promotions: [
      'ราคาพิเศษสุดคุ้ม 21,900 บาทที่ BaNANA IT (ลดจาก 24,900.-)',
      'ผ่อน 0% นานสูงสุด 15 เดือน (เดือนละ 1,460 บาท)'
    ],
    freeGifts: [
      'เคสใสกันกระแทก',
      'ฟิล์มกระจก Focus',
      'สายชาร์จ Lightning แท้'
    ],
    warranty: 'ประกันศูนย์ Apple ประเทศไทย 1 ปีเต็ม',
    afterSales: 'บริการทำความสะอาดลำโพงและพอร์ตชาร์จฟรีที่สาขา BaNANA',
    highlightPoints: [
      'ราคาเริ่มต้นเพียง 21,900 บาท ได้ประสบการณ์การใช้งาน iOS ที่เสถียรและทนทาน',
      'กล้องหน้ามีระบบ Autofocus ถ่ายเซลฟี่คมชัดและวิดีโอคอลชัดเจน',
      'ระบบตรวจจับการชนกัน (Crash Detection) ช่วยโทรฉุกเฉินเมื่อเกิดอุบัติเหตุ',
      'ขนาด 6.1 นิ้ว น้ำหนักเบา จับถนัดมือ'
    ],
    limitations: [
      'ยังใช้พอร์ตเชื่อมต่อแบบ Lightning (ไม่ใช่ USB-C)',
      'ไม่มีหน้าจอ Dynamic Island (เป็นรอยบาก Notch แบบดั้งเดิม)'
    ],
    lastUpdated: '2026-10-20'
  },
  {
    id: 'bnn-apple-iphone-13',
    name: 'Apple iPhone 13',
    category: 'mobile',
    brand: 'Apple',
    price: 17900,
    originalPrice: 21900,
    rating: 4.7,
    reviewCount: 1120,
    inStock: true,
    stockCount: 30,
    tags: ['iPhone ราคาต่ำสุดในร้าน', 'งบไม่เกิน 20,000', 'กล้องคู่แนวทแยง', 'แบตเตอรี่ทนทาน', 'ราคาโปรโมชั่น'],
    colors: [
      {
        name: 'มิดไนท์ Midnight',
        hex: '#1f2024',
        overlayHex: '#1f2024',
        image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=900&q=80'
      },
      {
        name: 'สตาร์ไลท์ Starlight',
        hex: '#fbf7f4',
        overlayHex: '#fbf7f4',
        image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=900&q=80'
      },
      {
        name: 'ชมพู Pink',
        hex: '#f9e5e7',
        overlayHex: '#f9e5e7',
        image: 'https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&w=900&q=80'
      },
      {
        name: 'น้ำเงิน Blue',
        hex: '#215e7d',
        overlayHex: '#215e7d',
        image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&w=900&q=80'
      },
      {
        name: 'เขียว Green',
        hex: '#3b5343',
        overlayHex: '#3b5343',
        image: 'https://images.unsplash.com/photo-1565849904461-04a58ad377e0?auto=format&fit=crop&w=900&q=80'
      }
    ],
    defaultImage: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=900&q=80',
    specs: {
      screen: '6.1 นิ้ว Super Retina XDR OLED, ความสว่าง 800 nits (สูงสุด 1,200 nits HDR)',
      processor: 'Apple A15 Bionic (6-core CPU, 4-core GPU, 16-core Neural Engine)',
      ram: '4GB',
      storage: '128GB',
      rearCamera: '12MP ไวด์คู่แนวทแยง (f/1.6, Sensor-shift OIS) + 12MP Ultra-wide, โหมดภาพยนตร์ Cinematic Mode',
      frontCamera: '12MP TrueDepth (f/2.2) ถ่าย 4K Dolby Vision 60fps',
      battery: '3,227 mAh เล่นวิดีโอนานสูงสุด 19 ชั่วโมง',
      charging: 'พอร์ต Lightning, ชาร์จไร้สาย MagSafe 15W',
      os: 'iOS 18 (อัปเดตระบบได้ต่อเนื่องอีกหลายปี)',
      weight: '173 กรัม มาตรฐานทนน้ำระดับ IP68',
      connectivity: '5G, Wi-Fi 6, Bluetooth 5.0, Face ID'
    },
    promotions: [
      'ลดกระหน่ำเหลือเพียง 17,900 บาท (ถูกที่สุดสำหรับ iPhone มือ 1 ในศูนย์ BaNANA)',
      'ผ่อน 0% นาน 10 เดือน เพียงเดือนละ 1,790 บาท'
    ],
    freeGifts: [
      'เคสใสกันรอย',
      'ฟิล์มกระจก 9H',
      'สายชาร์จ Lightning to Type-C'
    ],
    warranty: 'ประกันศูนย์ Apple ประเทศไทย 1 ปีเต็ม',
    afterSales: 'ดูแลบริการหลังการขายโดยทีมงาน Com7 / BaNANA IT',
    highlightPoints: [
      'iPhone รุ่นมือหนึ่งราคาเข้าถึงง่ายที่สุดของ BaNANA IT ในงบไม่เกิน 18,000 บาท',
      'กล้องมีระบบกันสั่นแบบ Sensor-shift และโหมด Cinematic ถ่ายวิดีโอหน้าชัดหลังเบลอสวยงาม',
      'ชิป A15 ยังคงทำงานได้รวดเร็ว ตอบโจทย์การใช้งานทั่วไป โซเชียล และเล่นเกมได้ลื่นไหล',
      'งานประกอบแข็งแรง ทนน้ำ IP68 ลึก 6 เมตร'
    ],
    limitations: [
      'พอร์ตชาร์จ Lightning',
      'กล้องหน้าไม่มี Autofocus',
      'RAM 4GB น้อยกว่ารุ่นใหม่'
    ],
    lastUpdated: '2026-10-20'
  },

  // ==========================================
  // BRAND 2: SAMSUNG (Galaxy Lineup จาก BaNANA IT)
  // ==========================================
  {
    id: 'bnn-samsung-galaxy-s25-ultra',
    name: 'Samsung Galaxy S25 Ultra',
    category: 'mobile',
    brand: 'Samsung',
    price: 46900,
    originalPrice: 46900,
    rating: 4.9,
    reviewCount: 160,
    inStock: true,
    stockCount: 18,
    tags: ['เรือธง Snapdragon 8 Elite for Galaxy', 'Galaxy AI เจนใหม่', 'ปากกา S-Pen ในตัว', 'กล้อง 200MP + 50MP Ultra-wide', 'กรอบไทเทเนียมขอบมน'],
    colors: [
      {
        name: 'เงินไทเทเนียม Titanium Silverblue',
        hex: '#94a3b8',
        overlayHex: '#94a3b8',
        image: 'https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&w=900&q=80',
        images: [
          'https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&w=900&q=80',
          'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=900&q=80'
        ]
      },
      {
        name: 'เทาไทเทเนียม Titanium Gray',
        hex: '#64748b',
        overlayHex: '#64748b',
        image: 'https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&w=900&q=80'
      },
      {
        name: 'ดำไทเทเนียม Titanium Black',
        hex: '#1e293b',
        overlayHex: '#1e293b',
        image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=900&q=80'
      }
    ],
    defaultImage: 'https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&w=900&q=80',
    specs: {
      screen: '6.9 นิ้ว Dynamic AMOLED 2X QHD+, 1-120Hz LTPO, ขอบมน Ergonomic Design, กระจก Corning Gorilla Armor 2 ลดแสงสะท้อน',
      processor: 'Qualcomm Snapdragon 8 Elite for Galaxy (3nm) สถาปัตยกรรม Oryon CPU ประสิทธิภาพสูงสุด',
      ram: '16GB LPDDR5X ออกแบบเพื่อรองรับ Multi-modal Galaxy AI',
      storage: '256GB / 512GB / 1TB UFS 4.0',
      rearCamera: '200MP OIS (f/1.7) + 50MP Ultra-wide 120° (เซนเซอร์ใหม่ใหญ่ขึ้น) + 50MP Periscope Telephoto 5x OIS + 10MP Telephoto 3x OIS (ซูม Space Zoom 100x)',
      frontCamera: '12MP Dual Pixel AF (f/2.2) ถ่ายวิดีโอ 4K 60fps',
      battery: '5,000 mAh แบตเตอรี่ประสิทธิภาพสูงร่วมกับชิป 3nm ประหยัดไฟยิ่งขึ้น',
      charging: '45W Super Fast Charging 2.0 + ชาร์จไร้สาย Fast Wireless 15W',
      os: 'Android 15 ครอบทับ One UI 7 พร้อม Galaxy AI ยุคใหม่ (การันตีอัปเดตระบบ 7 ปีเต็ม)',
      weight: '219 กรัม ตัวเครื่องบางเบาลงและจับถนัดมือด้วยขอบมนโค้งรับสรีระ',
      connectivity: '5G, Wi-Fi 7, Bluetooth 5.4, UWB, ปากกา S-Pen ในตัวเครื่อง, มาตรฐานกันน้ำกันฝุ่น IP68'
    },
    promotions: [],
    freeGifts: [],
    warranty: 'ประกันศูนย์ไทย Samsung 1 ปีเต็ม เข้าศูนย์ Samsung Service ได้ทุกสาขาทั่วประเทศ',
    afterSales: 'บริการผู้ช่วยพิเศษ Galaxy Butler 24 ชั่วโมง และบริการเครื่องสำรองใช้งาน',
    highlightPoints: [
      'ชิปเซ็ตประมวลผล Qualcomm Snapdragon 8 Elite for Galaxy พร้อม RAM 16GB ประมวลผลลื่นไหลสุดยอด',
      'กล้อง Ultra-wide อัปเกรดเป็น 50MP คมชัดทุกมุมมอง พร้อมกล้องหลัก 200MP ซูมได้ถึง 100x',
      'ดีไซน์ใหม่ขอบมน Ergonomic จับถือสบายมือ น้ำหนักเบาลงเหลือ 219 กรัม พร้อมปากกา S-Pen ในตัว',
      'หน้าจอ 6.9 นิ้ว กระจก Corning Gorilla Armor 2 ลดแสงสะท้อนยอดเยี่ยมกลางแจ้ง'
    ],
    limitations: [
      'ข้อมูลโปรโมชั่นและของแถมเว้นว่างไว้ตามคำขอ รอการยืนยันทางการจากหน้าร้าน'
    ],
    lastUpdated: '2026-10-20'
  },
  {
    id: 'bnn-samsung-galaxy-s24-ultra',
    name: 'Samsung Galaxy S24 Ultra',
    category: 'mobile',
    brand: 'Samsung',
    price: 38900,
    originalPrice: 46900,
    rating: 4.9,
    reviewCount: 520,
    inStock: true,
    stockCount: 15,
    tags: ['เรือธงตัวท็อป', 'Samsung Galaxy AI', 'ปากกา S-Pen', 'กล้อง 200MP', 'กรอบไทเทเนียม'],
    colors: [
      {
        name: 'เทา Titanium Gray',
        hex: '#717376',
        overlayHex: '#717376',
        image: 'https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&w=900&q=80',
        images: [
          'https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&w=900&q=80',
          'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=900&q=80'
        ]
      },
      {
        name: 'ดำ Titanium Black',
        hex: '#212224',
        overlayHex: '#212224',
        image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=900&q=80'
      },
      {
        name: 'ม่วง Titanium Violet',
        hex: '#484554',
        overlayHex: '#484554',
        image: 'https://images.unsplash.com/photo-1589739900243-4b52cd9b104e?auto=format&fit=crop&w=900&q=80'
      },
      {
        name: 'เหลือง Titanium Yellow',
        hex: '#f5e4b2',
        overlayHex: '#f5e4b2',
        image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=900&q=80'
      }
    ],
    defaultImage: 'https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&w=900&q=80',
    specs: {
      screen: '6.8 นิ้ว Dynamic AMOLED 2X QHD+, 1-120Hz LTPO, กระจก Corning Gorilla Armor ลดแสงสะท้อนได้ถึง 75%',
      processor: 'Qualcomm Snapdragon 8 Gen 3 for Galaxy (4nm) เร่งความเร็วพิเศษ',
      ram: '12GB LPDDR5X',
      storage: '256GB / 512GB / 1TB UFS 4.0',
      rearCamera: '200MP OIS + 50MP Periscope 5x (ซูม 10x Optical Quality) + 10MP Tele 3x + 12MP Ultrawide',
      frontCamera: '12MP Dual Pixel AF (f/2.2) รองรับถ่ายวิดีโอ 4K 60fps',
      battery: '5,000 mAh พร้อมระบบ AI ประหยัดพลังงาน ใช้งานได้ข้ามวัน',
      charging: '45W Super Fast Charging 2.0 (ชาร์จ 65% ใน 30 นาที) + ชาร์จไร้สาย 15W',
      os: 'Android 14 ครอบทับ One UI 6.1.1 พร้อม Galaxy AI เต็มรูปแบบ (การันตีอัปเดต 7 ปีเต็ม)',
      weight: '232 กรัม กรอบไทเทเนียมระดับอากาศยาน แข็งแกร่งทนทาน',
      connectivity: '5G, Wi-Fi 7, Bluetooth 5.3, UWB, ปากกา S-Pen ในตัว, กันน้ำกันฝุ่น IP68'
    },
    promotions: [
      'ลดราคาพิเศษทันที 8,000 บาทที่ BaNANA IT (เหลือเพียง 38,900.-)',
      'ผ่อน 0% นานสูงสุด 36 เดือน เริ่มต้นเพียงเดือนละ 1,080 บาท',
      'เก่าแลกใหม่ (Trade-in) รับส่วนลดเพิ่มสูงสุด 4,000 บาท'
    ],
    freeGifts: [
      'Samsung 45W Power Adapter แท้ในกล่อง',
      'เคส Smart View Wallet Case แท้',
      'ฟิล์มกันรอยหน้าจอลดแสงสะท้อนแท้จาก Samsung'
    ],
    warranty: 'ประกันศูนย์ไทย Samsung 1 ปีเต็ม พร้อมรับสิทธิ์ซื้อประกันจอแตก Samsung Care+ ราคาพิเศษ',
    afterSales: 'บริการ Galaxy Butler ผู้ช่วยส่วนตัว 24 ชม., บริการเครื่องสำรองรุ่นท็อประหว่างซ่อม',
    highlightPoints: [
      'Galaxy AI ฟีเจอร์ครบครัน: Circle to Search, Live Translate แปลภาษาเรียลไทม์, Note Assist',
      'กระจก Gorilla Armor ลดการสะท้อนของแสงแดดได้ 75% หน้าจอคมชัดสบายตาที่สุดกลางแจ้ง',
      'กล้อง 200MP ซูมคมชัดระดับโปร พร้อมพลังประมวลผล ProVisual Engine',
      'มีปากกา S-Pen เก็บในตัวเครื่อง เขียน โน้ต วาด ตัดต่อภาพได้อย่างแม่นยำ'
    ],
    limitations: [
      'ตัวเครื่องขนาดใหญ่และน้ำหนัก 232 กรัม',
      'ไม่มีช่องใส่ MicroSD เพิ่มเติม'
    ],
    lastUpdated: '2026-10-20'
  },
  {
    id: 'bnn-samsung-galaxy-s24-plus',
    name: 'Samsung Galaxy S24+',
    category: 'mobile',
    brand: 'Samsung',
    price: 32900,
    originalPrice: 38900,
    rating: 4.8,
    reviewCount: 340,
    inStock: true,
    stockCount: 22,
    tags: ['จอ QHD+ คมชัด', 'Samsung Galaxy AI', 'แบต 4900mAh', 'ชาร์จไว 45W', 'RAM 12GB'],
    colors: [
      {
        name: 'ดำ Onyx Black',
        hex: '#262626',
        overlayHex: '#262626',
        image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=900&q=80'
      },
      {
        name: 'เทา Marble Gray',
        hex: '#d1d5db',
        overlayHex: '#d1d5db',
        image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=900&q=80'
      },
      {
        name: 'ม่วง Cobalt Violet',
        hex: '#4c4863',
        overlayHex: '#4c4863',
        image: 'https://images.unsplash.com/photo-1589739900243-4b52cd9b104e?auto=format&fit=crop&w=900&q=80'
      },
      {
        name: 'เหลือง Amber Yellow',
        hex: '#fde68a',
        overlayHex: '#fde68a',
        image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=900&q=80'
      }
    ],
    defaultImage: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=900&q=80',
    specs: {
      screen: '6.7 นิ้ว Dynamic AMOLED 2X ความละเอียดระดับ QHD+ (3120x1440), 1-120Hz LTPO, 2,600 nits',
      processor: 'Samsung Exynos 2400 (4nm) 10-core ประสิทธิภาพระดับเรือธง',
      ram: '12GB LPDDR5X สลับแอปได้ลื่นไหล',
      storage: '256GB / 512GB UFS 4.0',
      rearCamera: '50MP (f/1.8, OIS) + 10MP Telephoto 3x (OIS) + 12MP Ultra-wide 120°',
      frontCamera: '12MP Dual Pixel AF (f/2.2) ถ่ายเซลฟี่คมชัด',
      battery: '4,900 mAh ใช้งานได้ต่อเนื่องยาวนาน',
      charging: '45W Super Fast Charging 2.0 + ชาร์จไร้สาย 15W',
      os: 'Android 14 One UI 6.1.1 พร้อม Galaxy AI (อัปเดตยาวนาน 7 ปี)',
      weight: '196 กรัม กรอบอะลูมิเนียม Armor Aluminum 2.0',
      connectivity: '5G, Wi-Fi 7, Bluetooth 5.3, UWB, กันน้ำกันฝุ่น IP68'
    },
    promotions: [
      'ลดทันที 6,000 บาทที่ BaNANA IT (เหลือ 32,900.- จากปกติ 38,900.-)',
      'ผ่อน 0% นาน 24 เดือน เริ่มต้นเดือนละ 1,371 บาท',
      'แลกซื้อ Galaxy Buds FE รับส่วนลด 50%'
    ],
    freeGifts: [
      'หัวชาร์จ 45W แท้',
      'เคสใส Silicone Case แท้',
      'ฟิล์มกระจก 9H'
    ],
    warranty: 'ประกันศูนย์ไทย 1 ปีเต็ม',
    afterSales: 'บริการอัปเดตระบบและถ่ายโอนข้อมูลด้วย Smart Switch ฟรีที่ร้าน BaNANA',
    highlightPoints: [
      'อัปเกรดหน้าจอเป็นความละเอียด QHD+ คมชัดเท่ากับรุ่น Ultra ในขนาดจับถนัดมือกว่า',
      'ได้ RAM 12GB เต็มที่ พร้อมระบบชาร์จไว 45W',
      'ฟีเจอร์ Galaxy AI เต็มรูปแบบ ช่วยแต่งภาพ แปลภาษา และสรุปงาน',
      'น้ำหนักเบากว่าตัว Ultra มากเพียง 196 กรัม พกพาง่าย'
    ],
    limitations: [
      'ไม่มีปากกา S-Pen ในตัว',
      'กล้องซูม Telephoto ระยะ 3x (ไม่ถึงระดับ 5x Periscope เหมือน Ultra)'
    ],
    lastUpdated: '2026-10-20'
  },
  {
    id: 'bnn-samsung-galaxy-s24',
    name: 'Samsung Galaxy S24',
    category: 'mobile',
    brand: 'Samsung',
    price: 27900,
    originalPrice: 33900,
    rating: 4.8,
    reviewCount: 410,
    inStock: true,
    stockCount: 25,
    tags: ['เรือธงไซซ์กะทัดรัด', 'Samsung Galaxy AI', 'เบาเพียง 167 กรัม', 'จอ 120Hz', 'ลดราคาพิเศษ'],
    colors: [
      {
        name: 'ดำ Onyx Black',
        hex: '#262626',
        overlayHex: '#262626',
        image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=900&q=80'
      },
      {
        name: 'เทา Marble Gray',
        hex: '#d1d5db',
        overlayHex: '#d1d5db',
        image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=900&q=80'
      },
      {
        name: 'ม่วง Cobalt Violet',
        hex: '#4c4863',
        overlayHex: '#4c4863',
        image: 'https://images.unsplash.com/photo-1589739900243-4b52cd9b104e?auto=format&fit=crop&w=900&q=80'
      },
      {
        name: 'เหลือง Amber Yellow',
        hex: '#fde68a',
        overlayHex: '#fde68a',
        image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=900&q=80'
      }
    ],
    defaultImage: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=900&q=80',
    specs: {
      screen: '6.2 นิ้ว Dynamic AMOLED 2X FHD+, 1-120Hz LTPO, ความสว่างสูงสุด 2,600 nits, ขอบจอบางเฉียบ',
      processor: 'Samsung Exynos 2400 (4nm) 10-core',
      ram: '8GB LPDDR5X',
      storage: '256GB / 512GB UFS 4.0',
      rearCamera: '50MP (f/1.8, OIS) + 10MP Tele 3x + 12MP Ultra-wide',
      frontCamera: '12MP Dual Pixel AF (f/2.2)',
      battery: '4,000 mAh ประหยัดพลังงานขึ้นอย่างชัดเจน',
      charging: '25W Fast Charging + ชาร์จไร้สาย 15W',
      os: 'Android 14 One UI 6.1.1 พร้อม Galaxy AI (อัปเดต OS 7 ปี)',
      weight: '167 กรัม เบา บาง พกพาสะดวกที่สุดในกลุ่มเรือธง',
      connectivity: '5G, Wi-Fi 6E, Bluetooth 5.3, กันน้ำกันฝุ่น IP68'
    },
    promotions: [
      'ลดทันที 6,000 บาท (เหลือเพียง 27,900.- จากปกติ 33,900.-)',
      'ผ่อน 0% นาน 24 เดือน เพียงเดือนละ 1,163 บาท'
    ],
    freeGifts: [
      'หัวชาร์จ 25W แท้',
      'เคสใสกันกระแทก',
      'ฟิล์มกันรอย Focus'
    ],
    warranty: 'ประกันศูนย์ไทย 1 ปีเต็ม',
    afterSales: 'บริการอัปเดตเฟิร์มแวร์และทำความสะอาดเครื่องฟรีที่ BaNANA IT',
    highlightPoints: [
      'ขนาดหน้าจอ 6.2 นิ้ว กะทัดรัด น้ำหนักเบาเพียง 167 กรัม ใช้งานมือเดียวคล่องตัวสุดๆ',
      'หน้าจอ Dynamic AMOLED 2X สว่างสูงสุดถึง 2,600 nits สู้แดดจ้าได้ยอดเยี่ยม',
      'มีฟังก์ชัน Galaxy AI เหมือนรุ่นท็อปทุกประการ',
      'การันตีการอัปเดตระบบปฏิบัติการและความปลอดภัยยาวนานถึง 7 ปี'
    ],
    limitations: [
      'ชาร์จไวสูงสุด 25W (รุ่น Plus และ Ultra ชาร์จ 45W)',
      'RAM 8GB'
    ],
    lastUpdated: '2026-10-20'
  },
  {
    id: 'bnn-samsung-galaxy-s24-fe',
    name: 'Samsung Galaxy S24 FE',
    category: 'mobile',
    brand: 'Samsung',
    price: 22900,
    originalPrice: 22900,
    rating: 4.8,
    reviewCount: 195,
    inStock: true,
    stockCount: 30,
    tags: ['เรือธงแฟนคลับ', 'Samsung Galaxy AI', 'จอใหญ่ 6.7 นิ้ว', 'กล้องซูม 3x', 'รุ่นใหม่ล่าสุด'],
    colors: [
      {
        name: 'ฟ้า Blue',
        hex: '#93c5fd',
        overlayHex: '#93c5fd',
        image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&w=900&q=80'
      },
      {
        name: 'เทาดำ Graphite',
        hex: '#374151',
        overlayHex: '#374151',
        image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=900&q=80'
      },
      {
        name: 'เทา Gray',
        hex: '#9ca3af',
        overlayHex: '#9ca3af',
        image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=900&q=80'
      },
      {
        name: 'เขียวมินต์ Mint',
        hex: '#a7f3d0',
        overlayHex: '#a7f3d0',
        image: 'https://images.unsplash.com/photo-1565849904461-04a58ad377e0?auto=format&fit=crop&w=900&q=80'
      },
      {
        name: 'เหลือง Yellow',
        hex: '#fef08a',
        overlayHex: '#fef08a',
        image: 'https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&w=900&q=80'
      }
    ],
    defaultImage: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&w=900&q=80',
    specs: {
      screen: '6.7 นิ้ว Dynamic AMOLED 2X FHD+, 120Hz, ความสว่าง 1,900 nits, กระจก Gorilla Glass Victus+',
      processor: 'Samsung Exynos 2400e (4nm) พร้อม Vapor Chamber ระบายความร้อนใหญ่ขึ้น 1.1 เท่า',
      ram: '8GB',
      storage: '128GB / 256GB',
      rearCamera: '50MP (f/1.8, OIS) + 8MP Telephoto 3x (OIS) + 12MP Ultra-wide',
      frontCamera: '10MP (f/2.4) Dual Pixel AF',
      battery: '4,700 mAh รองรับการใช้งานหนักตลอดวัน',
      charging: '25W Fast Charging + ชาร์จไร้สาย 15W',
      os: 'Android 14 One UI 6.1.1 พร้อม Galaxy AI (อัปเดตยาวนาน 7 ปี)',
      weight: '213 กรัม กันน้ำกันฝุ่นระดับ IP68',
      connectivity: '5G, Wi-Fi 6E, Bluetooth 5.3, ลำโพงสเตอริโอ Dolby Atmos'
    },
    promotions: [
      'ราคาเปิดตัวสุดคุ้ม 22,900 บาท ที่ BaNANA IT',
      'ผ่อน 0% นานสูงสุด 18 เดือน เริ่มต้นเดือนละ 1,272 บาท',
      'นำเครื่องเก่ามาแลก รับ On-top เพิ่มทันที 2,000 บาท'
    ],
    freeGifts: [
      'Samsung 25W Power Adapter แท้',
      'เคสใส Silicone Case แท้',
      'ฟิล์มกระจก 9H'
    ],
    warranty: 'ประกันศูนย์ไทย 1 ปีเต็ม',
    afterSales: 'บริการตั้งค่าระบบและถ่ายโอนข้อมูลด้วย Smart Switch ฟรีที่สาขา',
    highlightPoints: [
      'รุ่นเรือธง Fan Edition ได้จอใหญ่ 6.7 นิ้ว Dynamic AMOLED 2X ในราคาคุ้มค่าสองหมื่นต้น',
      'ระบบระบายความร้อน Vapor Chamber ใหญ่ขึ้น เล่นเกมลื่นขึ้น ไม่ร้อนมือ',
      'ฟีเจอร์ Galaxy AI ครบทุกฟังก์ชันเหมือนรุ่นพี่ S24 Ultra',
      'การันตีการอัปเกรดระบบยาวนาน 7 ปี'
    ],
    limitations: [
      'ขอบหน้าจอหนากว่ารุ่น S24+ เล็กน้อย',
      'กล้อง Telephoto ความละเอียด 8MP'
    ],
    lastUpdated: '2026-10-20'
  },
  {
    id: 'bnn-samsung-galaxy-z-fold-6',
    name: 'Samsung Galaxy Z Fold6',
    category: 'mobile',
    brand: 'Samsung',
    price: 63900,
    originalPrice: 63900,
    rating: 4.9,
    reviewCount: 280,
    inStock: true,
    stockCount: 10,
    tags: ['มือถือจอพับเรือธง', 'Galaxy AI', 'กางออกเป็นแท็บเล็ต 7.6 นิ้ว', 'บางเบาลง', 'Snapdragon 8 Gen 3'],
    colors: [
      {
        name: 'เงิน Silver Shadow',
        hex: '#94a3b8',
        overlayHex: '#94a3b8',
        image: 'https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&w=900&q=80'
      },
      {
        name: 'น้ำเงิน Navy',
        hex: '#1e3a8a',
        overlayHex: '#1e3a8a',
        image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&w=900&q=80'
      },
      {
        name: 'ชมพู Pink',
        hex: '#fbcfe8',
        overlayHex: '#fbcfe8',
        image: 'https://images.unsplash.com/photo-1589739900243-4b52cd9b104e?auto=format&fit=crop&w=900&q=80'
      }
    ],
    defaultImage: 'https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&w=900&q=80',
    specs: {
      screen: 'จอด้านนอก 6.3 นิ้ว Dynamic AMOLED 2X 120Hz / จอหลักกางออก 7.6 นิ้ว QXGA+ 120Hz, ความสว่าง 2,600 nits',
      processor: 'Qualcomm Snapdragon 8 Gen 3 for Galaxy (4nm)',
      ram: '12GB LPDDR5X',
      storage: '256GB / 512GB / 1TB UFS 4.0',
      rearCamera: '50MP (f/1.8, OIS) + 10MP Telephoto 3x (OIS) + 12MP Ultra-wide 120°',
      frontCamera: 'กล้องจอนอก 10MP (f/2.2) + กล้องซ่อนใต้จอหลัก (UDC) 4MP (f/1.8)',
      battery: '4,400 mAh จัดการพลังงานอัจฉริยะ',
      charging: '25W Fast Charging + ชาร์จไร้สาย 15W',
      os: 'Android 14 One UI 6.1.1 พร้อมฟังก์ชัน Multitasking 3 หน้าจอ และ Galaxy AI (อัปเดต 7 ปี)',
      weight: '239 กรัม (บางลงเหลือ 12.1 มม. เมื่อพับ)',
      connectivity: '5G, Wi-Fi 7, Bluetooth 5.3, UWB, กันน้ำฝุ่นมาตรฐาน IP48'
    },
    promotions: [
      'ผ่อน 0% นานสูงสุด 36 เดือน ผ่านบัตรที่ร่วมรายการ BaNANA (เพียงเดือนละ 1,775 บาท)',
      'รับฟรีประกันหน้าจอพับ Samsung Care+ 1 ปีเต็ม มูลค่า 7,490 บาท',
      'เก่าแลกใหม่ รับส่วนลดเพิ่ม On-top สูงสุด 5,000 บาท'
    ],
    freeGifts: [
      'หัวชาร์จ 25W Fast Charger แท้',
      'เคสใสแท้ Clear Grip Case',
      'ปากกา S-Pen Fold Edition มูลค่า 1,990 บาท'
    ],
    warranty: 'ประกันศูนย์ไทย 1 ปีเต็ม พร้อมบริการตรวจเช็กและเปลี่ยนฟิล์มจอพับฟรี 2 ครั้ง',
    afterSales: 'บริการ VIP Galaxy Butler เอกสิทธิ์เฉพาะลูกค้าสมาร์ทโฟนจอพับ',
    highlightPoints: [
      'ดีไซน์ใหม่ขอบเหลี่ยม พับสนิท ไร้ช่องว่าง น้ำหนักเบาลงเหลือเพียง 239 กรัม พกง่ายขึ้นชัดเจน',
      'หน้าจอนอกกว้างขึ้นเป็น 6.3 นิ้ว พิมพ์ข้อความมือเดียวได้สะดวกเหมือนสมาร์ทโฟนทั่วไป',
      'Galaxy AI แบบเต็มพิกัดบนจอใหญ่ 7.6 นิ้ว: สเก็ตช์ภาพด้วย AI, ล่ามแปลบทสนทนาสองหน้าจอ',
      'รองรับการทำงานมัลติทาสก์เปิด 3 แอปพลิเคชันพร้อมกันอย่างราบรื่น'
    ],
    limitations: [
      'ราคาสูงระดับอัลตราพรีเมียม',
      'ชาร์จไวจำกัดที่ 25W'
    ],
    lastUpdated: '2026-10-20'
  },
  {
    id: 'bnn-samsung-galaxy-z-flip-6',
    name: 'Samsung Galaxy Z Flip6',
    category: 'mobile',
    brand: 'Samsung',
    price: 36900,
    originalPrice: 42900,
    rating: 4.8,
    reviewCount: 360,
    inStock: true,
    stockCount: 20,
    tags: ['มือถือพับตลับแป้ง', 'Galaxy AI', 'กล้องใหม่ 50MP', 'จอนอก FlexWindow', 'พกพาน่ารัก'],
    colors: [
      {
        name: 'ฟ้า Blue',
        hex: '#60a5fa',
        overlayHex: '#60a5fa',
        image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&w=900&q=80'
      },
      {
        name: 'เงิน Silver Shadow',
        hex: '#94a3b8',
        overlayHex: '#94a3b8',
        image: 'https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&w=900&q=80'
      },
      {
        name: 'เขียวมินต์ Mint',
        hex: '#6ee7b7',
        overlayHex: '#6ee7b7',
        image: 'https://images.unsplash.com/photo-1565849904461-04a58ad377e0?auto=format&fit=crop&w=900&q=80'
      },
      {
        name: 'เหลือง Yellow',
        hex: '#fde047',
        overlayHex: '#fde047',
        image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=900&q=80'
      }
    ],
    defaultImage: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&w=900&q=80',
    specs: {
      screen: 'จอนอก FlexWindow 3.4 นิ้ว Super AMOLED / จอหลักพับ 6.7 นิ้ว FHD+ Dynamic AMOLED 2X 120Hz, 2,600 nits',
      processor: 'Snapdragon 8 Gen 3 for Galaxy พร้อม Vapor Chamber ครั้งแรกในตระกูล Flip',
      ram: '12GB (อัปเกรดจากรุ่นเดิม 8GB)',
      storage: '256GB / 512GB UFS 4.0',
      rearCamera: '50MP (f/1.8, OIS เซนเซอร์ใหญ่ขึ้น) + 12MP Ultra-wide 123°',
      frontCamera: '10MP (f/2.2) ถ่ายเซลฟี่ได้ทั้งกางและพับเครื่องผ่านกล้องหลัง',
      battery: '4,000 mAh (เพิ่มขึ้นจากเดิม 3,700 mAh)',
      charging: '25W Fast Charging + ชาร์จไร้สาย 15W',
      os: 'Android 14 One UI 6.1.1 พร้อม Galaxy AI (อัปเดต 7 ปี)',
      weight: '187 กรัม เล็กกะทัดรัด พับใส่กระเป๋าเสื้อได้พอดี',
      connectivity: '5G, Wi-Fi 6E, Bluetooth 5.3, กันน้ำและฝุ่น IP48'
    },
    promotions: [
      'ลดราคาพิเศษ 6,000 บาทที่ BaNANA IT (เหลือเพียง 36,900.- จากปกติ 42,900.-)',
      'ผ่อน 0% นาน 24 เดือน เริ่มต้นเดือนละ 1,538 บาท',
      'ฟรีประกันจอพับ Samsung Care+ 1 ปีเต็ม'
    ],
    freeGifts: [
      'หัวชาร์จ 25W Fast Charger แท้',
      'เคสใส Flipsuit Case พร้อมแผ่นการ์ดแบบอินเตอร์แอคทีฟ',
      'ฟิล์มกันรอยหน้าจอนอก Focus'
    ],
    warranty: 'ประกันศูนย์ไทย 1 ปีเต็ม',
    afterSales: 'บริการเปลี่ยนฟิล์มหน้าจอพับแท้ฟรี 2 ครั้งที่ศูนย์บริการ',
    highlightPoints: [
      'อัปเกรดกล้องหลังเป็น 50MP ภาพสวย คมชัด มิติภาพดีขึ้นมาก',
      'ใส่แผ่นระบายความร้อน Vapor Chamber มาให้เป็นครั้งแรก เครื่องไม่ร้อนง่ายเวลาใช้งานต่อเนื่อง',
      'แบตเตอรี่ใหญ่ขึ้นเป็น 4,000 mAh ใช้งานได้ตลอดทั้งวัน',
      'ถ่ายเซลฟี่มุมมองครีเอทีฟได้ง่ายดายโดยไม่ต้องใช้ขาตั้งกล้องด้วยโหมด FlexCam'
    ],
    limitations: [
      'ไม่มีเลนส์ซูม Telephoto',
      'จอด้านนอกรีเฟรชเรท 60Hz'
    ],
    lastUpdated: '2026-10-20'
  },
  {
    id: 'bnn-samsung-galaxy-a55-5g',
    name: 'Samsung Galaxy A55 5G',
    category: 'mobile',
    brand: 'Samsung',
    price: 13999,
    originalPrice: 15999,
    rating: 4.8,
    reviewCount: 680,
    inStock: true,
    stockCount: 45,
    tags: ['มือถือยอดนิยมระดับกลาง', 'บอดี้เฟรมโลหะ', 'กันน้ำ IP67', 'กล้องสวยมี OIS', 'อัปเดต 4+5 ปี'],
    colors: [
      {
        name: 'ดำ Awesome Navy',
        hex: '#1f2937',
        overlayHex: '#1f2937',
        image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=900&q=80'
      },
      {
        name: 'ฟ้าอ่อน Awesome Iceblue',
        hex: '#c7d2fe',
        overlayHex: '#c7d2fe',
        image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&w=900&q=80'
      },
      {
        name: 'ม่วงอ่อน Awesome Lilac',
        hex: '#e9d5ff',
        overlayHex: '#e9d5ff',
        image: 'https://images.unsplash.com/photo-1589739900243-4b52cd9b104e?auto=format&fit=crop&w=900&q=80'
      },
      {
        name: 'เหลืองมะนาว Awesome Lemon',
        hex: '#fef08a',
        overlayHex: '#fef08a',
        image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=900&q=80'
      }
    ],
    defaultImage: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=900&q=80',
    specs: {
      screen: '6.6 นิ้ว Super AMOLED FHD+, 120Hz, Vision Booster, กระจก Gorilla Glass Victus+',
      processor: 'Samsung Exynos 1480 (4nm) พร้อม GPU สถาปัตยกรรม AMD Xclipse 530',
      ram: '8GB / 12GB LPDDR5',
      storage: '128GB / 256GB (รองรับใส่ MicroSD Card เพิ่มได้สูงสุด 1TB)',
      rearCamera: '50MP (f/1.8, OIS กันสั่น) + 12MP Ultra-wide 123° + 5MP Macro',
      frontCamera: '32MP (f/2.2) รองรับถ่ายวิดีโอ 4K UHD คมชัดสูง',
      battery: '5,000 mAh แบตเตอรี่อึดใช้งานได้ถึง 2 วัน',
      charging: '25W Fast Charging',
      os: 'Android 14 One UI 6.1 (การันตีอัปเดต OS 4 ปี + ความปลอดภัย 5 ปี)',
      weight: '213 กรัม กรอบเครื่องโลหะ Metal Frame พรีเมียม ทนทาน',
      connectivity: '5G, Wi-Fi 6, Bluetooth 5.3, NFC, มาตรฐานกันน้ำกันฝุ่น IP67'
    },
    promotions: [
      'ลดทันที 2,000 บาทที่ BaNANA IT (เหลือเพียง 13,999.- จากปกติ 15,999.-)',
      'ผ่อน 0% นาน 10 เดือน เริ่มต้นเดือนละ 1,400 บาท',
      'เก่าแลกใหม่ รับส่วนลดเพิ่ม On-top 1,500 บาท'
    ],
    freeGifts: [
      'Samsung 25W Travel Adapter แท้',
      'เคสใสแท้จาก Samsung',
      'ฟิล์มกระจกนิรภัยเกรด 9H'
    ],
    warranty: 'ประกันศูนย์ไทย 1 ปีเต็ม',
    afterSales: 'บริการ Smart Switch โอนย้ายข้อมูลฟรีที่สาขา BaNANA ทั่วประเทศ',
    highlightPoints: [
      'เฟรมเครื่องโลหะแท้ Metal Frame และกระจก Victus+ แข็งแกร่งพรีเมียมเกินราคา',
      'กันน้ำกันฝุ่นระดับ IP67 ดำน้ำได้ลึก 1 เมตร นาน 30 นาที ใช้งานลุยฝนได้สบายใจ',
      'กล้องหน้า 32MP เซลฟี่สวย ถ่ายวิดีโอ 4K ได้คมชัดระดับแนวหน้า',
      'รองรับการใส่ MicroSD Card เพิ่มความจุได้ถึง 1TB'
    ],
    limitations: [
      'ความเร็วชาร์จ 25W ช้ากว่าคู่แข่งในระดับราคาเดียวกัน',
      'ตัวเครื่องหนัก 213 กรัม'
    ],
    lastUpdated: '2026-10-20'
  },
  {
    id: 'bnn-samsung-galaxy-a35-5g',
    name: 'Samsung Galaxy A35 5G',
    category: 'mobile',
    brand: 'Samsung',
    price: 9999,
    originalPrice: 11999,
    rating: 4.7,
    reviewCount: 390,
    inStock: true,
    stockCount: 35,
    tags: ['งบไม่เกินหมื่น', 'กันน้ำ IP67', 'จอ Super AMOLED 120Hz', 'กล้อง 50MP OIS', 'สุดคุ้ม'],
    colors: [
      {
        name: 'ดำ Awesome Navy',
        hex: '#1f2937',
        overlayHex: '#1f2937',
        image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=900&q=80'
      },
      {
        name: 'ฟ้าอ่อน Awesome Iceblue',
        hex: '#c7d2fe',
        overlayHex: '#c7d2fe',
        image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&w=900&q=80'
      },
      {
        name: 'ม่วงอ่อน Awesome Lilac',
        hex: '#e9d5ff',
        overlayHex: '#e9d5ff',
        image: 'https://images.unsplash.com/photo-1589739900243-4b52cd9b104e?auto=format&fit=crop&w=900&q=80'
      }
    ],
    defaultImage: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=900&q=80',
    specs: {
      screen: '6.6 นิ้ว Super AMOLED FHD+, 120Hz, 1,000 nits, กระจก Corning Gorilla Glass Victus+',
      processor: 'Samsung Exynos 1380 (5nm) Octa-core',
      ram: '8GB',
      storage: '128GB (รองรับใส่ MicroSD สูงสุด 1TB)',
      rearCamera: '50MP (f/1.8, OIS) + 8MP Ultra-wide + 5MP Macro',
      frontCamera: '13MP (f/2.2)',
      battery: '5,000 mAh ใช้งานได้ถึง 2 วัน',
      charging: '25W Fast Charging',
      os: 'Android 14 One UI 6.1 (อัปเดต OS 4 ปี + ความปลอดภัย 5 ปี)',
      weight: '209 กรัม ด้านหลังกระจกเงางาม',
      connectivity: '5G, Wi-Fi 6, Bluetooth 5.3, มาตรฐานกันน้ำ IP67'
    },
    promotions: [
      'ราคาโปรพิเศษต่ำกว่าหมื่นเพียง 9,999 บาท (ลดจากปกติ 11,999.-)',
      'ผ่อน 0% นาน 10 เดือน เดือนละ 999 บาท'
    ],
    freeGifts: [
      'หัวชาร์จ 25W',
      'เคสใสกันกระแทก',
      'ฟิล์มกระจกนิรภัย'
    ],
    warranty: 'ประกันศูนย์ไทย 1 ปีเต็ม',
    afterSales: 'บริการอัปเดตระบบและทำความสะอาดเครื่องฟรีที่สาขา BaNANA',
    highlightPoints: [
      'มือถือต่ำกว่าหมื่นที่ได้มาตรฐานกันน้ำกันฝุ่น IP67 และกระจก Victus+ หายากในระดับราคานี้',
      'หน้าจอ Super AMOLED 120Hz ให้สีสันสดใส สบายตา',
      'กล้องหลัก 50MP มีระบบกันสั่น OIS ถ่ายภาพนิ่งและวิดีโอไม่สั่นไหว',
      'อัปเกรด Android ได้ถึง 4 รุ่น และแพตช์ความปลอดภัย 5 ปี'
    ],
    limitations: [
      'กรอบตัวเครื่องเป็นพลาสติก (รุ่น A55 เป็นโลหะ)',
      'กล้องหน้า 13MP ถ่ายวิดีโอ 4K ไม่ได้'
    ],
    lastUpdated: '2026-10-20'
  },
  {
    id: 'bnn-samsung-galaxy-a16-5g',
    name: 'Samsung Galaxy A16 5G',
    category: 'mobile',
    brand: 'Samsung',
    price: 6499,
    originalPrice: 7299,
    rating: 4.6,
    reviewCount: 210,
    inStock: true,
    stockCount: 50,
    tags: ['มือถือ 5G ราคาประหยัด', 'อัปเดตยาวนาน 6 ปี', 'จอ Super AMOLED 90Hz', 'แบต 5000mAh', 'รุ่นใหม่ล่าสุด'],
    colors: [
      {
        name: 'ดำ Black',
        hex: '#262626',
        overlayHex: '#262626',
        image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=900&q=80'
      },
      {
        name: 'เขียวอ่อน Light Green',
        hex: '#bbf7d0',
        overlayHex: '#bbf7d0',
        image: 'https://images.unsplash.com/photo-1565849904461-04a58ad377e0?auto=format&fit=crop&w=900&q=80'
      },
      {
        name: 'น้ำเงิน Blue',
        hex: '#3b82f6',
        overlayHex: '#3b82f6',
        image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&w=900&q=80'
      }
    ],
    defaultImage: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=900&q=80',
    specs: {
      screen: '6.7 นิ้ว Super AMOLED FHD+, 90Hz, 800 nits สว่างและสีสด',
      processor: 'MediaTek Dimensity 6300 (6nm) 5G Octa-core',
      ram: '8GB',
      storage: '128GB (รองรับใส่ MicroSD สูงสุด 1.5TB)',
      rearCamera: '50MP หลัก (f/1.8) + 5MP Ultra-wide + 2MP Macro',
      frontCamera: '13MP (f/2.0)',
      battery: '5,000 mAh ใช้งานได้ถึง 2 วันสบายๆ',
      charging: '25W Fast Charging',
      os: 'Android 14 One UI 6.1 (การันตีอัปเดต OS 6 ครั้ง + ความปลอดภัย 6 ปี)',
      weight: '200 กรัม ดีไซน์บางลงเหลือเพียง 7.9 มม.',
      connectivity: '5G, Wi-Fi 5, Bluetooth 5.3, กันน้ำละออง IP54'
    },
    promotions: [
      'ราคาพิเศษฉลองเปิดตัว 6,499 บาทที่ BaNANA IT (ปกติ 7,299.-)',
      'ผ่อน 0% นาน 6 เดือน เพียงเดือนละ 1,083 บาท'
    ],
    freeGifts: [
      'หัวชาร์จ 25W',
      'เคสใสกันกระแทก',
      'ฟิล์มกระจก 9H'
    ],
    warranty: 'ประกันศูนย์ไทย 1 ปีเต็ม',
    afterSales: 'บริการอัปเดตระบบและถ่ายโอนข้อมูลฟรีที่สาขา',
    highlightPoints: [
      'ได้หน้าจอ Super AMOLED 6.7 นิ้ว ขนาดใหญ่ คมชัด สีสันสดใส ในงบเพียง 6,000 กว่าบาท',
      'สร้างสถิติใหม่ในรุ่นประหยัด: การันตีอัปเดต Android นานถึง 6 รุ่น และแพตช์ความปลอดภัย 6 ปี',
      'รองรับคลื่น 5G พร้อมความจุแบตเตอรี่ 5,000 mAh ชาร์จไว 25W',
      'ตัวเครื่องบางลงเหลือ 7.9 มม. จับกระชับมือยิ่งขึ้น'
    ],
    limitations: [
      'รีเฟรชเรทหน้าจอ 90Hz (ไม่ใช่ 120Hz)',
      'ไม่มีระบบกันสั่น OIS ในกล้อง'
    ],
    lastUpdated: '2026-10-20'
  },
  {
    id: 'bnn-samsung-galaxy-a06',
    name: 'Samsung Galaxy A06',
    category: 'mobile',
    brand: 'Samsung',
    price: 3499,
    originalPrice: 3699,
    rating: 4.5,
    reviewCount: 160,
    inStock: true,
    stockCount: 60,
    tags: ['มือถือราคาประหยัดที่สุด', 'งบสามพันกลาง', 'ชาร์จไว 25W', 'จอใหญ่ 6.7 นิ้ว', 'กล้อง 50MP'],
    colors: [
      {
        name: 'ดำ Black',
        hex: '#1f2937',
        overlayHex: '#1f2937',
        image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=900&q=80'
      },
      {
        name: 'ฟ้าอ่อน Light Blue',
        hex: '#bae6fd',
        overlayHex: '#bae6fd',
        image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&w=900&q=80'
      },
      {
        name: 'เขียวอ่อน Light Green',
        hex: '#bbf7d0',
        overlayHex: '#bbf7d0',
        image: 'https://images.unsplash.com/photo-1565849904461-04a58ad377e0?auto=format&fit=crop&w=900&q=80'
      }
    ],
    defaultImage: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=900&q=80',
    specs: {
      screen: '6.7 นิ้ว PLS LCD ความละเอียด HD+ (1600x720), 60Hz จอใหญ่เต็มตา',
      processor: 'MediaTek Helio G85 Octa-core 2.0GHz',
      ram: '4GB',
      storage: '64GB / 128GB (รองรับใส่ MicroSD Card สูงสุด 1TB)',
      rearCamera: '50MP (f/1.8) + 2MP Depth เซนเซอร์วัดระยะหน้าชัดหลังเบลอ',
      frontCamera: '8MP (f/2.0)',
      battery: '5,000 mAh แบตเตอรี่อึด ใช้งานได้ทั้งวัน',
      charging: '25W Fast Charging (อัปเกรดชาร์จไวกว่ารุ่นเดิมอย่างเห็นได้ชัด)',
      os: 'Android 14 พร้อม One UI (การันตีอัปเดต OS 2 ปี + ความปลอดภัย 4 ปี)',
      weight: '189 กรัม ฝาหลังลวดลายกันรอยนิ้วมือ',
      connectivity: '4G LTE, Wi-Fi 5, Bluetooth 5.3, ช่องเสียบหูฟัง 3.5 มม., เซนเซอร์สแกนลายนิ้วมือด้านข้าง'
    },
    promotions: [
      'ราคาโปรพิเศษ 3,499 บาทที่ BaNANA IT (ลดจาก 3,699.-)',
      'ผ่อน 0% นาน 3-6 เดือน บัตรเครดิตที่ร่วมรายการ'
    ],
    freeGifts: [
      'เคสใสกันกระแทก',
      'ฟิล์มกันรอย',
      'สายชาร์จ USB Type-C'
    ],
    warranty: 'ประกันศูนย์ไทย 1 ปีเต็ม',
    afterSales: 'บริการแนะนำการใช้งานเบื้องต้นฟรีที่หน้าร้าน BaNANA IT',
    highlightPoints: [
      'สมาร์ทโฟน Samsung ราคาประหยัดที่สุด เริ่มต้นเพียง 3,499 บาท',
      'ได้กล้องหลักความละเอียดสูงถึง 50MP ถ่ายภาพสวยคมชัดเกินราคา',
      'อัปเกรดระบบชาร์จเร็วเป็น 25W Fast Charging แล้ว ชาร์จไวกว่ารุ่นก่อนมาก',
      'มีเซนเซอร์สแกนลายนิ้วมือด้านข้าง สะดวกและปลอดภัย'
    ],
    limitations: [
      'รองรับเครือข่าย 4G LTE (ไม่รองรับ 5G)',
      'หน้าจอความละเอียด HD+ แบบ 60Hz'
    ],
    lastUpdated: '2026-10-20'
  },

  // ==========================================
  // BRAND 3: OPPO (Find X8 Series, Reno12, A-Series จาก BaNANA IT)
  // ==========================================
  {
    id: 'bnn-oppo-find-x8-pro-5g',
    name: 'OPPO Find X8 Pro 5G',
    category: 'mobile',
    brand: 'OPPO',
    price: 36999,
    originalPrice: 39999,
    rating: 4.9,
    reviewCount: 210,
    inStock: true,
    stockCount: 16,
    tags: ['เรือธงกล้องคู่ Periscope Hasselblad', 'ชิป Dimensity 9400 3nm', 'ปุ่มชัตเตอร์ Quick Button', 'แบตเตอรี่ Glacier 5910 mAh', 'กันน้ำ IP68 & IP69'],
    colors: [
      {
        name: 'ขาวเพิร์ล Space Pearl',
        hex: '#f1f5f9',
        overlayHex: '#f1f5f9',
        image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=900&q=80',
        images: [
          'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=900&q=80',
          'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=900&q=80'
        ]
      },
      {
        name: 'ดำสเปซ Space Black',
        hex: '#0f172a',
        overlayHex: '#0f172a',
        image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=900&q=80'
      }
    ],
    defaultImage: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=900&q=80',
    specs: {
      screen: '6.78 นิ้ว 1.5K 120Hz Infinite View Quad-Curved AMOLED, ความสว่าง 4,500 nits, กระจก Gorilla Glass Victus 2, รองรับ Splash Touch',
      processor: 'MediaTek Dimensity 9400 (3nm) สถาปัตยกรรม All-Big-Core เร็วแรงและประหยัดพลังงานสูง',
      ram: '16GB LPDDR5X (+ ขยาย RAM เสมือนได้ 12GB รวม 28GB)',
      storage: '512GB UFS 4.0 ความเร็วสูงพิเศษ',
      rearCamera: 'ระบบกล้อง Hasselblad Master 4 เลนส์ 50MP: 50MP Sony LYT-808 (f/1.6, OIS) + 50MP Ultra-wide 120° + กล้องคู่ Periscope 50MP Sony LYT-600 (3x 73mm, OIS) + 50MP Sony IMX858 (6x 135mm, OIS)',
      frontCamera: '32MP Sony IMX615 (f/2.4) รองรับวิดีโอ 4K 60fps',
      battery: '5,910 mAh แบตเตอรี่ซิลิคอนคาร์บอน Glacier Battery ใช้งานได้ยาวนาน 2 วัน',
      charging: '80W SUPERVOOC Flash Charge + 50W AIRVOOC ไร้สาย และชาร์จย้อนกลับ 10W',
      os: 'ColorOS 15 บน Android 15 พร้อม OPPO AI และผู้ช่วย Google Gemini',
      weight: '215 กรัม ตัวเครื่องบาง 8.24 มม. พร้อมปุ่มสัมผัส Quick Button สั่งเปิดกล้องและซูมได้อย่างฉับไว',
      connectivity: '5G Dual SIM, Wi-Fi 7, Bluetooth 5.4, NFC, IR Blaster, ลำโพงสเตอริโอคู่, ผ่านมาตรฐานกันน้ำกันฝุ่น IP68 และ IP69 (ทนน้ำแรงดันสูง)'
    },
    promotions: [
      'ราคาโปรพิเศษช่วงเปิดตัว 36,999 บาท (ลดจาก 39,999.-)',
      'ผ่อน 0% นานสูงสุด 24 เดือน (เพียงเดือนละ 1,542 บาท)',
      'รับสิทธิ์ประกันจอแตก OPPO Care นาน 1 ปีเต็ม มูลค่า 4,000 บาท'
    ],
    freeGifts: [
      'ชุดของขวัญ Find X8 VIP Gift Box',
      'ขาตั้งกล้องและไม้เซลฟี่ OPPO Mag Wireless',
      'เคสพรีเมียมตรงรุ่นและฟิล์มกันรอยระดับพรีเมียม'
    ],
    warranty: 'ประกันศูนย์ไทย 1 ปีเต็ม พร้อมบริการระดับสากล OPPO International Warranty Service',
    afterSales: 'บริการทำความสะอาดเครื่อง อัปเกรดซอฟต์แวร์ และติดฟิล์มฟรีที่ศูนย์บริการ OPPO ทั่วประเทศ',
    highlightPoints: [
      'กล้องคู่ Periscope Telephoto (3x และ 6x) ร่วมพัฒนากับ Hasselblad ซูมคมชัดทุกระยะทั้งภาพบุคคลและระยะไกล',
      'ปุ่ม Quick Button แบบสัมผัสคาปาซิทีฟ แตะสองครั้งเปิดกล้องทันที และสไลด์นิ้วเพื่อซูมได้ในพริบตา',
      'ชิป Dimensity 9400 สถาปัตยกรรม 3 นาโนเมตร ประสิทธิภาพระดับท็อปของโลก',
      'แบตเตอรี่ Glacier Silicon-Carbon 5,910 mAh ตัวเครื่องบางเพียง 8.24 มม. พร้อมกันน้ำมาตรฐาน IP68 และ IP69'
    ],
    limitations: [
      'ไม่มีช่องเสียบหูฟัง 3.5 มม.',
      'ไม่รองรับการใส่การ์ด MicroSD เพิ่มเติม'
    ],
    lastUpdated: '2026-10-20'
  },
  {
    id: 'bnn-oppo-find-x8-5g',
    name: 'OPPO Find X8 5G',
    category: 'mobile',
    brand: 'OPPO',
    price: 27999,
    originalPrice: 29999,
    rating: 4.9,
    reviewCount: 190,
    inStock: true,
    stockCount: 20,
    tags: ['เรือธงขอบจอบางสมมาตร 1.45 มม.', 'ชิป Dimensity 9400 3nm', 'กล้อง Hasselblad 50MP Periscope', 'แบตเตอรี่ 5630 mAh', 'บาง 7.85 มม.'],
    colors: [
      {
        name: 'เทาสตาร์ลี่ Starry Grey',
        hex: '#64748b',
        overlayHex: '#64748b',
        image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=900&q=80'
      },
      {
        name: 'ดำสเปซ Space Black',
        hex: '#0f172a',
        overlayHex: '#0f172a',
        image: 'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?auto=format&fit=crop&w=900&q=80'
      },
      {
        name: 'ชมพูเชลล์ Shell Pink',
        hex: '#f472b6',
        overlayHex: '#f472b6',
        image: 'https://images.unsplash.com/photo-1589739900243-4b52cd9b104e?auto=format&fit=crop&w=900&q=80'
      }
    ],
    defaultImage: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=900&q=80',
    specs: {
      screen: '6.59 นิ้ว 1.5K 120Hz Flat AMOLED, ขอบจอบางสมมาตร 1.45 มม. สี่ด้าน, ความสว่าง 4,500 nits, กระจก Gorilla Glass 7i',
      processor: 'MediaTek Dimensity 9400 (3nm) สถาปัตยกรรม All-Big-Core ประสิทธิภาพสูงสุด',
      ram: '16GB LPDDR5X',
      storage: '512GB UFS 4.0',
      rearCamera: 'กล้อง Hasselblad 3 เลนส์ 50MP: 50MP Sony LYT-700 (f/1.8, OIS) + 50MP Ultra-wide 120° + 50MP Periscope Telephoto 3x (73mm, OIS)',
      frontCamera: '32MP Sony IMX615 (f/2.4) ถ่ายวิดีโอ 4K 60fps',
      battery: '5,630 mAh Glacier Battery ซิลิคอนคาร์บอนความหนาแน่นสูง',
      charging: '80W SUPERVOOC Flash Charge + 50W AIRVOOC ไร้สาย',
      os: 'ColorOS 15 บน Android 15 พร้อม OPPO AI',
      weight: '193 กรัม ตัวเครื่องกะทัดรัดบางเพียง 7.85 มม.',
      connectivity: '5G Dual SIM, Wi-Fi 7, Bluetooth 5.4, NFC, IR Blaster, ลำโพงสเตอริโอคู่, กันน้ำกันฝุ่นระดับ IP68 & IP69'
    },
    promotions: [
      'ราคาโปรโมชั่นเปิดตัว 27,999 บาท (ลดจาก 29,999.-)',
      'ผ่อน 0% นานสูงสุด 18 เดือน เริ่มต้นเดือนละ 1,555 บาท',
      'ฟรี ประกันจอแตก OPPO Care 1 ปี'
    ],
    freeGifts: [
      'หัวชาร์จแท้ 80W SUPERVOOC',
      'เคสพรีเมียมตรงรุ่น',
      'ฟิล์มกระจก 9H'
    ],
    warranty: 'ประกันศูนย์ไทย 1 ปีเต็ม',
    afterSales: 'บริการอัปเกรดระบบและติดฟิล์มฟรีที่ศูนย์บริการ OPPO ทั่วประเทศ',
    highlightPoints: [
      'ดีไซน์จอแบนพรีเมียม ขอบจอบางสมมาตรเท่ากันทั้งสี่ด้านเพียง 1.45 มม. สวยงามที่สุดในยุค',
      'ตัวเครื่องบางเพียง 7.85 มม. น้ำหนักเบา 193 กรัม แต่บรรจุแบตเตอรี่ได้มากถึง 5,630 mAh',
      'กล้อง 50MP Periscope Telephoto 3x ถ่ายภาพบุคคลได้มิติระดับมืออาชีพร่วมกับ Hasselblad',
      'ชิป Dimensity 9400 ระดับเรือธง 3 นาโนเมตร พร้อมกันน้ำมาตรฐาน IP68 และ IP69'
    ],
    limitations: [
      'ไม่มีเลนส์ซูม Periscope ระยะ 6x (มีในรุ่น Pro)',
      'ไม่มีช่องเสียบหูฟัง 3.5 มม.'
    ],
    lastUpdated: '2026-10-20'
  },
  {
    id: 'bnn-oppo-reno-12-pro-5g',
    name: 'OPPO Reno12 Pro 5G',
    category: 'mobile',
    brand: 'OPPO',
    price: 19990,
    originalPrice: 20990,
    rating: 4.9,
    reviewCount: 430,
    inStock: true,
    stockCount: 22,
    tags: ['OPPO AI Phone', 'ยางลบ AI Eraser 2.0', 'กล้องพอร์ตเทรต 50MP', 'ชาร์จไว 80W', 'จอขอบโค้ง 4 ด้าน'],
    colors: [
      {
        name: 'เงิน Nebula Silver',
        hex: '#e2e8f0',
        overlayHex: '#e2e8f0',
        image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=900&q=80',
        images: [
          'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=900&q=80',
          'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=900&q=80'
        ]
      },
      {
        name: 'น้ำตาล Space Brown',
        hex: '#4b382a',
        overlayHex: '#4b382a',
        image: 'https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&w=900&q=80'
      }
    ],
    defaultImage: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=900&q=80',
    specs: {
      screen: '6.7 นิ้ว Quad-Curved AMOLED FHD+, 120Hz, 1.07 พันล้านสี, กระจก Corning Gorilla Glass Victus 2 ทนทานพิเศษ',
      processor: 'MediaTek Dimensity 7300-Energy (4nm) พัฒนาร่วมกันเพื่อการประหยัดพลังงานระดับสูง',
      ram: '12GB LPDDR4X (+ ขยาย RAM เสมือนได้สูงสุด 12GB รวม 24GB)',
      storage: '512GB UFS 3.1 ความจุขนาดใหญ่พิเศษ (รองรับ MicroSD สูงสุด 1TB)',
      rearCamera: '50MP Sony LYT-600 (f/1.8, OIS) + 50MP Telephoto Portrait 2x (ซูม 5x In-sensor OIS) + 8MP Ultra-wide 112°',
      frontCamera: '50MP Ultra-Clear Selfie (f/2.0) พร้อม Autofocus รองรับถ่ายวิดีโอ 4K 60fps',
      battery: '5,000 mAh แบตเตอรี่ทนทานใช้งานได้ 4 ปี (สุขภาพแบตเตอรี่คงเหลือ >80%)',
      charging: '80W SUPERVOOC Flash Charge (ชาร์จ 1-100% ภายใน 46 นาที)',
      os: 'ColorOS 14.1 บนพื้นฐาน Android 14 พร้อมฟีเจอร์ GenAI เต็มรูปแบบ',
      weight: '180 กรัม บางเพียง 7.40 มม. ดีไซน์บางเบาพรีเมียม',
      connectivity: '5G Dual SIM, Wi-Fi 6, Bluetooth 5.4, NFC, AI LinkBoost เพิ่มพลังสัญญาณ, กันน้ำกันฝุ่น IP65 พร้อม Splash Touch'
    },
    promotions: [
      'ราคาโปรพิเศษ 19,990 บาทที่ BaNANA IT (ลดจาก 20,990.-)',
      'ผ่อน 0% นานสูงสุด 24 เดือน (เพียงเดือนละ 833 บาท)',
      'แถมฟรี OPPO VIP Card ประกันหน้าจอแตก 1 ปีเต็ม มูลค่า 4,000 บาท'
    ],
    freeGifts: [
      'หัวชาร์จแท้ 80W SUPERVOOC Adapter ในกล่อง',
      'เคสพรีเมียมกันกระแทกตรงรุ่น',
      'ลำโพงบลูทูธพกพา Sound Bar มูลค่า 1,290 บาท'
    ],
    warranty: 'ประกันศูนย์ไทย OPPO 1 ปีเต็ม พร้อมประกันจอแตก 1 ปีแรก',
    afterSales: 'บริการส่งซ่อมด่วน 1 ชั่วโมงที่ศูนย์บริการ OPPO ทั่วประเทศ, บริการติดฟิล์มและทำความสะอาดฟรีตลอดอายุการใช้งาน',
    highlightPoints: [
      'ฟีเจอร์ AI ถ่ายภาพอัจฉริยะ: AI Eraser 2.0 ลบคนและวัตถุที่ไม่ต้องการได้เนียนตา, AI Smart Image Matting ไดคัทภาพในคลิกเดียว',
      'กล้องหน้าและกล้องหลังความละเอียด 50MP ทั้งคู่ ได้ภาพพอร์ตเทรตสวยเนียนเป็นธรรมชาติดั่งกล้องโปร',
      'ตัวเครื่องบางเบา 7.4 มม. น้ำหนัก 180 กรัม ใช้กระจก Gorilla Glass Victus 2 แข็งแกร่งที่สุดในตระกูล Reno',
      'หน่วยความจำ 512GB ใหญ่จุใจ เก็บภาพและวิดีโอ 4K ได้อย่างไม่จำกัด'
    ],
    limitations: [
      'มาตรฐานกันน้ำระดับ IP65 (ไม่สามารถจุ่มน้ำลึกได้เหมือน IP68)',
      'ไม่มีช่องเสียบหูฟัง 3.5 มม.'
    ],
    lastUpdated: '2026-10-20'
  },
  {
    id: 'bnn-oppo-reno-12-5g',
    name: 'OPPO Reno12 5G',
    category: 'mobile',
    brand: 'OPPO',
    price: 14990,
    originalPrice: 14990,
    rating: 4.8,
    reviewCount: 380,
    inStock: true,
    stockCount: 30,
    tags: ['OPPO AI Phone', 'ดีไซน์กระจกเงินพริ้วไหว', 'กล้องพอร์ตเทรตสวย', 'ชาร์จเร็ว 80W', 'คุ้มค่ามาก'],
    colors: [
      {
        name: 'เงิน Astro Silver',
        hex: '#cbd5e1',
        overlayHex: '#cbd5e1',
        image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=900&q=80'
      },
      {
        name: 'ชมพู Sunset Pink',
        hex: '#fbcfe8',
        overlayHex: '#fbcfe8',
        image: 'https://images.unsplash.com/photo-1589739900243-4b52cd9b104e?auto=format&fit=crop&w=900&q=80'
      },
      {
        name: 'น้ำตาลด้าน Matte Brown',
        hex: '#3e2723',
        overlayHex: '#3e2723',
        image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=900&q=80'
      }
    ],
    defaultImage: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=900&q=80',
    specs: {
      screen: '6.7 นิ้ว 3D Curved AMOLED FHD+, 120Hz, 1,200 nits, กระจก Corning Gorilla Glass 7i',
      processor: 'MediaTek Dimensity 7300-Energy (4nm)',
      ram: '12GB (+ ขยาย RAM ได้ 12GB)',
      storage: '256GB / 512GB (รองรับ MicroSD สูงสุด 1TB)',
      rearCamera: '50MP Sony LYT-600 (f/1.8, OIS) + 8MP Ultra-wide 112° + 2MP Macro',
      frontCamera: '32MP (f/2.0) พร้อม Autofocus รองรับ 4K 30fps',
      battery: '5,000 mAh แบตเตอรี่อายุการใช้งาน 4 ปี',
      charging: '80W SUPERVOOC Flash Charge (ชาร์จ 100% ใน 46 นาที)',
      os: 'ColorOS 14.1 บน Android 14 พร้อม AI Eraser 2.0, AI Clear Face',
      weight: '177 กรัม บางเพียง 7.60 มม.',
      connectivity: '5G, Wi-Fi 6, Bluetooth 5.4, NFC, AI LinkBoost, กันน้ำละออง IP65 พร้อม Splash Touch สัมผัสได้แม้มือเปียก'
    },
    promotions: [
      'ราคาโปรพิเศษ 14,990 บาทที่ BaNANA IT',
      'ผ่อน 0% นาน 18 เดือน เริ่มต้นเดือนละ 833 บาท',
      'ฟรี OPPO E-VIP Card ประกันหน้าจอแตก 1 ปี'
    ],
    freeGifts: [
      'หัวชาร์จเร็ว 80W SUPERVOOC แท้',
      'เคสใสกันกระแทก',
      'ฟิล์มกันรอยหน้าจอโค้ง 3D ติดตั้งฟรี'
    ],
    warranty: 'ประกันศูนย์ไทย 1 ปีเต็ม',
    afterSales: 'บริการอัปเดตระบบและทำความสะอาดฟรีที่ศูนย์บริการ OPPO ทั่วประเทศ',
    highlightPoints: [
      'ดีไซน์ฝาหลังลายคลื่นของเหลว Futurism ไหลลื่นสะท้อนแสง สวยเด่นไม่เหมือนใคร',
      'ฟีเจอร์ AI ยางลบอัจฉริยะ AI Eraser 2.0 ใช้งานง่าย ลบคนออกจากภาพท่องเที่ยวได้เนียนกริบ',
      'ชาร์จไวระดับแฟลกชิป 80W SUPERVOOC แบตเต็มเร็วทันใจ',
      'หน้าจอโค้ง 3D AMOLED 120Hz ให้มุมมองกว้างและสวยงามไร้ขอบ'
    ],
    limitations: [
      'ไม่มีเลนส์ Telephoto ซูมออปติคอล (รุ่น Pro มีเลนส์เทเล 50MP)',
      'กล้องหน้าความละเอียด 32MP (รุ่น Pro เป็น 50MP)'
    ],
    lastUpdated: '2026-10-20'
  },
  {
    id: 'bnn-oppo-reno-12-f-5g',
    name: 'OPPO Reno12 F 5G',
    category: 'mobile',
    brand: 'OPPO',
    price: 10999,
    originalPrice: 11999,
    rating: 4.8,
    reviewCount: 310,
    inStock: true,
    stockCount: 35,
    tags: ['ไฟวงแหวน Halo Light', 'ดีไซน์ Cosmo Ring', 'OPPO AI Phone', 'จอแบน 120Hz สว่าง 2100 nits', 'ยอดนิยม'],
    colors: [
      {
        name: 'ส้ม Amber Orange',
        hex: '#fb923c',
        overlayHex: '#fb923c',
        image: 'https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&w=900&q=80'
      },
      {
        name: 'เขียวโอลีฟ Olive Green',
        hex: '#4d5b44',
        overlayHex: '#4d5b44',
        image: 'https://images.unsplash.com/photo-1565849904461-04a58ad377e0?auto=format&fit=crop&w=900&q=80'
      }
    ],
    defaultImage: 'https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&w=900&q=80',
    specs: {
      screen: '6.67 นิ้ว Smart Flat AMOLED FHD+, 120Hz, ความสว่างสูงสุด 2,100 nits สู้แดดได้ดีเยี่ยม',
      processor: 'MediaTek Dimensity 6300 (6nm) 5G Octa-core',
      ram: '8GB / 12GB (+ ขยาย RAM สูงสุด 12GB)',
      storage: '256GB (รองรับใส่ MicroSD สูงสุด 2TB)',
      rearCamera: '50MP Main (f/1.8) + 8MP Ultra-wide 112° + 2MP Macro พร้อมไฟวงแหวน Halo Light หลายสีสัน',
      frontCamera: '32MP (f/2.4) มุมมองกว้างสำหรับเซลฟี่กลุ่ม',
      battery: '5,000 mAh แบตเตอรี่ทนทาน 4 ปี',
      charging: '45W SUPERVOOC Flash Charge',
      os: 'ColorOS 14.0.1 พร้อมฟังก์ชัน AI Eraser, AI Studio แปลงรูปการ์ตูน',
      weight: '187 กรัม บาง 7.76 มม. ดีไซน์ All-Round Armour แข็งแกร่ง',
      connectivity: '5G, Wi-Fi 5, Bluetooth 5.3, ลำโพงคู่ Dual Stereo Speakers Ultra Volume 300%, กันน้ำละออง IP64'
    },
    promotions: [
      'ลดพิเศษเหลือเพียง 10,999 บาทที่ BaNANA IT (ปกติ 11,999.-)',
      'ผ่อน 0% นาน 10 เดือน เดือนละ 1,100 บาท',
      'ฟรีเคส Halo Ring Light Edition'
    ],
    freeGifts: [
      'หัวชาร์จ 45W SUPERVOOC',
      'เคสใสกันกระแทก',
      'ฟิล์มกระจก 9H'
    ],
    warranty: 'ประกันศูนย์ไทย 1 ปีเต็ม',
    afterSales: 'บริการอัปเดตระบบและทำความสะอาดเครื่องฟรีที่ BaNANA IT',
    highlightPoints: [
      'ไฟวงแหวน Halo Light รอบกล้อง กะพริบตามจังหวะเพลง แจ้งเตือนสายเรียกเข้า และสถานะชาร์จไฟ สวยงามล้ำสมัย',
      'หน้าจอแบน Flat AMOLED 120Hz สว่างสูงถึง 2,100 nits มองเห็นชัดเจนแม้อยู่กลางแดดจัด',
      'มีฟีเจอร์ AI Eraser สำหรับลบคน ลบวัตถุในงบหมื่นต้น',
      'โครงสร้างตัวเครื่อง All-Round Armour ทนทานต่อการตกกระแทกและการกดทับ'
    ],
    limitations: [
      'กล้องหลักไม่มีระบบกันสั่น OIS',
      'ชาร์จไว 45W (รุ่นพี่ Reno12 ชาร์จ 80W)'
    ],
    lastUpdated: '2026-10-20'
  },
  {
    id: 'bnn-oppo-reno-12-f-4g',
    name: 'OPPO Reno12 F 4G',
    category: 'mobile',
    brand: 'OPPO',
    price: 7999,
    originalPrice: 8999,
    rating: 4.7,
    reviewCount: 220,
    inStock: true,
    stockCount: 40,
    tags: ['ดีไซน์หรูหรา', 'ไฟ Halo Light', 'จอ AMOLED 120Hz', 'ความจุ 256GB', 'งบไม่เกินแปดพัน'],
    colors: [
      {
        name: 'ส้ม Amber Orange',
        hex: '#fb923c',
        overlayHex: '#fb923c',
        image: 'https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&w=900&q=80'
      },
      {
        name: 'เขียว Olive Green',
        hex: '#4d5b44',
        overlayHex: '#4d5b44',
        image: 'https://images.unsplash.com/photo-1565849904461-04a58ad377e0?auto=format&fit=crop&w=900&q=80'
      },
      {
        name: 'เทา Matte Grey',
        hex: '#4b5563',
        overlayHex: '#4b5563',
        image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=900&q=80'
      }
    ],
    defaultImage: 'https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&w=900&q=80',
    specs: {
      screen: '6.67 นิ้ว Flat AMOLED FHD+, 120Hz, 2,100 nits, กระจก AGC DT-Star2',
      processor: 'Qualcomm Snapdragon 685 (6nm) Octa-core',
      ram: '8GB (+ ขยาย RAM ได้ 8GB)',
      storage: '256GB (รองรับ MicroSD สูงสุด 2TB)',
      rearCamera: '50MP (f/1.8) + 2MP Macro + 2MP Monochrome พร้อมไฟ Halo Light',
      frontCamera: '32MP (f/2.4) เซลฟี่คมชัด',
      battery: '5,000 mAh',
      charging: '45W SUPERVOOC Flash Charge',
      os: 'ColorOS 14 พร้อม AI Eraser และ AI Smart Image Matting',
      weight: '187 กรัม',
      connectivity: '4G LTE, Wi-Fi 5, Bluetooth 5.0, ลำโพงสเตอริโอคู่ Ultra Volume 300%, IP64'
    },
    promotions: [
      'ราคาโปรพิเศษ 7,999 บาทที่ BaNANA IT (ลดจาก 8,999.-)',
      'ผ่อน 0% นาน 6-10 เดือน เริ่มต้นเดือนละ 799 บาท'
    ],
    freeGifts: [
      'หัวชาร์จ 45W SUPERVOOC',
      'เคสใสกันกระแทก',
      'ฟิล์มกันรอยติดตั้งจากโรงงาน'
    ],
    warranty: 'ประกันศูนย์ไทย 1 ปีเต็ม',
    afterSales: 'บริการดูแลทำความสะอาดและตรวจเช็กฟรีที่ศูนย์บริการ OPPO',
    highlightPoints: [
      'หน้าจอ AMOLED 120Hz สว่าง 2,100 nits ในงบไม่เกินแปดพันบาท สีสันสวย คมชัด สู้แดดจ้าได้เยี่ยม',
      'ความจุเยอะถึง 256GB เก็บข้อมูลและรูปรวมถึงลงแอปได้มากมาย',
      'ไฟวงแหวน Halo Light สวยหรูหรา สร้างเอกลักษณ์เฉพาะตัว',
      'ลำโพงคู่สเตอริโอเร่งเสียงได้ถึง 300% เสียงกระหึ่มชัดเจน'
    ],
    limitations: [
      'ไม่รองรับ 5G (เป็นรุ่น 4G LTE)',
      'ไม่มีเลนส์ Ultra-wide'
    ],
    lastUpdated: '2026-10-20'
  },
  {
    id: 'bnn-oppo-a3-pro-5g',
    name: 'OPPO A3 Pro 5G',
    category: 'mobile',
    brand: 'OPPO',
    price: 9999,
    originalPrice: 9999,
    rating: 4.8,
    reviewCount: 350,
    inStock: true,
    stockCount: 30,
    tags: ['ทนกระแทกระดับทหาร', 'ทนทานรอบด้าน 360°', 'Splash Touch สัมผัสตอนมือเปียก', 'แบต 5100mAh', 'ชาร์จ 45W'],
    colors: [
      {
        name: 'ดำ Starry Black',
        hex: '#18181b',
        overlayHex: '#18181b',
        image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=900&q=80'
      },
      {
        name: 'ม่วง Moonlight Purple',
        hex: '#c084fc',
        overlayHex: '#c084fc',
        image: 'https://images.unsplash.com/photo-1589739900243-4b52cd9b104e?auto=format&fit=crop&w=900&q=80'
      }
    ],
    defaultImage: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=900&q=80',
    specs: {
      screen: '6.67 นิ้ว Ultra Bright Display, 120Hz, 1,000 nits สู้แดด, กระจก Panda 1681 ทนแรงกระแทกสองชั้น',
      processor: 'MediaTek Dimensity 6300 (6nm) 5G Octa-core',
      ram: '6GB / 8GB (+ ขยาย RAM ได้สูงสุด 8GB)',
      storage: '256GB (รองรับใส่ MicroSD สูงสุด 2TB)',
      rearCamera: '50MP AI Camera (f/1.8) + 2MP Portrait เลนส์เบลอฉากหลัง',
      frontCamera: '8MP (f/2.0) เซลฟี่เป็นธรรมชาติ',
      battery: '5,100 mAh แบตเตอรี่อึดใช้งานได้ข้ามวัน',
      charging: '45W SUPERVOOC Flash Charge (ชาร์จ 50% ในเวลา 30 นาที)',
      os: 'ColorOS 14.0.1 พร้อมฟังก์ชัน AI Eraser ลบคนด้วย AI',
      weight: '186 กรัม บางเพียง 7.68 มม.',
      connectivity: '5G, Wi-Fi 5, Bluetooth 5.3, Splash Touch, ผ่านการทดสอบระดับกองทัพ MIL-STD-810H และกันน้ำละออง IP54'
    },
    promotions: [
      'ราคาพิเศษ 9,999 บาท ที่ BaNANA IT',
      'ผ่อน 0% นาน 10 เดือน เริ่มต้นเพียงเดือนละ 999 บาท',
      'ประกันเปลี่ยนเครื่องใหม่ 30 วัน'
    ],
    freeGifts: [
      'หัวชาร์จแท้ 45W SUPERVOOC',
      'เคสกันกระแทกพิเศษ',
      'ฟิล์มกระจก 9H'
    ],
    warranty: 'ประกันศูนย์ไทย 1 ปีเต็ม พร้อมรับประกันความทนทานโครงสร้าง',
    afterSales: 'บริการตรวจเช็กสภาพเครื่องและทำความสะอาดฟรีที่ศูนย์บริการ OPPO',
    highlightPoints: [
      'ผ่านการรับรองมาตรฐานความทนทานระดับกองทัพสหรัฐฯ MIL-STD-810H ตกไม่แตก ทนทานสูงมาก',
      'ระบบ Splash Touch หน้าจอยังคงสั่งการและสัมผัสได้แม่นยำแม้หน้าจอหรือนิ้วมือจะเปียกน้ำ',
      'แบตเตอรี่ใหญ่ขึ้นเป็น 5,100 mAh พร้อมชาร์จเร็ว 45W ใช้งานได้ต่อเนื่องยาวนาน',
      'มีฟีเจอร์ AI Eraser ให้ใช้งานแม้จะเป็นรุ่นราคาไม่เกินหมื่น'
    ],
    limitations: [
      'หน้าจอแบบ LCD (ไม่ใช่ AMOLED)',
      'ไม่มีเลนส์ Ultra-wide'
    ],
    lastUpdated: '2026-10-20'
  },
  {
    id: 'bnn-oppo-a3-5g',
    name: 'OPPO A3 5G',
    category: 'mobile',
    brand: 'OPPO',
    price: 6999,
    originalPrice: 6999,
    rating: 4.7,
    reviewCount: 190,
    inStock: true,
    stockCount: 45,
    tags: ['มือถือ 5G สุดแกร่ง', 'ทนทานระดับทหาร', 'จอ 120Hz', 'ชาร์จเร็ว 45W', 'งบไม่เกินเจ็ดพัน'],
    colors: [
      {
        name: 'ดำ Sparkle Black',
        hex: '#18181b',
        overlayHex: '#18181b',
        image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=900&q=80'
      },
      {
        name: 'แดงประกายดาว Starry Red',
        hex: '#991b1b',
        overlayHex: '#991b1b',
        image: 'https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&w=900&q=80'
      },
      {
        name: 'ฟ้าโอเชียน Ocean Blue',
        hex: '#93c5fd',
        overlayHex: '#93c5fd',
        image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&w=900&q=80'
      }
    ],
    defaultImage: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=900&q=80',
    specs: {
      screen: '6.67 นิ้ว 120Hz Ultra Bright LCD, ความสว่าง 1,000 nits, กระจก Double-Tempered Glass',
      processor: 'MediaTek Dimensity 6300 (6nm) 5G',
      ram: '6GB (+ ขยาย RAM ได้ 6GB)',
      storage: '128GB (รองรับใส่ MicroSD ได้สูงสุด 1TB)',
      rearCamera: '50MP AI Camera (f/1.8) ถ่ายภาพคมชัด',
      frontCamera: '5MP (f/2.2)',
      battery: '5,100 mAh แบตใหญ่ใช้งานข้ามวัน',
      charging: '45W SUPERVOOC Flash Charge',
      os: 'ColorOS 14 บนพื้นฐาน Android 14',
      weight: '186 กรัม บาง 7.68 มม. โครงสร้าง All-Round Armour',
      connectivity: '5G, Wi-Fi 5, Bluetooth 5.3, ลำโพงเร่งเสียง Ultra Volume Mode 300%, Splash Touch, IP54'
    },
    promotions: [
      'ราคาคุ้มค่า 6,999 บาทที่ BaNANA IT',
      'ผ่อน 0% นาน 6 เดือน เพียงเดือนละ 1,166 บาท'
    ],
    freeGifts: [
      'หัวชาร์จ 45W SUPERVOOC',
      'เคสใส',
      'ฟิล์มกันรอย'
    ],
    warranty: 'ประกันศูนย์ไทย 1 ปีเต็ม',
    afterSales: 'บริการตรวจเช็กและอัปเดตระบบฟรีที่สาขา BaNANA',
    highlightPoints: [
      'สมาร์ทโฟน 5G ทนทานระดับเกรดทหาร MIL-STD-810H ในงบไม่เกิน 7,000 บาท',
      'หน้าจอลื่นไหล 120Hz สว่างสู้แดด 1,000 nits และรองรับสัมผัสนิ้วเปียกน้ำ Splash Touch',
      'ระบบชาร์จเร็ว 45W ชาร์จไวกว่ามาตรฐานสมาร์ทโฟนราคานี้อย่างชัดเจน',
      'ลำโพงคู่ปรับระดับเสียงได้ดังสูงสุด 300%'
    ],
    limitations: [
      'กล้องหน้าความละเอียด 5MP',
      'หน้าจอความละเอียด HD+'
    ],
    lastUpdated: '2026-10-20'
  },
  {
    id: 'bnn-oppo-a60',
    name: 'OPPO A60',
    category: 'mobile',
    brand: 'OPPO',
    price: 5999,
    originalPrice: 6499,
    rating: 4.7,
    reviewCount: 280,
    inStock: true,
    stockCount: 50,
    tags: ['ทนกระแทกระดับทหาร', 'ลำโพงคู่ดัง 300%', 'ดีไซน์บางเบา 7.68 มม.', 'ชาร์จไว 45W', 'ขายดีมาก'],
    colors: [
      {
        name: 'ฟ้า Ripple Blue',
        hex: '#7dd3fc',
        overlayHex: '#7dd3fc',
        image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&w=900&q=80'
      },
      {
        name: 'ม่วง Midnight Purple',
        hex: '#312e81',
        overlayHex: '#312e81',
        image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=900&q=80'
      }
    ],
    defaultImage: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&w=900&q=80',
    specs: {
      screen: '6.67 นิ้ว 90Hz Ultra Bright Display, 950 nits สู้แดดกลางแจ้งได้ยอดเยี่ยม',
      processor: 'Qualcomm Snapdragon 680 (6nm) ประหยัดแบตเตอรี่',
      ram: '8GB (+ ขยาย RAM สูงสุด 8GB รวม 16GB)',
      storage: '128GB / 256GB (รองรับ MicroSD สูงสุด 1TB)',
      rearCamera: '50MP Ultra-Clear (f/1.8) + 2MP Portrait Camera',
      frontCamera: '8MP (f/2.0) เซลฟี่สวยใส',
      battery: '5,000 mAh แบตเตอรี่ทนทาน 4 ปี',
      charging: '45W SUPERVOOC Flash Charge (ชาร์จ 50% ใน 30 นาที)',
      os: 'ColorOS 14 บน Android 14',
      weight: '186 กรัม บางเฉียบเพียง 7.68 มม.',
      connectivity: '4G LTE, Wi-Fi 5, Bluetooth 5.0, ลำโพงสเตอริโอคู่ Ultra Volume 300%, Splash Touch, ทนกระแทก MIL-STD-810H'
    },
    promotions: [
      'ราคาโปรพิเศษ 5,999 บาทที่ BaNANA IT (ลดจาก 6,499.-)',
      'ผ่อน 0% นาน 6 เดือน เดือนละ 999 บาท'
    ],
    freeGifts: [
      'หัวชาร์จ 45W SUPERVOOC',
      'เคสใสกันกระแทก',
      'ฟิล์มกันรอยติดตั้งเรียบร้อย'
    ],
    warranty: 'ประกันศูนย์ไทย 1 ปีเต็ม',
    afterSales: 'บริการอัปเดตซอฟต์แวร์และทำความสะอาดเครื่องฟรีที่หน้าร้าน',
    highlightPoints: [
      'ตัวเครื่องบางเพียง 7.68 มม. และผ่านการทดสอบความทนทานระดับทหาร MIL-STD-810H',
      'ลำโพงสเตอริโอคู่เสียงดังสะใจ เพิ่มเสียงได้ถึง 300% ฟังเพลงหรือดูหนังชัดเจนแม้อยู่ในที่เสียงดัง',
      'ได้ RAM 8GB แท้ และระบบชาร์จเร็ว 45W ชาร์จไฟไวทันใจ',
      'หน้าจอสว่าง 950 nits มองเห็นชัดกลางแดด พร้อมฟีเจอร์ Splash Touch'
    ],
    limitations: [
      'รองรับเครือข่าย 4G LTE (ไม่รองรับ 5G)',
      'หน้าจอความละเอียด HD+'
    ],
    lastUpdated: '2026-10-20'
  },
  {
    id: 'bnn-oppo-a3x',
    name: 'OPPO A3x',
    category: 'mobile',
    brand: 'OPPO',
    price: 3999,
    originalPrice: 3999,
    rating: 4.6,
    reviewCount: 210,
    inStock: true,
    stockCount: 60,
    tags: ['งบสามพันปลาย', 'ชาร์จไว 45W ไวที่สุดในงบนี้', 'ทนทานระดับทหาร', 'จอ 90Hz สว่าง 1000 nits', 'แบต 5100mAh'],
    colors: [
      {
        name: 'แดงเนบิวลา Nebula Red',
        hex: '#7f1d1d',
        overlayHex: '#7f1d1d',
        image: 'https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&w=900&q=80'
      },
      {
        name: 'น้ำเงินโอเชียน Ocean Blue',
        hex: '#1e3a8a',
        overlayHex: '#1e3a8a',
        image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&w=900&q=80'
      }
    ],
    defaultImage: 'https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&w=900&q=80',
    specs: {
      screen: '6.67 นิ้ว Ultra Bright Display, 90Hz, ความสว่าง 1,000 nits สู้แดดจ้าได้ชัดเจน',
      processor: 'Qualcomm Snapdragon 6s 4G Gen 1 Octa-core',
      ram: '4GB (+ ขยาย RAM เสมือนได้ 4GB)',
      storage: '64GB / 128GB (รองรับใส่ MicroSD สูงสุด 1TB)',
      rearCamera: '8MP (f/2.0) พร้อม Flicker Sensor ป้องกันการกะพริบของแสง',
      frontCamera: '5MP (f/2.2)',
      battery: '5,100 mAh แบตเตอรี่ความจุใหญ่',
      charging: '45W SUPERVOOC Flash Charge (ชาร์จไว 50% ภายใน 30 นาที ไวที่สุดในมือถือราคาไม่เกิน 4,000 บาท)',
      os: 'ColorOS 14 บน Android 14',
      weight: '186 กรัม บาง 7.68 มม.',
      connectivity: '4G LTE, Wi-Fi 5, Bluetooth 5.0, ช่องเสียบหูฟัง 3.5 มม., ลำโพง Ultra Volume 300%, Splash Touch, ทนกระแทก MIL-STD-810H'
    },
    promotions: [
      'ราคาโปรโมชั่นพิเศษ 3,999 บาทที่ BaNANA IT',
      'ผ่อน 0% นาน 3-6 เดือน บัตรเครดิตที่ร่วมรายการ'
    ],
    freeGifts: [
      'หัวชาร์จ 45W SUPERVOOC แท้ในกล่อง',
      'เคสใส',
      'ฟิล์มกันรอย'
    ],
    warranty: 'ประกันศูนย์ไทย 1 ปีเต็ม',
    afterSales: 'บริการให้คำปรึกษาและตั้งค่าเครื่องใหม่ฟรีที่สาขา BaNANA',
    highlightPoints: [
      'มือถือราคาประหยัดรุ่นเดียวในงบไม่เกิน 4,000 บาทที่ให้ระบบชาร์จเร็วสูงถึง 45W SUPERVOOC',
      'โครงสร้างแข็งแกร่ง ทนทานต่อการตกกระแทกมาตรฐานทหารสหรัฐฯ MIL-STD-810H',
      'หน้าจอสว่าง 1,000 nits ลื่นไหล 90Hz พร้อม Splash Touch นิ้วเปียกก็ทัชได้',
      'แบตเตอรี่ใหญ่ 5,100 mAh ใช้งานได้ยาวนานสองวัน'
    ],
    limitations: [
      'กล้องหลังความละเอียด 8MP',
      'ความจุเริ่มต้น 64GB'
    ],
    lastUpdated: '2026-10-20'
  },
  {
    id: 'bnn-oppo-find-n3',
    name: 'OPPO Find N3',
    category: 'mobile',
    brand: 'OPPO',
    price: 59990,
    originalPrice: 65990,
    rating: 4.9,
    reviewCount: 260,
    inStock: true,
    stockCount: 8,
    tags: ['เรือธงจอพับมาสเตอร์พีซ', 'กล้อง Hasselblad 3 เลนส์', 'รอยพับเนียนที่สุด', 'จอใหญ่ 7.82 นิ้ว', 'RAM 16GB'],
    colors: [
      {
        name: 'ดำ Classic Black (หนังวีแกน)',
        hex: '#18181b',
        overlayHex: '#18181b',
        image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=900&q=80'
      },
      {
        name: 'ทอง Champagne Gold (ผิวกระจก)',
        hex: '#d4af37',
        overlayHex: '#d4af37',
        image: 'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?auto=format&fit=crop&w=900&q=80'
      }
    ],
    defaultImage: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=900&q=80',
    specs: {
      screen: 'จอนอก 6.31 นิ้ว OLED 120Hz / จอหลักพับ 7.82 นิ้ว 2K+ Dynamic AMOLED 120Hz, ความสว่าง 2,800 nits, รอยพับเนียนเรียบที่สุด',
      processor: 'Qualcomm Snapdragon 8 Gen 2 (4nm) เรือธงทรงพลัง',
      ram: '16GB LPDDR5X (มัลติทาสก์ระดับโปร)',
      storage: '512GB UFS 4.0 ความเร็วสูง',
      rearCamera: 'กล้องร่วมพัฒนา Hasselblad: 48MP Sony LYTIA Pixel Stacked OIS + 64MP Periscope Telephoto 3x (ซูม 6x In-sensor OIS) + 48MP Ultra-wide 114°',
      frontCamera: 'กล้องจอใน 20MP + กล้องจอนอก 32MP คมชัดระดับโปร',
      battery: '4,805 mAh ใช้งานได้เต็มวัน',
      charging: '67W SUPERVOOC Flash Charge (ชาร์จ 100% ในเวลาเพียง 42 นาที)',
      os: 'ColorOS 13.2 พร้อม Boundless View ระบบแบ่ง 3 หน้าจอทำงานไร้ขอบเขต',
      weight: '239 กรัม (รุ่นหนังวีแกน) พับสนิท บางเฉียบ',
      connectivity: '5G, Wi-Fi 7, Bluetooth 5.3, Alert Slider สวิตช์ปิดเสียง, ลำโพง 3 ตัว spatial audio'
    },
    promotions: [
      'ลดราคาพิเศษ 6,000 บาทที่ BaNANA IT (เหลือเพียง 59,990.- จากเดิม 65,990.-)',
      'ผ่อน 0% นานสูงสุด 36 เดือน ผ่านบัตรที่ร่วมรายการ',
      'ฟรี OPPO Premium Care ประกันจอพับและจอหน้า 2 ปีเต็ม'
    ],
    freeGifts: [
      'หัวชาร์จแท้ 67W SUPERVOOC Adapter',
      'เคสหนังพรีเมียมแท้',
      'หูฟังไร้สาย OPPO Enco X2 มูลค่า 5,999 บาท'
    ],
    warranty: 'ประกันศูนย์ไทย 2 ปีเต็ม พร้อมสิทธิ์เปลี่ยนฟิล์มจอพับฟรีไม่จำกัดจำนวนครั้ง',
    afterSales: 'บริการ VIP Service ช่องทางด่วนพิเศษ ไม่ต้องรอคิวที่ศูนย์ OPPO',
    highlightPoints: [
      'รอยพับหน้าจอด้านในตื้นและเรียบเนียนที่สุด แทบมองไม่เห็นและไม่รู้สึกสะดุดนิ้วขณะสัมผัส',
      'ระบบกล้องหลังร่วมพัฒนากับ Hasselblad ได้เซนเซอร์ซ้อนทับ LYTIA และเลนส์ Periscope 64MP คุณภาพเทียบเท่ากล้องมือโปร',
      'ระบบ Boundless View เปิดทำงาน 3 แอปพร้อมกันแบบเต็มขนาดจอได้อย่างอัจฉริยะ',
      'มีสวิตช์ Alert Slider ด้านข้าง ปรับโหมดเสียง เงียบ สั่น กริ่ง ได้ในคลิกเดียว'
    ],
    limitations: [
      'ราคาระดับพรีเมียม',
      'ไม่มีระบบชาร์จไร้สาย'
    ],
    lastUpdated: '2026-10-20'
  },
  {
    id: 'bnn-oppo-find-n3-flip',
    name: 'OPPO Find N3 Flip',
    category: 'mobile',
    brand: 'OPPO',
    price: 25990,
    originalPrice: 31990,
    rating: 4.8,
    reviewCount: 320,
    inStock: true,
    stockCount: 15,
    tags: ['มือถือพับตลับแป้ง', 'กล้อง Hasselblad 3 เลนส์', 'จอนอกแนวตั้ง Intuitive Cover', 'กล้องพอร์ตเทรต 2x', 'ลดราคาพิเศษ'],
    colors: [
      {
        name: 'ทอง Cream Gold',
        hex: '#fef3c7',
        overlayHex: '#fef3c7',
        image: 'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?auto=format&fit=crop&w=900&q=80'
      },
      {
        name: 'ชมพู Misty Pink',
        hex: '#fce7f3',
        overlayHex: '#fce7f3',
        image: 'https://images.unsplash.com/photo-1589739900243-4b52cd9b104e?auto=format&fit=crop&w=900&q=80'
      },
      {
        name: 'ดำ Sleek Black',
        hex: '#1f2937',
        overlayHex: '#1f2937',
        image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=900&q=80'
      }
    ],
    defaultImage: 'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?auto=format&fit=crop&w=900&q=80',
    specs: {
      screen: 'จอนอกแนวตั้ง 3.26 นิ้ว AMOLED รองรับแอป Mini Apps กว่า 80 แอป / จอหลักพับ 6.8 นิ้ว FHD+ 120Hz LTPO AMOLED, 1,600 nits',
      processor: 'MediaTek Dimensity 9200 (4nm) ระดับแฟลกชิป',
      ram: '12GB LPDDR5X',
      storage: '256GB UFS 4.0',
      rearCamera: 'กล้องร่วมพัฒนา Hasselblad: 50MP Sony IMX890 (f/1.8, OIS) + 32MP Telephoto Portrait 2x + 48MP Ultra-wide 114°',
      frontCamera: '32MP (f/2.4) พร้อม Autofocus (และเซลฟี่ด้วยกล้องหลังผ่านจอนอกได้เต็มความละเอียด)',
      battery: '4,300 mAh แบตเตอรี่ความจุใหญ่ที่สุดในกลุ่มมือถือพับแนวตั้ง',
      charging: '44W SUPERVOOC Flash Charge (ชาร์จ 50% ใน 23 นาที)',
      os: 'ColorOS 14 บน Android 14 พร้อมสัตว์เลี้ยงเสมือนจริง Interactive Pet บนจอนอก',
      weight: '198 กรัม พับปิดสนิท บานพับ Flexion Hinge ไร้ช่องว่าง',
      connectivity: '5G, Wi-Fi 7, Bluetooth 5.3, Alert Slider, กันละอองน้ำ IPX4'
    },
    promotions: [
      'ปรับลดราคา 6,000 บาทที่ BaNANA IT (เหลือเพียง 25,990.- จากปกติ 31,990.-)',
      'ผ่อน 0% นาน 24 เดือน เริ่มต้นเดือนละ 1,083 บาท',
      'ฟรีประกันหน้าจอพับ 1 ปีเต็ม'
    ],
    freeGifts: [
      'หัวชาร์จ 44W SUPERVOOC',
      'เคสพรีเมียมพร้อมสายคล้องคอ',
      'ฟิล์มกันรอยหน้าจอนอก'
    ],
    warranty: 'ประกันศูนย์ไทย 1 ปีเต็ม',
    afterSales: 'บริการเปลี่ยนฟิล์มหน้าจอพับฟรี 2 ครั้ง และทำความสะอาดเครื่องฟรีที่ศูนย์บริการ OPPO',
    highlightPoints: [
      'สมาร์ทโฟนจอพับตลับแป้งรุ่นแรกและรุ่นเดียวที่มีกล้อง 3 ตัว พร้อมเลนส์ Telephoto Portrait 2x เฉพาะ ร่วมพัฒนากับ Hasselblad',
      'จอด้านนอกอัตราส่วนแนวตั้ง 3.26 นิ้ว ใช้งานแอปพลิเคชันอย่าง YouTube, LINE, Maps, TikTok ได้อย่างเป็นธรรมชาติโดยไม่ต้องกางเครื่อง',
      'บานพับ Flexion Hinge พับสนิท ไร้ช่องว่าง ผ่านการทดสอบพับเปิด-ปิดได้มากกว่า 600,000 ครั้ง',
      'มีปุ่ม Alert Slider ด้านข้าง ปรับโหมดเสียงได้สะดวกรวดเร็ว'
    ],
    limitations: [
      'ไม่มีระบบชาร์จไร้สาย',
      'กันน้ำระดับ IPX4 (กันน้ำละอองกระเซ็น)'
    ],
    lastUpdated: '2026-10-20'
  },

  // ==========================================
  // BRAND 4: VIVO (X Series, V Series, Y Series จากศูนย์ไทย)
  // ==========================================
  {
    id: 'bnn-vivo-x300-pro-5g',
    name: 'vivo X300 Pro 5G',
    category: 'mobile',
    brand: 'Vivo',
    price: 39999,
    originalPrice: 39999,
    rating: 4.9,
    reviewCount: 95,
    inStock: true,
    stockCount: 15,
    tags: ['เรือธงกล้อง ZEISS เจนใหม่', 'ชิป Dimensity 9500 5G', 'ชิปประมวลผลภาพ V4', 'แบตเตอรี่ BlueOcean 6500 mAh', 'ชาร์จไว 120W FlashCharge'],
    colors: [
      {
        name: 'ดำคอสมิกแบล็ก Titanium Cosmic Black',
        hex: '#09090b',
        overlayHex: '#09090b',
        image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=900&q=80',
        images: [
          'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=900&q=80',
          'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=900&q=80'
        ]
      },
      {
        name: 'ขาวซาติน Satin White',
        hex: '#f8fafc',
        overlayHex: '#f8fafc',
        image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=900&q=80'
      }
    ],
    defaultImage: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=900&q=80',
    specs: {
      screen: '6.82 นิ้ว 2K (3168x1440) 120Hz LTPO AMOLED, ความสว่างพีค 5,000 nits, 2160Hz PWM Dimming, กระจก Armor Glass ทนการตกกระแทก',
      processor: 'MediaTek Dimensity 9500 (3nm) + ชิปประมวลผลการถ่ายภาพแยกอิสระ vivo V4 Imaging Chip',
      ram: '16GB LPDDR5X Ultra (+ ขยาย RAM เสมือนได้ 16GB รวม 32GB)',
      storage: '512GB / 1TB UFS 4.1',
      rearCamera: 'กล้อง ZEISS Master: 200MP Sony LYT-900 ขนาด 1 นิ้ว (f/1.6, OIS) + 200MP ZEISS APO Periscope Telephoto (ซูมออปติคอล 4.3x ซูมดิจิทัล 100x, OIS) + 50MP Ultra-wide 119°',
      frontCamera: '50MP Eye-tracking AF (f/2.0) รองรับ 4K 60fps',
      battery: '6,500 mAh แบตเตอรี่ BlueOcean Silicon-Carbon ความจุสูง',
      charging: '120W FlashCharge + 50W ไร้สาย Wireless FlashCharge',
      os: 'Funtouch OS 15 บน Android 15 พร้อม vivo AI',
      weight: '228 กรัม ดีไซน์เลนส์กล้องวงแหวน Sun Ring เคลือบสารสะท้อนแสง ZEISS T*',
      connectivity: '5G Dual SIM, Wi-Fi 7, Bluetooth 5.4, NFC, IR Blaster, ลำโพงสเตอริโอคู่, มาตรฐานกันน้ำกันฝุ่นระดับ IP68 & IP69'
    },
    promotions: [],
    freeGifts: [],
    warranty: 'ประกันศูนย์ไทย vivo ประเทศไทย 1 ปีเต็ม เข้าศูนย์บริการ vivo Service Center ได้ทุกสาขา',
    afterSales: 'บริการซ่อมด่วนใน 1 ชั่วโมง และเปลี่ยนฟิล์มฟรีตลอดอายุการใช้งาน',
    highlightPoints: [
      'เซนเซอร์กล้อง 200MP ขนาด 1 นิ้ว ร่วมพัฒนากับ ZEISS และเลนส์ซูม Periscope 200MP ถ่ายภาพคมชัดระดับสูงสุด',
      'ชิปเซ็ตระดับท็อป Dimensity 9500 ร่วมกับชิปภาพ V4 ประมวลผลภาพถ่ายและวิดีโอกลางคืนได้สวยงามไร้ที่ติ',
      'แบตเตอรี่ซิลิคอนคาร์บอนความจุยักษ์ 6,500 mAh พร้อมระบบชาร์จไว 120W',
      'ผ่านมาตรฐานกันน้ำและกันฝุ่นระดับสูงทั้ง IP68 และ IP69'
    ],
    limitations: [
      'ข้อมูลโปรโมชั่นและของแถมเว้นว่างไว้ตามคำขอ รอการยืนยันทางการจากหน้าร้าน'
    ],
    lastUpdated: '2026-10-20'
  },
  {
    id: 'bnn-vivo-v80-5g',
    name: 'vivo V80 5G',
    category: 'mobile',
    brand: 'Vivo',
    price: 16999,
    originalPrice: 16999,
    rating: 4.8,
    reviewCount: 140,
    inStock: true,
    stockCount: 20,
    tags: ['Aura Light Portrait 4.0', 'กล้องพอร์ตเทรต 50MP Sony OIS', 'ชิป Snapdragon 7 Gen 4', 'จอโค้ง 1.5K 120Hz', 'ชาร์จไว 90W'],
    colors: [
      {
        name: 'ชมพูพีชบลอสซั่ม Peach Blossom',
        hex: '#fbcfe8',
        overlayHex: '#fbcfe8',
        image: 'https://images.unsplash.com/photo-1589739900243-4b52cd9b104e?auto=format&fit=crop&w=900&q=80'
      },
      {
        name: 'เขียวมรกต Emerald Green',
        hex: '#059669',
        overlayHex: '#059669',
        image: 'https://images.unsplash.com/photo-1565849904461-04a58ad377e0?auto=format&fit=crop&w=900&q=80'
      },
      {
        name: 'ดำมิดไนท์ Midnight Black',
        hex: '#0f172a',
        overlayHex: '#0f172a',
        image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=900&q=80'
      }
    ],
    defaultImage: 'https://images.unsplash.com/photo-1589739900243-4b52cd9b104e?auto=format&fit=crop&w=900&q=80',
    specs: {
      screen: '6.78 นิ้ว 1.5K (2800x1260) 120Hz 3D Curved AMOLED, ความสว่าง 4,500 nits, ระบบสัมผัสเมื่อมือเปียก Wet-Hand Touch',
      processor: 'Qualcomm Snapdragon 7 Gen 4 (4nm) 5G Octa-core ประสิทธิภาพสูง',
      ram: '12GB (+ ขยาย RAM เสมือนได้ 12GB รวม 24GB)',
      storage: '256GB / 512GB UFS 3.1',
      rearCamera: '50MP Sony IMX882 (f/1.79, OIS) + 50MP Ultra-wide 119° พร้อมวงแหวนไฟ Aura Light Portrait 4.0 อัจฉริยะปรับอุณหภูมิสีได้ละเอียด',
      frontCamera: '50MP Group Selfie AF พร้อมมุมกว้าง 92° และแฟลชคู่ด้านหน้า',
      battery: '6,000 mAh BlueOcean Battery ตัวเครื่องบางเฉียบเพียง 7.5 มม.',
      charging: '90W FlashCharge (ชาร์จ 50% ใน 19 นาที)',
      os: 'Funtouch OS 15 บน Android 15 พร้อม AI Portrait Studio',
      weight: '186 กรัม ดีไซน์บางเบาจับถนัดมือ',
      connectivity: '5G Dual SIM, Wi-Fi 6, Bluetooth 5.4, NFC, ลำโพงสเตอริโอคู่ Audio Booster 300%, กันน้ำกันฝุ่นระดับ IP68 & IP69'
    },
    promotions: [],
    freeGifts: [],
    warranty: 'ประกันศูนย์ไทย vivo 1 ปีเต็ม',
    afterSales: 'บริการติดฟิล์มฟรีและทำความสะอาดตัวเครื่องฟรีที่ศูนย์บริการ vivo',
    highlightPoints: [
      'วงแหวนไฟ Aura Light Portrait 4.0 ปรับอุณหภูมิสีอัตโนมัติ ถ่ายภาพบุคคลได้สวยละมุนในทุกสภาพแสง',
      'แบตเตอรี่ BlueOcean ความจุใหญ่ 6,000 mAh แต่ตัวเครื่องยังคงบางเฉียบเพียง 7.5 มม. และเบา 186 กรัม',
      'กล้องหน้าและกล้องหลังความละเอียด 50MP คมชัดทุกการถ่ายภาพ',
      'ผ่านมาตรฐานกันน้ำระดับเรือธง IP68 และ IP69'
    ],
    limitations: [
      'ข้อมูลโปรโมชั่นและของแถมเว้นว่างไว้ตามคำขอ รอการยืนยันทางการจากหน้าร้าน',
      'ไม่มีเลนส์ซูม Telephoto'
    ],
    lastUpdated: '2026-10-20'
  },
  {
    id: 'bnn-vivo-x200-pro-5g',
    name: 'vivo X200 Pro 5G',
    category: 'mobile',
    brand: 'Vivo',
    price: 39999,
    originalPrice: 42999,
    rating: 4.9,
    reviewCount: 310,
    inStock: true,
    stockCount: 16,
    tags: ['เรือธงกล้อง ZEISS 200MP APO', 'ชิป Dimensity 9400 3nm', 'ชิปภาพ vivo V3+', 'แบตเตอรี่ BlueOcean 6000 mAh', 'กันน้ำ IP68 & IP69'],
    colors: [
      {
        name: 'น้ำเงินทะเลลึก Titanium Ocean Blue',
        hex: '#1e3a8a',
        overlayHex: '#1e3a8a',
        image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=900&q=80',
        images: [
          'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=900&q=80',
          'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=900&q=80'
        ]
      },
      {
        name: 'เทาไทเทเนียม Titanium Grey',
        hex: '#475569',
        overlayHex: '#475569',
        image: 'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?auto=format&fit=crop&w=900&q=80'
      },
      {
        name: 'ดำมิดไนท์ Midnight Black',
        hex: '#09090b',
        overlayHex: '#09090b',
        image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=900&q=80'
      }
    ],
    defaultImage: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=900&q=80',
    specs: {
      screen: '6.78 นิ้ว 1.5K 120Hz LTPO Eye-Care AMOLED, ความสว่าง 4,500 nits, 2160Hz PWM Dimming, กระจก Armor Glass แข็งแกร่ง',
      processor: 'MediaTek Dimensity 9400 (3nm) All-Big-Core + ชิปประมวลผลการถ่ายภาพแยก vivo V3+ Imaging Chip',
      ram: '16GB LPDDR5X (+ ขยาย RAM เสมือนได้ 16GB รวม 32GB)',
      storage: '512GB UFS 4.0 ความเร็วสูง',
      rearCamera: 'กล้องร่วมพัฒนา ZEISS 3 ตัว: 50MP Sony LYT-818 ขนาด 1/1.28 นิ้ว (f/1.57, VCS 3.0, OIS) + 200MP ZEISS APO Telephoto 85mm 3.7x ซูมสูงสุด 100x (f/2.67, OIS) + 50MP Ultra-wide 119°',
      frontCamera: '32MP (f/2.0) ถ่ายวิดีโอ 4K 60fps',
      battery: '6,000 mAh BlueOcean Silicon-Carbon ทนความเย็นจัดและใช้งานได้ยาวนาน 2 วัน',
      charging: '90W FlashCharge + 30W ไร้สาย Wireless FlashCharge',
      os: 'Funtouch OS 15 บน Android 15 พร้อม AI Origin Design',
      weight: '228 กรัม ดีไซน์โมดูลกล้องทรงกลม Sun Ring คลาสสิกพรีเมียม',
      connectivity: '5G Dual SIM, Wi-Fi 7, Bluetooth 5.4, NFC, IR Blaster, ลำโพงสเตอริโอคู่ Hi-Res, กันน้ำกันฝุ่นระดับ IP68 & IP69'
    },
    promotions: [
      'ราคาโปรพิเศษช่วงเปิดตัว 39,999 บาท (ลดจาก 42,999.-)',
      'ผ่อน 0% นานสูงสุด 24 เดือน (เพียงเดือนละ 1,667 บาท)',
      'รับฟรี ประกันหน้าจอแตก vivo VIP Care 1 ปีเต็ม'
    ],
    freeGifts: [
      'ชุดของขวัญ vivo VIP Box',
      'หูฟังไร้สาย vivo TWS',
      'เคสหนังพรีเมียมตรงรุ่น',
      'ฟิล์มกระจก 9H'
    ],
    warranty: 'ประกันศูนย์ไทย vivo ประเทศไทย 1 ปีเต็ม เข้าศูนย์บริการ vivo Service Center ได้ทุกสาขา',
    afterSales: 'บริการ Fast Track ซ่อมด่วนใน 1 ชั่วโมง และทำความสะอาดเครื่องฟรีตลอดชีพ',
    highlightPoints: [
      'กล้อง Telephoto ระดับตำนาน 200MP ZEISS APO Periscope ซูมบุคคล 85mm และ 135mm ได้มิติภาพที่สวยที่สุดในวงการสมาร์ทโฟน',
      'ชิป Dimensity 9400 สถาปัตยกรรม 3 นาโนเมตร ทำงานร่วมกับชิปภาพ V3+ รองรับวิดีโอ 4K 60fps Cinematic Portrait',
      'แบตเตอรี่ BlueOcean 6,000 mAh บางเบาแต่อึดยาวนาน ชาร์จเร็ว 90W FlashCharge',
      'กันน้ำกันฝุ่นมาตรฐานสูงสุด IP68 และ IP69 ทนน้ำร้อนและแรงดันสูง'
    ],
    limitations: [
      'ไม่มีช่องเสียบหูฟัง 3.5 มม.',
      'ไม่รองรับ MicroSD'
    ],
    lastUpdated: '2026-10-20'
  },
  {
    id: 'bnn-vivo-x200-5g',
    name: 'vivo X200 5G',
    category: 'mobile',
    brand: 'Vivo',
    price: 29999,
    originalPrice: 32999,
    rating: 4.8,
    reviewCount: 260,
    inStock: true,
    stockCount: 20,
    tags: ['เรือธงกล้อง ZEISS 50MP Sony IMX921', 'ชิป Dimensity 9400 3nm', 'แบต BlueOcean 5800 mAh', 'จอ 1.5K 120Hz', 'กันน้ำ IP68 & IP69'],
    colors: [
      {
        name: 'ฟ้าประกายคลื่น Sea Blue',
        hex: '#0284c7',
        overlayHex: '#0284c7',
        image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=900&q=80'
      },
      {
        name: 'ขาวออโรร่า Aurora White',
        hex: '#f8fafc',
        overlayHex: '#f8fafc',
        image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=900&q=80'
      },
      {
        name: 'ดำมิดไนท์ Midnight Black',
        hex: '#09090b',
        overlayHex: '#09090b',
        image: 'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?auto=format&fit=crop&w=900&q=80'
      }
    ],
    defaultImage: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=900&q=80',
    specs: {
      screen: '6.67 นิ้ว 1.5K 120Hz Quad-Curved AMOLED, ความสว่าง 4,500 nits, กระจกป้องกันรอย Schott Xensation Alpha',
      processor: 'MediaTek Dimensity 9400 (3nm) สถาปัตยกรรมเรือธง 8 คอร์แรงจัด',
      ram: '12GB / 16GB LPDDR5X',
      storage: '256GB / 512GB UFS 4.0',
      rearCamera: 'กล้อง ZEISS 3 ตัว 50MP: 50MP Sony IMX921 (f/1.57, OIS) + 50MP ZEISS Telephoto Sony IMX882 3x 70mm (ซูม 100x, OIS) + 50MP Ultra-wide 119°',
      frontCamera: '32MP (f/2.0)',
      battery: '5,800 mAh BlueOcean Silicon Battery',
      charging: '90W FlashCharge (ชาร์จ 50% ใน 20 นาที)',
      os: 'Funtouch OS 15 บน Android 15',
      weight: '197 กรัม บางเพียง 7.99 มม.',
      connectivity: '5G Dual SIM, Wi-Fi 7, Bluetooth 5.4, NFC, IR Blaster, ลำโพงสเตอริโอคู่, กันน้ำกันฝุ่นระดับ IP68 & IP69'
    },
    promotions: [
      'ราคาพิเศษช่วงเปิดตัว 29,999 บาท (ลดจาก 32,999.-)',
      'ผ่อน 0% นานสูงสุด 18 เดือน เริ่มต้นเดือนละ 1,666 บาท',
      'ฟรี ประกันจอแตก 1 ปีเต็ม'
    ],
    freeGifts: [
      'หัวชาร์จแท้ 90W FlashCharge',
      'เคสพรีเมียมตรงรุ่น',
      'ฟิล์มกันรอย'
    ],
    warranty: 'ประกันศูนย์ไทย 1 ปีเต็ม',
    afterSales: 'บริการอัปเกรดระบบและติดฟิล์มฟรีที่ศูนย์บริการ vivo',
    highlightPoints: [
      'กล้อง ZEISS 3 เลนส์ 50MP เซนเซอร์ Sony คุณภาพสูง ให้ภาพพอร์ตเทรตสวยงามและสมจริง',
      'ชิป Dimensity 9400 3nm สปีดแรงระดับแฟลกชิป ประหยัดพลังงานสูง',
      'แบตเตอรี่ 5,800 mAh ตัวเครื่องบางเพียง 7.99 มม. พกพาสะดวกสบาย',
      'ผ่านมาตรฐานกันน้ำกันฝุ่น IP68 และ IP69'
    ],
    limitations: [
      'ไม่มีเลนส์ซูม 200MP APO (มีในรุ่น Pro)',
      'ไม่รองรับชาร์จไร้สาย'
    ],
    lastUpdated: '2026-10-20'
  },
  {
    id: 'bnn-vivo-v40-pro-5g',
    name: 'vivo V40 Pro 5G',
    category: 'mobile',
    brand: 'Vivo',
    price: 24999,
    originalPrice: 24999,
    rating: 4.9,
    reviewCount: 380,
    inStock: true,
    stockCount: 15,
    tags: ['กล้อง ZEISS 50MP 3 เลนส์', 'ชิป Dimensity 9200+', 'กันน้ำ IP68 & IP69', 'ชาร์จไว 80W', 'แบต BlueVolt 5500mAh'],
    colors: [
      {
        name: 'เทา Titanium Grey',
        hex: '#4b5563',
        overlayHex: '#4b5563',
        image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=900&q=80',
        images: [
          'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=900&q=80',
          'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=900&q=80'
        ]
      },
      {
        name: 'ขาวมุกแสงจันทร์ Moonlight White',
        hex: '#e0f2fe',
        overlayHex: '#e0f2fe',
        image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=900&q=80'
      }
    ],
    defaultImage: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=900&q=80',
    specs: {
      screen: '6.78 นิ้ว 1.5K 3D Curved AMOLED, 120Hz, ความสว่างพีคสูงสุด 4,500 nits, DCI-P3 100%, ถนอมสายตา SGS',
      processor: 'MediaTek Dimensity 9200+ (4nm) All-Big-Core ระดับแฟลกชิป คะแนนทะลุ 1.5 ล้าน',
      ram: '12GB LPDDR5X (+ ขยาย Extended RAM ได้ 12GB รวม 24GB)',
      storage: '512GB UFS 4.0 ความเร็วสูงระดับสูงสุด',
      rearCamera: 'กล้อง ZEISS All-Main 50MP: 50MP Sony IMX921 OIS + 50MP ZEISS Telephoto Sony IMX816 (ซูมออปติคอล 2x, สูงสุด 50x) + 50MP Ultra-wide 119° พร้อมไฟ AI Aura Light Portrait',
      frontCamera: '50MP ZEISS Group Selfie (f/2.0) เลนส์มุมกว้าง 92° พร้อม Autofocus รองรับวิดีโอ 4K 60fps',
      battery: '5,500 mAh แบตเตอรี่เทคโนโลยี BlueVolt บางเฉียบและจุใจ',
      charging: '80W FlashCharge ชาร์จเต็ม 100% ใน 48 นาที',
      os: 'Funtouch OS 14 บนพื้นฐาน Android 14',
      weight: '192 กรัม ตัวเครื่องบางเพียง 7.58 มม.',
      connectivity: '5G Dual SIM, Wi-Fi 7, Bluetooth 5.4, NFC, ลำโพงคู่สเตอริโอ Hi-Res, กันน้ำกันฝุ่นระดับสูงสุด IP68 และ IP69'
    },
    promotions: [
      'ราคาพิเศษ 24,999 บาท ที่ BaNANA IT',
      'ผ่อน 0% นานสูงสุด 24 เดือน (เพียงเดือนละ 1,042 บาท)',
      'รับฟรี vivo TWS 3e หูฟังไร้สายตัดเสียงรบกวน มูลค่า 1,799 บาท'
    ],
    freeGifts: [
      'หัวชาร์จแท้ vivo 80W FlashCharge',
      'เคสพรีเมียมตรงรุ่น',
      'E-VIP Card ประกันหน้าจอแตก 2 ปีเต็ม และประกันตัวเครื่อง 2 ปี'
    ],
    warranty: 'ประกันศูนย์ไทย 2 ปีเต็ม พร้อมประกันจอแตก 2 ปี',
    afterSales: 'บริการเปลี่ยนฟิล์มและทำความสะอาดเครื่องฟรีตลอดอายุการใช้งานที่ศูนย์ vivo',
    highlightPoints: [
      'กล้องทุกตัวความละเอียด 50MP ร่วมพัฒนากับ ZEISS และเคลือบผิวเลนส์ ZEISS T* ป้องกันแสงสะท้อน แฟลร์ และโกสต์',
      'มีเลนส์ 50MP ZEISS Telephoto Portrait ถ่ายภาพบุคคลระยะ 50mm สวยระดับมือโปรพร้อมโบเก้สไตล์เลนส์ ZEISS แท้',
      'มาตรฐานกันน้ำกันฝุ่นระดับ IP68 และ IP69 ทนทานต่อน้ำร้อนแรงดันสูง',
      'แบตเตอรี่ BlueVolt 5,500 mAh แต่ตัวเครื่องบางเพียง 7.58 มม.'
    ],
    limitations: [
      'ไม่มีช่องเสียบหูฟัง 3.5 มม.',
      'ไม่รองรับชาร์จไร้สาย'
    ],
    lastUpdated: '2026-10-20'
  },
  {
    id: 'bnn-vivo-v40-5g',
    name: 'vivo V40 5G',
    category: 'mobile',
    brand: 'Vivo',
    price: 15999,
    originalPrice: 15999,
    rating: 4.8,
    reviewCount: 520,
    inStock: true,
    stockCount: 30,
    tags: ['กล้อง ZEISS 50MP คู่', 'ไฟ Aura Light Portrait', 'กันน้ำ IP68/IP69', 'แบตเตอรี่ 5500mAh', 'รุ่นยอดนิยม'],
    colors: [
      {
        name: 'เงินเนบิวลา Stellar Silver',
        hex: '#cbd5e1',
        overlayHex: '#cbd5e1',
        image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=900&q=80'
      },
      {
        name: 'ส้มพีช Peach Pink',
        hex: '#fed7aa',
        overlayHex: '#fed7aa',
        image: 'https://images.unsplash.com/photo-1589739900243-4b52cd9b104e?auto=format&fit=crop&w=900&q=80'
      },
      {
        name: 'เทาเข้ม Nebula Purple',
        hex: '#334155',
        overlayHex: '#334155',
        image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=900&q=80'
      }
    ],
    defaultImage: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=900&q=80',
    specs: {
      screen: '6.78 นิ้ว 1.5K 3D Curved AMOLED, 120Hz, ความสว่าง 4,500 nits, กระจก Schott Xensation α',
      processor: 'Qualcomm Snapdragon 7 Gen 3 (4nm) ทรงพลังและประหยัดพลังงาน',
      ram: '12GB (+ Extended RAM 12GB)',
      storage: '256GB / 512GB UFS 2.2',
      rearCamera: 'กล้องร่วมพัฒนา ZEISS คู่ 50MP: 50MP Main OIS (f/1.88) + 50MP ZEISS Ultra-wide 119° พร้อมไฟวงแหวน Aura Light Portrait ปรับอุณหภูมิสีอัจฉริยะ',
      frontCamera: '50MP ZEISS Group Selfie (f/2.0) มุมกว้าง 92° พร้อม AF ถ่ายวิดีโอ 4K',
      battery: '5,500 mAh แบตเตอรี่ BlueVolt ใช้งานต่อเนื่องได้ 2 วัน',
      charging: '80W FlashCharge',
      os: 'Funtouch OS 14 บน Android 14',
      weight: '190 กรัม บางเฉียบเพียง 7.58 มม.',
      connectivity: '5G, Wi-Fi 6, Bluetooth 5.4, NFC, ลำโพงคู่สเตอริโอ, มาตรฐานกันน้ำระดับ IP68 & IP69'
    },
    promotions: [
      'ราคาโปรพิเศษ 15,999 บาท ที่ BaNANA IT',
      'ผ่อน 0% นาน 18 เดือน เริ่มต้นเดือนละ 889 บาท',
      'ฟรี vivo V40 Series Box Set พร้อมกระเป๋าเดินทางพรีเมียม'
    ],
    freeGifts: [
      'หัวชาร์จเร็ว 80W FlashCharge แท้ในกล่อง',
      'เคสใสกันกระแทก',
      'E-VIP Card ประกันจอแตก 2 ปี และประกันเครื่อง 2 ปี'
    ],
    warranty: 'ประกันศูนย์ไทย 2 ปีเต็ม (ประกันจอแตก 2 ปี)',
    afterSales: 'บริการตรวจเช็กสุขภาพแบตเตอรี่และทำความสะอาดฟรีที่ศูนย์บริการ vivo',
    highlightPoints: [
      'สมาร์ทโฟนระดับหมื่นกลางรุ่นแรกที่ได้กล้องร่วมพัฒนากับ ZEISS คุณภาพระดับเรือธง',
      'ไฟออร่าพอร์ตเทรต Aura Light ปรับแสงนุ่มนวลอัตโนมัติตามสภาพแวดล้อม ถ่ายภาพคนตอนกลางคืนสวยที่สุด',
      'มาตรฐานกันน้ำระดับสูง IP68 และ IP69 กันน้ำลึก 1.5 เมตร นาน 30 นาที และกันน้ำแรงดันสูง',
      'แบตเตอรี่ 5,500 mAh แต่ตัวเครื่องยังคงบางเฉียบ 7.58 มม. พกพาสะดวก'
    ],
    limitations: [
      'ไม่มีเลนส์ซูม Telephoto เฉพาะ (ซูมดิจิทัล 2x In-sensor Crop)',
      'หน่วยความจำชนิด UFS 2.2'
    ],
    lastUpdated: '2026-10-20'
  },
  {
    id: 'bnn-vivo-v40e-5g',
    name: 'vivo V40e 5G',
    category: 'mobile',
    brand: 'Vivo',
    price: 12999,
    originalPrice: 12999,
    rating: 4.8,
    reviewCount: 290,
    inStock: true,
    stockCount: 25,
    tags: ['จอโค้ง 3D AMOLED', 'กล้องหน้า 50MP AF', 'ไฟ Aura Light', 'ชาร์จไว 80W', 'ดีไซน์หรูหรา'],
    colors: [
      {
        name: 'บรอนซ์รอยัล Royal Bronze',
        hex: '#b45309',
        overlayHex: '#b45309',
        image: 'https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&w=900&q=80'
      },
      {
        name: 'เขียวมิ้นต์ Mint Green',
        hex: '#a7f3d0',
        overlayHex: '#a7f3d0',
        image: 'https://images.unsplash.com/photo-1565849904461-04a58ad377e0?auto=format&fit=crop&w=900&q=80'
      }
    ],
    defaultImage: 'https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&w=900&q=80',
    specs: {
      screen: '6.77 นิ้ว 3D Curved AMOLED FHD+, 120Hz, ความสว่าง 4,500 nits, 1 พันล้านสี',
      processor: 'MediaTek Dimensity 7300 (4nm) Octa-core',
      ram: '12GB (+ Extended RAM 12GB)',
      storage: '256GB',
      rearCamera: '50MP Sony IMX882 (f/1.79, OIS) + 8MP Ultra-wide 120° พร้อมไฟ Aura Light Portrait',
      frontCamera: '50MP Eye AF Group Selfie (f/2.0) ถ่ายวิดีโอ 4K',
      battery: '5,500 mAh แบตเตอรี่อึดใช้งานได้ 2 วัน',
      charging: '80W FlashCharge',
      os: 'Funtouch OS 14 บน Android 14',
      weight: '183 กรัม บาง 7.49 มม. น้ำหนักเบา',
      connectivity: '5G, Wi-Fi 6, Bluetooth 5.4, ลำโพงคู่สเตอริโอ, กันน้ำกันฝุ่น IP64'
    },
    promotions: [
      'ราคาโปรพิเศษ 12,999 บาท ที่ BaNANA IT',
      'ผ่อน 0% นาน 10 เดือน เดือนละ 1,300 บาท',
      'ฟรี ประกันหน้าจอแตก 1 ปีเต็ม'
    ],
    freeGifts: [
      'หัวชาร์จ 80W FlashCharge',
      'เคสพรีเมียม',
      'ฟิล์มกันรอยหน้าจอโค้ง'
    ],
    warranty: 'ประกันศูนย์ไทย 1 ปีเต็ม',
    afterSales: 'บริการอัปเดตระบบและทำความสะอาดเครื่องฟรีที่หน้าร้าน BaNANA',
    highlightPoints: [
      'กล้องหน้า 50MP พร้อมระบบโฟกัสดวงตา Eye AF และถ่ายวิดีโอ 4K สำหรับสายคอนเทนต์/Vlog',
      'หน้าจอโค้ง 3D AMOLED 120Hz ความสว่าง 4,500 nits สวยหรูระดับเรือธง',
      'ชาร์จเร็ว 80W FlashCharge คู่กับแบตเตอรี่ความจุใหญ่ 5,500 mAh',
      'ตัวเครื่องบางเพียง 7.49 มม. ดีไซน์หรูหราด้วยสี Royal Bronze'
    ],
    limitations: [
      'กันน้ำระดับ IP64 (รุ่น V40 ธรรมดาเป็น IP68/IP69)',
      'ไม่ได้ใช้เลนส์ร่วมพัฒนากับ ZEISS'
    ],
    lastUpdated: '2026-10-20'
  },
  {
    id: 'bnn-vivo-v40-lite',
    name: 'vivo V40 Lite',
    category: 'mobile',
    brand: 'Vivo',
    price: 8999,
    originalPrice: 8999,
    rating: 4.7,
    reviewCount: 340,
    inStock: true,
    stockCount: 40,
    tags: ['ไฟ AI Aura Light', 'จอ AMOLED 120Hz', 'ชาร์จไว 80W', 'แบตการันตี 4 ปี', 'ลำโพงคู่ 300%'],
    colors: [
      {
        name: 'เงิน Titanium Silver',
        hex: '#cbd5e1',
        overlayHex: '#cbd5e1',
        image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=900&q=80'
      },
      {
        name: 'ดำ Carbon Black',
        hex: '#1e293b',
        overlayHex: '#1e293b',
        image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=900&q=80'
      },
      {
        name: 'ม่วง Dynamic Violet',
        hex: '#c084fc',
        overlayHex: '#c084fc',
        image: 'https://images.unsplash.com/photo-1589739900243-4b52cd9b104e?auto=format&fit=crop&w=900&q=80'
      }
    ],
    defaultImage: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=900&q=80',
    specs: {
      screen: '6.67 นิ้ว Ultra Vision AMOLED FHD+, 120Hz, ความสว่าง 1,800 nits, ขอบจอบางเฉียบ',
      processor: 'Qualcomm Snapdragon 4 Gen 2 (4nm) 5G',
      ram: '8GB / 12GB (+ Extended RAM 8GB)',
      storage: '256GB (รองรับใส่ MicroSD สูงสุด 1TB)',
      rearCamera: '50MP Sony IMX882 (f/1.79) + 8MP Ultra-wide 120° พร้อมไฟวงแหวน AI Aura Light',
      frontCamera: '32MP (f/2.45) เซลฟี่คมชัด',
      battery: '5,000 mAh แบตเตอรี่รับประกันสุขภาพแบต 4 ปี',
      charging: '80W FlashCharge (ชาร์จ 80% ในเวลา 30 นาที)',
      os: 'Funtouch OS 14 บน Android 14 พร้อม AI Eraser และ AI Photo Enhance',
      weight: '188 กรัม บาง 7.79 มม. ดีไซน์ Cushion Cut พรีเมียม',
      connectivity: '5G, Wi-Fi 5, Bluetooth 5.0, ลำโพงสเตอริโอคู่ Ultra Volume 300%, กันน้ำละออง IP64'
    },
    promotions: [
      'ราคาคุ้มค่า 8,999 บาท ที่ BaNANA IT',
      'ผ่อน 0% นาน 10 เดือน เริ่มต้นเดือนละ 900 บาท'
    ],
    freeGifts: [
      'หัวชาร์จ 80W FlashCharge แท้ในกล่อง',
      'เคสใสกันกระแทก',
      'ฟิล์มกันรอยหน้าจอ'
    ],
    warranty: 'ประกันศูนย์ไทย 1 ปีเต็ม พร้อมรับประกันสุขภาพแบตเตอรี่ 4 ปี',
    afterSales: 'บริการเปลี่ยนแบตเตอรี่ฟรีหากสุขภาพแบตต่ำกว่า 80% ภายใน 4 ปี',
    highlightPoints: [
      'ให้ระบบชาร์จเร็วสูงสุดถึง 80W FlashCharge ในงบไม่เกิน 9,000 บาท แบตเต็มเร็วที่สุดในกลุ่ม',
      'หน้าจอ Flat AMOLED 120Hz สีสันสดใส ขอบจอบาง สมมาตร ดูพรีเมียม',
      'มีไฟ AI Aura Light ถ่ายพอร์ตเทรตกลางคืนได้สว่างและเป็นธรรมชาติ',
      'ลำโพงคู่สเตอริโอเสียงดัง 300% ฟังเพลง ดูคลิป ชัดเจน'
    ],
    limitations: [
      'กล้องหลักไม่มีระบบกันสั่น OIS',
      'กล้องหน้าถ่ายวิดีโอได้ที่ 1080p 30fps'
    ],
    lastUpdated: '2026-10-20'
  },
  {
    id: 'bnn-vivo-y28',
    name: 'vivo Y28',
    category: 'mobile',
    brand: 'Vivo',
    price: 5499,
    originalPrice: 5999,
    rating: 4.7,
    reviewCount: 410,
    inStock: true,
    stockCount: 50,
    tags: ['แบตยักษ์ 6000mAh', 'ไฟไดนามิก Dynamic Light', 'ชาร์จไว 44W', 'ลำโพงคู่ 300%', 'รุ่นยอดนิยมขายดี'],
    colors: [
      {
        name: 'ส้ม Gleaming Orange',
        hex: '#fed7aa',
        overlayHex: '#fed7aa',
        image: 'https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&w=900&q=80'
      },
      {
        name: 'เขียว Agate Green',
        hex: '#14532d',
        overlayHex: '#14532d',
        image: 'https://images.unsplash.com/photo-1565849904461-04a58ad377e0?auto=format&fit=crop&w=900&q=80'
      }
    ],
    defaultImage: 'https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&w=900&q=80',
    specs: {
      screen: '6.68 นิ้ว 90Hz Sunlight Display, ความสว่าง 1,000 nits, ถนอมสายตา TÜV Rheinland',
      processor: 'MediaTek Helio G85 Octa-core',
      ram: '8GB (+ Extended RAM 8GB รวม 16GB)',
      storage: '128GB / 256GB (รองรับ MicroSD สูงสุด 1TB)',
      rearCamera: '50MP Ultra-Clear (f/1.8) + 2MP Bokeh พร้อมไฟ Dynamic Light แจ้งเตือนและกะพริบตามจังหวะดนตรี',
      frontCamera: '8MP (f/2.05) พร้อมไฟเสริม Aura Screen Light',
      battery: '6,000 mAh แบตเตอรี่ความจุยักษ์ ใช้งานได้นาน 2-3 วันต่อเนื่อง',
      charging: '44W FlashCharge (ชาร์จ 50% ในเวลาประมาณ 35 นาที)',
      os: 'Funtouch OS 14 บน Android 14',
      weight: '199 กรัม บางเพียง 7.99 มม. แม้แบตใหญ่ 6,000 mAh',
      connectivity: '4G LTE, Wi-Fi 5, Bluetooth 5.0, ลำโพงคู่สเตอริโอ Ultra Volume 300%, กันน้ำละออง IP64'
    },
    promotions: [
      'ราคาโปรพิเศษ 5,499 บาทที่ BaNANA IT (ลดจาก 5,999.-)',
      'ผ่อน 0% นาน 6 เดือน เดือนละ 916 บาท'
    ],
    freeGifts: [
      'หัวชาร์จ 44W FlashCharge แท้',
      'เคสใส',
      'ฟิล์มกันรอย'
    ],
    warranty: 'ประกันศูนย์ไทย 1 ปีเต็ม พร้อมการันตีสุขภาพแบตเตอรี่ 4 ปี',
    afterSales: 'บริการอัปเดตระบบและทำความสะอาดเครื่องฟรีที่สาขา BaNANA',
    highlightPoints: [
      'แบตเตอรี่ขนาดใหญ่พิเศษ 6,000 mAh อยู่ได้นาน 2-3 วันโดยไม่ต้องชาร์จ แต่ตัวเครื่องยังบางไม่ถึง 8 มม.',
      'ชาร์จไว 44W FlashCharge ไวกว่ามือถือแบตใหญ่ทั่วไปอย่างชัดเจน',
      'ไฟ Dynamic Light ด้านหลัง กะพริบตามเสียงเพลง แจ้งเตือนข้อความ และนับถอยหลังถ่ายรูป',
      'ลำโพงคู่สเตอริโอดัง 300% เสียงชัดเจนแม้อยู่กลางแจ้ง'
    ],
    limitations: [
      'รองรับ 4G LTE (ไม่รองรับ 5G)',
      'หน้าจอความละเอียด HD+ (ไม่ใช่ FHD+)'
    ],
    lastUpdated: '2026-10-20'
  },
  {
    id: 'bnn-vivo-y28s-5g',
    name: 'vivo Y28s 5G',
    category: 'mobile',
    brand: 'Vivo',
    price: 6299,
    originalPrice: 6299,
    rating: 4.7,
    reviewCount: 180,
    inStock: true,
    stockCount: 35,
    tags: ['มือถือ 5G ดีไซน์ระยิบระยับ', 'จอ 90Hz สู้แดด', 'กล้อง 50MP', 'กันน้ำ IP64', 'คุ้มค่า'],
    colors: [
      {
        name: 'ม่วง Twinkling Purple',
        hex: '#c084fc',
        overlayHex: '#c084fc',
        image: 'https://images.unsplash.com/photo-1589739900243-4b52cd9b104e?auto=format&fit=crop&w=900&q=80'
      },
      {
        name: 'น้ำตาลมอคค่า Mocha Brown',
        hex: '#543d2b',
        overlayHex: '#543d2b',
        image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=900&q=80'
      }
    ],
    defaultImage: 'https://images.unsplash.com/photo-1589739900243-4b52cd9b104e?auto=format&fit=crop&w=900&q=80',
    specs: {
      screen: '6.56 นิ้ว 90Hz High-Brightness Display, 840 nits สู้แดด',
      processor: 'MediaTek Dimensity 6300 (6nm) 5G Octa-core',
      ram: '6GB / 8GB (+ Extended RAM 6GB/8GB)',
      storage: '128GB (รองรับใส่ MicroSD สูงสุด 1TB)',
      rearCamera: '50MP Main Camera (f/1.8) + Auxiliary Lens',
      frontCamera: '8MP (f/2.0)',
      battery: '5,000 mAh แบตเตอรี่อึดใช้งานได้ตลอดวัน',
      charging: '15W Fast Charging',
      os: 'Funtouch OS 14 บน Android 14',
      weight: '185 กรัม บาง 8.39 มม.',
      connectivity: '5G, Wi-Fi 5, Bluetooth 5.4, ลำโพงเร่งเสียง 150%, กันน้ำละออง IP64'
    },
    promotions: [
      'ราคาพิเศษ 6,299 บาท ที่ BaNANA IT',
      'ผ่อน 0% นาน 6 เดือน เพียงเดือนละ 1,050 บาท'
    ],
    freeGifts: [
      'หัวชาร์จและสายเคเบิลแท้',
      'เคสใส',
      'ฟิล์มกันรอย'
    ],
    warranty: 'ประกันศูนย์ไทย 1 ปีเต็ม',
    afterSales: 'บริการดูแลเครื่องฟรีที่ศูนย์บริการ vivo',
    highlightPoints: [
      'รองรับการเชื่อมต่อเครือข่าย 5G รวดเร็ว ในงบหกพันต้น',
      'ฝาหลังลายระยิบระยับ Twinkling Design สวยงามสะดุดตา',
      'มาตรฐานกันน้ำกันฝุ่น IP64 ปลอดภัยจากละอองน้ำและฝุ่นละออง',
      'หน้าจอ 90Hz สว่างสู้แดด สบายตา'
    ],
    limitations: [
      'ความเร็วในการชาร์จ 15W',
      'หน้าจอความละเอียด HD+'
    ],
    lastUpdated: '2026-10-20'
  },
  {
    id: 'bnn-vivo-y18',
    name: 'vivo Y18',
    category: 'mobile',
    brand: 'Vivo',
    price: 4499,
    originalPrice: 4499,
    rating: 4.6,
    reviewCount: 260,
    inStock: true,
    stockCount: 45,
    tags: ['งบสี่พันต้น', 'RAM 8GB แท้', 'กล้อง 50MP', 'จอ 90Hz สู้แดด 840 nits', 'แบต 5000mAh'],
    colors: [
      {
        name: 'ฟ้า Wave Aqua',
        hex: '#7dd3fc',
        overlayHex: '#7dd3fc',
        image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&w=900&q=80'
      },
      {
        name: 'น้ำตาลมอคค่า Mocha Brown',
        hex: '#4a3525',
        overlayHex: '#4a3525',
        image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=900&q=80'
      }
    ],
    defaultImage: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&w=900&q=80',
    specs: {
      screen: '6.56 นิ้ว 90Hz Sunlight Display, 840 nits สว่างมองเห็นชัดกลางแจ้ง, ถนอมสายตา TÜV',
      processor: 'MediaTek Helio G85 Octa-core',
      ram: '8GB (+ Extended RAM 8GB รวม 16GB)',
      storage: '128GB (รองรับ MicroSD สูงสุด 1TB)',
      rearCamera: '50MP Ultra-Clear (f/1.8) + Auxiliary Lens',
      frontCamera: '8MP (f/2.05) พร้อม Aura Screen Light',
      battery: '5,000 mAh แบตเตอรี่อึดใช้งานได้ทั้งวัน',
      charging: '15W Fast Charge',
      os: 'Funtouch OS 14 บน Android 14',
      weight: '185 กรัม บาง 8.39 มม.',
      connectivity: '4G LTE, Wi-Fi 5, Bluetooth 5.0, ช่องเสียบหูฟัง 3.5 มม., ลำโพงเร่งเสียง 150%, สแกนลายนิ้วมือด้านข้าง, IP54'
    },
    promotions: [
      'ราคาประหยัดคุ้มค่า 4,499 บาท ที่ BaNANA IT',
      'ผ่อน 0% นาน 3-6 เดือน บัตรเครดิตที่ร่วมรายการ'
    ],
    freeGifts: [
      'หัวชาร์จ 15W',
      'เคสใส',
      'ฟิล์มกันรอย'
    ],
    warranty: 'ประกันศูนย์ไทย 1 ปีเต็ม',
    afterSales: 'บริการอัปเดตระบบและให้คำแนะนำฟรีที่หน้าร้าน BaNANA IT',
    highlightPoints: [
      'ได้ RAM สูงถึง 8GB แท้ ในงบเพียง 4,499 บาท สลับแอปใช้งานทั่วไปได้ลื่นไหล ไม่ค้าง',
      'กล้องหลักความละเอียด 50MP ถ่ายภาพสวยคมชัด',
      'หน้าจอสว่าง 840 nits ลื่นไหล 90Hz ใช้งานกลางแดดได้ชัดเจน',
      'มีมาตรฐานกันน้ำละอองฝน IP54 และช่องเสียบหูฟัง 3.5 มม.'
    ],
    limitations: [
      'รองรับเครือข่าย 4G LTE',
      'ความเร็วชาร์จ 15W'
    ],
    lastUpdated: '2026-10-20'
  },
  {
    id: 'bnn-vivo-y03',
    name: 'vivo Y03',
    category: 'mobile',
    brand: 'Vivo',
    price: 3199,
    originalPrice: 3199,
    rating: 4.5,
    reviewCount: 230,
    inStock: true,
    stockCount: 60,
    tags: ['มือถือราคาประหยัดที่สุดของ vivo', 'งบสามพันต้น', 'จอ 90Hz สบายตา', 'แบต 5000mAh', 'กันน้ำ IP54'],
    colors: [
      {
        name: 'ดำ Space Black',
        hex: '#18181b',
        overlayHex: '#18181b',
        image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=900&q=80'
      },
      {
        name: 'เขียวมรกต Gem Green',
        hex: '#065f46',
        overlayHex: '#065f46',
        image: 'https://images.unsplash.com/photo-1565849904461-04a58ad377e0?auto=format&fit=crop&w=900&q=80'
      }
    ],
    defaultImage: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=900&q=80',
    specs: {
      screen: '6.56 นิ้ว 90Hz Sunlight Display, ความละเอียด HD+, ถนอมสายตา TÜV Rheinland',
      processor: 'MediaTek Helio G85 Octa-core',
      ram: '4GB (+ Extended RAM 4GB)',
      storage: '64GB / 128GB (รองรับใส่ MicroSD สูงสุด 1TB)',
      rearCamera: '13MP AI Main (f/2.2) + Auxiliary Lens',
      frontCamera: '5MP (f/2.2)',
      battery: '5,000 mAh แบตเตอรี่อึดใช้งานได้ตลอดวัน',
      charging: '15W Fast Charge',
      os: 'Funtouch OS 14 บน Android 14',
      weight: '185 กรัม บาง 8.39 มม.',
      connectivity: '4G LTE, Wi-Fi 5, Bluetooth 5.0, ช่องเสียบหูฟัง 3.5 มม., กันละอองน้ำ IP54'
    },
    promotions: [
      'ราคาโปรพิเศษ 3,199 บาท ที่ BaNANA IT',
      'ผ่อน 0% นาน 3 เดือน บัตรเครดิตที่ร่วมรายการ'
    ],
    freeGifts: [
      'หัวชาร์จและสายชาร์จ',
      'เคสใส',
      'ฟิล์มกันรอย'
    ],
    warranty: 'ประกันศูนย์ไทย 1 ปีเต็ม',
    afterSales: 'บริการตั้งค่าเครื่องและให้คำปรึกษาฟรีที่ BaNANA IT',
    highlightPoints: [
      'สมาร์ทโฟนราคาเข้าถึงง่ายที่สุดของ vivo เพียง 3,199 บาท',
      'ได้หน้าจอรีเฟรชเรท 90Hz ลื่นไหล สบายตากว่ามือถือราคาประหยัดทั่วไป',
      'ชิปเซ็ต Helio G85 ใช้งานทั่วไป ดูคลิป โซเชียล และแอปธนาคารได้ราบรื่น',
      'แบตเตอรี่ 5,000 mAh อยู่ได้ทั้งวัน'
    ],
    limitations: [
      'กล้องความละเอียด 13MP เหมาะสำหรับการถ่ายภาพทั่วไป',
      'ไม่มีเซนเซอร์สแกนลายนิ้วมือ (ใช้สแกนใบหน้า Face Access)'
    ],
    lastUpdated: '2026-10-20'
  },
  {
    id: 'bnn-vivo-x100-pro-5g',
    name: 'vivo X100 Pro 5G',
    category: 'mobile',
    brand: 'Vivo',
    price: 37990,
    originalPrice: 37990,
    rating: 4.9,
    reviewCount: 310,
    inStock: true,
    stockCount: 10,
    tags: ['สุดยอดเรือธงกล้อง ZEISS', 'เซนเซอร์ 1 นิ้ว Sony IMX989', 'เลนส์เทเล ZEISS APO ซูม 100x', 'ชิป V3', 'ชาร์จ 100W'],
    colors: [
      {
        name: 'ดำ Asteroid Black',
        hex: '#1f2421',
        overlayHex: '#1f2421',
        image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=900&q=80'
      },
      {
        name: 'ส้มหนัง Sunset Orange',
        hex: '#f97316',
        overlayHex: '#f97316',
        image: 'https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&w=900&q=80'
      }
    ],
    defaultImage: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=900&q=80',
    specs: {
      screen: '6.78 นิ้ว 1.5K LTPO AMOLED, 1-120Hz, ความสว่าง 3,000 nits, 2160Hz PWM Dimming ถนอมสายตา',
      processor: 'MediaTek Dimensity 9300 (4nm) All-Big-Core + ชิปประมวลผลภาพถ่ายระดับโปร vivo V3 Imaging Chip',
      ram: '16GB LPDDR5X',
      storage: '512GB UFS 4.0 ความเร็วสูงสุด',
      rearCamera: 'กล้องระดับตำนาน ZEISS: 50MP Sony IMX989 ขนาดใหญ่ 1 นิ้ว (f/1.75, OIS) + 50MP ZEISS APO Floating Periscope Telephoto 4.3x (OIS, ซูมดิจิทัลสูงสุด 100x) + 50MP Ultra-wide 119°',
      frontCamera: '32MP (f/2.0) คมชัดระดับโปร',
      battery: '5,400 mAh แบตเตอรี่ความจุใหญ่',
      charging: '100W Dual-Cell FlashCharge (ชาร์จ 50% ใน 12.5 นาที) + ชาร์จไร้สาย 50W Wireless FlashCharge',
      os: 'Funtouch OS 14 บน Android 14',
      weight: '225 กรัม ดีไซน์วงแหวนพระอาทิตย์ขึ้น Sun Halo Design หรูหรา',
      connectivity: '5G, Wi-Fi 7, Bluetooth 5.4, NFC, USB 3.2 Gen 1, ลำโพงคู่สเตอริโอ, กันน้ำกันฝุ่นมาตรฐาน IP68'
    },
    promotions: [
      'ราคาโปรพิเศษ 37,990 บาท ที่ BaNANA IT',
      'ผ่อน 0% นานสูงสุด 36 เดือน ผ่านบัตรที่ร่วมรายการ',
      'ฟรี ประกันหน้าจอแตกและประกันตัวเครื่อง 2 ปีเต็ม มูลค่า 10,000 บาท'
    ],
    freeGifts: [
      'หัวชาร์จแท้ 100W FlashCharge ในกล่อง',
      'เคสพรีเมียมลายพิเศษตรงรุ่น',
      'แท่นชาร์จไร้สาย vivo 50W Wireless Charger มูลค่า 2,490 บาท'
    ],
    warranty: 'ประกันศูนย์ไทย 2 ปีเต็ม (ประกันอุบัติเหตุหน้าจอแตก 2 ปี)',
    afterSales: 'บริการ VIP Service ช่องทางด่วนพิเศษและบริการเครื่องสำรองใช้งานระหว่างซ่อม',
    highlightPoints: [
      'กล้องเซนเซอร์ขนาดใหญ่ 1 นิ้วแท้ Sony IMX989 ถ่ายภาพกลางคืนและแสงน้อยได้มิติภาพและรายละเอียดเหนือชั้นที่สุด',
      'เลนส์เทเลโฟโต้ ZEISS APO Floating Periscope ถ่ายเทเลมาโครระยะใกล้ได้คมชัดมหัศจรรย์ และซูมไกลได้ถึง 100 เท่า',
      'ชิปประมวลผลคู่ Dimensity 9300 และชิป vivo V3 ถ่ายวิดีโอ 4K Cinematic Portrait ละลายหลังได้เนียนระดับภาพยนตร์',
      'ชาร์จไว 100W เสียบชาร์จเพียง 12 นาทีได้แบตเตอรี่เกินครึ่ง'
    ],
    limitations: [
      'ตัวเครื่องค่อนข้างหนาและมีน้ำหนัก 225 กรัมจากโมดูลกล้องขนาดใหญ่',
      'ราคาระดับเรือธงท็อป'
    ],
    lastUpdated: '2026-10-20'
  },
  {
    id: 'bnn-vivo-y100-5g',
    name: 'vivo Y100 5G',
    category: 'mobile',
    brand: 'Vivo',
    price: 7999,
    originalPrice: 8999,
    rating: 4.8,
    reviewCount: 310,
    inStock: true,
    stockCount: 35,
    tags: ['ฝาหลังหนัง Eco-Leather', 'ชาร์จไว 80W', 'จอ AMOLED 120Hz', 'ลำโพงคู่ 300%', 'ลดราคาพิเศษ'],
    colors: [
      {
        name: 'ม่วงหนังเทียม Purple Leather',
        hex: '#a855f7',
        overlayHex: '#a855f7',
        image: 'https://images.unsplash.com/photo-1589739900243-4b52cd9b104e?auto=format&fit=crop&w=900&q=80'
      },
      {
        name: 'ดำคริสตัล Crystal Black',
        hex: '#0f172a',
        overlayHex: '#0f172a',
        image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=900&q=80'
      }
    ],
    defaultImage: 'https://images.unsplash.com/photo-1589739900243-4b52cd9b104e?auto=format&fit=crop&w=900&q=80',
    specs: {
      screen: '6.67 นิ้ว Ultra Vision AMOLED FHD+, 120Hz, 1,200 nits, ระบบสแกนลายนิ้วมือบนหน้าจอ',
      processor: 'Qualcomm Snapdragon 4 Gen 2 (4nm) 5G',
      ram: '8GB (+ Extended RAM 8GB)',
      storage: '256GB (รองรับใส่ MicroSD สูงสุด 1TB)',
      rearCamera: '50MP Main (f/1.8) + 8MP Ultra-wide 120° + Flicker Sensor',
      frontCamera: '8MP (f/2.0)',
      battery: '5,000 mAh พร้อมการันตีสุขภาพแบต 4 ปี',
      charging: '80W FlashCharge (ชาร์จ 45% ในเวลาเพียง 15 นาที)',
      os: 'Funtouch OS 14 บน Android 14',
      weight: '191 กรัม ฝาหลังหนัง Eco-Leather กันรอยเปื้อนและรอยขีดข่วน',
      connectivity: '5G, Wi-Fi 5, Bluetooth 5.0, NFC, ลำโพงสเตอริโอคู่ Ultra Volume 300%, IP54'
    },
    promotions: [
      'ลดราคาพิเศษเหลือเพียง 7,999 บาท ที่ BaNANA IT (ปกติ 8,999.-)',
      'ผ่อน 0% นาน 10 เดือน เริ่มต้นเดือนละ 800 บาท'
    ],
    freeGifts: [
      'หัวชาร์จ 80W FlashCharge',
      'เคสใสกันกระแทก',
      'ฟิล์มกันรอยติดตั้งจากโรงงาน'
    ],
    warranty: 'ประกันศูนย์ไทย 1 ปีเต็ม พร้อมรับประกันสุขภาพแบต 4 ปี',
    afterSales: 'บริการเปลี่ยนแบตเตอรี่ฟรีหากสุขภาพแบตต่ำกว่า 80% ใน 4 ปี',
    highlightPoints: [
      'ฝาหลังหนังวีแกน Eco-Leather สีม่วง หรูหรา สัมผัสนุ่ม และไม่ติดรอยนิ้วมือ',
      'ระบบชาร์จเร็วสะใจ 80W FlashCharge ชาร์จไฟไวที่สุดในงบไม่เกินแปดพันบาท',
      'หน้าจอ AMOLED 120Hz สแกนลายนิ้วมือใต้หน้าจอ สีสันคมชัด สดใส',
      'ลำโพงคู่สเตอริโอเร่งเสียงได้ถึง 300%'
    ],
    limitations: [
      'กล้องหลักไม่มีระบบกันสั่น OIS',
      'กล้องหน้าความละเอียด 8MP'
    ],
    lastUpdated: '2026-10-20'
  },

  // ==========================================
  // BRAND 5: XIAOMI / REDMI / POCO (Lineup จากศูนย์ไทย)
  // ==========================================
  {
    id: 'bnn-xiaomi-15-pro-5g',
    name: 'Xiaomi 15 Pro 5G',
    category: 'mobile',
    brand: 'Xiaomi',
    price: 34990,
    originalPrice: 37990,
    rating: 4.9,
    reviewCount: 180,
    inStock: true,
    stockCount: 15,
    tags: ['เรือธง Snapdragon 8 Elite 3nm', 'กล้อง Leica Summilux 50MP 3 เลนส์', 'แบตเตอรี่ยักษ์ 6100 mAh', 'จอ 2K 120Hz LTPO', 'ชาร์จไว 90W + ไร้สาย 50W'],
    colors: [
      {
        name: 'เทาเงิน Liquid Silver Edition',
        hex: '#cbd5e1',
        overlayHex: '#cbd5e1',
        image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=900&q=80',
        images: [
          'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=900&q=80',
          'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=900&q=80'
        ]
      },
      {
        name: 'เขียวสปรูซ Spruce Green',
        hex: '#065f46',
        overlayHex: '#065f46',
        image: 'https://images.unsplash.com/photo-1565849904461-04a58ad377e0?auto=format&fit=crop&w=900&q=80'
      },
      {
        name: 'ดำคลาสสิก Classic Black',
        hex: '#09090b',
        overlayHex: '#09090b',
        image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=900&q=80'
      }
    ],
    defaultImage: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=900&q=80',
    specs: {
      screen: '6.73 นิ้ว 2K (3200x1440) Micro-Curved LTPO AMOLED, 1-120Hz, ความสว่างพีค 3,200 nits, กระจก Xiaomi Dragon Crystal Glass 2.0',
      processor: 'Qualcomm Snapdragon 8 Elite (3nm) สถาปัตยกรรม Oryon CPU ประสิทธิภาพระดับสูงสุด',
      ram: '16GB LPDDR5X (+ ขยาย RAM เสมือนได้ 16GB รวม 32GB)',
      storage: '512GB / 1TB UFS 4.0 ความเร็วสูงสุด',
      rearCamera: 'กล้องร่วมพัฒนา Leica 3 เลนส์ 50MP: 50MP Light Fusion 900 ขนาด 1/1.31 นิ้ว (f/1.44, OIS) + 50MP Sony IMX858 Periscope Telephoto 5x 120mm (ซูมดิจิทัล 120x, OIS) + 50MP Ultra-wide 115° เลนส์มาโคร',
      frontCamera: '32MP (f/2.0) รองรับ 4K 60fps HDR',
      battery: '6,100 mAh แบตเตอรี่ซิลิคอนคาร์บอนความหนาแน่นพลังงาน 850Wh/L สูงสุดในประวัติศาสตร์ Xiaomi',
      charging: '90W HyperCharge + 50W HyperCharge ไร้สาย และชาร์จย้อนกลับ 10W',
      os: 'Xiaomi HyperOS 2 บนพื้นฐาน Android 15 พร้อม HyperMind AI',
      weight: '213 กรัม ตัวเครื่องสมดุลน้ำหนัก 50:50 จับถือได้สบายมือ',
      connectivity: '5G Dual SIM, Wi-Fi 7, Bluetooth 5.4, NFC, IR Blaster, ลำโพงสเตอริโอคู่ Dolby Atmos, ผ่านการรับรองกันน้ำกันฝุ่น IP68'
    },
    promotions: [
      'ราคาโปรพิเศษช่วงเปิดตัว 34,990 บาท (ลดจากปกติ 37,990.-)',
      'ผ่อน 0% นานสูงสุด 24 เดือน (เพียงเดือนละ 1,458 บาท)',
      'ฟรี ประกันหน้าจอแตก 1 ครั้งภายใน 6 เดือนแรก'
    ],
    freeGifts: [
      'หัวชาร์จ 90W HyperCharge แท้ในกล่อง',
      'ชุดของขวัญ Xiaomi VIP Photography Gift Box',
      'เคสพรีเมียมและฟิล์มกระจก 9H'
    ],
    warranty: 'ประกันศูนย์ไทย Xiaomi ประเทศไทย 2 ปีเต็ม',
    afterSales: 'บริการ Fast Track ซ่อมด่วน และตรวจเช็กสภาพเครื่องฟรีที่ศูนย์บริการ Xiaomi ทั่วประเทศ',
    highlightPoints: [
      'ชิปเซ็ตประมวลผลเรือธง Snapdragon 8 Elite 3 นาโนเมตร เร็วแรงประหยัดแบตเตอรี่สูงสุด',
      'ระบบกล้อง Leica Summilux ครบ 3 เลนส์ 50MP พร้อมเลนส์ซูม Periscope 5x 120mm คมชัดทุกรายละเอียด',
      'แบตเตอรี่ความจุยักษ์ 6,100 mAh ในบอดี้ที่บางเบาเพียง 213 กรัม',
      'หน้าจอแสดงผล 2K Micro-Curved กระจก Dragon Crystal Glass 2.0 ทนทานต่อการตกกระแทก'
    ],
    limitations: [
      'ไม่มีช่องเสียบหูฟัง 3.5 มม.',
      'ไม่รองรับ MicroSD'
    ],
    lastUpdated: '2026-10-20'
  },
  {
    id: 'bnn-xiaomi-15-5g',
    name: 'Xiaomi 15 5G',
    category: 'mobile',
    brand: 'Xiaomi',
    price: 26990,
    originalPrice: 28990,
    rating: 4.8,
    reviewCount: 220,
    inStock: true,
    stockCount: 18,
    tags: ['เรือธงไซส์กะทัดรัดขอบจอบาง 1.38 มม.', 'ชิป Snapdragon 8 Elite 3nm', 'กล้อง Leica Summilux 50MP 3 ตัว', 'แบต 5400 mAh', 'กันน้ำ IP68'],
    colors: [
      {
        name: 'ขาวไวท์ White',
        hex: '#f8fafc',
        overlayHex: '#f8fafc',
        image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=900&q=80'
      },
      {
        name: 'เขียวอ่อน Light Green',
        hex: '#a7f3d0',
        overlayHex: '#a7f3d0',
        image: 'https://images.unsplash.com/photo-1565849904461-04a58ad377e0?auto=format&fit=crop&w=900&q=80'
      },
      {
        name: 'ดำแบล็ก Black',
        hex: '#09090b',
        overlayHex: '#09090b',
        image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=900&q=80'
      }
    ],
    defaultImage: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=900&q=80',
    specs: {
      screen: '6.36 นิ้ว 1.5K 120Hz LTPS OLED, ขอบจอบางเฉียบสมมาตร 1.38 มม. สี่ด้าน, ความสว่างพีค 3,200 nits, กระจก Dragon Crystal Glass',
      processor: 'Qualcomm Snapdragon 8 Elite (3nm) เรือธงตัวท็อป',
      ram: '12GB / 16GB LPDDR5X',
      storage: '256GB / 512GB UFS 4.0',
      rearCamera: 'กล้อง Leica 3 ตัว 50MP: 50MP Light Fusion 900 (f/1.62, OIS) + 50MP Leica Telephoto 60mm (ซูม 3.2x, OIS) + 50MP Leica Ultra-wide 115°',
      frontCamera: '32MP (f/2.0)',
      battery: '5,400 mAh แบตเตอรี่ความจุใหญ่พิเศษในบอดี้กะทัดรัด',
      charging: '90W HyperCharge + 50W ไร้สาย Wireless HyperCharge',
      os: 'Xiaomi HyperOS 2 บน Android 15',
      weight: '191 กรัม ความกว้างตัวเครื่องเพียง 71.2 มม. จับกระชับมือเดียว',
      connectivity: '5G Dual SIM, Wi-Fi 7, Bluetooth 5.4, NFC, IR Blaster, ลำโพงสเตอริโอคู่, กันน้ำกันฝุ่น IP68'
    },
    promotions: [
      'ราคาโปรโมชั่นเปิดตัว 26,990 บาท (ลดจากปกติ 28,990.-)',
      'ผ่อน 0% นานสูงสุด 18 เดือน เริ่มต้นเดือนละ 1,499 บาท',
      'ฟรี ประกันจอแตก 6 เดือนแรก'
    ],
    freeGifts: [
      'หัวชาร์จแท้ 90W HyperCharge',
      'เคสพรีเมียม',
      'ฟิล์มกันรอย'
    ],
    warranty: 'ประกันศูนย์ไทย 2 ปีเต็ม',
    afterSales: 'บริการอัปเกรดระบบและทำความสะอาดเครื่องฟรีที่ศูนย์บริการ Xiaomi',
    highlightPoints: [
      'สมาร์ทโฟนเรือธงขนาดกะทัดรัด 6.36 นิ้ว จับถือมือเดียวได้สมบูรณ์แบบด้วยขอบจอบางเฉียบ 1.38 มม.',
      'ชิป Snapdragon 8 Elite 3nm แรงระดับท็อปของโลกในขนาดเครื่องพกพาสะดวก',
      'กล้อง Leica Summilux 3 ตัว 50MP ถ่ายภาพสวยคมชัดโทนสี Leica อันเป็นเอกลักษณ์',
      'แบตเตอรี่อัปเกรดใหญ่ขึ้นเป็น 5,400 mAh พร้อมระบบชาร์จไว 90W และชาร์จไร้สาย 50W'
    ],
    limitations: [
      'ไม่มีเลนส์ซูม Periscope ระยะไกล 5x (มีในรุ่น Pro)',
      'ไม่มีช่องเสียบหูฟัง 3.5 มม.'
    ],
    lastUpdated: '2026-10-20'
  },
  {
    id: 'bnn-xiaomi-14t-pro-5g',
    name: 'Xiaomi 14T Pro 5G',
    category: 'mobile',
    brand: 'Xiaomi',
    price: 21990,
    originalPrice: 24990,
    rating: 4.9,
    reviewCount: 460,
    inStock: true,
    stockCount: 20,
    tags: ['กล้อง Leica Summilux', 'เซนเซอร์ Light Fusion 900', 'ชาร์จไว 120W', 'ชิป Dimensity 9300+', 'กันน้ำ IP68'],
    colors: [
      {
        name: 'เทาไททัน Titan Gray',
        hex: '#4b5563',
        overlayHex: '#4b5563',
        image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=900&q=80',
        images: [
          'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=900&q=80',
          'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=900&q=80'
        ]
      },
      {
        name: 'ดำไททัน Titan Black',
        hex: '#111827',
        overlayHex: '#111827',
        image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=900&q=80'
      },
      {
        name: 'น้ำเงินไททัน Titan Blue',
        hex: '#1e3a8a',
        overlayHex: '#1e3a8a',
        image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&w=900&q=80'
      }
    ],
    defaultImage: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=900&q=80',
    specs: {
      screen: '6.67 นิ้ว 1.5K CrystalRes AMOLED, 144Hz AI Display, ความสว่างสูงสุด 4,000 nits, Dolby Vision, HDR10+',
      processor: 'MediaTek Dimensity 9300+ (4nm) All-Big-Core ระดับแฟลกชิป คะแนน AnTuTu ทะลุ 2 ล้านคะแนน',
      ram: '12GB LPDDR5X (8533Mbps)',
      storage: '512GB / 1TB UFS 4.0 ความเร็วสูงระดับสูงสุด',
      rearCamera: 'กล้องร่วมพัฒนา Leica: 50MP Light Fusion 900 (f/1.6, OIS) + 50MP Leica Telephoto 2.6x (60mm, OIS) + 12MP Leica Ultra-wide 120°',
      frontCamera: '32MP (f/2.0) รองรับ 4K HDR10+ และเซลฟี่มุมกว้าง',
      battery: '5,000 mAh พร้อมระบบจัดการแบตเตอรี่ Xiaomi Surge G1',
      charging: '120W HyperCharge ชาร์จเต็ม 100% ใน 19 นาที + ชาร์จไร้สาย 50W HyperCharge (45 นาทีเต็ม)',
      os: 'Xiaomi HyperOS บนพื้นฐาน Android 14 พร้อม Xiaomi AISP และ Google Gemini',
      weight: '209 กรัม กรอบอะลูมิเนียมอัลลอยด์ความแข็งแรงสูง 6M13',
      connectivity: '5G Dual SIM, Wi-Fi 7, Bluetooth 5.4, NFC, ลำโพงคู่ Dolby Atmos, มาตรฐานกันน้ำกันฝุ่น IP68'
    },
    promotions: [
      'ราคาโปรโมชั่นพิเศษ 21,990 บาท ที่ BaNANA IT (ปกติ 24,990.-)',
      'ผ่อน 0% นานสูงสุด 24 เดือน เริ่มต้นเพียงเดือนละ 916 บาท',
      'ฟรีของแถม Xiaomi 120W GaN Charging Box Set และหูฟังบลูทูธ'
    ],
    freeGifts: [
      'หัวชาร์จ 120W HyperCharge แท้ในกล่อง',
      'เคสพรีเมียม Matte Finish',
      'ประกันหน้าจอแตก 1 ครั้งภายใน 6 เดือนแรก'
    ],
    warranty: 'ประกันศูนย์ไทย 2 ปีเต็ม (รับประกันจอแตก 6 เดือนแรก)',
    afterSales: 'บริการส่งเคลมด่วนผ่านสาขา BaNANA IT ทั่วประเทศ, ตรวจเช็กระบบฟรี',
    highlightPoints: [
      'เลนส์ออปติคอล Leica Summilux รูรับแสง f/1.6 เก็บแสงได้มากขึ้น 32% ให้ภาพโทน Leica Authentic & Vibrant เป็นเอกลักษณ์',
      'ชาร์จไวสุดพลัง 120W HyperCharge พร้อมชาร์จไร้สาย 50W เป็นรุ่นแรกในตระกูล T-Series',
      'ชิป Dimensity 9300+ ตัวท็อป ประสิทธิภาพกราฟิกเทียบเคียงพีซี เล่นเกมปรับกราฟิกสุดได้ทุกเกม',
      'หน้าจอ CrystalRes AMOLED 144Hz ความสว่าง 4,000 nits คมชัดและสู้แดดได้ดีที่สุด'
    ],
    limitations: [
      'ไม่มีช่องเสียบหูฟัง 3.5 มม.',
      'ไม่รองรับ MicroSD'
    ],
    lastUpdated: '2026-10-20'
  },
  {
    id: 'bnn-xiaomi-14t-5g',
    name: 'Xiaomi 14T 5G',
    category: 'mobile',
    brand: 'Xiaomi',
    price: 15990,
    originalPrice: 17990,
    rating: 4.8,
    reviewCount: 390,
    inStock: true,
    stockCount: 30,
    tags: ['กล้อง Leica Vario-Summilux', 'จอ AMOLED 144Hz', 'Dimensity 8300-Ultra', 'กันน้ำ IP68', 'คุ้มค่าสุด'],
    colors: [
      {
        name: 'เทา Titan Gray',
        hex: '#4b5563',
        overlayHex: '#4b5563',
        image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=900&q=80'
      },
      {
        name: 'ดำ Titan Black',
        hex: '#111827',
        overlayHex: '#111827',
        image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=900&q=80'
      },
      {
        name: 'น้ำเงิน Titan Blue',
        hex: '#1e3a8a',
        overlayHex: '#1e3a8a',
        image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&w=900&q=80'
      },
      {
        name: 'เขียวมะนาว Lemon Green (หนังวีแกน)',
        hex: '#a3e635',
        overlayHex: '#a3e635',
        image: 'https://images.unsplash.com/photo-1565849904461-04a58ad377e0?auto=format&fit=crop&w=900&q=80'
      }
    ],
    defaultImage: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=900&q=80',
    specs: {
      screen: '6.67 นิ้ว 1.5K AMOLED, 144Hz, ความสว่าง 4,000 nits, Dolby Vision, HDR10+, ขอบจอบางเฉียบ 1.7 มม.',
      processor: 'MediaTek Dimensity 8300-Ultra (4nm) คะแนน AnTuTu กว่า 1.4 ล้าน',
      ram: '12GB LPDDR5X',
      storage: '256GB / 512GB UFS 4.0',
      rearCamera: 'กล้องร่วมพัฒนา Leica: 50MP Sony IMX906 (f/1.7, OIS) + 50MP Leica Telephoto (50mm) + 12MP Leica Ultra-wide 120°',
      frontCamera: '32MP (f/2.0) ถ่ายเซลฟี่คมชัด',
      battery: '5,000 mAh ใช้งานต่อเนื่องได้ยาวนาน 15 ชั่วโมง',
      charging: '67W HyperCharge (ชาร์จ 100% ภายใน 45 นาที)',
      os: 'Xiaomi HyperOS บนพื้นฐาน Android 14',
      weight: '195 กรัม บางเพียง 7.80 มม.',
      connectivity: '5G, Wi-Fi 6E, Bluetooth 5.4, NFC, ลำโพงสเตอริโอคู่ Hi-Res, กันน้ำกันฝุ่น IP68'
    },
    promotions: [
      'ราคาโปรพิเศษ 15,990 บาท ที่ BaNANA IT (ลดจาก 17,990.-)',
      'ผ่อน 0% นาน 18 เดือน เริ่มต้นเดือนละ 888 บาท',
      'รับสิทธิ์ซ่อมหน้าจอแตกฟรี 1 ครั้ง ภายใน 6 เดือน'
    ],
    freeGifts: [
      'หัวชาร์จ 67W HyperCharge แท้',
      'เคสใสกันกระแทก',
      'ฟิล์มกันรอยติดตั้งเรียบร้อย'
    ],
    warranty: 'ประกันศูนย์ไทย 2 ปีเต็ม (ประกันจอแตก 6 เดือนแรก)',
    afterSales: 'บริการอัปเดตระบบและทำความสะอาดเครื่องฟรีที่ศูนย์บริการ',
    highlightPoints: [
      'ได้กล้อง Leica ครบทั้ง 3 ระยะ (Main 50MP, Telephoto 50MP, Ultra-wide 12MP) ในราคาหมื่นกลาง',
      'หน้าจอ 144Hz CrystalRes AMOLED สว่างสูงสุด 4,000 nits ลื่นไหลและสวยสะกดตา',
      'มาตรฐานกันน้ำระดับเรือธง IP68 ดำน้ำลึก 2 เมตร นาน 30 นาที',
      'ชิป Dimensity 8300-Ultra แรงเหลือเฟือสำหรับทุกเกมและการใช้งาน'
    ],
    limitations: [
      'ไม่มีระบบชาร์จไร้สาย (รุ่น Pro มีชาร์จไร้สาย 50W)',
      'ความเร็วชาร์จสาย 67W (รุ่น Pro ชาร์จ 120W)'
    ],
    lastUpdated: '2026-10-20'
  },
  {
    id: 'bnn-xiaomi-14-5g',
    name: 'Xiaomi 14',
    category: 'mobile',
    brand: 'Xiaomi',
    price: 26990,
    originalPrice: 29990,
    rating: 4.9,
    reviewCount: 320,
    inStock: true,
    stockCount: 12,
    tags: ['เรือธงไซซ์กะทัดรัด 6.36 นิ้ว', 'กล้อง Leica 50MP 3 ตัว', 'ชิป Snapdragon 8 Gen 3', 'จอ LTPO 120Hz', 'ชาร์จ 90W'],
    colors: [
      {
        name: 'เขียวหยก Jade Green',
        hex: '#2d6a4f',
        overlayHex: '#2d6a4f',
        image: 'https://images.unsplash.com/photo-1565849904461-04a58ad377e0?auto=format&fit=crop&w=900&q=80'
      },
      {
        name: 'ดำ Black',
        hex: '#1f2421',
        overlayHex: '#1f2421',
        image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=900&q=80'
      },
      {
        name: 'ขาว White',
        hex: '#f8fafc',
        overlayHex: '#f8fafc',
        image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=900&q=80'
      }
    ],
    defaultImage: 'https://images.unsplash.com/photo-1565849904461-04a58ad377e0?auto=format&fit=crop&w=900&q=80',
    specs: {
      screen: '6.36 นิ้ว 1.5K LTPO OLED, 1-120Hz, ความสว่าง 3,000 nits, ขอบจอบางเฉียบเป็นพิเศษ 1.61 มม.',
      processor: 'Qualcomm Snapdragon 8 Gen 3 (4nm) ชิปเซ็ตระดับท็อป',
      ram: '12GB LPDDR5X',
      storage: '512GB UFS 4.0',
      rearCamera: 'กล้องร่วมพัฒนา Leica: 50MP Light Fusion 900 OIS (f/1.6) + 50MP Leica Floating Telephoto 75mm (OIS, ซูม 3.2x และถ่ายมาโคร 10 ซม.) + 50MP Ultra-wide 115°',
      frontCamera: '32MP (f/2.0) ถ่ายวิดีโอ 4K 60fps',
      battery: '4,610 mAh แบตเตอรี่ความหนาแน่นสูง',
      charging: '90W HyperCharge (ชาร์จ 100% ใน 31 นาที) + ชาร์จไร้สาย 50W HyperCharge',
      os: 'Xiaomi HyperOS บน Android 14',
      weight: '193 กรัม พกพาง่าย จับกระชับมือที่สุด',
      connectivity: '5G, Wi-Fi 7, Bluetooth 5.4, USB 3.2 Gen 1, กันน้ำกันฝุ่น IP68'
    },
    promotions: [
      'ลดราคาพิเศษ 3,000 บาทที่ BaNANA IT (เหลือเพียง 26,990.- จากปกติ 29,990.-)',
      'ผ่อน 0% นาน 24 เดือน เริ่มต้นเดือนละ 1,125 บาท'
    ],
    freeGifts: [
      'หัวชาร์จ 90W HyperCharge แท้',
      'เคสพรีเมียม',
      'ประกันหน้าจอแตก 6 เดือน'
    ],
    warranty: 'ประกันศูนย์ไทย 2 ปีเต็ม',
    afterSales: 'บริการระดับพรีเมียม VIP Service ที่ศูนย์บริการ Xiaomi',
    highlightPoints: [
      'ขนาดหน้าจอ 6.36 นิ้ว กะทัดรัด จับถือและพิมพ์มือเดียวได้สะดวกสบายอย่างแท้จริง',
      'กล้อง Leica Vario-Summilux ความละเอียด 50MP ครบทุกตัว และเลนส์ Floating Telephoto ถ่ายมาโครระยะใกล้ได้สวยจนน่าทึ่ง',
      'ชิป Snapdragon 8 Gen 3 เร็วแรงระดับเรือธงสูงสุด',
      'รองรับชาร์จไวทั้งแบบสาย 90W และไร้สาย 50W'
    ],
    limitations: [
      'ความจุแบตเตอรี่ 4,610 mAh น้อยกว่ารุ่นจอใหญ่เล็กน้อยตามขนาดตัวเครื่อง',
      'ไม่มีช่องใส่ MicroSD'
    ],
    lastUpdated: '2026-10-20'
  },
  {
    id: 'bnn-redmi-note-13-pro-plus-5g',
    name: 'Redmi Note 13 Pro+ 5G',
    category: 'mobile',
    brand: 'Xiaomi',
    price: 13990,
    originalPrice: 15990,
    rating: 4.8,
    reviewCount: 580,
    inStock: true,
    stockCount: 28,
    tags: ['กล้อง 200MP OIS', 'จอโค้ง 1.5K AMOLED', 'ชาร์จไว 120W', 'กันน้ำ IP68', 'ตัวท็อปซีรีส์ Note'],
    colors: [
      {
        name: 'ม่วงออโรร่า Aurora Purple (ตัดต่อสี)',
        hex: '#c084fc',
        overlayHex: '#c084fc',
        image: 'https://images.unsplash.com/photo-1589739900243-4b52cd9b104e?auto=format&fit=crop&w=900&q=80'
      },
      {
        name: 'ดำมิดไนท์ Midnight Black',
        hex: '#18181b',
        overlayHex: '#18181b',
        image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=900&q=80'
      },
      {
        name: 'ขาวมุกแสงจันทร์ Moonlight White',
        hex: '#f8fafc',
        overlayHex: '#f8fafc',
        image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=900&q=80'
      }
    ],
    defaultImage: 'https://images.unsplash.com/photo-1589739900243-4b52cd9b104e?auto=format&fit=crop&w=900&q=80',
    specs: {
      screen: '6.67 นิ้ว Curved CrystalRes AMOLED 1.5K, 120Hz, 1,800 nits, กระจก Gorilla Glass Victus',
      processor: 'MediaTek Dimensity 7200-Ultra (4nm) Octa-core 2.8GHz',
      ram: '12GB LPDDR5',
      storage: '512GB UFS 3.1 ความจุจุใจ',
      rearCamera: '200MP Samsung ISOCELL HP3 (f/1.65, OIS กันสั่น, ซูม 2x/4x In-sensor Zoom) + 8MP Ultra-wide + 2MP Macro',
      frontCamera: '16MP (f/2.4) ถ่ายเซลฟี่คมชัด',
      battery: '5,000 mAh พร้อมระบบระบายความร้อน VC ขนาด 4,000 ตร.มม.',
      charging: '120W HyperCharge (ชาร์จ 1-100% ในเวลาเพียง 19 นาที)',
      os: 'MIUI 14 / อัปเดต HyperOS บน Android 14',
      weight: '204 กรัม ดีไซน์พรีเมียม',
      connectivity: '5G Dual SIM, Wi-Fi 6, Bluetooth 5.3, NFC, ลำโพงสเตอริโอ Dolby Atmos, มาตรฐานกันน้ำระดับเรือธง IP68'
    },
    promotions: [
      'ราคาโปรโมชั่น 13,990 บาท ที่ BaNANA IT (ลดจาก 15,990.-)',
      'ผ่อน 0% นาน 10 เดือน เพียงเดือนละ 1,399 บาท',
      'ฟรี กระเป๋าเป้ Xiaomi Casual Backpack'
    ],
    freeGifts: [
      'หัวชาร์จ 120W HyperCharge แท้',
      'เคสยางกันกระแทกสีดำ',
      'ฟิล์มกันรอยหน้าจอโค้ง'
    ],
    warranty: 'ประกันศูนย์ไทย 15 เดือนเต็ม (ประกันจอแตก 6 เดือน)',
    afterSales: 'บริการตรวจเช็กและทำความสะอาดเครื่องฟรีที่สาขา BaNANA',
    highlightPoints: [
      'กล้อง 200MP มีระบบกันสั่น OIS ซูมดิจิทัล 4x คมชัดเทียบเท่าออปติคอลซูม',
      'เป็นรุ่นแรกของตระกูล Redmi Note ที่ได้มาตรฐานกันน้ำกันฝุ่นระดับ IP68',
      'ระบบชาร์จเร็ว 120W HyperCharge ชาร์จเต็มไวที่สุดในงบหมื่นต้น',
      'หน้าจอขอบโค้ง 1.5K CrystalRes AMOLED สวยงามระดับสมาร์ทโฟนราคาแพง'
    ],
    limitations: [
      'ไม่มีช่องเสียบหูฟัง 3.5 มม.',
      'ไม่รองรับ MicroSD'
    ],
    lastUpdated: '2026-10-20'
  },
  {
    id: 'bnn-redmi-note-13-pro-5g',
    name: 'Redmi Note 13 Pro 5G',
    category: 'mobile',
    brand: 'Xiaomi',
    price: 10990,
    originalPrice: 12990,
    rating: 4.8,
    reviewCount: 440,
    inStock: true,
    stockCount: 35,
    tags: ['กล้อง 200MP OIS', 'จอแบน 1.5K 120Hz', 'ชิป Snapdragon 7s Gen 2', 'แบต 5100mAh', 'ลดราคาพิเศษ'],
    colors: [
      {
        name: 'ดำ Midnight Black',
        hex: '#18181b',
        overlayHex: '#18181b',
        image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=900&q=80'
      },
      {
        name: 'ฟ้าโอเชียน Ocean Teal',
        hex: '#2dd4bf',
        overlayHex: '#2dd4bf',
        image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&w=900&q=80'
      },
      {
        name: 'ม่วง Aurora Purple',
        hex: '#c084fc',
        overlayHex: '#c084fc',
        image: 'https://images.unsplash.com/photo-1589739900243-4b52cd9b104e?auto=format&fit=crop&w=900&q=80'
      }
    ],
    defaultImage: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=900&q=80',
    specs: {
      screen: '6.67 นิ้ว Flat AMOLED 1.5K, 120Hz, 1,800 nits, กระจก Corning Gorilla Glass Victus',
      processor: 'Qualcomm Snapdragon 7s Gen 2 (4nm) Octa-core 2.4GHz',
      ram: '12GB',
      storage: '512GB UFS 2.2',
      rearCamera: '200MP (f/1.65, OIS กันสั่น) + 8MP Ultra-wide + 2MP Macro',
      frontCamera: '16MP (f/2.4)',
      battery: '5,100 mAh แบตใหญ่ใช้งานข้ามวัน',
      charging: '67W Turbo Charging (ชาร์จ 100% ใน 44 นาที)',
      os: 'MIUI 14 / อัปเดต HyperOS บน Android 14',
      weight: '187 กรัม ขอบจอแบน จับถนัดมือ',
      connectivity: '5G, Wi-Fi 5, Bluetooth 5.2, ช่องเสียบหูฟัง 3.5 มม., ลำโพงคู่ Dolby Atmos, สแกนนิ้วบนหน้าจอ'
    },
    promotions: [
      'ราคาพิเศษ 10,990 บาท ที่ BaNANA IT (ลดจาก 12,990.-)',
      'ผ่อน 0% นาน 10 เดือน เริ่มต้นเดือนละ 1,099 บาท'
    ],
    freeGifts: [
      'หัวชาร์จ 67W Turbo Charge',
      'เคสใสกันกระแทก',
      'ฟิล์มกระจก 9H'
    ],
    warranty: 'ประกันศูนย์ไทย 15 เดือนเต็ม',
    afterSales: 'บริการอัปเดตระบบและทำความสะอาดเครื่องฟรีที่สาขา BaNANA',
    highlightPoints: [
      'กล้องความละเอียดสูงระดับ 200MP มี OIS ถ่ายภาพคมชัดซูมครอปได้หลายระยะ',
      'หน้าจอแบน Flat AMOLED 1.5K ขอบบาง ใช้กระจก Victus ทนต่อรอยขีดข่วน',
      'มีช่องเสียบหูฟัง 3.5 มม. และลำโพงคู่ Dolby Atmos ครบครันสำหรับความบันเทิง',
      'ได้ความจุ 512GB และ RAM 12GB สเปกจัดเต็มในงบหมื่นต้น'
    ],
    limitations: [
      'มาตรฐานกันน้ำระดับ IP54 (กันน้ำละออง)',
      'ไม่รองรับ MicroSD'
    ],
    lastUpdated: '2026-10-20'
  },
  {
    id: 'bnn-redmi-note-13-5g',
    name: 'Redmi Note 13 5G',
    category: 'mobile',
    brand: 'Xiaomi',
    price: 6999,
    originalPrice: 7999,
    rating: 4.7,
    reviewCount: 360,
    inStock: true,
    stockCount: 45,
    tags: ['มือถือ 5G ขอบจอบางเฉียบ', 'กล้อง 108MP', 'จอ AMOLED 120Hz', 'น้ำหนักเบา 174 กรัม', 'งบไม่เกินเจ็ดพัน'],
    colors: [
      {
        name: 'ดำ Graphite Black',
        hex: '#262626',
        overlayHex: '#262626',
        image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=900&q=80'
      },
      {
        name: 'ฟ้า Ocean Teal',
        hex: '#38bdf8',
        overlayHex: '#38bdf8',
        image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&w=900&q=80'
      },
      {
        name: 'ขาว Arctic White',
        hex: '#f1f5f9',
        overlayHex: '#f1f5f9',
        image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=900&q=80'
      }
    ],
    defaultImage: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=900&q=80',
    specs: {
      screen: '6.67 นิ้ว AMOLED FHD+, 120Hz, 1,000 nits, ขอบจอบางเฉียบเพียง 1.5 มม., กระจก Gorilla Glass 5',
      processor: 'MediaTek Dimensity 6080 (6nm) 5G Octa-core',
      ram: '8GB (+ Extended RAM ได้ 8GB)',
      storage: '256GB (รองรับใส่ MicroSD สูงสุด 1TB)',
      rearCamera: '108MP Main (f/1.7, ซูม 3x ไร้การสูญเสีย) + 8MP Ultra-wide + 2MP Macro',
      frontCamera: '16MP (f/2.4)',
      battery: '5,000 mAh ใช้งานได้เต็มวัน',
      charging: '33W Fast Charging',
      os: 'MIUI 14 / อัปเดต HyperOS บน Android 14',
      weight: '174.5 กรัม บางเฉียบเพียง 7.6 มม.',
      connectivity: '5G, Wi-Fi 5, Bluetooth 5.3, ช่องเสียบหูฟัง 3.5 มม., สแกนนิ้วด้านข้าง, IP54'
    },
    promotions: [
      'ราคาโปรพิเศษ 6,999 บาท ที่ BaNANA IT (ลดจาก 7,999.-)',
      'ผ่อน 0% นาน 6 เดือน เดือนละ 1,166 บาท'
    ],
    freeGifts: [
      'หัวชาร์จ 33W แท้',
      'เคสใส',
      'ฟิล์มกันรอย'
    ],
    warranty: 'ประกันศูนย์ไทย 15 เดือนเต็ม',
    afterSales: 'บริการตรวจเช็กและอัปเดตระบบฟรีที่สาขา BaNANA',
    highlightPoints: [
      'ขอบหน้าจอบางเฉียบเพียง 1.5 มม. หน้าจอ AMOLED 120Hz สวยงามเต็มตา',
      'ตัวเครื่องบางเพียง 7.6 มม. น้ำหนักเบามากเพียง 174.5 กรัม จับถนัดมือ',
      'กล้องหลัก 108MP ซูมคมชัด 3x ในเซนเซอร์',
      'รองรับ 5G และยังคงมีช่องเสียบหูฟัง 3.5 มม. พร้อมใส่ MicroSD ได้'
    ],
    limitations: [
      'ลำโพงเดี่ยว (ไม่มีลำโพงคู่สเตอริโอ)',
      'ความเร็วชาร์จ 33W'
    ],
    lastUpdated: '2026-10-20'
  },
  {
    id: 'bnn-redmi-note-13-4g',
    name: 'Redmi Note 13',
    category: 'mobile',
    brand: 'Xiaomi',
    price: 5499,
    originalPrice: 6499,
    rating: 4.7,
    reviewCount: 480,
    inStock: true,
    stockCount: 50,
    tags: ['สแกนนิ้วใต้จอ', 'จอ AMOLED 120Hz สว่าง 1800 nits', 'กล้อง 108MP', 'ลำโพงคู่ Dolby Atmos', 'สุดคุ้ม'],
    colors: [
      {
        name: 'ดำ Midnight Black',
        hex: '#18181b',
        overlayHex: '#18181b',
        image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=900&q=80'
      },
      {
        name: 'ฟ้า Ice Blue',
        hex: '#93c5fd',
        overlayHex: '#93c5fd',
        image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&w=900&q=80'
      },
      {
        name: 'เขียว Mint Green',
        hex: '#a7f3d0',
        overlayHex: '#a7f3d0',
        image: 'https://images.unsplash.com/photo-1565849904461-04a58ad377e0?auto=format&fit=crop&w=900&q=80'
      }
    ],
    defaultImage: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=900&q=80',
    specs: {
      screen: '6.67 นิ้ว AMOLED FHD+, 120Hz, ความสว่างสูงสุด 1,800 nits, กระจก Gorilla Glass 3',
      processor: 'Qualcomm Snapdragon 685 (6nm) Octa-core',
      ram: '8GB (+ Extended RAM ได้ 8GB)',
      storage: '256GB (รองรับใส่ MicroSD สูงสุด 1TB)',
      rearCamera: '108MP (f/1.75, ซูม 3x In-sensor) + 8MP Ultra-wide + 2MP Macro',
      frontCamera: '16MP (f/2.4)',
      battery: '5,000 mAh ใช้งานได้ยาวนาน',
      charging: '33W Fast Charging',
      os: 'MIUI 14 / อัปเดต HyperOS บน Android 14',
      weight: '188.5 กรัม',
      connectivity: '4G LTE, Wi-Fi 5, Bluetooth 5.1, ช่องเสียบหูฟัง 3.5 มม., ลำโพงคู่สเตอริโอ Dolby Atmos, สแกนนิ้วใต้หน้าจอ'
    },
    promotions: [
      'ราคาโปรพิเศษ 5,499 บาท ที่ BaNANA IT (ลดจาก 6,499.-)',
      'ผ่อน 0% นาน 6 เดือน เดือนละ 916 บาท'
    ],
    freeGifts: [
      'หัวชาร์จ 33W',
      'เคสใส',
      'ฟิล์มกันรอย'
    ],
    warranty: 'ประกันศูนย์ไทย 15 เดือนเต็ม',
    afterSales: 'บริการตรวจเช็กและอัปเดตระบบฟรีที่สาขา BaNANA',
    highlightPoints: [
      'รุ่นเดียวในงบไม่เกิน 5,500 บาทที่ได้เซนเซอร์สแกนลายนิ้วมือบนหน้าจอ (In-display Fingerprint)',
      'หน้าจอ AMOLED 120Hz สว่างสูงถึง 1,800 nits สู้แดดจ้าได้ชัดเจน',
      'ลำโพงคู่สเตอริโอ Dolby Atmos เสียงมีมิติรอบทิศทาง',
      'กล้อง 108MP คมชัดสูง ซูม 3x โดยภาพยังคงคมชัด'
    ],
    limitations: [
      'รองรับ 4G LTE (ไม่รองรับ 5G)',
      'กล้องไม่มีระบบกันสั่น OIS'
    ],
    lastUpdated: '2026-10-20'
  },
  {
    id: 'bnn-redmi-13c',
    name: 'Redmi 13C',
    category: 'mobile',
    brand: 'Xiaomi',
    price: 3999,
    originalPrice: 4499,
    rating: 4.6,
    reviewCount: 310,
    inStock: true,
    stockCount: 60,
    tags: ['งบไม่เกินสี่พัน', 'ความจุ 256GB', 'RAM 8GB', 'จอ 90Hz', 'ชาร์จ Type-C'],
    colors: [
      {
        name: 'ดำ Midnight Black',
        hex: '#18181b',
        overlayHex: '#18181b',
        image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=900&q=80'
      },
      {
        name: 'น้ำเงิน Navy Blue',
        hex: '#1e3a8a',
        overlayHex: '#1e3a8a',
        image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&w=900&q=80'
      },
      {
        name: 'เขียว Clover Green',
        hex: '#4ade80',
        overlayHex: '#4ade80',
        image: 'https://images.unsplash.com/photo-1565849904461-04a58ad377e0?auto=format&fit=crop&w=900&q=80'
      },
      {
        name: 'ขาว Glacier White',
        hex: '#f8fafc',
        overlayHex: '#f8fafc',
        image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=900&q=80'
      }
    ],
    defaultImage: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=900&q=80',
    specs: {
      screen: '6.74 นิ้ว Dot Drop Display, 90Hz, ความสว่าง 600 nits, กระจก Corning Gorilla Glass',
      processor: 'MediaTek Helio G85 Octa-core',
      ram: '8GB (+ Extended RAM 8GB รวม 16GB)',
      storage: '256GB (รองรับใส่ MicroSD สูงสุด 1TB)',
      rearCamera: '50MP AI Main (f/1.8) + 2MP Macro + Auxiliary Lens',
      frontCamera: '8MP (f/2.0) พร้อมวงแหวนแสงนุ่มนวล Soft-light Ring',
      battery: '5,000 mAh แบตเตอรี่อึดใช้งานได้ตลอดวัน',
      charging: '18W Fast Charging ผ่านพอร์ต Type-C',
      os: 'MIUI 14 บน Android 13',
      weight: '192 กรัม ดีไซน์บาง 8.09 มม.',
      connectivity: '4G LTE, Wi-Fi 5, Bluetooth 5.3, ช่องเสียบหูฟัง 3.5 มม., สแกนนิ้วด้านข้าง'
    },
    promotions: [
      'ราคาโปรโมชั่น 3,999 บาท ที่ BaNANA IT (ลดจาก 4,499.-)',
      'ผ่อน 0% นาน 3-6 เดือน บัตรเครดิตที่ร่วมรายการ'
    ],
    freeGifts: [
      'หัวชาร์จและสายเคเบิล Type-C',
      'เคสใส',
      'ฟิล์มกันรอย'
    ],
    warranty: 'ประกันศูนย์ไทย 15 เดือนเต็ม',
    afterSales: 'บริการตรวจเช็กและตั้งค่าเครื่องใหม่ฟรีที่สาขา BaNANA',
    highlightPoints: [
      'ให้ความจุมากถึง 256GB และ RAM 8GB ในงบไม่เกิน 4,000 บาท คุ้มค่าที่สุดสำหรับคนต้องการพื้นที่เยอะ',
      'หน้าจอขนาดใหญ่ 6.74 นิ้ว รีเฟรชเรท 90Hz สบายตา',
      'กล้องหลัก 50MP ถ่ายภาพคมชัด พร้อมโหมดฟิล์ม FilmCamera',
      'มีสแกนลายนิ้วมือด้านข้างและช่องเสียบหูฟัง 3.5 มม.'
    ],
    limitations: [
      'หน้าจอความละเอียด HD+',
      'ความเร็วชาร์จสูงสุด 18W'
    ],
    lastUpdated: '2026-10-20'
  },
  {
    id: 'bnn-poco-x6-pro-5g',
    name: 'POCO X6 Pro 5G',
    category: 'mobile',
    brand: 'Xiaomi',
    price: 11490,
    originalPrice: 13990,
    rating: 4.9,
    reviewCount: 620,
    inStock: true,
    stockCount: 25,
    tags: ['สายเกมตัวจริง', 'คะแนน AnTuTu 1.4 ล้าน', 'Dimensity 8300-Ultra', 'RAM 12GB + 512GB', 'จอ Flow AMOLED 1.5K'],
    colors: [
      {
        name: 'เหลือง Yellow Leather (หนังเทียม)',
        hex: '#eab308',
        overlayHex: '#eab308',
        image: 'https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&w=900&q=80'
      },
      {
        name: 'ดำ Black',
        hex: '#18181b',
        overlayHex: '#18181b',
        image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=900&q=80'
      },
      {
        name: 'เทา Grey',
        hex: '#64748b',
        overlayHex: '#64748b',
        image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=900&q=80'
      }
    ],
    defaultImage: 'https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&w=900&q=80',
    specs: {
      screen: '6.67 นิ้ว Flow AMOLED 1.5K, 120Hz, ความสว่าง 1,800 nits, ขอบจอบางเฉียบ 1.3 มม., HDR10+',
      processor: 'MediaTek Dimensity 8300-Ultra (4nm) ชิปแรงคะแนน AnTuTu 1,460,000 คะแนน',
      ram: '12GB LPDDR5X',
      storage: '512GB UFS 4.0 ความเร็วอ่านเขียนระดับท็อป',
      rearCamera: '64MP (f/1.7, OIS กันสั่น) + 8MP Ultra-wide 120° + 2MP Macro',
      frontCamera: '16MP (f/2.4)',
      battery: '5,000 mAh พร้อมระบบระบายความร้อน LiquidCool Technology 2.0 ขนาด 5,000 ตร.มม.',
      charging: '67W Turbo Charging (ชาร์จ 100% ใน 45 นาที)',
      os: 'Xiaomi HyperOS บนพื้นฐาน Android 14',
      weight: '186 กรัม',
      connectivity: '5G, Wi-Fi 6, Bluetooth 5.4, NFC, ลำโพงคู่ Dolby Atmos, สแกนนิ้วใต้หน้าจอ'
    },
    promotions: [
      'ราคา Flash Sale พิเศษ 11,490 บาท ที่ BaNANA IT (ลดจาก 13,990.-)',
      'ผ่อน 0% นาน 10 เดือน เริ่มต้นเดือนละ 1,149 บาท',
      'ฟรี พัดลมระบายความร้อนมือถือเกมมิ่ง'
    ],
    freeGifts: [
      'หัวชาร์จ 67W แท้',
      'เคสยางกันกระแทกสีดำด้าน',
      'ฟิล์มกันรอยหน้าจอ'
    ],
    warranty: 'ประกันศูนย์ไทย 15 เดือนเต็ม',
    afterSales: 'บริการตรวจเช็กระบบความร้อนและอัปเดตระบบฟรีที่สาขา BaNANA',
    highlightPoints: [
      'ชิป Dimensity 8300-Ultra แรงที่สุดในงบหมื่นต้น เล่น ROV 120fps และ Genshin Impact ปรับสุดได้ลื่นไหล',
      'ได้หน่วยความจำ UFS 4.0 ความจุ 512GB และ RAM 12GB สเปกแรงคุ้มเกินราคา',
      'หน้าจอ Flow AMOLED 1.5K ขอบจอบางสมมาตร สวยงามเทียบเท่าเรือธงราคาแพง',
      'กล้อง 64MP มีระบบกันสั่น OIS ถ่ายวิดีโอ 4K นิ่งนวล'
    ],
    limitations: [
      'กล้องถ่ายภาพในที่มืดยังเป็นรองตระกูล Xiaomi 14T ที่เน้นกล้อง Leica',
      'ฝาหลังตัวเครื่องเป็นโพลีคาร์บอเนต (ยกเว้นสีเหลืองที่เป็นหนังเทียม)'
    ],
    lastUpdated: '2026-10-20'
  },
  {
    id: 'bnn-poco-f6-5g',
    name: 'POCO F6 5G',
    category: 'mobile',
    brand: 'Xiaomi',
    price: 13990,
    originalPrice: 15990,
    rating: 4.9,
    reviewCount: 390,
    inStock: true,
    stockCount: 20,
    tags: ['ชิปเรือธง Snapdragon 8s Gen 3', 'ชาร์จไว 90W', 'ระบบระบายความร้อน IceLoop', 'จอ 1.5K 120Hz', 'เล่นเกมโหด'],
    colors: [
      {
        name: 'ดำ Black',
        hex: '#18181b',
        overlayHex: '#18181b',
        image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=900&q=80'
      },
      {
        name: 'เขียว Green',
        hex: '#4d7c0f',
        overlayHex: '#4d7c0f',
        image: 'https://images.unsplash.com/photo-1565849904461-04a58ad377e0?auto=format&fit=crop&w=900&q=80'
      },
      {
        name: 'ไทเทเนียม Titanium',
        hex: '#78716c',
        overlayHex: '#78716c',
        image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=900&q=80'
      }
    ],
    defaultImage: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=900&q=80',
    specs: {
      screen: '6.67 นิ้ว 1.5K CrystalRes Flow AMOLED, 120Hz, ความสว่าง 2,400 nits, กระจก Corning Gorilla Glass Victus',
      processor: 'Qualcomm Snapdragon 8s Gen 3 (4nm) เรือธง คะแนนทะลุ 1.5 ล้าน',
      ram: '12GB LPDDR5X',
      storage: '512GB UFS 4.0 ความเร็วสูงสุด',
      rearCamera: '50MP Sony IMX882 (f/1.59, OIS กันสั่น) + 8MP Ultra-wide 120°',
      frontCamera: '20MP (f/2.2) พร้อมระบบตรวจจับท่าทาง AON Smart Sensing',
      battery: '5,000 mAh พร้อมระบบระบายความร้อน LiquidCool 4.0 IceLoop System ขนาดใหญ่ 4,800 ตร.มม.',
      charging: '90W Turbo Charge (ชาร์จ 100% ภายใน 35 นาที)',
      os: 'Xiaomi HyperOS บนพื้นฐาน Android 14 พร้อมฟีเจอร์ AI WildBoost Optimization 3.0',
      weight: '179 กรัม บางเพียง 7.8 มม.',
      connectivity: '5G, Wi-Fi 6, Bluetooth 5.4, NFC, IR Blaster รีโมตคอนโทรล, กันน้ำกันฝุ่น IP64'
    },
    promotions: [
      'ราคาโปรโมชั่น 13,990 บาท ที่ BaNANA IT (ลดจาก 15,990.-)',
      'ผ่อน 0% นาน 10 เดือน เริ่มต้นเดือนละ 1,399 บาท'
    ],
    freeGifts: [
      'หัวชาร์จ 90W Turbo Charge แท้',
      'เคสยางกันกระแทก',
      'ฟิล์มกระจก 9H'
    ],
    warranty: 'ประกันศูนย์ไทย 15 เดือนเต็ม',
    afterSales: 'บริการอัปเดตระบบและทำความสะอาดเครื่องฟรีที่สาขา BaNANA',
    highlightPoints: [
      'ชิป Snapdragon 8s Gen 3 สถาปัตยกรรมระดับเรือธง ให้ประสิทธิภาพการเล่นเกม AAA ระดับสูงสุด',
      'ระบบระบายความร้อน LiquidCool 4.0 IceLoop ช่วยลดความร้อนสะสมขณะเล่นเกมหนักได้ดีเยี่ยม',
      'ชาร์จไว 90W Turbo Charge ชาร์จเต็มเร็วมากในเวลาเพียงครึ่งชั่วโมงเศษ',
      'น้ำหนักเบาเพียง 179 กรัม และบาง 7.8 มม. ถือเล่นเกมนานๆ ไม่เมื่อยมือ'
    ],
    limitations: [
      'ไม่มีเลนส์ซูม Telephoto',
      'ตัวเครื่องกันน้ำระดับ IP64'
    ],
    lastUpdated: '2026-10-20'
  },

  // ==========================================
  // BRAND 6: REALME (GT Series, Number Series, C Series จากศูนย์ไทย)
  // ==========================================
  {
    id: 'bnn-realme-gt-7-pro-5g',
    name: 'realme GT 7 Pro 5G',
    category: 'mobile',
    brand: 'Realme',
    price: 29999,
    originalPrice: 32999,
    rating: 4.9,
    reviewCount: 210,
    inStock: true,
    stockCount: 16,
    tags: ['เรือธง Snapdragon 8 Elite 3nm', 'แบตเตอรี่ยักษ์ Titan 6500 mAh', 'จอ Eco² OLED Plus 6000 nits', 'โหมดถ่ายภาพใต้น้ำ Underwater', 'ชาร์จไว 120W'],
    colors: [
      {
        name: 'ส้มดาวอังคาร Mars Design',
        hex: '#ea580c',
        overlayHex: '#ea580c',
        image: 'https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&w=900&q=80',
        images: [
          'https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&w=900&q=80',
          'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=900&q=80'
        ]
      },
      {
        name: 'เทาแกแล็กซี Galaxy Grey',
        hex: '#475569',
        overlayHex: '#475569',
        image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=900&q=80'
      },
      {
        name: 'ขาวแสงจันทร์ White',
        hex: '#f8fafc',
        overlayHex: '#f8fafc',
        image: 'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?auto=format&fit=crop&w=900&q=80'
      }
    ],
    defaultImage: 'https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&w=900&q=80',
    specs: {
      screen: '6.78 นิ้ว 1.5K 120Hz Eco² OLED Plus โดย Samsung แสดงผลประหยัดพลังงาน 52%, ความสว่างพีคระดับโลก 6,000 nits, สแกนนิ้ว Ultrasonic ใต้จอ',
      processor: 'Qualcomm Snapdragon 8 Elite (3nm) สถาปัตยกรรม 2+6 Oryon Cores คะแนน AnTuTu ทะลุ 3 ล้าน',
      ram: '16GB LPDDR5X (+ ขยาย RAM เสมือนได้ 12GB รวม 28GB)',
      storage: '512GB UFS 4.0 ความเร็วสูงสุด',
      rearCamera: 'กล้อง AI Triple: 50MP Sony IMX906 ขนาด 1/1.56 นิ้ว (f/1.8, OIS) + 50MP Sony IMX882 Periscope Telephoto 3x 73mm (ซูม 120x, OIS) + 8MP Ultra-wide 112° พร้อมโหมดถ่ายภาพใต้น้ำ Underwater Photography Mode สั่งถ่ายผ่านปุ่มเสียง',
      frontCamera: '16MP (f/2.45)',
      battery: '6,500 mAh แบตเตอรี่ซิลิคอนคาร์บอน Titan Battery ความจุใหญ่พิเศษ',
      charging: '120W Ultra Charge (ชาร์จ 50% ใน 14 นาที)',
      os: 'realme UI 6.0 บน Android 15 พร้อม NEXT AI ฟีเจอร์อัจฉริยะ',
      weight: '222.8 กรัม ดีไซน์ผิวสัมผัสพื้นผิวดาวอังคาร Mars Exploration Design',
      connectivity: '5G Dual SIM, Wi-Fi 7, Bluetooth 5.4, NFC 360°, IR Blaster, ลำโพงสเตอริโอคู่ O-Reality, กันน้ำกันฝุ่นระดับ IP68 และ IP69'
    },
    promotions: [
      'ราคาโปรพิเศษช่วงเปิดตัว 29,999 บาท (ปกติ 32,999.-)',
      'ผ่อน 0% นานสูงสุด 24 เดือน (เพียงเดือนละ 1,250 บาท)',
      'ฟรี realme Buds Air 6 และประกันหน้าจอแตก 1 ปีเต็ม'
    ],
    freeGifts: [
      'หัวชาร์จแท้ 120W Ultra Charge ในกล่อง',
      'หูฟังบลูทูธไร้สาย realme Buds Air',
      'เคสพรีเมียมตรงรุ่น',
      'ฟิล์มกันรอย'
    ],
    warranty: 'ประกันศูนย์ไทย realme ประเทศไทย 1 ปีเต็ม',
    afterSales: 'บริการทำความสะอาดเครื่องและตรวจเช็กระบบฟรีที่ศูนย์บริการ realme',
    highlightPoints: [
      'ชิปเซ็ตประมวลผล Qualcomm Snapdragon 8 Elite 3nm พลังประมวลผลสูงสุด ร่วมกับระบบระบายความร้อน 11,480 ตร.มม.',
      'แบตเตอรี่ยักษ์ Titan Battery 6,500 mAh ใช้งานได้ต่อเนื่อง 2-3 วัน พร้อมระบบชาร์จไว 120W',
      'หน้าจอ Eco² OLED Plus ร่วมกับ Samsung สว่างสูงสุด 6,000 nits สู้แดดจ้าได้คมชัดไร้ที่ติ และประหยัดไฟ 52%',
      'รองรับโหมดถ่ายภาพใต้น้ำ ปลดล็อกด้วยลายนิ้วมือ Ultrasonic แม้มือเปียก พร้อมมาตรฐานกันน้ำ IP68 และ IP69'
    ],
    limitations: [
      'ไม่มีช่องเสียบหูฟัง 3.5 มม.',
      'ไม่รองรับ MicroSD'
    ],
    lastUpdated: '2026-10-20'
  },
  {
    id: 'bnn-realme-gt-6',
    name: 'realme GT 6',
    category: 'mobile',
    brand: 'Realme',
    price: 18999,
    originalPrice: 19999,
    rating: 4.9,
    reviewCount: 410,
    inStock: true,
    stockCount: 18,
    tags: ['AI Flagship Killer', 'จอสว่าง 6000 nits สถิติโลก', 'Snapdragon 8s Gen 3', 'ชาร์จไว 120W', 'RAM 16GB + 512GB'],
    colors: [
      {
        name: 'เงิน Fluid Silver',
        hex: '#cbd5e1',
        overlayHex: '#cbd5e1',
        image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=900&q=80',
        images: [
          'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=900&q=80',
          'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=900&q=80'
        ]
      },
      {
        name: 'เขียว Razor Green',
        hex: '#2d4a3e',
        overlayHex: '#2d4a3e',
        image: 'https://images.unsplash.com/photo-1565849904461-04a58ad377e0?auto=format&fit=crop&w=900&q=80'
      }
    ],
    defaultImage: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=900&q=80',
    specs: {
      screen: '6.78 นิ้ว 1.5K 8T LTPO AMOLED, 1-120Hz, ความสว่างพีคสูงสุดในโลก 6,000 nits, กระจก Corning Gorilla Glass Victus 2',
      processor: 'Qualcomm Snapdragon 8s Gen 3 (4nm) ชิปเซ็ตระดับเรือธง',
      ram: '16GB LPDDR5X (+ ขยาย RAM เสมือนได้สูงสุด 12GB รวม 28GB)',
      storage: '512GB UFS 4.0 ความเร็วสูงระดับสูงสุด',
      rearCamera: '50MP Sony LYT-808 ขนาด 1/1.4 นิ้ว (f/1.69, OIS) + 50MP Telephoto 2x Samsung JN5 (f/2.0, OIS) + 8MP Sony IMX355 Ultra-wide 112°',
      frontCamera: '32MP Sony IMX615 (f/2.45) รองรับบันทึกวิดีโอ 4K',
      battery: '5,500 mAh แบตเตอรี่ความจุใหญ่สองเซลล์',
      charging: '120W SUPERVOOC Charge (ชาร์จ 50% ภายในเวลาเพียง 10 นาที และเต็ม 100% ใน 28 นาที)',
      os: 'realme UI 5.0 บน Android 14 พร้อม Next AI (AI Night Vision, AI Smart Removal, AI Smart Loop)',
      weight: '199 กรัม ตัวเครื่องกระจก Nano Mirror สะท้อนเงาวับ',
      connectivity: '5G Dual SIM, Wi-Fi 6, Bluetooth 5.4, NFC 360°, IR Blaster, ลำโพงสเตอริโอ Hi-Res, กันน้ำกันฝุ่น IP65'
    },
    promotions: [
      'ราคาโปรพิเศษ 18,999 บาท ที่ BaNANA IT (ลดจากปกติ 19,999.-)',
      'ผ่อน 0% นานสูงสุด 24 เดือน เริ่มต้นเดือนละ 792 บาท',
      'รับสิทธิ์ซื้อ realme Buds Air6 ลด 50%'
    ],
    freeGifts: [
      'หัวชาร์จแท้ 120W GaN SUPERVOOC Adapter ในกล่อง',
      'เคสพรีเมียมสีเทาด้าน',
      'ฟิล์มกันรอยหน้าจอโค้ง'
    ],
    warranty: 'ประกันศูนย์ไทย realme 1 ปีเต็ม (ประกันหน้าจอแตก 1 ปี)',
    afterSales: 'บริการส่งเคลมด่วนผ่านศูนย์บริการ realme และ BaNANA IT ทั่วประเทศ',
    highlightPoints: [
      'หน้าจอแสดงผลสว่างที่สุดในโลกถึง 6,000 nits สู้แสงแดดจ้ากลางแจ้งได้ดีกว่าสมาร์ทโฟนทุกรุ่นในตลาด',
      'ชิปเรือธง Snapdragon 8s Gen 3 พร้อมหน่วยความจำเร็วแรง RAM 16GB + ROM 512GB UFS 4.0',
      'กล้องคู่ 50MP เซนเซอร์ระดับท็อป Sony LYT-808 และเลนส์ Telephoto 50MP ถ่ายพอร์ตเทรตสวยงาม',
      'ชาร์จไวสุดพลัง 120W SUPERVOOC ชาร์จเพียง 10 นาทีได้แบตเตอรี่เกินครึ่ง'
    ],
    limitations: [
      'ไม่มีช่องเสียบหูฟัง 3.5 มม.',
      'ไม่รองรับชาร์จไร้สาย'
    ],
    lastUpdated: '2026-10-20'
  },
  {
    id: 'bnn-realme-gt-6t',
    name: 'realme GT 6T',
    category: 'mobile',
    brand: 'Realme',
    price: 15999,
    originalPrice: 16999,
    rating: 4.8,
    reviewCount: 320,
    inStock: true,
    stockCount: 22,
    tags: ['Snapdragon 7+ Gen 3', 'จอสว่าง 6000 nits', 'ชาร์จไว 120W', 'ระบบระบายความร้อน 10000 ตร.มม.', 'เล่นเกมลื่น'],
    colors: [
      {
        name: 'เงิน Fluid Silver',
        hex: '#cbd5e1',
        overlayHex: '#cbd5e1',
        image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=900&q=80'
      },
      {
        name: 'เขียว Razor Green',
        hex: '#2d4a3e',
        overlayHex: '#2d4a3e',
        image: 'https://images.unsplash.com/photo-1565849904461-04a58ad377e0?auto=format&fit=crop&w=900&q=80'
      }
    ],
    defaultImage: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=900&q=80',
    specs: {
      screen: '6.78 นิ้ว 1.5K 8T LTPO AMOLED, 1-120Hz, ความสว่างสูงสุด 6,000 nits, กระจก Corning Gorilla Glass Victus 2',
      processor: 'Qualcomm Snapdragon 7+ Gen 3 (4nm) สถาปัตยกรรมเดียวกับชิปเรือธง 8 Gen 3',
      ram: '12GB LPDDR5X',
      storage: '256GB UFS 4.0',
      rearCamera: '50MP Sony LYT-600 (f/1.88, OIS กันสั่น) + 8MP Sony Ultra-wide 112°',
      frontCamera: '32MP Sony IMX615 (f/2.4) ถ่าย 4K',
      battery: '5,500 mAh พร้อมระบบระบายความร้อน 9-Layer Iceberg Vapor Chamber ขนาดใหญ่พิเศษ 10,014 ตร.มม.',
      charging: '120W SUPERVOOC Charge',
      os: 'realme UI 5.0 บน Android 14',
      weight: '191 กรัม',
      connectivity: '5G, Wi-Fi 6, Bluetooth 5.4, NFC, ลำโพงคู่สเตอริโอ, กันน้ำกันฝุ่น IP65'
    },
    promotions: [
      'ราคาโปรพิเศษ 15,999 บาท ที่ BaNANA IT (ลดจาก 16,999.-)',
      'ผ่อน 0% นาน 18 เดือน เริ่มต้นเดือนละ 888 บาท'
    ],
    freeGifts: [
      'หัวชาร์จแท้ 120W SUPERVOOC',
      'เคสใสกันกระแทก',
      'ฟิล์มกระจก 9H'
    ],
    warranty: 'ประกันศูนย์ไทย 1 ปีเต็ม',
    afterSales: 'บริการอัปเดตระบบและทำความสะอาดเครื่องฟรีที่สาขา BaNANA',
    highlightPoints: [
      'ชิป Snapdragon 7+ Gen 3 แรงเทียบชั้นเรือธง เล่นเกมหนักได้ลื่นไหลเฟรมเรตไม่ดรอป',
      'ระบบระบายความร้อน Vapor Chamber ขนาดใหญ่ที่สุดกว่า 10,014 ตร.มม. ระบายความร้อนได้ดีเยี่ยม',
      'หน้าจอ 6,000 nits สว่างที่สุด สบายตาด้วยเทคโนโลยี 8T LTPO ประหยัดไฟ',
      'ชาร์จไว 120W ชาร์จไฟแป๊บเดียวพร้อมใช้งาน'
    ],
    limitations: [
      'ไม่มีเลนส์ซูม Telephoto (รุ่น GT 6 มีเลนส์เทเล 50MP)',
      'ความจุ 256GB'
    ],
    lastUpdated: '2026-10-20'
  },
  {
    id: 'bnn-realme-13-plus-5g',
    name: 'realme 13+ 5G',
    category: 'mobile',
    brand: 'Realme',
    price: 10999,
    originalPrice: 11999,
    rating: 4.8,
    reviewCount: 380,
    inStock: true,
    stockCount: 30,
    tags: ['สปีดมาสเตอร์ เล่นเกม 90fps', 'ชาร์จไว 80W', 'จอ 120Hz Esports OLED', 'กล้อง Sony LYT-600 OIS', 'รุ่นใหม่ล่าสุด'],
    colors: [
      {
        name: 'ทอง Victory Gold',
        hex: '#eab308',
        overlayHex: '#eab308',
        image: 'https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&w=900&q=80'
      },
      {
        name: 'เขียวสปีด Speed Green',
        hex: '#155e75',
        overlayHex: '#155e75',
        image: 'https://images.unsplash.com/photo-1565849904461-04a58ad377e0?auto=format&fit=crop&w=900&q=80'
      }
    ],
    defaultImage: 'https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&w=900&q=80',
    specs: {
      screen: '6.67 นิ้ว OLED Esports Display, 120Hz, ความสว่าง 2,000 nits, ระบบสัมผัสอัจฉริยะ Rainwater Smart Touch',
      processor: 'MediaTek Dimensity 7300-Energy (4nm) รองรับเล่นเกม ROV, Free Fire, PUBG ได้ถึง 90fps เสถียร',
      ram: '12GB (+ Dynamic RAM ขยายได้สูงสุด 14GB รวม 26GB)',
      storage: '256GB (รองรับใส่ MicroSD สูงสุด 2TB)',
      rearCamera: '50MP Sony LYT-600 (f/1.8, OIS กันสั่น) + 2MP Portrait Lens',
      frontCamera: '16MP (f/2.4) ถ่ายเซลฟี่คมชัด',
      battery: '5,000 mAh พร้อมระบบระบายความร้อนสแตนเลสสตีล VC ขนาด 6,050 ตร.มม.',
      charging: '80W Ultra Charge (ชาร์จ 50% ภายใน 19 นาที)',
      os: 'realme UI 5.0 บน Android 14 การันตีเล่นเกมลื่นไหลระดับสากล',
      weight: '185 กรัม บางเพียง 7.6 มม. ดีไซน์ Speed Curve พริ้วไหว',
      connectivity: '5G, Wi-Fi 6, Bluetooth 5.4, ช่องเสียบหูฟัง 3.5 มม., ลำโพงคู่สเตอริโอ Hi-Res, กันน้ำกันฝุ่น IP65'
    },
    promotions: [
      'ราคาเปิดตัวพิเศษ 10,999 บาท ที่ BaNANA IT (ปกติ 11,999.-)',
      'ผ่อน 0% นาน 10 เดือน เพียงเดือนละ 1,100 บาท',
      'ฟรี หูฟังเกมมิ่งและกระเป๋าเป้ realme'
    ],
    freeGifts: [
      'หัวชาร์จแท้ 80W Ultra Charge',
      'เคสใสกันกระแทก',
      'ฟิล์มกันรอย'
    ],
    warranty: 'ประกันศูนย์ไทย 1 ปีเต็ม',
    afterSales: 'บริการทำความสะอาดและตรวจเช็กสภาพเครื่องฟรีที่ศูนย์บริการ realme',
    highlightPoints: [
      'สมาร์ทโฟนเกมมิ่งราคาประหยัดรุ่นแรกที่ผ่านการรับรองเล่นเกมระดับ 90fps ไหลลื่นจาก TÜV SÜD',
      'ชาร์จเร็วสูงถึง 80W ชาร์จไวทันใจ เสียบเพียง 19 นาทีได้แบตเตอรี่ครึ่งหนึ่ง',
      'กล้องหลัก 50MP ใช้เซนเซอร์ Sony LYT-600 พร้อมระบบกันสั่น OIS ถ่ายภาพสวยคมชัด',
      'มีช่องเสียบหูฟัง 3.5 มม. และระบบ Rainwater Smart Touch หน้าจอเปียกน้ำก็ทัชได้แม่นยำ'
    ],
    limitations: [
      'ไม่มีเลนส์ Ultra-wide',
      'กล้องหน้าความละเอียด 16MP'
    ],
    lastUpdated: '2026-10-20'
  },
  {
    id: 'bnn-realme-13-5g',
    name: 'realme 13 5G',
    category: 'mobile',
    brand: 'Realme',
    price: 8999,
    originalPrice: 8999,
    rating: 4.7,
    reviewCount: 260,
    inStock: true,
    stockCount: 35,
    tags: ['มือถือ 5G ดีไซน์สปีด', 'กล้อง 50MP OIS', 'ชาร์จไว 45W', 'จอ 120Hz Eye Comfort', 'RAM 12GB'],
    colors: [
      {
        name: 'เขียว Speed Green',
        hex: '#16a34a',
        overlayHex: '#16a34a',
        image: 'https://images.unsplash.com/photo-1565849904461-04a58ad377e0?auto=format&fit=crop&w=900&q=80'
      },
      {
        name: 'ม่วง Dark Purple',
        hex: '#581c87',
        overlayHex: '#581c87',
        image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=900&q=80'
      }
    ],
    defaultImage: 'https://images.unsplash.com/photo-1565849904461-04a58ad377e0?auto=format&fit=crop&w=900&q=80',
    specs: {
      screen: '6.72 นิ้ว FHD+ 120Hz Eye Comfort Display, ความสว่าง 950 nits',
      processor: 'MediaTek Dimensity 6300 (6nm) 5G Octa-core',
      ram: '12GB (+ Dynamic RAM ได้ 14GB)',
      storage: '256GB (รองรับใส่ MicroSD ได้สูงสุด 2TB)',
      rearCamera: '50MP AI Camera (f/1.8, OIS กันสั่น) + 2MP Depth',
      frontCamera: '16MP (f/2.45)',
      battery: '5,000 mAh แบตเตอรี่อึดใช้งานได้ตลอดวัน',
      charging: '45W Fast Charge (ชาร์จ 50% ใน 30 นาที)',
      os: 'realme UI 5.0 บน Android 14',
      weight: '190 กรัม บาง 7.79 มม.',
      connectivity: '5G, Wi-Fi 5, Bluetooth 5.3, ช่องเสียบหูฟัง 3.5 มม., ลำโพงคู่สเตอริโอ, กันน้ำละออง IP64 พร้อม Rainwater Smart Touch'
    },
    promotions: [
      'ราคาพิเศษ 8,999 บาท ที่ BaNANA IT',
      'ผ่อน 0% นาน 10 เดือน เริ่มต้นเดือนละ 900 บาท'
    ],
    freeGifts: [
      'หัวชาร์จ 45W Fast Charge',
      'เคสใสกันกระแทก',
      'ฟิล์มกันรอย'
    ],
    warranty: 'ประกันศูนย์ไทย 1 ปีเต็ม',
    afterSales: 'บริการอัปเดตระบบและทำความสะอาดเครื่องฟรีที่สาขา BaNANA',
    highlightPoints: [
      'ให้ RAM 12GB และ ROM 256GB เต็มที่ ในงบไม่เกิน 9,000 บาท สเปกคุ้มค่า',
      'กล้องหลัก 50MP มีระบบกันสั่น OIS ถ่ายรูปคมชัด ไม่เบลอ',
      'หน้าจอใหญ่ 6.72 นิ้ว รีเฟรชเรท 120Hz สบายตา',
      'มีมาตรฐานกันน้ำ IP64 ทัชสกรีนได้แม้มือเปียก'
    ],
    limitations: [
      'หน้าจอแบบ IPS LCD (ไม่ใช่ AMOLED)',
      'ไม่มีเลนส์ Ultra-wide'
    ],
    lastUpdated: '2026-10-20'
  },
  {
    id: 'bnn-realme-12-pro-plus-5g',
    name: 'realme 12 Pro+ 5G',
    category: 'mobile',
    brand: 'Realme',
    price: 13999,
    originalPrice: 16999,
    rating: 4.9,
    reviewCount: 490,
    inStock: true,
    stockCount: 15,
    tags: ['กล้องซูมเรือธง 64MP Periscope', 'ซูมดิจิทัล 120x', 'ดีไซน์นาฬิกาหรู Luxury Watch', 'เซนเซอร์ Sony IMX890', 'ลดราคาพิเศษ'],
    colors: [
      {
        name: 'น้ำเงิน Submarine Blue (หนังวีแกน)',
        hex: '#1e3a8a',
        overlayHex: '#1e3a8a',
        image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&w=900&q=80'
      },
      {
        name: 'เบจ Navigator Beige (หนังวีแกน)',
        hex: '#fef3c7',
        overlayHex: '#fef3c7',
        image: 'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?auto=format&fit=crop&w=900&q=80'
      }
    ],
    defaultImage: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&w=900&q=80',
    specs: {
      screen: '6.7 นิ้ว Curved 120Hz AMOLED FHD+, 2160Hz PWM Dimming ถนอมสายตาระดับท็อป, สแกนนิ้วใต้หน้าจอ',
      processor: 'Qualcomm Snapdragon 7s Gen 2 (4nm) Octa-core',
      ram: '12GB (+ Dynamic RAM 12GB รวม 24GB)',
      storage: '512GB ความจุขนาดใหญ่',
      rearCamera: '50MP Sony IMX890 (f/1.8, OIS) + 64MP Periscope Telephoto 3x (OmniVision OV64B, OIS, ซูมดิจิทัล 120x) + 8MP Ultra-wide 112°',
      frontCamera: '32MP Sony IMX615 (f/2.4) เซลฟี่ระดับไฮเอนด์',
      battery: '5,000 mAh พร้อม 3D VC Cooling System',
      charging: '67W SUPERVOOC Charge (ชาร์จ 50% ใน 19 นาที)',
      os: 'realme UI 5.0 บน Android 14 พร้อมฟิลเตอร์ภาพยนตร์ Master Cinematic Filter',
      weight: '196 กรัม ฝาหลังหนังพรีเมียมออกแบบร่วมกับดีไซเนอร์นาฬิกาหรูสวิส',
      connectivity: '5G, Wi-Fi 6, Bluetooth 5.2, NFC, ลำโพงคู่ Dolby Atmos Hi-Res, กันน้ำกันฝุ่น IP65'
    },
    promotions: [
      'ปรับลดราคา 3,000 บาทที่ BaNANA IT (เหลือเพียง 13,999.- จากปกติ 16,999.-)',
      'ผ่อน 0% นาน 10-15 เดือน เริ่มต้นเดือนละ 933 บาท',
      'ฟรี กระเป๋าเดินทาง realme Luxury Edition'
    ],
    freeGifts: [
      'หัวชาร์จ 67W SUPERVOOC',
      'เคสพรีเมียมตรงรุ่น',
      'ฟิล์มกระจก 3D UV'
    ],
    warranty: 'ประกันศูนย์ไทย 1 ปีเต็ม',
    afterSales: 'บริการทำความสะอาดและติดฟิล์มใหม่ฟรีที่ศูนย์บริการ realme',
    highlightPoints: [
      'รุ่นเดียวในระดับราคาหมื่นต้นที่มีเลนส์กล้องซูม Periscope Telephoto 64MP ระดับเดียวกับเรือธง ซูมไกลได้ถึง 120 เท่า',
      'กล้องหลักเซนเซอร์ใหญ่ Sony IMX890 50MP ให้มิติภาพหน้าชัดหลังเบลอสวยงามอย่างเป็นธรรมชาติ',
      'ดีไซน์ฝาหลังหนังวีแกนระดับพรีเมียมพร้อมโมดูลกล้องขอบร่องหยักแบบนาฬิกาหรูสวิสโรเล็กซ์',
      'ความจุเยอะถึง 512GB และ RAM 12GB สเปกแรงคุ้มค่าที่สุด'
    ],
    limitations: [
      'ไม่มีช่องใส่ MicroSD เพิ่มเติม',
      'ไม่มีช่องเสียบหูฟัง 3.5 มม.'
    ],
    lastUpdated: '2026-10-20'
  },
  {
    id: 'bnn-realme-12-plus-5g',
    name: 'realme 12+ 5G',
    category: 'mobile',
    brand: 'Realme',
    price: 9999,
    originalPrice: 11999,
    rating: 4.8,
    reviewCount: 350,
    inStock: true,
    stockCount: 28,
    tags: ['กล้อง Sony LYT-600 OIS', 'ฝาหลังหนังวีแกนหรู', 'จอ 120Hz AMOLED', 'ชาร์จเร็ว 67W', 'คุ้มค่ามาก'],
    colors: [
      {
        name: 'เขียวพรีเมียม Pioneer Green',
        hex: '#1e392a',
        overlayHex: '#1e392a',
        image: 'https://images.unsplash.com/photo-1565849904461-04a58ad377e0?auto=format&fit=crop&w=900&q=80'
      },
      {
        name: 'เบจ Navigator Beige',
        hex: '#fef3c7',
        overlayHex: '#fef3c7',
        image: 'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?auto=format&fit=crop&w=900&q=80'
      }
    ],
    defaultImage: 'https://images.unsplash.com/photo-1565849904461-04a58ad377e0?auto=format&fit=crop&w=900&q=80',
    specs: {
      screen: '6.67 นิ้ว 120Hz Ultra Smooth AMOLED FHD+, ความสว่าง 2,000 nits, HDR10+, สแกนนิ้วใต้จอ',
      processor: 'MediaTek Dimensity 7050 (6nm) 5G Octa-core',
      ram: '8GB / 12GB (+ Extended RAM ได้ 12GB)',
      storage: '256GB (รองรับ MicroSD สูงสุด 2TB)',
      rearCamera: '50MP Sony LYT-600 (f/1.88, OIS) + 8MP Ultra-wide 112° + 2MP Macro',
      frontCamera: '16MP (f/2.45)',
      battery: '5,000 mAh แบตเตอรี่อึดใช้งานได้ถึง 2 วัน',
      charging: '67W SUPERVOOC Flash Charge (ชาร์จ 50% ใน 19 นาที)',
      os: 'realme UI 5.0 บน Android 14',
      weight: '190 กรัม บาง 7.87 มม. ฝาหลังหนังวีแกน',
      connectivity: '5G, Wi-Fi 6, Bluetooth 5.2, NFC, ลำโพงสเตอริโอคู่ Hi-Res, ช่องเสียบหูฟัง 3.5 มม., IP54 พร้อม Rainwater Smart Touch'
    },
    promotions: [
      'ลดราคาต่ำกว่าหมื่นเหลือเพียง 9,999 บาท ที่ BaNANA IT (ปกติ 11,999.-)',
      'ผ่อน 0% นาน 10 เดือน เดือนละ 999 บาท'
    ],
    freeGifts: [
      'หัวชาร์จเร็ว 67W SUPERVOOC',
      'เคสใสกันกระแทก',
      'ฟิล์มกระจก 9H'
    ],
    warranty: 'ประกันศูนย์ไทย 1 ปีเต็ม',
    afterSales: 'บริการอัปเดตระบบและทำความสะอาดเครื่องฟรีที่สาขา BaNANA',
    highlightPoints: [
      'กล้อง Sony LYT-600 OIS มีระบบกันสั่นระดับโปร ถ่ายภาพกลางคืนและพอร์ตเทรตสวยงาม',
      'ฝาหลังหนังวีแกนระดับหรู ดีไซน์ขอบเหลี่ยมพรีเมียม สัมผัสนุ่ม ไม่ลื่นมือ',
      'หน้าจอ Flat AMOLED 120Hz สว่าง 2,000 nits พร้อมสแกนนิ้วใต้หน้าจอ',
      'ชาร์จเร็ว 67W SUPERVOOC ชาร์จไวทันใจ'
    ],
    limitations: [
      'ไม่มีเลนส์ซูม Telephoto (รุ่น Pro+ มีเลนส์เทเล 64MP)',
      'กันน้ำระดับ IP54'
    ],
    lastUpdated: '2026-10-20'
  },
  {
    id: 'bnn-realme-12-5g',
    name: 'realme 12 5G',
    category: 'mobile',
    brand: 'Realme',
    price: 6999,
    originalPrice: 7999,
    rating: 4.7,
    reviewCount: 310,
    inStock: true,
    stockCount: 40,
    tags: ['กล้อง 108MP ซูม 3x', 'ปุ่ม Dynamic Button', 'จอ 120Hz สู้แดด 950 nits', 'ชาร์จไว 45W', 'ยอดนิยม'],
    colors: [
      {
        name: 'ม่วง Twilight Purple',
        hex: '#7e22ce',
        overlayHex: '#7e22ce',
        image: 'https://images.unsplash.com/photo-1589739900243-4b52cd9b104e?auto=format&fit=crop&w=900&q=80'
      },
      {
        name: 'เขียว Woodland Green',
        hex: '#14532d',
        overlayHex: '#14532d',
        image: 'https://images.unsplash.com/photo-1565849904461-04a58ad377e0?auto=format&fit=crop&w=900&q=80'
      }
    ],
    defaultImage: 'https://images.unsplash.com/photo-1589739900243-4b52cd9b104e?auto=format&fit=crop&w=900&q=80',
    specs: {
      screen: '6.72 นิ้ว FHD+ 120Hz Sunlight Display, 950 nits, ขอบจอบางสมมาตร',
      processor: 'MediaTek Dimensity 6100+ (6nm) 5G Octa-core 2.2GHz',
      ram: '8GB (+ Dynamic RAM ได้ 8GB รวม 16GB)',
      storage: '256GB (รองรับใส่ MicroSD สูงสุด 2TB)',
      rearCamera: '108MP 3x In-sensor Zoom (f/1.75) + 2MP Portrait Camera',
      frontCamera: '8MP (f/2.0)',
      battery: '5,000 mAh แบตเตอรี่อึดใช้งานได้ถึง 2 วัน',
      charging: '45W SUPERVOOC Charge',
      os: 'realme UI 5.0 บน Android 14',
      weight: '188 กรัม บางเพียง 7.69 มม.',
      connectivity: '5G, Wi-Fi 5, Bluetooth 5.3, ปุ่ม Dynamic Button ตั้งค่าลัดได้, ลำโพงคู่สเตอริโอ Hi-Res, กันน้ำละออง IP54'
    },
    promotions: [
      'ราคาโปรโมชั่น 6,999 บาท ที่ BaNANA IT (ลดจาก 7,999.-)',
      'ผ่อน 0% นาน 6 เดือน เดือนละ 1,166 บาท'
    ],
    freeGifts: [
      'หัวชาร์จ 45W SUPERVOOC',
      'เคสใสกันกระแทก',
      'ฟิล์มกันรอย'
    ],
    warranty: 'ประกันศูนย์ไทย 1 ปีเต็ม',
    afterSales: 'บริการอัปเดตระบบและทำความสะอาดเครื่องฟรีที่สาขา BaNANA',
    highlightPoints: [
      'มีปุ่ม Dynamic Button สั่งงานด่วน เช่น เปิดไฟฉาย, ปิดเสียง, หรือเปิดกล้องได้ในสัมผัสเดียว',
      'กล้องหลัก 108MP ซูมคมชัด 3x โดยภาพไม่แตก',
      'ลำโพงคู่สเตอริโอเสียงดังชัดเจน และหน้าจอ 120Hz สว่าง 950 nits สู้แดดจ้าได้เยี่ยม',
      'ตัวเครื่องบางเฉียบ 7.69 มม. ดีไซน์สวยหรูแบบนาฬิกา Trendsetting Watch'
    ],
    limitations: [
      'หน้าจอแบบ IPS LCD (ไม่ใช่ AMOLED)',
      'กล้องไม่มีระบบกันสั่น OIS'
    ],
    lastUpdated: '2026-10-20'
  },
  {
    id: 'bnn-realme-c67',
    name: 'realme C67',
    category: 'mobile',
    brand: 'Realme',
    price: 5499,
    originalPrice: 6499,
    rating: 4.7,
    reviewCount: 360,
    inStock: true,
    stockCount: 50,
    tags: ['กล้อง 108MP', 'ชิป Snapdragon 685', 'ลำโพงคู่สเตอริโอ', 'มินิแคปซูล Mini Capsule 2.0', 'สุดคุ้ม'],
    colors: [
      {
        name: 'เขียว Sunny Oasis',
        hex: '#84cc16',
        overlayHex: '#84cc16',
        image: 'https://images.unsplash.com/photo-1565849904461-04a58ad377e0?auto=format&fit=crop&w=900&q=80'
      },
      {
        name: 'ดำ Black Rock',
        hex: '#18181b',
        overlayHex: '#18181b',
        image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=900&q=80'
      }
    ],
    defaultImage: 'https://images.unsplash.com/photo-1565849904461-04a58ad377e0?auto=format&fit=crop&w=900&q=80',
    specs: {
      screen: '6.72 นิ้ว FHD+ 90Hz, ความสว่างสูงสุด 950 nits, มินิแคปซูล Mini Capsule 2.0 แจ้งเตือนแบบโต้ตอบ',
      processor: 'Qualcomm Snapdragon 685 (6nm) Octa-core 2.8GHz',
      ram: '8GB (+ Dynamic RAM ได้ 8GB รวม 16GB)',
      storage: '128GB / 256GB (รองรับ MicroSD สูงสุด 2TB)',
      rearCamera: '108MP 3x In-sensor Zoom (f/1.75) + 2MP Depth Camera',
      frontCamera: '8MP (f/2.05)',
      battery: '5,000 mAh ใช้งานได้ยาวนาน',
      charging: '33W SUPERVOOC Charge (ชาร์จ 50% ในเวลา 31 นาที)',
      os: 'realme UI บน Android 14',
      weight: '185 กรัม บาง 7.59 มม. ดีไซน์ไร้กรอบหน้าจอพลาสติก',
      connectivity: '4G LTE, Wi-Fi 5, Bluetooth 5.0, ลำโพงสเตอริโอคู่ Ultra Volume 300%, ช่องเสียบหูฟัง 3.5 มม., IP54'
    },
    promotions: [
      'ราคาโปรโมชั่น 5,499 บาท ที่ BaNANA IT (ลดจาก 6,499.-)',
      'ผ่อน 0% นาน 6 เดือน เดือนละ 916 บาท'
    ],
    freeGifts: [
      'หัวชาร์จ 33W SUPERVOOC',
      'เคสใส',
      'ฟิล์มกันรอย'
    ],
    warranty: 'ประกันศูนย์ไทย 1 ปีเต็ม',
    afterSales: 'บริการอัปเดตระบบและทำความสะอาดเครื่องฟรีที่สาขา BaNANA',
    highlightPoints: [
      'ชิป Snapdragon 685 (6nm) ประหยัดแบตเตอรี่และทำงานได้รวดเร็ว',
      'กล้อง 108MP ซูมในเซนเซอร์ได้ 3 เท่า ถ่ายภาพบุคคลคมชัด',
      'ลำโพงคู่สเตอริโอเสียงดัง 300% ฟังเพลงหรือดูวิดีโอสะใจ',
      'ฟังก์ชัน Mini Capsule 2.0 แจ้งเตือนสถานะชาร์จ เพลง และสภาพอากาศบริเวณรูกล้องหน้า'
    ],
    limitations: [
      'รองรับ 4G LTE (ไม่รองรับ 5G)',
      'รีเฟรชเรทหน้าจอ 90Hz'
    ],
    lastUpdated: '2026-10-20'
  },
  {
    id: 'bnn-realme-c65',
    name: 'realme C65',
    category: 'mobile',
    brand: 'Realme',
    price: 4999,
    originalPrice: 5499,
    rating: 4.7,
    reviewCount: 290,
    inStock: true,
    stockCount: 55,
    tags: ['ชาร์จไว 45W', 'บาง 7.64 มม.', 'การันตีลื่นไหล 48 เดือน', 'กล้อง 50MP AI', 'งบไม่เกินห้าพัน'],
    colors: [
      {
        name: 'ม่วงประกายดาว Starlight Purple',
        hex: '#a855f7',
        overlayHex: '#a855f7',
        image: 'https://images.unsplash.com/photo-1589739900243-4b52cd9b104e?auto=format&fit=crop&w=900&q=80'
      },
      {
        name: 'ดำประกายดาว Starlight Black',
        hex: '#18181b',
        overlayHex: '#18181b',
        image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=900&q=80'
      }
    ],
    defaultImage: 'https://images.unsplash.com/photo-1589739900243-4b52cd9b104e?auto=format&fit=crop&w=900&q=80',
    specs: {
      screen: '6.67 นิ้ว 90Hz Eye Comfort Display, ถนอมสายตา TÜV Rheinland Low Blue Light, Smart Rainwater Touch',
      processor: 'MediaTek Helio G85 Octa-core 2.0GHz',
      ram: '8GB (+ Extended RAM ได้ 8GB รวม 16GB)',
      storage: '256GB (รองรับใส่ MicroSD สูงสุด 2TB)',
      rearCamera: '50MP AI Camera (f/1.8) + Auxiliary Lens',
      frontCamera: '8MP (f/2.05) พร้อมระบบ Air Gestures สั่งงานไร้การสัมผัส',
      battery: '5,000 mAh แบตเตอรี่ทนทาน 4 ปี',
      charging: '45W Fast Charge (ชาร์จ 50% ภายใน 30 นาที)',
      os: 'realme UI บน Android 14 พร้อมรับรองความลื่นไหล 48-Month Fluency Certification จาก TÜV SÜD',
      weight: '185 กรัม บางเฉียบเพียง 7.64 มม.',
      connectivity: '4G LTE, Wi-Fi 5, Bluetooth 5.0, ลำโพงเร่งเสียง 200%, ทนละอองน้ำมาตรฐาน IP54'
    },
    promotions: [
      'ราคาพิเศษ 4,999 บาท ที่ BaNANA IT (ลดจาก 5,499.-)',
      'ผ่อน 0% นาน 6 เดือน เพียงเดือนละ 833 บาท'
    ],
    freeGifts: [
      'หัวชาร์จแท้ 45W Fast Charge',
      'เคสใส',
      'ฟิล์มกันรอย'
    ],
    warranty: 'ประกันศูนย์ไทย 1 ปีเต็ม พร้อมการันตีความลื่นไหล 4 ปี',
    afterSales: 'บริการดูแลเครื่องและอัปเดตระบบฟรีที่สาขา BaNANA IT',
    highlightPoints: [
      'ได้รับการการันตีความลื่นไหลระดับ 48 เดือนจากสถาบัน TÜV SÜD เยอรมนี ใช้งานยาวนานไม่สะดุด',
      'ระบบชาร์จเร็วสูงถึง 45W Fast Charge ในงบไม่เกิน 5,000 บาท',
      'ฟีเจอร์ Air Gestures โบกมือสั่งการเพื่อเลื่อนดูคลิปหรือรับสายโทรศัพท์ได้โดยไม่ต้องแตะหน้าจอ',
      'ตัวเครื่องบางเฉียบเพียง 7.64 มม. และฝาหลังลวดลายประกายแสงสว่างไหว'
    ],
    limitations: [
      'รองรับเครือข่าย 4G LTE',
      'หน้าจอความละเอียด HD+'
    ],
    lastUpdated: '2026-10-20'
  },
  {
    id: 'bnn-realme-note-50',
    name: 'realme Note 50',
    category: 'mobile',
    brand: 'Realme',
    price: 2799,
    originalPrice: 3199,
    rating: 4.6,
    reviewCount: 380,
    inStock: true,
    stockCount: 65,
    tags: ['มือถือราคาประหยัดที่สุด', 'งบไม่เกินสามพัน', 'จอใหญ่ 90Hz', 'กันน้ำละออง IP54', 'บาง 7.99 มม.'],
    colors: [
      {
        name: 'ฟ้าสกายบลู Sky Blue',
        hex: '#7dd3fc',
        overlayHex: '#7dd3fc',
        image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&w=900&q=80'
      },
      {
        name: 'ดำมิดไนท์ Midnight Black',
        hex: '#18181b',
        overlayHex: '#18181b',
        image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=900&q=80'
      }
    ],
    defaultImage: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&w=900&q=80',
    specs: {
      screen: '6.74 นิ้ว 90Hz Vivid Display, มินิแคปซูล Mini Capsule แจ้งเตือนแบตเตอรี่และการนับก้าว',
      processor: 'Unisoc T612 (12nm) Octa-core ประสิทธิภาพสูง',
      ram: '4GB (+ ขยาย Dynamic RAM ได้ 4GB รวม 8GB)',
      storage: '64GB / 128GB (รองรับใส่ MicroSD สูงสุด 2TB)',
      rearCamera: '13MP AI Dual Camera (f/2.2) + Auxiliary Lens',
      frontCamera: '5MP (f/2.22)',
      battery: '5,000 mAh แบตเตอรี่อึดใช้งานได้ถึง 2 วัน',
      charging: '10W Charging ผ่านพอร์ต Type-C',
      os: 'realme UI T Edition บน Android 13 คลีนและเบาเครื่อง',
      weight: '186 กรัม บางเพียง 7.99 มม.',
      connectivity: '4G LTE, Wi-Fi 5, Bluetooth 5.0, ช่องเสียบหูฟัง 3.5 มม., สแกนลายนิ้วมือด้านข้าง, กันละอองน้ำ IP54'
    },
    promotions: [
      'ราคาโปรพิเศษ 2,799 บาท ที่ BaNANA IT (ลดจาก 3,199.-)',
      'ผ่อน 0% นาน 3 เดือน บัตรเครดิตที่ร่วมรายการ'
    ],
    freeGifts: [
      'หัวชาร์จและสายเคเบิล Type-C',
      'เคสใส',
      'ฟิล์มกันรอย'
    ],
    warranty: 'ประกันศูนย์ไทย 1 ปีเต็ม',
    afterSales: 'บริการแนะนำและตั้งค่าเครื่องใหม่ฟรีที่สาขา BaNANA',
    highlightPoints: [
      'สมาร์ทโฟนราคาเข้าถึงง่ายที่สุดของ realme เพียง 2,799 บาท',
      'หน้าจอขนาดใหญ่ 6.74 นิ้ว รีเฟรชเรท 90Hz ลื่นไหลสบายตาเกินราคา',
      'ตัวเครื่องบางเพียง 7.99 มม. ดีไซน์ทูโทนสวยงาม',
      'ผ่านการรับรองมาตรฐานกันน้ำกันฝุ่นระดับ IP54 และมีสแกนลายนิ้วมือด้านข้าง'
    ],
    limitations: [
      'ความเร็วชาร์จ 10W',
      'กล้องหลัง 13MP เหมาะสำหรับการถ่ายภาพพื้นฐาน'
    ],
    lastUpdated: '2026-10-20'
  },

  // ==========================================
  // BRAND 7: HONOR (Magic Series, Number Series, X Series จาก BaNANA IT)
  // ==========================================
  {
    id: 'bnn-honor-magic-v3',
    name: 'HONOR Magic V3',
    category: 'mobile',
    brand: 'HONOR',
    price: 54990,
    originalPrice: 59990,
    rating: 4.9,
    reviewCount: 195,
    inStock: true,
    stockCount: 12,
    tags: ['เรือธงจอพับบางที่สุดในโลก', 'บางเพียง 9.2 มม.', 'ชิป Snapdragon 8 Gen 3', 'กล้องซูม Periscope 50MP', 'กันน้ำ IPX8'],
    colors: [
      {
        name: 'เขียวมอส Moss Green',
        hex: '#2e4a3e',
        overlayHex: '#2e4a3e',
        image: 'https://images.unsplash.com/photo-1565849904461-04a58ad377e0?auto=format&fit=crop&w=900&q=80',
        images: [
          'https://images.unsplash.com/photo-1565849904461-04a58ad377e0?auto=format&fit=crop&w=900&q=80',
          'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=900&q=80'
        ]
      },
      {
        name: 'ดำ Black',
        hex: '#171717',
        overlayHex: '#171717',
        image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=900&q=80'
      },
      {
        name: 'น้ำตาลไหม้ Silk Brown',
        hex: '#78350f',
        overlayHex: '#78350f',
        image: 'https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&w=900&q=80'
      }
    ],
    defaultImage: 'https://images.unsplash.com/photo-1565849904461-04a58ad377e0?auto=format&fit=crop&w=900&q=80',
    specs: {
      screen: 'จอนอก 6.43 นิ้ว FHD+ 120Hz LTPO (กระจก NanoCrystal Shield ป้องกันรอย 10 เท่า) / จอด้านในพับได้ 7.92 นิ้ว 2344x2156 120Hz LTPO OLED สว่าง 5,000 nits พร้อมระบบถนอมสายตา 4320Hz PWM Dimming',
      processor: 'Qualcomm Snapdragon 8 Gen 3 (4nm) ชิปเซ็ตระดับสูงสุด',
      ram: '16GB LPDDR5X',
      storage: '512GB UFS 4.0 ความเร็วสูงสุด',
      rearCamera: 'กล้องระดับโปร Falcon Camera: 50MP Main เซนเซอร์ใหญ่ (f/1.6, OIS) + 50MP Periscope Telephoto 3.5x ซูมดิจิทัลสูงสุด 100x (f/3.0, OIS) + 40MP Ultra-wide 112° พร้อมโฟกัสมาโคร 2.5 ซม.',
      frontCamera: 'กล้องคู่ 20MP (จอนอก 20MP + จอด้านใน 20MP) รองรับถ่ายวิดีโอ 4K',
      battery: '5,150 mAh แบตเตอรี่ซิลิคอน-คาร์บอน Silicon-Carbon Gen 3 ความหนาแน่นพลังงานสูง',
      charging: '66W Wired HONOR SuperCharge + 50W Wireless SuperCharge + ชาร์จย้อนกลับให้อุปกรณ์อื่น 5W',
      os: 'MagicOS 8.0.1 บน Android 14 พร้อม HONOR AI (Magic Portal, AI Portrait, AI Eraser, AI แปลภาษาเรียลไทม์)',
      weight: '226 กรัม ตัวเครื่องบางเพียง 9.2 มม. (เมื่อพับ) และ 4.35 มม. (เมื่อกางออก)',
      connectivity: '5G Dual SIM, Wi-Fi 7, Bluetooth 5.3, NFC, IR Blaster, ลำโพงคู่สเตอริโอ DTS:X Ultra, กันน้ำระดับ IPX8 ลงน้ำลึก 2.5 เมตร'
    },
    promotions: [
      'ราคาโปรพิเศษ 54,990 บาท ที่ BaNANA IT (ปกติ 59,990.-)',
      'ผ่อน 0% นานสูงสุด 36 เดือน ผ่านบัตรเครดิตที่ร่วมรายการ (เริ่มต้นเดือนละ 1,527 บาท)',
      'ฟรี HONOR Care ประกันหน้าจอแตกทั้งจอนอกและจอใน 1 ปีเต็ม มูลค่า 14,990 บาท'
    ],
    freeGifts: [
      'หัวชาร์จแท้ 66W HONOR SuperCharge',
      'เคสหนังแท้พรีเมียมแบบมีขาตั้ง Kickstand ในตัว',
      'ปากกา HONOR Magic-Pen รองรับแรงกด 4096 ระดับ'
    ],
    warranty: 'ประกันศูนย์ไทย SYNNEX ทั่วประเทศ 2 ปีเต็ม (ประกันจอแตก 1 ปี)',
    afterSales: 'บริการเปลี่ยนฟิล์มจอในฟรี 4 ครั้งตลอดอายุการใช้งาน, ช่องทาง Fast Track ซ่อมด่วนใน 1 ชม.',
    highlightPoints: [
      'สมาร์ทโฟนจอพับที่บางและเบาที่สุดในโลก พับแล้วบางเพียง 9.2 มม. ให้ความรู้สึกเหมือนจับสมาร์ทโฟนทั่วไป',
      'แบตเตอรี่ Silicon-Carbon ความจุสูง 5,150 mAh บางเฉียบแต่ใช้งานได้ตลอดวันข้ามคืน',
      'บานพับไทเทเนียม HONOR Super Steel Hinge ทนทานพับได้เกิน 500,000 ครั้ง',
      'ผ่านมาตรฐานกันน้ำระดับ IPX8 ใช้งานลุยฝนหรือลงน้ำได้อย่างมั่นใจ'
    ],
    limitations: [
      'ราคาระดับพรีเมียมอัลตราแฟลกชิป',
      'ไม่มีช่องเสียบหูฟัง 3.5 มม.'
    ],
    lastUpdated: '2026-10-20'
  },
  {
    id: 'bnn-honor-magic6-pro',
    name: 'HONOR Magic6 Pro 5G',
    category: 'mobile',
    brand: 'HONOR',
    price: 34990,
    originalPrice: 37990,
    rating: 4.9,
    reviewCount: 380,
    inStock: true,
    stockCount: 15,
    tags: ['เรือธงกล้องซูม 180MP', 'จอแกร่ง NanoCrystal Shield', 'Snapdragon 8 Gen 3', 'ชาร์จไว 80W + ไร้สาย 66W', 'แบต 5600 mAh'],
    colors: [
      {
        name: 'เขียว Epi Green (ฝาหลังหนังเทียม)',
        hex: '#166534',
        overlayHex: '#166534',
        image: 'https://images.unsplash.com/photo-1565849904461-04a58ad377e0?auto=format&fit=crop&w=900&q=80',
        images: [
          'https://images.unsplash.com/photo-1565849904461-04a58ad377e0?auto=format&fit=crop&w=900&q=80',
          'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=900&q=80'
        ]
      },
      {
        name: 'ดำ Black',
        hex: '#1e293b',
        overlayHex: '#1e293b',
        image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=900&q=80'
      }
    ],
    defaultImage: 'https://images.unsplash.com/photo-1565849904461-04a58ad377e0?auto=format&fit=crop&w=900&q=80',
    specs: {
      screen: '6.8 นิ้ว All-range Low-power LTPO OLED Quad-Curved, 1-120Hz, ความสว่างพีค 5,000 nits, กระจก HONOR NanoCrystal Shield ทนทานต่อการตกกระแทก 10 เท่า, 4320Hz PWM Dimming',
      processor: 'Qualcomm Snapdragon 8 Gen 3 (4nm) พร้อมชิปความปลอดภัย Discrete Security Chip S1',
      ram: '12GB LPDDR5X',
      storage: '512GB UFS 4.0 ความเร็วสูงสุด',
      rearCamera: 'กล้องพลัง AI Falcon Camera: 50MP กล้องหลักปรับรูรับแสงอัจฉริยะ f/1.4-f/2.0 (OIS) + 180MP Periscope Telephoto ขนาดเซนเซอร์ 1/1.49 นิ้ว ซูมออปติคอล 2.5x และซูมดิจิทัลสูงสุด 100x (OIS) + 50MP Ultra-wide 122°',
      frontCamera: '50MP ไวด์ (f/2.0) + กล้อง 3D Depth Camera สแกนใบหน้าปลดล็อกระดับความปลอดภัยทางการเงิน',
      battery: '5,600 mAh แบตเตอรี่ซิลิคอน-คาร์บอน ทนต่อความเย็นจัด -20°C',
      charging: '80W Wired SuperCharge + 66W Wireless SuperCharge',
      os: 'MagicOS 8.0 บน Android 14 ขับเคลื่อนด้วย AI MagicLM ในตัว',
      weight: '229 กรัม ดีไซน์กล้องทรงเบาะนาฬิกา Star Wheel สวยหรูหรา',
      connectivity: '5G, Wi-Fi 7, Bluetooth 5.3, NFC, IR Blaster, ลำโพงคู่สเตอริโอ พร้อมระบบกันน้ำกันฝุ่น IP68'
    },
    promotions: [
      'ลดราคาพิเศษเหลือ 34,990 บาท ที่ BaNANA IT (ปกติ 37,990.-)',
      'ผ่อน 0% นานสูงสุด 24 เดือน (เพียงเดือนละ 1,458 บาท)',
      'รับฟรีแท่นชาร์จไร้สาย HONOR Wireless SuperCharge Stand 100W มูลค่า 2,499 บาท'
    ],
    freeGifts: [
      'หัวชาร์จ 80W SuperCharge แท้ในกล่อง',
      'เคสพรีเมียมตรงรุ่น',
      'HONOR Care ประกันหน้าจอแตก 1 ปี'
    ],
    warranty: 'ประกันศูนย์ไทย SYNNEX 2 ปีเต็ม (ประกันจอแตก 1 ปี)',
    afterSales: 'บริการส่งเคลมด่วนผ่านสาขา BaNANA และ SYNNEX พร้อมบริการเครื่องสำรอง',
    highlightPoints: [
      'กล้องเทเลโฟโต้ความละเอียดสูงที่สุดในวงการ 180MP ซูมไกลคมชัด และจับภาพกีฬาความเร็วสูงได้แม่นยำด้วย AI Motion Sensing',
      'กระจกหน้าจอ HONOR NanoCrystal Shield ผ่านการรับรองความทนทาน 5 ดาวจาก SGS ทนแรงกระแทกได้ดีกว่ากระจกทั่วไปถึง 10 เท่า',
      'แบตเตอรี่ Silicon-Carbon เจเนอเรชันใหม่ 5,600 mAh อยู่ได้ยาวนานข้ามวันแม้เปิดใช้งาน 5G ตลอดเวลา',
      'กล้องหน้า 3D Depth สแกนใบหน้า 3 มิติ ปลดล็อกในที่มืดสนิทและรองรับการยืนยันธุรกรรมการเงิน'
    ],
    limitations: [
      'น้ำหนักตัวเครื่อง 229 กรัม',
      'ขนาดโมดูลกล้องหลังค่อนข้างใหญ่'
    ],
    lastUpdated: '2026-10-20'
  },
  {
    id: 'bnn-honor-200-pro',
    name: 'HONOR 200 Pro 5G',
    category: 'mobile',
    brand: 'HONOR',
    price: 19990,
    originalPrice: 21990,
    rating: 4.8,
    reviewCount: 340,
    inStock: true,
    stockCount: 25,
    tags: ['สตูดิโอพอร์ตเทรตระดับโลก Studio Harcourt', 'Snapdragon 8s Gen 3', 'ชาร์จไว 100W', 'ชาร์จไร้สาย 66W', 'กล้องหน้าคู่ 50MP'],
    colors: [
      {
        name: 'ขาว Ocean Cyan',
        hex: '#a5f3fc',
        overlayHex: '#a5f3fc',
        image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=900&q=80',
        images: [
          'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=900&q=80',
          'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=900&q=80'
        ]
      },
      {
        name: 'ดำ Moonlight Black',
        hex: '#0f172a',
        overlayHex: '#0f172a',
        image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=900&q=80'
      }
    ],
    defaultImage: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=900&q=80',
    specs: {
      screen: '6.78 นิ้ว Quad-Curved AMOLED, 120Hz, ความสว่าง 4,000 nits, ระบบถนอมสายตา 3840Hz Risk-Free PWM Dimming ได้รับมาตรฐาน TÜV Rheinland',
      processor: 'Qualcomm Snapdragon 8s Gen 3 (4nm) เรือธง พร้อมระบบระบายความร้อน All-range Liquid Cooling System',
      ram: '12GB LPDDR5X',
      storage: '512GB ความจุใหญ่จัดเต็ม',
      rearCamera: 'กล้องร่วมพัฒนา Studio Harcourt: 50MP กล้องหลัก เซนเซอร์เฉพาะ H9000 1/1.3 นิ้ว (f/1.9, OIS) + 50MP Telephoto เซนเซอร์ Sony IMX856 (f/2.4, OIS, ซูมไฮบริด 50x) + 12MP Ultra-wide 112°',
      frontCamera: 'กล้องหน้าคู่: 50MP Portrait Selfie (f/2.1) + 3D Depth Sensor',
      battery: '5,200 mAh แบตเตอรี่ซิลิคอน-คาร์บอน ความจุสูง',
      charging: '100W Wired SuperCharge (ชาร์จ 60% ใน 15 นาที และ 100% ใน 41 นาที) + 66W Wireless SuperCharge',
      os: 'MagicOS 8.0 บน Android 14 พร้อม AI Harcourt Portrait Engine',
      weight: '199 กรัม ดีไซน์ฝาหลังลายคลื่นทะเลชายหาดธรรมชาติ',
      connectivity: '5G Dual SIM, Wi-Fi 6, Bluetooth 5.3, NFC, ลำโพงสเตอริโอคู่พร้อมระบบเสียง Stereo Sound Field, กันน้ำ IP55 / IP65'
    },
    promotions: [
      'ราคาโปรพิเศษ 19,990 บาท ที่ BaNANA IT (ปกติ 21,990.-)',
      'ผ่อน 0% นานสูงสุด 18 เดือน เริ่มต้นเดือนละ 1,111 บาท',
      'ฟรี ลำโพงบลูทูธพกพา HONOR Choice Speaker และชุดของขวัญ'
    ],
    freeGifts: [
      'หัวชาร์จแท้ 100W HONOR SuperCharge Adapter ในกล่อง',
      'เคสพรีเมียมตรงรุ่น',
      'ฟิล์มกันรอยติดตั้งเรียบร้อย'
    ],
    warranty: 'ประกันศูนย์ไทย 1 ปีเต็ม',
    afterSales: 'บริการทำความสะอาดและตรวจเช็กสภาพเครื่องฟรีที่ศูนย์บริการ SYNNEX และ BaNANA IT',
    highlightPoints: [
      'ถ่ายภาพพอร์ตเทรตคนสวยระดับตำนานร่วมกับสตูดิโอชั้นนำระดับโลก Studio Harcourt ในปารีส แสงเงาและมิติภาพสวยเนียนระดับภาพถ่ายนิตยสาร',
      'ชิป Snapdragon 8s Gen 3 ประสิทธิภาพระดับเรือธง ทำงานและเล่นเกมได้อย่างลื่นไหลไร้สะดุด',
      'รองรับทั้งชาร์จไวมีสาย 100W และชาร์จไร้สายเร็วถึง 66W ครบเครื่องที่สุดในคลาส',
      'กล้องหน้าคู่ 50MP พร้อม 3D Depth ถ่ายเซลฟี่หน้าชัดหลังละลายได้เป็นธรรมชาติที่สุด'
    ],
    limitations: [
      'กันน้ำมาตรฐาน IP55 (กันละอองน้ำและฝน)',
      'ไม่มีช่องเสียบหูฟัง 3.5 มม.'
    ],
    lastUpdated: '2026-10-20'
  },
  {
    id: 'bnn-honor-200',
    name: 'HONOR 200 5G',
    category: 'mobile',
    brand: 'HONOR',
    price: 14990,
    originalPrice: 15990,
    rating: 4.8,
    reviewCount: 290,
    inStock: true,
    stockCount: 30,
    tags: ['กล้องสตูดิโอ Harcourt 50MP', 'Snapdragon 7 Gen 3', 'ชาร์จไว 100W', 'จอถนอมสายตา 3840Hz', 'RAM 12GB+512GB'],
    colors: [
      {
        name: 'เขียว Emerald Green',
        hex: '#059669',
        overlayHex: '#059669',
        image: 'https://images.unsplash.com/photo-1565849904461-04a58ad377e0?auto=format&fit=crop&w=900&q=80'
      },
      {
        name: 'ขาว Moonlight White',
        hex: '#f8fafc',
        overlayHex: '#f8fafc',
        image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=900&q=80'
      },
      {
        name: 'ดำ Black',
        hex: '#0f172a',
        overlayHex: '#0f172a',
        image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=900&q=80'
      }
    ],
    defaultImage: 'https://images.unsplash.com/photo-1565849904461-04a58ad377e0?auto=format&fit=crop&w=900&q=80',
    specs: {
      screen: '6.7 นิ้ว AMOLED Quad-Curved, 120Hz, ความสว่างพีค 4,000 nits, 3840Hz Risk-Free PWM Dimming',
      processor: 'Qualcomm Snapdragon 7 Gen 3 (4nm) ชิปเซ็ต 5G พลังสูงและประหยัดพลังงาน',
      ram: '12GB LPDDR5',
      storage: '256GB / 512GB',
      rearCamera: '50MP กล้องหลัก Sony IMX906 (f/1.95, OIS) + 50MP Telephoto Sony IMX856 (f/2.4, OIS, ซูมดิจิทัล 50x) + 12MP Ultra-wide 112° พร้อมโหมด Harcourt Studio Portrait',
      frontCamera: '50MP Portrait Selfie (f/2.1)',
      battery: '5,200 mAh แบตเตอรี่ซิลิคอน-คาร์บอน',
      charging: '100W Wired SuperCharge (ชาร์จ 57% ใน 15 นาที)',
      os: 'MagicOS 8.0 บน Android 14',
      weight: '187 กรัม บางเฉียบเพียง 7.7 มม.',
      connectivity: '5G, Wi-Fi 6, Bluetooth 5.3, NFC, ลำโพงคู่สเตอริโอ'
    },
    promotions: [
      'ราคาโปรโมชั่น 14,990 บาท ที่ BaNANA IT (ปกติ 15,990.-)',
      'ผ่อน 0% นาน 10 เดือน เริ่มต้นเดือนละ 1,499 บาท'
    ],
    freeGifts: [
      'หัวชาร์จ 100W SuperCharge แท้ในกล่อง',
      'เคสใสกันกระแทก',
      'ฟิล์มกระจกติดหน้าจอ'
    ],
    warranty: 'ประกันศูนย์ไทย 1 ปีเต็ม',
    afterSales: 'บริการอัปเดตระบบและทำความสะอาดเครื่องฟรีที่สาขา BaNANA',
    highlightPoints: [
      'ได้โหมดถ่ายภาพบุคคลระดับมืออาชีพ Studio Harcourt เช่นเดียวกับรุ่น Pro ในราคาจับต้องง่ายกว่า',
      'กล้อง Telephoto 50MP พร้อม OIS หาได้ยากมากในสมาร์ทโฟนระดับราคานี้',
      'ชาร์จไวระดับซูเปอร์สปีด 100W และแบตเตอรี่ Silicon-Carbon 5,200 mAh บางเบา',
      'ตัวเครื่องบางเพียง 7.7 มม. น้ำหนักเบา 187 กรัม จับถือถนัดมือ'
    ],
    limitations: [
      'ไม่รองรับชาร์จไร้สาย (รุ่น Pro รองรับ 66W)',
      'ไม่มีกล้องวัดระยะ 3D ที่กล้องหน้า'
    ],
    lastUpdated: '2026-10-20'
  },
  {
    id: 'bnn-honor-x9b-5g',
    name: 'HONOR X9b 5G',
    category: 'mobile',
    brand: 'HONOR',
    price: 8990,
    originalPrice: 10990,
    rating: 4.9,
    reviewCount: 520,
    inStock: true,
    stockCount: 40,
    tags: ['จอแกร่ง Ultra-Bounce กันกระแทก 360°', 'แบตอึด 5800 mAh', 'กล้อง 108MP', 'จอโค้ง AMOLED 120Hz', 'รุ่นยอดนิยม'],
    colors: [
      {
        name: 'ส้ม Sunrise Orange (หนังเทียมหรูหรา)',
        hex: '#ea580c',
        overlayHex: '#ea580c',
        image: 'https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&w=900&q=80'
      },
      {
        name: 'ดำ Midnight Black',
        hex: '#020617',
        overlayHex: '#020617',
        image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=900&q=80'
      },
      {
        name: 'เขียว Emerald Green',
        hex: '#047857',
        overlayHex: '#047857',
        image: 'https://images.unsplash.com/photo-1565849904461-04a58ad377e0?auto=format&fit=crop&w=900&q=80'
      }
    ],
    defaultImage: 'https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&w=900&q=80',
    specs: {
      screen: '6.78 นิ้ว 1.5K Retina Curved AMOLED, 120Hz, ความสว่าง 1,200 nits, เทคโนโลยีกันกระแทก 360° HONOR Ultra-Bounce Anti-Drop Display รับรองมาตรฐาน 5 ดาวจาก SGS',
      processor: 'Qualcomm Snapdragon 6 Gen 1 (4nm) 5G Octa-core',
      ram: '12GB (+ ขยาย RAM เสมือนได้ 8GB รวม 20GB)',
      storage: '256GB',
      rearCamera: '108MP กล้องหลักขนาดเซนเซอร์ 1/1.67 นิ้ว (f/1.75, ซูม Lossless 3x) + 5MP Ultra-wide 110° + 2MP Macro',
      frontCamera: '16MP (f/2.45)',
      battery: '5,800 mAh แบตเตอรี่ความจุใหญ่พิเศษ การันตีสุขภาพแบตเตอรี่ใช้งานได้ 3 วันต่อการชาร์จ 1 ครั้ง',
      charging: '35W Wired HONOR SuperCharge',
      os: 'MagicOS 7.2 บน Android 13 (อัปเกรดเป็น MagicOS 8.0 Android 14 ได้แล้ว)',
      weight: '185 กรัม บาง 7.98 มม.',
      connectivity: '5G Dual SIM, Wi-Fi 5, Bluetooth 5.1, NFC, สแกนลายนิ้วมือใต้หน้าจอ, กันละอองน้ำ IP53'
    },
    promotions: [
      'ราคาโปรโมชั่นพิเศษ 8,990 บาท ที่ BaNANA IT (ปกติ 10,990.-)',
      'ผ่อน 0% นาน 10 เดือน เดือนละ 899 บาท',
      'ฟรี ประกันหน้าจอแตกและประกันตัวเครื่อง 1 ปีเต็ม'
    ],
    freeGifts: [
      'หัวชาร์จ 35W SuperCharge',
      'เคสใสกันกระแทก',
      'ฟิล์มกันรอยติดตั้งเรียบร้อย'
    ],
    warranty: 'ประกันศูนย์ไทย SYNNEX 1 ปีเต็ม (ประกันจอแตก 365 วัน)',
    afterSales: 'บริการเปลี่ยนหน้าจอฟรี 1 ครั้งภายใน 1 ปีแรกหากเกิดอุบัติเหตุตกแตก',
    highlightPoints: [
      'หน้าจอกระจกนิรภัย Ultra-Bounce Anti-Drop ตกจากที่สูง 1.5 เมตร ทุกทิศทาง 360 องศา จอไม่แตก',
      'แบตเตอรี่ความจุใหญ่พิเศษ 5,800 mAh ได้รับรางวัล DXOMARK Gold Battery ใช้งานข้ามวันได้อย่างสบายใจ',
      'กล้องหลักความละเอียดสูง 108MP ถ่ายภาพคมชัด ซูมแบบไม่เสียรายละเอียดได้ถึง 3 เท่า',
      'ฝาหลังสีส้ม Sunrise Orange ใช้วัสดุหนังวีแกนสัมผัสหรูหรา ไม่เป็นรอยนิ้วมือ'
    ],
    limitations: [
      'ความเร็วชาร์จ 35W (ใช้เวลาชาร์จประมาณ 1 ชั่วโมงกว่าสำหรับแบต 5,800 mAh)',
      'ลำโพงเดี่ยว (ไม่มีลำโพงคู่สเตอริโอ)'
    ],
    lastUpdated: '2026-10-20'
  },
  {
    id: 'bnn-honor-x8b',
    name: 'HONOR X8b',
    category: 'mobile',
    brand: 'HONOR',
    price: 6999,
    originalPrice: 7999,
    rating: 4.8,
    reviewCount: 260,
    inStock: true,
    stockCount: 35,
    tags: ['กล้อง 108MP', 'กล้องหน้า 50MP พร้อมไฟแฟลช', 'บางเฉียบ 6.78 มม.', 'จอ AMOLED 90Hz', 'Magic Capsule'],
    colors: [
      {
        name: 'เขียวลายข้าวหลามตัด Glamorous Green (หนังเทียม)',
        hex: '#15803d',
        overlayHex: '#15803d',
        image: 'https://images.unsplash.com/photo-1565849904461-04a58ad377e0?auto=format&fit=crop&w=900&q=80'
      },
      {
        name: 'เงิน Titanium Silver',
        hex: '#cbd5e1',
        overlayHex: '#cbd5e1',
        image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=900&q=80'
      },
      {
        name: 'ดำ Midnight Black',
        hex: '#0f172a',
        overlayHex: '#0f172a',
        image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=900&q=80'
      }
    ],
    defaultImage: 'https://images.unsplash.com/photo-1565849904461-04a58ad377e0?auto=format&fit=crop&w=900&q=80',
    specs: {
      screen: '6.7 นิ้ว AMOLED FHD+, 90Hz, ความสว่างพีค 2,000 nits, ระบบถนอมสายตา 3240Hz PWM Dimming, มีฟังก์ชัน Magic Capsule',
      processor: 'Qualcomm Snapdragon 680 (6nm) Octa-core',
      ram: '8GB (+ RAM Turbo 8GB รวม 16GB)',
      storage: '512GB ความจุใหญ่ระดับเรือธง เก็บรูปภาพและวิดีโอได้ไม่จำกัด',
      rearCamera: '108MP กล้องหลัก Ultra-Clear (f/1.75) + 5MP Wide & Depth + 2MP Macro',
      frontCamera: '50MP Spotlight Selfie (f/2.1) พร้อมไฟแฟลช Softlight LED ส่องสว่างด้านหน้าเฉพาะตัว',
      battery: '4,500 mAh',
      charging: '35W Wired SuperCharge (ชาร์จ 50% ภายใน 30 นาที)',
      os: 'MagicOS 7.2 บน Android 13',
      weight: '166 กรัม บางเฉียบเพียง 6.78 มม.',
      connectivity: '4G LTE, Wi-Fi 5, Bluetooth 5.0, สแกนลายนิ้วมือด้านข้าง, USB-C'
    },
    promotions: [
      'ราคาโปรพิเศษ 6,999 บาท ที่ BaNANA IT (ปกติ 7,999.-)',
      'ผ่อน 0% นาน 10 เดือน เดือนละ 700 บาท'
    ],
    freeGifts: [
      'หัวชาร์จ 35W SuperCharge',
      'เคสใส',
      'ฟิล์มกันรอย'
    ],
    warranty: 'ประกันศูนย์ไทย 1 ปีเต็ม',
    afterSales: 'บริการอัปเดตระบบและทำความสะอาดเครื่องฟรีที่สาขา BaNANA',
    highlightPoints: [
      'ให้หน่วยความจำ ROM สูงถึง 512GB ในราคาเพียง 6,999 บาท เก็บข้อมูลได้จุใจที่สุดในงบ',
      'กล้องหน้าเซลฟี่ 50MP มีไฟแฟลช Softlight เฉพาะตัว ถ่ายเซลฟี่ตอนกลางคืนหน้าสว่างเนียนใสเป็นธรรมชาติ',
      'ตัวเครื่องบางเฉียบเพียง 6.78 มม. และเบาเพียง 166 กรัม ดีไซน์ฝาหลังหนังปักลายข้าวหลามตัดหรูหรา',
      'ฟังก์ชัน Magic Capsule แสดงสถานะสายเรียกเข้าและการบันทึกเสียงแบบไดนามิกรอบกล้องหน้า'
    ],
    limitations: [
      'รองรับเครือข่าย 4G LTE (ไม่รองรับ 5G)',
      'แบตเตอรี่ 4,500 mAh เพื่อรักษาความบางเบาของตัวเครื่อง'
    ],
    lastUpdated: '2026-10-20'
  },
  {
    id: 'bnn-honor-x7b-5g',
    name: 'HONOR X7b 5G',
    category: 'mobile',
    brand: 'HONOR',
    price: 5999,
    originalPrice: 6499,
    rating: 4.7,
    reviewCount: 210,
    inStock: true,
    stockCount: 30,
    tags: ['แบตเตอรี่มหึมา 6000 mAh', 'ลำโพงคู่กระหึ่ม 200%', 'กล้อง 108MP', 'มือถือ 5G ราคาประหยัด', 'จอ 90Hz สว่างสู้แดด'],
    colors: [
      {
        name: 'เขียว Emerald Green',
        hex: '#059669',
        overlayHex: '#059669',
        image: 'https://images.unsplash.com/photo-1565849904461-04a58ad377e0?auto=format&fit=crop&w=900&q=80'
      },
      {
        name: 'เงิน Crystal Silver',
        hex: '#e2e8f0',
        overlayHex: '#e2e8f0',
        image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=900&q=80'
      },
      {
        name: 'ดำ Midnight Black',
        hex: '#0f172a',
        overlayHex: '#0f172a',
        image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=900&q=80'
      }
    ],
    defaultImage: 'https://images.unsplash.com/photo-1565849904461-04a58ad377e0?auto=format&fit=crop&w=900&q=80',
    specs: {
      screen: '6.8 นิ้ว TFT LCD FHD+, 90Hz, ความสว่าง 850 nits ใช้งานกลางแจ้งสบายตา',
      processor: 'MediaTek Dimensity 6020 (7nm) 5G Octa-core',
      ram: '8GB (+ RAM Turbo 8GB รวม 16GB)',
      storage: '256GB (รองรับ MicroSD Card ได้สูงสุด 1TB)',
      rearCamera: '108MP กล้องหลักความละเอียดสูง (f/1.75) + 2MP Macro + 2MP Depth',
      frontCamera: '8MP (f/2.0)',
      battery: '6,000 mAh แบตเตอรี่ความจุสะใจ ใช้งานได้ยาวนาน 3 วันเต็ม',
      charging: '35W Wired SuperCharge',
      os: 'MagicOS 7.2 บน Android 13',
      weight: '199 กรัม',
      connectivity: '5G, Wi-Fi 5, Bluetooth 5.1, ช่องเสียบหูฟัง 3.5 มม., ลำโพงคู่สเตอริโอเร่งเสียงได้ 200% High-Volume Mode'
    },
    promotions: [
      'ราคาโปรโมชั่น 5,999 บาท ที่ BaNANA IT (ปกติ 6,499.-)',
      'ผ่อน 0% นาน 6 เดือน เดือนละ 1,000 บาท'
    ],
    freeGifts: [
      'หัวชาร์จ 35W SuperCharge',
      'เคสใส',
      'ฟิล์มกันรอย'
    ],
    warranty: 'ประกันศูนย์ไทย 1 ปีเต็ม',
    afterSales: 'บริการอัปเดตระบบและทำความสะอาดเครื่องฟรีที่สาขา BaNANA',
    highlightPoints: [
      'แบตเตอรี่ความจุยักษ์ 6,000 mAh ใช้งานท่องเน็ต ดูวิดีโอ หรือขับรถส่งอาหารได้ยาวนานต่อเนื่องไม่ต้องกังวลเรื่องแบตหมด',
      'ลำโพงคู่สเตอริโอพร้อมโหมดเร่งเสียง 200% เสียงดังฟังชัดแม้ในสภาพแวดล้อมที่มีเสียงดัง',
      'กล้องหลัก 108MP ถ่ายภาพได้คมชัดและมีมิติยอดเยี่ยมในงบประหยัด',
      'รองรับสัญญาณ 5G พร้อมหน่วยความจำขนาดใหญ่ RAM 8GB + ROM 256GB'
    ],
    limitations: [
      'หน้าจอพาเนล TFT LCD (ไม่ใช่ AMOLED)',
      'กล้องหน้า 8MP'
    ],
    lastUpdated: '2026-10-20'
  },
  {
    id: 'bnn-honor-x6b',
    name: 'HONOR X6b',
    category: 'mobile',
    brand: 'HONOR',
    price: 3499,
    originalPrice: 3999,
    rating: 4.7,
    reviewCount: 180,
    inStock: true,
    stockCount: 45,
    tags: ['กันกระแทก 5 ดาว SGS', 'จอ 90Hz สว่าง 780 nits', 'แบต 5200 mAh ชาร์จไว 35W', 'Magic Capsule', 'รุ่นราคาประหยัดสุดคุ้ม'],
    colors: [
      {
        name: 'เขียว Forest Green',
        hex: '#166534',
        overlayHex: '#166534',
        image: 'https://images.unsplash.com/photo-1565849904461-04a58ad377e0?auto=format&fit=crop&w=900&q=80'
      },
      {
        name: 'ม่วง Starry Purple',
        hex: '#7c3aed',
        overlayHex: '#7c3aed',
        image: 'https://images.unsplash.com/photo-1589739900243-4b52cd9b104e?auto=format&fit=crop&w=900&q=80'
      },
      {
        name: 'ดำ Midnight Black',
        hex: '#0f172a',
        overlayHex: '#0f172a',
        image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=900&q=80'
      }
    ],
    defaultImage: 'https://images.unsplash.com/photo-1565849904461-04a58ad377e0?auto=format&fit=crop&w=900&q=80',
    specs: {
      screen: '6.56 นิ้ว TFT LCD HD+, 90Hz, ความสว่าง 780 nits, มีฟังก์ชันไดนามิก Magic Capsule, ผ่านการรับรองกันกระแทก 5 ดาวจากสถาบัน SGS สวิตเซอร์แลนด์',
      processor: 'MediaTek Helio G85 (12nm) Octa-core',
      ram: '6GB (+ RAM Turbo ขยายได้อีก 6GB รวม 12GB)',
      storage: '128GB (รองรับใส่ MicroSD สูงสุด 1TB)',
      rearCamera: '50MP AI Dual Camera (f/1.8) + 2MP Depth',
      frontCamera: '5MP (f/2.2)',
      battery: '5,200 mAh แบตเตอรี่อึดใช้งานได้นานข้ามวัน',
      charging: '35W Wired SuperCharge (ชาร์จเร็วที่สุดในงบสามพันกว่าบาท)',
      os: 'MagicOS 8.0 บน Android 14',
      weight: '192 กรัม ดีไซน์ขอบเหลี่ยมทันสมัย',
      connectivity: '4G LTE, Wi-Fi 5, Bluetooth 5.1, ช่องเสียบหูฟัง 3.5 มม., เซนเซอร์สแกนลายนิ้วมือด้านข้าง, USB-C'
    },
    promotions: [
      'ราคาโปรพิเศษ 3,499 บาท ที่ BaNANA IT (ปกติ 3,999.-)',
      'ผ่อน 0% นาน 3 เดือน เริ่มต้นเดือนละ 1,166 บาท'
    ],
    freeGifts: [
      'หัวชาร์จ 35W SuperCharge ในกล่อง',
      'เคสใส',
      'ฟิล์มกันรอย'
    ],
    warranty: 'ประกันศูนย์ไทย 1 ปีเต็ม',
    afterSales: 'บริการแนะนำและตั้งค่าเครื่องใหม่ฟรีที่สาขา BaNANA',
    highlightPoints: [
      'สมาร์ทโฟนราคา 3,499 บาทที่ให้ระบบชาร์จเร็วสูงถึง 35W SuperCharge ซึ่งแบรนด์อื่นในราคานี้ให้เพียง 10W-18W',
      'ผ่านการรับรองความทนทานต่อการตกกระแทกระดับ 5 ดาว SGS ทนทานสูงมาก',
      'หน้าจอ 90Hz สว่างสู้แดดได้ถึง 780 nits พร้อมฟังก์ชัน Magic Capsule',
      'ระบบปฏิบัติการใหม่ล่าสุด MagicOS 8.0 บน Android 14'
    ],
    limitations: [
      'ความละเอียดหน้าจอระดับ HD+',
      'กล้องหน้า 5MP',
      'รองรับ 4G LTE'
    ],
    lastUpdated: '2026-10-20'
  },

  // ==========================================
  // BRAND 8: INFINIX (GT Gaming, ZERO, NOTE, HOT, SMART จาก BaNANA IT)
  // ==========================================
  {
    id: 'bnn-infinix-gt-20-pro-5g',
    name: 'Infinix GT 20 Pro 5G',
    category: 'mobile',
    brand: 'Infinix',
    price: 11999,
    originalPrice: 12999,
    rating: 4.9,
    reviewCount: 430,
    inStock: true,
    stockCount: 24,
    tags: ['มือถือเกมมิ่งสเปกทางการแข่งขัน', 'ชิปคู่ Dimensity 8200 Ultimate + Pixelworks', 'จอ 144Hz AMOLED', 'ไฟ Mecha Loop LED', 'ชาร์จบายพาส Bypass Charging'],
    colors: [
      {
        name: 'เงินหุ่นยนต์ Mecha Silver',
        hex: '#94a3b8',
        overlayHex: '#94a3b8',
        image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=900&q=80',
        images: [
          'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=900&q=80',
          'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=900&q=80'
        ]
      },
      {
        name: 'น้ำเงิน Mecha Blue',
        hex: '#1e40af',
        overlayHex: '#1e40af',
        image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&w=900&q=80'
      },
      {
        name: 'ส้ม Mecha Orange',
        hex: '#ea580c',
        overlayHex: '#ea580c',
        image: 'https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&w=900&q=80'
      }
    ],
    defaultImage: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=900&q=80',
    specs: {
      screen: '6.78 นิ้ว FHD+ 144Hz Bezel-less AMOLED, ความสว่างพีค 1,300 nits, 2304Hz PWM Dimming, อัตราตอบสนองการสัมผัส Instant Touch 1500Hz',
      processor: 'MediaTek Dimensity 8200 Ultimate (4nm) 5G + ชิปประมวลผลการแสดงผลเฉพาะทาง Pixelworks X5 Turbo Gaming Display Chip',
      ram: '12GB LPDDR5X (+ ขยาย RAM เสมือนได้สูงสุด 12GB รวม 24GB)',
      storage: '256GB UFS 3.1',
      rearCamera: '108MP เซนเซอร์ Samsung HM6 (f/1.75, OIS กันสั่น) + 2MP Macro + 2MP Depth พร้อมระบบไฟ Mecha Loop LED สั่งงานเปลี่ยนสีตามจังหวะเกม',
      frontCamera: '32MP (f/2.2) พร้อมไฟแฟลชคู่ Dual LED Flash ด้านหน้า',
      battery: '5,000 mAh แบตเตอรี่สำหรับเกมเมอร์ พร้อมระบบระบายความร้อน VC Liquid Cooling ขนาด 78,200 ตร.มม.',
      charging: '45W Hyper Charge พร้อมเทคโนโลยี Bypass Charging 2.0 ส่งกระแสไฟตรงสู่เมนบอร์ดโดยไม่ผ่านแบตเตอรี่ ลดความร้อนขณะเล่นเกม',
      os: 'XOS 14 บน Android 14 การันตีอัปเกรด Android 2 เวอร์ชัน + อัปเดตความปลอดภัย 3 ปี คลีนไร้โฆษณาขยะ',
      weight: '194 กรัม ดีไซน์ไซเบอร์พังก์ Mecha Design สวยโดดเด่น',
      connectivity: '5G Dual SIM, Wi-Fi 6, Bluetooth 5.3, NFC, IR Remote Control, ลำโพงคู่สเตอริโอ Sound by JBL, กันละอองน้ำระดับ IP54'
    },
    promotions: [
      'ราคาพิเศษ 11,999 บาท ที่ BaNANA IT (ปกติ 12,999.-)',
      'ผ่อน 0% นาน 10 เดือน เริ่มต้นเพียงเดือนละ 1,200 บาท',
      'ฟรี ชุด Gaming Kit Set (พัดลมระบายความร้อน MagCooling + เคสเกมมิ่งระบายความร้อน)'
    ],
    freeGifts: [
      'พัดลมระบายความร้อน Gaming Cooling Fan',
      'หัวชาร์จแท้ 45W Hyper Charge พร้อมสาย Type-C ข้อต่อรูปตัว L สำหรับเล่นเกม',
      'เคสใสเกมมิ่งพร้อมเจาะช่องระบายความร้อน',
      'ฟิล์มกระจก 9H'
    ],
    warranty: 'ประกันศูนย์ไทย 1 ปีเต็ม พร้อมบริการซ่อมด่วนผ่าน Carlcare ทั่วประเทศ',
    afterSales: 'บริการเปลี่ยนเครื่องใหม่ภายใน 7 วันหากมีปัญหาจากการผลิต, บริการตรวจเช็กฟรีที่ศูนย์ BaNANA',
    highlightPoints: [
      'สมาร์ทโฟนที่ได้รับเลือกให้ใช้แข่งขันทางการในรายการ RoV Pro League และ PUBG Mobile Super League เล่นเกมได้ลื่นไหล 120fps นิ่งสนิท',
      'ชิปคู่ Dimensity 8200 Ultimate ร่วมกับ Pixelworks X5 Turbo แทรกเฟรมเรตและเพิ่มความคมชัดระดับกราฟิกเกม',
      'ระบบ Bypass Charging 2.0 เล่นเกมขณะเสียบสายชาร์จได้โดยเครื่องไม่ร้อนและไม่ทำให้แบตเตอรี่เสื่อมเร็ว',
      'ฝาหลังมีไฟ Mecha Loop LED ปรับแต่งเอฟเฟกต์แสงไฟได้หลากหลายตามเสียงเพลงหรือการแจ้งเตือน'
    ],
    limitations: [
      'ไม่มีเลนส์ Ultra-wide',
      'ไม่มีช่องเสียบหูฟัง 3.5 มม.'
    ],
    lastUpdated: '2026-10-20'
  },
  {
    id: 'bnn-infinix-zero-40-5g',
    name: 'Infinix ZERO 40 5G',
    category: 'mobile',
    brand: 'Infinix',
    price: 14999,
    originalPrice: 15999,
    rating: 4.9,
    reviewCount: 310,
    inStock: true,
    stockCount: 16,
    tags: ['มือถือสาย Vlog ถ่าย 4K 60fps หน้าหลัง', 'จอ 144Hz 3D Curved AMOLED', 'กล้องหน้า 50MP PDAF', 'ชาร์จไร้สายแม่เหล็ก 20W', 'ร่วมมือกับ GoPro'],
    colors: [
      {
        name: 'ชมพูหินทราย Rock Titanium',
        hex: '#78716c',
        overlayHex: '#78716c',
        image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=900&q=80',
        images: [
          'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=900&q=80',
          'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=900&q=80'
        ]
      },
      {
        name: 'เขียว Moving Garden',
        hex: '#2e4a3e',
        overlayHex: '#2e4a3e',
        image: 'https://images.unsplash.com/photo-1565849904461-04a58ad377e0?auto=format&fit=crop&w=900&q=80'
      },
      {
        name: 'ดำ Violet Garden',
        hex: '#1e1b4b',
        overlayHex: '#1e1b4b',
        image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=900&q=80'
      }
    ],
    defaultImage: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=900&q=80',
    specs: {
      screen: '6.78 นิ้ว 3D Curved AMOLED, 144Hz รีเฟรชเรทสูงสุด, ความสว่าง 1,300 nits, กระจก Corning Gorilla Glass 5, ผ่านการรับรองสีแม่นยำจาก TÜV Rheinland',
      processor: 'MediaTek Dimensity 8200 Ultimate (4nm) 5G Octa-core',
      ram: '12GB LPDDR5X (+ ขยาย RAM เสมือนได้อีก 12GB รวม 24GB)',
      storage: '512GB UFS 3.1 ความจุใหญ่สำหรับวิดีโอ 4K',
      rearCamera: '108MP กล้องหลัก Samsung ISOCELL HM6 (f/1.75, OIS กันสั่น) + 50MP Ultra-wide 120° (f/2.0, โฟกัสมาโคร 2.5 ซม.) + 2MP Depth รองรับ 4K 60fps และโหมดเชื่อมต่อควบคุมกล้อง GoPro',
      frontCamera: '50MP ISOCELL JN1 (f/2.45) พร้อมระบบโฟกัสอัตโนมัติ PDAF และบันทึกวิดีโอ 4K 60fps แบบ Pro Vlog',
      battery: '5,000 mAh พร้อมระบบจัดการพลังงาน All-Round FastCharge 2.0',
      charging: '45W Wired FastCharge (ชาร์จ 60% ใน 25 นาที) + ชาร์จไร้สายแม่เหล็ก 20W Wireless MagCharge + ชาร์จไร้สายย้อนกลับ 10W Reverse Charge',
      os: 'XOS 14.5 บน Android 14 รองรับการอัปเกรดเป็น Android 16',
      weight: '198 กรัม ดีไซน์พรีเมียมหรูหรา',
      connectivity: '5G, Wi-Fi 6E, Bluetooth 5.3, NFC, ลำโพงสเตอริโอคู่จูนเสียงโดย JBL, ไมโครโฟน 3 ตัวตัดเสียงรบกวน, กันน้ำกันฝุ่น IP54'
    },
    promotions: [
      'ราคาโปรโมชั่น 14,999 บาท ที่ BaNANA IT (ปกติ 15,999.-)',
      'ผ่อน 0% นาน 10 เดือน เดือนละ 1,500 บาท',
      'รับฟรี แท่นชาร์จไร้สาย MagCharge และเคสแม่เหล็กมูลค่า 1,590 บาท'
    ],
    freeGifts: [
      'แท่นชาร์จไร้สายแม่เหล็ก Infinix MagPad 15W',
      'เคสแม่เหล็ก Infinix MagCase ตรงรุ่น',
      'หัวชาร์จ 45W FastCharge',
      'ฟิล์มกันรอยจอโค้ง'
    ],
    warranty: 'ประกันศูนย์ไทย 2 ปีเต็ม (ประกันจอแตก 1 ปีแรก)',
    afterSales: 'บริการส่งเคลมด่วนผ่านเคาน์เตอร์ BaNANA IT และศูนย์บริการ Carlcare ทั่วประเทศ',
    highlightPoints: [
      'สมาร์ทโฟนรุ่นแรกในระดับราคานี้ที่บันทึกวิดีโอความละเอียด 4K 60fps ได้ทั้งกล้องหน้าและกล้องหลัง เหมาะสำหรับสาย Vlog และ Content Creator',
      'ร่วมพัฒนาระบบซอฟต์แวร์กับ GoPro สามารถใช้สมาร์ทโฟนเป็นหน้าจอมอนิเตอร์และสั่งการกล้อง GoPro ได้โดยตรง',
      'กล้องหน้าความละเอียดสูง 50MP พร้อมระบบโฟกัสใบหน้าและดวงตาอัตโนมัติ PDAF หน้าไม่เบลอ',
      'รองรับการชาร์จไร้สายแบบดูดติดแม่เหล็ก Wireless MagCharge 20W ใช้งานสะดวกสบาย'
    ],
    limitations: [
      'ไม่มีเลนส์ซูม Telephoto เฉพาะทาง (ใช้ซูม In-sensor 3x ของกล้อง 108MP)',
      'ตัวเครื่องกันน้ำระดับ IP54'
    ],
    lastUpdated: '2026-10-20'
  },
  {
    id: 'bnn-infinix-note-40-pro-plus-5g',
    name: 'Infinix NOTE 40 Pro+ 5G',
    category: 'mobile',
    brand: 'Infinix',
    price: 10999,
    originalPrice: 11999,
    rating: 4.8,
    reviewCount: 390,
    inStock: true,
    stockCount: 28,
    tags: ['ชาร์จไว 100W Multi-Speed', 'ชาร์จไร้สายแม่เหล็ก 20W MagCharge', 'กล้อง 108MP OIS ซูม 3x', 'จอโค้ง 3D AMOLED 120Hz', 'ชิปชาร์จ Cheetah X1'],
    colors: [
      {
        name: 'เขียวหนัง Vintage Green',
        hex: '#2e4a3e',
        overlayHex: '#2e4a3e',
        image: 'https://images.unsplash.com/photo-1565849904461-04a58ad377e0?auto=format&fit=crop&w=900&q=80'
      },
      {
        name: 'ดำ Obsidian Black',
        hex: '#18181b',
        overlayHex: '#18181b',
        image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=900&q=80'
      }
    ],
    defaultImage: 'https://images.unsplash.com/photo-1565849904461-04a58ad377e0?auto=format&fit=crop&w=900&q=80',
    specs: {
      screen: '6.78 นิ้ว 3D Curved AMOLED FHD+, 120Hz, ความสว่าง 1,300 nits, กระจก Corning Gorilla Glass, ระบบถนอมสายตา 2160Hz PWM Dimming',
      processor: 'MediaTek Dimensity 7020 (6nm) 5G Octa-core พร้อมชิปเซ็ตควบคุมการชาร์จอัจฉริยะ Cheetah X1',
      ram: '12GB LPDDR4X (+ ขยาย RAM เสมือนได้อีก 12GB รวม 24GB)',
      storage: '256GB UFS 2.2',
      rearCamera: '108MP กล้องหลัก OIS (f/1.75, ซูม Lossless 3x Super-Zoom) + 2MP Macro + 2MP Depth พร้อมระบบไฟ Active Halo AI Lighting ด้านหลัง',
      frontCamera: '32MP (f/2.2) พร้อมไฟแฟลชคู่หน้า Dual LED Flash',
      battery: '4,600 mAh พร้อมการันตีสุขภาพแบตเตอรี่ 1,600 รอบชาร์จ (ประมาณ 4 ปี)',
      charging: '100W Multi-Speed FastCharge (ชาร์จ 50% ใน 8 นาทีในโหมด Hyper) + ชาร์จไร้สายแม่เหล็ก 20W Wireless MagCharge',
      os: 'XOS 14 บน Android 14 การันตีอัปเดต 2 OS + 3 ปี Security Patch',
      weight: '190 กรัม ดีไซน์ฝาหลังหนังเทียมพรีเมียม',
      connectivity: '5G Dual SIM, Wi-Fi 5, Bluetooth 5.2, NFC, IR Blaster, ลำโพงคู่สเตอริโอ Sound by JBL, กันละอองน้ำระดับ IP53'
    },
    promotions: [
      'ราคาโปรพิเศษ 10,999 บาท ที่ BaNANA IT (ปกติ 11,999.-)',
      'ผ่อน 0% นาน 10 เดือน เพียงเดือนละ 1,100 บาท',
      'ฟรี MagKit Set ในกล่อง (เคสแม่เหล็ก + พาวเวอร์แบงก์แม่เหล็ก MagPower 3,000 mAh)'
    ],
    freeGifts: [
      'พาวเวอร์แบงก์ไร้สายดูดติดหลังเครื่อง MagPower',
      'เคสแม่เหล็ก MagCase',
      'หัวชาร์จแท้ 100W All-Round FastCharge',
      'ฟิล์มกระจกจอโค้ง'
    ],
    warranty: 'ประกันศูนย์ไทย 2 ปีเต็ม (ประกันหน้าจอแตก 1 ปี)',
    afterSales: 'บริการเปลี่ยนแบตเตอรี่ฟรีหากสุขภาพต่ำกว่า 80% ใน 2 ปี, ตรวจเช็กเครื่องฟรีที่ BaNANA IT',
    highlightPoints: [
      'ชาร์จไวสุดพลัง 100W Multi-Speed เสียบชาร์จเพียง 8 นาที ได้แบตเตอรี่ถึง 50%',
      'รองรับระบบนิเวศการชาร์จแม่เหล็ก MagKit ทั้งเคสแม่เหล็กและพาวเวอร์แบงก์ดูดติดหลังเครื่องแถมฟรีในชุด',
      'ไฟ Active Halo AI Lighting วงแหวนไฟด้านหลังกะพริบแจ้งเตือนอัจฉริยะตามสถานะการโทร การชาร์จ และเล่นเกม',
      'ระบบเสียงคุณภาพสูง ลำโพงสเตอริโอคู่ปรับแต่งเสียงโดย JBL มิติเสียงกระหึ่มชัดเจน'
    ],
    limitations: [
      'ความจุแบตเตอรี่ 4,600 mAh เพื่อรองรับระบบชาร์จ 100W และความบางของตัวเครื่อง',
      'ไม่มีเลนส์ Ultra-wide'
    ],
    lastUpdated: '2026-10-20'
  },
  {
    id: 'bnn-infinix-note-40-5g',
    name: 'Infinix NOTE 40 5G',
    category: 'mobile',
    brand: 'Infinix',
    price: 7999,
    originalPrice: 8499,
    rating: 4.8,
    reviewCount: 310,
    inStock: true,
    stockCount: 35,
    tags: ['ชาร์จไร้สายแม่เหล็ก 15W', 'จอ 120Hz AMOLED ไร้ขอบ', 'กล้อง 108MP ซูม 3x', 'ลำโพงคู่ JBL', 'ชิป Dimensity 7020 5G'],
    colors: [
      {
        name: 'ทอง Titan Gold',
        hex: '#eab308',
        overlayHex: '#eab308',
        image: 'https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&w=900&q=80'
      },
      {
        name: 'ดำ Black Obsidian',
        hex: '#18181b',
        overlayHex: '#18181b',
        image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=900&q=80'
      }
    ],
    defaultImage: 'https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&w=900&q=80',
    specs: {
      screen: '6.78 นิ้ว AMOLED Ultra-Narrow Bezel FHD+, 120Hz, ความสว่าง 1,300 nits, กระจก Corning Gorilla Glass',
      processor: 'MediaTek Dimensity 7020 (6nm) 5G Octa-core',
      ram: '12GB (+ ขยาย RAM เสมือนได้ 12GB รวม 24GB)',
      storage: '512GB ความจุยักษ์ใหญ่พิเศษในงบไม่เกินแปดพัน',
      rearCamera: '108MP กล้องหลัก (f/1.75, ซูม Lossless 3x) + 2MP Macro + 2MP AI พร้อมไฟวงแหวน Active Halo AI Lighting',
      frontCamera: '32MP (f/2.2) พร้อมไฟแฟลชคู่หน้า',
      battery: '5,000 mAh แบตเตอรี่อึดใช้งานได้ตลอดวัน',
      charging: '33W Wired All-Round FastCharge 2.0 + ชาร์จไร้สายแม่เหล็ก 15W Wireless MagCharge',
      os: 'XOS 14 บน Android 14',
      weight: '185 กรัม บาง 7.91 มม.',
      connectivity: '5G, Wi-Fi 5, Bluetooth 5.2, NFC, IR Blaster, ลำโพงคู่สเตอริโอ Sound by JBL, กันน้ำ IP54'
    },
    promotions: [
      'ราคาโปรพิเศษ 7,999 บาท ที่ BaNANA IT (ปกติ 8,499.-)',
      'ผ่อน 0% นาน 10 เดือน เริ่มต้นเดือนละ 800 บาท'
    ],
    freeGifts: [
      'เคสแม่เหล็ก MagCase ตรงรุ่น',
      'หัวชาร์จแท้ 33W FastCharge',
      'ฟิล์มกระจก 9H'
    ],
    warranty: 'ประกันศูนย์ไทย 1 ปีเต็ม',
    afterSales: 'บริการอัปเดตระบบและทำความสะอาดเครื่องฟรีที่สาขา BaNANA',
    highlightPoints: [
      'ให้ความจุหน่วยความจำสูงถึง RAM 12GB และ ROM 512GB ในราคาเพียง 7,999 บาท คุ้มค่าที่สุดในตลาดสมาร์ทโฟน 5G',
      'รองรับการชาร์จไร้สายแม่เหล็ก 15W MagCharge ซึ่งแทบไม่มีมือถือแบรนด์ใดในงบนี้ให้มา',
      'หน้าจอ AMOLED ขอบบางเฉียบ 120Hz สแกนลายนิ้วมือใต้หน้าจอ สีสันคมชัด',
      'ลำโพงสเตอริโอคู่ปรับแต่งโดย JBL และไฟวงแหวน Active Halo ด้านหลัง'
    ],
    limitations: [
      'กล้องหลักไม่มีระบบกันสั่น OIS (รุ่น Pro+ มี OIS)',
      'ชาร์จไวมีสาย 33W'
    ],
    lastUpdated: '2026-10-20'
  },
  {
    id: 'bnn-infinix-hot-50-pro-plus',
    name: 'Infinix HOT 50 Pro+ 4G',
    category: 'mobile',
    brand: 'Infinix',
    price: 5999,
    originalPrice: 6499,
    rating: 4.8,
    reviewCount: 370,
    inStock: true,
    stockCount: 40,
    tags: ['มือถือจอโค้งที่บางที่สุดในโลก 6.8 มม.', 'ชิป Helio G100 รุ่นแรก', 'จอ 120Hz 3D Curved AMOLED', 'การันตีลื่นไหล 5 ปี TÜV SÜD', 'สแกนนิ้วใต้จอ'],
    colors: [
      {
        name: 'เทาไทเทเนียม Titanium Grey',
        hex: '#64748b',
        overlayHex: '#64748b',
        image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=900&q=80'
      },
      {
        name: 'ม่วง Dreamy Purple',
        hex: '#a855f7',
        overlayHex: '#a855f7',
        image: 'https://images.unsplash.com/photo-1589739900243-4b52cd9b104e?auto=format&fit=crop&w=900&q=80'
      },
      {
        name: 'ดำ Sleek Black',
        hex: '#0f172a',
        overlayHex: '#0f172a',
        image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=900&q=80'
      }
    ],
    defaultImage: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=900&q=80',
    specs: {
      screen: '6.78 นิ้ว 3D Curved AMOLED FHD+, 120Hz, ความสว่าง 1,300 nits, กระจก Corning Gorilla Glass, สแกนลายนิ้วมือใต้หน้าจอ In-display Fingerprint, ระบบสัมผัสเมื่อมือเปียก Wet & Greasy Touch',
      processor: 'MediaTek Helio G100 (6nm) Octa-core รุ่นแรกของโลก พร้อมการันตีความลื่นไหลระดับ 5 ปี จาก TÜV SÜD 60-Month Fluency Rating',
      ram: '8GB (+ ขยาย RAM เสมือนได้ 8GB รวม 16GB)',
      storage: '256GB (รองรับใส่ MicroSD ได้สูงสุด 2TB)',
      rearCamera: '50MP Ultra-Clear Camera (f/1.6 รูรับแสงกว้าง รับแสงดีในที่มืด) + 2MP Depth + AI Lens',
      frontCamera: '13MP (f/2.2) พร้อมไฟแฟลชคู่หน้า Dual LED',
      battery: '5,000 mAh แบตเตอรี่ความจุใหญ่ การันตีสุขภาพแบต 4 ปี',
      charging: '33W Advanced FastCharge พร้อมฟังก์ชัน Bypass Charging',
      os: 'XOS 14.5 บน Android 14 พร้อมฟีเจอร์ AI Folax Voice Assistant',
      weight: '162 กรัม ตัวเครื่องบางเฉียบที่สุดในโลกเพียง 6.8 มม.',
      connectivity: '4G LTE, Wi-Fi 5, Bluetooth 5.2, NFC, ลำโพงคู่สเตอริโอ Sound by JBL, กันละอองน้ำระดับ IP54'
    },
    promotions: [
      'ราคาโปรพิเศษ 5,999 บาท ที่ BaNANA IT (ปกติ 6,499.-)',
      'ผ่อน 0% นาน 6 เดือน เริ่มต้นเดือนละ 1,000 บาท',
      'ฟรี หูฟังบลูทูธไร้สายและเคสกันกระแทก'
    ],
    freeGifts: [
      'หัวชาร์จ 33W FastCharge',
      'เคสใสกันกระแทก',
      'ฟิล์มกันรอยจอโค้ง'
    ],
    warranty: 'ประกันศูนย์ไทย 1 ปีเต็ม',
    afterSales: 'บริการอัปเดตระบบและทำความสะอาดเครื่องฟรีที่สาขา BaNANA',
    highlightPoints: [
      'สมาร์ทโฟนดีไซน์จอโค้ง 3D Curved AMOLED ที่บางที่สุดในโลกเพียง 6.8 มม. และเบาเพียง 162 กรัม สวยหรูเกินราคา',
      'ชิปเซ็ตประมวลผลรุ่นใหม่ล่าสุด MediaTek Helio G100 6nm แรงลื่นไหลและผ่านการรับรองความลื่นไหลนาน 5 ปีจากสถาบัน TÜV SÜD',
      'หน้าจอ AMOLED 120Hz สแกนลายนิ้วมือใต้จอ รองรับการสัมผัสขณะมือเปียกน้ำหรือมีคราบมัน',
      'ลำโพงคู่สเตอริโอร่วมมือกับ JBL ให้เสียงกระหึ่มมีมิติ'
    ],
    limitations: [
      'รองรับเครือข่าย 4G LTE (ไม่รองรับ 5G)',
      'ไม่มีเลนส์ Ultra-wide'
    ],
    lastUpdated: '2026-10-20'
  },
  {
    id: 'bnn-infinix-hot-50',
    name: 'Infinix HOT 50',
    category: 'mobile',
    brand: 'Infinix',
    price: 3999,
    originalPrice: 4499,
    rating: 4.7,
    reviewCount: 280,
    inStock: true,
    stockCount: 45,
    tags: ['จอ 120Hz ขอบบาง', 'ชิป Helio G100', 'กล้อง 50MP Sony', 'แบต 5000 mAh', 'บางเฉียบ 7.7 มม.'],
    colors: [
      {
        name: 'เขียว Sage Green',
        hex: '#16a34a',
        overlayHex: '#16a34a',
        image: 'https://images.unsplash.com/photo-1565849904461-04a58ad377e0?auto=format&fit=crop&w=900&q=80'
      },
      {
        name: 'เทา Titanium Grey',
        hex: '#64748b',
        overlayHex: '#64748b',
        image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=900&q=80'
      },
      {
        name: 'ดำ Sleek Black',
        hex: '#0f172a',
        overlayHex: '#0f172a',
        image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=900&q=80'
      }
    ],
    defaultImage: 'https://images.unsplash.com/photo-1565849904461-04a58ad377e0?auto=format&fit=crop&w=900&q=80',
    specs: {
      screen: '6.78 นิ้ว FHD+ 120Hz Punch-Hole Display, ความสว่าง 800 nits, มีฟังก์ชัน Magic Ring แสดงสถานะการชาร์จและการโทร',
      processor: 'MediaTek Helio G100 (6nm) Octa-core แรงคุ้มเกินราคา',
      ram: '6GB / 8GB (+ RAM ขยายได้สูงสุด 8GB)',
      storage: '128GB / 256GB (รองรับใส่ MicroSD สูงสุด 2TB)',
      rearCamera: '50MP กล้องหลักเซนเซอร์ Sony (f/1.6) + 2MP Depth + AI Lens',
      frontCamera: '8MP (f/2.0) พร้อมไฟแฟลช LED ด้านหน้า',
      battery: '5,000 mAh',
      charging: '18W FastCharge ผ่านพอร์ต USB-C',
      os: 'XOS 14.5 บน Android 14',
      weight: '187 กรัม บาง 7.7 มม.',
      connectivity: '4G LTE, Wi-Fi 5, Bluetooth 5.2, ช่องเสียบหูฟัง 3.5 มม., สแกนลายนิ้วมือด้านข้าง, ลำโพงเร่งเสียงได้ 300% Ultra Volume'
    },
    promotions: [
      'ราคาโปรพิเศษ 3,999 บาท ที่ BaNANA IT (ปกติ 4,499.-)',
      'ผ่อน 0% นาน 3 เดือน เริ่มต้นเดือนละ 1,333 บาท'
    ],
    freeGifts: [
      'หัวชาร์จ 18W FastCharge',
      'เคสใส',
      'ฟิล์มกันรอย'
    ],
    warranty: 'ประกันศูนย์ไทย 1 ปีเต็ม',
    afterSales: 'บริการแนะนำและตั้งค่าเครื่องใหม่ฟรีที่สาขา BaNANA',
    highlightPoints: [
      'หน้าจอแสดงผลขนาดใหญ่ 6.78 นิ้ว ความละเอียดระดับ FHD+ รีเฟรชเรท 120Hz ในราคาไม่เกินสี่พันบาท',
      'ชิปเซ็ตประมวลผลรุ่นใหม่ Helio G100 สถาปัตยกรรม 6nm เล่นเกมได้ลื่นไหล',
      'กล้อง 50MP ใช้เซนเซอร์ Sony พร้อมรูรับแสง f/1.6 กว้าง ถ่ายภาพกลางคืนได้สว่างชัดเจน',
      'มีช่องเสียบหูฟัง 3.5 มม. และลำโพงเร่งเสียงได้ 300%'
    ],
    limitations: [
      'ชาร์จไว 18W',
      'รองรับ 4G LTE'
    ],
    lastUpdated: '2026-10-20'
  },
  {
    id: 'bnn-infinix-smart-8-pro',
    name: 'Infinix SMART 8 Pro',
    category: 'mobile',
    brand: 'Infinix',
    price: 2999,
    originalPrice: 3299,
    rating: 4.7,
    reviewCount: 220,
    inStock: true,
    stockCount: 50,
    tags: ['กล้อง 50MP AI Dual', 'ไฟแฟลชวงแหวน Ring Flashlight', 'จอ 90Hz Magic Ring', 'ลำโพงเร่งเสียง 200%', 'สแกนนิ้วด้านข้าง'],
    colors: [
      {
        name: 'ทอง Galaxy White',
        hex: '#f5f5f4',
        overlayHex: '#f5f5f4',
        image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=900&q=80'
      },
      {
        name: 'ดำ Timber Black',
        hex: '#18181b',
        overlayHex: '#18181b',
        image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=900&q=80'
      },
      {
        name: 'ฟ้า Shiny Gold',
        hex: '#93c5fd',
        overlayHex: '#93c5fd',
        image: 'https://images.unsplash.com/photo-1585792180666-f7347c490ee2?auto=format&fit=crop&w=900&q=80'
      }
    ],
    defaultImage: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=900&q=80',
    specs: {
      screen: '6.6 นิ้ว HD+ 90Hz Interactive Punch-Hole Display, ความสว่าง 500 nits, มีแถบสถานะแจ้งเตือน Magic Ring',
      processor: 'MediaTek Helio G36 (12nm) Octa-core 2.2 GHz',
      ram: '4GB / 8GB (+ ขยาย RAM เสมือนได้สูงสุด 8GB)',
      storage: '128GB (รองรับใส่ MicroSD สูงสุด 2TB)',
      rearCamera: '50MP AI Dual Camera (f/1.85) พร้อมไฟแฟลชวงแหวน Ring Flashlight สว่าง 4 ดวง',
      frontCamera: '8MP (f/2.0) พร้อมไฟแฟลชคู่หน้า Dual LED Flash',
      battery: '5,000 mAh แบตเตอรี่อึดใช้งานได้ถึง 2 วัน',
      charging: '10W Charging ผ่านพอร์ต Type-C',
      os: 'XOS 13 บน Android 13 (Go Edition) ใช้งานง่ายและเบาเครื่อง',
      weight: '189 กรัม ดีไซน์ผิวสัมผัสเปล่งประกายสวยงาม',
      connectivity: '4G LTE, Wi-Fi 5, Bluetooth 5.0, ช่องเสียบหูฟัง 3.5 มม., สแกนลายนิ้วมือด้านข้าง + ปลดล็อกใบหน้า Face Unlock'
    },
    promotions: [
      'ราคาโปรพิเศษ 2,999 บาท ที่ BaNANA IT (ปกติ 3,299.-)',
      'ผ่อน 0% นาน 3 เดือน เริ่มต้นเดือนละ 1,000 บาท'
    ],
    freeGifts: [
      'หัวชาร์จและสาย Type-C',
      'เคสใส',
      'ฟิล์มกันรอย'
    ],
    warranty: 'ประกันศูนย์ไทย 1 ปีเต็ม',
    afterSales: 'บริการให้คำแนะนำและตั้งค่าเครื่องใหม่ฟรีที่สาขา BaNANA',
    highlightPoints: [
      'สมาร์ทโฟนราคาไม่ถึงสามพันบาทที่ให้กล้องหลังความละเอียดสูงถึง 50MP พร้อมไฟแฟลชวงแหวน Ring Flashlight ถ่ายภาพกลางคืนได้สว่างสดใส',
      'หน้าจอรีเฟรชเรท 90Hz พร้อมลูกเล่น Magic Ring แสดงสถานะการชาร์จแบตเตอรี่และสายเรียกเข้า',
      'มีเซนเซอร์สแกนลายนิ้วมือด้านข้างตัวเครื่อง ปลดล็อกได้รวดเร็วและปลอดภัย',
      'ลำโพงมีโหมดเร่งเสียง 200% Ultra Volume ได้ยินชัดเจนแม้อยู่ในที่แจ้ง'
    ],
    limitations: [
      'ความเร็วชาร์จ 10W',
      'หน้าจอระดับ HD+'
    ],
    lastUpdated: '2026-10-20'
  },
  {
    id: 'bnn-infinix-smart-8',
    name: 'Infinix SMART 8',
    category: 'mobile',
    brand: 'Infinix',
    price: 2499,
    originalPrice: 2799,
    rating: 4.6,
    reviewCount: 310,
    inStock: true,
    stockCount: 60,
    tags: ['มือถือราคาประหยัดเริ่มต้น', 'จอ 90Hz Magic Ring', 'แบตเตอรี่ 5000 mAh', 'พอร์ต Type-C', 'สแกนนิ้วด้านข้าง'],
    colors: [
      {
        name: 'ดำ Timber Black',
        hex: '#18181b',
        overlayHex: '#18181b',
        image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=900&q=80'
      },
      {
        name: 'เขียว Crystal Green',
        hex: '#16a34a',
        overlayHex: '#16a34a',
        image: 'https://images.unsplash.com/photo-1565849904461-04a58ad377e0?auto=format&fit=crop&w=900&q=80'
      },
      {
        name: 'ทอง Shiny Gold',
        hex: '#eab308',
        overlayHex: '#eab308',
        image: 'https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&w=900&q=80'
      }
    ],
    defaultImage: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=900&q=80',
    specs: {
      screen: '6.6 นิ้ว HD+ 90Hz Punch-Hole, ความสว่าง 500 nits, มีแถบสถานะแจ้งเตือน Magic Ring',
      processor: 'Unisoc T606 (12nm) Octa-core ประสิทธิภาพเสถียร',
      ram: '3GB / 4GB (+ ขยาย RAM เสมือนได้สูงสุด 4GB)',
      storage: '64GB / 128GB (รองรับ MicroSD สูงสุด 2TB)',
      rearCamera: '13MP AI Dual Camera (f/1.8) + AI Lens พร้อมไฟแฟลชวงแหวน',
      frontCamera: '8MP (f/2.0) พร้อมไฟแฟลชคู่หน้า Dual LED Flash',
      battery: '5,000 mAh ใช้งานฟังเพลงหรือดูวิดีโอได้นานตลอดวัน',
      charging: '10W Charging ผ่านพอร์ต Type-C',
      os: 'XOS 13 บน Android 13 (Go Edition)',
      weight: '184 กรัม ดีไซน์ฝาหลังมินิมอล',
      connectivity: '4G LTE, Wi-Fi 5, Bluetooth 5.0, ช่องเสียบหูฟัง 3.5 มม., สแกนลายนิ้วมือด้านข้าง, พอร์ต Type-C'
    },
    promotions: [
      'ราคาโปรพิเศษเพียง 2,499 บาท ที่ BaNANA IT (ปกติ 2,799.-)',
      'ผ่อน 0% นาน 3 เดือน เริ่มต้นเดือนละ 833 บาท'
    ],
    freeGifts: [
      'หัวชาร์จและสาย Type-C',
      'เคสใส',
      'ฟิล์มกันรอย'
    ],
    warranty: 'ประกันศูนย์ไทย 1 ปีเต็ม',
    afterSales: 'บริการตรวจเช็กและตั้งค่าเครื่องใหม่ฟรีที่สาขา BaNANA',
    highlightPoints: [
      'สมาร์ทโฟนเริ่มต้นราคาเข้าถึงง่ายที่สุดเพียง 2,499 บาท พร้อมประกันศูนย์ไทย',
      'หน้าจอ 90Hz Punch-Hole พร้อมลูกเล่นแถบการแจ้งเตือน Magic Ring',
      'ใช้พอร์ต USB Type-C ทันสมัย ไม่ต้องกลับด้านสายชาร์จ',
      'มีสแกนลายนิ้วมือด้านข้างตัวเครื่อง ปลดล็อกรวดเร็ว'
    ],
    limitations: [
      'กล้องหลัง 13MP สำหรับถ่ายรูปทั่วไป',
      'ความเร็วชาร์จ 10W'
    ],
    lastUpdated: '2026-10-20'
  },

  // ==========================================
  // BRAND 9: TECNO (CAMON, POVA, SPARK จากศูนย์ไทย)
  // ==========================================
  {
    id: 'bnn-tecno-camon-30-premier-5g',
    name: 'Tecno CAMON 30 Premier 5G',
    category: 'mobile',
    brand: 'Tecno',
    price: 17999,
    originalPrice: 19999,
    rating: 4.9,
    reviewCount: 240,
    inStock: true,
    stockCount: 15,
    tags: ['เรือธงกล้องระบบ PolarAce', 'เซนเซอร์ Sony IMX890 OIS', 'เลนส์ Periscope 3x 50MP', 'จอ 1.5K LTPO 144Hz', 'ชาร์จไว 70W'],
    colors: [
      {
        name: 'เงินหินอ่อน Alps Snowy Silver (หนังเทียม)',
        hex: '#cbd5e1',
        overlayHex: '#cbd5e1',
        image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=900&q=80',
        images: [
          'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=900&q=80',
          'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=900&q=80'
        ]
      },
      {
        name: 'ดำหินบะซอลต์ Hawaii Lava Black',
        hex: '#1e293b',
        overlayHex: '#1e293b',
        image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=900&q=80'
      }
    ],
    defaultImage: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=900&q=80',
    specs: {
      screen: '6.77 นิ้ว 1.5K LTPO AMOLED, 1-144Hz รีเฟรชเรทอัจฉริยะ, ความสว่างพีค 1,400 nits, กระจก Corning Gorilla Glass 5, ระบบสัมผัสเมื่อมือเปียก Wet Finger Touch',
      processor: 'MediaTek Dimensity 8200 Ultimate (4nm) 5G + ชิปประมวลผลการถ่ายภาพอิสระ Sony CXD5622GG PolarAce Imaging Chip',
      ram: '12GB LPDDR5X (+ ขยาย RAM เสมือนได้ 12GB รวม 24GB)',
      storage: '512GB UFS 3.1 ความจุใหญ่พิเศษ',
      rearCamera: 'กล้องระดับโปร 3 ตัว 50MP: 50MP Sony IMX890 ขนาด 1/1.56 นิ้ว (f/1.8, OIS) + 50MP Periscope Telephoto 3x (ซูมดิจิทัล 60x, OIS) + 50MP Ultra-wide 114° พร้อมโหมดมาโคร',
      frontCamera: '50MP พร้อมระบบโฟกัสติดตามดวงตาอัตโนมัติ Eye-tracking Autofocus และรองรับบันทึกวิดีโอ 4K 60fps',
      battery: '5,000 mAh แบตเตอรี่ความจุใหญ่',
      charging: '70W Ultra Charge (ชาร์จ 50% ใน 16 นาที และ 100% ใน 45 นาที)',
      os: 'HiOS 14 บน Android 14 การันตีอัปเดตระบบปฏิบัติการ 2 ปี และแพตช์ความปลอดภัย 3 ปี',
      weight: '210 กรัม ดีไซน์กล้องทรงเรโทรคลาสสิก Classic Side-axis Camera Design พร้อมไฟ Breathing Light แสดงสถานะ',
      connectivity: '5G Dual SIM, Wi-Fi 6, Bluetooth 5.3, NFC, IR Blaster, ลำโพงสเตอริโอคู่พร้อมระบบเสียง Dolby Atmos, กันน้ำละออง IP54'
    },
    promotions: [
      'ราคาโปรพิเศษ 17,999 บาท (ลดจากปกติ 19,999.-)',
      'ผ่อน 0% นานสูงสุด 18 เดือน เริ่มต้นเดือนละ 1,000 บาท',
      'ฟรี ชุดของแถม CAMON VIP Gift Box และเคสหนังพรีเมียม'
    ],
    freeGifts: [
      'หัวชาร์จแท้ 70W Ultra Charge',
      'เคสพรีเมียมตรงรุ่น',
      'ฟิล์มกระจก 9H'
    ],
    warranty: 'ประกันศูนย์ไทย Carlcare / SYNNEX 14 เดือนเต็ม (ประกันจอแตก 6 เดือนแรก)',
    afterSales: 'บริการส่งเคลมด่วนผ่านศูนย์บริการ Carlcare และร้านไอทีชั้นนำทั่วประเทศ',
    highlightPoints: [
      'ชิปประมวลผลภาพคู่ PolarAce ทำงานร่วมกับชิป Sony CXD5622GG ให้การถ่ายวิดีโอ 4K Ultra Night Vision ชัดเจนแม้ในที่มืดสนิท',
      'กล้อง 50MP ครบทุกช่วง ทั้งกล้องหลัก Sony IMX890 OIS, กล้อง Periscope Telephoto 3x OIS และกล้องหน้า 50MP Eye-tracking AF',
      'หน้าจอ 1.5K LTPO AMOLED ปรับรีเฟรชเรทได้ 1-144Hz ลื่นไหลและประหยัดพลังงาน',
      'ดีไซน์บอดี้แบบกล้อง Rangefinder คลาสสิก พร้อมไฟ Action Dot แจ้งเตือนสถานะการบันทึกวิดีโอและการชาร์จ'
    ],
    limitations: [
      'ไม่มีช่องเสียบหูฟัง 3.5 มม.',
      'ไม่รองรับชาร์จไร้สาย'
    ],
    lastUpdated: '2026-10-20'
  },
  {
    id: 'bnn-tecno-camon-30-pro-5g',
    name: 'Tecno CAMON 30 Pro 5G',
    category: 'mobile',
    brand: 'Tecno',
    price: 12999,
    originalPrice: 13999,
    rating: 4.8,
    reviewCount: 290,
    inStock: true,
    stockCount: 20,
    tags: ['กล้อง 50MP เซนเซอร์ Sony IMX890', 'กล้องหน้า 50MP ออโต้โฟกัส', 'จอ 144Hz AMOLED', 'ชิป Dimensity 8200 Ultimate', 'ชาร์จไว 70W'],
    colors: [
      {
        name: 'เงิน Alps Snowy Silver',
        hex: '#cbd5e1',
        overlayHex: '#cbd5e1',
        image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=900&q=80'
      },
      {
        name: 'ดำ Iceland Basalt Dark',
        hex: '#1e293b',
        overlayHex: '#1e293b',
        image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=900&q=80'
      }
    ],
    defaultImage: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=900&q=80',
    specs: {
      screen: '6.78 นิ้ว FHD+ 144Hz AMOLED, ความสว่าง 1,300 nits, กระจก Corning Gorilla Glass',
      processor: 'MediaTek Dimensity 8200 Ultimate (4nm) 5G สถาปัตยกรรมระดับแฟลกชิป',
      ram: '12GB LPDDR5X (+ ขยาย RAM เสมือนได้ 12GB รวม 24GB)',
      storage: '512GB ความจุยักษ์ใหญ่พิเศษในงบหมื่นต้น',
      rearCamera: '50MP กล้องหลักเซนเซอร์ Sony IMX890 ขนาดใหญ่ 1/1.56 นิ้ว (f/1.88, OIS กันสั่น) + 50MP Ultra-wide 114° + 2MP Depth',
      frontCamera: '50MP พร้อมระบบโฟกัสติดตามดวงตาอัตโนมัติ Eye-tracking Autofocus ถ่ายวิดีโอ 4K 60fps',
      battery: '5,000 mAh พร้อมระบบระบายความร้อน 10 ชั้น 4,000 ตร.มม.',
      charging: '70W Ultra Charge (ชาร์จเต็ม 100% ภายในเวลา 48 นาที)',
      os: 'HiOS 14 บน Android 14 พร้อมฟีเจอร์ Ella AI Assistant',
      weight: '188 กรัม บาง 7.7 มม.',
      connectivity: '5G, Wi-Fi 6, Bluetooth 5.3, NFC, IR Blaster, ลำโพงคู่สเตอริโอ Dolby Atmos, กันละอองน้ำ IP53'
    },
    promotions: [
      'ราคาโปรพิเศษ 12,999 บาท (ปกติ 13,999.-)',
      'ผ่อน 0% นาน 10 เดือน เริ่มต้นเดือนละ 1,300 บาท'
    ],
    freeGifts: [
      'หัวชาร์จแท้ 70W Ultra Charge',
      'เคสใสกันกระแทก',
      'ฟิล์มกระจก 9H'
    ],
    warranty: 'ประกันศูนย์ไทย 14 เดือนเต็ม',
    afterSales: 'บริการส่งซ่อมและตรวจเช็กสภาพเครื่องผ่านศูนย์บริการ Carlcare ทั่วไทย',
    highlightPoints: [
      'กล้องหลักใช้เซนเซอร์แฟลกชิป Sony IMX890 50MP พร้อม OIS ถ่ายภาพแสงน้อยได้มิติสวยงามเกินระดับราคา',
      'กล้องหน้า 50MP พร้อมระบบ Eye-tracking AF คมชัดสูง รองรับวิดีโอ 4K 60fps',
      'ชิป Dimensity 8200 Ultimate แรงระดับเรือธง ให้ RAM 12GB และความจุใหญ่ถึง 512GB',
      'หน้าจอแสดงผล 144Hz AMOLED ลื่นไหลตอบสนองไวเยี่ยม'
    ],
    limitations: [
      'ไม่มีเลนส์ซูม Periscope Telephoto (รุ่น Premier มีเลนส์เทเล 50MP 3x)',
      'ไม่มีช่องเสียบหูฟัง 3.5 มม.'
    ],
    lastUpdated: '2026-10-20'
  },
  {
    id: 'bnn-tecno-pova-6-pro-5g',
    name: 'Tecno POVA 6 Pro 5G',
    category: 'mobile',
    brand: 'Tecno',
    price: 9999,
    originalPrice: 10999,
    rating: 4.8,
    reviewCount: 360,
    inStock: true,
    stockCount: 30,
    tags: ['แบตเตอรี่จุยักษ์ 6000 mAh', 'ไฟ Dynamic-Light Mini-LED', 'ชาร์จไว 70W Ultra Charge', 'ดีไซน์ Mecha สุดล้ำ', 'จอ 120Hz AMOLED'],
    colors: [
      {
        name: 'เขียวดาวหาง Comet Green',
        hex: '#16a34a',
        overlayHex: '#16a34a',
        image: 'https://images.unsplash.com/photo-1565849904461-04a58ad377e0?auto=format&fit=crop&w=900&q=80'
      },
      {
        name: 'เทาอุกกาบาต Meteorite Grey',
        hex: '#475569',
        overlayHex: '#475569',
        image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=900&q=80'
      }
    ],
    defaultImage: 'https://images.unsplash.com/photo-1565849904461-04a58ad377e0?auto=format&fit=crop&w=900&q=80',
    specs: {
      screen: '6.78 นิ้ว FHD+ 120Hz AMOLED, ความสว่าง 1,300 nits, 2160Hz High-frequency PWM Dimming, ขอบจอบางเฉียบ 1.3 มม.',
      processor: 'MediaTek Dimensity 6080 (6nm) 5G Octa-core',
      ram: '12GB (+ ขยาย RAM เสมือนได้ 12GB รวม 24GB)',
      storage: '256GB (รองรับ MicroSD Card ได้สูงสุด 1TB)',
      rearCamera: '108MP กล้องหลัก Ultra-sensing (f/1.89, ซูม Lossless 3x) + 2MP Depth + Light Sensor พร้อมระบบไฟ Dynamic-Light Mini-LED 210 ดวง ปรับแต่งได้ 9 โหมด',
      frontCamera: '32MP (f/2.2) พร้อมไฟแฟลชคู่สองสี Dual-tone LED Flash',
      battery: '6,000 mAh แบตเตอรี่ความจุใหญ่พิเศษ บางเพียง 7.88 มม. พร้อมการันตีสุขภาพแบต 6 ปี (1,600 รอบชาร์จ)',
      charging: '70W Ultra Charge (ชาร์จ 50% ใน 20 นาที และ 100% ใน 50 นาที) พร้อมฟังก์ชัน Bypass Charging และชาร์จย้อนกลับให้อุปกรณ์อื่น 10W Reverse Charge',
      os: 'HiOS 14 บน Android 14 ออกแบบธีมสไตล์ Mecha ล้ำสมัย',
      weight: '198 กรัม ดีไซน์ Mecha Design ฝาหลังกึ่งโปร่งใส',
      connectivity: '5G Dual SIM, Wi-Fi 5, Bluetooth 5.3, NFC, ช่องเสียบหูฟัง 3.5 มม., ลำโพงคู่ Dolby Atmos และระบบเสียง Hi-Res, กันน้ำกันฝุ่น IP53'
    },
    promotions: [
      'ราคาโปรพิเศษ 9,999 บาท (ลดจาก 10,999.-)',
      'ผ่อน 0% นาน 10 เดือน เริ่มต้นเดือนละ 1,000 บาท',
      'ฟรี ชุด Gaming Gift Box และพัดลมระบายความร้อน'
    ],
    freeGifts: [
      'หัวชาร์จแท้ 70W Ultra Charge ในกล่อง',
      'เคสใสเกมมิ่งตรงรุ่น',
      'ฟิล์มกระจก 9H'
    ],
    warranty: 'ประกันศูนย์ไทย 14 เดือนเต็ม',
    afterSales: 'บริการตรวจเช็กและดูแลเครื่องฟรีที่ศูนย์บริการ Carlcare',
    highlightPoints: [
      'แบตเตอรี่ความจุใหญ่พิเศษ 6,000 mAh แต่ตัวเครื่องยังคงบางเบาเพียง 7.88 มม. ใช้งานได้ยาวนานข้ามวันสบายๆ',
      'ระบบชาร์จเร็ว 70W Ultra Charge ชาร์จแบต 6,000 mAh ได้รวดเร็วใน 50 นาที และมีระบบ Bypass Charging เล่นเกมเครื่องไม่ร้อน',
      'ฝาหลังมีไฟ Dynamic-Light Effect ใช้ไฟ Mini-LED ถึง 210 ดวง ส่องสว่างตามจังหวะเกม การโทร และฟังเพลง',
      'มีช่องเสียบหูฟัง 3.5 มม. และลำโพงคู่สเตอริโอ Dolby Atmos มิติเสียงรอบทิศทาง'
    ],
    limitations: [
      'ไม่มีเลนส์ Ultra-wide',
      'ชิป Dimensity 6080 เน้นความคุ้มค่าทั่วไป ไม่ใช่ระดับเรือธง'
    ],
    lastUpdated: '2026-10-20'
  },
  {
    id: 'bnn-tecno-spark-20-pro-plus',
    name: 'Tecno SPARK 20 Pro+',
    category: 'mobile',
    brand: 'Tecno',
    price: 6999,
    originalPrice: 7599,
    rating: 4.8,
    reviewCount: 310,
    inStock: true,
    stockCount: 35,
    tags: ['จอโค้ง 3D Double Curved AMOLED 120Hz', 'กล้องคมชัด 108MP', 'ชิป Helio G99 Ultimate', 'กล้องหน้า 32MP แฟลชคู่', 'การันตีลื่นไหล 3 ปี'],
    colors: [
      {
        name: 'เขียวหนังเทียม Magic Skin 2.0 Green',
        hex: '#15803d',
        overlayHex: '#15803d',
        image: 'https://images.unsplash.com/photo-1565849904461-04a58ad377e0?auto=format&fit=crop&w=900&q=80'
      },
      {
        name: 'ทอง Temporal Orbits Gold',
        hex: '#eab308',
        overlayHex: '#eab308',
        image: 'https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&w=900&q=80'
      },
      {
        name: 'ดำ Lunar Frost Black',
        hex: '#0f172a',
        overlayHex: '#0f172a',
        image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=900&q=80'
      }
    ],
    defaultImage: 'https://images.unsplash.com/photo-1565849904461-04a58ad377e0?auto=format&fit=crop&w=900&q=80',
    specs: {
      screen: '6.78 นิ้ว 3D Double Curved AMOLED FHD+, 120Hz, ความสว่าง 1,000 nits, กระจก Corning Gorilla Glass 5 ทนทานต่อการขีดข่วน, สแกนลายนิ้วมือใต้หน้าจอ',
      processor: 'MediaTek Helio G99 Ultimate (6nm) Octa-core พร้อมการันตีความลื่นไหลนาน 3 ปี TÜV 36-Month Fluency',
      ram: '8GB (+ ขยาย RAM เสมือนได้ 8GB รวม 16GB)',
      storage: '256GB (รองรับใส่ MicroSD สูงสุด 1TB)',
      rearCamera: '108MP กล้องหลัก Ultra-sensing ขนาดเซนเซอร์ 1/1.67 นิ้ว (f/1.75, ซูม Lossless 3x) + เลนส์มาโคร + เลนส์ AI พร้อมไฟแฟลชสี่ดวง Quad LED Flash',
      frontCamera: '32MP Glowing Selfie (f/2.2) พร้อมไฟแฟลชคู่หน้า Dual Color LED ปรับอุณหภูมิแสงได้ 3 โทน',
      battery: '5,000 mAh',
      charging: '33W Super Charge (ชาร์จเต็มใน 65 นาที)',
      os: 'Android 14 พร้อมแถบแจ้งเตือนไดนามิก Dynamic Port',
      weight: '179 กรัม ตัวเครื่องบางเฉียบเพียง 7.55 มม. โค้งรับกระชับฝ่ามือ',
      connectivity: '4G LTE, Wi-Fi 5, Bluetooth 5.2, NFC, ลำโพงคู่สเตอริโอปรับแต่งเสียง DTS เร่งเสียงได้ถึง 400%, กันน้ำกันฝุ่น IP53'
    },
    promotions: [
      'ราคาโปรพิเศษ 6,999 บาท (ปกติ 7,599.-)',
      'ผ่อน 0% นาน 10 เดือน เริ่มต้นเดือนละ 700 บาท'
    ],
    freeGifts: [
      'หัวชาร์จ 33W Super Charge',
      'เคสใส',
      'ฟิล์มกันรอยจอโค้ง'
    ],
    warranty: 'ประกันศูนย์ไทย 14 เดือนเต็ม',
    afterSales: 'บริการอัปเดตระบบและทำความสะอาดเครื่องฟรีที่ศูนย์บริการ Carlcare',
    highlightPoints: [
      'ดีไซน์จอโค้ง 3D AMOLED 120Hz แบบสมาร์ทโฟนพรีเมียมราคาแพง ในราคาเพียง 6,999 บาท สวยหรูบางเบาเพียง 7.55 มม.',
      'กล้องหลัก 108MP Ultra-sensing ซูมแบบไม่เสียความละเอียดได้ 3 เท่า ถ่ายภาพได้คมชัดสูง',
      'กล้องหน้า 32MP มีไฟแฟลชคู่ที่ปรับอุณหภูมิแสงได้ 3 โทน (ขาว/อบอุ่น/ธรรมชาติ) สำหรับเซลฟี่ในทุกสภาพแสง',
      'ลำโพงคู่สเตอริโอพร้อมโหมดเร่งเสียง 400% Volume Plus ดังชัดเจน'
    ],
    limitations: [
      'รองรับเครือข่าย 4G LTE (ไม่รองรับ 5G)',
      'ไม่มีเลนส์ Ultra-wide'
    ],
    lastUpdated: '2026-10-20'
  },
  {
    id: 'bnn-tecno-spark-20-pro',
    name: 'Tecno SPARK 20 Pro',
    category: 'mobile',
    brand: 'Tecno',
    price: 5299,
    originalPrice: 5699,
    rating: 4.7,
    reviewCount: 270,
    inStock: true,
    stockCount: 40,
    tags: ['กล้อง 108MP', 'ลำโพงคู่เร่งเสียง 400%', 'จอ 120Hz พร้อม Dynamic Port', 'Helio G99', 'RAM 12GB+256GB'],
    colors: [
      {
        name: 'เขียวหนังเทียม Magic Skin 2.0 Green',
        hex: '#15803d',
        overlayHex: '#15803d',
        image: 'https://images.unsplash.com/photo-1565849904461-04a58ad377e0?auto=format&fit=crop&w=900&q=80'
      },
      {
        name: 'ดำหิมะ Moonlit Black',
        hex: '#0f172a',
        overlayHex: '#0f172a',
        image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=900&q=80'
      },
      {
        name: 'ทอง Sunset Gold',
        hex: '#eab308',
        overlayHex: '#eab308',
        image: 'https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&w=900&q=80'
      }
    ],
    defaultImage: 'https://images.unsplash.com/photo-1565849904461-04a58ad377e0?auto=format&fit=crop&w=900&q=80',
    specs: {
      screen: '6.78 นิ้ว FHD+ 120Hz Hole Screen, ความสว่าง 850 nits, มีระบบ Dynamic Port แสดงสถานะรอบรูกล้องหน้า',
      processor: 'MediaTek Helio G99 (6nm) Octa-core ประสิทธิภาพแรงเสถียร',
      ram: '12GB (+ ขยาย RAM เสมือนได้ 9GB รวม 21GB)',
      storage: '256GB (รองรับ MicroSD สูงสุด 2TB)',
      rearCamera: '108MP กล้องหลักความละเอียดสูง (f/1.75, ซูม Lossless 3x) + 2MP Macro + AI Lens พร้อมไฟแฟลชสี่ดวง',
      frontCamera: '32MP Glowing Selfie พร้อมไฟแฟลชคู่หน้า Dual LED',
      battery: '5,000 mAh แบตเตอรี่อึดใช้งานได้ตลอดวัน',
      charging: '33W Super Charge',
      os: 'Android 13 (อัปเกรดเป็น Android 14 ได้แล้ว)',
      weight: '190 กรัม',
      connectivity: '4G LTE, Wi-Fi 5, Bluetooth 5.2, ช่องเสียบหูฟัง 3.5 มม., ลำโพงคู่สเตอริโอ DTS เร่งเสียง 400% Volume Plus, สแกนลายนิ้วมือด้านข้าง, กันน้ำกันฝุ่น IP53'
    },
    promotions: [
      'ราคาโปรโมชั่น 5,299 บาท (ปกติ 5,699.-)',
      'ผ่อน 0% นาน 6 เดือน เริ่มต้นเดือนละ 883 บาท'
    ],
    freeGifts: [
      'หัวชาร์จ 33W Super Charge',
      'เคสใส',
      'ฟิล์มกันรอย'
    ],
    warranty: 'ประกันศูนย์ไทย 14 เดือนเต็ม',
    afterSales: 'บริการอัปเดตระบบและตรวจเช็กเครื่องฟรีที่ศูนย์บริการ Carlcare',
    highlightPoints: [
      'ให้หน่วยความจำ RAM สูงถึง 12GB และ ROM 256GB ในราคาเพียงห้าพันต้น สเปกคุ้มค่าคุ้มราคาที่สุดในกลุ่มราคาเดียวกัน',
      'กล้องหลักความละเอียดสูง 108MP ถ่ายภาพคมชัด ซูม 3x In-sensor ได้อย่างคมชัด',
      'ลำโพงคู่สเตอริโอระบบเสียง DTS พร้อมโหมดเร่งเสียง 400% เสียงกระหึ่มชัดเจน',
      'หน้าจอ FHD+ ขนาด 6.78 นิ้ว รีเฟรชเรท 120Hz ไหลลื่น'
    ],
    limitations: [
      'หน้าจอพาเนล IPS LCD (ไม่ใช่ AMOLED)',
      'รองรับ 4G LTE'
    ],
    lastUpdated: '2026-10-20'
  },
  {
    id: 'bnn-tecno-spark-20',
    name: 'Tecno SPARK 20',
    category: 'mobile',
    brand: 'Tecno',
    price: 3999,
    originalPrice: 4399,
    rating: 4.6,
    reviewCount: 210,
    inStock: true,
    stockCount: 45,
    tags: ['ฝาหลังหนังเทียม Magic Skin', 'กล้อง 50MP + กล้องหน้า 32MP', 'ลำโพงคู่สเตอริโอ DTS', 'จอ 90Hz Dynamic Port', 'คุ้มค่างบประหยัด'],
    colors: [
      {
        name: 'เขียวหนังเทียม Magic Skin Green',
        hex: '#16a34a',
        overlayHex: '#16a34a',
        image: 'https://images.unsplash.com/photo-1565849904461-04a58ad377e0?auto=format&fit=crop&w=900&q=80'
      },
      {
        name: 'ดำ Gravity Black',
        hex: '#18181b',
        overlayHex: '#18181b',
        image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=900&q=80'
      },
      {
        name: 'ขาว Cyber White',
        hex: '#f8fafc',
        overlayHex: '#f8fafc',
        image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=900&q=80'
      }
    ],
    defaultImage: 'https://images.unsplash.com/photo-1565849904461-04a58ad377e0?auto=format&fit=crop&w=900&q=80',
    specs: {
      screen: '6.56 นิ้ว HD+ 90Hz Punch-Hole, ความสว่าง 500 nits, มีฟังก์ชันแถบแจ้งเตือนไดนามิก Dynamic Port',
      processor: 'MediaTek Helio G85 (12nm) Octa-core เล่นเกมและใช้งานทั่วไปได้ลื่น',
      ram: '8GB (+ ขยาย RAM เสมือนได้ 8GB รวม 16GB)',
      storage: '256GB (รองรับใส่ MicroSD Card สูงสุด 1TB)',
      rearCamera: '50MP Ultra Clear Camera (f/1.6 รูรับแสงกว้าง) + เลนส์เสริม AI พร้อมแฟลชคู่ Dual Flash',
      frontCamera: '32MP Glowing Selfie พร้อมไฟแฟลชคู่หน้า Dual LED Flash ปรับอุณหภูมิแสงได้',
      battery: '5,000 mAh แบตเตอรี่อึดใช้งานได้ทั้งวัน',
      charging: '18W Fast Charge ผ่านพอร์ต USB Type-C',
      os: 'Android 13',
      weight: '185 กรัม บาง 8.45 มม.',
      connectivity: '4G LTE, Wi-Fi 5, Bluetooth 5.2, ช่องเสียบหูฟัง 3.5 มม., ลำโพงคู่สเตอริโอ DTS เสียงดัง 400%, สแกนลายนิ้วมือด้านข้าง, กันละอองน้ำ IP53'
    },
    promotions: [
      'ราคาโปรพิเศษ 3,999 บาท (ปกติ 4,399.-)',
      'ผ่อน 0% นาน 3 เดือน เริ่มต้นเดือนละ 1,333 บาท'
    ],
    freeGifts: [
      'หัวชาร์จ 18W Fast Charge',
      'เคสใส',
      'ฟิล์มกันรอย'
    ],
    warranty: 'ประกันศูนย์ไทย 14 เดือนเต็ม',
    afterSales: 'บริการแนะนำและตั้งค่าเครื่องใหม่ฟรีที่ศูนย์บริการ Carlcare',
    highlightPoints: [
      'ให้หน่วยความจำ RAM 8GB และความจุใหญ่ถึง 256GB ในราคาไม่ถึงสี่พันบาท คุ้มค่าที่สุด',
      'กล้องหน้าความละเอียดสูงถึง 32MP พร้อมไฟแฟลชคู่หน้า เซลฟี่สว่างคมชัดในที่มืด',
      'ลำโพงคู่สเตอริโอระบบเสียง DTS ให้มิติเสียงชัดเจน',
      'ฝาหลังตัวเครื่องสีเขียว Magic Skin ใช้วัสดุหนังวีแกนสัมผัสนุ่มมือ ไม่เป็นรอยนิ้วมือ'
    ],
    limitations: [
      'หน้าจอความละเอียดระดับ HD+',
      'ความเร็วชาร์จ 18W'
    ],
    lastUpdated: '2026-10-20'
  },

  // ==========================================
  // BRAND 10: ZTE (RedMagic, Nubia, Blade จากศูนย์ไทย)
  // ==========================================
  {
    id: 'bnn-zte-redmagic-9s-pro',
    name: 'ZTE Nubia RedMagic 9S Pro 5G',
    category: 'mobile',
    brand: 'ZTE',
    price: 27990,
    originalPrice: 29990,
    rating: 4.9,
    reviewCount: 410,
    inStock: true,
    stockCount: 14,
    tags: ['สุดยอดเกมมิ่งโฟนระดับโลก', 'Snapdragon 8 Gen 3 Leading Version 3.4GHz', 'จอเต็มไร้รูรอยบาก UDC 120Hz', 'พัดลมเทอร์โบในตัว 22000 RPM', 'แบตเตอรี่ยักษ์ 6500 mAh'],
    colors: [
      {
        name: 'ดำใส Cyclone (ฝาหลังโปร่งใสไฟ RGB)',
        hex: '#18181b',
        overlayHex: '#18181b',
        image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=900&q=80',
        images: [
          'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=900&q=80',
          'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=900&q=80'
        ]
      },
      {
        name: 'ดำทึบ Sleet',
        hex: '#09090b',
        overlayHex: '#09090b',
        image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=900&q=80'
      },
      {
        name: 'เงินใส Snowfall',
        hex: '#e2e8f0',
        overlayHex: '#e2e8f0',
        image: 'https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&w=900&q=80'
      }
    ],
    defaultImage: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=900&q=80',
    specs: {
      screen: '6.8 นิ้ว 1.5K True Full-Screen AMOLED ไร้รูรอยบาก (กล้องหน้าซ่อนใต้หน้าจอ UDC Gen 5), 120Hz, ความสว่าง 1,600 nits, 2160Hz PWM Dimming, อัตราตอบสนองการสัมผัส 2000Hz Instant Touch',
      processor: 'Qualcomm Snapdragon 8 Gen 3 Leading Version (เร่งความเร็ว CPU โอเวอร์คล็อกสูงถึง 3.4 GHz, GPU 1GHz) + ชิปประมวลผลเกม Red Core R2 Pro',
      ram: '12GB / 16GB LPDDR5X',
      storage: '256GB / 512GB UFS 4.0 ความเร็วสูงสุด',
      rearCamera: 'กล้องหลังเรียบสนิทกับฝาหลัง 100% ไม่มีโมดูลนูน: 50MP กล้องหลักเซนเซอร์ Samsung GN5 (f/1.88, OIS กันสั่น) + 50MP Ultra-wide 120° Samsung JN1 (f/2.2) + 2MP Macro',
      frontCamera: '16MP กล้องหน้าซ่อนใต้หน้าจอ Under-Display Camera (UDC) หน้าจอแสดงผลเต็มตา 100%',
      battery: '6,500 mAh แบตเตอรี่ความจุใหญ่ระดับสัตว์ประหลาด Dual-cell พร้อมระบบระบายความร้อน ICE 13.5 Magic Cooling System ใช้พัดลมเทอร์โบหมุน 22,000 รอบ/นาที',
      charging: '80W Quick Charge (ชาร์จ 100% ภายในเวลาเพียง 35 นาที) พร้อมระบบ Bypass Charging 2.0 เล่นเกมขณะเสียบชาร์จเครื่องไม่ร้อน',
      os: 'REDMAGIC OS 9.5 บน Android 14 ปรับแต่งสำหรับเกมเมอร์ eSports พร้อมฟังก์ชัน Game Space',
      weight: '229 กรัม ดีไซน์ฝาหลังกระจกแบนเรียบระนาบเดียวกับตัวเครื่อง',
      connectivity: '5G Dual SIM, Wi-Fi 7, Bluetooth 5.4, NFC, ช่องเสียบหูฟัง 3.5 มม., ปุ่ม Shoulder Triggers ระบบสัมผัส 520Hz สองข้าง, ลำโพงคู่สเตอริโอ DTS:X Ultra'
    },
    promotions: [
      'ราคาโปรโมชั่น 27,990 บาท (ลดจากปกติ 29,990.-)',
      'ผ่อน 0% นานสูงสุด 24 เดือน (เพียงเดือนละ 1,166 บาท)',
      'รับฟรี พัดลมแม่เหล็กระบายความร้อน RedMagic Cooler และเคสเกมมิ่งตรงรุ่น'
    ],
    freeGifts: [
      'หัวชาร์จแท้ 80W Quick Charge',
      'เคสใสเกมมิ่งตรงรุ่น',
      'ฟิล์มกระจก 9H'
    ],
    warranty: 'ประกันศูนย์ไทย 1 ปีเต็ม',
    afterSales: 'บริการส่งเคลมด่วนผ่านศูนย์บริการ ZTE / RedMagic Thailand และบริการตรวจเช็กพัดลมฟรี',
    highlightPoints: [
      'ชิปเซ็ตประมวลผลที่แรงที่สุดในโลกสมาร์ทโฟน Snapdragon 8 Gen 3 Leading Version 3.4GHz คะแนน AnTuTu ทะลุ 2.3 ล้านคะแนน',
      'หน้าจอ True Full-Screen ไร้รูรอยบาก 100% ซ่อนกล้องหน้าใต้จอ เล่นเกมและดูคอนเทนต์ได้เต็มตาไร้สิ่งกีดขวาง',
      'พัดลมเทอร์โบระบายความร้อนในตัวหมุน 22,000 RPM พร้อมแผ่นระบายความร้อน 10 ชั้น และไฟ RGB สวยสะกดตา',
      'แบตเตอรี่ความจุใหญ่พิเศษ 6,500 mAh เล่นเกมได้ต่อเนื่องข้ามวัน พร้อมชาร์จไว 80W และมีปุ่ม Shoulder Triggers 520Hz'
    ],
    limitations: [
      'ตัวเครื่องค่อนข้างหนา 8.9 มม. และหนัก 229 กรัม จากแบตเตอรี่และระบบพัดลมในตัว',
      'กล้องหน้าซ่อนใต้จอคุณภาพเหมาะสำหรับการวิดีโอคอล ไม่เน้นเซลฟี่หน้าเนียน'
    ],
    lastUpdated: '2026-10-20'
  },
  {
    id: 'bnn-zte-nubia-flip-5g',
    name: 'ZTE Nubia Flip 5G',
    category: 'mobile',
    brand: 'ZTE',
    price: 12999,
    originalPrice: 15999,
    rating: 4.8,
    reviewCount: 330,
    inStock: true,
    stockCount: 22,
    tags: ['มือถือจอพับตลับแป้งราคาคุ้มที่สุด', 'จอนอกทรงกลมสไตล์นาฬิกา', 'จอพับด้านใน OLED 120Hz ไร้รอย', 'บานพับทดสอบ 200,000 ครั้ง', 'ชาร์จไว 33W'],
    colors: [
      {
        name: 'ทองคอสมิก Cosmic Gold',
        hex: '#eab308',
        overlayHex: '#eab308',
        image: 'https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&w=900&q=80'
      },
      {
        name: 'ม่วงลาเวนเดอร์ Lilac Purple',
        hex: '#c084fc',
        overlayHex: '#c084fc',
        image: 'https://images.unsplash.com/photo-1589739900243-4b52cd9b104e?auto=format&fit=crop&w=900&q=80'
      },
      {
        name: 'ดำคลาสสิก Night Black',
        hex: '#18181b',
        overlayHex: '#18181b',
        image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=900&q=80'
      }
    ],
    defaultImage: 'https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&w=900&q=80',
    specs: {
      screen: 'จอด้านในพับได้ 6.9 นิ้ว 120Hz FHD+ Flexible OLED (2790x1188) ไร้รอยพับ พร้อม 2160Hz PWM Dimming / จอด้านนอกทรงกลม 1.43 นิ้ว Circular OLED สไตล์หน้าปัดสมาร์ทวอทช์ พร้อมลูกเล่นสัตว์เลี้ยงแอนิเมชัน 3D Interactive Pets',
      processor: 'Qualcomm Snapdragon 7 Gen 1 (4nm) 5G Octa-core',
      ram: '8GB (+ ขยาย RAM เสมือนได้ 12GB รวม 20GB)',
      storage: '256GB ความจุใหญ่',
      rearCamera: '50MP AI กล้องคู่ความละเอียดสูง (f/1.8) + 2MP Depth Camera (สามารถใช้จอนอกเป็นกระจกมองตัวอย่างถ่ายเซลฟี่ด้วยกล้องหลัก 50MP ได้ทันที)',
      frontCamera: '16MP กล้องหน้าในจอด้านในสำหรับวิดีโอคอล',
      battery: '4,310 mAh พร้อมบานพับโลหะ Waterdrop Hinge ทนทานพับได้เกิน 200,000 ครั้ง',
      charging: '33W Fast Charge (ชาร์จ 50% ภายใน 18 นาที)',
      os: 'MyOS 13 บน Android 13 ออกแบบสำหรับมือถือจอพับ',
      weight: '214 กรัม บางเพียง 7.0 มม. (เมื่อกางออก) และ 15.5 มม. (เมื่อพับ)',
      connectivity: '5G Dual SIM, Wi-Fi 6, Bluetooth 5.2, NFC, ลำโพงคู่สเตอริโอระบบเสียง DTS:X Ultra และ Snapdragon Sound, สแกนลายนิ้วมือด้านข้าง'
    },
    promotions: [
      'ราคาโปรพิเศษ 12,999 บาท (ลดจากราคาเปิดตัว 15,999.-)',
      'ผ่อน 0% นาน 10 เดือน เริ่มต้นเดือนละ 1,300 บาท',
      'ฟรี กระเป๋าใส่เคสสายสะพายพรีเมียมและประกันจอแตก 1 ปีเต็ม'
    ],
    freeGifts: [
      'หัวชาร์จ 33W Fast Charge',
      'เคสใสสองชิ้นตรงรุ่นพร้อมสายสะพาย Crossbody',
      'ฟิล์มกันรอยจอพับติดเรียบร้อย'
    ],
    warranty: 'ประกันศูนย์ไทย ZTE Thailand 1 ปีเต็ม (ประกันหน้าจอพับ 1 ปี)',
    afterSales: 'บริการเปลี่ยนฟิล์มจอในฟรี 2 ครั้งตลอดอายุการใช้งานที่ศูนย์บริการ ZTE',
    highlightPoints: [
      'สมาร์ทโฟนจอพับ Clamshell Flip ราคาเข้าถึงง่ายที่สุดในประเทศไทย เพียง 12,999 บาท ดีไซน์หรูหราทันสมัย',
      'หน้าจอด้านนอกทรงกลมดีไซน์โมเดิร์น แสดงสายเรียกเข้า ควบคุมเพลง ถ่ายภาพเซลฟี่ และมีสัตว์เลี้ยง 3D น่ารักโต้ตอบได้',
      'สามารถพับตั้ง 90 องศา วางบนโต๊ะถ่ายภาพเซลฟี่หรือบันทึก TikTok ได้โดยไม่ต้องพึ่งพาขาตั้งกล้อง',
      'บานพับเหล็กกล้าความแข็งแรงสูง ไร้ช่องว่างเมื่อพับแนบสนิท'
    ],
    limitations: [
      'ไม่มีเลนส์ Ultra-wide',
      'ไม่รองรับชาร์จไร้สาย'
    ],
    lastUpdated: '2026-10-20'
  },
  {
    id: 'bnn-zte-nubia-focus-pro-5g',
    name: 'ZTE Nubia Focus Pro 5G',
    category: 'mobile',
    brand: 'ZTE',
    price: 7499,
    originalPrice: 7999,
    rating: 4.8,
    reviewCount: 260,
    inStock: true,
    stockCount: 28,
    tags: ['กล้อง 108MP 5 ระยะโฟกัส', 'ปุ่มชัตเตอร์จริง Capture Button', 'สวิตช์ลัด Sliding Switch', 'กันสั่น OIS + EIS', 'บันทึก 4K'],
    colors: [
      {
        name: 'ทองแชมเปญ Light Brown (ฝาหลังลายกระจกกล้องเรโทร)',
        hex: '#d97706',
        overlayHex: '#d97706',
        image: 'https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&w=900&q=80'
      },
      {
        name: 'ดำคลาสสิก Classic Black',
        hex: '#09090b',
        overlayHex: '#09090b',
        image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=900&q=80'
      }
    ],
    defaultImage: 'https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&w=900&q=80',
    specs: {
      screen: '6.72 นิ้ว FHD+ 120Hz Ultra-wide Display, สว่าง 800 nits, มีระบบ Live Island แสดงการแจ้งเตือนรอบรูกล้อง',
      processor: 'Unisoc T760 (6nm) 5G Octa-core ประสิทธิภาพความเร็ว 2.2 GHz',
      ram: '8GB (+ ขยาย RAM เสมือนได้ 12GB รวม 20GB)',
      storage: '256GB UFS 3.1 ความเร็วสูง',
      rearCamera: '108MP กล้องโปรระดับสตูดิโอ (f/1.75, OIS กันสั่น + EIS) รองรับ 5 ทางยาวโฟกัส (18mm, 24mm, 35mm, 50mm, 72mm) + 5MP Ultra-wide & Macro + 2MP Depth รองรับ 4K และโหมด Street Photography พร้อมปุ่มถ่ายรูปจริง Capture Key',
      frontCamera: '32MP (f/2.2) ถ่ายเซลฟี่คมชัด',
      battery: '5,000 mAh แบตเตอรี่ความจุใหญ่',
      charging: '33W Fast Charge (ชาร์จ 50% ใน 20 นาที)',
      os: 'MyOS 13 บน Android 13',
      weight: '222 กรัม ดีไซน์กล้องคลาสสิกวินเทจ Classic Camera Aesthetics',
      connectivity: '5G Dual SIM, Wi-Fi 5, Bluetooth 5.2, NFC, ลำโพงสเตอริโอคู่ DTS, พอร์ต Type-C, สแกนลายนิ้วมือด้านข้าง'
    },
    promotions: [
      'ราคาโปรพิเศษ 7,499 บาท (ลดจากปกติ 7,999.-)',
      'ผ่อน 0% นาน 10 เดือน เดือนละ 750 บาท',
      'ฟรี ฟิลเตอร์เลนส์กล้องและเคสสายคล้องคลาสสิก'
    ],
    freeGifts: [
      'หัวชาร์จ 33W Fast Charge',
      'เคสพรีเมียมสไตล์วินเทจตรงรุ่น',
      'ฟิล์มกระจก 9H'
    ],
    warranty: 'ประกันศูนย์ไทย 1 ปีเต็ม',
    afterSales: 'บริการอัปเดตระบบและทำความสะอาดเครื่องฟรีที่ศูนย์บริการ ZTE',
    highlightPoints: [
      'ออกแบบมาสำหรับคนรักการถ่ายภาพโดยเฉพาะ มีปุ่มชัตเตอร์จริง (Capture Key) และสวิตช์ลัดสไลด์เปิดกล้องถ่ายได้ในเสี้ยววินาที',
      'กล้อง 108MP พร้อมกันสั่น OIS แท้ และระยะถ่ายภาพ 5 ทางยาวโฟกัส (18-72mm) เหมาะสำหรับการถ่ายภาพสตรีทและบุคคล',
      'รองรับการบันทึกวิดีโอความละเอียด 4K คมชัดระดับภาพยนตร์',
      'หน่วยความจำเร็วแรง RAM 8GB + ROM 256GB UFS 3.1 โหลดข้อมูลฉับไว'
    ],
    limitations: [
      'น้ำหนักตัวเครื่อง 222 กรัม จากชุดเลนส์กล้องแก้วขนาดใหญ่',
      'ไม่มีช่องเสียบหูฟัง 3.5 มม.'
    ],
    lastUpdated: '2026-10-20'
  },
  {
    id: 'bnn-zte-nubia-neo-2-5g',
    name: 'ZTE Nubia Neo 2 5G',
    category: 'mobile',
    brand: 'ZTE',
    price: 6999,
    originalPrice: 7499,
    rating: 4.8,
    reviewCount: 380,
    inStock: true,
    stockCount: 35,
    tags: ['มือถือเกมมิ่ง 5G ราคาประหยัด', 'ปุ่ม Shoulder Triggers คู่ที่ขอบ', 'แบตเตอรี่ยักษ์ 6000 mAh', 'จอ 120Hz FHD+', 'ชิป 5G 2.7GHz'],
    colors: [
      {
        name: 'เหลืองไซเบอร์ Sunfire Yellow',
        hex: '#eab308',
        overlayHex: '#eab308',
        image: 'https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&w=900&q=80'
      },
      {
        name: 'เงินเมชา Frost Silver',
        hex: '#cbd5e1',
        overlayHex: '#cbd5e1',
        image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=900&q=80'
      },
      {
        name: 'ดำสตอร์ม Storm Grey',
        hex: '#1e293b',
        overlayHex: '#1e293b',
        image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=900&q=80'
      }
    ],
    defaultImage: 'https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&w=900&q=80',
    specs: {
      screen: '6.72 นิ้ว FHD+ 120Hz Gaming Display, ความสว่าง 850 nits, มีระบบ Live Island และระบบสัมผัสขอบจอ Dual Gaming Shoulder Triggers',
      processor: 'Unisoc T820 (6nm) 5G Octa-core ความเร็วสูงสุด 2.7 GHz',
      ram: '8GB (+ ขยาย RAM เสมือนได้ 12GB รวม 20GB)',
      storage: '256GB UFS 3.1',
      rearCamera: '50MP AI Dual Camera (f/1.8) + 2MP Depth',
      frontCamera: '16MP (f/2.0)',
      battery: '6,000 mAh แบตเตอรี่ขนาดใหญ่พิเศษสำหรับเล่นเกมยาวนานข้ามวัน',
      charging: '33W Fast Charge พร้อมระบบ Bypass Charging เล่นเกมไม่ต้องกลัวแบตเสื่อม',
      os: 'MyOS 13 บน Android 13 พร้อมแอปพลิเคชัน Game Space 2.0',
      weight: '208 กรัม ดีไซน์หุ่นยนต์ Bionic Mecha Design สวยสะดุดตา',
      connectivity: '5G Dual SIM, Wi-Fi 5, Bluetooth 5.2, NFC, ลำโพงสเตอริโอคู่ DTS:X Ultra, สแกนลายนิ้วมือด้านข้าง'
    },
    promotions: [
      'ราคาโปรพิเศษ 6,999 บาท (ปกติ 7,499.-)',
      'ผ่อน 0% นาน 10 เดือน เดือนละ 700 บาท',
      'ฟรี หูฟังเกมมิ่งและปลอกสวมนิ้วสำหรับเล่นเกม'
    ],
    freeGifts: [
      'หัวชาร์จ 33W Fast Charge',
      'เคสใสเกมมิ่ง',
      'ฟิล์มกระจก 9H'
    ],
    warranty: 'ประกันศูนย์ไทย 1 ปีเต็ม',
    afterSales: 'บริการอัปเดตระบบและทำความสะอาดเครื่องฟรีที่ศูนย์บริการ ZTE',
    highlightPoints: [
      'สมาร์ทโฟน 5G เครื่องเดียวในงบไม่เกินเจ็ดพันบาทที่มีปุ่มทริกเกอร์ระบบสัมผัส Dual Shoulder Triggers ที่ขอบเครื่อง ควบคุมการยิงในเกม FPS ได้ 4 นิ้วพร้อมกัน',
      'แบตเตอรี่ความจุใหญ่พิเศษ 6,000 mAh พร้อมระบบชาร์จบายพาส (Bypass Charging) เสียบชาร์จเล่นเกมได้ต่อเนื่องโดยเครื่องไม่ร้อน',
      'ชิปเซ็ตความเร็วสูง 2.7 GHz พร้อม ROM 256GB UFS 3.1 เล่นเกมลื่นไหล',
      'ลำโพงคู่สเตอริโอระบบเสียง DTS:X Ultra มิติเสียงคมชัดระบุทิศทางศัตรูในเกมได้แม่นยำ'
    ],
    limitations: [
      'ไม่มีเลนส์ Ultra-wide',
      'ไม่มีช่องเสียบหูฟัง 3.5 มม.'
    ],
    lastUpdated: '2026-10-20'
  },
  {
    id: 'bnn-zte-blade-a75-5g',
    name: 'ZTE Blade A75 5G',
    category: 'mobile',
    brand: 'ZTE',
    price: 3999,
    originalPrice: 4399,
    rating: 4.7,
    reviewCount: 220,
    inStock: true,
    stockCount: 50,
    tags: ['มือถือ 5G แท้ราคาประหยัดที่สุด', 'จอ 90Hz พร้อม Live Island', 'กล้อง 50MP AI Dual', 'แบต 5000 mAh', 'ฝาหลังกระจกดีไซน์หรู'],
    colors: [
      {
        name: 'เขียวมิ้นต์ Mint Green',
        hex: '#10b981',
        overlayHex: '#10b981',
        image: 'https://images.unsplash.com/photo-1565849904461-04a58ad377e0?auto=format&fit=crop&w=900&q=80'
      },
      {
        name: 'ดำเพชร Diamond Black',
        hex: '#0f172a',
        overlayHex: '#0f172a',
        image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=900&q=80'
      }
    ],
    defaultImage: 'https://images.unsplash.com/photo-1565849904461-04a58ad377e0?auto=format&fit=crop&w=900&q=80',
    specs: {
      screen: '6.6 นิ้ว HD+ 90Hz Punch-Hole, ความสว่าง 500 nits, มีแถบไดนามิกแจ้งเตือน Live Island รอบรูกล้องหน้า',
      processor: 'Unisoc T760 (6nm) 5G Octa-core 2.2 GHz รองรับสัญญาณ 5G สองซิม',
      ram: '4GB (+ ขยาย RAM เสมือนได้ 4GB รวม 8GB)',
      storage: '128GB UFS 3.1 (รองรับ MicroSD สูงสุด 1TB)',
      rearCamera: '50MP AI Dual Camera (f/1.8) + เลนส์วัดระยะชัดลึก',
      frontCamera: '8MP (f/2.0)',
      battery: '5,000 mAh แบตเตอรี่อึดใช้งานได้ถึง 2 วัน',
      charging: '18W Fast Charge ผ่านพอร์ต USB Type-C',
      os: 'Android 13',
      weight: '188 กรัม ดีไซน์ฝาหลังสัมผัสคล้ายกระจกพรีเมียม',
      connectivity: '5G Dual SIM, Wi-Fi 5, Bluetooth 5.2, ช่องเสียบหูฟัง 3.5 มม., สแกนลายนิ้วมือด้านข้าง, พอร์ต Type-C, DTS Audio'
    },
    promotions: [
      'ราคาโปรพิเศษ 3,999 บาท (ลดจาก 4,399.-)',
      'ผ่อน 0% นาน 3 เดือน เริ่มต้นเดือนละ 1,333 บาท'
    ],
    freeGifts: [
      'หัวชาร์จ 18W Fast Charge',
      'เคสใส',
      'ฟิล์มกันรอย'
    ],
    warranty: 'ประกันศูนย์ไทย 1 ปีเต็ม',
    afterSales: 'บริการตั้งค่าเครื่องใหม่ฟรีที่ศูนย์บริการ ZTE',
    highlightPoints: [
      'สมาร์ทโฟน 5G แท้ราคาเข้าถึงง่ายที่สุดเพียง 3,999 บาท ใช้ชิป 6nm ประหยัดแบตเตอรี่',
      'หน้าจอแสดงผล 90Hz ไหลลื่นพร้อมฟังก์ชันลูกเล่นแถบแจ้งเตือน Live Island',
      'หน่วยความจำชนิด UFS 3.1 ที่เร็วกว่า eMMC ในมือถือระดับราคาเดียวกันหลายเท่าตัว',
      'มีช่องเสียบหูฟัง 3.5 มม. และสแกนลายนิ้วมือด้านข้าง'
    ],
    limitations: [
      'หน้าจอความละเอียดระดับ HD+',
      'RAM ตัวเครื่องเริ่มต้น 4GB'
    ],
    lastUpdated: '2026-10-20'
  },

  // ==========================================
  // BRAND 11: NOTHING & CMF (Phone 2, Phone 2a Plus, Phone 2a, CMF Phone 1 จากศูนย์ไทย)
  // ==========================================
  {
    id: 'bnn-nothing-phone-2',
    name: 'Nothing Phone (2)',
    category: 'mobile',
    brand: 'Nothing',
    price: 21990,
    originalPrice: 24990,
    rating: 4.9,
    reviewCount: 390,
    inStock: true,
    stockCount: 16,
    tags: ['ไฟ Glyph Interface 33 โซน LED', 'Snapdragon 8+ Gen 1', 'จอ LTPO OLED 1-120Hz', 'ชาร์จไร้สาย 15W', 'Nothing OS คลีนมินิมอล'],
    colors: [
      {
        name: 'เทาเข้ม Dark Grey',
        hex: '#334155',
        overlayHex: '#334155',
        image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=900&q=80',
        images: [
          'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=900&q=80',
          'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=900&q=80'
        ]
      },
      {
        name: 'ขาว White',
        hex: '#f8fafc',
        overlayHex: '#f8fafc',
        image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&w=900&q=80'
      }
    ],
    defaultImage: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=900&q=80',
    specs: {
      screen: '6.7 นิ้ว Flexible LTPO OLED FHD+, ปรับรีเฟรชเรทได้ 1-120Hz ประหยัดพลังงาน, ความสว่างพีค 1,600 nits, HDR10+, กระจก Corning Gorilla Glass',
      processor: 'Qualcomm Snapdragon 8+ Gen 1 (4nm) ชิปเซ็ตระดับเรือธง ประสิทธิภาพสูงและควบคุมความร้อนได้ดีเยี่ยม',
      ram: '12GB LPDDR5',
      storage: '256GB / 512GB UFS 3.1',
      rearCamera: 'กล้องคู่ระดับโปร 50MP: 50MP Sony IMX890 ขนาด 1/1.56 นิ้ว (f/1.88, OIS + EIS) + 50MP Ultra-wide 114° Samsung JN1 (f/2.2) พร้อมระบบไฟ Glyph Fill Light ส่องสว่างแทนไฟแฟลช',
      frontCamera: '32MP Sony IMX615 (f/2.45) บันทึกวิดีโอ 1080p 60fps',
      battery: '4,700 mAh แบตเตอรี่อึดใช้งานได้ถึง 22.5 ชั่วโมง',
      charging: '45W PPS Fast Charging (ชาร์จ 100% ใน 55 นาที) + 15W Qi Wireless Charging + 5W Reverse Wireless Charging ชาร์จหูฟังไร้สายที่ฝาหลังได้',
      os: 'Nothing OS 2.5 บน Android 14 อินเทอร์เฟซแบบมินิมอล Dot Matrix ไร้แอปขยะ รองรับการอัปเกรด Android 3 ปี และความปลอดภัย 4 ปี',
      weight: '201.2 กรัม ฝาหลังกระจกโค้ง 2.5D โชว์ชิ้นส่วนโครงสร้างภายในโปร่งใสสุดไอคอนิก',
      connectivity: '5G Dual SIM, Wi-Fi 6, Bluetooth 5.3, NFC, ไฟ Glyph Interface 33 โซน LED อิสระ, ลำโพงคู่สเตอริโอ, กันน้ำกันฝุ่น IP54'
    },
    promotions: [
      'ราคาโปรพิเศษ 21,990 บาท (ลดจาก 24,990.-)',
      'ผ่อน 0% นานสูงสุด 24 เดือน เริ่มต้นเดือนละ 916 บาท',
      'รับสิทธิ์แลกซื้อหูฟัง Nothing Ear ลด 1,000 บาท'
    ],
    freeGifts: [
      'สายเคเบิล Type-C แบบโปร่งใสดีไซน์เฉพาะ Nothing',
      'เคสใสแท้ Nothing Clear Case',
      'ฟิล์มกันรอยติดตั้งจากโรงงาน'
    ],
    warranty: 'ประกันศูนย์ไทย 1 ปีเต็ม (บริการโดย KOAN / SYNNEX Thailand)',
    afterSales: 'บริการเปลี่ยนเครื่องใหม่ภายใน 7 วันหากมีปัญหาจากการผลิต และอัปเดตซอฟต์แวร์ต่อเนื่อง',
    highlightPoints: [
      'ดีไซน์ฝาหลังโปร่งใสอันเป็นเอกลักษณ์ไม่เหมือนใคร พร้อมไฟ Glyph Interface 33 โซน แสดงสถานะตัวนับเวลา (Glyph Timer), ระดับเสียง และไฟแจ้งเตือนเฉพาะบุคคล',
      'ชิปเรือธง Snapdragon 8+ Gen 1 ใช้งานตัดต่อ เล่นเกม และกราฟิกได้ลื่นไหล ไร้ความร้อนสะสม',
      'ระบบปฏิบัติการ Nothing OS ที่คลีน สะอาดตา รวดเร็ว และมีวิดเจ็ตมินิมอลสไตล์ขาว-ดำ-แดง ปรับแต่งหน้าจอได้หลากหลาย',
      'รองรับการชาร์จไร้สาย 15W และสามารถชาร์จแบตเตอรี่ให้หูฟังไร้สายหรือมือถือเครื่องอื่นได้ผ่านหลังเครื่อง (Reverse Charge)'
    ],
    limitations: [
      'ไม่มีเลนส์ซูม Telephoto',
      'ในกล่องไม่มีอะแดปเตอร์หัวชาร์จแถมมา (มีสายชาร์จโปร่งใส)'
    ],
    lastUpdated: '2026-10-20'
  },
  {
    id: 'bnn-nothing-phone-2a-plus',
    name: 'Nothing Phone (2a) Plus',
    category: 'mobile',
    brand: 'Nothing',
    price: 15499,
    originalPrice: 16990,
    rating: 4.8,
    reviewCount: 280,
    inStock: true,
    stockCount: 20,
    tags: ['ชิป Dimensity 7350 Pro รุ่นแรกของโลก', 'กล้อง 50MP สามตัวรวมกล้องหน้า 4K', 'ชาร์จไว 50W', 'ฝาหลังเมทัลลิกพรีเมียม', 'Glyph Interface'],
    colors: [
      {
        name: 'เทาเมทัลลิก Metallic Grey',
        hex: '#64748b',
        overlayHex: '#64748b',
        image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=900&q=80',
        images: [
          'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=900&q=80',
          'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=900&q=80'
        ]
      },
      {
        name: 'ดำเมทัลลิก Metallic Black',
        hex: '#0f172a',
        overlayHex: '#0f172a',
        image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=900&q=80'
      }
    ],
    defaultImage: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=900&q=80',
    specs: {
      screen: '6.7 นิ้ว Flexible AMOLED FHD+, 120Hz, ความสว่าง 1,300 nits, 2160Hz PWM Dimming, กระจก Corning Gorilla Glass 5, ขอบจอบางสมมาตร 2.1 มม. ทั้ง 4 ด้าน',
      processor: 'MediaTek Dimensity 7350 Pro (4nm) 5G พัฒนาร่วมกันเป็นพิเศษ ความเร็วสูงถึง 3.0 GHz กราฟิก Mali-G610 MC4 เร่งความเร็วขึ้น 30%',
      ram: '12GB (+ ขยาย RAM เสมือนได้ 8GB รวม 20GB)',
      storage: '256GB UFS 2.2',
      rearCamera: '50MP เซนเซอร์ Samsung GN9 ขนาด 1/1.57 นิ้ว (f/1.88, OIS + EIS) + 50MP Ultra-wide 114° Samsung JN1 (f/2.2) รองรับถ่ายวิดีโอ 4K 30fps และ TrueLens Engine 2.0',
      frontCamera: '50MP เซนเซอร์ขนาดใหญ่ขึ้น (f/2.2) รองรับการบันทึกวิดีโอ 4K 30fps สำหรับสาย Vlog และ Creator',
      battery: '5,000 mAh แบตเตอรี่ความจุใหญ่ที่สุดของ Nothing ใช้งานได้นานถึง 2 วัน',
      charging: '50W Fast Charging (ชาร์จ 50% ภายใน 21 นาที และ 100% ใน 56 นาที)',
      os: 'Nothing OS 2.6 บน Android 14 พร้อม ChatGPT Integration ในตัว',
      weight: '190 กรัม ดีไซน์เมทัลลิกสะท้อนแสงไฟล้ำสมัย',
      connectivity: '5G Dual SIM, Wi-Fi 6, Bluetooth 5.3, NFC, ไฟ Glyph Interface 3 แถบ 26 โซน, ลำโพงคู่สเตอริโอ, กันน้ำกันฝุ่น IP54'
    },
    promotions: [
      'ราคาพิเศษ 15,499 บาท (ลดจาก 16,990.-)',
      'ผ่อน 0% นาน 10 เดือน เดือนละ 1,550 บาท',
      'ฟรี เคสกันกระแทก Nothing และฟิล์มกระจก 9H'
    ],
    freeGifts: [
      'สายเคเบิล Type-C แบบโปร่งใส',
      'เคสใสกันกระแทก',
      'ฟิล์มกันรอย'
    ],
    warranty: 'ประกันศูนย์ไทย 1 ปีเต็ม',
    afterSales: 'บริการตรวจเช็กและอัปเดตระบบฟรีที่ศูนย์บริการ KOAN / SYNNEX',
    highlightPoints: [
      'ชิปเซ็ตประมวลผลพิเศษ Dimensity 7350 Pro 5G ความเร็วสูงถึง 3.0 GHz แรงขึ้นกว่าเดิม ตอบสนองไวทุกการใช้งาน',
      'กล้องความละเอียด 50MP ทั้ง 3 ตัวในเครื่องเดียว (กล้องหลัก 50MP OIS, กล้องอัลตร้าไวด์ 50MP และกล้องหน้า 50MP บันทึกวิดีโอ 4K)',
      'แบตเตอรี่ความจุใหญ่ 5,000 mAh พร้อมระบบชาร์จเร็ว 50W ชาร์จไวทันใจ',
      'ดีไซน์ใหม่ล่าสุดเคลือบผิว Metallic Finish สะท้อนแสงเงาวาว สวยงามระดับพรีเมียม'
    ],
    limitations: [
      'ไม่รองรับชาร์จไร้สาย (รุ่นเรือธง Phone 2 รองรับ 15W Wireless)',
      'ไม่มีอะแดปเตอร์หัวชาร์จในกล่อง'
    ],
    lastUpdated: '2026-10-20'
  },
  {
    id: 'bnn-nothing-phone-2a',
    name: 'Nothing Phone (2a)',
    category: 'mobile',
    brand: 'Nothing',
    price: 12499,
    originalPrice: 13799,
    rating: 4.8,
    reviewCount: 510,
    inStock: true,
    stockCount: 25,
    tags: ['ดีไซน์ดวงตาคู่ The Eyes', 'จอ 120Hz Flexible AMOLED', 'ชิป Dimensity 7200 Pro', 'กล้องคู่ 50MP OIS', 'แบต 5000 mAh'],
    colors: [
      {
        name: 'น้ำเงินพิเศษ Special Blue Edition',
        hex: '#1e40af',
        overlayHex: '#1e40af',
        image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&w=900&q=80',
        images: [
          'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&w=900&q=80',
          'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=900&q=80'
        ]
      },
      {
        name: 'ขาวนม Milk White',
        hex: '#f5f5f4',
        overlayHex: '#f5f5f4',
        image: 'https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&w=900&q=80'
      },
      {
        name: 'ดำ Black',
        hex: '#18181b',
        overlayHex: '#18181b',
        image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=900&q=80'
      }
    ],
    defaultImage: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&w=900&q=80',
    specs: {
      screen: '6.7 นิ้ว Flexible AMOLED FHD+, 120Hz, ความสว่าง 1,300 nits, 2160Hz PWM Dimming, ขอบจอบางเฉียบสมมาตรทั้ง 4 ด้าน 2.1 มม., กระจก Gorilla Glass 5',
      processor: 'MediaTek Dimensity 7200 Pro (4nm) 5G ประสิทธิภาพแรงและประหยัดแบตเตอรี่',
      ram: '8GB / 12GB (+ ขยาย RAM เสมือนได้ 8GB)',
      storage: '128GB / 256GB',
      rearCamera: 'กล้องคู่ 50MP: 50MP เซนเซอร์ขนาด 1/1.56 นิ้ว (f/1.88, OIS + EIS) + 50MP Ultra-wide 114° พร้อมไฟ Glyph 3 แถบ',
      frontCamera: '32MP (f/2.2)',
      battery: '5,000 mAh แบตเตอรี่อึดใช้งานได้ถึง 2 วันเต็ม',
      charging: '45W Fast Charging (ชาร์จ 50% ใน 23 นาที)',
      os: 'Nothing OS 2.6 บน Android 14',
      weight: '190 กรัม ดีไซน์กล้องทรงดวงตาคู่ The Eyes ในขดลวดแผงวงจรโปร่งใส',
      connectivity: '5G Dual SIM, Wi-Fi 6, Bluetooth 5.3, NFC, ไฟ Glyph Interface 3 แถบ, ลำโพงคู่สเตอริโอ, กันน้ำกันฝุ่น IP54'
    },
    promotions: [
      'ราคาโปรพิเศษ 12,499 บาท (ลดจาก 13,799.-)',
      'ผ่อน 0% นาน 10 เดือน เริ่มต้นเดือนละ 1,250 บาท'
    ],
    freeGifts: [
      'สายชาร์จเคเบิล Type-C โปร่งใส',
      'เคสใสกันกระแทก',
      'ฟิล์มกันรอย'
    ],
    warranty: 'ประกันศูนย์ไทย 1 ปีเต็ม',
    afterSales: 'บริการอัปเดตระบบและทำความสะอาดเครื่องฟรีที่ศูนย์บริการ KOAN / SYNNEX',
    highlightPoints: [
      'ดีไซน์ดวงตาคู่ "The Eyes" แปลกใหม่และมีเอกลักษณ์ พร้อมขอบหน้าจอบางเท่ากัน 4 ด้านสมมาตร 100%',
      'กล้องคู่ 50MP คุณภาพคมชัดทั้งเลนส์หลัก OIS และเลนส์ Ultra-wide',
      'ไฟ Glyph Interface กะพริบแจ้งเตือนอัจฉริยะ',
      'ซอฟต์แวร์ Nothing OS ลื่นไหลคลีน ปราศจากมัลแวร์และแอปขยะ'
    ],
    limitations: [
      'ไม่รองรับชาร์จไร้สาย',
      'ไม่มีอะแดปเตอร์หัวชาร์จในกล่อง'
    ],
    lastUpdated: '2026-10-20'
  },
  {
    id: 'bnn-cmf-phone-1',
    name: 'CMF Phone 1 by Nothing',
    category: 'mobile',
    brand: 'Nothing',
    price: 7499,
    originalPrice: 7999,
    rating: 4.8,
    reviewCount: 460,
    inStock: true,
    stockCount: 35,
    tags: ['ถอดเปลี่ยนฝาหลังและใส่อุปกรณ์เสริมได้', 'จอ 120Hz Super AMOLED 2000 nits', 'ชิป Dimensity 7300 5G', 'กล้อง 50MP Sony', 'ราคาประหยัดคุ้มค่า'],
    colors: [
      {
        name: 'ส้มสด Orange (ฝาหลังหนังเทียม)',
        hex: '#ea580c',
        overlayHex: '#ea580c',
        image: 'https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&w=900&q=80'
      },
      {
        name: 'เขียวอ่อน Light Green',
        hex: '#84cc16',
        overlayHex: '#84cc16',
        image: 'https://images.unsplash.com/photo-1565849904461-04a58ad377e0?auto=format&fit=crop&w=900&q=80'
      },
      {
        name: 'ดำ Black',
        hex: '#18181b',
        overlayHex: '#18181b',
        image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=900&q=80'
      },
      {
        name: 'ฟ้า Blue',
        hex: '#0284c7',
        overlayHex: '#0284c7',
        image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&w=900&q=80'
      }
    ],
    defaultImage: 'https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&w=900&q=80',
    specs: {
      screen: '6.67 นิ้ว Super AMOLED FHD+, 120Hz, ความสว่างพีคสูงถึง 2,000 nits, รองรับ Ultra HDR, สแกนลายนิ้วมือใต้หน้าจอ',
      processor: 'MediaTek Dimensity 7300 (4nm) 5G Octa-core พลังสูงและประหยัดไฟ',
      ram: '8GB (+ ขยาย RAM เสมือนได้ 8GB รวม 16GB)',
      storage: '128GB / 256GB (รองรับใส่ MicroSD ได้สูงสุด 2TB)',
      rearCamera: '50MP Sony f/1.8 พร้อมอัลกอริทึม TrueLens Engine + เลนส์ Portrait Depth',
      frontCamera: '16MP (f/2.0)',
      battery: '5,000 mAh แบตเตอรี่อึดใช้งานได้ถึง 2 วัน',
      charging: '33W Fast Charging (ชาร์จ 50% ภายใน 20 นาที) พร้อมชาร์จย้อนกลับให้อุปกรณ์อื่น 5W Reverse Charging',
      os: 'Nothing OS 2.6 บน Android 14 การันตีอัปเดต 2 OS และความปลอดภัย 3 ปี',
      weight: '197 กรัม ฝาหลังมีสกรูและ Accessory Point สำหรับติดตั้งอุปกรณ์เสริม DIY',
      connectivity: '5G Dual SIM, Wi-Fi 6, Bluetooth 5.3, สแกนลายนิ้วมือใต้จอ, พอร์ต Type-C, กันน้ำละออง IP52'
    },
    promotions: [
      'ราคาโปรพิเศษ 7,499 บาท (ปกติ 7,999.-)',
      'ผ่อน 0% นาน 10 เดือน เดือนละ 750 บาท',
      'ฟรี ไขควงพร้อมขาตั้ง Kickstand ตรงรุ่น'
    ],
    freeGifts: [
      'ไขควง DIY สำหรับถอดเปลี่ยนฝาหลัง',
      'ขาตั้งเครื่อง Kickstand',
      'ฟิล์มกันรอย'
    ],
    warranty: 'ประกันศูนย์ไทย 1 ปีเต็ม',
    afterSales: 'บริการอัปเดตระบบและทำความสะอาดเครื่องฟรีที่ศูนย์บริการ KOAN / SYNNEX',
    highlightPoints: [
      'สมาร์ทโฟนรุ่นแรกในยุคนี้ที่ให้ผู้ใช้ถอดเปลี่ยนฝาหลังสลับสีได้ด้วยตนเอง (Modular Back Case) และมีจุดยึดติดขาตั้ง Kickstand หรือสายคล้องพกพา',
      'หน้าจอ Super AMOLED 120Hz ความสว่างสูงถึง 2,000 nits สู้แดดจ้าได้ดีที่สุดในกลุ่มราคานี้',
      'ชิปเซ็ต 4nm Dimensity 7300 5G เร็วแรง เล่นเกมหนักได้สบาย',
      'ใช้ซอฟต์แวร์ Nothing OS 2.6 คลีน ลื่นไหล ไร้โฆษณา และรองรับการเชื่อมต่อกับ ChatGPT'
    ],
    limitations: [
      'ไม่มีไฟ Glyph Interface (เพื่อลดต้นทุนให้ได้ราคาสุดคุ้ม)',
      'ไม่มีเลนส์ Ultra-wide'
    ],
    lastUpdated: '2026-10-20'
  },

  // ==========================================
  // BRAND 12: iQOO (iQOO 13, iQOO 12, Neo 9 Pro, Z9, Z9x จากศูนย์ไทย)
  // ==========================================
  {
    id: 'bnn-iqoo-13-5g',
    name: 'iQOO 13 5G',
    category: 'mobile',
    brand: 'iQOO',
    price: 26990,
    originalPrice: 28990,
    rating: 4.9,
    reviewCount: 320,
    inStock: true,
    stockCount: 20,
    tags: ['เรือธง Snapdragon 8 Elite 3nm', 'จอ 2K 144Hz BOE Q10', 'ไฟ Monster Halo LED ปรับแสงตามเกม', 'แบต BlueOcean 6150 mAh', 'ชาร์จไว 120W FlashCharge'],
    colors: [
      {
        name: 'ขาวตำนาน Legend White (ลวดลาย 3 สี BMW M Motorsport)',
        hex: '#f8fafc',
        overlayHex: '#f8fafc',
        image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=900&q=80',
        images: [
          'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=900&q=80',
          'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=900&q=80'
        ]
      },
      {
        name: 'เทาไอล์ ออฟ แมน Isle of Man Green',
        hex: '#064e3b',
        overlayHex: '#064e3b',
        image: 'https://images.unsplash.com/photo-1565849904461-04a58ad377e0?auto=format&fit=crop&w=900&q=80'
      },
      {
        name: 'ดำแทร็ก Track Black (กระจก Fluorite AG)',
        hex: '#09090b',
        overlayHex: '#09090b',
        image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=900&q=80'
      }
    ],
    defaultImage: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=900&q=80',
    specs: {
      screen: '6.82 นิ้ว 2K (3168x1440) 144Hz 8T LTPO BOE Q10 AMOLED, ความสว่างพีค 4,500 nits, 2592Hz PWM Dimming, อัตราตอบสนองการสัมผัส 2000Hz Instant Touch',
      processor: 'Qualcomm Snapdragon 8 Elite (3nm) 4.32GHz + ชิปประมวลผลเกมมิ่งเฉพาะ Supercomputing Chip Q2 ปลดล็อก 144FPS และ Super Resolution 2K',
      ram: '16GB LPDDR5X Ultra (+ ขยาย RAM เสมือนได้ 16GB รวม 32GB)',
      storage: '512GB UFS 4.0 ความเร็วสูงสุด',
      rearCamera: 'กล้องระดับท็อป 3 เลนส์ 50MP: 50MP Sony IMX921 ขนาด 1/1.56 นิ้ว (f/1.68, VCS 2.0, OIS) + 50MP Telephoto Portrait Sony IMX816 2x OIS (ซูม 4x Lossless) + 50MP Ultra-wide 119° Samsung JN1',
      frontCamera: '32MP (f/2.45) รองรับบันทึกวิดีโอ 4K',
      battery: '6,150 mAh แบตเตอรี่ BlueOcean Silicon-Carbon สองเซลล์ ความจุใหญ่แต่น้ำหนักเบา',
      charging: '120W FlashCharge (ชาร์จ 50% ใน 15 นาที และ 100% ใน 30 นาที) พร้อมระบบ Bypass Charging',
      os: 'Funtouch OS 15 บน Android 15 (การันตีอัปเดตระบบ 4 ปี + ความปลอดภัย 5 ปี)',
      weight: '207 กรัม บางเพียง 7.99 มม. พร้อมไฟวงแหวน Monster Halo Dynamic Light Effect รอบโมดูลกล้อง',
      connectivity: '5G Dual SIM, Wi-Fi 7 5.8GHz, Bluetooth 5.4, NFC, IR Blaster, ลำโพงสเตอริโอคู่ระดับสมมาตร 1016 มอเตอร์สั่นแกน X คู่, กันน้ำกันฝุ่น IP68 & IP69'
    },
    promotions: [
      'ราคาโปรโมชั่นเปิดตัว 26,990 บาท (ลดจาก 28,990.-)',
      'ผ่อน 0% นานสูงสุด 24 เดือน (เพียงเดือนละ 1,125 บาท)',
      'รับฟรี ประกันหน้าจอแตก 1 ปีเต็ม มูลค่า 5,000 บาท'
    ],
    freeGifts: [
      'หัวชาร์จแท้ 120W FlashCharge ในกล่อง',
      'พัดลมระบายความร้อน iQOO Cooling Clip',
      'เคสพรีเมียม BMW M Motorsport และฟิล์มกระจก 9H'
    ],
    warranty: 'ประกันศูนย์ไทย vivo / iQOO Service Center ทั่วประเทศ 1 ปีเต็ม',
    afterSales: 'บริการ Fast Track ซ่อมด่วนใน 1 ชั่วโมง และทำความสะอาดตัวเครื่องฟรีตลอดอายุการใช้งาน',
    highlightPoints: [
      'ชิปเซ็ตประมวลผล Qualcomm Snapdragon 8 Elite 3nm ทำงานร่วมกับชิปภาพ Q2 ดันเฟรมเรตเกมแตะ 144fps และอัปสเกลภาพเป็น 2K คมชัดสุดขีด',
      'หน้าจอแสดงผล 2K 144Hz เทคโนโลยี BOE Q10 พาเนลรุ่นแรกของโลก สว่าง คมชัด และถนอมสายตาระดับสากล',
      'ไฟวงแหวน Monster Halo LED รอบกล้องหลัง กะพริบตามจังหวะเกม เพลง และการแจ้งเตือนสุดล้ำ',
      'แบตเตอรี่ความจุใหญ่ 6,150 mAh พร้อมชาร์จเร็ว 120W FlashCharge ตัวเครื่องบางไม่ถึง 8 มม. และกันน้ำมาตรฐาน IP68 และ IP69'
    ],
    limitations: [
      'ไม่มีเลนส์ซูมระยะไกล Periscope (เน้นระยะพอร์ตเทรต 50mm 2x-4x)',
      'ไม่มีช่องเสียบหูฟัง 3.5 มม.'
    ],
    lastUpdated: '2026-10-20'
  },
  {
    id: 'bnn-iqoo-12-5g',
    name: 'iQOO 12 5G',
    category: 'mobile',
    brand: 'iQOO',
    price: 25990,
    originalPrice: 27990,
    rating: 4.9,
    reviewCount: 480,
    inStock: true,
    stockCount: 18,
    tags: ['เรือธงเกมมิ่งร่วมกับ BMW M Motorsport', 'Snapdragon 8 Gen 3', 'ชิปแสดงผล SuperComputing Q1', 'กล้องซูม Periscope 64MP', 'ชาร์จไว 120W'],
    colors: [
      {
        name: 'ขาวตำนาน Legend White (ลวดลาย 3 สี BMW M Motorsport)',
        hex: '#f8fafc',
        overlayHex: '#f8fafc',
        image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=900&q=80',
        images: [
          'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=900&q=80',
          'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=900&q=80'
        ]
      },
      {
        name: 'ดำด้าน Alpha Black (กระจก Fluorite AG)',
        hex: '#0f172a',
        overlayHex: '#0f172a',
        image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=900&q=80'
      }
    ],
    defaultImage: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=900&q=80',
    specs: {
      screen: '6.78 นิ้ว 1.5K (2800x1260) LTPO AMOLED, รีเฟรชเรท 144Hz สำหรับอีสปอร์ต, ความสว่างพีค 3,000 nits, 2160Hz PWM Dimming, อัตราตอบสนองการสัมผัส 3000Hz Instant Touch',
      processor: 'Qualcomm Snapdragon 8 Gen 3 (4nm) All-Big-Core + ชิปประมวลผลการแสดงผลเฉพาะทาง SuperComputing Chip Q1 สำหรับแทรกเฟรมเรตและเพิ่มความละเอียดเกมระดับ 2K',
      ram: '16GB LPDDR5X (ขยาย Extended RAM ได้อีก 16GB รวม 32GB)',
      storage: '512GB UFS 4.0 ความเร็วสูงสุด',
      rearCamera: 'กล้องระดับ Astrography Camera 3 ตัว: 50MP กล้องหลักเซนเซอร์ใหญ่ OmniVision OV50H 1/1.3 นิ้ว (f/1.68, OIS) + 64MP Periscope Telephoto 3x (ซูมดิจิทัลสูงสุด 100x, OIS) + 50MP Ultra-wide 119° โฟกัสมาโคร',
      frontCamera: '16MP (f/2.45) เซลฟี่คมชัดและสตรีมเกมลื่นไหล',
      battery: '5,000 mAh พร้อมระบบระบายความร้อน 6K Vapor Chamber ขนาดใหญ่พิเศษ 6,010 ตร.มม.',
      charging: '120W FlashCharge (ชาร์จ 100% ภายใน 26 นาที) พร้อมระบบ Bypass Charging สำหรับการเล่นเกม',
      os: 'Funtouch OS 14 บน Android 14 การันตีอัปเดต Android 3 เวอร์ชัน และความปลอดภัย 4 ปี',
      weight: '203.7 กรัม กรอบอะลูมิเนียมแบนและโมดูลกล้องดีไซน์หน้าต่างยานอวกาศ Porthole Design',
      connectivity: '5G Dual SIM, Wi-Fi 7, Bluetooth 5.4, NFC, IR Blaster, ลำโพงสเตอริโอคู่สมมาตร Hi-Res Audio, มอเตอร์สั่นสะเทือนแกน X ขนาดใหญ่พิเศษ, กันละอองน้ำระดับ IP64'
    },
    promotions: [
      'ราคาโปรพิเศษ 25,990 บาท (ลดจากปกติ 27,990.-)',
      'ผ่อน 0% นานสูงสุด 24 เดือน (เพียงเดือนละ 1,083 บาท)',
      'รับฟรี ชุดของแถม iQOO Gaming Box และประกันหน้าจอแตก 1 ปีเต็ม'
    ],
    freeGifts: [
      'หัวชาร์จแท้ 120W FlashCharge ในกล่อง',
      'เคสพรีเมียมลายพิเศษ',
      'ฟิล์มกระจก 9H'
    ],
    warranty: 'ประกันศูนย์ไทย vivo / iQOO Service Center ทั่วประเทศ 1 ปีเต็ม (ประกันจอแตก 1 ปี)',
    afterSales: 'บริการ Fast Track ซ่อมด่วนใน 1 ชั่วโมง และทำความสะอาดเครื่องฟรีตลอดอายุการใช้งาน',
    highlightPoints: [
      'ความร่วมมือระดับพรีเมียมกับ BMW M Motorsport ฝาหลังสีขาวพร้อมแถบสามสีอันเป็นสัญลักษณ์ของความเร็วระดับโลก',
      'ชิปคู่ Snapdragon 8 Gen 3 และชิปแสดงผล Q1 ปลดล็อกเฟรมเรตเกมให้วิ่งแตะ 144Hz ลื่นไหลเหนือสมาร์ทโฟนทั่วไป',
      'กล้อง Telephoto Periscope 64MP เซนเซอร์ใหญ่ ซูมคมชัด 3x ถึง 100x และถ่ายภาพบุคคลละลายหลังได้มิติระดับมืออาชีพ',
      'ระบบชาร์จเร็ว 120W FlashCharge เสียบชาร์จไม่ถึงครึ่งชั่วโมงได้แบตเตอรี่เต็ม 100%'
    ],
    limitations: [
      'ไม่รองรับชาร์จไร้สาย',
      'ไม่มีช่องเสียบหูฟัง 3.5 มม.'
    ],
    lastUpdated: '2026-10-20'
  },
  {
    id: 'bnn-iqoo-neo-9-pro-5g',
    name: 'iQOO Neo 9 Pro 5G',
    category: 'mobile',
    brand: 'iQOO',
    price: 17990,
    originalPrice: 19990,
    rating: 4.8,
    reviewCount: 340,
    inStock: true,
    stockCount: 22,
    tags: ['สปีดมาสเตอร์ Dimensity 9300', 'ชิปแสดงผล Q1 แทรกเฟรม 144Hz', 'กล้อง 50MP Sony IMX920 OIS', 'ชาร์จไว 120W FlashCharge', 'แบต 5160 mAh'],
    colors: [
      {
        name: 'แดงขาวทูโทน Fiery Red (หนังวีแกนเย็บตะเข็บคู่)',
        hex: '#ef4444',
        overlayHex: '#ef4444',
        image: 'https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&w=900&q=80'
      },
      {
        name: 'ดำไฟท์ติ้ง Fighting Black (กระจก Fluorite AG)',
        hex: '#09090b',
        overlayHex: '#09090b',
        image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=900&q=80'
      }
    ],
    defaultImage: 'https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&w=900&q=80',
    specs: {
      screen: '6.78 นิ้ว 1.5K (2800x1260) 8T LTPO AMOLED, 1-144Hz, ความสว่าง 1,400 nits, 2160Hz PWM Dimming, อัตราตอบสนองการสัมผัส 2000Hz',
      processor: 'MediaTek Dimensity 9300 (4nm) All-Big-Core ชิปเซ็ตระดับสูงสุด + ชิปประมวลผล SuperComputing Chip Q1',
      ram: '12GB / 16GB LPDDR5X',
      storage: '256GB / 512GB UFS 4.0 ความเร็วสูงสุด',
      rearCamera: 'กล้องระดับเรือธง 50MP Sony IMX920 ขนาด 1/1.49 นิ้ว (f/1.68, OIS กันสั่น) + 50MP Ultra-wide 119° Samsung JN1',
      frontCamera: '16MP (f/2.45)',
      battery: '5,160 mAh แบตเตอรี่ความจุใหญ่สองเซลล์',
      charging: '120W FlashCharge (ชาร์จ 40% ใน 9 นาที และ 100% ใน 28 นาที)',
      os: 'Funtouch OS 14 บน Android 14',
      weight: '196 กรัม ตัวเครื่องบาง 7.99 มม.',
      connectivity: '5G Dual SIM, Wi-Fi 7, Bluetooth 5.4, NFC, IR Blaster, ลำโพงคู่สเตอริโอ Hi-Res, มอเตอร์แกน X, กันละอองน้ำ IP54'
    },
    promotions: [
      'ราคาโปรพิเศษ 17,990 บาท (ลดจาก 19,990.-)',
      'ผ่อน 0% นาน 18 เดือน เริ่มต้นเดือนละ 999 บาท',
      'ฟรี หูฟังเกมมิ่งไร้สายและเคสกันกระแทก'
    ],
    freeGifts: [
      'หัวชาร์จแท้ 120W FlashCharge',
      'เคสพรีเมียมตรงรุ่น',
      'ฟิล์มกันรอย'
    ],
    warranty: 'ประกันศูนย์ไทย 1 ปีเต็ม',
    afterSales: 'บริการอัปเดตระบบและทำความสะอาดเครื่องฟรีที่ศูนย์บริการ vivo / iQOO',
    highlightPoints: [
      'ชิปเรือธง Dimensity 9300 ทำงานร่วมกับชิปจอ Q1 เล่นเกมระดับ AAA ได้ด้วยเฟรมเรต 144fps นิ่งสนิท',
      'กล้องหลักใช้เซนเซอร์ Sony IMX920 ตัวเดียวกับเรือธง vivo X100 ถ่ายภาพกลางคืนและพอร์ตเทรตสวยงามยอดเยี่ยม',
      'ระบบชาร์จเร็วระดับท็อป 120W FlashCharge เสียบชาร์จเพียง 9 นาที ได้แบตเตอรี่ถึง 40%',
      'ดีไซน์ฝาหลังทูโทนสีแดง-ขาว เย็บตะเข็บคู่ด้วยหนังวีแกนสัมผัสหรูหรา'
    ],
    limitations: [
      'ไม่มีเลนส์ซูม Telephoto',
      'ไม่รองรับชาร์จไร้สาย'
    ],
    lastUpdated: '2026-10-20'
  },
  {
    id: 'bnn-iqoo-z9-5g',
    name: 'iQOO Z9 5G',
    category: 'mobile',
    brand: 'iQOO',
    price: 11499,
    originalPrice: 11999,
    rating: 4.8,
    reviewCount: 420,
    inStock: true,
    stockCount: 30,
    tags: ['แบตเตอรี่ยักษ์ 6000 mAh บาง 7.98 มม.', 'ชิป Snapdragon 7 Gen 3', 'จอสว่าง 4500 nits 144Hz AMOLED', 'ชาร์จไว 80W', 'กล้อง Sony IMX882 OIS'],
    colors: [
      {
        name: 'เขียวสายลม Breeze Green',
        hex: '#10b981',
        overlayHex: '#10b981',
        image: 'https://images.unsplash.com/photo-1565849904461-04a58ad377e0?auto=format&fit=crop&w=900&q=80'
      },
      {
        name: 'ดำเงา Phantom Black',
        hex: '#09090b',
        overlayHex: '#09090b',
        image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=900&q=80'
      }
    ],
    defaultImage: 'https://images.unsplash.com/photo-1565849904461-04a58ad377e0?auto=format&fit=crop&w=900&q=80',
    specs: {
      screen: '6.78 นิ้ว 1.5K (2800x1260) AMOLED, 144Hz, ความสว่างพีคสูงเป็นประวัติการณ์ 4,500 nits, 2000Hz Instant Touch Sampling, 3840Hz PWM Dimming ถนอมสายตาสูงสุด',
      processor: 'Qualcomm Snapdragon 7 Gen 3 (4nm) 5G Octa-core พลังความเร็ว 2.63 GHz',
      ram: '8GB / 12GB LPDDR4X (+ ขยาย RAM เสมือนได้ 12GB รวมสูงสุด 24GB)',
      storage: '256GB UFS 2.2',
      rearCamera: '50MP กล้องหลักเซนเซอร์ Sony IMX882 (f/1.79, OIS กันสั่น) + 2MP Bokeh Camera พร้อมอัลกอริทึม Super Night Mode',
      frontCamera: '16MP (f/2.45)',
      battery: '6,000 mAh แบตเตอรี่เทคโนโลยีกราไฟต์ Graphite Battery ความหนาแน่นพลังงานสูง ตัวเครื่องบางเพียง 7.98 มม.',
      charging: '80W FlashCharge (ชาร์จ 50% ในเวลาเพียง 23 นาที) พร้อมระบบ Bypass Charging',
      os: 'Funtouch OS 14 บน Android 14',
      weight: '194.6 กรัม บางเพียง 7.98 มม.',
      connectivity: '5G Dual SIM, Wi-Fi 6, Bluetooth 5.4, NFC, IR Blaster, ลำโพงสเตอริโอคู่พร้อมโหมดเร่งเสียง 300% Audio Booster, กันน้ำกันฝุ่น IP64'
    },
    promotions: [
      'ราคาโปรโมชั่น 11,499 บาท (ลดจาก 11,999.-)',
      'ผ่อน 0% นาน 10 เดือน เดือนละ 1,150 บาท',
      'ฟรี หูฟังเกมมิ่งและกระเป๋ากีฬา iQOO'
    ],
    freeGifts: [
      'หัวชาร์จแท้ 80W FlashCharge',
      'เคสใสกันกระแทก',
      'ฟิล์มกระจก 9H'
    ],
    warranty: 'ประกันศูนย์ไทย 1 ปีเต็ม',
    afterSales: 'บริการอัปเดตระบบและทำความสะอาดเครื่องฟรีที่ศูนย์บริการ vivo / iQOO',
    highlightPoints: [
      'แบตเตอรี่ความจุยักษ์ 6,000 mAh แต่ตัวเครื่องบางเฉียบเพียง 7.98 มม. และเบาไม่ถึง 195 กรัม ใช้งานได้ยาวนาน 2 วันเต็ม',
      'หน้าจอแสดงผล 144Hz AMOLED สว่างพีคสูงสุดในระดับราคานี้ถึง 4,500 nits สู้แดดจ้าได้คมชัดไร้ที่ติ',
      'ชิปเซ็ต 4nm Snapdragon 7 Gen 3 แรงลื่นไหลและประหยัดแบตเตอรี่',
      'ระบบชาร์จเร็ว 80W FlashCharge ชาร์จแบต 6,000 mAh ได้รวดเร็วทันใจ พร้อมลำโพงคู่เร่งเสียง 300%'
    ],
    limitations: [
      'ไม่มีเลนส์ Ultra-wide',
      'ไม่มีช่องเสียบหูฟัง 3.5 มม.'
    ],
    lastUpdated: '2026-10-20'
  },
  {
    id: 'bnn-iqoo-z9x-5g',
    name: 'iQOO Z9x 5G',
    category: 'mobile',
    brand: 'iQOO',
    price: 6999,
    originalPrice: 7999,
    rating: 4.8,
    reviewCount: 390,
    inStock: true,
    stockCount: 45,
    tags: ['แบตเตอรี่มหึมา 6000 mAh', 'ชิป Snapdragon 6 Gen 1', 'จอ 120Hz Eye Care', 'ชาร์จไว 44W FlashCharge', 'ลำโพงคู่ 300%'],
    colors: [
      {
        name: 'เขียวพายุ Tornado Green',
        hex: '#059669',
        overlayHex: '#059669',
        image: 'https://images.unsplash.com/photo-1565849904461-04a58ad377e0?auto=format&fit=crop&w=900&q=80'
      },
      {
        name: 'ดำลึกลับ Mystic Black',
        hex: '#0f172a',
        overlayHex: '#0f172a',
        image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=900&q=80'
      }
    ],
    defaultImage: 'https://images.unsplash.com/photo-1565849904461-04a58ad377e0?auto=format&fit=crop&w=900&q=80',
    specs: {
      screen: '6.72 นิ้ว FHD+ 120Hz Eye Care Display, ความสว่าง 1,000 nits สู้แดดกลางแจ้ง, ผ่านการรับรองถนอมสายตา TÜV Rheinland',
      processor: 'Qualcomm Snapdragon 6 Gen 1 (4nm) 5G Octa-core ประสิทธิภาพสูงและประหยัดไฟ',
      ram: '8GB (+ ขยาย RAM เสมือนได้ 8GB รวม 16GB)',
      storage: '128GB / 256GB (รองรับใส่ MicroSD สูงสุด 1TB)',
      rearCamera: '50MP AI Dual Camera (f/1.8) + 2MP Bokeh',
      frontCamera: '8MP (f/2.05)',
      battery: '6,000 mAh แบตเตอรี่อึดใช้งานได้ถึง 2 วันเต็ม การันตีสุขภาพแบต 4 ปี',
      charging: '44W FlashCharge (ชาร์จ 50% ภายใน 37 นาที) พร้อมระบบชาร์จย้อนกลับ Reverse Charging',
      os: 'Funtouch OS 14 บน Android 14',
      weight: '199 กรัม บาง 7.99 มม.',
      connectivity: '5G Dual SIM, Wi-Fi 5, Bluetooth 5.1, ช่องเสียบหูฟัง 3.5 มม., ลำโพงคู่สเตอริโอเร่งเสียงได้ 300% Dual Stereo Speakers, กันละอองน้ำระดับ IP64'
    },
    promotions: [
      'ราคาโปรพิเศษ 6,999 บาท (ลดจากปกติ 7,999.-)',
      'ผ่อน 0% นาน 10 เดือน เดือนละ 700 บาท',
      'ฟรี หูฟังและเคสใสกันกระแทก'
    ],
    freeGifts: [
      'หัวชาร์จ 44W FlashCharge',
      'เคสใส',
      'ฟิล์มกันรอย'
    ],
    warranty: 'ประกันศูนย์ไทย 1 ปีเต็ม',
    afterSales: 'บริการอัปเดตระบบและทำความสะอาดเครื่องฟรีที่ศูนย์บริการ vivo / iQOO',
    highlightPoints: [
      'สมาร์ทโฟน 5G ชิปเซ็ต 4nm Snapdragon 6 Gen 1 ที่ให้แบตเตอรี่ขนาดใหญ่ถึง 6,000 mAh ในงบไม่เกินเจ็ดพันบาท',
      'ชาร์จไว 44W FlashCharge พร้อมการันตีสุขภาพแบตเตอรี่ใช้งานได้ยาวนานถึง 4 ปี',
      'ลำโพงคู่สเตอริโอพร้อมโหมดเร่งเสียง 300% Audio Booster และมีช่องเสียบหูฟัง 3.5 มม.',
      'ผ่านการรับรองมาตรฐานกันน้ำกันฝุ่นระดับ IP64 ใช้งานลุยฝนได้อย่างมั่นใจ'
    ],
    limitations: [
      'หน้าจอพาเนล LCD (ไม่ใช่ AMOLED)',
      'ไม่มีเลนส์ Ultra-wide'
    ],
    lastUpdated: '2026-10-20'
  },

  // ==========================================
  // แล็ปท็อปและแท็บเล็ตเดิม (คงไว้ตามคำขอ)
  // ==========================================
  {
    id: 'prod-asus-rog-g16',
    name: 'ASUS ROG Strix G16 (2024)',
    category: 'laptop',
    brand: 'ASUS',
    price: 49990,
    originalPrice: 54990,
    rating: 4.9,
    reviewCount: 110,
    inStock: true,
    stockCount: 8,
    tags: ['โน้ตบุ๊กเกมมิ่ง', 'RTX 4060', 'Intel Core i7 Gen 14', 'จอ 240Hz ROG Nebula'],
    colors: [
      {
        name: 'เทา Eclipse Gray',
        hex: '#334155',
        overlayHex: '#334155',
        image: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&w=900&q=80'
      },
      {
        name: 'เขียว Volt Green Accent',
        hex: '#1e293b',
        overlayHex: '#1e293b',
        image: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=900&q=80'
      }
    ],
    defaultImage: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&w=900&q=80',
    specs: {
      screen: '16 นิ้ว ROG Nebula Display QHD+ 2.5K (2560x1600), 240Hz, 3ms, DCI-P3 100%, G-Sync',
      processor: 'Intel Core i7-14650HX (16 Cores, 24 Threads, เร่งได้สูงสุด 5.2 GHz)',
      ram: '16GB DDR5 5600MHz (อัปเกรดได้สูงสุด 64GB)',
      storage: '1TB PCIe 4.0 NVMe M.2 SSD (มีสล็อต M.2 ว่างอีก 1 ช่อง)',
      rearCamera: 'กล้องเว็บแคม 720p HD พร้อมระบบตัดเสียงรบกวน AI Noise-Canceling',
      frontCamera: 'N/A',
      battery: '90Wh พร้อมอะแดปเตอร์ 280W และรองรับ 100W Type-C PD',
      charging: 'ชาร์จเร็ว 50% ภายใน 30 นาที',
      os: 'Windows 11 Home ลิขสิทธิ์แท้ตลอดชีพ',
      weight: '2.50 กก.',
      connectivity: 'Wi-Fi 6E, Bluetooth 5.3, Thunderbolt 4, HDMI 2.1 FRL, LAN 2.5G RJ-45'
    },
    promotions: [
      'ลดราคาพิเศษ 5,000 บาททันที',
      'ผ่อน 0% นานสูงสุด 24 เดือน (เดือนละ 2,082 บาท)',
      'ฟรีเกมพีซีฟอร์มยักษ์ 1 เกมเมื่อลงทะเบียน'
    ],
    freeGifts: [
      'กระเป๋าเป้เกมมิ่ง ROG Backpack แท้ มูลค่า 2,490 บาท',
      'เมาส์เกมมิ่ง ROG Strix Impact III',
      'แผ่นรองเมาส์ขนาดใหญ่ ROG Sheath',
      'ชุดทำความสะอาดโน้ตบุ๊กและแผ่นซิลิโคนคีย์บอร์ด'
    ],
    warranty: 'ประกันศูนย์ ASUS Perfect Warranty 2 ปีเต็ม (ประกันอุบัติเหตุ 1 ปีแรก ซ่อมถึงที่ฟรี Onsite Service)',
    afterSales: 'บริการอัปเกรด RAM และ SSD ฟรีค่าแรงที่ร้านตลอดอายุการใช้งาน, ตรวจเช็กระบบระบายความร้อนและเปลี่ยนซิลิโคนเหลวฟรี',
    highlightPoints: [
      'การ์ดจอ NVIDIA GeForce RTX 4060 8GB GDDR6 TGP 140W เต็มกำลัง',
      'หน้าจอ ROG Nebula 2.5K 240Hz สีสันสดใส DCI-P3 100% เล่นเกมและตัดต่อสีแม่นยำ',
      'ระบบระบายความร้อน ROG Intelligent Cooling ใช้โลหะเหลว Conductonaut Extreme เย็นและเงียบ'
    ],
    limitations: [
      'ตัวเครื่องพร้อมอะแดปเตอร์มีน้ำหนักพอสมควร ไม่เหมาะกับการพกพาบ่อยๆ',
      'แบตเตอรี่หมดเร็วหากเล่นเกมโดยไม่ได้เสียบปลั๊ก'
    ],
    lastUpdated: '2026-10-04'
  },
  {
    id: 'prod-lenovo-ideapad-slim-5',
    name: 'Lenovo IdeaPad Slim 5 14IRH9',
    category: 'laptop',
    brand: 'Lenovo',
    price: 24990,
    originalPrice: 27990,
    rating: 4.8,
    reviewCount: 94,
    inStock: true,
    stockCount: 14,
    tags: ['โน้ตบุ๊กบางเบา', 'จอ OLED 120Hz', 'Core Ultra 5 AI', 'พกพาสะดวก'],
    colors: [
      {
        name: 'เทา Cloud Grey',
        hex: '#94a3b8',
        overlayHex: '#94a3b8',
        image: 'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?auto=format&fit=crop&w=900&q=80'
      },
      {
        name: 'น้ำเงิน Abyss Blue',
        hex: '#1e3a8a',
        overlayHex: '#1e3a8a',
        image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=900&q=80'
      }
    ],
    defaultImage: 'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?auto=format&fit=crop&w=900&q=80',
    specs: {
      screen: '14 นิ้ว WUXGA (1920x1200) OLED, 100% DCI-P3, 400 nits, DisplayHDR True Black 500',
      processor: 'Intel Core Ultra 5 125H (14 Cores, 18 Threads พร้อมชิป Intel AI Boost NPU)',
      ram: '16GB LPDDR5x 7467MHz Dual Channel',
      storage: '512GB SSD M.2 2242 PCIe 4.0x4 NVMe',
      rearCamera: 'กล้อง FHD 1080p + IR Sensor สแกนใบหน้า Windows Hello และชัตเตอร์ปิดกล้อง Privacy Shutter',
      frontCamera: 'N/A',
      battery: '57Wh ใช้งานพิมพ์งานเอกสารทั่วไปได้นาน 10-12 ชั่วโมง',
      charging: 'ชาร์จเร็วผ่านพอร์ต Type-C 65W Rapid Charge Boost (ชาร์จ 15 นาที ใช้งานได้ 2 ชม.)',
      os: 'Windows 11 Home + Microsoft Office Home & Student 2021 ของแท้ถาวรในตัว',
      weight: '1.46 กก. ตัวเครื่องอะลูมิเนียมเกรดทหาร MIL-STD-810H',
      connectivity: 'Wi-Fi 6E, Bluetooth 5.2, USB-C 3.2 Gen 1 (รองรับ PD/DP), HDMI 1.4b, ช่องอ่าน MicroSD'
    },
    promotions: [
      'แถมฟรี Microsoft Office Home & Student 2021 แท้ติดเครื่องใช้งานได้ตลอดชีพ',
      'ผ่อน 0% นาน 10 เดือน เริ่มต้นเดือนละ 2,499 บาท'
    ],
    freeGifts: [
      'กระเป๋าเป้ Lenovo Casual Backpack แท้',
      'เมาส์ไร้สาย Lenovo Wireless Mouse',
      'แผ่นรองเมาส์และผ้าเช็ดหน้าจอไมโครไฟเบอร์'
    ],
    warranty: 'ประกันศูนย์ Lenovo Premium Care 2 ปีเต็ม (ซ่อมฟรีถึงบ้าน Onsite Service ทั่วไทย)',
    afterSales: 'บริการแนะนำการลงทะเบียน Office ฟรี, ตรวจเช็กระบบ Windows และอัปเดตไดรเวอร์ฟรี',
    highlightPoints: [
      'หน้าจอ OLED สีดำสนิท สีสันสดใสตรงตามมาตรฐาน DCI-P3 100% สบายตา',
      'ตัวเครื่องบางเบาเพียง 1.46 กก. ผ่านการทดสอบความทนทานระดับกองทัพสหรัฐฯ',
      'ชิป Intel Core Ultra มี NPU สำหรับประมวลผลงาน AI โดยเฉพาะ ประหยัดพลังงานมาก',
      'ได้โปรแกรม Microsoft Office แท้ติดเครื่องถาวร ไม่ต้องเสียเงินซื้อเพิ่ม'
    ],
    limitations: [
      'RAM แบบฝังบอร์ด (Onboard) ไม่สามารถถอดเพิ่มภายหลังได้',
      'ไม่ใช่โน้ตบุ๊กสำหรับการเล่นเกมกราฟิกหนักระดับ AAA'
    ],
    lastUpdated: '2026-10-04'
  },
  {
    id: 'prod-ipad-air-m2',
    name: 'Apple iPad Air 11 นิ้ว (ชิป M2)',
    category: 'tablet',
    brand: 'Apple',
    price: 21900,
    originalPrice: 23900,
    rating: 4.9,
    reviewCount: 290,
    inStock: true,
    stockCount: 18,
    tags: ['แท็บเล็ตเพื่อการศึกษา', 'ชิป M2', 'รองรับ Apple Pencil Pro', 'ทำงานคล่องตัว'],
    colors: [
      {
        name: 'เทาสเปซเกรย์ Space Gray',
        hex: '#4b5563',
        overlayHex: '#4b5563',
        image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=900&q=80'
      },
      {
        name: 'สตาร์ไลท์ Starlight',
        hex: '#f5f5f0',
        overlayHex: '#f5f5f0',
        image: 'https://images.unsplash.com/photo-1561154464-82e9adf32764?auto=format&fit=crop&w=900&q=80'
      },
      {
        name: 'ฟ้า Blue',
        hex: '#93c5fd',
        overlayHex: '#93c5fd',
        image: 'https://images.unsplash.com/photo-1585792180666-f7347c490ee2?auto=format&fit=crop&w=900&q=80'
      },
      {
        name: 'ม่วง Purple',
        hex: '#c084fc',
        overlayHex: '#c084fc',
        image: 'https://images.unsplash.com/photo-1589739900243-4b52cd9b104e?auto=format&fit=crop&w=900&q=80'
      }
    ],
    defaultImage: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=900&q=80',
    specs: {
      screen: '11 นิ้ว Liquid Retina Display LED, ความละเอียด 2360x1640, P3 Wide Color, True Tone, 500 nits',
      processor: 'Apple M2 (8-core CPU, 9-core GPU, 16-core Neural Engine)',
      ram: '8GB Unified Memory',
      storage: '128GB / 256GB / 512GB / 1TB',
      rearCamera: '12MP ไวด์ (f/1.8) ถ่ายวิดีโอ 4K สูงสุด 60 fps',
      frontCamera: '12MP อัลตร้าไวด์ในแนวนอน พร้อมระบบ Center Stage จัดให้อยู่กึ่งกลางตลอดการวิดีโอคอล',
      battery: '28.93Wh ใช้งานท่องเว็บผ่าน Wi-Fi หรือดูวิดีโอได้นานสูงสุด 10 ชั่วโมง',
      charging: 'ชาร์จผ่าน USB-C 20W',
      os: 'iPadOS 18 รองรับฟีเจอร์ Apple Intelligence และ Math Notes',
      weight: '462 กรัม ตัวเครื่องอะลูมิเนียมรีไซเคิล 100%',
      connectivity: 'Wi-Fi 6E, Bluetooth 5.3, รองรับ Apple Pencil Pro และ Magic Keyboard'
    },
    promotions: [
      'ราคาพิเศษเพื่อการศึกษาและโปรหน้าร้าน 21,900 บาท',
      'ผ่อน 0% นานสูงสุด 24 เดือน (เพียงเดือนละ 912 บาท)',
      'รับสิทธิ์ซื้อ Apple Pencil Pro ลดเพิ่ม 500 บาท'
    ],
    freeGifts: [
      'หัวชาร์จ Apple 20W USB-C แท้',
      'เคสแม่เหล็กพับตั้งได้แบบ Origami',
      'ฟิล์มกระดาษสำหรับวาดเขียน Paper-like',
      'กระเป๋าซองใส่แท็บเล็ตกันกระแทกบุกำมะหยี่'
    ],
    warranty: 'ประกันศูนย์ Apple Care ทั่วโลก 1 ปีเต็ม',
    afterSales: 'บริการตั้งค่า Apple ID และดาวน์โหลดแอปการเรียนการทำงานฟรีที่หน้าร้าน',
    highlightPoints: [
      'ชิป Apple M2 ทรงพลัง ตัดต่อวิดีโอ 4K หรือวาดภาพหลายเลเยอร์บน Procreate ได้ราบรื่น',
      'รองรับ Apple Pencil Pro รุ่นใหม่ล่าสุด มีเซนเซอร์บีบ หมุนด้ามปากกา และตอบสนองด้วยการสั่น',
      'กล้องหน้าย้ายมาอยู่แนวนอนแล้ว ทำให้คุย FaceTime ประชุม Zoom มุมมองเป็นธรรมชาติ',
      'น้ำหนักเบาเพียง 462 กรัม พกใส่กระเป๋าไปเรียนหรือทำงานได้ทุกวัน'
    ],
    limitations: [
      'หน้าจอไม่ใช่ 120Hz ProMotion (ยังคงอยู่ที่ 60Hz)',
      'ไม่มีช่องเสียบหูฟัง 3.5 มม.'
    ],
    lastUpdated: '2026-10-04'
  }
];
