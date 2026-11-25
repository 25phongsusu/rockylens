import { ProductPricingSchema } from './types';

/**
 * Dữ liệu tính giá theo nhóm nhu cầu sử dụng (9 giải pháp trang chủ).
 */
export const NEED_PRICING_SCHEMAS: Record<string, ProductPricingSchema> = {
  // 1. Designer & Đồ Họa Máy Tính (Chuẩn Màu 100%)
  'rocky-156-bluecut-shmc': {
    slug: 'rocky-156-bluecut-shmc',
    productName: 'Rocky BlueCut UV420 Pure Clear (Thiết Kế Đồ Họa)',
    track: 'need',
    categoryLabel: 'Dành Cho Designer & Thiết Bị Số',
    selectorGroups: [
      {
        id: 'index',
        label: '1. Chọn Chiết Suất & Độ Mỏng',
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
        label: '1. Chọn Chiết Suất Phù Hợp',
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
        label: '1. Chọn Chiết Suất Tròng Kính',
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
        label: '2. Chiết Suất & Phân Cấp',
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
        label: '1. Chọn Chiết Suất Siêu Mỏng',
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
