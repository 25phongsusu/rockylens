import React from 'react';
import HeroSection from '@/components/home/HeroSection';
import ProductCategories from '@/components/home/ProductCategories';
import TechnologyHighlights from '@/components/home/TechnologyHighlights';
import EducationPreview from '@/components/home/EducationPreview';
import PartnerSection from '@/components/home/PartnerSection';
import ContactSection from '@/components/home/ContactSection';
import { getAllArticles } from '@/features/articles/article-service';

export default function HomePage() {
  const articles = getAllArticles();

  return (
    <div className="flex flex-col min-h-screen">
      {/* Section 01: Hero Banner (Integrated Trust & Metrics) */}
      <HeroSection />

      {/* Section 02: Danh Mục Tròng Kính (3 cards per row with hover specs) */}
      <ProductCategories />

      {/* Section 03: Công Nghệ Nổi Bật */}
      <TechnologyHighlights />

      {/* Section 04: Khám Phá & Hiểu Về Tròng Kính (B2C Focus) */}
      <EducationPreview articles={articles} />

      {/* Section 05: Giải Pháp Dành Cho Đối Tác (B2B Focus) */}
      <PartnerSection />

      {/* Section 06: Liên Hệ Và Kết Nối */}
      <ContactSection />
    </div>
  );
}
