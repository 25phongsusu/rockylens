import React from 'react';
import Link from 'next/link';
import { ArrowRight, BookOpen, HelpCircle } from 'lucide-react';
import SectionHeading from '@/components/shared/SectionHeading';
import ArticleCard from '@/components/content/ArticleCard';
import { ArticleMeta } from '@/features/articles/article-types';

interface EducationPreviewProps {
  articles: ArticleMeta[];
}

export default function EducationPreview({ articles }: EducationPreviewProps) {
  const displayArticles = articles.slice(0, 3);

  return (
    <section className="py-20 bg-slate-50 border-t border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeading
          badge="Cẩm Nang Thị Lực B2C"
          title="Hiểu Về Tròng Kính Cùng Chuyên Gia"
          description="Khám phá kiến thức khúc xạ nhãn khoa được giải thích bằng ngôn ngữ đơn giản, trực quan, giúp bạn tự tin lựa chọn cặp tròng kính hoàn hảo nhất cho đôi mắt."
        />

        {/* 3 Featured Articles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {displayArticles.map((art) => (
            <ArticleCard key={art.id} article={art} />
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <Link
            href="/cong-nghe/"
            className="button-primary inline-flex items-center space-x-2"
          >
            <BookOpen className="w-4 h-4" />
            <span>Khám Phá Tất Cả Kiến Thức Tròng Kính</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
