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
      <section className="bg-gradient-to-r from-[#050E10] via-[#081B22] to-[#0A2631] text-white py-14 px-4 sm:px-6 relative overflow-hidden">
        <div className="absolute right-0 top-0 w-96 h-96 bg-[#0B7B8A]/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <span className="inline-block text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-3 bg-[#0B7B8A]/20 text-teal-300 border border-[#0B7B8A]/40">
            Catalogue Sản Phẩm Chính Hãng
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight">
            Danh Mục Tròng Kính Quang Học
          </h1>
          <p className="mt-3 text-slate-300 text-sm sm:text-base max-w-3xl leading-relaxed">
            Hệ sinh thái sản phẩm toàn diện cho đại lý kính mắt và người tiêu dùng. Cam kết 100% phôi vật liệu đạt chuẩn quang học, ứng dụng công nghệ phay Freeform 3D và lớp váng phủ chân không đa tầng.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <Suspense fallback={<div className="text-center py-12 text-slate-500">Đang tải catalogue sản phẩm...</div>}>
          <ProductCatalogView initialProducts={products} />
        </Suspense>

        {/* Section 5: Giải Thích Nhanh Các Nhóm Tròng Kính */}
        <section className="mt-20 pt-12 border-t border-slate-200">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
              Hướng Dẫn Nhanh Các Nhóm Tròng Kính
            </h2>
            <p className="text-slate-600 text-sm mt-1">
              Tìm hiểu tổng quan công năng và đối tượng sử dụng của từng dòng tròng mắt kính chính.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {CATEGORIES.map((cat) => (
              <div key={cat.id} className="bg-white rounded-xl p-5 border border-slate-200 shadow-xs">
                <h3 className="font-bold text-slate-900 text-sm mb-2 text-[#0B7B8A]">
                  {cat.name}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {cat.description}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Section 6: Contact CTA */}
      <ContactCTA
        title="Bạn Cần Báo Giá Đại Lý Hoặc Tư Vấn Kỹ Thuật Tròng Kính?"
        description="Đội ngũ chuyên viên Rocky Lens hỗ trợ gửi bảng thông số chi tiết, giải pháp lắp ráp gọng khoan và báo giá đại lý trong vòng 15 phút."
      />
    </div>
  );
}
