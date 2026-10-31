import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  ShieldCheck,
  Award,
  Layers,
  Sparkles,
  Phone,
  ArrowRight,
  CheckCircle,
  Eye,
  SunMedium,
  Car,
  Cpu,
} from 'lucide-react';
import {
  getAllProducts,
  getProductBySlug,
  getRelatedProducts,
} from '@/features/products/product-service';
import Breadcrumbs from '@/components/shared/Breadcrumbs';
import ProductSpecifications from '@/components/products/ProductSpecifications';
import ProductGrid from '@/components/products/ProductGrid';
import ContactCTA from '@/components/shared/ContactCTA';
import ShopeeProductSelector from '@/components/products/ShopeeProductSelector';
import { getProductTheme } from '@/features/products/pricing-matrix';
import { constructMetadata } from '@/lib/seo/metadata';
import { productSchema } from '@/lib/seo/structured-data';
import { siteConfig } from '@/config/site';

interface ProductDetailPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const products = getAllProducts();
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProductDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return constructMetadata({ title: 'Không tìm thấy sản phẩm' });
  }

  return constructMetadata({
    title: product.seo.title || product.name,
    description: product.seo.description || product.shortDescription,
    path: `/trong-kinh/${product.slug}/`,
    image: product.featuredImage || product.images[0],
    keywords: product.seo.keywords,
  });
}

const benefitIconMap: Record<string, React.ReactNode> = {
  ShieldCheck: <ShieldCheck className="w-5 h-5 text-[var(--color-primary)]" />,
  Sparkles: <Sparkles className="w-5 h-5 text-[var(--button-middle)]" />,
  Eye: <Eye className="w-5 h-5 text-[var(--color-primary)]" />,
  Award: <Award className="w-5 h-5 text-[var(--button-middle)]" />,
  Layers: <Layers className="w-5 h-5 text-[var(--color-primary)]" />,
  SunMedium: <SunMedium className="w-5 h-5 text-[var(--button-middle)]" />,
  Cpu: <Cpu className="w-5 h-5 text-[var(--color-primary)]" />,
  Car: <Car className="w-5 h-5 text-[var(--color-primary)]" />,
};

export default async function ProductDetailPage({ params }: ProductDetailPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const theme = getProductTheme(product.slug);
  const relatedProducts = getRelatedProducts(product, 3);

  const jsonLd = productSchema(product);

  return (
    <div className="bg-white min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* 1. Breadcrumbs */}
      <Breadcrumbs
        items={[
          { label: 'Sản phẩm tròng kính', href: '/trong-kinh/' },
          { label: product.name, href: `/trong-kinh/${product.slug}/` },
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        {/* Top Product Overview Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* CỘT TRÁI (Left Column: Hình ảnh + Lợi ích + Đối tượng + Thông số kỹ thuật) */}
          <div className="lg:col-span-5 space-y-8">
            {/* Hình ảnh sản phẩm & Thumbnails */}
            <div className="space-y-4">
              <div className="relative aspect-square rounded-3xl bg-slate-50 border border-[var(--color-border)]/50 p-8 flex items-center justify-center overflow-hidden shadow-xs">
                {product.badge && (
                  <span className="absolute top-4 left-4 z-10 px-3 py-1 rounded-md text-xs font-bold tracking-wide uppercase button-primary">
                    {product.badge}
                  </span>
                )}
                {product.refractiveIndex && (
                  <span className="absolute top-4 right-4 z-10 px-2.5 py-1 rounded-md text-xs font-bold bg-[var(--b2b-end)] text-white shadow-xs">
                    Index {product.refractiveIndex}
                  </span>
                )}

                <div className="relative w-full h-full flex items-center justify-center">
                  <Image
                    src={product.featuredImage || product.images[0]}
                    alt={product.name}
                    fill
                    priority
                    className="object-contain p-4"
                    sizes="(max-width: 1024px) 100vw, 500px"
                  />
                </div>
              </div>
            </div>

            {/* Lợi ích và đặc điểm nổi bật (Nằm sát ngay dưới ảnh tròng kính) */}
            <div>
              <h2 className="text-lg font-bold text-heading mb-4 flex items-center space-x-2">
                <Sparkles className="w-5 h-5 text-[var(--button-middle)]" />
                <span>Lợi Ích Và Đặc Điểm Nổi Bật</span>
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {product.benefits.map((benefit, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl border border-[var(--color-border)]/50 bg-white shadow-2xs hover:border-[var(--color-primary)] transition-colors"
                  >
                    <div className="flex items-center space-x-2.5 mb-2">
                      <div className="w-8 h-8 rounded-lg bg-[var(--site-bg-middle)]/50 flex items-center justify-center">
                        {benefitIconMap[benefit.icon || 'ShieldCheck']}
                      </div>
                      <h3 className="text-xs sm:text-sm font-bold text-heading">
                        {benefit.title}
                      </h3>
                    </div>
                    <p className="text-xs text-[var(--color-muted)] leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Đối tượng và nhu cầu sử dụng phù hợp */}
            {product.targetAudience && product.targetAudience.length > 0 && (
              <div className="p-5 rounded-2xl bg-[var(--site-bg-middle)]/30 border border-[var(--color-border)]/50">
                <h3 className="text-sm font-bold text-heading mb-3 flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-[var(--color-primary)]" />
                  <span>Đối Tượng Phù Hợp Sử Dụng</span>
                </h3>
                <ul className="space-y-2 text-xs text-[var(--color-muted)]">
                  {product.targetAudience.map((aud, idx) => (
                    <li key={idx} className="flex items-start space-x-2">
                      <span className="text-[var(--color-primary)] font-bold mt-0.5">•</span>
                      <span>{aud}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Thông số kỹ thuật chuẩn quang học */}
            <div>
              <h2 className="text-lg font-bold text-heading mb-4 flex items-center space-x-2">
                <Layers className="w-5 h-5 text-[var(--color-primary)]" />
                <span>Thông Số Kỹ Thuật Chuẩn Quang Học Canada</span>
              </h2>
              <ProductSpecifications specifications={product.specifications} />
            </div>

            {/* Cam Kết Chất Lượng & Dịch Vụ Khúc Xạ */}
            <div className="p-5 rounded-2xl bg-gradient-to-br from-slate-50 via-white to-slate-50 border border-[var(--color-border)] shadow-xs space-y-3.5">
              <div className="flex items-center space-x-2">
                <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0" />
                <h3 className="text-xs sm:text-sm font-bold text-heading uppercase tracking-wide">
                  Cam Kết Chính Hãng &amp; Dịch Vụ Khúc Xạ
                </h3>
              </div>
              <div className="space-y-2 text-xs text-slate-600">
                <div className="flex items-start space-x-2">
                  <span className="text-emerald-600 font-bold mt-0.5">✓</span>
                  <span><strong>100% Bao bì niêm phong:</strong> Tròng xuất kho nguyên tem niêm phong, quét mã QR xuất xứ và khăn lau chính hãng.</span>
                </div>
                <div className="flex items-start space-x-2">
                  <span className="text-emerald-600 font-bold mt-0.5">✓</span>
                  <span><strong>Khắc laser ẩn:</strong> Ký hiệu nhận diện quang học Canada chống hàng giả soi rõ khi hà hơi.</span>
                </div>
                <div className="flex items-start space-x-2">
                  <span className="text-emerald-600 font-bold mt-0.5">✓</span>
                  <span><strong>Bảo hành váng phủ 24 tháng:</strong> Bảo hành điện tử 1 đổi 1 trên toàn quốc đối với lớp váng phủ quang học.</span>
                </div>
                <div className="flex items-start space-x-2">
                  <span className="text-emerald-600 font-bold mt-0.5">✓</span>
                  <span><strong>Đo mắt &amp; cắt mài miễn phí:</strong> Miễn phí công đo khúc xạ và mài lắp chuẩn tâm tại hệ thống đại lý.</span>
                </div>
              </div>
              <div className="flex gap-2.5 pt-1">
                <Link
                  href="/lien-he/"
                  className="flex-1 inline-flex items-center justify-center space-x-1.5 py-2.5 px-4 rounded-xl text-xs font-bold button-primary"
                >
                  <span>Tìm Đại Lý Cắt Kính Gần Nhất</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <a
                  href={`tel:${siteConfig.phones.hotline}`}
                  className="inline-flex items-center justify-center py-2.5 px-3 rounded-xl text-xs font-semibold bg-white border border-[var(--color-border)] hover:border-[var(--color-primary)] text-heading hover:bg-[var(--site-bg-start)] transition-colors shadow-xs"
                  title="Gọi Hotline Hỗ Trợ"
                >
                  <Phone className="w-3.5 h-3.5 text-emerald-600" />
                </a>
              </div>
            </div>
          </div>

          {/* CỘT PHẢI (Right Column: Tiêu đề + Bộ chọn phân loại Shopee) */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[var(--color-primary)] bg-[var(--site-bg-middle)]/60 px-3 py-1 rounded-full border border-[var(--color-border)]/40">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Canada Opticians Official</span>
                </div>
                {product.consumerHeadline && (
                  <div className="inline-flex items-center gap-1.5 text-xs font-bold text-teal-800 bg-teal-50/90 px-3 py-1 rounded-full border border-teal-200/80 shadow-2xs">
                    <Sparkles className="w-3.5 h-3.5 text-teal-600" />
                    <span>Giải pháp: {product.consumerHeadline}</span>
                  </div>
                )}
              </div>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-heading tracking-tight leading-tight">
                {product.name}
              </h1>

              {product.materialSubtitle ? (
                <p className="mt-2 text-sm sm:text-base font-medium text-slate-700">
                  {product.materialSubtitle}
                </p>
              ) : product.tagline ? (
                <p className="mt-2 text-sm sm:text-base font-medium text-[var(--color-muted)]">
                  {product.tagline}
                </p>
              ) : null}

              {/* Mô tả ngắn dễ hiểu */}
              <div className="mt-4 p-4 rounded-xl bg-[var(--site-bg-start)]/60 border border-[var(--color-border)]/50 text-xs sm:text-sm text-heading leading-relaxed">
                {product.shortDescription}
              </div>

              {/* Tag nhỏ tính năng nổi bật theo Bảng giá */}
              {theme.featureTags && theme.featureTags.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-4">
                  {theme.featureTags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1 rounded-lg border shadow-2xs"
                      style={{
                        backgroundColor: theme.lightBgHex,
                        borderColor: `${theme.primaryColor}35`,
                        color: theme.accentTextHex || theme.primaryColor,
                      }}
                    >
                      <Sparkles className="w-3 h-3 opacity-70" />
                      <span>{tag}</span>
                    </span>
                  ))}
                </div>
              )}
            </div>

            {/* Shopee-style Variant Selector & Pricing Box */}
            <ShopeeProductSelector product={product} />
          </div>
        </div>

        {/* 11. Sản phẩm liên quan */}
        {relatedProducts.length > 0 && (
          <div className="mt-16 pt-12 border-t border-[var(--color-border)]/40">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h3 className="text-xl font-bold text-heading">
                  Sản Phẩm Cùng Phân Khúc Quang Học
                </h3>
                <p className="text-xs text-[var(--color-muted)] mt-1">
                  Khám phá thêm các tùy chọn chiết suất và công nghệ tương đương
                </p>
              </div>
              <Link
                href="/trong-kinh/"
                className="text-xs font-semibold text-[var(--color-primary)] hover:underline"
              >
                Xem tất cả catalogue →
              </Link>
            </div>
            <ProductGrid products={relatedProducts} />
          </div>
        )}
      </div>

      {/* 12. CTA liên hệ đại lý */}
      <ContactCTA />
    </div>
  );
}
