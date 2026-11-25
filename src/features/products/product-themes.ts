/**
 * Màu sắc & tag nổi bật đồng bộ 100% theo file Bảng báo giá PDF.
 */

export interface FeatureTheme {
  slug: string;
  pdfPage: number;
  pdfSectionTitle: string;
  primaryColor: string; // Hex chính của bảng giá
  bannerGradient: string; // CSS inline gradient
  badgeBgHex: string; // Nền badge hex
  badgeTextHex: string; // Chữ badge hex
  borderColorHex: string; // Viền hover
  lightBgHex: string; // Nền nhẹ dịu mắt
  accentTextHex: string; // Màu chữ nhấn
  priceGradient: string; // Nền giá
  colorDots?: { name: string; hex: string }[];
  featureTags?: string[];
}

export const FEATURE_THEMES: Record<string, FeatureTheme> = {
  // Trang 1: ÁNH SÁNG XANH - BLUECUT (SHMC) -> Cyan Blue (#1d96b8 / #36aed8)
  'rocky-anh-sang-xanh-bluecut': {
    slug: 'rocky-anh-sang-xanh-bluecut',
    pdfPage: 1,
    pdfSectionTitle: 'ÁNH SÁNG XANH - BLUECUT (SHMC)',
    primaryColor: '#1d96b8',
    bannerGradient: 'linear-gradient(135deg, #36aed8 0%, #1d96b8 100%)',
    badgeBgHex: '#1d96b8',
    badgeTextHex: '#ffffff',
    borderColorHex: '#1d96b8',
    lightBgHex: '#eaf6fa',
    accentTextHex: '#1d96b8',
    priceGradient: 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 50%, #ffffff 100%)',
    featureTags: ['Công nghệ chống ASX', 'Thiết kế siêu phẳng ASP', 'Hạn chế chói cao cấp', 'Chống tia UV'],
  },

  // Trang 1: LỌC ÁNH SÁNG XANH THÔNG MINH (SHMC) -> Teal Green (#0c857d / #3bac9c)
  'rocky-smart-bluecontrol': {
    slug: 'rocky-smart-bluecontrol',
    pdfPage: 1,
    pdfSectionTitle: 'LỌC ÁNH SÁNG XANH THÔNG MINH (SHMC)',
    primaryColor: '#0c857d',
    bannerGradient: 'linear-gradient(135deg, #3bac9c 0%, #0c857d 100%)',
    badgeBgHex: '#0c857d',
    badgeTextHex: '#ffffff',
    borderColorHex: '#0c857d',
    lightBgHex: '#eaf7f5',
    accentTextHex: '#0c857d',
    priceGradient: 'linear-gradient(135deg, #f0fdfa 0%, #ccfbf1 50%, #ffffff 100%)',
    featureTags: ['Siêu mỏng', 'Lọc ASX thông minh', 'Hạn chế bám bẩn & vân tay', 'Hạn chế chói cao cấp', 'Chống tia UV'],
  },

  // Trang 2: ĐỔI MÀU TRENDY (SHMC) -> Mint Pastel Aqua (#91cbce / #1495a3) + 6 Màu Sắc
  'rocky-doi-mau-trendy': {
    slug: 'rocky-doi-mau-trendy',
    pdfPage: 2,
    pdfSectionTitle: 'ĐỔI MÀU TRENDY (SHMC)',
    primaryColor: '#1495a3',
    bannerGradient: 'linear-gradient(135deg, #91cbce 0%, #1495a3 100%)',
    badgeBgHex: '#1495a3',
    badgeTextHex: '#ffffff',
    borderColorHex: '#1495a3',
    lightBgHex: '#eef8f9',
    accentTextHex: '#1495a3',
    priceGradient: 'linear-gradient(135deg, #ecfeff 0%, #cffafe 50%, #ffffff 100%)',
    colorDots: [
      { name: 'Khói', hex: '#64748b' },
      { name: 'Trà', hex: '#b45309' },
      { name: 'Xanh dương', hex: '#2563eb' },
      { name: 'Xanh lá', hex: '#16a34a' },
      { name: 'Hồng', hex: '#ec4899' },
      { name: 'Tím', hex: '#9333ea' },
    ],
    featureTags: ['Đổi màu siêu nhanh', 'BST 6 màu thời thượng', 'Chống tia UV', 'Hạn chế chói cao cấp'],
  },

  // Trang 2: ĐỔI MÀU SMART (SHMC) -> Deep Purple / Tím Mận (#543570 / #462465)
  'rocky-doi-mau-smart': {
    slug: 'rocky-doi-mau-smart',
    pdfPage: 2,
    pdfSectionTitle: 'ĐỔI MÀU SMART (SHMC)',
    primaryColor: '#543570',
    bannerGradient: 'linear-gradient(135deg, #714693 0%, #462465 100%)',
    badgeBgHex: '#543570',
    badgeTextHex: '#ffffff',
    borderColorHex: '#543570',
    lightBgHex: '#f5f0fa',
    accentTextHex: '#543570',
    priceGradient: 'linear-gradient(135deg, #faf5ff 0%, #f3e8ff 50%, #ffffff 100%)',
    colorDots: [
      { name: 'Khói', hex: '#64748b' },
      { name: 'Trà', hex: '#b45309' },
      { name: 'Nâu Amber', hex: '#d97706' },
    ],
    featureTags: ['Tự đổi màu theo UV', 'Lọc ASX thông minh', 'Bản 1.61 MR-8 Nâu Amber', 'Chống tia UV', 'Hạn chế chói cao cấp'],
  },

  // Trang 2: ĐỔI MÀU EDITION (ASP) -> Sapphire Tech Navy (#2c5284 / #10477c)
  'rocky-doi-mau-edition': {
    slug: 'rocky-doi-mau-edition',
    pdfPage: 2,
    pdfSectionTitle: 'ĐỔI MÀU EDITION (ASP)',
    primaryColor: '#10477c',
    bannerGradient: 'linear-gradient(135deg, #2c5284 0%, #10477c 100%)',
    badgeBgHex: '#10477c',
    badgeTextHex: '#ffffff',
    borderColorHex: '#10477c',
    lightBgHex: '#eef4fa',
    accentTextHex: '#10477c',
    priceGradient: 'linear-gradient(135deg, #eff6ff 0%, #dbeafe 50%, #ffffff 100%)',
    colorDots: [
      { name: 'Khói', hex: '#64748b' },
      { name: 'Trà', hex: '#b45309' },
    ],
    featureTags: ['Hạn chế trầy xước tốt', 'Lọc ASX thông minh', 'Đổi màu siêu nhanh', 'Chống tia UV', 'Hạn chế chói cao cấp'],
  },

  // Trang 3: CHỐNG TIA UV (SHMC) -> Amber Golden Orange (#eea232 / #d97706)
  'rocky-chong-tia-uv-167': {
    slug: 'rocky-chong-tia-uv-167',
    pdfPage: 3,
    pdfSectionTitle: 'CHỐNG TIA UV (SHMC)',
    primaryColor: '#d97706',
    bannerGradient: 'linear-gradient(135deg, #eea232 0%, #d97706 100%)',
    badgeBgHex: '#d97706',
    badgeTextHex: '#ffffff',
    borderColorHex: '#d97706',
    lightBgHex: '#fffbeb',
    accentTextHex: '#d97706',
    priceGradient: 'linear-gradient(135deg, #fffbeb 0%, #fef3c7 50%, #ffffff 100%)',
    featureTags: ['Công nghệ ASX độc quyền', 'Thiết kế siêu phẳng ASP', 'Mỏng nhẹ 30-35%', 'Cứng gấp 5 lần', 'Chống tia UV400'],
  },

  // Trang 3: KÍNH KHOAN VÀ CHỐNG VA ĐẬP (SHMC) -> Steel Blue (#5a798c / #334155)
  'rocky-kinh-khoan-chong-va-dap': {
    slug: 'rocky-kinh-khoan-chong-va-dap',
    pdfPage: 3,
    pdfSectionTitle: 'KÍNH KHOAN VÀ CHỐNG VA ĐẬP (SHMC)',
    primaryColor: '#334155',
    bannerGradient: 'linear-gradient(135deg, #5a798c 0%, #334155 100%)',
    badgeBgHex: '#334155',
    badgeTextHex: '#ffffff',
    borderColorHex: '#475569',
    lightBgHex: '#f1f5f9',
    accentTextHex: '#334155',
    priceGradient: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 50%, #ffffff 100%)',
    featureTags: ['Vật liệu siêu bền MR-8', 'Tốt nhất kính khoan', 'Chống vỡ tuyệt đối', 'Hạn chế bám bẩn & vân tay'],
  },

  // Trang 3: DRIVESHIELD (SHMC) -> Midnight Driver Navy & Ruby AR (#2d426f / #be123c)
  'rocky-driveshield-ruby': {
    slug: 'rocky-driveshield-ruby',
    pdfPage: 3,
    pdfSectionTitle: 'DRIVESHIELD (SHMC)',
    primaryColor: '#be123c',
    bannerGradient: 'linear-gradient(135deg, #2d426f 0%, #1e293b 60%, #be123c 100%)',
    badgeBgHex: '#1e293b',
    badgeTextHex: '#ffffff',
    borderColorHex: '#be123c',
    lightBgHex: '#f8fafc',
    accentTextHex: '#be123c',
    priceGradient: 'linear-gradient(135deg, #f8fafc 0%, #ffe4e6 50%, #ffffff 100%)',
    featureTags: ['Ngăn ASX có hại', 'Lớp phủ Ruby Coating', 'Tăng độ sắc nét ban đêm', 'Hạn chế chói cao cấp', 'Chống tia UV'],
  },

  // Trang 4: HAI TRÒNG (SHMC) INVISIBLE -> Emerald Forest Green (#418d56 / #2d6c3e)
  'rocky-hai-trong-invisible': {
    slug: 'rocky-hai-trong-invisible',
    pdfPage: 4,
    pdfSectionTitle: 'HAI TRÒNG (SHMC) INVISIBLE',
    primaryColor: '#2d6c3e',
    bannerGradient: 'linear-gradient(135deg, #418d56 0%, #2d6c3e 100%)',
    badgeBgHex: '#2d6c3e',
    badgeTextHex: '#ffffff',
    borderColorHex: '#2d6c3e',
    lightBgHex: '#f0fdf4',
    accentTextHex: '#2d6c3e',
    priceGradient: 'linear-gradient(135deg, #f0fdf4 0%, #dcfce7 50%, #ffffff 100%)',
    featureTags: ['Không đường viền', 'Tối ưu hóa tầm nhìn', 'Đọc sách & Nhìn xa', 'Lọc và chống ASX', 'Chống tia UV'],
  },

  // Trang 4: ĐA TRÒNG (SHMC) -> Burgundy Crimson Wine Red (#a9372d / #8c261d)
  'rocky-da-trong-freeform': {
    slug: 'rocky-da-trong-freeform',
    pdfPage: 4,
    pdfSectionTitle: 'ĐA TRÒNG (SHMC)',
    primaryColor: '#8c261d',
    bannerGradient: 'linear-gradient(135deg, #a9372d 0%, #8c261d 100%)',
    badgeBgHex: '#8c261d',
    badgeTextHex: '#ffffff',
    borderColorHex: '#8c261d',
    lightBgHex: '#fef2f2',
    accentTextHex: '#8c261d',
    priceGradient: 'linear-gradient(135deg, #fef2f2 0%, #fee2e2 50%, #ffffff 100%)',
    featureTags: ['Công nghệ Freeform 4K', 'Tầm nhìn xa - trung - gần', 'Dễ sử dụng', 'Mỏng đến 20%', 'Dễ vệ sinh'],
  },

  // Trang 4: MYOPIA CONTROL (SHMC) -> Pediatric Ocean Sky Blue (#699ebb / #21729b)
  'rocky-myopia-control': {
    slug: 'rocky-myopia-control',
    pdfPage: 4,
    pdfSectionTitle: 'MYOPIA CONTROL (SHMC)',
    primaryColor: '#21729b',
    bannerGradient: 'linear-gradient(135deg, #699ebb 0%, #21729b 100%)',
    badgeBgHex: '#21729b',
    badgeTextHex: '#ffffff',
    borderColorHex: '#21729b',
    lightBgHex: '#f0f9ff',
    accentTextHex: '#21729b',
    priceGradient: 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 50%, #ffffff 100%)',
    featureTags: ['Vi thấu kính D.I.M.S', 'Kiểm soát gia tăng độ cận', 'Chống bể Polycarbonate', 'Dễ vệ sinh', 'Chống tia UV'],
  },

  // 9 sản phẩm nhu cầu trang chủ (Home Solutions)
  'rocky-156-bluecut-shmc': {
    slug: 'rocky-156-bluecut-shmc',
    pdfPage: 1,
    pdfSectionTitle: 'DÀNH CHO DESIGNER & ĐỒ HỌA MÁY TÍNH',
    primaryColor: '#1d96b8',
    bannerGradient: 'linear-gradient(135deg, #36aed8 0%, #1d96b8 100%)',
    badgeBgHex: '#1d96b8',
    badgeTextHex: '#ffffff',
    borderColorHex: '#1d96b8',
    lightBgHex: '#eaf6fa',
    accentTextHex: '#1d96b8',
    priceGradient: 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 50%, #ffffff 100%)',
    featureTags: ['Trong suốt 99.8%', 'Chuẩn màu 100%', 'Không ngả vàng', 'Lọc ASX UV420'],
  },
  'rocky-trendy-photochromic-grey': {
    slug: 'rocky-trendy-photochromic-grey',
    pdfPage: 2,
    pdfSectionTitle: 'DÂN VĂN PHÒNG & NĂNG ĐỘNG (2 TRONG 1)',
    primaryColor: '#543570',
    bannerGradient: 'linear-gradient(135deg, #714693 0%, #462465 100%)',
    badgeBgHex: '#543570',
    badgeTextHex: '#ffffff',
    borderColorHex: '#543570',
    lightBgHex: '#f5f0fa',
    accentTextHex: '#543570',
    priceGradient: 'linear-gradient(135deg, #faf5ff 0%, #f3e8ff 50%, #ffffff 100%)',
    colorDots: [
      { name: 'Khói Titan', hex: '#64748b' },
      { name: 'Trà Hổ Phách', hex: '#b45309' },
    ],
    featureTags: ['Đổi màu 2-in-1', 'Tiện lợi văn phòng & ra nắng', 'Cản 100% tia UV', 'Lọc ASX máy tính'],
  },
  'rocky-167-ultra-thin-bluecut': {
    slug: 'rocky-167-ultra-thin-bluecut',
    pdfPage: 3,
    pdfSectionTitle: 'BẢO VỆ MẮT NGOÀI TRỜI GẮT (CHỐNG UV400)',
    primaryColor: '#d97706',
    bannerGradient: 'linear-gradient(135deg, #eea232 0%, #d97706 100%)',
    badgeBgHex: '#d97706',
    badgeTextHex: '#ffffff',
    borderColorHex: '#d97706',
    lightBgHex: '#fffbeb',
    accentTextHex: '#d97706',
    priceGradient: 'linear-gradient(135deg, #fffbeb 0%, #fef3c7 50%, #ffffff 100%)',
    featureTags: ['Mỏng nhẹ 35%', 'Cận nặng thẩm mỹ', 'Lọc ASX UV420', 'Thiết kế siêu phẳng ASP'],
  },
  'rocky-driveshield-night-vision': {
    slug: 'rocky-driveshield-night-vision',
    pdfPage: 3,
    pdfSectionTitle: 'TÀI XẾ & LÁI XE ĐÊM (CHỐNG CHÓI ĐÈN PHA)',
    primaryColor: '#be123c',
    bannerGradient: 'linear-gradient(135deg, #2d426f 0%, #1e293b 60%, #be123c 100%)',
    badgeBgHex: '#1e293b',
    badgeTextHex: '#ffffff',
    borderColorHex: '#be123c',
    lightBgHex: '#f8fafc',
    accentTextHex: '#be123c',
    priceGradient: 'linear-gradient(135deg, #f8fafc 0%, #ffe4e6 50%, #ffffff 100%)',
    featureTags: ['Tài xế lái xe ban đêm', 'Giảm lóa đèn LED', 'Ruby AR Multi-Matrix', 'Tăng độ tương phản'],
  },
  'rocky-freeform-progressive-hd': {
    slug: 'rocky-freeform-progressive-hd',
    pdfPage: 4,
    pdfSectionTitle: 'LÃO THỊ & NGƯỜI LỚN TUỔI (ĐA TRÒNG XA TRUNG GẦN)',
    primaryColor: '#8c261d',
    bannerGradient: 'linear-gradient(135deg, #a9372d 0%, #8c261d 100%)',
    badgeBgHex: '#8c261d',
    badgeTextHex: '#ffffff',
    borderColorHex: '#8c261d',
    lightBgHex: '#fef2f2',
    accentTextHex: '#8c261d',
    priceGradient: 'linear-gradient(135deg, #fef2f2 0%, #fee2e2 50%, #ffffff 100%)',
    featureTags: ['Người lớn tuổi (40+)', 'Xa - trung - gần liền mạch', 'Freeform HD kỹ thuật số', 'Không gợn sóng'],
  },
  'rocky-myocontrol-dims-kids': {
    slug: 'rocky-myocontrol-dims-kids',
    pdfPage: 4,
    pdfSectionTitle: 'TRẺ EM & HỌC SINH (KIỂM SOÁT CẬN TIẾN TRIỂN)',
    primaryColor: '#21729b',
    bannerGradient: 'linear-gradient(135deg, #699ebb 0%, #21729b 100%)',
    badgeBgHex: '#21729b',
    badgeTextHex: '#ffffff',
    borderColorHex: '#21729b',
    lightBgHex: '#f0f9ff',
    accentTextHex: '#21729b',
    priceGradient: 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 50%, #ffffff 100%)',
    featureTags: ['Trẻ em học đường', 'Kiểm soát cận thị tiến triển', '1164 Vi thấu kính D.I.M.S', 'Chống va đập an toàn'],
  },
  'rocky-chameleon-photochromic': {
    slug: 'rocky-chameleon-photochromic',
    pdfPage: 2,
    pdfSectionTitle: 'TÍN ĐỒ THỜI TRANG (KÍNH CẬN ĐỔI MÀU ĐA SẮC)',
    primaryColor: '#1495a3',
    bannerGradient: 'linear-gradient(135deg, #91cbce 0%, #1495a3 100%)',
    badgeBgHex: '#1495a3',
    badgeTextHex: '#ffffff',
    borderColorHex: '#1495a3',
    lightBgHex: '#eef8f9',
    accentTextHex: '#1495a3',
    priceGradient: 'linear-gradient(135deg, #ecfeff 0%, #cffafe 50%, #ffffff 100%)',
    colorDots: [
      { name: 'Khói', hex: '#64748b' },
      { name: 'Trà', hex: '#b45309' },
      { name: 'Xanh dương', hex: '#2563eb' },
      { name: 'Xanh lá', hex: '#16a34a' },
      { name: 'Hồng', hex: '#ec4899' },
      { name: 'Tím', hex: '#9333ea' },
    ],
    featureTags: ['BST 6 Sắc màu cá tính', 'Kính râm đổi màu siêu nhanh', 'Thời trang phong cách', 'Chống 100% UV'],
  },
  'rocky-160-mr8-aspheric': {
    slug: 'rocky-160-mr8-aspheric',
    pdfPage: 3,
    pdfSectionTitle: 'GỌNG KHOAN BẮT ỐC (SIÊU DAI MR-8 CHỐNG VỠ)',
    primaryColor: '#334155',
    bannerGradient: 'linear-gradient(135deg, #5a798c 0%, #334155 100%)',
    badgeBgHex: '#334155',
    badgeTextHex: '#ffffff',
    borderColorHex: '#475569',
    lightBgHex: '#f1f5f9',
    accentTextHex: '#334155',
    priceGradient: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 50%, #ffffff 100%)',
    featureTags: ['Gọng khoan bắt ốc', 'Monomer Mitsui MR-8', 'Siêu dai chống nứt vỡ', 'Độ truyền quang 99.8%'],
  },
  'rocky-174-ultra-high-index': {
    slug: 'rocky-174-ultra-high-index',
    pdfPage: 1,
    pdfSectionTitle: 'CẬN VIỄN NẶNG (TRÒNG MỎNG NHẸ 1.67 - 1.74)',
    primaryColor: '#10477c',
    bannerGradient: 'linear-gradient(135deg, #2c5284 0%, #10477c 100%)',
    badgeBgHex: '#10477c',
    badgeTextHex: '#ffffff',
    borderColorHex: '#10477c',
    lightBgHex: '#eef4fa',
    accentTextHex: '#10477c',
    priceGradient: 'linear-gradient(135deg, #eff6ff 0%, #dbeafe 50%, #ffffff 100%)',
    featureTags: ['Cận rất nặng (-10D đến -15D)', 'Chiết suất 1.74 siêu mỏng', 'Nhẹ hơn 45%', 'Thẩm mỹ mép kính phẳng'],
  },
};

/**
 * Lấy theme màu sắc chính xác theo bảng giá PDF
 */
export function getProductTheme(slug: string): FeatureTheme {
  return (
    FEATURE_THEMES[slug] || {
      slug,
      pdfPage: 1,
      pdfSectionTitle: 'GIẢI PHÁP THỊ LỰC ROCKYLENS',
      primaryColor: '#1d96b8',
      bannerGradient: 'linear-gradient(135deg, #36aed8 0%, #1d96b8 100%)',
      badgeBgHex: '#1d96b8',
      badgeTextHex: '#ffffff',
      borderColorHex: '#1d96b8',
      lightBgHex: '#eaf6fa',
      accentTextHex: '#1d96b8',
      priceGradient: 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 50%, #ffffff 100%)',
    }
  );
}
