import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import ArticleCard from '@/components/content/ArticleCard';
import { ArticleMeta } from '@/features/articles/article-types';
import homeContent from '@/../content/home_content.json';

export default function BlogSection() {
  const { blog } = homeContent;

  return (
    <section id="blog-insights" className="relative py-16 sm:py-20 px-6 bg-transparent overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl space-y-2">
          <div className="text-xs font-bold text-primary tracking-wider uppercase">
            {blog.tag}
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-heading tracking-tight leading-[1.14]">
            {blog.title} <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--button-start)] via-[var(--button-middle)] to-[var(--button-end)]">
              {blog.highlight}
            </span>
          </h2>
          <p className="text-brand-muted text-sm sm:text-base leading-relaxed">
            {blog.desc}
          </p>
        </div>

        {/* 3 Editorial Blog Cards Grid */}
        <div className="w-full">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
            {blog.articles.map((article) => {
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
