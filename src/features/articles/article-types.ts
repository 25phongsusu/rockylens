export type ArticleCategory = 'kien-thuc' | 'cong-nghe' | 'huong-dan';

export interface ArticleMeta {
  id: string;
  slug: string;
  title: string;
  description: string;
  category: ArticleCategory;
  categoryName: string;
  coverImage: string;
  publishedAt: string;
  updatedAt?: string;
  author: string;
  readTime: string;
  relatedProductIds: string[];
  relatedArticleIds?: string[];
  tags: string[];
}

export interface Article extends ArticleMeta {
  content: string; // Markdown body
}

export const ARTICLE_CATEGORIES: { id: ArticleCategory; name: string; description: string }[] = [
  {
    id: 'kien-thuc',
    name: 'Kiến thức quang học',
    description: 'Nắm vững nguyên lý khúc xạ, cấu tạo tròng kính, các chỉ số Abbe và chiết suất.',
  },
  {
    id: 'cong-nghe',
    name: 'Công nghệ tròng kính',
    description: 'Khám phá công nghệ lớp phủ nano, Freeform HD, tròng đổi màu phân tử và phôi monomer.',
  },
  {
    id: 'huong-dan',
    name: 'Hướng dẫn & Tư vấn',
    description: 'Cẩm nang lựa chọn tròng kính phù hợp theo độ khúc xạ, thói quen sinh hoạt và nghề nghiệp.',
  },
];
