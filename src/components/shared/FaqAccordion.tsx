import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { FAQItem, faqPageSchema } from '@/lib/seo/structured-data';

interface FaqAccordionProps {
  items: FAQItem[];
  /** Injects Schema.org FAQPage JSON-LD script for SEO/GEO when true (default: true). */
  includeSchema?: boolean;
  /** Visual style preset matching existing Blog or Technology/Lab pages. */
  variant?: 'blog' | 'card';
}

/**
 * Reusable accessible FAQ accordion with optional FAQPage JSON-LD structured data.
 */
export default function FaqAccordion({
  items,
  includeSchema = true,
  variant = 'card',
}: FaqAccordionProps) {
  if (!items || items.length === 0) {
    return null;
  }

  const schema = includeSchema ? faqPageSchema(items) : null;

  return (
    <>
      {schema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      )}

      <div className="space-y-3">
        {items.map((faq, idx) =>
          variant === 'blog' ? (
            <details
              key={idx}
              className="group rounded-2xl border border-slate-200/90 bg-slate-50/60 p-4 transition-all duration-200 open:bg-white open:shadow-xs open:border-[#BEE1EC]"
            >
              <summary className="flex items-center justify-between font-bold text-sm sm:text-base text-slate-800 cursor-pointer list-none select-none">
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#1D7E9A] shrink-0" />
                  <span>{faq.question}</span>
                </span>
                <span className="text-slate-400 group-open:rotate-180 transition-transform ml-2 shrink-0">
                  ▼
                </span>
              </summary>
              <p className="mt-3 pl-6 text-sm leading-relaxed text-slate-600 border-l-2 border-[#1D7E9A]/40 font-medium">
                {faq.answer}
              </p>
            </details>
          ) : (
            <details
              key={idx}
              className="group p-4 sm:p-5 rounded-2xl bg-white border border-[var(--color-border)]/70 shadow-2xs open:shadow-sm transition-all"
            >
              <summary className="font-bold text-heading text-sm sm:text-base cursor-pointer list-none flex items-center justify-between">
                <span>{faq.question}</span>
                <span className="text-[var(--color-primary)] font-black text-lg group-open:rotate-45 transition-transform duration-200">
                  +
                </span>
              </summary>
              <p className="mt-3 text-xs sm:text-sm text-brand-muted leading-relaxed pl-1">
                {faq.answer}
              </p>
            </details>
          )
        )}
      </div>
    </>
  );
}
