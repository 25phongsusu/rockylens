import React from 'react';
import { ArticleMeta } from '@/features/articles/article-types';
import ArticleCard from './ArticleCard';

interface ArticleGridProps {
  articles: ArticleMeta[];
}

export default function ArticleGrid({ articles }: ArticleGridProps) {
  if (articles.length === 0) {
    return (
      <div className="text-center py-12 bg-slate-50 rounded-2xl border border-dashed border-slate-200">
        <p className="text-sm text-slate-500">Chưa có bài viết nào trong danh mục này.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {articles.map((article) => (
        <ArticleCard key={article.id} article={article} />
      ))}
    </div>
  );
}
