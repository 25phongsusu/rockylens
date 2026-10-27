import React from 'react';
import Link from 'next/link';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { getAllArticles } from '@/features/articles/article-service';
import { formatDate } from '@/lib/utils';

export default function BlogSection() {
  const articles = getAllArticles().slice(0, 3);

  return (
    <section id="blog-insights" className="relative py-24 px-6 bg-gradient-to-b from-[#F5F5F7] via-[#F8F9FA] to-[#071521] overflow-hidden">
      {/* Ambient Blur Caustic Overlays (Smooth Section Blending) */}
      <div className="absolute inset-x-0 -top-12 h-24 bg-gradient-to-b from-[#0E253A]/10 to-transparent blur-xl pointer-events-none" />
      <div className="absolute -top-24 right-1/4 w-96 h-48 bg-teal-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-12 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-3">
          <span className="px-3.5 py-1.5 rounded-full bg-teal-50 text-[#086370] text-sm font-bold inline-block border border-teal-100">
            Góc Nhìn &amp; Insight Thị Giác
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0E253A] tracking-tight">
            Kiến thức thị giác &amp; câu chuyện từ người đeo kính.
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed">
            Lắng nghe nhu cầu thực tế và khám phá những chia sẻ chuyên sâu giúp bạn chọn đúng cặp tròng kính cho công việc, cuộc sống và gia đình.
          </p>
        </div>

        {/* 3 Featured Insight Cards (Đồng nhất 100% với Blog) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <article
              key={article.id}
              className="group bg-white rounded-3xl overflow-hidden shadow-xs hover:shadow-xl hover:shadow-slate-900/5 transition-all duration-300 flex flex-col justify-between border border-slate-100"
            >
              <div>
                {/* Card Visual Top */}
                <Link
                  href={`/blog/${article.slug}/`}
                  className="block h-56 sm:h-64 bg-slate-100 overflow-hidden relative"
                >
                  <img
                    src={article.coverImage}
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute top-4 left-4 px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur-md text-[#0B7B8A] text-xs font-bold border border-slate-200/80 shadow-xs">
                    {article.categoryName}
                  </span>
                </Link>

                {/* Card Body */}
                <div className="p-6 sm:p-7 space-y-3">
                  <div className="flex items-center gap-3 text-xs font-semibold text-slate-500">
                    <span className="inline-flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-teal-600" />
                      <span>{formatDate(article.publishedAt)}</span>
                    </span>
                    <span>&bull;</span>
                    <span className="inline-flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-teal-600" />
                      <span>{article.readTime}</span>
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-[#0E253A] group-hover:text-[#0B7B8A] transition-colors leading-snug line-clamp-2">
                    <Link href={`/blog/${article.slug}/`}>
                      {article.title}
                    </Link>
                  </h3>

                  {article.slug !== 'kiem-soat-can-thi-tre-em-myocontrol' && (
                    <p className="text-slate-600 text-sm leading-relaxed line-clamp-3">
                      {article.description}
                    </p>
                  )}
                </div>
              </div>

              {/* Card Bottom CTA (Tô đậm, giới hạn chiều rộng không hết trang) */}
              <div className="p-6 sm:p-7 pt-0">
                <Link
                  href={`/blog/${article.slug}/`}
                  className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-[#0B7B8A] hover:bg-[#086370] text-white font-bold text-sm transition-all shadow-xs"
                >
                  <span>Đọc bài viết chi tiết</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Big Action Button to Full Blog Page */}
        <div className="flex flex-col sm:flex-row items-center justify-center pt-4">
          <Link
            href="/blog/"
            className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#0B7B8A] hover:bg-[#086370] text-white font-bold text-base sm:text-lg transition-colors duration-200 shadow-sm"
          >
            <span>Khám Phá Tất Cả Bài Viết &amp; Insight Thị Giác</span>
            <ArrowRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </div>

      </div>
    </section>
  );
}
