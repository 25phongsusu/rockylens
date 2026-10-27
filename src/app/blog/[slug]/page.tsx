import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Calendar, Clock, Tag, ArrowLeft, Share2, ArrowRight } from 'lucide-react';
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
            className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-primary)] hover:text-[var(--color-primary-hover)] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Quay lại danh sách bài viết</span>
          </Link>

          <div className="space-y-4">
            <span className="px-3.5 py-1.5 rounded-full text-xs font-bold bg-[var(--site-bg-middle)]/60 text-heading border border-[var(--color-border)]/50 uppercase tracking-wider inline-block">
              {article.categoryName}
            </span>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-heading tracking-tight leading-[1.2]">
              {article.title}
            </h1>

            <p className="text-lg sm:text-xl text-[var(--color-muted)] leading-relaxed font-medium">
              {article.description}
            </p>

            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-4 py-4 border-y border-[var(--color-border)]/30 text-sm text-[var(--color-muted)] font-medium">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-[var(--color-primary)]" />
                <span>{formatDate(article.publishedAt)}</span>
              </span>
              <span>&bull;</span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-[var(--color-primary)]" />
                <span>{article.readTime}</span>
              </span>
            </div>
          </div>

          {/* Hero Cover Image */}
          {article.coverImage && (
            <div className="relative aspect-16/9 rounded-3xl overflow-hidden bg-slate-100 shadow-sm border border-[var(--color-border)]/40">
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
            <div className="pt-8 border-t border-[var(--color-border)]/30 flex flex-wrap items-center gap-2">
              <Tag className="w-4 h-4 text-slate-400" />
              <span className="text-sm font-semibold text-heading">Chủ đề liên quan:</span>
              {article.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-lg bg-[var(--site-bg-start)] text-xs font-semibold text-heading border border-[var(--color-border)]/40"
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}

        </div>
      </article>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="section-background py-16 px-6 border-t border-[var(--color-border)]/40">
          <div className="max-w-7xl mx-auto space-y-8">
            <div className="space-y-1">
              <span className="text-xs font-bold text-[var(--color-primary)] uppercase tracking-wider">
                Gợi Ý Sản Phẩm
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-heading">
                Tròng Kính Tương Thích Với Bài Viết
              </h2>
            </div>
            <ProductGrid products={relatedProducts} />
          </div>
        </section>
      )}

      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <section className="py-16 px-6 border-t border-[var(--color-border)]/40">
          <div className="max-w-7xl mx-auto space-y-8">
            <div className="space-y-1">
              <span className="text-xs font-bold text-[var(--color-primary)] uppercase tracking-wider">
                Đọc Tiếp
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-heading">
                Bài Viết Cùng Chuyên Đề
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedArticles.map((rel) => (
                <div
                  key={rel.id}
                  className="card-surface p-5 rounded-2xl border border-[var(--color-border)]/50 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div className="space-y-2">
                    <span className="text-xs font-semibold text-[var(--color-primary)]">{rel.categoryName}</span>
                    <h4 className="font-bold text-heading line-clamp-2 hover:text-[var(--color-primary)] transition-colors">
                      <Link href={`/blog/${rel.slug}/`}>{rel.title}</Link>
                    </h4>
                    <p className="text-xs text-[var(--color-muted)] line-clamp-2">{rel.description}</p>
                  </div>
                  <div className="pt-4 border-t border-[var(--color-border)]/20 mt-4 flex items-center justify-between text-xs text-[var(--color-muted)]">
                    <span>{rel.readTime}</span>
                    <Link
                      href={`/blog/${rel.slug}/`}
                      className="font-bold text-[var(--color-primary)] inline-flex items-center gap-1 hover:translate-x-0.5 transition-transform"
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
