import React, { Suspense } from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import { getAllProducts } from '@/features/products/product-service';
import ProductCatalogView from '@/features/products/ProductCatalogView';
import Breadcrumbs from '@/components/shared/Breadcrumbs';
import ContactCTA from '@/components/shared/ContactCTA';
import { constructMetadata } from '@/lib/seo/metadata';
import { CATEGORIES } from '@/features/products/product-types';

export const metadata: Metadata = constructMetadata({
  title: 'Catalogue Tròng Kính Quang Học Chính Hãng',
  description: 'Khám phá toàn bộ catalogue tròng kính đơn tròng, đa tròng Freeform, tròng đổi màu, kính lái xe và tròng kiểm soát cận thị phân phối bởi Rocky Lens Canada.',
  path: '/trong-kinh/',
});

export default function ProductsPage() {
  const products = getAllProducts();

  return (
    <div className="bg-slate-50/50 min-h-screen">
      <Breadcrumbs items={[{ label: 'Sản phẩm tròng kính', href: '/trong-kinh/' }]} />

      {/* Page Hero */}
      <section className="b2b-gradient text-white py-14 px-4 sm:px-6 relative overflow-hidden">
        <div className="absolute right-0 top-0 w-96 h-96 bg-[var(--button-start)]/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <span className="inline-block text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-3 bg-white/10 text-white border border-white/20">
            Catalogue Sản Phẩm Chính Hãng
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white">
            Danh Mục Tròng Kính Quang Học
          </h1>
          <p className="mt-3 text-white/85 text-sm sm:text-base max-w-3xl leading-relaxed">
            Hệ sinh thái sản phẩm toàn diện cho hệ thống đại lý kính mắt và chuỗi phòng khám khúc xạ. Cam kết 100% phôi vật liệu đạt chuẩn quang học, ứng dụng công nghệ phay Freeform 3D và lớp váng phủ chân không đa tầng.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <Suspense fallback={<div className="text-center py-12 text-[var(--color-muted)]">Đang tải catalogue sản phẩm...</div>}>
          <ProductCatalogView initialProducts={products} />
        </Suspense>

        {/* Section 5: Giải Thích Nhanh Các Nhóm Tròng Kính */}
        <section className="mt-20 pt-12 border-t border-[var(--color-border)]/40">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-heading tracking-tight">
              Hướng Dẫn Nhanh Các Nhóm Tròng Kính
            </h2>
            <p className="text-[var(--color-muted)] text-sm mt-1">
              Tìm hiểu tổng quan công năng và đối tượng sử dụng của từng dòng tròng mắt kính chính.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {CATEGORIES.map((cat) => (
              <div key={cat.id} className="card-surface rounded-xl p-5 border border-[var(--color-border)]/50 shadow-xs">
                <h3 className="font-bold text-sm mb-2 text-[var(--color-primary)]">
                  {cat.name}
                </h3>
                <p className="text-xs text-[var(--color-muted)] leading-relaxed">
                  {cat.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 6: So Sánh Chiết Suất Vật Liệu (Refractive Index) */}
        <section className="mt-20 pt-12 border-t border-[var(--color-border)]/40">
          <div className="mb-8">
            <h2 className="text-2xl sm:text-3xl font-black text-heading tracking-tight">
              So Sánh Chiết Suất Vật Liệu (Refractive Index)
            </h2>
            <p className="text-[var(--color-muted)] text-sm sm:text-base mt-2">
              Lựa chọn chiết suất phù hợp giữa độ mỏng nhẹ, độ sắc nét quang sai Abbe và kết cấu gọng kính của khách hàng.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="card-surface p-6 rounded-2xl border border-[var(--color-border)]/50 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-2xl font-black text-[var(--color-primary)]">1.56</span>
                <span className="text-xs font-semibold text-slate-700 bg-slate-100 px-2.5 py-0.5 rounded-full">Phổ thông</span>
              </div>
              <h3 className="text-base font-bold text-heading">Hard Resin Tiêu Chuẩn</h3>
              <div className="space-y-1.5 text-xs bg-slate-50 p-3 rounded-xl border border-slate-100">
                <div className="flex justify-between"><span className="text-[var(--color-muted)]">Độ Abbe:</span><span className="font-bold text-heading">36</span></div>
                <div className="flex justify-between"><span className="text-[var(--color-muted)]">Độ mỏng:</span><span className="font-bold text-heading">Tiêu chuẩn</span></div>
                <div className="flex justify-between"><span className="text-[var(--color-muted)]">Dải độ tối ưu:</span><span className="font-bold text-heading">Dưới 3.00D</span></div>
              </div>
              <p className="text-xs text-[var(--color-muted)]">Phù hợp gọng nguyên khung kim loại hoặc nhựa acetat có viền dày.</p>
            </div>

            <div className="card-surface p-6 rounded-2xl border border-[var(--color-border)]/50 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-2xl font-black text-[var(--color-primary)]">1.60</span>
                <span className="text-xs font-semibold text-heading bg-[var(--site-bg-middle)]/60 px-2.5 py-0.5 rounded-full border border-[var(--color-border)]/40">Bền dẻo cao</span>
              </div>
              <h3 className="text-base font-bold text-heading">Monomer Mitsui MR-8™</h3>
              <div className="space-y-1.5 text-xs bg-slate-50 p-3 rounded-xl border border-slate-100">
                <div className="flex justify-between"><span className="text-[var(--color-muted)]">Độ Abbe:</span><span className="font-bold text-heading">41 (Rất nét)</span></div>
                <div className="flex justify-between"><span className="text-[var(--color-muted)]">Độ mỏng:</span><span className="font-bold text-heading">Mỏng hơn 15%</span></div>
                <div className="flex justify-between"><span className="text-[var(--color-muted)]">Dải độ tối ưu:</span><span className="font-bold text-heading">2.00D - 5.00D</span></div>
              </div>
              <p className="text-xs text-[var(--color-muted)]">Độ dẻo dai cao, đặc biệt khuyên dùng cho gọng xẻ cước và gọng bắt ốc không viền.</p>
            </div>

            <div className="card-surface p-6 rounded-2xl border border-[var(--color-border)]/50 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-2xl font-black text-[var(--color-primary)]">1.67</span>
                <span className="text-xs font-semibold text-slate-700 bg-slate-100 px-2.5 py-0.5 rounded-full">Siêu mỏng nhẹ</span>
              </div>
              <h3 className="text-base font-bold text-heading">Monomer Mitsui MR-7™</h3>
              <div className="space-y-1.5 text-xs bg-slate-50 p-3 rounded-xl border border-slate-100">
                <div className="flex justify-between"><span className="text-[var(--color-muted)]">Độ Abbe:</span><span className="font-bold text-heading">32</span></div>
                <div className="flex justify-between"><span className="text-[var(--color-muted)]">Độ mỏng:</span><span className="font-bold text-heading">Mỏng hơn 25%</span></div>
                <div className="flex justify-between"><span className="text-[var(--color-muted)]">Dải độ tối ưu:</span><span className="font-bold text-heading">4.00D - 8.00D</span></div>
              </div>
              <p className="text-xs text-[var(--color-muted)]">Giảm trọng lượng đáng kể trên sống mũi, thẩm mỹ cao cho người cận độ vừa đến cao.</p>
            </div>

            <div className="card-surface p-6 rounded-2xl border border-[var(--color-border)]/50 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-2xl font-black text-[var(--color-primary)]">1.74</span>
                <span className="text-xs font-semibold text-amber-950 bg-amber-100 px-2.5 py-0.5 rounded-full">Mỏng nhất</span>
              </div>
              <h3 className="text-base font-bold text-heading">Monomer Mitsui MR-174™</h3>
              <div className="space-y-1.5 text-xs bg-slate-50 p-3 rounded-xl border border-slate-100">
                <div className="flex justify-between"><span className="text-[var(--color-muted)]">Độ Abbe:</span><span className="font-bold text-heading">33</span></div>
                <div className="flex justify-between"><span className="text-[var(--color-muted)]">Độ mỏng:</span><span className="font-bold text-heading">Mỏng hơn 40%</span></div>
                <div className="flex justify-between"><span className="text-[var(--color-muted)]">Dải độ tối ưu:</span><span className="font-bold text-heading">Trên 7.00D</span></div>
              </div>
              <p className="text-xs text-[var(--color-muted)]">Mép kính mỏng phẳng hoàn hảo, thích hợp người cận nặng mong muốn tính thẩm mỹ tối đa.</p>
            </div>
          </div>
        </section>
      </div>

      {/* Section 6: Contact CTA */}
      <ContactCTA />
    </div>
  );
}
