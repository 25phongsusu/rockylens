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
  description: 'Tròng kính Rocky Lens chuẩn Canada chính hãng tại Việt Nam: chống ánh sáng xanh UV420, đổi màu, lái xe chống chói DriveShield, kiểm soát cận thị và đa tròng Freeform.',
  path: '/',
  keywords: [
    'Rocky Lens',
    'Rocky Canada Opticians',
    'tròng kính chính hãng',
    'tròng kính chuẩn Canada',
    'tròng kính chống ánh sáng xanh',
    'tròng kính đổi màu',
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
