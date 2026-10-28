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
  title: 'Rocky Lens - Nhà phân phối tròng kính từ Canada',
  description: 'Rocky Lens – Trung tâm phân phối tròng kính B2B & gia công Lab công nghệ quốc tế tại Việt Nam. Cung cấp sỉ tròng cận, đổi màu, chống ánh sáng xanh cho cửa hàng kính.',
  path: '/',
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
