import React from 'react';
import HeroSection from '@/components/home/HeroSection';
import ProductCategories from '@/components/home/ProductCategories';
import BrandPhilosophy from '@/components/home/BrandPhilosophy';
import TechnologyHighlights from '@/components/home/TechnologyHighlights';
import WhyRockySection from '@/components/home/WhyRockySection';
import FindStoreSection from '@/components/home/FindStoreSection';
import PartnerSection from '@/components/home/PartnerSection';

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* SECTION 1 — BRAND HERO */}
      <HeroSection />

      {/* SECTION 2 — EXPLORE ROCKY LENSES */}
      <ProductCategories />

      {/* SECTION 3 — BRAND PHILOSOPHY */}
      <BrandPhilosophy />

      {/* SECTION 4 — TECHNOLOGY & QUALITY */}
      <TechnologyHighlights />

      {/* SECTION 5 — WHY ROCKY */}
      <WhyRockySection />

      {/* SECTION 6 — FIND A STORE */}
      <FindStoreSection />

      {/* SECTION 7 — PARTNER WITH ROCKY */}
      <PartnerSection />
    </div>
  );
}
