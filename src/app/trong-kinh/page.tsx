import React from 'react';
import { Metadata } from 'next';
import CatalogPageShell from '@/components/products/CatalogPageShell';
import { constructMetadata } from '@/lib/seo/metadata';

export const metadata: Metadata = constructMetadata({
  title: 'Catalogue Tròng Kính Quang Học RockyLens Canada',
  description: 'Khám phá toàn bộ catalogue tròng kính đơn tròng, đa tròng Freeform, tròng đổi màu, kính lái xe và tròng kiểm soát cận thị phân phối bởi Rocky Lens Canada.',
  path: '/trong-kinh/',
});

export default function ProductsPage() {
  return <CatalogPageShell breadcrumbHref="/trong-kinh/" />;
}
