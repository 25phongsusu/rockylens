import type {
  FaceShape,
  FaceShapeProfile,
  FrameColorOption,
  FrameStyleOption,
  LensTintOption,
  PrescriptionLevel,
  PrescriptionOption,
  ProductSummary,
  StyleOption,
  UsageNeed,
  UsageNeedOption,
} from './types';

export const FACE_SHAPE_PROFILES: Record<FaceShape, FaceShapeProfile> = {
  round: {
    id: 'round',
    nameVi: 'Mặt Tròn',
    nameEn: 'Round',
    shortDesc: 'Chiều dài và chiều rộng gần tương đương, má đầy đặn, đường hàm mềm mại.',
    recommendedFrames: ['square', 'rectangle', 'cat-eye', 'browline'],
    recommendedFrameLabels: ['Vuông', 'Chữ nhật', 'Đa giác', 'Mắt mèo góc cạnh'],
    avoidFrames: ['Gọng tròn nhỏ', 'Gọng quá mảnh bo tròn toàn phần'],
    fitReason:
      'Đường nét góc cạnh của gọng vuông, chữ nhật hoặc mắt mèo giúp tạo điểm nhấn sắc sảo, kéo dài tỷ lệ khuôn mặt cân đối hơn.',
    defaultFrameId: 'square',
  },
  square: {
    id: 'square',
    nameVi: 'Mặt Vuông',
    nameEn: 'Square',
    shortDesc: 'Trán rộng, xương hàm góc cạnh và chiều rộng trán – má – hàm cân bằng.',
    recommendedFrames: ['round', 'oval', 'browline', 'aviator'],
    recommendedFrameLabels: ['Tròn', 'Oval', 'Browline bo cong', 'Aviator'],
    avoidFrames: ['Gọng vuông sắc cạnh', 'Gọng bản quá dày góc nhọn'],
    fitReason:
      'Những đường cong mềm mại của gọng tròn, oval hay aviator giúp làm dịu nét góc cạnh ở quai hàm và tạo sự thanh thoát.',
    defaultFrameId: 'round',
  },
  oval: {
    id: 'oval',
    nameVi: 'Mặt Trái Xoan',
    nameEn: 'Oval',
    shortDesc: 'Tỷ lệ hài hòa, gò má hơi nhô nhẹ và đường hàm thuôn gọn tự nhiên.',
    recommendedFrames: ['square', 'rectangle', 'round', 'oval', 'cat-eye', 'aviator'],
    recommendedFrameLabels: ['Vuông', 'Chữ nhật', 'Tròn', 'Oval', 'Mắt mèo'],
    avoidFrames: ['Gọng quá to che mất tỷ lệ cân đối của khuôn mặt'],
    fitReason:
      'Khuôn mặt trái xoan dễ hợp với hầu hết các dáng gọng. Bạn chỉ cần chọn độ rộng gọng ngang bằng phần rộng nhất của gò má.',
    defaultFrameId: 'rectangle',
  },
  heart: {
    id: 'heart',
    nameVi: 'Mặt Trái Tim',
    nameEn: 'Heart',
    shortDesc: 'Trán rộng, gò má cao và thuôn nhỏ dần về phía cằm nhọn.',
    recommendedFrames: ['oval', 'round', 'aviator', 'rimless'],
    recommendedFrameLabels: ['Oval', 'Tròn', 'Aviator', 'Gọng khoan không viền'],
    avoidFrames: ['Gọng quá nặng hoặc trang trí rườm rà ở phần viền trên'],
    fitReason:
      'Gọng oval, tròn hoặc gọng khoan thanh mảnh giúp cân bằng độ rộng phần trán và làm phần cằm trông hài hòa hơn.',
    defaultFrameId: 'rimless',
  },
  diamond: {
    id: 'diamond',
    nameVi: 'Mặt Kim Cương',
    nameEn: 'Diamond',
    shortDesc: 'Gò má là điểm rộng nhất, vùng trán và đường hàm hẹp hơn gò má.',
    recommendedFrames: ['cat-eye', 'oval', 'browline', 'rimless'],
    recommendedFrameLabels: ['Mắt mèo', 'Oval', 'Browline', 'Gọng không viền'],
    avoidFrames: ['Gọng có chiều ngang hẹp hơn gò má'],
    fitReason:
      'Gọng mắt mèo hoặc browline nhấn nhẹ phần viền trên giúp mở rộng thị giác vùng trán và tôn lên đường nét gò má nổi bật.',
    defaultFrameId: 'cat-eye',
  },
  oblong: {
    id: 'oblong',
    nameVi: 'Mặt Dài',
    nameEn: 'Oblong',
    shortDesc: 'Chiều dài khuôn mặt lớn hơn rõ rệt so với chiều rộng gò má.',
    recommendedFrames: ['square', 'aviator', 'round', 'browline'],
    recommendedFrameLabels: ['Oversized bản to', 'Vuông lớn', 'Aviator', 'Tròn cao'],
    avoidFrames: ['Gọng quá nhỏ', 'Gọng bản dẹt chiều cao tròng thấp'],
    fitReason:
      'Gọng có chiều cao mắt kính lớn (vuông lớn, aviator hoặc browline bản rõ) giúp rút ngắn cảm giác chiều dài và tạo độ cân xứng.',
    defaultFrameId: 'aviator',
  },
};

export const FACE_SHAPE_ORDER: FaceShape[] = [
  'oval',
  'round',
  'square',
  'heart',
  'diamond',
  'oblong',
];

export const FRAME_STYLES: FrameStyleOption[] = [
  {
    id: 'rimless',
    name: 'Khoan Nam 01',
    description: 'Gọng khoan không viền bắt ốc Titanium siêu nhẹ, thanh lịch doanh nhân.',
    imageSrc: '/images/frames/frame_khoan_nam.png',
    isRimless: true,
  },
  {
    id: 'square',
    name: 'Rocky Vuông Đen',
    description: 'Gọng vuông đen thời trang nam tính, sắc nét góc cạnh, phong thái tự tin.',
    imageSrc: '/images/frames/frame_square_black.png',
  },
  {
    id: 'browline',
    name: 'Browline Gold 01',
    description: 'Gọng nửa viền trên đen bóng, viền dưới mạ vàng kim sang trọng, quyền lực.',
    imageSrc: '/images/frames/frame_browline_gold.png',
  },
  {
    id: 'round',
    name: 'Vintage Round',
    description: 'Gọng tròn cổ điển tri thức, mềm mại đường nét khuôn mặt, phong cách học giả.',
    imageSrc: '/images/frames/frame_classic_round.png',
  },
  {
    id: 'rectangle',
    name: 'Wayfarer Dark',
    description: 'Dáng Wayfarer râm mát kinh điển, che chắn tối đa ánh sáng chói ngoài trời.',
    imageSrc: '/images/frames/frame_wayfarer_dark.png',
  },
  {
    id: 'oval',
    name: 'Oval Titanium',
    description: 'Dáng oval bo cong nhẹ nhàng, thanh thoát, dễ đeo cho mọi dáng mặt.',
  },
  {
    id: 'cat-eye',
    name: 'Cat-Eye Fashion',
    description: 'Dáng mắt mèo quyến rũ, nâng nhẹ đuôi mắt, tôn dáng gò má và cá tính.',
  },
  {
    id: 'aviator',
    name: 'Aviator Pilot',
    description: 'Gọng phi công cầu đôi kinh điển, thoáng mắt, bản tròng rộng rãi.',
  },
];

export const LENS_TINTS: LensTintOption[] = [
  {
    id: 'clear-shmc',
    name: 'Trong Suốt SHMC',
    color: '#E0F2FE',
    tintRgba: 'rgba(255, 255, 255, 0.08)',
    category: 'standard',
    description: 'Trong suốt 99.8%, chống bám nước và trầy xước.',
    lensType: 'Rocky BlueCut SHMC 1.56 / 1.60',
  },
  {
    id: 'bluecut-pure',
    name: 'BlueCut Xanh Ngọc',
    color: '#38BDF8',
    tintRgba: 'rgba(56, 189, 248, 0.22)',
    category: 'standard',
    description: 'Lọc ánh sáng xanh màn hình máy tính, điện thoại, không đổi màu.',
    lensType: 'Rocky Smart BlueControl UV420',
  },
  {
    id: 'polarized-brown',
    name: 'Polarized Nâu',
    color: '#78350F',
    tintRgba: 'rgba(120, 53, 15, 0.72)',
    category: 'polarized',
    description: 'Chống chói phân cực cao cấp, êm dịu mắt dưới trời nắng gắt.',
    lensType: 'Rocky Polarized Driving & Sports',
  },
  {
    id: 'photo-grey',
    name: 'Photo Đổi Màu Khói',
    color: '#475569',
    tintRgba: 'rgba(51, 65, 85, 0.70)',
    category: 'photochromic',
    description: 'Vào nhà trong suốt, ra nắng chuyển màu xám khói sành điệu trong 5 giây.',
    lensType: 'Rocky Trendy Photochromic Grey',
  },
  {
    id: 'photo-brown',
    name: 'Photo Đổi Màu Trà',
    color: '#92400E',
    tintRgba: 'rgba(146, 64, 14, 0.68)',
    category: 'photochromic',
    description: 'Đổi màu hổ phách ấm áp khi ra nắng, làm dịu chói chang nhiệt đới.',
    lensType: 'Rocky Trendy Photochromic Brown',
  },
  {
    id: 'driveshield-amber',
    name: 'Lái Xe Ban Đêm',
    color: '#EAB308',
    tintRgba: 'rgba(234, 179, 8, 0.42)',
    category: 'driveshield',
    description: 'Triệt tiêu quầng lóa pha LED, tăng độ tương phản nhìn rõ biển báo đêm.',
    lensType: 'Rocky DriveShield Ruby AR Night Vision',
  },
  {
    id: 'fashion-sapphire',
    name: 'Xanh Sapphire',
    color: '#0284C7',
    tintRgba: 'rgba(2, 132, 199, 0.65)',
    category: 'fashion',
    description: 'Màu xanh đại dương mát mẻ, nổi bật phong cách thời trang biển.',
    lensType: 'Rocky Chameleon Edition 7 Colors',
  },
  {
    id: 'fashion-emerald',
    name: 'Xanh Ngọc Lục Bảo',
    color: '#059669',
    tintRgba: 'rgba(5, 150, 105, 0.65)',
    category: 'fashion',
    description: 'Tone xanh lá đậm thanh tao, tạo điểm nhấn phá cách và sang trọng.',
    lensType: 'Rocky Chameleon Emerald Edition',
  },
  {
    id: 'fashion-ruby',
    name: 'Hồng Ruby / Rose',
    color: '#E11D48',
    tintRgba: 'rgba(225, 29, 72, 0.55)',
    category: 'fashion',
    description: 'Ánh hồng ngọc hiện đại, làm sáng gương mặt và trẻ trung.',
    lensType: 'Rocky Chameleon Ruby Edition',
  },
  {
    id: 'fashion-violet',
    name: 'Tím Lavender',
    color: '#7C3AED',
    tintRgba: 'rgba(124, 58, 237, 0.58)',
    category: 'fashion',
    description: 'Sắc tím khói quý phái, độc đáo cho phong cách đường phố.',
    lensType: 'Rocky Chameleon Violet Edition',
  },
  {
    id: 'myocontrol-dims',
    name: 'MyoControl D.I.M.S',
    color: '#A7F3D0',
    tintRgba: 'rgba(167, 243, 208, 0.18)',
    category: 'standard',
    description: 'Vi thấu kính phân kỳ chu biên kiểm soát tăng độ cận ở trẻ em.',
    lensType: 'Rocky MyoControl D.I.M.S Kids',
  },
  {
    id: 'freeform-progressive',
    name: 'Đa Tròng Freeform',
    color: '#FDE68A',
    tintRgba: 'rgba(253, 230, 138, 0.16)',
    category: 'standard',
    description: 'Tầm nhìn êm mượt 3 vùng xa - trung - gần cho người lão thị.',
    lensType: 'CanRx Freeform Progressive HD',
  },
];

export const FRAME_COLORS: FrameColorOption[] = [
  { id: 'charcoal', name: 'Đen Nhám', stroke: '#1e293b', lensTint: 'rgba(255,255,255,0.08)' },
  { id: 'tortoise', name: 'Đồi Mồi', stroke: '#78350f', accent: '#b45309', lensTint: 'rgba(254,243,199,0.08)' },
  { id: 'gold', name: 'Vàng Kim', stroke: '#ca8a04', lensTint: 'rgba(254,249,195,0.08)' },
  { id: 'silver', name: 'Bạc Titan', stroke: '#64748b', lensTint: 'rgba(226,232,240,0.1)' },
];

export const USAGE_NEEDS: UsageNeedOption[] = [
  {
    id: 'computer',
    title: 'Làm việc máy tính / Thiết kế',
    subtitle: 'Chống ánh sáng xanh tím, trong suốt chuẩn màu không ám vàng.',
    badge: 'Văn phòng & Đồ họa',
  },
  {
    id: 'outdoor',
    title: 'Hay đi ngoài trời / Thời trang',
    subtitle: 'Tự động đổi màu râm mát khi ra nắng, chống tia UV400/UV420.',
    badge: 'Đổi màu Photochromic',
  },
  {
    id: 'night-driving',
    title: 'Lái xe ban đêm / Đi mưa',
    subtitle: 'Giảm lóa đèn pha LED/Xenon, tăng độ nét & trượt nước mưa.',
    badge: 'DriveShield',
  },
  {
    id: 'progressive',
    title: 'Đọc sách & nhìn xa gần',
    subtitle: 'Chuyển tiếp mượt mà mọi khoảng cách xa – trung – gần trên 1 cặp kính.',
    badge: 'Đa tròng Freeform',
  },
  {
    id: 'kids-myopia',
    title: 'Trẻ em / Học sinh tăng độ cận',
    subtitle: 'Công nghệ vi thấu kính D.I.M.S giúp kiểm soát tốc độ tăng cận.',
    badge: 'MyoControl',
  },
  {
    id: 'rimless',
    title: 'Dùng gọng khoan / Không viền',
    subtitle: 'Phôi MR-8 siêu dẻo dai, chịu lực bắt ốc chống rạn nứt mép.',
    badge: 'Chống va đập MR-8',
  },
];

export const PRESCRIPTION_LEVELS: PrescriptionOption[] = [
  {
    id: 'low',
    title: 'Độ nhẹ (Dưới 2.00 Diop)',
    range: '< 2.00D',
    recommendedIndex: '1.56 hoặc 1.60',
    desc: 'Phù hợp chiết suất tiêu chuẩn 1.56 hoặc nâng cấp 1.60 để tăng độ trong và chống vỡ.',
  },
  {
    id: 'medium',
    title: 'Độ trung bình (2.00D – 4.00D)',
    range: '2.00D – 4.00D',
    recommendedIndex: '1.60 hoặc 1.67',
    desc: 'Nên chọn chiết suất 1.60 MR-8 hoặc 1.67 phi cầu để tròng mỏng gọn và nhẹ sống mũi.',
  },
  {
    id: 'high',
    title: 'Độ cao (Trên 4.00 Diop)',
    range: '> 4.00D',
    recommendedIndex: '1.67 hoặc 1.74 Siêu Mỏng',
    desc: 'Khuyên dùng chiết suất cao 1.67 hoặc 1.74 giúp giảm đến 45% độ dày mép tròng.',
  },
];

export const STYLE_PREFERENCES: StyleOption[] = [
  { id: 'minimal', title: 'Tối giản', desc: 'Nhẹ nhàng, thanh thoát, dễ phối đồ hằng ngày.' },
  { id: 'classic', title: 'Cổ điển', desc: 'Đĩnh đạc, bền dáng, tinh tế vượt thời gian.' },
  { id: 'modern', title: 'Hiện đại', desc: 'Đường nét sắc sảo, trẻ trung, nổi bật cá tính.' },
  { id: 'sport', title: 'Thể thao / Năng động', desc: 'Bền bỉ, ôm mặt chắc chắn khi di chuyển.' },
];

const NEED_SLUG_MAP: Record<UsageNeed, string[]> = {
  computer: [
    'rocky-156-bluecut-shmc',
    'rocky-smart-bluecontrol',
    'rocky-anh-sang-xanh-bluecut',
    'rocky-antifatigue-relax',
  ],
  outdoor: [
    'rocky-trendy-photochromic-grey',
    'rocky-chameleon-photochromic',
    'rocky-doi-mau-trendy',
    'rocky-doi-mau-smart',
    'rocky-trendy-photochromic-brown',
  ],
  'night-driving': [
    'rocky-driveshield-night-vision',
    'rocky-driveshield-ruby',
    'rocky-polarized-driving-sports',
  ],
  progressive: [
    'rocky-freeform-progressive-hd',
    'rocky-da-trong-freeform',
    'rocky-hai-trong-invisible',
    'rocky-progressive-short-corridor',
  ],
  'kids-myopia': [
    'rocky-myocontrol-dims-kids',
    'rocky-myopia-control',
  ],
  rimless: [
    'rocky-160-mr8-aspheric',
    'rocky-kinh-khoan-chong-va-dap',
  ],
};

const HIGH_INDEX_SLUGS = [
  'rocky-167-ultra-thin-bluecut',
  'rocky-chong-tia-uv-167',
  'rocky-174-ultra-high-index',
];

function getIndexScoreBoost(
  product: ProductSummary,
  prescription: PrescriptionLevel
): number {
  const indexText = `${product.refractiveIndex ?? ''} ${product.name}`.toLowerCase();
  if (prescription === 'high') {
    if (indexText.includes('1.74')) return 6;
    if (indexText.includes('1.67')) return 5;
    if (indexText.includes('1.60')) return 2;
  } else if (prescription === 'medium') {
    if (indexText.includes('1.60')) return 3;
    if (indexText.includes('1.67')) return 3;
  } else {
    if (indexText.includes('1.56')) return 2;
    if (indexText.includes('1.60')) return 2;
  }
  return 0;
}

export function recommendProducts(
  allProducts: ProductSummary[],
  needs: UsageNeed[],
  prescription: PrescriptionLevel,
  limit = 4
): ProductSummary[] {
  const activeNeeds: UsageNeed[] = needs.length > 0 ? needs : ['computer'];
  const scoreMap = new Map<string, number>();

  for (const product of allProducts) {
    let score = 0;

    for (const need of activeNeeds) {
      const slugs = NEED_SLUG_MAP[need] || [];
      const rank = slugs.indexOf(product.slug);
      if (rank !== -1) {
        score += 20 - rank * 3;
      }
    }

    if (prescription === 'high') {
      const hiRank = HIGH_INDEX_SLUGS.indexOf(product.slug);
      if (hiRank !== -1) {
        score += 14 - hiRank * 2;
      }
    }

    if (score > 0 || prescription === 'high') {
      score += getIndexScoreBoost(product, prescription);
    }

    if (score > 0) {
      scoreMap.set(product.slug, score);
    }
  }

  const ranked = allProducts
    .filter((p) => (scoreMap.get(p.slug) || 0) > 0)
    .sort((a, b) => (scoreMap.get(b.slug) || 0) - (scoreMap.get(a.slug) || 0));

  if (ranked.length >= 2) {
    return ranked.slice(0, limit);
  }

  return allProducts.slice(0, limit);
}

export function getRecommendedFrameSizeLabel(size: 'S' | 'M' | 'L'): string {
  switch (size) {
    case 'S':
      return 'Size S (Ngang gọng ~128–134mm, ôm gọn)';
    case 'L':
      return 'Size L (Ngang gọng ~142–148mm, rộng thoáng)';
    default:
      return 'Size M (Ngang gọng ~135–141mm, tiêu chuẩn)';
  }
}
