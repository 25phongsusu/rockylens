import React from 'react';
import type { Metadata } from 'next';
import { Sparkles } from 'lucide-react';
import { constructMetadata } from '@/lib/seo/metadata';
import { breadcrumbSchema } from '@/lib/seo/structured-data';
import { getAllProducts } from '@/lib/content/load-products';
import LiveVirtualTryOn from '@/features/face-finder/LiveVirtualTryOn';
import FaceFinderWizard from '@/features/face-finder/FaceFinderWizard';
import type { ProductSummary } from '@/features/face-finder/types';

export const metadata: Metadata = constructMetadata({
  title: 'Tìm Kính Phù Hợp Bằng AI — Quét Khuôn Mặt & Chọn Tròng Kính',
  description:
    'Công cụ AI quét 478 điểm mốc khuôn mặt ngay trên trình duyệt giúp xác định dáng mặt, thử gọng kính 2D và gợi ý tròng kính Rocky Lens chuẩn Canada phù hợp nhất.',
  path: '/tim-kinh-phu-hop/',
  keywords: [
    'tìm kính phù hợp bằng AI',
    'quét khuôn mặt chọn kính',
    'thử kính online 2D',
    'chọn gọng kính hợp khuôn mặt',
    'chọn tròng kính Rocky Lens',
    'tư vấn chiết suất tròng kính',
  ],
});

export default function TimKinhPhuHopPage() {
  const products = getAllProducts(false);

  const productSummaries: ProductSummary[] = products.map((p) => ({
    id: p.id,
    slug: p.slug,
    name: p.name,
    tagline: p.tagline,
    shortDescription: p.shortDescription,
    featuredImage: p.featuredImage || p.images?.[0] || '/images/products/category-solution-1.png',
    refractiveIndex: p.refractiveIndex || p.specifications?.refractiveIndex,
    price: p.price,
    formattedPrice: p.formattedPrice,
    badge: p.badge,
    categoryIds: p.categoryIds,
    coating: p.specifications?.coating,
    uvProtection: p.specifications?.uvProtection,
  }));

  const crumbJsonLd = breadcrumbSchema([
    { name: 'Trang chủ', url: '/' },
    { name: 'Tìm Kính Phù Hợp AI', url: '/tim-kinh-phu-hop/' },
  ]);

  return (
    <div className="min-h-screen bg-[var(--site-bg-start)] py-10 sm:py-14 px-4 sm:px-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(crumbJsonLd) }}
      />

      <div className="max-w-7xl mx-auto space-y-8">
        {/* Page Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--site-bg-middle)] border border-[var(--color-border)] text-[var(--color-primary)] text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Công Cụ Tư Vấn Thị Lực AI • 100% Bảo Mật Trình Duyệt</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-heading tracking-tight leading-tight">
            Gương Thử Kính Live & Tư Vấn AI
          </h1>
          <p className="text-brand-muted text-sm sm:text-base leading-relaxed">
            Thử gọng kính trực tiếp theo chuyển động khuôn mặt như filter, đổi màu tròng tức thì và nhận đề xuất tròng kính Rocky Lens chuẩn Canada.
          </p>
        </div>

        {/* 1. Live AR Filter Camera Try-On */}
        <LiveVirtualTryOn products={productSummaries} />

        {/* 2. Divider & Deep Diagnostic Option */}
        <div className="pt-10 border-t border-[var(--color-border)] space-y-6">
          <div className="max-w-2xl mx-auto text-center space-y-1.5">
            <h2 className="text-xl sm:text-2xl font-black text-heading">
              Tư Vấn Chuyên Sâu Theo Số Đo Khúc Xạ & Dáng Mặt
            </h2>
            <p className="text-xs sm:text-sm text-brand-muted">
              Trả lời 3 câu hỏi nhanh về độ cận và môi trường làm việc để chuyên gia quang học Rocky Lens thiết kế đơn tròng chuẩn nhất cho bạn.
            </p>
          </div>

          <FaceFinderWizard products={productSummaries} />
        </div>
      </div>
    </div>
  );
}
