import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Calendar, Clock, User, Tag, ArrowLeft, Share2, ArrowRight } from 'lucide-react';
import {
  getAllArticles,
  getArticleBySlug,
  getRelatedArticles,
} from '@/features/articles/article-service';
import { getAllProducts } from '@/features/products/product-service';
import Breadcrumbs from '@/components/shared/Breadcrumbs';
import MarkdownContent from '@/components/content/MarkdownContent';
import ProductGrid from '@/components/products/ProductGrid';
import RelatedArticles from '@/components/content/RelatedArticles';
import ContactCTA from '@/components/shared/ContactCTA';
import { constructMetadata } from '@/lib/seo/metadata';
import { articleSchema } from '@/lib/seo/structured-data';
import { formatDate } from '@/lib/utils';

interface BlogArticlePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const articles = getAllArticles();
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({
  params,
}: BlogArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    return constructMetadata({ title: 'Không tìm thấy bài viết' });
  }

  return constructMetadata({
    title: `${article.title} | Blog Rocky Lens`,
    description: article.description,
    path: `/blog/${article.slug}/`,
    image: article.coverImage,
    keywords: article.tags,
  });
}

export default async function BlogArticleDetailPage({ params }: BlogArticlePageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const relatedArticles = getRelatedArticles(article, 3);
  const allProducts = getAllProducts();
  const relatedProducts = allProducts.filter((p) =>
    article.relatedProductIds.includes(p.slug) || article.relatedProductIds.includes(p.id)
  );

  const jsonLd = articleSchema(article);

  return (
    <div className="bg-white min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Breadcrumbs
        items={[
          { label: 'Blog & Insight Thị Giác', href: '/blog/' },
          { label: article.title, href: `/blog/${article.slug}/` },
        ]}
      />

      {/* Article Header */}
      <article className="max-w-4xl mx-auto px-6 pt-10 pb-16">
        <div className="space-y-6">
          <Link
            href="/blog/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#0B7B8A] hover:text-[#086370] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Quay lại danh sách bài viết</span>
          </Link>

          <div className="space-y-4">
            <span className="px-3.5 py-1.5 rounded-full text-xs font-bold bg-teal-50 text-[#0B7B8A] border border-teal-100 uppercase tracking-wider inline-block">
              {article.categoryName}
            </span>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0E253A] tracking-tight leading-[1.2]">
              {article.title}
            </h1>

            <p className="text-lg sm:text-xl text-slate-600 leading-relaxed font-medium">
              {article.description}
            </p>

            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-4 py-4 border-y border-slate-100 text-sm text-slate-500 font-medium">
              <span className="flex items-center gap-1.5">
                <User className="w-4 h-4 text-[#0B7B8A]" />
                <span className="text-[#0E253A] font-semibold">{article.author}</span>
              </span>
              <span>&bull;</span>
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4" />
                <span>{formatDate(article.publishedAt)}</span>
              </span>
              <span>&bull;</span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4" />
                <span>{article.readTime}</span>
              </span>
            </div>
          </div>

          {/* Hero Cover Image */}
          {article.coverImage && (
            <div className="relative aspect-16/9 rounded-3xl overflow-hidden bg-slate-100 shadow-sm">
              <img
                src={article.coverImage}
                alt={article.title}
                className="w-full h-full object-cover"
              />
            </div>
          )}

          {/* Markdown Main Body Content */}
          <div className="pt-8">
            <MarkdownContent content={article.content} />
          </div>

          {/* Tags */}
          {article.tags.length > 0 && (
            <div className="pt-8 border-t border-slate-100 flex flex-wrap items-center gap-2">
              <Tag className="w-4 h-4 text-slate-400" />
              <span className="text-sm font-semibold text-slate-700">Chủ đề liên quan:</span>
              {article.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-lg bg-slate-100 text-xs font-semibold text-slate-700"
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}

          {/* Consultation & Wholesale Inquire Box - Light & Fresh Modern Theme */}
          <div className="mt-12 p-8 rounded-3xl bg-gradient-to-br from-teal-50/80 via-white to-slate-50 border border-teal-100/90 text-slate-800 space-y-4 shadow-sm">
            <span className="text-[#0B7B8A] text-xs font-bold uppercase tracking-wider inline-block">
              Tư Vấn Giải Pháp Quang Học Rocky
            </span>
            <h3 className="text-2xl font-bold text-[#0E253A]">
              Bạn Cần Tư Vấn Tròng Kính Phù Hợp Với Đơn Kính Của Mình?
            </h3>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Các chuyên viên khúc xạ Rocky Lens luôn sẵn sàng giải đáp mọi thắc mắc về lựa chọn độ mỏng chiết suất, tính năng chống ánh sáng xanh hay giải pháp cho người lái xe.
            </p>
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="https://zalo.me/0933102653"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-full bg-[#0B7B8A] hover:bg-[#086370] text-white font-bold text-sm transition-colors shadow-xs"
              >
                Nhận Báo Giá &amp; Tư Vấn Qua Zalo
              </a>
              <a
                href="tel:0933102653"
                className="px-6 py-3 rounded-full bg-white border border-slate-200 hover:border-teal-300 text-[#0E253A] font-bold text-sm transition-colors shadow-xs"
              >
                Hotline: 0933 102 653
              </a>
            </div>
          </div>

        </div>
      </article>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="bg-[#F5F5F7] py-16 px-6">
          <div className="max-w-7xl mx-auto space-y-8">
            <div className="space-y-1">
              <span className="text-xs font-bold text-teal-700 uppercase tracking-wider">
                Gợi Ý Sản Phẩm
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-[#0E253A]">
                Tròng Kính Tương Thích Với Bài Viết
              </h2>
            </div>
            <ProductGrid products={relatedProducts} />
          </div>
        </section>
      )}

      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <section className="py-16 px-6 border-t border-slate-100">
          <div className="max-w-7xl mx-auto space-y-8">
            <div className="space-y-1">
              <span className="text-xs font-bold text-teal-700 uppercase tracking-wider">
                Đọc Tiếp
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-[#0E253A]">
                Bài Viết Cùng Chuyên Đề
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedArticles.map((rel) => (
                <div
                  key={rel.id}
                  className="bg-white p-5 rounded-2xl border border-slate-100 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div className="space-y-2">
                    <span className="text-xs font-semibold text-teal-700">{rel.categoryName}</span>
                    <h4 className="font-bold text-[#0E253A] line-clamp-2 hover:text-[#0B7B8A] transition-colors">
                      <Link href={`/blog/${rel.slug}/`}>{rel.title}</Link>
                    </h4>
                    <p className="text-xs text-slate-500 line-clamp-2">{rel.description}</p>
                  </div>
                  <div className="pt-4 border-t border-slate-50 mt-4 flex items-center justify-between text-xs text-slate-400">
                    <span>{rel.readTime}</span>
                    <Link
                      href={`/blog/${rel.slug}/`}
                      className="font-bold text-[#0B7B8A] inline-flex items-center gap-1 hover:translate-x-0.5 transition-transform"
                    >
                      <span>Xem</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Global CTA */}
      <ContactCTA />
    </div>
  );
}
