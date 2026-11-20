import React from 'react';
import { Metadata } from 'next';
import CatalogPageShell from '@/components/products/CatalogPageShell';
import { constructMetadata } from '@/lib/seo/metadata';

export const metadata: Metadata = constructMetadata({
  title: 'Bảng Giá & Các Loại Tròng Kính Chính Hãng',
  description: 'Catalogue và bảng giá tròng kính Rocky Lens: đơn tròng, đa tròng Freeform, chống ánh sáng xanh UV420, đổi màu, lái xe ban đêm và kiểm soát cận thị.',
  path: '/san-pham/',
  canonicalPath: '/trong-kinh/',
  noIndex: true,
});

export default function SanPhamPage() {
  return <CatalogPageShell breadcrumbHref="/san-pham/" />;
}
