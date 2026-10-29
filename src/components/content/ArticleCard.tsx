import React from 'react';
import Link from 'next/link';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { ArticleMeta } from '@/features/articles/article-types';
import { formatDate } from '@/lib/utils';

interface ArticleCardProps {
  article: ArticleMeta;
}

export default function ArticleCard({ article }: ArticleCardProps) {
  return (
    <article className="group card-surface rounded-2xl hover:border-[var(--button-middle)] shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden bg-white border border-[var(--color-border)]/60">
      <div>
        {/* Cover Image */}
        <Link
          href={`/blog/${article.slug}/`}
          className="relative aspect-[16/10] bg-slate-100 overflow-hidden block"
        >
          <img
            src={article.coverImage || '/images/articles/blog_sec6_1.jpg'}
            alt={article.title}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute top-3 left-3">
            <span className="px-2.5 py-1 rounded-md text-[11px] font-bold bg-white/95 backdrop-blur-md text-primary shadow-xs border border-slate-200/60 uppercase tracking-wider">
              {article.categoryName}
            </span>
          </div>
        </Link>

        {/* Content */}
        <div className="p-5 space-y-2">
          {article.publishedAt && (
            <div className="flex items-center space-x-3 text-[11px] text-slate-400">
              <span className="inline-flex items-center space-x-1">
                <Calendar className="w-3 h-3 text-slate-400" />
                <span>{formatDate(article.publishedAt)}</span>
              </span>
              <span>•</span>
              <span className="inline-flex items-center space-x-1">
                <Clock className="w-3 h-3 text-slate-400" />
                <span>{article.readTime}</span>
              </span>
            </div>
          )}

          <h3 className="font-bold text-base sm:text-lg text-heading group-hover:text-primary transition-colors line-clamp-2 leading-snug">
            <Link href={`/blog/${article.slug}/`}>
              {article.title}
            </Link>
          </h3>

          <p className="text-xs sm:text-sm text-brand-muted line-clamp-2 leading-relaxed">
            {article.description}
          </p>
        </div>
      </div>

      {/* Footer CTA */}
      <div className="p-5 pt-0">
        <Link
          href={`/blog/${article.slug}/`}
          className="text-xs sm:text-sm font-bold text-primary group-hover:text-[var(--color-primary-hover)] inline-flex items-center gap-1.5 transition-all"
        >
          <span>Đọc bài viết</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </article>
  );
}

