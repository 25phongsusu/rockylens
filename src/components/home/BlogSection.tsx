import React from 'react';
import Link from 'next/link';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { getAllArticles } from '@/features/articles/article-service';
import { formatDate } from '@/lib/utils';

export default function BlogSection() {
  const articles = getAllArticles().slice(0, 3);

  return (
    <section id="blog-insights" className="relative py-24 px-6 bg-gradient-to-b from-[var(--site-bg-start)] via-white to-[var(--site-bg-start)] overflow-hidden">
      {/* Subtle Ambient Caustic Light Orb */}
      <div className="absolute -top-24 right-1/4 w-96 h-48 bg-[var(--site-bg-end)]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-12 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-3">
          <span className="px-3.5 py-1.5 rounded-full bg-[var(--site-bg-middle)]/50 text-primary text-sm font-bold inline-block border border-[var(--color-border)]">
            Góc Nhìn &amp; Insight Thị Giác
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-heading tracking-tight">
            Kiến thức thị giác &amp; câu chuyện từ người đeo kính.
          </h2>
          <p className="text-brand-muted text-lg leading-relaxed">
            Lắng nghe nhu cầu thực tế và khám phá những chia sẻ chuyên sâu giúp bạn chọn đúng cặp tròng kính cho công việc, cuộc sống và gia đình.
          </p>
        </div>

        {/* 3 Featured Insight Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <article
              key={article.id}
              className="group card-surface rounded-3xl overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
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
                  <span className="absolute top-4 left-4 px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur-md text-primary text-xs font-bold border border-[var(--color-border)] shadow-xs">
                    {article.categoryName}
                  </span>
                </Link>

                {/* Card Body */}
                <div className="p-6 sm:p-7 space-y-3">
                  <div className="flex items-center gap-3 text-xs font-semibold text-slate-500">
                    <span className="inline-flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-primary" />
                      <span>{formatDate(article.publishedAt)}</span>
                    </span>
                    <span>&bull;</span>
                    <span className="inline-flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-primary" />
                      <span>{article.readTime}</span>
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-heading group-hover:text-primary transition-colors leading-snug line-clamp-2">
                    <Link href={`/blog/${article.slug}/`}>
                      {article.title}
                    </Link>
                  </h3>

                  {article.slug !== 'kiem-soat-can-thi-tre-em-myocontrol' && (
                    <p className="text-brand-muted text-sm leading-relaxed line-clamp-3">
                      {article.description}
                    </p>
                  )}
                </div>
              </div>

              {/* Card Bottom CTA */}
              <div className="p-6 sm:p-7 pt-0">
                <Link
                  href={`/blog/${article.slug}/`}
                  className="button-primary inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full text-sm shadow-xs"
                >
                  <span>Đọc bài viết chi tiết</span>
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Big Action Button to Full Blog Page */}
        <div className="flex flex-col sm:flex-row items-center justify-center pt-4">
          <Link
            href="/blog/"
            className="button-primary inline-flex items-center gap-3 px-8 py-4 rounded-full text-base sm:text-lg transition-colors duration-200 shadow-sm"
          >
            <span>Khám phá toàn bộ bài viết tại chuyên mục Blog</span>
            <ArrowRight className="w-5 h-5 ml-1" />
          </Link>
        </div>

      </div>
    </section>
  );
}
