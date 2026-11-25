import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Calendar, Clock, Tag, ArrowLeft, Share2, ArrowRight, Sparkles, HelpCircle, CheckCircle2 } from 'lucide-react';
import {
  getAllArticles,
  getArticleBySlug,
  getRelatedArticles,
} from '@/lib/content/load-articles';
import { getAllProducts } from '@/lib/content/load-products';
import Breadcrumbs from '@/components/shared/Breadcrumbs';
import MarkdownContent from '@/components/content/MarkdownContent';
import ProductGrid from '@/components/products/ProductGrid';
import RelatedArticles from '@/components/content/RelatedArticles';
import ContactCTA from '@/components/shared/ContactCTA';
import { constructMetadata } from '@/lib/seo/metadata';
import { articleSchema, faqPageSchema } from '@/lib/seo/structured-data';
import { getArticleFaqs } from '@/features/articles/article-faqs';
import { assetUrl, formatDate } from '@/lib/utils';

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

  const faqs = getArticleFaqs(article.slug);
  const jsonLd = articleSchema(article);
  const faqJsonLd = faqs.length > 0 ? faqPageSchema(faqs) : null;

  return (
    <div className="bg-white min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {faqJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      )}

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
            <span className="px-3.5 py-1.5 rounded-full text-xs font-bold bg-sky-50 text-sky-700 border border-sky-200/80 uppercase tracking-wider inline-block shadow-2xs">
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
              <span>&bull;</span>
              <span className="text-xs px-2.5 py-0.5 rounded-md bg-teal-50 text-teal-800 font-bold border border-teal-200/70">
                Chuyên môn: Rocky Canada Opticians
              </span>
            </div>
          </div>

          {/* GEO Definition Snippet: AI Quick Overview / Key Takeaways Box */}
          <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-[#EFF8FC] via-white to-[#F0FAFD] border border-[#BEE1EC] shadow-[0_4px_20px_rgba(18,86,106,0.06)] space-y-3">
            <div className="flex items-center gap-2 text-[#12586D] font-black text-xs sm:text-sm uppercase tracking-wider">
              <Sparkles className="w-4 h-4 text-[#1D7E9A]" />
              <span>Tóm Tắt Định Nghĩa & Điểm Cốt Lõi (AI Overview)</span>
            </div>
            <p className="text-sm sm:text-[15px] leading-relaxed text-slate-700 font-medium">
              {article.description} Dưới sự phát triển của các chuyên gia nhãn khoa tại <strong>Rocky Lens (Canada Opticians)</strong>, người tiêu dùng và chuyên viên khúc xạ có thể nắm bắt nguyên lý quang học chuẩn xác, phân biệt công nghệ chế tác và đưa ra giải pháp bảo vệ thị lực tối ưu nhất.
            </p>
          </div>

          {/* Hero Cover Image */}
          {article.coverImage && (
            <div className="relative aspect-16/9 rounded-3xl overflow-hidden bg-slate-100 shadow-sm border border-[var(--color-border)]/40">
              <img
                src={assetUrl(article.coverImage)}
                alt={article.title}
                className="w-full h-full object-cover"
              />
            </div>
          )}

          {/* Markdown Main Body Content */}
          <div className="pt-8">
            <MarkdownContent content={article.content} />
          </div>

          {/* GEO FAQ Section: Interactive Accordion & Q&A */}
          {faqs.length > 0 && (
            <div className="mt-12 pt-8 border-t border-[var(--color-border)]/40 space-y-5">
              <div className="flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-[#12586D]" />
                <h3 className="text-xl sm:text-2xl font-black text-heading">
                  Câu Hỏi Thường Gặp Về Chủ Đề Này (FAQ)
                </h3>
              </div>
              <div className="space-y-3">
                {faqs.map((faq, idx) => (
                  <details
                    key={idx}
                    className="group rounded-2xl border border-slate-200/90 bg-slate-50/60 p-4 transition-all duration-200 open:bg-white open:shadow-xs open:border-[#BEE1EC]"
                  >
                    <summary className="flex items-center justify-between font-bold text-sm sm:text-base text-slate-800 cursor-pointer list-none select-none">
                      <span className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#1D7E9A] shrink-0" />
                        <span>{faq.question}</span>
                      </span>
                      <span className="text-slate-400 group-open:rotate-180 transition-transform ml-2 shrink-0">
                        ▼
                      </span>
                    </summary>
                    <p className="mt-3 pl-6 text-sm leading-relaxed text-slate-600 border-l-2 border-[#1D7E9A]/40 font-medium">
                      {faq.answer}
                    </p>
                  </details>
                ))}
              </div>
            </div>
          )}

          {/* Tags */}
          {article.tags.length > 0 && (
            <div className="pt-8 border-t border-[var(--color-border)]/30 flex flex-wrap items-center gap-2">
              <Tag className="w-4 h-4 text-slate-400" />
              <span className="text-sm font-semibold text-heading">Chủ đề liên quan:</span>
              {article.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-lg bg-slate-100 text-xs font-semibold text-slate-700 border border-slate-200/80"
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
