import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Calendar, Clock, Tag, ArrowLeft, Share2 } from 'lucide-react';
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

interface ArticlePageProps {
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
}: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    return constructMetadata({ title: 'Không tìm thấy bài viết' });
  }

  return constructMetadata({
    title: article.title,
    description: article.description,
    path: `/kham-pha-trong-kinh/bai-viet/${article.slug}/`,
    image: article.coverImage,
    keywords: article.tags,
  });
}

export default async function ArticleDetailPage({ params }: ArticlePageProps) {
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
          { label: 'Công nghệ & Kiến thức', href: '/kham-pha-trong-kinh/' },
          { label: article.title, href: `/kham-pha-trong-kinh/bai-viet/${article.slug}/` },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
        {/* Back Link */}
        <Link
          href="/kham-pha-trong-kinh/"
          className="inline-flex items-center space-x-1.5 text-xs font-semibold text-slate-500 hover:text-[#0B7B8A] mb-6 transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Quay lại trang kiến thức</span>
        </Link>

        {/* Category & Title */}
        <div className="space-y-4">
          <span className="inline-block text-xs font-bold uppercase tracking-wider text-[#0B7B8A] bg-teal-50 px-3 py-1 rounded-full">
            {article.categoryName}
          </span>

          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight leading-tight">
            {article.title}
          </h1>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            {article.description}
          </p>

          {/* Meta Info */}
          <div className="flex flex-wrap items-center gap-4 py-4 border-t border-b border-slate-100 text-xs text-slate-500">
            <span className="inline-flex items-center space-x-1.5">
              <Calendar className="w-3.5 h-3.5 text-[#0B7B8A]" />
              <span>{formatDate(article.publishedAt)}</span>
            </span>
            <span>•</span>
            <span className="inline-flex items-center space-x-1.5">
              <Clock className="w-3.5 h-3.5 text-[#0B7B8A]" />
              <span>{article.readTime}</span>
            </span>
          </div>
        </div>

        {/* Featured Cover Image */}
        <div className="relative aspect-16/9 rounded-3xl overflow-hidden my-8 shadow-md bg-slate-100">
          <Image
            src={article.coverImage}
            alt={article.title}
            fill
            priority
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 900px"
          />
        </div>

        {/* Article Body */}
        <div className="mt-8">
          <MarkdownContent content={article.content} />
        </div>

        {/* Tags */}
        {article.tags && article.tags.length > 0 && (
          <div className="mt-10 pt-6 border-t border-slate-100 flex flex-wrap items-center gap-2">
            <Tag className="w-4 h-4 text-slate-400 mr-1" />
            {article.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs font-medium px-3 py-1 bg-slate-100 text-slate-700 rounded-full"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-16 pt-10 border-t border-slate-200">
            <div className="mb-6">
              <h3 className="text-xl font-bold text-slate-900">
                Sản Phẩm Tròng Kính Ứng Dụng Trong Bài Viết
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Xem thông số kỹ thuật và đặc tính quang học thực tế
              </p>
            </div>
            <ProductGrid products={relatedProducts} />
          </div>
        )}

        {/* Related Articles */}
        {relatedArticles.length > 0 && (
          <div className="mt-16">
            <RelatedArticles articles={relatedArticles} />
          </div>
        )}
      </article>
    </div>
  );
}
