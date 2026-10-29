import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { BookOpen, Sparkles, Clock, Calendar, ArrowRight, ShieldCheck, Eye, Layers } from 'lucide-react';
import { getAllArticles } from '@/features/articles/article-service';
import Breadcrumbs from '@/components/shared/Breadcrumbs';
import ContactCTA from '@/components/shared/ContactCTA';
import ArticleCard from '@/components/content/ArticleCard';
import { constructMetadata } from '@/lib/seo/metadata';

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
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>

      </section>

      {/* Global CTA Box */}
      <ContactCTA />
    </div>
  );
}
