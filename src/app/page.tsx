import React from 'react';
import type { Metadata } from 'next';
import { constructMetadata } from '@/lib/seo/metadata';
import HeroSection from '@/components/home/HeroSection';
import BrandPhilosophy from '@/components/home/BrandPhilosophy';
import ProductCategories from '@/components/home/ProductCategories';
import TechnologyHighlights from '@/components/home/TechnologyHighlights';
import WhyRockySection from '@/components/home/WhyRockySection';
import PartnerSection from '@/components/home/PartnerSection';
import BlogSection from '@/components/home/BlogSection';

export const metadata: Metadata = constructMetadata({
  title: 'Tròng Kính Chuẩn Canada • Giải Pháp Thị Lực Toàn Diện',
  description:
    'Tròng kính Rocky Lens chuẩn Canada - Giải pháp thị lực toàn diện: lọc ánh sáng xanh, đổi màu Trendy, lái xe đêm DriveShield, kiểm soát cận thị MyoControl.',
  ogDescription:
    'Thương hiệu tròng kính quang học Canada, phân phối độc quyền bởi Clearly Vietnam. Hotline B2B: 0933 102 653.',
  path: '/',
  image: '/assets/og-banner.jpg',
  keywords: [
    'tròng kính rocky lens',
    'tròng kính canada',
    'kính lái xe ban đêm',
    'tròng đổi màu',
    'tròng kiểm soát cận thị',
    'Rocky Lens',
    'Rocky Canada Opticians',
    'tròng kính chính hãng',
  ],
});

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-[var(--site-bg-start)]">
      {/* SECTION 1 — BRAND HERO */}
      <HeroSection />

      {/* SECTION 2 — EXPLORE ROCKY LENSES (SẢN PHẨM TRÒNG KÍNH) */}
      <ProductCategories />

      {/* SECTION 3 — BRAND PHILOSOPHY (HIỂU TỪNG NHU CẦU) */}
      <BrandPhilosophy />

      {/* SECTION 4 — TECHNOLOGY & QUALITY */}
      <TechnologyHighlights />

      {/* SECTION 5 — WHY ROCKY */}
      <WhyRockySection />

      {/* SECTION 6 — BLOG & CUSTOMER INSIGHTS */}
      <BlogSection />

      {/* SECTION 7 — PARTNER WITH ROCKY */}
      <PartnerSection />
    </div>
  );
}
