// src/features/products/pricing-matrix.ts
// Bảng giá bán lẻ chính hãng Rocky Lens Canada từ tài liệu "Bảng giá lẻ 4 trang RockyLens.pdf"

export interface VariantOption {
  id: string;
  name: string;
  subTitle?: string;
  coating?: string;
  sphRange?: string;
  cylRange?: string;
  addRange?: string;
  color?: string;
  price: number; // in VNĐ
  formattedPrice: string;
  badge?: string;
}

export interface SelectorGroup {
  id: string;
  label: string;
  type: 'index' | 'subproduct' | 'power_range' | 'color' | 'add';
  options: {
    id: string;
    label: string;
    sub?: string;
    badge?: string;
  }[];
}

export interface ProductPricingSchema {
  slug: string;
  productName: string;
  track: 'feature' | 'need';
  categoryLabel: string;
  selectorGroups: SelectorGroup[];
  variants: VariantOption[];
  calculatePrice: (selected: Record<string, string>) => {
    price: number;
    formattedPrice: string;
    matchedVariant?: VariantOption;
    summaryLines: { label: string; value: string }[];
  };
}

// ============================================================================
// 1. DỮ LIỆU TÍNH GIÁ THEO TÍNH NĂNG (TỪ FILE BẢNG GIÁ LẺ PDF)
// ============================================================================

export const PRICING_SCHEMAS: Record<string, ProductPricingSchema> = {
  // --------------------------------------------------------------------------
  // 1. ÁNH SÁNG XANH - BLUECUT (SHMC) (Trang 1 PDF)
  // --------------------------------------------------------------------------
  'rocky-anh-sang-xanh-bluecut': {
    slug: 'rocky-anh-sang-xanh-bluecut',
    productName: 'Ánh Sáng Xanh - BlueCut (SHMC)',
    track: 'feature',
    categoryLabel: 'Lọc Ánh Sáng Xanh Tiêu Chuẩn',
    selectorGroups: [
      {
        id: 'index',
        label: '1. Chọn Chiết Xuất & Dòng Tròng',
        type: 'index',
        options: [
          { id: '156-elite', label: '1.56 ASP BLUECUT (Elite)', sub: 'Ngăn ASX mới nhất, phôi trong suốt' },
          { id: '161-mr8', label: '1.61 MR8 ASP LUXURY (Lux)', sub: 'Chống vỡ gọng khoan, hạn chế chói' },
          { id: '167-elite', label: '1.67 ASP BLUECUT (Elite)', sub: 'Siêu mỏng nhẹ, tối ưu tầm nhìn' },
          { id: '174-elite', label: '1.74 ASP BLUECUT (Elite)', sub: 'Cực mỏng, nhẹ hơn 45% cho độ cao' },
        ],
      },
      {
        id: 'power_range',
        label: '2. Dải Độ Khúc Xạ (Độ Cầu SPH / Độ Loạn CYL)',
        type: 'power_range',
        options: [
          { id: 'std', label: 'Độ Chuẩn (Cận/Viễn thường, Loạn PL đến -2.00)' },
          { id: 'cyl_high', label: 'Loạn Thị Cao (-2.25 đến -4.00)' },
          { id: 'cyl_super', label: 'Loạn Thị Đặc Biệt (-4.25 đến -6.00)' },
          { id: 'sph_high', label: 'Độ Cận Cao (-8.25 đến -10.00 hoặc -12.50 đến -15.00)' },
        ],
      },
    ],
    variants: [
      // 1.56 ASP BLUECUT (Elite)
      {
        id: '156-elite-std',
        name: '1.56 ASP BLUECUT Elite (Độ chuẩn)',
        coating: 'Elite',
        sphRange: '+6.00 -> -8.00 (+6.00 -> +0.25)',
        cylRange: 'PL -> -2.00',
        price: 560000,
        formattedPrice: '560.000 ₫',
      },
      {
        id: '156-elite-cyl-high',
        name: '1.56 ASP BLUECUT Elite (Loạn -2.25 đến -4.00)',
        coating: 'Elite',
        sphRange: 'PL -> -6.00 (+6.00 -> +0.25)',
        cylRange: '-2.25 -> -4.00',
        price: 660000,
        formattedPrice: '660.000 ₫',
      },
      {
        id: '156-elite-cyl-super',
        name: '1.56 ASP BLUECUT Elite (Loạn -4.25 đến -6.00)',
        coating: 'Elite',
        sphRange: 'PL -> -6.00',
        cylRange: '-4.25 -> -6.00',
        price: 760000,
        formattedPrice: '760.000 ₫',
      },
      // 1.61 MR8 ASP LUXURY (Lux)
      {
        id: '161-mr8-std',
        name: '1.61 MR8 ASP BLUECUT LUXURY (PL đến -8.00)',
        coating: 'Lux',
        sphRange: 'PL -> -8.00',
        cylRange: 'PL -> -2.00',
        price: 1238000,
        formattedPrice: '1.238.000 ₫',
      },
      {
        id: '161-mr8-high',
        name: '1.61 MR8 ASP BLUECUT LUXURY (-8.25 đến -10.00)',
        coating: 'Lux',
        sphRange: '-8.25 -> -10.00',
        cylRange: 'PL -> -2.00',
        price: 1338000,
        formattedPrice: '1.338.000 ₫',
      },
      // 1.67 ASP BLUECUT (Elite)
      {
        id: '167-elite-std',
        name: '1.67 ASP BLUECUT Elite (PL đến -12.00)',
        coating: 'Elite',
        sphRange: 'PL -> -12.00 hoặc -12.50 -> -15.00 (CYL 0.00)',
        cylRange: 'PL -> -2.00',
        price: 1228000,
        formattedPrice: '1.228.000 ₫',
      },
      {
        id: '167-elite-special',
        name: '1.67 ASP BLUECUT Elite (Loạn -2.25 đến -4.00 / Viễn)',
        coating: 'Elite',
        sphRange: 'PL -> -10.00 / +6.00 -> +0.25',
        cylRange: '-2.25 -> -4.00 hoặc PL -> -2.00',
        price: 1328000,
        formattedPrice: '1.328.000 ₫',
      },
      // 1.74 ASP BLUECUT (Elite)
      {
        id: '174-elite-std',
        name: '1.74 ASP BLUECUT Elite (-4.00 đến -10.00)',
        coating: 'Elite',
        sphRange: '-4.00 -> -10.00',
        cylRange: 'PL -> -2.00',
        price: 3680000,
        formattedPrice: '3.680.000 ₫',
      },
    ],
    calculatePrice(sel) {
      const idx = sel['index'] || '156-elite';
      const pwr = sel['power_range'] || 'std';
      let matchId = '156-elite-std';

      if (idx === '156-elite') {
        if (pwr === 'cyl_super') matchId = '156-elite-cyl-super';
        else if (pwr === 'cyl_high') matchId = '156-elite-cyl-high';
        else matchId = '156-elite-std';
      } else if (idx === '161-mr8') {
        if (pwr === 'sph_high') matchId = '161-mr8-high';
        else matchId = '161-mr8-std';
      } else if (idx === '167-elite') {
        if (pwr === 'cyl_high' || pwr === 'sph_high') matchId = '167-elite-special';
        else matchId = '167-elite-std';
      } else if (idx === '174-elite') {
        matchId = '174-elite-std';
      }

      const found = this.variants.find((v) => v.id === matchId) || this.variants[0];
      return {
        price: found.price,
        formattedPrice: found.formattedPrice,
        matchedVariant: found,
        summaryLines: [
          { label: 'Dòng sản phẩm', value: found.name },
          { label: 'Lớp phủ quang học', value: found.coating || 'Elite SHMC' },
          { label: 'Dải độ áp dụng', value: `SPH: ${found.sphRange} | CYL: ${found.cylRange}` },
        ],
      };
    },
  },

  // --------------------------------------------------------------------------
  // 2. LỌC ÁNH SÁNG XANH THÔNG MINH (SHMC) (Trang 1 PDF)
  // --------------------------------------------------------------------------
  'rocky-smart-bluecontrol': {
    slug: 'rocky-smart-bluecontrol',
    productName: 'Lọc Ánh Sáng Xanh Thông Minh (SHMC)',
    track: 'feature',
    categoryLabel: 'Lọc ASX Chọn Lọc & Trong Suốt',
    selectorGroups: [
      {
        id: 'index',
        label: '1. Chọn Chiết Xuất & Dòng Tròng',
        type: 'index',
        options: [
          { id: '161-smart', label: '1.61 ASP SMART BLUECONTROL', sub: 'Lớp phủ Blue Sapphire, cứng gấp 3.5 lần' },
          { id: '167-smart', label: '1.67 ASP SMART BLUECONTROL (Best Choice)', sub: 'Crystal Sapphire Coating, mỏng nhẹ 30%' },
        ],
      },
      {
        id: 'power_range',
        label: '2. Dải Độ Khúc Xạ (SPH / CYL)',
        type: 'power_range',
        options: [
          { id: 'std', label: 'Độ Chuẩn (SPH +6.00 đến -8.00, Loạn PL đến -2.00)' },
          { id: 'cyl_high', label: 'Loạn Cao (SPH PL đến -6.00, Loạn -2.25 đến -4.00)' },
        ],
      },
    ],
    variants: [
      {
        id: '161-smart-std',
        name: '1.61 ASP Smart BlueControl (Độ chuẩn)',
        coating: 'Crystal Sapphire',
        sphRange: '+6.00 -> -8.00',
        cylRange: 'PL -> -2.00',
        price: 886000,
        formattedPrice: '886.000 ₫',
      },
      {
        id: '161-smart-cyl-high',
        name: '1.61 ASP Smart BlueControl (Loạn -2.25 đến -4.00)',
        coating: 'Crystal Sapphire',
        sphRange: 'PL -> -6.00',
        cylRange: '-2.25 -> -4.00',
        price: 986000,
        formattedPrice: '986.000 ₫',
      },
      {
        id: '167-smart-std',
        name: '1.67 ASP Smart BlueControl (Best Choice)',
        coating: 'Crystal Sapphire',
        sphRange: 'PL -> -10.00',
        cylRange: 'PL -> -2.00',
        price: 1760000,
        formattedPrice: '1.760.000 ₫',
      },
    ],
    calculatePrice(sel) {
      const idx = sel['index'] || '161-smart';
      const pwr = sel['power_range'] || 'std';
      let matchId = '161-smart-std';

      if (idx === '161-smart') {
        matchId = pwr === 'cyl_high' ? '161-smart-cyl-high' : '161-smart-std';
      } else {
        matchId = '167-smart-std';
      }

      const found = this.variants.find((v) => v.id === matchId) || this.variants[0];
      return {
        price: found.price,
        formattedPrice: found.formattedPrice,
        matchedVariant: found,
        summaryLines: [
          { label: 'Dòng sản phẩm', value: found.name },
          { label: 'Lớp phủ công nghệ', value: found.coating || 'Crystal Sapphire' },
          { label: 'Dải độ áp dụng', value: `SPH: ${found.sphRange} | CYL: ${found.cylRange}` },
        ],
      };
    },
  },

  // --------------------------------------------------------------------------
  // 3. ĐỔI MÀU TRENDY (SHMC) (Trang 2 PDF)
  // --------------------------------------------------------------------------
  'rocky-doi-mau-trendy': {
    slug: 'rocky-doi-mau-trendy',
    productName: 'Đổi Màu Trendy (SHMC)',
    track: 'feature',
    categoryLabel: '6 Sắc Màu Thời Thượng',
    selectorGroups: [
      {
        id: 'color',
        label: '1. Chọn Màu Sắc Đổi Màu (BST 6 Màu)',
        type: 'color',
        options: [
          { id: 'khoi', label: 'Khói (Grey)', sub: 'Lớp phủ Elite SHMC', badge: 'Kinh điển' },
          { id: 'tra', label: 'Trà (Brown)', sub: 'Lớp phủ Elite SHMC', badge: 'Ấm áp' },
          { id: 'xanh_duong', label: 'Xanh Dương (Blue)', sub: 'Lớp phủ Sapphire', badge: 'Hot Trend' },
          { id: 'xanh_la', label: 'Xanh Lá (Green)', sub: 'Lớp phủ Sapphire', badge: 'Dịu mắt' },
          { id: 'hong', label: 'Hồng (Pink)', sub: 'Lớp phủ Sapphire', badge: 'Cá tính' },
          { id: 'tim', label: 'Tím (Purple)', sub: 'Lớp phủ Sapphire', badge: 'Sang trọng' },
        ],
      },
      {
        id: 'index',
        label: '2. Chiết Xuất & Thiết Kế',
        type: 'index',
        options: [
          { id: '156-trendy', label: '1.56 SHMC Đổi Màu Siêu Nhanh', sub: 'SPH PL đến -6.00 | CYL PL đến -2.00' },
        ],
      },
    ],
    variants: [
      {
        id: '156-trendy-elite',
        name: '1.56 SHMC Đổi Màu Trendy (Khói / Trà)',
        coating: 'Elite',
        sphRange: 'PL -> -6.00',
        cylRange: 'PL -> -2.00',
        price: 688000,
        formattedPrice: '688.000 ₫',
      },
      {
        id: '156-trendy-sapphire',
        name: '1.56 SHMC Đổi Màu Trendy (Xanh dương / Xanh lá / Hồng / Tím)',
        coating: 'Sapphire',
        sphRange: 'PL -> -6.00',
        cylRange: 'PL -> -2.00',
        price: 688000,
        formattedPrice: '688.000 ₫',
      },
    ],
    calculatePrice(sel) {
      const color = sel['color'] || 'khoi';
      const isSapphire = ['xanh_duong', 'xanh_la', 'hong', 'tim'].includes(color);
      const found = isSapphire ? this.variants[1] : this.variants[0];
      const colorLabels: Record<string, string> = {
        khoi: 'Khói (Grey)',
        tra: 'Trà (Brown)',
        xanh_duong: 'Xanh Dương (Blue Sapphire)',
        xanh_la: 'Xanh Lá (Green)',
        hong: 'Hồng (Pink Rose)',
        tim: 'Tím (Purple Velvet)',
      };

      return {
        price: found.price,
        formattedPrice: found.formattedPrice,
        matchedVariant: found,
        summaryLines: [
          { label: 'Sắc màu đổi nắng', value: colorLabels[color] || color },
          { label: 'Lớp váng phủ', value: found.coating || 'SHMC' },
          { label: 'Dải độ hỗ trợ', value: `SPH: ${found.sphRange} | CYL: ${found.cylRange}` },
        ],
      };
    },
  },

  // --------------------------------------------------------------------------
  // 4. ĐỔI MÀU SMART (SHMC) (Trang 2 PDF)
  // --------------------------------------------------------------------------
  'rocky-doi-mau-smart': {
    slug: 'rocky-doi-mau-smart',
    productName: 'Đổi Màu Smart (SHMC)',
    track: 'feature',
    categoryLabel: 'Lọc ASX & Đổi Màu Nắng Tự Động',
    selectorGroups: [
      {
        id: 'model',
        label: '1. Chọn Dòng Sản Phẩm & Chiết Xuất',
        type: 'subproduct',
        options: [
          { id: '156-smart', label: '1.56 ASP Đổi Màu Lọc ASX (Sapphire)', sub: 'Best Choice - Hạn chế bám nước, bụi bẩn' },
          { id: '161-smart', label: '1.61 ASP Đổi Màu Lọc ASX (Sapphire)', sub: 'Mỏng nhẹ 15-20%, cứng và bền' },
          { id: '161-amber', label: '1.61 MR8 Đổi Màu Smart Plus Nâu Amber', sub: 'NEW - Sắc Nâu Amber thời thượng, chuyên gọng khoan' },
          { id: '167-smart', label: '1.67 ASP Đổi Màu Lọc ASX (Elite)', sub: 'Mỏng nhẹ đến 30%, siêu trơn và trong suốt' },
        ],
      },
      {
        id: 'color',
        label: '2. Màu Sắc Đổi',
        type: 'color',
        options: [
          { id: 'khoi', label: 'Khói (Grey)' },
          { id: 'tra', label: 'Trà (Brown)' },
          { id: 'amber', label: 'Nâu Amber (Dành riêng cho 1.61 MR8 Smart Plus)' },
        ],
      },
      {
        id: 'power_range',
        label: '3. Độ Khúc Xạ (Cận / Loạn)',
        type: 'power_range',
        options: [
          { id: 'std', label: 'Độ Chuẩn (Loạn PL đến -2.00)' },
          { id: 'cyl_high', label: 'Loạn Cao (-2.25 đến -4.00, áp dụng cho 1.56 & 1.61)' },
        ],
      },
    ],
    variants: [
      // 1.56
      {
        id: '156-smart-std',
        name: '1.56 ASP Đổi Màu Lọc ASX (Loạn đến -2.00)',
        coating: 'Sapphire',
        sphRange: '+6.00 -> -6.00',
        cylRange: 'PL -> -2.00',
        price: 788000,
        formattedPrice: '788.000 ₫',
      },
      {
        id: '156-smart-cyl-high',
        name: '1.56 ASP Đổi Màu Lọc ASX (Loạn -2.25 đến -4.00)',
        coating: 'Sapphire',
        sphRange: 'PL -> -6.00',
        cylRange: '-2.25 -> -4.00',
        price: 888000,
        formattedPrice: '888.000 ₫',
      },
      // 1.61
      {
        id: '161-smart-std',
        name: '1.61 ASP Đổi Màu Lọc ASX (Loạn đến -2.00)',
        coating: 'Sapphire',
        sphRange: 'PL -> -8.00',
        cylRange: 'PL -> -2.00',
        price: 1226000,
        formattedPrice: '1.226.000 ₫',
      },
      {
        id: '161-smart-cyl-high',
        name: '1.61 ASP Đổi Màu Lọc ASX (Loạn -2.25 đến -4.00)',
        coating: 'Sapphire',
        sphRange: 'PL -> -6.00',
        cylRange: '-2.25 -> -4.00',
        price: 1386000,
        formattedPrice: '1.386.000 ₫',
      },
      // 1.61 MR8 Nâu Amber
      {
        id: '161-amber',
        name: '1.61 MR8 Đổi Màu Smart Plus Nâu Amber',
        coating: 'Sapphire',
        sphRange: 'PL -> -10.00',
        cylRange: 'PL -> -2.00',
        price: 1890000,
        formattedPrice: '1.890.000 ₫',
      },
      // 1.67
      {
        id: '167-smart-std',
        name: '1.67 ASP Đổi Màu Lọc ASX',
        coating: 'Elite',
        sphRange: 'PL -> -10.00',
        cylRange: 'PL -> -2.00',
        price: 2286000,
        formattedPrice: '2.286.000 ₫',
      },
    ],
    calculatePrice(sel) {
      const model = sel['model'] || '156-smart';
      const pwr = sel['power_range'] || 'std';
      let matchId = '156-smart-std';

      if (model === '156-smart') {
        matchId = pwr === 'cyl_high' ? '156-smart-cyl-high' : '156-smart-std';
      } else if (model === '161-smart') {
        matchId = pwr === 'cyl_high' ? '161-smart-cyl-high' : '161-smart-std';
      } else if (model === '161-amber') {
        matchId = '161-amber';
      } else if (model === '167-smart') {
        matchId = '167-smart-std';
      }

      const found = this.variants.find((v) => v.id === matchId) || this.variants[0];
      const colorLabel = model === '161-amber' ? 'Nâu Amber Độc Quyền' : (sel['color'] === 'tra' ? 'Trà (Brown)' : 'Khói (Grey)');

      return {
        price: found.price,
        formattedPrice: found.formattedPrice,
        matchedVariant: found,
        summaryLines: [
          { label: 'Dòng sản phẩm', value: found.name },
          { label: 'Màu sắc đổi', value: colorLabel },
          { label: 'Dải độ áp dụng', value: `SPH: ${found.sphRange} | CYL: ${found.cylRange}` },
        ],
      };
    },
  },

  // --------------------------------------------------------------------------
  // 5. ĐỔI MÀU EDITION (ASP) (Trang 2 PDF)
  // --------------------------------------------------------------------------
  'rocky-doi-mau-edition': {
    slug: 'rocky-doi-mau-edition',
    productName: 'Đổi Màu Edition (ASP)',
    track: 'feature',
    categoryLabel: 'Phiên Bản Cao Cấp Edition 9 & 10',
    selectorGroups: [
      {
        id: 'edition',
        label: '1. Chọn Phiên Bản Edition',
        type: 'subproduct',
        options: [
          { id: 'edition-9', label: '1.56 ASP EDITION 9 (Best Choice)', sub: 'Lọc ASX Intelligent BlueSelect, đổi màu tối đậm' },
          { id: 'edition-10', label: '1.61 MR8 ASP EDITION 10 (Luxury)', sub: 'Công nghệ Spin Coating màu đậm đều, phôi siêu bền MR-8' },
        ],
      },
      {
        id: 'color',
        label: '2. Màu Sắc Đổi Nắng',
        type: 'color',
        options: [
          { id: 'khoi', label: 'Khói (Grey Edition)' },
          { id: 'tra', label: 'Trà (Brown Edition)' },
        ],
      },
    ],
    variants: [
      {
        id: 'edition-9',
        name: '1.56 ASP EDITION 9 (Crystal Sapphire)',
        coating: 'Crystal Sapphire',
        sphRange: 'PL -> -6.00 / +6.00 -> +0.25',
        cylRange: 'PL -> -2.00',
        price: 999000,
        formattedPrice: '999.000 ₫',
      },
      {
        id: 'edition-10',
        name: '1.61 MR8 ASP EDITION 10 (Crystal Sapphire)',
        coating: 'Crystal Sapphire',
        sphRange: 'PL -> -10.00 (hoặc +6.00 -> +0.25 CYL 0.00)',
        cylRange: 'PL -> -2.00',
        price: 3399000,
        formattedPrice: '3.399.000 ₫',
      },
    ],
    calculatePrice(sel) {
      const ed = sel['edition'] || 'edition-9';
      const found = ed === 'edition-10' ? this.variants[1] : this.variants[0];
      const colorName = sel['color'] === 'tra' ? 'Trà (Brown Edition)' : 'Khói (Grey Edition)';

      return {
        price: found.price,
        formattedPrice: found.formattedPrice,
        matchedVariant: found,
        summaryLines: [
          { label: 'Phiên bản', value: found.name },
          { label: 'Màu sắc đổi', value: colorName },
          { label: 'Lớp phủ', value: found.coating || 'Crystal Sapphire' },
        ],
      };
    },
  },

  // --------------------------------------------------------------------------
  // 6. CHỐNG TIA UV (SHMC) (Trang 3 PDF)
  // --------------------------------------------------------------------------
  'rocky-chong-tia-uv-167': {
    slug: 'rocky-chong-tia-uv-167',
    productName: 'Chống Tia UV 1.67 (SHMC)',
    track: 'feature',
    categoryLabel: 'Lá Chắn Cực Tím 100% UV400',
    selectorGroups: [
      {
        id: 'power_range',
        label: '1. Dải Độ Cận Khúc Xạ',
        type: 'power_range',
        options: [
          { id: 'std', label: 'Độ Cận Thông Dụng (PL đến -8.00, Loạn PL đến -2.00)' },
          { id: 'high', label: 'Độ Cận Cao (-8.25 đến -10.00, Loạn PL đến -2.00)' },
        ],
      },
    ],
    variants: [
      {
        id: 'uv-167-std',
        name: '1.67 ASP UV Elite (PL đến -8.00)',
        coating: 'Elite',
        sphRange: 'PL -> -8.00',
        cylRange: 'PL -> -2.00',
        price: 1028000,
        formattedPrice: '1.028.000 ₫',
      },
      {
        id: 'uv-167-high',
        name: '1.67 ASP UV Elite (-8.25 đến -10.00)',
        coating: 'Elite',
        sphRange: '-8.25 -> -10.00',
        cylRange: 'PL -> -2.00',
        price: 1068000,
        formattedPrice: '1.068.000 ₫',
      },
    ],
    calculatePrice(sel) {
      const pwr = sel['power_range'] || 'std';
      const found = pwr === 'high' ? this.variants[1] : this.variants[0];
      return {
        price: found.price,
        formattedPrice: found.formattedPrice,
        matchedVariant: found,
        summaryLines: [
          { label: 'Dòng sản phẩm', value: found.name },
          { label: 'Chiết suất', value: '1.67 Aspheric siêu mỏng' },
          { label: 'Dải độ áp dụng', value: `SPH: ${found.sphRange} | CYL: ${found.cylRange}` },
        ],
      };
    },
  },

  // --------------------------------------------------------------------------
  // 7. KÍNH KHOAN VÀ CHỐNG VA ĐẬP (SHMC) (Trang 3 PDF)
  // --------------------------------------------------------------------------
  'rocky-kinh-khoan-chong-va-dap': {
    slug: 'rocky-kinh-khoan-chong-va-dap',
    productName: 'Kính Khoan & Chống Va Đập (SHMC)',
    track: 'feature',
    categoryLabel: 'Bền Bỉ Tuyệt Đối & Chuyên Gọng Bắt Ốc',
    selectorGroups: [
      {
        id: 'type',
        label: '1. Chọn Loại Tròng & Vật Liệu Chống Vỡ',
        type: 'subproduct',
        options: [
          { id: '158-chong-be', label: 'TRÒNG CHỐNG BỂ 1.58 ASX (Elite)', sub: 'Chống va đập cao, dẻo dai, bảo vệ mắt khỏi ASX' },
          { id: '160-rocky-safe', label: 'ROCKY-SAFE 1.60 ASX (Crystal Sapphire)', sub: 'Best Choice - Polymer cao cấp, chịu lực X10 tròng thường' },
          { id: '161-driveshield', label: '1.61 MR8 ASP DRIVESHIELD (Ruby)', sub: 'Lái xe ban đêm chống chói đèn pha, phôi MR-8 bắt ốc' },
          { id: '161-amber', label: '1.61 MR8 ĐỔI MÀU SMART PLUS NÂU AMBER', sub: 'NEW - Sắc Nâu Amber thời thượng, chuyên gọng khoan' },
          { id: '161-edition10', label: '1.61 MR8 ASP ĐỔI MÀU EDITION 10', sub: 'Đổi màu siêu nhanh, phôi MR-8 cao cấp nhất' },
        ],
      },
    ],
    variants: [
      {
        id: '158-chong-be',
        name: 'Tròng Chống Bể 1.58 ASX (Elite)',
        coating: 'Elite',
        sphRange: 'PL -> -6.00 / -6.25 -> -8.00 / +6.00 -> +0.25',
        cylRange: 'PL -> -2.00',
        price: 790000,
        formattedPrice: '790.000 ₫',
      },
      {
        id: '160-rocky-safe',
        name: 'Rocky-Safe 1.60 ASX (Crystal Sapphire)',
        coating: 'Crystal Sapphire',
        sphRange: '+6.00 -> -6.00',
        cylRange: 'PL -> -2.00',
        price: 1299000,
        formattedPrice: '1.299.000 ₫',
      },
      {
        id: '161-driveshield',
        name: '1.61 MR8 ASP DriveShield (Ruby)',
        coating: 'Ruby',
        sphRange: '+6.00 -> -8.00',
        cylRange: 'PL -> -2.00',
        price: 1696000,
        formattedPrice: '1.696.000 ₫',
      },
      {
        id: '161-amber',
        name: '1.61 MR8 Đổi Màu Smart Plus Nâu Amber (Sapphire)',
        coating: 'Sapphire',
        sphRange: 'PL -> -10.00',
        cylRange: 'PL -> -2.00',
        price: 1890000,
        formattedPrice: '1.890.000 ₫',
      },
      {
        id: '161-edition10',
        name: '1.61 MR8 ASP Đổi Màu Edition 10 (Crystal Sapphire)',
        coating: 'Crystal Sapphire',
        sphRange: 'PL -> -10.00 (hoặc +6.00 -> +0.25 CYL 0.00)',
        cylRange: 'PL -> -2.00',
        price: 3399000,
        formattedPrice: '3.399.000 ₫',
      },
    ],
    calculatePrice(sel) {
      const type = sel['type'] || '158-chong-be';
      const found = this.variants.find((v) => v.id === type) || this.variants[0];
      return {
        price: found.price,
        formattedPrice: found.formattedPrice,
        matchedVariant: found,
        summaryLines: [
          { label: 'Loại tròng chuyên khoan', value: found.name },
          { label: 'Lớp váng phủ', value: found.coating || 'SHMC' },
          { label: 'Dải độ hỗ trợ', value: `SPH: ${found.sphRange} | CYL: ${found.cylRange}` },
        ],
      };
    },
  },

  // --------------------------------------------------------------------------
  // 8. DRIVESHIELD (SHMC) (Trang 3 PDF)
  // --------------------------------------------------------------------------
  'rocky-driveshield-ruby': {
    slug: 'rocky-driveshield-ruby',
    productName: 'DriveShield (SHMC) - Chuyên Dụng Lái Xe',
    track: 'feature',
    categoryLabel: 'Chống Chói Đèn Pha Đêm & Trượt Nước Mưa',
    selectorGroups: [
      {
        id: 'index',
        label: '1. Chọn Chiết Xuất Tròng Kính',
        type: 'index',
        options: [
          { id: '156-drive', label: '1.56 ASP DRIVESHIELD (Ruby)', sub: 'Giảm chói đèn xe, hạn chế bám bụi bẩn & bám nước' },
          { id: '161-drive', label: '1.61 MR8 ASP DRIVESHIELD (Ruby)', sub: 'Phôi MR-8 siêu dai chịu lực, mỏng nhẹ tối ưu tầm nhìn' },
        ],
      },
    ],
    variants: [
      {
        id: '156-drive',
        name: '1.56 ASP DriveShield Ruby',
        coating: 'Ruby',
        sphRange: '+6.00 -> -6.00',
        cylRange: 'PL -> -2.00',
        price: 1000000,
        formattedPrice: '1.000.000 ₫',
      },
      {
        id: '161-drive',
        name: '1.61 MR8 ASP DriveShield Ruby',
        coating: 'Ruby',
        sphRange: '+6.00 -> -8.00',
        cylRange: 'PL -> -2.00',
        price: 1696000,
        formattedPrice: '1.696.000 ₫',
      },
    ],
    calculatePrice(sel) {
      const idx = sel['index'] || '156-drive';
      const found = idx === '161-drive' ? this.variants[1] : this.variants[0];
      return {
        price: found.price,
        formattedPrice: found.formattedPrice,
        matchedVariant: found,
        summaryLines: [
          { label: 'Dòng lái xe chuyên dụng', value: found.name },
          { label: 'Lớp phủ quang học', value: 'Ruby AR Multi-Matrix chống chói LED' },
          { label: 'Dải độ hỗ trợ', value: `SPH: ${found.sphRange} | CYL: ${found.cylRange}` },
        ],
      };
    },
  },

  // --------------------------------------------------------------------------
  // 9. HAI TRÒNG (SHMC) INVISIBLE (Trang 4 PDF)
  // --------------------------------------------------------------------------
  'rocky-hai-trong-invisible': {
    slug: 'rocky-hai-trong-invisible',
    productName: 'Hai Tròng (SHMC) Invisible',
    track: 'feature',
    categoryLabel: 'Không Đường Lằn Thẩm Mỹ',
    selectorGroups: [
      {
        id: 'type',
        label: '1. Chọn Tính Năng Hai Tròng',
        type: 'subproduct',
        options: [
          { id: '156-clear-asx', label: '1.56 CHỐNG ASX (Best Choice)', sub: 'Bảo vệ mắt khỏi ASX, dễ thích nghi lần đầu' },
          { id: '156-photo-asx', label: '1.56 ĐỔI MÀU LỌC ASX', sub: 'Tự động đổi màu siêu nhanh ra nắng, lọc ASX trong nhà' },
        ],
      },
      {
        id: 'add',
        label: '2. Độ Đọc Sách / Nhìn Gần (ADD)',
        type: 'add',
        options: [
          { id: 'add-100-175', label: 'ADD +1.00 đến +1.75 (Lão thị giai đoạn đầu)' },
          { id: 'add-200-250', label: 'ADD +2.00 đến +2.50 (Lão thị trung bình)' },
          { id: 'add-275-300', label: 'ADD +2.75 đến +3.00 (Lão thị cao)' },
        ],
      },
    ],
    variants: [
      {
        id: '156-clear-asx',
        name: '1.56 Chống ASX Invisible (Elite)',
        coating: 'Elite',
        sphRange: '-2.00 -> +3.00',
        addRange: '+1.00 -> +3.00',
        price: 590000,
        formattedPrice: '590.000 ₫',
      },
      {
        id: '156-photo-asx',
        name: '1.56 Đổi Màu Lọc ASX Invisible (Elite)',
        coating: 'Elite',
        sphRange: '-2.00 -> +3.00',
        addRange: '+1.00 -> +3.00',
        price: 825000,
        formattedPrice: '825.000 ₫',
      },
    ],
    calculatePrice(sel) {
      const type = sel['type'] || '156-clear-asx';
      const found = type === '156-photo-asx' ? this.variants[1] : this.variants[0];
      return {
        price: found.price,
        formattedPrice: found.formattedPrice,
        matchedVariant: found,
        summaryLines: [
          { label: 'Loại hai tròng', value: found.name },
          { label: 'Độ nhìn xa (SPH)', value: '-2.00 đến +3.00' },
          { label: 'Độ cộng thêm (ADD)', value: '+1.00 đến +3.00 (Không đường viền lằn)' },
        ],
      };
    },
  },

  // --------------------------------------------------------------------------
  // 10. ĐA TRÒNG (SHMC) (Trang 4 PDF)
  // --------------------------------------------------------------------------
  'rocky-da-trong-freeform': {
    slug: 'rocky-da-trong-freeform',
    productName: 'Đa Tròng Freeform (SHMC)',
    track: 'feature',
    categoryLabel: 'Tầm Nhìn 3 Vùng Xa - Trung - Gần',
    selectorGroups: [
      {
        id: 'model',
        label: '1. Chọn Dòng Đa Tròng Kỹ Thuật Số',
        type: 'subproduct',
        options: [
          { id: '156-digital-asx', label: '1.56 Digital 4+9mm Chống ASX (Elite)', sub: 'Vùng nhìn mượt mà ổn định, điều phối Xa - Trung - Gần' },
          { id: '156-digital-photo', label: '1.56 Digital 4+9mm Đổi Màu Lọc ASX (Elite)', sub: 'Đổi màu ra nắng tiện lợi kết hợp đa cự ly' },
          { id: '161-ultraview', label: '1.61 SHMC UltraView Freeform 4K (Best Choice)', sub: 'Thiết kế Freeform 4K sắc nét, Crystal Sapphire mỏng nhẹ 20%' },
        ],
      },
      {
        id: 'add',
        label: '2. Độ Đọc Sách / Nhìn Gần (ADD)',
        type: 'add',
        options: [
          { id: 'add-100-175', label: 'ADD +1.00 đến +1.75' },
          { id: 'add-200-250', label: 'ADD +2.00 đến +2.50' },
          { id: 'add-275-300', label: 'ADD +2.75 đến +3.00' },
        ],
      },
    ],
    variants: [
      {
        id: '156-digital-asx',
        name: '1.56 SHMC Digital 4+9mm Chống ASX (Elite)',
        coating: 'Elite',
        sphRange: '-2.00 -> +3.00',
        addRange: '+1.00 -> +3.00',
        price: 950000,
        formattedPrice: '950.000 ₫',
      },
      {
        id: '156-digital-photo',
        name: '1.56 SHMC Digital 4+9mm Đổi Màu Lọc ASX (Elite)',
        coating: 'Elite',
        sphRange: '-2.00 -> +3.00',
        addRange: '+1.00 -> +3.00',
        price: 1360000,
        formattedPrice: '1.360.000 ₫',
      },
      {
        id: '161-ultraview',
        name: '1.61 SHMC UltraView Freeform 4K (Crystal Sapphire)',
        coating: 'Crystal Sapphire',
        sphRange: '-2.00 -> +3.00',
        addRange: '+1.00 -> +3.00',
        price: 1468000,
        formattedPrice: '1.468.000 ₫',
      },
    ],
    calculatePrice(sel) {
      const model = sel['model'] || '156-digital-asx';
      const found = this.variants.find((v) => v.id === model) || this.variants[0];
      return {
        price: found.price,
        formattedPrice: found.formattedPrice,
        matchedVariant: found,
        summaryLines: [
          { label: 'Dòng đa tròng', value: found.name },
          { label: 'Vùng chuyển tiếp', value: 'Xa - Trung - Gần công nghệ Smooth Optics' },
          { label: 'Dải độ hỗ trợ', value: `SPH: ${found.sphRange} | ADD: ${found.addRange}` },
        ],
      };
    },
  },

  // --------------------------------------------------------------------------
  // 11. MYOPIA CONTROL (SHMC) (Trang 4 PDF)
  // --------------------------------------------------------------------------
  'rocky-myopia-control': {
    slug: 'rocky-myopia-control',
    productName: 'Myopia Control (SHMC) - Kiểm Soát Cận Trẻ Em',
    track: 'feature',
    categoryLabel: 'Công Nghệ Vi Thấu Kính Giảm Tiến Triển Cận Thị',
    selectorGroups: [
      {
        id: 'tech',
        label: '1. Chọn Công Nghệ Kiểm Soát Cận',
        type: 'subproduct',
        options: [
          { id: 'digital-360', label: 'DIGITAL 360° DEFOCUS (Elite)', sub: 'Chống ASX, hạn chế chói, giảm tiến triển cận thị học đường' },
          { id: 'microlens-dims', label: 'INTELLIGENT MICRO-LENS DEFOCUS (Best Choice)', sub: '12 vòng tròn 1164 micro-lens, phôi Polycarbonate chống vỡ' },
        ],
      },
    ],
    variants: [
      {
        id: 'digital-360',
        name: 'Digital 360° Defocus (Elite)',
        coating: 'Elite',
        sphRange: 'PL -> -6.00',
        cylRange: 'PL -> -2.00',
        price: 960000,
        formattedPrice: '960.000 ₫',
      },
      {
        id: 'microlens-dims',
        name: 'Intelligent Micro-Lens Defocus Technology (Elite)',
        coating: 'Elite',
        sphRange: 'PL -> -6.00',
        cylRange: 'PL -> -2.00',
        price: 1680000,
        formattedPrice: '1.680.000 ₫',
      },
    ],
    calculatePrice(sel) {
      const tech = sel['tech'] || 'digital-360';
      const found = tech === 'microlens-dims' ? this.variants[1] : this.variants[0];
      return {
        price: found.price,
        formattedPrice: found.formattedPrice,
        matchedVariant: found,
        summaryLines: [
          { label: 'Công nghệ kiểm soát', value: found.name },
          { label: 'Vật liệu bảo vệ', value: tech === 'microlens-dims' ? 'Polycarbonate chống vỡ tuyệt đối' : 'High Index Resin an toàn' },
          { label: 'Dải độ hỗ trợ', value: `SPH: ${found.sphRange} | CYL: ${found.cylRange}` },
        ],
      };
    },
  },

  // ============================================================================
  // 2. DỮ LIỆU TÍNH GIÁ THEO NHU CẦU (9 SẢN PHẨM TRANG CHỦ)
  // ============================================================================

  // 1. Designer & Đồ Họa Máy Tính (Chuẩn Màu 100%)
  'rocky-156-bluecut-shmc': {
    slug: 'rocky-156-bluecut-shmc',
    productName: 'Rocky BlueCut UV420 Pure Clear (Thiết Kế Đồ Họa)',
    track: 'need',
    categoryLabel: 'Dành Cho Designer & Thiết Bị Số',
    selectorGroups: [
      {
        id: 'index',
        label: '1. Chọn Chiết Xuất & Độ Mỏng',
        type: 'index',
        options: [
          { id: '156', label: '1.56 ASP (Tiêu Chuẩn)', sub: 'Cận nhẹ đến vừa, trong suốt 99.8%' },
          { id: '161', label: '1.61 MR8 Luxury', sub: 'Mỏng nhẹ hơn 20%, chống mẻ vỡ' },
          { id: '167', label: '1.67 ASP Siêu Mỏng', sub: 'Cực mỏng nhẹ cho cận 3-7 độ' },
          { id: '174', label: '1.74 ASP Cực Mỏng', sub: 'Triệt tiêu đáy chai cho cận nặng >7 độ' },
        ],
      },
      {
        id: 'cyl',
        label: '2. Kèm Độ Loạn Thị',
        type: 'power_range',
        options: [
          { id: 'std', label: 'Không loạn hoặc loạn nhẹ (0.00 đến -2.00)' },
          { id: 'cyl_high', label: 'Loạn cao (-2.25 đến -4.00)' },
        ],
      },
    ],
    variants: [
      { id: '156-std', name: '1.56 ASP BlueCut (Độ chuẩn)', price: 560000, formattedPrice: '560.000 ₫' },
      { id: '156-cyl', name: '1.56 ASP BlueCut (Loạn cao)', price: 660000, formattedPrice: '660.000 ₫' },
      { id: '161', name: '1.61 MR8 ASP BlueCut Luxury', price: 1238000, formattedPrice: '1.238.000 ₫' },
      { id: '167', name: '1.67 ASP BlueCut', price: 1228000, formattedPrice: '1.228.000 ₫' },
      { id: '174', name: '1.74 ASP BlueCut', price: 3680000, formattedPrice: '3.680.000 ₫' },
    ],
    calculatePrice(sel) {
      const idx = sel['index'] || '156';
      const cyl = sel['cyl'] || 'std';
      let found = this.variants[0];

      if (idx === '156') found = cyl === 'cyl_high' ? this.variants[1] : this.variants[0];
      else if (idx === '161') found = this.variants[2];
      else if (idx === '167') found = this.variants[3];
      else if (idx === '174') found = this.variants[4];

      return {
        price: found.price,
        formattedPrice: found.formattedPrice,
        matchedVariant: found,
        summaryLines: [
          { label: 'Giải pháp thị lực', value: 'Thiết kế đồ họa & Coder (Chuẩn màu 100%)' },
          { label: 'Cấu hình chọn', value: found.name },
          { label: 'Tính năng bảo vệ', value: 'Lọc ASX màn hình không ngả vàng, chống mỏi mắt' },
        ],
      };
    },
  },

  // 2. Dân Văn Phòng & Làm Việc Máy Tính (Lọc ASX + Đổi Màu 2-in-1)
  'rocky-trendy-photochromic-grey': {
    slug: 'rocky-trendy-photochromic-grey',
    productName: 'Rocky Trendy Smart BlueCut Photo (Văn Phòng & Ra Nắng)',
    track: 'need',
    categoryLabel: 'Lọc ASX Trong Nhà & Đổi Màu Ra Nắng',
    selectorGroups: [
      {
        id: 'index',
        label: '1. Chọn Chiết Xuất Phù Hợp',
        type: 'index',
        options: [
          { id: '156', label: '1.56 ASP Đổi Màu Lọc ASX', sub: 'Tiêu chuẩn kinh tế, phủ Sapphire' },
          { id: '161', label: '1.61 ASP Đổi Màu Lọc ASX', sub: 'Mỏng nhẹ 20%, chống chói cao cấp' },
          { id: '167', label: '1.67 ASP Đổi Màu Lọc ASX', sub: 'Siêu mỏng 30%, độ cận cao' },
        ],
      },
      {
        id: 'color',
        label: '2. Màu Sắc Đổi Nắng',
        type: 'color',
        options: [
          { id: 'grey', label: 'Khói Titan (Grey)' },
          { id: 'brown', label: 'Trà Hổ Phách (Brown)' },
        ],
      },
    ],
    variants: [
      { id: '156', name: '1.56 ASP Đổi Màu Lọc ASX', price: 788000, formattedPrice: '788.000 ₫' },
      { id: '161', name: '1.61 ASP Đổi Màu Lọc ASX', price: 1226000, formattedPrice: '1.226.000 ₫' },
      { id: '167', name: '1.67 ASP Đổi Màu Lọc ASX', price: 2286000, formattedPrice: '2.286.000 ₫' },
    ],
    calculatePrice(sel) {
      const idx = sel['index'] || '156';
      const color = sel['color'] === 'brown' ? 'Trà Hổ Phách' : 'Khói Titan';
      let found = this.variants[0];
      if (idx === '161') found = this.variants[1];
      if (idx === '167') found = this.variants[2];

      return {
        price: found.price,
        formattedPrice: found.formattedPrice,
        matchedVariant: found,
        summaryLines: [
          { label: 'Giải pháp văn phòng', value: 'Tiện lợi 2 trong 1 (Lọc ASX + Đổi màu)' },
          { label: 'Cấu hình chiết suất', value: found.name },
          { label: 'Màu đổi ngoài trời', value: color },
        ],
      };
    },
  },

  // 3. Người Hay Hoạt Động Ngoài Trời (Chống UV400 / UV420 Tối Đa)
  'rocky-167-ultra-thin-bluecut': {
    slug: 'rocky-167-ultra-thin-bluecut',
    productName: 'Rocky UV420 MaxShield Protect (Ngoài Trời Chống UV)',
    track: 'need',
    categoryLabel: 'Bảo Vệ Mắt Ngoài Trời Nắng Gắt',
    selectorGroups: [
      {
        id: 'model',
        label: '1. Chọn Cấu Hình Bảo Vệ UV',
        type: 'subproduct',
        options: [
          { id: '167-uv', label: '1.67 ASP UV Elite (Ngăn 100% Cực Tím)', sub: 'Mỏng nhẹ 35%, bảo vệ võng mạc tối đa' },
          { id: '167-bluecontrol', label: '1.67 ASP Smart BlueControl Sapphire', sub: 'Lọc ASX thông minh & cản UV cao cấp' },
          { id: '167-photo', label: '1.67 ASP Đổi Màu Lọc ASX', sub: 'Mỏng nhẹ tự chuyển râm khi nắng gắt' },
        ],
      },
    ],
    variants: [
      { id: '167-uv', name: '1.67 ASP UV Elite', price: 1028000, formattedPrice: '1.028.000 ₫' },
      { id: '167-bluecontrol', name: '1.67 ASP Smart BlueControl', price: 1760000, formattedPrice: '1.760.000 ₫' },
      { id: '167-photo', name: '1.67 ASP Đổi Màu Lọc ASX', price: 2286000, formattedPrice: '2.286.000 ₫' },
    ],
    calculatePrice(sel) {
      const model = sel['model'] || '167-uv';
      const found = this.variants.find((v) => v.id === model) || this.variants[0];
      return {
        price: found.price,
        formattedPrice: found.formattedPrice,
        matchedVariant: found,
        summaryLines: [
          { label: 'Giải pháp ngoài trời', value: 'Chống tia UV400 & UV420 tối đa' },
          { label: 'Dòng sản phẩm', value: found.name },
          { label: 'Hiệu quả', value: 'Dịu mắt khi ra nắng, ngăn ngừa thoái hóa điểm vàng' },
        ],
      };
    },
  },

  // 4. Tài Xế & Người Hay Lái Xe Ban Đêm (Chống Chói Đèn Pha LED)
  'rocky-driveshield-night-vision': {
    slug: 'rocky-driveshield-night-vision',
    productName: 'Rocky DriveShield Ruby AR (Lái Xe Đêm & Đi Mưa)',
    track: 'need',
    categoryLabel: 'Tầm Nhìn Lái Xe An Toàn',
    selectorGroups: [
      {
        id: 'index',
        label: '1. Chọn Chiết Xuất Tròng Kính',
        type: 'index',
        options: [
          { id: '156', label: '1.56 ASP DriveShield Ruby', sub: 'Lọc quang sai chói đèn LED, trượt nước mưa' },
          { id: '161', label: '1.61 MR8 ASP DriveShield Ruby', sub: 'Phôi MR-8 siêu bền chịu lực, tối ưu tầm nhìn ban đêm' },
        ],
      },
    ],
    variants: [
      { id: '156', name: '1.56 ASP DriveShield Ruby', price: 1000000, formattedPrice: '1.000.000 ₫' },
      { id: '161', name: '1.61 MR8 ASP DriveShield Ruby', price: 1696000, formattedPrice: '1.696.000 ₫' },
    ],
    calculatePrice(sel) {
      const idx = sel['index'] || '156';
      const found = idx === '161' ? this.variants[1] : this.variants[0];
      return {
        price: found.price,
        formattedPrice: found.formattedPrice,
        matchedVariant: found,
        summaryLines: [
          { label: 'Chuyên dụng lái xe', value: 'Chống quầng chói pha đèn xe & trượt nước mưa' },
          { label: 'Cấu hình tròng', value: found.name },
          { label: 'Lớp phủ quang học', value: 'Ruby AR Multi-Matrix triệt quang sai lóa' },
        ],
      };
    },
  },

  // 5. Người Lớn Tuổi & Lão Thị (Đa Tròng Nhìn Xa - Trung - Gần)
  'rocky-freeform-progressive-hd': {
    slug: 'rocky-freeform-progressive-hd',
    productName: 'CanRx Freeform HD Progressive (Đa Tròng Liền Mạch)',
    track: 'need',
    categoryLabel: 'Thị Lực Toàn Diện Mọi Cự Ly',
    selectorGroups: [
      {
        id: 'model',
        label: '1. Chọn Dòng Đa Tròng Kỹ Thuật Số',
        type: 'subproduct',
        options: [
          { id: '156-digital', label: '1.56 Digital 4+9mm Chống ASX (Elite)', sub: 'Nhìn rõ 3 cự ly không đường lằn' },
          { id: '156-photo', label: '1.56 Digital 4+9mm Đổi Màu Lọc ASX', sub: 'Vừa đa tròng vừa tự đổi màu đi nắng' },
          { id: '161-ultraview', label: '1.61 UltraView Freeform 4K Sapphire', sub: 'Mài vi điểm mặt sau Freeform 4K cao cấp nhất' },
        ],
      },
      {
        id: 'add',
        label: '2. Độ Đọc Sách / Nhìn Gần (ADD)',
        type: 'add',
        options: [
          { id: 'add-100-175', label: 'ADD +1.00 đến +1.75' },
          { id: 'add-200-250', label: 'ADD +2.00 đến +2.50' },
          { id: 'add-275-300', label: 'ADD +2.75 đến +3.00' },
        ],
      },
    ],
    variants: [
      { id: '156-digital', name: '1.56 Digital 4+9mm Chống ASX', price: 950000, formattedPrice: '950.000 ₫' },
      { id: '156-photo', name: '1.56 Digital 4+9mm Đổi Màu Lọc ASX', price: 1360000, formattedPrice: '1.360.000 ₫' },
      { id: '161-ultraview', name: '1.61 UltraView Freeform 4K Sapphire', price: 1468000, formattedPrice: '1.468.000 ₫' },
    ],
    calculatePrice(sel) {
      const model = sel['model'] || '156-digital';
      const found = this.variants.find((v) => v.id === model) || this.variants[0];
      return {
        price: found.price,
        formattedPrice: found.formattedPrice,
        matchedVariant: found,
        summaryLines: [
          { label: 'Giải pháp lão thị', value: 'Đa tròng kỹ thuật số Freeform liền mạch' },
          { label: 'Dòng sản phẩm', value: found.name },
          { label: 'Tầm nhìn', value: 'Xa (lái xe) - Trung (máy tính) - Gần (đọc sách) trong 1 kính' },
        ],
      };
    },
  },

  // 6. Trẻ Em & Học Sinh Cận Thị (Kiểm Soát Tăng Độ Cận)
  'rocky-myocontrol-dims-kids': {
    slug: 'rocky-myocontrol-dims-kids',
    productName: 'Defocus MyoControl Kids HD (Kiểm Soát Cận Trẻ Em)',
    track: 'need',
    categoryLabel: 'Bảo Vệ Mắt Học Đường',
    selectorGroups: [
      {
        id: 'tech',
        label: '1. Chọn Công Nghệ Kiểm Soát Cận Thị',
        type: 'subproduct',
        options: [
          { id: 'digital-360', label: 'Digital 360° Defocus (Elite)', sub: 'Giảm tốc độ tăng độ cận học đường' },
          { id: 'microlens-dims', label: 'Intelligent Micro-Lens Defocus (1164 Vi Thấu Kính)', sub: 'Polycarbonate chống vỡ an toàn cho bé' },
        ],
      },
    ],
    variants: [
      { id: 'digital-360', name: 'Digital 360° Defocus', price: 960000, formattedPrice: '960.000 ₫' },
      { id: 'microlens-dims', name: 'Intelligent Micro-Lens Defocus Technology', price: 1680000, formattedPrice: '1.680.000 ₫' },
    ],
    calculatePrice(sel) {
      const tech = sel['tech'] || 'digital-360';
      const found = tech === 'microlens-dims' ? this.variants[1] : this.variants[0];
      return {
        price: found.price,
        formattedPrice: found.formattedPrice,
        matchedVariant: found,
        summaryLines: [
          { label: 'Giải pháp trẻ em', value: 'Kiểm soát tiến triển cận thị học đường' },
          { label: 'Công nghệ', value: found.name },
          { label: 'Đặc tính an toàn', value: 'Chống va đập, bảo vệ trục nhãn cầu tối đa' },
        ],
      };
    },
  },

  // 7. Tín Đồ Thời Trang (Kính Cận Đổi Màu Đa Sắc)
  'rocky-chameleon-photochromic': {
    slug: 'rocky-chameleon-photochromic',
    productName: 'Rocky Trendy Style Photochromic (Đổi Màu Đa Sắc)',
    track: 'need',
    categoryLabel: 'Phong Cách Thời Thượng & Đổi Màu Nắng',
    selectorGroups: [
      {
        id: 'color',
        label: '1. Chọn Sắc Màu Thời Trang',
        type: 'color',
        options: [
          { id: 'khoi', label: 'Khói Titan (Grey)' },
          { id: 'tra', label: 'Trà Hổ Phách (Brown)' },
          { id: 'xanh_duong', label: 'Xanh Sapphire (Blue)' },
          { id: 'xanh_la', label: 'Xanh Ngọc (Green)' },
          { id: 'hong', label: 'Hồng Pastel (Pink)' },
          { id: 'tim', label: 'Tím Khói (Purple)' },
        ],
      },
      {
        id: 'index',
        label: '2. Chiết Xuất & Phân Cấp',
        type: 'index',
        options: [
          { id: '156-trendy', label: '1.56 Trendy Photo (688.000 ₫)', sub: 'Đổi màu nhạy sáng siêu nhanh' },
          { id: '161-amber', label: '1.61 MR8 Smart Plus Nâu Amber (1.890.000 ₫)', sub: 'Sắc Nâu Amber thời thượng, gọng khoan chống vỡ' },
        ],
      },
    ],
    variants: [
      { id: '156-trendy', name: '1.56 SHMC Đổi Màu Trendy', price: 688000, formattedPrice: '688.000 ₫' },
      { id: '161-amber', name: '1.61 MR8 Đổi Màu Smart Plus Nâu Amber', price: 1890000, formattedPrice: '1.890.000 ₫' },
    ],
    calculatePrice(sel) {
      const idx = sel['index'] || '156-trendy';
      const found = idx === '161-amber' ? this.variants[1] : this.variants[0];
      return {
        price: found.price,
        formattedPrice: found.formattedPrice,
        matchedVariant: found,
        summaryLines: [
          { label: 'Thời trang cá tính', value: 'Kính cận đổi màu râm sành điệu ngoài trời' },
          { label: 'Dòng sản phẩm', value: found.name },
          { label: 'Bảo vệ thị lực', value: 'Chống chói nắng và ngăn 100% tia cực tím UV400' },
        ],
      };
    },
  },

  // 8. Người Đeo Gọng Khoan Không Viền (Siêu Dai MR-8 Chống Vỡ)
  'rocky-160-mr8-aspheric': {
    slug: 'rocky-160-mr8-aspheric',
    productName: 'Rocky MR-8 Tough Rimless Drill (Chuyên Gọng Khoan)',
    track: 'need',
    categoryLabel: 'Chuyên Dụng Gọng Khoan Bắt Ốc',
    selectorGroups: [
      {
        id: 'type',
        label: '1. Chọn Dòng Tròng Chống Vỡ',
        type: 'subproduct',
        options: [
          { id: '158-chong-be', label: 'Tròng Chống Bể 1.58 ASX (790.000 ₫)', sub: 'Dẻo dai cơ học cao, bảo vệ ASX' },
          { id: '160-rocky-safe', label: 'Rocky-Safe 1.60 ASX (1.299.000 ₫)', sub: 'Polymer chịu lực X10, Crystal Sapphire' },
          { id: '161-bluecut', label: '1.61 MR8 BlueCut Luxury (1.238.000 ₫)', sub: 'Monomer Mitsui MR-8 Nhật Bản, lọc ASX' },
          { id: '161-driveshield', label: '1.61 MR8 DriveShield Ruby (1.696.000 ₫)', sub: 'Lái xe ban đêm chống chói, phôi MR-8 bắt ốc' },
        ],
      },
    ],
    variants: [
      { id: '158-chong-be', name: 'Tròng Chống Bể 1.58 ASX', price: 790000, formattedPrice: '790.000 ₫' },
      { id: '160-rocky-safe', name: 'Rocky-Safe 1.60 ASX', price: 1299000, formattedPrice: '1.299.000 ₫' },
      { id: '161-bluecut', name: '1.61 MR8 ASP BlueCut Luxury', price: 1238000, formattedPrice: '1.238.000 ₫' },
      { id: '161-driveshield', name: '1.61 MR8 ASP DriveShield Ruby', price: 1696000, formattedPrice: '1.696.000 ₫' },
    ],
    calculatePrice(sel) {
      const type = sel['type'] || '158-chong-be';
      const found = this.variants.find((v) => v.id === type) || this.variants[0];
      return {
        price: found.price,
        formattedPrice: found.formattedPrice,
        matchedVariant: found,
        summaryLines: [
          { label: 'Gọng khoan không viền', value: 'Chống nứt mẻ mép khoan, chịu lực uốn tối ưu' },
          { label: 'Cấu hình vật liệu', value: found.name },
          { label: 'Chuyên dụng', value: 'Khoan bắt ốc kính doanh nhân thanh thoát và bền bỉ' },
        ],
      };
    },
  },

  // 9. Cận Viễn Nặng & Tròng Mỏng Nhẹ (1.67 - 1.74)
  'rocky-174-ultra-high-index': {
    slug: 'rocky-174-ultra-high-index',
    productName: 'Rocky Ultra Thin 1.74 Aspheric (Độ Cận Nặng Mỏng Nhẹ)',
    track: 'need',
    categoryLabel: 'Triệt Tiêu Đáy Chai Cho Độ Cận Cao',
    selectorGroups: [
      {
        id: 'index',
        label: '1. Chọn Chiết Xuất Siêu Mỏng',
        type: 'index',
        options: [
          { id: '167-bluecut', label: '1.67 ASP BlueCut Elite (1.228.000 ₫)', sub: 'Mỏng hơn 35%, triệt tiêu độ dày mép tròng' },
          { id: '167-smart', label: '1.67 ASP Smart BlueControl (1.760.000 ₫)', sub: 'Lọc ASX thông minh, Crystal Sapphire' },
          { id: '174-bluecut', label: '1.74 ASP BlueCut Elite (3.680.000 ₫)', sub: 'Mỏng hơn 45%, phẳng đáy chai cho cận >7 độ' },
        ],
      },
    ],
    variants: [
      { id: '167-bluecut', name: '1.67 ASP BlueCut Elite', price: 1228000, formattedPrice: '1.228.000 ₫' },
      { id: '167-smart', name: '1.67 ASP Smart BlueControl', price: 1760000, formattedPrice: '1.760.000 ₫' },
      { id: '174-bluecut', name: '1.74 ASP BlueCut Elite', price: 3680000, formattedPrice: '3.680.000 ₫' },
    ],
    calculatePrice(sel) {
      const idx = sel['index'] || '167-bluecut';
      const found = this.variants.find((v) => v.id === idx) || this.variants[0];
      return {
        price: found.price,
        formattedPrice: found.formattedPrice,
        matchedVariant: found,
        summaryLines: [
          { label: 'Giải pháp cận nặng', value: 'Chiết suất cao 1.67 & 1.74 siêu phẳng mỏng nhẹ' },
          { label: 'Dòng sản phẩm', value: found.name },
          { label: 'Thẩm mỹ', value: 'Mắt không bị thu nhỏ, kính nhẹ êm trên sống mũi' },
        ],
      };
    },
  },
};

/**
 * Lấy cấu hình giá & bộ chọn cho sản phẩm theo slug
 */
export function getProductPricingConfig(slug: string): ProductPricingSchema | null {
  return PRICING_SCHEMAS[slug] || null;
}

// ============================================================================
// 3. MÀU SẮC ĐỒNG BỘ 100% THEO FILE BẢNG BÁO GIÁ PDF CHO 11 TÍNH NĂNG
// ============================================================================

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
    pdfSectionTitle: 'LÃNH THỊ & NGƯỜI LỚN TUỔI (ĐA TRÒNG XA TRUNG GẦN)',
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
