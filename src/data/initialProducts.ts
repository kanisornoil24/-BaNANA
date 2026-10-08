import { Product } from '../types/product';

export const INITIAL_PRODUCTS: Product[] = [
  {
    id: 'prod-realme-16',
    name: 'realme 16 5G',
    category: 'mobile',
    brand: 'Realme',
    price: 8999,
    originalPrice: 9999,
    rating: 4.7,
    reviewCount: 88,
    inStock: true,
    stockCount: 30,
    tags: ['ราคาประหยัด', 'ดีไซน์บางเบา', 'แบต 5000mAh', 'จอ 120Hz'],
    colors: [
      {
        name: 'ดำ Feather Black',
        hex: '#1e2022',
        overlayHex: '#1e2022',
        image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=900&q=80'
      },
      {
        name: 'เขียว Glowing Green',
        hex: '#86efac',
        overlayHex: '#86efac',
        image: 'https://images.unsplash.com/photo-1565849904461-04a58ad377e0?auto=format&fit=crop&w=900&q=80'
      }
    ],
    defaultImage: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=900&q=80',
    specs: {
      screen: '6.72 นิ้ว FHD+ IPS LCD, 120Hz, ความสว่าง 950 nits',
      processor: 'MediaTek Dimensity 6100+ (6nm) Octa-core 2.2GHz',
      ram: '8GB + 8GB Dynamic RAM Expansion',
      storage: '128GB / 256GB (รองรับ MicroSD สูงสุด 2TB)',
      rearCamera: '50MP AI Camera (f/1.8) + 2MP Portrait',
      frontCamera: '8MP AI Selfie',
      battery: '5,000 mAh ใช้งานต่อเนื่องได้ 2 วัน',
      charging: '45W SUPERVOOC ชาร์จ 50% ใน 30 นาที',
      os: 'Android 14 ครอบทับด้วย realme UI 5.0',
      weight: '190 กรัม บาง 7.69 มม.',
      connectivity: '5G Dual SIM, Wi-Fi 5, Bluetooth 5.3, ช่องเสียบหูฟัง 3.5 มม.'
    },
    promotions: [
      'ลดทันที 1,000 บาท',
      'ผ่อน 0% นาน 10 เดือน เริ่มต้นเพียงเดือนละ 899 บาท'
    ],
    freeGifts: [
      'หัวชาร์จแท้ 45W SUPERVOOC',
      'เคสใสกันกระแทก',
      'ฟิล์มกันรอยติดตั้งจากโรงงาน'
    ],
    warranty: 'ประกันศูนย์ไทย 1 ปีเต็ม',
    afterSales: 'บริการทำความสะอาดและตรวจเช็กสภาพเครื่องฟรีที่ศูนย์บริการ',
    highlightPoints: [
      'ราคาประหยัด ไม่ถึงหมื่น ได้หน้าจอ 120Hz ลื่นไหล',
      'ตัวเครื่องบางเพียง 7.69 มม. น้ำหนักเบา จับถนัดมือ',
      'รองรับการใส่ MicroSD Card เพิ่มความจุได้สูงสุด 2TB'
    ],
    limitations: [
      'หน้าจอแบบ IPS LCD (ไม่ใช่ AMOLED เหมือนรุ่น Pro)',
      'ไม่มีระบบกันสั่น OIS ในกล้องหลัก',
      'ชาร์จไว 45W (รุ่น Pro ชาร์จไว 67W)'
    ],
    lastUpdated: '2026-10-04'
  },
  {
    id: 'prod-realme-16-pro',
    name: 'realme 16 Pro 5G',
    category: 'mobile',
    brand: 'Realme',
    price: 12999,
    originalPrice: 14999,
    rating: 4.8,
    reviewCount: 142,
    inStock: true,
    stockCount: 28,
    tags: ['คุ้มค่าสุด', 'กล้องสวย', 'ชาร์จเร็ว', 'หน้าจอโค้ง 120Hz'],
    colors: [
      {
        name: 'ดำ Titanium Black',
        hex: '#1e2022',
        overlayHex: '#1e2022',
        image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=900&q=80'
      },
      {
        name: 'ขาว Pearl White',
        hex: '#f5f6f8',
        overlayHex: '#f5f6f8',
        image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=900&q=80'
      },
      {
        name: 'ทอง Monet Gold',
        hex: '#d4af37',
        overlayHex: '#d4af37',
        image: 'https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&w=900&q=80'
      }
    ],
    defaultImage: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=900&q=80',
    specs: {
      screen: '6.7 นิ้ว Curved AMOLED FHD+, 120Hz, HDR10+, ความสว่างสูงสุด 2,000 nits',
      processor: 'MediaTek Dimensity 7050 (6nm) Octa-core 2.6GHz',
      ram: '8GB + 8GB Dynamic RAM Expansion',
      storage: '256GB UFS 3.1 (ไม่รองรับ MicroSD)',
      rearCamera: '50MP Sony LYT-600 (f/1.88, OIS กันสั่น) + 8MP Ultra-wide 112° + 2MP Macro',
      frontCamera: '32MP Sony IMX615 (f/2.45) ถ่ายวิดีโอ 4K',
      battery: '5,000 mAh ใช้งานต่อเนื่องข้ามวัน',
      charging: '67W SUPERVOOC ชาร์จ 50% ใน 19 นาที',
      os: 'Android 14 ครอบทับด้วย realme UI 5.0 (การันตีอัปเดต 3 ปี)',
      weight: '188 กรัม ตัวเครื่องบางเพียง 7.9 มม.',
      connectivity: '5G Dual SIM, Wi-Fi 6, Bluetooth 5.2, NFC, ลำโพงคู่สเตอริโอ Hi-Res'
    },
    promotions: [
      'ส่วนลดเปิดตัวพิเศษทันที 2,000 บาท (เหลือเพียง 12,999.-)',
      'ผ่อนชำระ 0% นานสูงสุด 18 เดือน ผ่านบัตรเครดิตที่ร่วมรายการ (เริ่มต้นเพียงเดือนละ 723 บาท)',
      'รับสิทธิ์แลกซื้อหูฟังไร้สาย realme Buds Air 6 ลดทันที 50%',
      'สมาชิก IT Smart รับคะแนนสะสมคูณ 2 เท่า'
    ],
    freeGifts: [
      'หัวชาร์จเร็วแท้ 67W SUPERVOOC Flash Charger พร้อมสายเคเบิล Type-C ในกล่อง',
      'เคสกันกระแทกแท้ TPU ใสคุณภาพสูง',
      'ฟิล์มกระจกกันรอย 9H ติดตั้งพร้อมประกันเปลี่ยนฟรี 1 ครั้งใน 6 เดือน',
      'กระเป๋าเป้ IT Sport Edition มูลค่า 1,290 บาท'
    ],
    warranty: 'ประกันศูนย์ไทย 2 ปีเต็ม (ประกันหน้าจอแตก 1 ปีแรก มูลค่า 3,500 บาท และเปลี่ยนเครื่องใหม่ใน 7 วันหากมีปัญหาจากการผลิต)',
    afterSales: 'บริการถ่ายโอนข้อมูลจากเครื่องเก่าฟรีที่หน้าร้าน, ตรวจเช็กสุขภาพแบตเตอรี่และทำความสะอาดเครื่องฟรีตลอดอายุการใช้งาน, ให้คำปรึกษาทางเทคนิค 24 ชั่วโมง',
    highlightPoints: [
      'กล้องหลัก 50MP เซนเซอร์ Sony LYT-600 มีระบบกันสั่น OIS ถ่ายภาพกลางคืนคมชัด',
      'หน้าจอขอบโค้ง 120Hz สวยพรีเมียม ขอบจอบางมาก ดูคอนเทนต์เต็มตา',
      'ชาร์จไว 67W ชาร์จไฟแป๊บเดียวพร้อมใช้งาน',
      'ราคาคุ้มค่ามาก ได้หน่วยความจำ 256GB'
    ],
    limitations: [
      'ไม่มีเลนส์ Periscope Telephoto (เลนส์ซูมระยะไกลเหมือนรุ่น Pro+)',
      'กันน้ำกันฝุ่นระดับ IP65 (ไม่แนะนำจุ่มน้ำลึก)'
    ],
    lastUpdated: '2026-10-04'
  },
  {
    id: 'prod-realme-16-pro-plus',
    name: 'realme 16 Pro+ 5G',
    category: 'mobile',
    brand: 'Realme',
    price: 15999,
    originalPrice: 17999,
    rating: 4.9,
    reviewCount: 98,
    inStock: true,
    stockCount: 16,
    tags: ['ซูมโหด Periscope', 'กล้องระดับแฟลกชิป', 'ชาร์จไว 80W', 'คุ้มค่าสุด'],
    colors: [
      {
        name: 'ดำ Submarine Black',
        hex: '#18191a',
        overlayHex: '#18191a',
        image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=900&q=80'
      },
      {
        name: 'ขาว Navigator White',
        hex: '#f8f9fa',
        overlayHex: '#f8f9fa',
        image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=900&q=80'
      },
      {
        name: 'เขียว Emerald Green',
        hex: '#2d5a3f',
        overlayHex: '#2d5a3f',
        image: 'https://images.unsplash.com/photo-1565849904461-04a58ad377e0?auto=format&fit=crop&w=900&q=80'
      }
    ],
    defaultImage: 'https://images.unsplash.com/photo-1565849904461-04a58ad377e0?auto=format&fit=crop&w=900&q=80',
    specs: {
      screen: '6.7 นิ้ว 1.5K Curved AMOLED, 120Hz, 2160Hz PWM Dimming ถนอมสายตา, 2,000 nits',
      processor: 'Qualcomm Snapdragon 7s Gen 2 (4nm) Octa-core 2.4GHz',
      ram: '12GB LPDDR5 + ขยาย RAM ได้สูงสุด 12GB',
      storage: '512GB UFS 3.1 ความจุจุใจ',
      rearCamera: '50MP Sony IMX890 OIS + 64MP Periscope Telephoto 3x (ซูมดิจิทัลสูงสุด 120x OIS) + 8MP Ultra-wide',
      frontCamera: '32MP Sony เซลฟี่มุมกว้าง 90°',
      battery: '5,200 mAh แบตเตอรี่ความจุพิเศษ ใช้งานยาวนาน',
      charging: '80W SUPERVOOC ชาร์จเต็ม 100% ภายใน 26 นาที',
      os: 'Android 14 พร้อม realme UI 5.0 รองรับฟีเจอร์ AI Photography Master',
      weight: '196 กรัม ฝาหลังหนังวีแกนพรีเมียม',
      connectivity: '5G Dual SIM, Wi-Fi 6, Bluetooth 5.3, NFC, ระบบระบายความร้อน 3D VC Liquid Cooling'
    },
    promotions: [
      'ส่วนลดฉลองเปิดตัว 2,000 บาท (เหลือเพียง 15,999.-)',
      'ผ่อนชำระ 0% สูงสุด 24 เดือน (เพียง 667 บาท/เดือน)',
      'แถมฟรี realme Care VIP Screen Card ประกันจอแตก 2 ปีเต็ม มูลค่า 4,990 บาท'
    ],
    freeGifts: [
      'หัวชาร์จเร็วแท้ 80W GaN Adapter พร้อมสายชาร์จถักทนทาน',
      'เคสพรีเมียมกันกระแทกลายหนังตรงรุ่น',
      'ลำโพงบลูทูธพกพา Waterproof Speaker มูลค่า 990 บาท',
      'ฟิล์มกระจกโค้ง UV 3D พร้อมบริการติดฟรีหน้าร้าน'
    ],
    warranty: 'ประกันศูนย์ไทย 2 ปีเต็ม (เปลี่ยนเครื่องใหม่ภายใน 14 วัน และประกันจอแตก 2 ปี)',
    afterSales: 'VIP Fast Track เข้าศูนย์บริการไม่ต้องรอคิว, บริการเครื่องสำรองระดับพรีเมียมระหว่างซ่อม, ล้างเครื่องและติดฟิล์มใหม่ฟรีปีละ 2 ครั้ง',
    highlightPoints: [
      'มีเลนส์ 64MP Periscope Telephoto ซูมออปติคอล 3x และซูมดิจิทัล 120x คุณภาพสูงเทียบมือถือเรือธง',
      'แรม 12GB และความจุ 512GB เก็บภาพถ่ายวิดีโอได้ไม่อั้น',
      'ชาร์จไวกว่ารุ่นธรรมดาด้วย 80W SUPERVOOC',
      'กล้องหลัก Sony IMX890 ขนาดเซนเซอร์ใหญ่กว่า ให้มิติภาพหน้าชัดหลังเบลอสวยงาม'
    ],
    limitations: [
      'ราคาสูงกว่ารุ่น Pro ธรรมดาประมาณ 3,000 บาท',
      'น้ำหนักตัวเครื่องมากกว่ารุ่น Pro เล็กน้อยเนื่องจากโมดูลกล้อง Periscope'
    ],
    lastUpdated: '2026-10-04'
  },
  {
    id: 'prod-samsung-a55-5g',
    name: 'Samsung Galaxy A55 5G',
    category: 'mobile',
    brand: 'Samsung',
    price: 13999,
    originalPrice: 15999,
    rating: 4.7,
    reviewCount: 310,
    inStock: true,
    stockCount: 45,
    tags: ['มือถือ Samsung', 'ราคาไม่เกิน 15,000', 'กันน้ำ IP67', 'อัปเดตยาว 4 ปี'],
    colors: [
      {
        name: 'ดำ Awesome Navy',
        hex: '#1f2937',
        overlayHex: '#1f2937',
        image: 'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?auto=format&fit=crop&w=900&q=80'
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
        image: 'https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&w=900&q=80'
      }
    ],
    defaultImage: 'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?auto=format&fit=crop&w=900&q=80',
    specs: {
      screen: '6.6 นิ้ว Super AMOLED FHD+, 120Hz, Vision Booster, กระจก Gorilla Glass Victus+',
      processor: 'Samsung Exynos 1480 (4nm) พร้อม GPU AMD Xclipse 530',
      ram: '8GB / 12GB LPDDR5',
      storage: '256GB (รองรับ MicroSD สูงสุด 1TB)',
      rearCamera: '50MP (f/1.8, OIS) + 12MP Ultra-wide 123° + 5MP Macro',
      frontCamera: '32MP (f/2.2) รองรับ 4K UHD Video',
      battery: '5,000 mAh ใช้งานข้ามวันได้อย่างสบาย',
      charging: '25W Fast Charging',
      os: 'Android 14 พร้อม One UI 6.1 (อัปเดต OS 4 ปี + ความปลอดภัย 5 ปี)',
      weight: '213 กรัม กรอบเครื่องโลหะ Metal Frame พรีเมียม',
      connectivity: '5G, Wi-Fi 6, Bluetooth 5.3, NFC, มาตรฐานกันน้ำกันฝุ่น IP67'
    },
    promotions: [
      'ลดทันที 2,000 บาทจากราคาปกติ',
      'ผ่อน 0% นาน 10 เดือน เดือนละ 1,399 บาท',
      'เก่าแลกใหม่ เพิ่มมูลค่าเครื่องเก่าสูงสุด 2,000 บาท'
    ],
    freeGifts: [
      'Samsung 25W Travel Adapter แท้',
      'เคสใส Silicone Case แท้จาก Samsung',
      'ฟิล์มกันรอยกระจกนิรภัย',
      'คูปองส่วนลดซื้อ Galaxy Buds 500 บาท'
    ],
    warranty: 'ประกันศูนย์ไทย 1 ปีเต็ม พร้อมบริการ Samsung Care+ คุ้มครองอุบัติเหตุ',
    afterSales: 'บริการ Door to Door ซ่อมถึงบ้านทั่วประเทศ, ถ่ายโอนข้อมูลด้วย Smart Switch ฟรีที่ร้าน',
    highlightPoints: [
      'กันน้ำกันฝุ่นระดับ IP67 ดำน้ำได้ลึก 1 เมตร นาน 30 นาที ทนทานสูง',
      'รองรับการอัปเกรดระบบปฏิบัติการ Android นานถึง 4 ปี และความปลอดภัย 5 ปี',
      'ตัวเครื่องกรอบโลหะและกระจก Victus+ งานประกอบแข็งแกร่งระดับเรือธง',
      'รองรับใส่การ์ด MicroSD เพิ่มหน่วยความจำได้สูงสุด 1TB'
    ],
    limitations: [
      'ความเร็วการชาร์จเพียง 25W ช้ากว่าแบรนด์จีนในระดับราคาเดียวกัน',
      'น้ำหนักตัวเครื่อง 213 กรัม ค่อนข้างหนักเมื่อถือมือเดียวนานๆ'
    ],
    lastUpdated: '2026-10-04'
  },
  {
    id: 'prod-samsung-s24-ultra',
    name: 'Samsung Galaxy S24 Ultra',
    category: 'mobile',
    brand: 'Samsung',
    price: 38900,
    originalPrice: 46900,
    rating: 4.9,
    reviewCount: 520,
    inStock: true,
    stockCount: 12,
    tags: ['เรือธงตัวท็อป', 'Samsung Galaxy AI', 'ปากกา S-Pen', 'กล้อง 200MP'],
    colors: [
      {
        name: 'เทา Titanium Gray',
        hex: '#717376',
        overlayHex: '#717376',
        image: 'https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&w=900&q=80'
      },
      {
        name: 'ดำ Titanium Black',
        hex: '#212224',
        overlayHex: '#212224',
        image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=900&q=80'
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
      screen: '6.8 นิ้ว Dynamic AMOLED 2X QHD+, 1-120Hz LTPO, Gorilla Armor ลดแสงสะท้อน 75%',
      processor: 'Qualcomm Snapdragon 8 Gen 3 for Galaxy (4nm)',
      ram: '12GB LPDDR5X',
      storage: '256GB / 512GB UFS 4.0',
      rearCamera: '200MP OIS + 50MP Periscope 5x (10x Optical quality) + 10MP Tele 3x + 12MP Ultrawide',
      frontCamera: '12MP Dual Pixel AF',
      battery: '5,000 mAh พร้อมจัดการพลังงานอัจฉริยะ',
      charging: '45W Super Fast Charging 2.0 + ไร้สาย 15W + Reverse Wireless 4.5W',
      os: 'Android 14 One UI 6.1.1 พร้อม Galaxy AI เต็มรูปแบบ (การันตีอัปเดต 7 ปี)',
      weight: '232 กรัม เฟรมไทเทเนียมเกรดอากาศยาน',
      connectivity: '5G, Wi-Fi 7, Bluetooth 5.3, UWB, ปากกา S-Pen ในตัว, IP68'
    },
    promotions: [
      'ลดราคาพิเศษทันที 8,000 บาท',
      'ผ่อน 0% นาน 36 เดือน เริ่มต้นเพียงเดือนละ 1,080 บาท',
      'ฟรีประกัน Samsung Care+ 1 ปีเต็มมูลค่า 4,590 บาท'
    ],
    freeGifts: [
      'Samsung 45W Power Adapter แท้',
      'เคส Smart View Wallet แท้',
      'Galaxy SmartTag 2 มูลค่า 990 บาท'
    ],
    warranty: 'ประกันศูนย์ไทย 2 ปีเต็ม คุ้มครองจอแตกและอุบัติเหตุรอบเครื่อง',
    afterSales: 'บริการผู้ช่วยส่วนตัว Galaxy Butler 24 ชั่วโมง, เครื่องสำรองรุ่นเดียวกันระหว่างซ่อม',
    highlightPoints: [
      'ฟีเจอร์ Galaxy AI ครบครัน: Circle to Search, แปลสายโทรศัพท์เรียลไทม์, สรุปข้อความโน้ต',
      'กระจก Gorilla Armor ลดแสงสะท้อนได้ถึง 75% สู้แดดกลางแจ้งได้ดีที่สุดในตลาด',
      'ปากกา S-Pen ในตัว วาด เขียน สั่งงานระยะไกลได้คล่องตัว',
      'การันตีอัปเดตระบบปฏิบัติการและแพตช์ความปลอดภัยยาวนานถึง 7 ปี'
    ],
    limitations: [
      'ราคาสูงระดับเรือธง',
      'ตัวเครื่องขนาดใหญ่และน้ำหนัก 232 กรัม ขอบเหลี่ยมอาจกดอุ้งมือ'
    ],
    lastUpdated: '2026-10-04'
  },
  {
    id: 'prod-samsung-a16-5g',
    name: 'Samsung Galaxy A16 5G',
    category: 'mobile',
    brand: 'Samsung',
    price: 6499,
    originalPrice: 7299,
    rating: 4.6,
    reviewCount: 185,
    inStock: true,
    stockCount: 50,
    tags: ['มือถือ Samsung', 'ราคาประหยัด', 'ไม่เกิน 10,000', 'อัปเดตยาว 6 ปี'],
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
      }
    ],
    defaultImage: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=900&q=80',
    specs: {
      screen: '6.7 นิ้ว Super AMOLED FHD+, 90Hz, 800 nits',
      processor: 'MediaTek Dimensity 6300 (6nm)',
      ram: '8GB',
      storage: '128GB (เพิ่ม MicroSD ได้สูงสุด 1.5TB)',
      rearCamera: '50MP หลัก + 5MP Ultra-wide + 2MP Macro',
      frontCamera: '13MP',
      battery: '5,000 mAh ใช้งาน 2 วันสบายๆ',
      charging: '25W Fast Charging',
      os: 'Android 14 One UI 6.1 (อัปเดต OS 6 ครั้ง + ความปลอดภัย 6 ปี)',
      weight: '200 กรัม บาง 7.9 มม.',
      connectivity: '5G, Wi-Fi 5, Bluetooth 5.3, กันน้ำละออง IP54'
    },
    promotions: [
      'ราคาพิเศษสำหรับเปิดตัว 6,499 บาท',
      'ผ่อน 0% นาน 6 เดือน เดือนละ 1,083 บาท'
    ],
    freeGifts: [
      'หัวชาร์จ 25W',
      'เคสใสกันกระแทก',
      'ฟิล์มกระจกนิรภัย'
    ],
    warranty: 'ประกันศูนย์ไทย 1 ปีเต็ม',
    afterSales: 'บริการอัปเดตระบบและตรวจเช็กสภาพเครื่องฟรีที่ศูนย์บริการ Samsung',
    highlightPoints: [
      'ราคาประหยัด ได้หน้าจอ Super AMOLED สีสันสดใส',
      'การันตีอัปเดต OS ยาวนานถึง 6 ปี คุ้มค่าที่สุดในกลุ่มมือถือราคาประหยัด',
      'แบตเตอรี่ 5,000 mAh อึดมากใช้งานได้ถึง 2 วัน'
    ],
    limitations: [
      'รีเฟรชเรทหน้าจอ 90Hz (ไม่ใช่ 120Hz)',
      'ไม่มีระบบกันสั่น OIS ในกล้องหลัก'
    ],
    lastUpdated: '2026-10-04'
  },
  {
    id: 'prod-xiaomi-14t-pro',
    name: 'Xiaomi 14T Pro 5G',
    category: 'mobile',
    brand: 'Xiaomi',
    price: 19990,
    originalPrice: 21990,
    rating: 4.9,
    reviewCount: 220,
    inStock: true,
    stockCount: 20,
    tags: ['กล้อง Leica', 'ชาร์จเร็ว 120W', 'เน้นแบตและชาร์จไว', 'แรงจัด Dimensity 9300+'],
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
      }
    ],
    defaultImage: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=900&q=80',
    specs: {
      screen: '6.67 นิ้ว 1.5K CrystalRes AMOLED, 144Hz, HDR10+, Dolby Vision, 4,000 nits',
      processor: 'MediaTek Dimensity 9300+ (4nm) ระดับแฟลกชิป แรงสุดในระดับราคา',
      ram: '12GB LPDDR5X',
      storage: '512GB UFS 4.0',
      rearCamera: 'กล้องร่วมพัฒนา Leica 50MP Light Fusion 900 OIS + 50MP Leica Telephoto + 12MP Ultrawide',
      frontCamera: '32MP ถ่าย 4K HDR10+',
      battery: '5,000 mAh ใช้งานหนักตลอดวัน',
      charging: '120W HyperCharge ชาร์จเต็ม 100% ใน 19 นาที + ไร้สาย 50W',
      os: 'Xiaomi HyperOS บนพื้นฐาน Android 14 พร้อม Xiaomi AISP',
      weight: '209 กรัม กรอบอะลูมิเนียมเกรดสูง แข็งแรงทนทาน',
      connectivity: '5G, Wi-Fi 7, Bluetooth 5.4, NFC, กันน้ำกันฝุ่น IP68'
    },
    promotions: [
      'แถมฟรี Xiaomi 120W Charging Combo Pack ในกล่อง',
      'ผ่อน 0% นานสูงสุด 24 เดือน (เพียงเดือนละ 833 บาท)',
      'รับสิทธิ์ซ่อมหน้าจอแตกฟรี 1 ครั้ง ภายใน 6 เดือนแรก'
    ],
    freeGifts: [
      'หัวชาร์จ 120W HyperCharge แท้',
      'เคสพรีเมียม Matte Case',
      'ฟิล์มกันรอยติดตั้งจากโรงงาน',
      'นาฬิกาสมาร์ทวอทช์ Xiaomi Band 8 Pro มูลค่า 2,490 บาท'
    ],
    warranty: 'ประกันศูนย์ไทย 2 ปีเต็ม (คุ้มครองหน้าจอแตก 6 เดือนแรก)',
    afterSales: 'บริการส่งเคลมด่วนถึงบ้าน, บริการเครื่องสำรองใช้งานฟรี',
    highlightPoints: [
      'ระบบชาร์จเร็วสะใจ 120W เสียบชาร์จเพียง 19 นาทีได้ 100% พร้อมรองรับชาร์จไร้สาย 50W',
      'เลนส์ออปติคอลระดับตำนานจาก Leica ให้โทนสี Leica Authentic & Vibrant สวยเป็นเอกลักษณ์',
      'ชิปประมวลผลตัวท็อป Dimensity 9300+ เล่นเกมหนักปรับกราฟิกสุดได้ทุกเกม',
      'มาตรฐานกันน้ำระดับ IP68 กันน้ำลึก 2 เมตร'
    ],
    limitations: [
      'ไม่มีช่องเสียบหูฟัง 3.5 มม.',
      'ไม่มีช่องใส่ MicroSD เพิ่มความจุ'
    ],
    lastUpdated: '2026-10-04'
  },
  {
    id: 'prod-oneplus-nord-4',
    name: 'OnePlus Nord 4 5G',
    category: 'mobile',
    brand: 'OnePlus',
    price: 14990,
    originalPrice: 16990,
    rating: 4.8,
    reviewCount: 160,
    inStock: true,
    stockCount: 22,
    tags: ['แบตอึด 5500mAh', 'ชาร์จเร็ว 100W', 'บอดี้โลหะชิ้นเดียว', 'ราคาไม่เกิน 15,000'],
    colors: [
      {
        name: 'เงิน Mercurial Silver',
        hex: '#cbd5e1',
        overlayHex: '#cbd5e1',
        image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=900&q=80'
      },
      {
        name: 'ดำ Obsidian Midnight',
        hex: '#0f172a',
        overlayHex: '#0f172a',
        image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=900&q=80'
      }
    ],
    defaultImage: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=900&q=80',
    specs: {
      screen: '6.74 นิ้ว 1.5K Super Fluid AMOLED, 120Hz, 2,150 nits, รองรับสัมผัสขณะมือเปียก Aqua Touch',
      processor: 'Snapdragon 7+ Gen 3 (4nm) แรงระดับเรือธง',
      ram: '12GB LPDDR5X',
      storage: '256GB UFS 4.0',
      rearCamera: '50MP Sony LYT-600 OIS + 8MP Ultra-wide 112°',
      frontCamera: '16MP พร้อมระบบปรับแต่งใบหน้าธรรมชาติ',
      battery: '5,500 mAh ความจุสูงสุด แบตเตอรี่อึดใช้งานได้ถึง 2 วันเต็ม',
      charging: '100W SUPERVOOC ชาร์จ 1-100% ในเวลาเพียง 28 นาที',
      os: 'OxygenOS 14.1 (การันตีอัปเดต Android 4 ปี + ความปลอดภัย 6 ปี)',
      weight: '199 กรัม ตัวเครื่องอะลูมิเนียมชิ้นเดียวแบบ Unibody แข็งแกร่งพรีเมียม',
      connectivity: '5G, Wi-Fi 6, Bluetooth 5.4, สวิตช์เลื่อนสลับโหมดเสียง Alert Slider, IP65'
    },
    promotions: [
      'โปรโมชั่นราคาพิเศษต่ำกว่า 15,000 บาท',
      'ผ่อน 0% นาน 10 เดือน บัตรเครดิตที่ร่วมรายการ',
      'แถมฟรีกระเป๋าเดินทาง OnePlus Voyager 20 นิ้ว'
    ],
    freeGifts: [
      'หัวชาร์จเร็ว 100W SUPERVOOC Power Adapter ในกล่อง',
      'เคสกันกระแทก OnePlus Sandstone Case แท้',
      'ฟิล์มกระจกนิรภัย',
      'หูฟัง OnePlus Nord Buds 2 มูลค่า 1,990 บาท'
    ],
    warranty: 'ประกันศูนย์ไทย 2 ปีเต็ม (ประกันจอแตก 1 ปี)',
    afterSales: 'บริการเปลี่ยนแบตเตอรี่แท้ฟรี 1 ครั้งภายใน 4 ปี (หากสุขภาพแบตต่ำกว่า 80%)',
    highlightPoints: [
      'แบตเตอรี่ใหญ่สะใจ 5,500 mAh ใช้งานได้ยาวนานที่สุด พร้อมชาร์จเร็ว 100W ชาร์จเต็มไวมาก',
      'ตัวเครื่องดีไซน์ Metal Unibody โลหะชิ้นเดียว สวย ทนทาน ไร้รอยต่อ',
      'ชิป Snapdragon 7+ Gen 3 สถาปัตยกรรมเดียวกับชิปเรือธง ประสิทธิภาพลื่นไหลไร้สะดุด',
      'มีปุ่ม Alert Slider ด้านข้าง สลับโหมดเงียบ สั่น กริ่ง ได้ในสัมผัสเดียว'
    ],
    limitations: [
      'ไม่มีเลนส์ซูม Telephoto เฉพาะ',
      'ไม่มีระบบชาร์จไร้สาย'
    ],
    lastUpdated: '2026-10-04'
  },
  {
    id: 'prod-poco-x6-pro',
    name: 'POCO X6 Pro 5G',
    category: 'mobile',
    brand: 'Xiaomi',
    price: 11490,
    originalPrice: 13990,
    rating: 4.8,
    reviewCount: 380,
    inStock: true,
    stockCount: 35,
    tags: ['สเปคคุ้มสุด', 'ราคาไม่เกิน 15,000', 'เล่นเกมลื่น', 'ชาร์จไว 67W'],
    colors: [
      {
        name: 'เหลือง Yellow Leather',
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
      screen: '6.67 นิ้ว Flow AMOLED 1.5K, 120Hz, 1,800 nits, ขอบจอบางเฉียบ 1.3 มม.',
      processor: 'MediaTek Dimensity 8300-Ultra (4nm) คะแนน AnTuTu ทะลุ 1.4 ล้านคะแนน',
      ram: '12GB LPDDR5X',
      storage: '512GB UFS 4.0 ความเร็วอ่านเขียนระดับท็อป',
      rearCamera: '64MP OIS + 8MP Ultra-wide + 2MP Macro',
      frontCamera: '16MP',
      battery: '5,000 mAh พร้อมระบบ LiquidCool Technology 2.0',
      charging: '67W Turbo Charging ชาร์จ 100% ใน 45 นาที',
      os: 'Xiaomi HyperOS บนพื้นฐาน Android 14',
      weight: '186 กรัม',
      connectivity: '5G, Wi-Fi 6, Bluetooth 5.4, NFC, ลำโพงคู่ Dolby Atmos'
    },
    promotions: [
      'ราคา Flash Sale ต่ำสุดในตลาดเพียง 11,490 บาท',
      'ผ่อน 0% นาน 10 เดือน เริ่มต้นเดือนละ 1,149 บาท'
    ],
    freeGifts: [
      'หัวชาร์จ 67W แท้',
      'เคสยางกันกระแทกสีดำ',
      'ฟิล์มกันรอยหน้าจอ',
      'พัดลมระบายความร้อนติดหลังมือถือสำหรับเล่นเกม มูลค่า 590 บาท'
    ],
    warranty: 'ประกันศูนย์ไทย 15 เดือน พร้อมเปลี่ยนเครื่องใหม่ใน 30 วัน',
    afterSales: 'บริการเคลมเปลี่ยนอะไหล่แท้, ดูแลตรวจเช็กระบบความร้อนฟรี',
    highlightPoints: [
      'ชิป Dimensity 8300-Ultra แรงที่สุดในงบหมื่นต้น เล่น ROV 120fps, Genshin Impact สบาย',
      'ได้ความจุ 512GB และ RAM 12GB สเปคจัดเต็มที่สุดในงบไม่เกิน 15,000 บาท',
      'หน้าจอ Flow AMOLED ขอบจอบางมาก สวยงามเกินราคา'
    ],
    limitations: [
      'กล้องถ่ายภาพในที่แสงน้อยยังเป็นรองรุ่นที่เน้นกล้องโดยตรง',
      'ฝาหลังตัวเครื่องเป็นโพลีคาร์บอเนต'
    ],
    lastUpdated: '2026-10-04'
  },
  {
    id: 'prod-iphone-16-pro',
    name: 'Apple iPhone 16 Pro',
    category: 'mobile',
    brand: 'Apple',
    price: 39900,
    originalPrice: 39900,
    rating: 4.9,
    reviewCount: 650,
    inStock: true,
    stockCount: 15,
    tags: ['Apple Intelligence', 'ปุ่ม Camera Control', 'วิดีโอ 4K 120fps', 'ชิป A18 Pro'],
    colors: [
      {
        name: 'ทะเลทราย Desert Titanium',
        hex: '#c5b49e',
        overlayHex: '#c5b49e',
        image: 'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?auto=format&fit=crop&w=900&q=80'
      },
      {
        name: 'ธรรมชาติ Natural Titanium',
        hex: '#9e9c99',
        overlayHex: '#9e9c99',
        image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&w=900&q=80'
      },
      {
        name: 'ขาว White Titanium',
        hex: '#f4f4f4',
        overlayHex: '#f4f4f4',
        image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=900&q=80'
      },
      {
        name: 'ดำ Black Titanium',
        hex: '#232426',
        overlayHex: '#232426',
        image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=900&q=80'
      }
    ],
    defaultImage: 'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?auto=format&fit=crop&w=900&q=80',
    specs: {
      screen: '6.3 นิ้ว Super Retina XDR OLED, ProMotion 120Hz, Dynamic Island, ขอบจอบางที่สุดที่เคยมี',
      processor: 'Apple A18 Pro (3nm Gen 2) พร้อม 6-core GPU และฮาร์ดแวร์ Ray Tracing',
      ram: '8GB Unified Memory ออกแบบมาเพื่อ Apple Intelligence',
      storage: '128GB / 256GB / 512GB / 1TB NVMe',
      rearCamera: '48MP Fusion (24mm, 48mm 2x) + 48MP Ultra-wide มาโคร + 12MP Telephoto ซูมออปติคอล 5x',
      frontCamera: '12MP TrueDepth พร้อมออโต้โฟกัส',
      battery: '3,582 mAh เล่นวิดีโอนานสูงสุด 27 ชั่วโมง',
      charging: 'ชาร์จเร็วผ่าน USB-C (USB 3 10Gbps), MagSafe สูงสุด 25W',
      os: 'iOS 18 พร้อมรองรับ Apple Intelligence',
      weight: '199 กรัม กรอบไทเทเนียมเกรด 5 ขัดเงาไมโครบลัชต์',
      connectivity: '5G, Wi-Fi 7, Bluetooth 5.3, UWB Gen 2, ปุ่ม Camera Control แบบสัมผัสคาปาซิทีฟ'
    },
    promotions: [
      'ผ่อน 0% นานสูงสุด 36 เดือน ผ่านบัตร First Choice / SCB / KTC (เริ่มต้นเดือนละ 1,108 บาท)',
      'นำเครื่องเก่ามาแลก รับ On-top เพิ่มทันที 3,000 บาท',
      'สิทธิ์ซื้อ AppleCare+ ในราคาลด 15%'
    ],
    freeGifts: [
      'หัวชาร์จเร็ว Belkin 30W USB-C GaN Charger',
      'เคสแม่เหล็กใสรองรับ MagSafe แท้',
      'ฟิล์มกระจกเต็มจอเกรดพรีเมียมจากโฟกัสพร้อมประกัน 1 ปี'
    ],
    warranty: 'ประกันศูนย์ Apple Care ทั่วโลก 1 ปีเต็ม เข้าไอคอนสยาม หรือศูนย์ Apple Authorized ได้ทุกสาขา',
    afterSales: 'บริการสอนใช้งาน Apple Intelligence และการตั้งค่าเครื่องใหม่โดยผู้เชี่ยวชาญ',
    highlightPoints: [
      'ปุ่ม Camera Control ใหม่ล่าสุด กดบันทึกภาพ สไลด์ซูม และปรับรูรับแสงได้สมจริงเหมือนกล้องมืออาชีพ',
      'กล้อง Telephoto ซูมออปติคอล 5x คุณภาพสูง และถ่ายวิดีโอ 4K 120fps Dolby Vision ได้เนียนตา',
      'ชิป A18 Pro ประมวลผลเร็วที่สุด พร้อมรองรับฟีเจอร์ AI อัจฉริยะ',
      'พอร์ต USB-C รองรับความเร็วระดับ USB 3 ถ่ายโอนไฟล์ใหญ่ได้ทันใจ'
    ],
    limitations: [
      'ความจุเริ่มต้นให้มาเพียง 128GB ในราคาเกือบสี่หมื่นบาท',
      'ความเร็วการชาร์จยังคงตามหลังฝั่ง Android'
    ],
    lastUpdated: '2026-10-04'
  },
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
