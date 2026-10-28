import React from 'react';
import HeroSection from '@/components/home/HeroSection';
import BrandPhilosophy from '@/components/home/BrandPhilosophy';
import ProductCategories from '@/components/home/ProductCategories';
import TechnologyHighlights from '@/components/home/TechnologyHighlights';
import WhyRockySection from '@/components/home/WhyRockySection';
import PartnerSection from '@/components/home/PartnerSection';
import BlogSection from '@/components/home/BlogSection';

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
