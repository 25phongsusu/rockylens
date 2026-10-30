import React, { Suspense } from 'react';
import { Metadata } from 'next';
import { getAllProducts } from '@/features/products/product-service';
import ProductCatalogView from '@/features/products/ProductCatalogView';
import Breadcrumbs from '@/components/shared/Breadcrumbs';
import ContactCTA from '@/components/shared/ContactCTA';
import { constructMetadata } from '@/lib/seo/metadata';

export const metadata: Metadata = constructMetadata({
  title: 'Catalogue Tròng Kính Quang Học RockyLens Canada',
  description: 'Khám phá toàn bộ catalogue tròng kính đơn tròng, đa tròng Freeform, tròng đổi màu, kính lái xe và tròng kiểm soát cận thị phân phối bởi Rocky Lens Canada.',
  path: '/trong-kinh/',
});

export default function ProductsPage() {
  const products = getAllProducts();

  return (
    <div className="bg-[var(--site-bg-start)] min-h-screen">
      <Breadcrumbs items={[{ label: 'Sản phẩm tròng kính', href: '/trong-kinh/' }]} />

      {/* Page Hero - Streamlined & Minimalist */}
      <section className="py-10 sm:py-14 px-4 sm:px-6 relative overflow-hidden text-center">
        <div className="max-w-4xl mx-auto relative z-10 space-y-3">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-white/90 border border-[var(--color-border)] text-primary text-xs font-bold shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-[var(--button-middle)]" />
            <span className="tracking-wide uppercase font-semibold">Giải Pháp Thị Lực Theo Đối Tượng &amp; Nhu Cầu</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-heading">
            Chống Ánh Sáng Xanh{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--button-start)] via-[var(--button-middle)] to-[var(--button-end)]">
              Cùng Rocky
            </span>
          </h1>

          <p className="text-brand-muted text-sm sm:text-base max-w-3xl mx-auto leading-relaxed">
            Hệ sinh thái tròng kính quang học Canada tiêu chuẩn ISO 13485:2016. Phân định rõ ràng từng giải pháp theo đặc thù nghề nghiệp và sinh hoạt — từ Designer đồ họa, dân văn phòng hay ra nắng, tài xế lái xe ban đêm đến người lớn tuổi và trẻ em cận thị.
          </p>
        </div>
      </section>

      {/* Main Streamlined Catalog Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pb-20">
        <Suspense fallback={<div className="text-center py-16 text-[var(--color-muted)] font-medium">Đang tải catalogue sản phẩm...</div>}>
          <ProductCatalogView initialProducts={products} />
        </Suspense>
      </div>

      {/* Bottom B2B Partner CTA */}
      <ContactCTA />
    </div>
  );
}
