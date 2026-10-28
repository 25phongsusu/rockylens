import React from 'react';
import Link from 'next/link';
import { BookOpen, ArrowRight } from 'lucide-react';
import { ArticleMeta } from '@/features/articles/article-types';
import ArticleCard from './ArticleCard';

interface RelatedArticlesProps {
  articles: ArticleMeta[];
  title?: string;
}

export default function RelatedArticles({
  articles,
  title = 'Kiến Thức & Cẩm Nang Quang Học Liên Quan',
}: RelatedArticlesProps) {
  if (articles.length === 0) return null;

  return (
    <div className="pt-10 border-t border-[var(--color-border)]">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-2">
          <BookOpen className="w-5 h-5 text-primary" />
          <h3 className="text-xl font-bold text-heading">{title}</h3>
        </div>
        <Link
          href="/cong-nghe/"
          className="text-xs font-semibold text-primary hover:underline inline-flex items-center space-x-1"
        >
          <span>Xem tất cả kiến thức</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {articles.map((art) => (
          <ArticleCard key={art.id} article={art} />
        ))}
      </div>
    </div>
  );
}
