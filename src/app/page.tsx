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

      {/* SECTION 2 — BRAND PHILOSOPHY */}
      <BrandPhilosophy />

      {/* SECTION 3 — EXPLORE ROCKY LENSES */}
      <ProductCategories />

      {/* SECTION 4 — TECHNOLOGY & QUALITY */}
      <TechnologyHighlights />

      {/* SECTION 5 — WHY ROCKY */}
      <WhyRockySection />

      {/* SECTION 6 — PARTNER WITH ROCKY */}
      <PartnerSection />

      {/* SECTION 7 — BLOG & CUSTOMER INSIGHTS */}
      <BlogSection />
    </div>
  );
}
