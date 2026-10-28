import React from 'react';
import Link from 'next/link';

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

        {/* 3 Editorial Blog Cards Grid - Reduced 30% dimensions */}
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 pt-2">
            {blogArticles.map((article) => (
              <article
                key={article.slug}
                className="card-surface rounded-2xl overflow-hidden shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between border border-[var(--color-border)]/50 group bg-white"
              >
                <div>
                  <Link
                    href={`/blog/${article.slug}/`}
                    className="aspect-[16/10] sm:aspect-[16/10] h-36 sm:h-40 w-full bg-slate-100 overflow-hidden block relative"
                  >
                    <img
                      src={article.image}
                      alt={article.title}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </Link>

                  <div className="p-4 sm:p-5 space-y-1.5">
                    <div className="text-[11px] font-bold text-primary tracking-wider uppercase">
                      {article.category}
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-heading leading-snug group-hover:text-primary transition-colors">
                      <Link href={`/blog/${article.slug}/`}>
                        {article.title}
                      </Link>
                    </h3>
                    <p className="text-brand-muted text-xs leading-relaxed line-clamp-2">
                      {article.desc}
                    </p>
                  </div>
                </div>

                <div className="p-4 sm:p-5 pt-0">
                  <Link
                    href={`/blog/${article.slug}/`}
                    className="text-xs sm:text-sm font-bold text-primary hover:text-[var(--color-primary-hover)] inline-flex items-center gap-1 group-hover:gap-2 transition-all"
                  >
                    <span>Đọc bài viết</span>
                    <span>&#8599;</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
