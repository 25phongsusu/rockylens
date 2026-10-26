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
  Download,
  Phone,
  ArrowRight,
  CheckCircle,
  FileText,
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
import { getAllArticles } from '@/features/articles/article-service';
import Breadcrumbs from '@/components/shared/Breadcrumbs';
import ProductSpecifications from '@/components/products/ProductSpecifications';
import ProductGrid from '@/components/products/ProductGrid';
import RelatedArticles from '@/components/content/RelatedArticles';
import ContactCTA from '@/components/shared/ContactCTA';
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
  ShieldCheck: <ShieldCheck className="w-5 h-5 text-[#0B7B8A]" />,
  Sparkles: <Sparkles className="w-5 h-5 text-[#D97706]" />,
  Eye: <Eye className="w-5 h-5 text-teal-600" />,
  Award: <Award className="w-5 h-5 text-[#D97706]" />,
  Layers: <Layers className="w-5 h-5 text-indigo-600" />,
  SunMedium: <SunMedium className="w-5 h-5 text-[#D97706]" />,
  Cpu: <Cpu className="w-5 h-5 text-[#0B7B8A]" />,
  Car: <Car className="w-5 h-5 text-teal-600" />,
};

export default async function ProductDetailPage({ params }: ProductDetailPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const relatedProducts = getRelatedProducts(product, 3);
  const allArticles = getAllArticles();
  const relatedArticles = allArticles.filter((art) =>
    product.relatedArticleIds.includes(art.slug)
  );

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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* 2. Hình ảnh sản phẩm (Left) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="relative aspect-square rounded-3xl bg-slate-50 border border-slate-200/80 p-8 flex items-center justify-center overflow-hidden shadow-xs">
              {product.badge && (
                <span className="absolute top-4 left-4 z-10 px-3 py-1 rounded-md text-xs font-bold tracking-wide uppercase bg-[#0B7B8A] text-white shadow-xs">
                  {product.badge}
                </span>
              )}
              {product.refractiveIndex && (
                <span className="absolute top-4 right-4 z-10 px-2.5 py-1 rounded-md text-xs font-bold bg-[#050E10] text-white">
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

            {/* Gallery Thumbnails if multiple images */}
            {product.images.length > 1 && (
              <div className="flex gap-3">
                {product.images.map((img, idx) => (
                  <div
                    key={idx}
                    className="relative w-20 h-20 rounded-xl bg-slate-50 border border-slate-200 overflow-hidden p-2"
                  >
                    <Image
                      src={img}
                      alt={`${product.name} góc ${idx + 1}`}
                      fill
                      className="object-contain p-1"
                    />
                  </div>
                ))}
              </div>
            )}

            {/* Quick B2B Direct Action Box */}
            <div className="p-5 rounded-2xl bg-[#050E10] text-white space-y-3">
              <div className="text-xs font-bold text-teal-400 uppercase tracking-wider">
                Kết Nối Đại Lý Kính Mắt & Lab RX
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Đăng ký nhận bảng giá sỉ và danh mục phôi tròng kính Rocky Lens chính hãng.
              </p>
              <div className="flex gap-3 pt-1">
                <a
                  href={siteConfig.zalo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center space-x-1.5 py-2.5 px-4 rounded-xl text-xs font-bold bg-[#0B7B8A] hover:bg-[#096370] text-white transition-colors"
                >
                  <span>Nhắn Zalo Đại Lý</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
                <a
                  href={`tel:${siteConfig.phones.hotline}`}
                  className="inline-flex items-center justify-center py-2.5 px-3 rounded-xl text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-white transition-colors"
                >
                  <Phone className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Information Hierarchy */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              {/* 3. Tên sản phẩm */}
              <div className="inline-block text-xs font-semibold uppercase tracking-wider text-[#0B7B8A] bg-teal-50 px-3 py-1 rounded-full mb-3">
                Canada Opticians Official
              </div>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                {product.name}
              </h1>

              {product.tagline && (
                <p className="mt-2 text-sm sm:text-base font-medium text-slate-600">
                  {product.tagline}
                </p>
              )}

              {/* 4. Mô tả ngắn dễ hiểu */}
              <div className="mt-4 p-4 rounded-xl bg-slate-50 border border-slate-200/80 text-xs sm:text-sm text-slate-700 leading-relaxed">
                {product.shortDescription}
              </div>
            </div>

            {/* 5. Lợi ích và đặc điểm nổi bật (B2C) */}
            <div>
              <h2 className="text-lg font-bold text-slate-900 mb-4 flex items-center space-x-2">
                <Sparkles className="w-5 h-5 text-[#D97706]" />
                <span>Lợi Ích Và Đặc Điểm Nổi Bật</span>
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {product.benefits.map((benefit, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl border border-slate-200 bg-white shadow-2xs hover:border-teal-300 transition-colors"
                  >
                    <div className="flex items-center space-x-2.5 mb-2">
                      <div className="w-8 h-8 rounded-lg bg-teal-50 flex items-center justify-center">
                        {benefitIconMap[benefit.icon || 'ShieldCheck']}
                      </div>
                      <h3 className="text-xs sm:text-sm font-bold text-slate-800">
                        {benefit.title}
                      </h3>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* 8. Đối tượng và nhu cầu sử dụng phù hợp */}
            {product.targetAudience && product.targetAudience.length > 0 && (
              <div className="p-5 rounded-2xl bg-teal-50/60 border border-teal-100">
                <h3 className="text-sm font-bold text-[#0B7B8A] mb-3 flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4" />
                  <span>Đối Tượng Phù Hợp Sử Dụng</span>
                </h3>
                <ul className="space-y-2 text-xs text-slate-700">
                  {product.targetAudience.map((aud, idx) => (
                    <li key={idx} className="flex items-start space-x-2">
                      <span className="text-[#0B7B8A] font-bold mt-0.5">•</span>
                      <span>{aud}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* 7. Thông số kỹ thuật B2B */}
            <div>
              <h2 className="text-lg font-bold text-slate-900 mb-4 flex items-center space-x-2">
                <Layers className="w-5 h-5 text-[#0B7B8A]" />
                <span>Thông Số Kỹ Thuật Chi Tiết (B2B Optical Data)</span>
              </h2>
              <ProductSpecifications specifications={product.specifications} />
            </div>

            {/* 9. Tài liệu catalogue nếu có */}
            {product.documents && product.documents.length > 0 && (
              <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <FileText className="w-5 h-5 text-[#0B7B8A]" />
                  <div>
                    <div className="text-xs font-bold text-slate-800">
                      {product.documents[0].title}
                    </div>
                    <div className="text-[11px] text-slate-500">
                      Định dạng {product.documents[0].type} • {product.documents[0].size}
                    </div>
                  </div>
                </div>

                <a
                  href={product.documents[0].url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-1 px-3 py-1.5 rounded-lg text-xs font-semibold bg-[#0B7B8A] text-white hover:bg-[#096370] transition-colors"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Tải Về</span>
                </a>
              </div>
            )}
          </div>
        </div>

        {/* 10. Bài viết kiến thức liên quan */}
        {relatedArticles.length > 0 && (
          <div className="mt-16">
            <RelatedArticles
              articles={relatedArticles}
              title={`Kiến Thức Quang Học Liên Quan Đến ${product.name}`}
            />
          </div>
        )}

        {/* 11. Sản phẩm liên quan */}
        {relatedProducts.length > 0 && (
          <div className="mt-16 pt-12 border-t border-slate-200">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h3 className="text-xl font-bold text-slate-900">
                  Sản Phẩm Cùng Phân Khúc Quang Học
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Khám phá thêm các tùy chọn chiết suất và công nghệ tương đương
                </p>
              </div>
              <Link
                href="/trong-kinh/"
                className="text-xs font-semibold text-[#0B7B8A] hover:underline"
              >
                Xem tất cả catalogue →
              </Link>
            </div>
            <ProductGrid products={relatedProducts} />
          </div>
        )}
      </div>

      {/* 12. CTA liên hệ */}
      <ContactCTA
        title={`Tư Vấn Chuyên Sâu Hoặc Báo Giá Đại Lý Cho ${product.name}`}
        description="Đội ngũ kỹ thuật viên Rocky Lens luôn sẵn sàng hỗ trợ đại lý và người tiêu dùng lựa chọn đúng sản phẩm, đúng độ và đúng thông số gọng."
      />
    </div>
  );
}
