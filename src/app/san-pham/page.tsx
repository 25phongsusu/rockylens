import React from 'react';
import { Metadata } from 'next';
import CatalogPageShell from '@/components/products/CatalogPageShell';
import { constructMetadata } from '@/lib/seo/metadata';

export const metadata: Metadata = constructMetadata({
  title: 'Sản Phẩm Tròng Kính — Rocky Lens Canada',
  description: 'Khám phá catalogue tròng kính lọc ánh sáng xanh, đổi màu thông minh, chống UV420 và kiểm soát cận thị Rocky Lens Canada.',
  path: '/san-pham/',
});

export default function SanPhamPage() {
  return <CatalogPageShell breadcrumbHref="/san-pham/" />;
}
