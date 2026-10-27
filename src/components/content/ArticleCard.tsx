import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { ArticleMeta } from '@/features/articles/article-types';
import { formatDate } from '@/lib/utils';

interface ArticleCardProps {
  article: ArticleMeta;
}

export default function ArticleCard({ article }: ArticleCardProps) {
  return (
    <article className="group bg-white rounded-2xl border border-slate-200/80 hover:border-teal-300 shadow-xs hover:shadow-xl hover:shadow-teal-900/5 transition-all duration-300 flex flex-col overflow-hidden">
      {/* Cover Image */}
      <Link
        href={`/kham-pha-trong-kinh/bai-viet/${article.slug}/`}
        className="relative aspect-16/9 bg-slate-100 overflow-hidden block"
      >
        <Image
          src={article.coverImage || '/images/articles/blog_b2b_policy.png'}
          alt={article.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <span className="absolute top-3 left-3 px-2.5 py-1 rounded-md text-[11px] font-bold bg-[#0B7B8A] text-white shadow-xs">
          {article.categoryName}
        </span>
      </Link>

      {/* Meta & Info */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-center space-x-3 text-[11px] text-slate-400 mb-2.5">
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

          <h3 className="font-bold text-base text-slate-900 group-hover:text-[#0B7B8A] transition-colors line-clamp-2 leading-snug">
            <Link href={`/kham-pha-trong-kinh/bai-viet/${article.slug}/`}>
              {article.title}
            </Link>
          </h3>

          <p className="mt-2 text-xs text-slate-600 line-clamp-2 leading-relaxed">
            {article.description}
          </p>
        </div>

        <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between">
          <span className="text-[11px] text-slate-400">
            Bởi {article.author}
          </span>
          <Link
            href={`/kham-pha-trong-kinh/bai-viet/${article.slug}/`}
            className="inline-flex items-center space-x-1 text-xs font-semibold text-[#0B7B8A] group-hover:text-[#096370] transition-colors"
          >
            <span>Đọc Tiếp</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </article>
  );
}
