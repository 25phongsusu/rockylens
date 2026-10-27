import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { BookOpen, Sparkles, Clock, Calendar, ArrowRight, ShieldCheck, Eye, Layers } from 'lucide-react';
import { getAllArticles } from '@/features/articles/article-service';
import Breadcrumbs from '@/components/shared/Breadcrumbs';
import ContactCTA from '@/components/shared/ContactCTA';
import { constructMetadata } from '@/lib/seo/metadata';
import { formatDate } from '@/lib/utils';

export const metadata: Metadata = constructMetadata({
  title: 'Blog Quang Học & Insight Thị Giác | Rocky Lens Canada',
  description: 'Tổng hợp các bài viết chuyên sâu về kiến thức tròng kính, giải pháp chống ánh sáng xanh, chống lóa lái xe ban đêm và chăm sóc thị lực học đường từ Rocky Lens.',
  path: '/blog/',
});

export default function BlogIndexPage() {
  const articles = getAllArticles();

  return (
    <div className="site-background min-h-screen">
      <Breadcrumbs items={[{ label: 'Blog & Insight Thị Giác', href: '/blog/' }]} />

      {/* Header Banner */}
      <section className="b2b-gradient text-white py-16 px-6 relative overflow-hidden">
        <div className="absolute right-0 top-0 w-96 h-96 bg-[var(--button-start)]/20 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10 space-y-4">
          <span className="inline-block text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full bg-white/10 text-white border border-white/25">
            Góc Nhìn &amp; Insight Thị Giác
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white">
            Kiến Thức Tròng Kính &amp; Câu Chuyện Thị Giác
          </h1>
          <p className="text-white/85 text-base sm:text-lg max-w-3xl leading-relaxed">
            Kho bài viết chuyên sâu phân tích nhu cầu thực tế của người đeo kính: từ dân văn phòng tiếp xúc màn hình máy tính, tài xế lái xe ban đêm đến trẻ em cần kiểm soát độ cận tiến triển.
          </p>
        </div>
      </section>

      {/* Main Articles Listing */}
      <section className="max-w-7xl mx-auto px-6 py-16 space-y-12">
        
        {/* Customer Insight Highlight Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[var(--color-border)]/40 pb-6">
          <div>
            <h2 className="text-2xl sm:text-3xl font-black text-heading tracking-tight">
              Tất Cả Bài Viết Chuyên Đề
            </h2>
            <p className="text-[var(--color-muted)] text-sm mt-1">
              Khám phá giải pháp quang học tối ưu phù hợp với thói quen sinh hoạt và thị lực của bạn
            </p>
          </div>
          <div className="text-sm font-semibold text-heading bg-[var(--site-bg-middle)]/60 px-4 py-2 rounded-full border border-[var(--color-border)]/50 self-start sm:self-auto">
            {articles.length} bài viết xuất bản
          </div>
        </div>

        {/* Article Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <article
              key={article.id}
              className="group card-surface rounded-3xl overflow-hidden shadow-xs hover:shadow-xl hover:shadow-[var(--button-end)]/10 transition-all duration-300 flex flex-col justify-between border border-[var(--color-border)]/50"
            >
              <div>
                {/* Cover Image */}
                <Link
                  href={`/blog/${article.slug}/`}
                  className="relative aspect-16/10 bg-slate-100 overflow-hidden block"
                >
                  <img
                    src={article.coverImage || '/images/articles/blog_b2b_policy.png'}
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold button-primary shadow-xs">
                    {article.categoryName}
                  </span>
                </Link>

                {/* Content */}
                <div className="p-6 sm:p-7 space-y-3">
                  <div className="flex items-center gap-3 text-xs font-semibold text-[var(--color-muted)]">
                    <span className="inline-flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-[var(--color-primary)]" />
                      <span>{formatDate(article.publishedAt)}</span>
                    </span>
                    <span>&bull;</span>
                    <span className="inline-flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-[var(--color-primary)]" />
                      <span>{article.readTime}</span>
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-heading group-hover:text-[var(--color-primary)] transition-colors leading-snug line-clamp-2">
                    <Link href={`/blog/${article.slug}/`}>
                      {article.title}
                    </Link>
                  </h3>

                  <p className="text-[var(--color-muted)] text-sm leading-relaxed line-clamp-3">
                    {article.description}
                  </p>
                </div>
              </div>

              {/* Card Footer CTA */}
              <div className="p-6 sm:p-7 pt-0 border-t border-[var(--color-border)]/30 mt-4 flex items-center justify-between">
                <span className="text-xs font-medium text-[var(--color-muted)]">
                  {article.readTime}
                </span>
                <Link
                  href={`/blog/${article.slug}/`}
                  className="inline-flex items-center gap-1.5 text-sm font-bold text-[var(--color-primary)] group-hover:text-[var(--color-primary-hover)] transition-colors"
                >
                  <span>Đọc bài</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </article>
          ))}
        </div>

      </section>

      {/* Global CTA Box */}
      <ContactCTA />
    </div>
  );
}
