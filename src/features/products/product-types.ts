export type ProductStatus = 'published' | 'draft';

export type LensCategory =
  | 'don-trong'
  | 'da-trong'
  | 'ho-tro-dieu-tiet'
  | 'doi-mau'
  | 'lai-xe'
  | 'kiem-soat-can-thi'
  | 'kinh-khoan';

export interface ProductSpecifications {
  refractiveIndex?: string; // e.g. "1.56", "1.60", "1.67", "1.74"
  designType?: string; // e.g. "Aspheric (ASP)", "Freeform Atoric", "Progressive HD"
  sphRange?: string; // e.g. "-10.00 đến +6.00"
  cylRange?: string; // e.g. "0.00 đến -4.00"
  addRange?: string; // e.g. "+0.75 đến +3.50"
  diameter?: string; // e.g. "65mm / 70mm / 75mm"
  coating?: string; // e.g. "Nano SHMC (Super Hydrophobic Multi-Coated)"
  material?: string; // e.g. "Monomer MR-8 / MR-7 / NK-55"
  abbeValue?: string; // e.g. "32", "40", "42", "58"
  uvProtection?: string; // e.g. "UV400 / UV420 BlueCut"
  sku?: string; // Mã quản lý sản phẩm
}

export interface ProductBenefit {
  title: string;
  description: string;
  icon?: string;
}

export interface ProductDocument {
  title: string;
  url: string;
  size?: string;
  type?: string;
}

export interface ProductSEO {
  title: string;
  description: string;
  keywords?: string[];
}

export interface Product {
  id: string;
  slug: string;
  status: ProductStatus;
  name: string;
  targetPersona?: string; // Đối tượng & nhu cầu cụ thể (ví dụ: DÀNH CHO DESIGNER & ĐỒ HỌA MÁY TÍNH)
  consumerHeadline?: string; // Tiêu đề định hướng nhu cầu người dùng cuối (ví dụ: Ngồi máy tính đồ họa...)
  materialSubtitle?: string; // Phụ đề vật liệu kỹ thuật chi tiết
  tagline?: string;
  brandId: string;
  categoryIds: LensCategory[];
  technologyIds: string[];
  refractiveIndex?: string;
  images: string[];
  featuredImage: string;
  badge?: string;
  shortDescription: string;
  targetAudience: string[];
  benefits: ProductBenefit[];
  specifications: ProductSpecifications;
  documents?: ProductDocument[];
  relatedArticleIds: string[];
  relatedProductIds?: string[];
  price?: number;
  formattedPrice?: string;
  seo: ProductSEO;
}

export interface CategoryInfo {
  id: LensCategory;
  name: string;
  description: string;
  image?: string;
}

export const CATEGORIES: CategoryInfo[] = [
  {
    id: 'don-trong',
    name: 'Đơn tròng kỹ thuật số',
    description: 'Tròng kính phi cầu Aspheric độ nét cao, khắc phục quang sai vùng rìa cho độ khúc xạ cận, viễn, loạn.',
    image: '/images/products/category-solution-1.png',
  },
  {
    id: 'da-trong',
    name: 'Đa tròng Freeform HD',
    description: 'Ứng dụng công nghệ tính toán bề mặt cá nhân hóa, tầm nhìn mượt mà 3 vùng xa - trung - gần cho người lão thị.',
    image: '/images/products/category-solution-2.png',
  },
  {
    id: 'ho-tro-dieu-tiet',
    name: 'Hỗ trợ điều tiết mắt',
    description: 'Bổ sung trợ lực điều tiết vùng nhìn gần (+0.50 đến +0.88), giảm mệt mỏi thị giác kỹ thuật số khi nhìn màn hình.',
    image: '/images/products/category-solution-5.png',
  },
  {
    id: 'doi-mau',
    name: 'Đổi màu nhanh Photochromic',
    description: 'Tự động kích hoạt đổi màu râm khi ra ngoài trời nắng, bảo vệ võng mạc và trong suốt hoàn hảo khi vào nhà.',
    image: '/images/products/category-solution-8.png',
  },
  {
    id: 'lai-xe',
    name: 'Chuyên dụng lái xe DriveShield',
    description: 'Lọc quang phổ chói đèn LED/Xenon ban đêm, tăng độ nét đường nét biển báo khi trời mưa và thiếu sáng.',
    image: '/images/products/category-solution-3.png',
  },
  {
    id: 'kiem-soat-can-thi',
    name: 'Kiểm soát cận thị MyoControl',
    description: 'Thiết kế vi thấu kính D.I.M.S giảm phân kỳ chu biên, làm chậm quá trình tăng độ cận ở trẻ em và thanh thiếu niên.',
    image: '/images/products/category-solution-7.png',
  },
  {
    id: 'kinh-khoan',
    name: 'Kính khoan chống vỡ MR-8',
    description: 'Phôi vật liệu Mitsui Chemicals MR-8 đàn hồi cao, chịu lực uốn nắn va đập tuyệt đối cho gọng khoan ốc bắt vít.',
    image: '/images/products/category-solution-4.png',
  },
];
