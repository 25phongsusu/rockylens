import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import ArticleCard from '@/components/content/ArticleCard';
import { ArticleMeta } from '@/features/articles/article-types';

export const blogArticles = [
  {
    slug: 'giai-phap-chong-anh-sang-xanh-uv420',
    category: 'KIẾN THỨC QUANG HỌC',
    title: 'Ánh sáng xanh từ màn hình: những điều cần hiểu',
    desc: 'Phân biệt đặc điểm lớp phủ và thói quen nhìn màn hình với các tuyên bố bảo vệ mắt.',
    image: '/images/articles/blog_sec6_1.jpg',
  },
  {
    slug: 'cong-nghe-kinh-lai-xe-driveshield',
    category: 'NHU CẦU SỬ DỤNG',
    title: 'Lái xe ban đêm: nên cân nhắc những gì?',
    desc: 'Tìm hiểu độ chói, phản xạ và các yếu tố cần thảo luận khi chọn kính.',
    image: '/images/articles/blog_sec6_2.jpg',
  },
  {
    slug: 'kiem-soat-can-thi-tre-em-myocontrol',
    category: 'TRẺ EM & THỊ LỰC',
    title: 'Tròng kính cho trẻ: hiểu về các lựa chọn',
    desc: 'Phân biệt thiết kế tròng và nhu cầu thăm khám, theo dõi thị lực định kỳ.',
    image: '/images/articles/blog_sec6_3.jpg',
  },
];

export default function BlogSection() {
  return (
    <section id="blog-insights" className="relative py-16 sm:py-20 px-6 bg-transparent overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-8 relative z-10">
        
        {/* Section Header matching preview.png Section 06 */}
        <div className="max-w-3xl space-y-2">
          <div className="text-xs font-bold text-primary tracking-wider uppercase">
            GÓC NHÌN &amp; KIẾN THỨC
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-heading tracking-tight leading-[1.14]">
            Hiểu đúng công nghệ. <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--button-start)] via-[var(--button-middle)] to-[var(--button-end)]">
              Lựa chọn sáng suốt hơn.
            </span>
          </h2>
          <p className="text-brand-muted text-sm sm:text-base leading-relaxed">
            Những bài giải thích dễ hiểu cho người đeo kính và cũng là tài liệu tham khảo hữu ích cho cửa hàng mắt kính.
          </p>
        </div>

        {/* 3 Editorial Blog Cards Grid - Unified with Blog System */}
        <div className="w-full">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
            {blogArticles.map((article) => {
              const cardData: ArticleMeta = {
                id: article.slug,
                slug: article.slug,
                title: article.title,
                description: article.desc,
                category: 'kien-thuc',
                categoryName: article.category,
                coverImage: article.image,
                publishedAt: '2025-03-05',
                author: 'Rocky Lens Canada',
                readTime: '5 phút đọc',
                relatedProductIds: [],
                relatedArticleIds: [],
                tags: [],
              };
              return <ArticleCard key={article.slug} article={cardData} />;
            })}
          </div>
        </div>

        {/* Footer Link to Blog */}
        <div className="pt-2 text-center sm:text-left">
          <Link
            href="/blog/"
            className="text-xs sm:text-sm font-bold text-primary hover:text-[var(--color-primary-hover)] inline-flex items-center gap-1.5 transition-all"
          >
            <span>Xem tất cả bài viết tại Chuyên mục Blog</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}
