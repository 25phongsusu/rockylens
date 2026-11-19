import React from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import homeContent from '@/../content/home_content.json';
import { assetUrl } from '@/lib/utils';

export default function TechnologyHighlights() {
  const { technologies } = homeContent;

  return (
    <section id="cong-nghe" className="relative py-16 sm:py-20 px-6 bg-transparent overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl space-y-2">
          <div className="text-xs font-bold text-primary tracking-wider uppercase">
            {technologies.tag}
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-heading tracking-tight leading-[1.14]">
            {technologies.title}
          </h2>
          <p className="text-brand-muted text-sm sm:text-base leading-relaxed">
            {technologies.desc}
          </p>
        </div>

        {/* 3 Column Cards Grid */}
        <div className="w-full">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
            {technologies.cards.map((card, idx) => (
              <div
                key={idx}
                className="card-surface rounded-2xl overflow-hidden shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between border border-[var(--color-border)]/50 group bg-white"
              >
                <div>
                  <div className="aspect-[16/10] sm:aspect-[16/10] h-36 sm:h-40 w-full bg-slate-100 overflow-hidden relative">
                    <img
                      src={assetUrl(card.image)}
                      alt={card.title}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  <div className="p-4 sm:p-5 space-y-1.5">
                    <div className="text-[11px] font-bold text-primary tracking-wider uppercase">
                      {card.category}
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-heading leading-snug">
                      {card.title}
                    </h3>
                    <p className="text-brand-muted text-xs leading-relaxed line-clamp-2">
                      {card.desc}
                    </p>
                  </div>
                </div>

                <div className="p-4 sm:p-5 pt-0">
                  <Link
                    href={card.link}
                    className="text-xs sm:text-sm font-bold text-primary hover:text-[var(--color-primary-hover)] inline-flex items-center gap-1 group-hover:gap-2 transition-all"
                  >
                    <span>{card.linkText}</span>
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Centered CTA */}
        <div className="text-center pt-3">
          <Link
            href={technologies.bottomCTA.href}
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-primary hover:text-[var(--color-primary-hover)] transition-all group"
          >
            <span>{technologies.bottomCTA.text}</span>
            <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
