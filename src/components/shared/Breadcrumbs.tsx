import React from 'react';
import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';
import { breadcrumbSchema } from '@/lib/seo/structured-data';

export interface BreadcrumbItem {
  label: string;
  href: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  const allItems = [{ label: 'Trang chủ', href: '/' }, ...items];

  const jsonLd = breadcrumbSchema(
    allItems.map((i) => ({ name: i.label, url: i.href }))
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <nav aria-label="Breadcrumb" className="py-3 px-4 sm:px-6 bg-slate-50/90 dark:bg-black/20 backdrop-blur-md border-b border-slate-200/80 dark:border-white/10">
        <div className="max-w-7xl mx-auto flex items-center space-x-2 text-xs text-slate-600 dark:text-slate-300 overflow-x-auto whitespace-nowrap">
          <Link
            href="/"
            className="inline-flex items-center space-x-1 hover:text-sky-600 dark:hover:text-white transition-colors"
          >
            <Home className="w-3.5 h-3.5" />
            <span className="sr-only">Trang chủ</span>
          </Link>

          {items.map((item, index) => {
            const isLast = index === items.length - 1;
            return (
              <React.Fragment key={item.href}>
                <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                {isLast ? (
                  <span className="text-slate-900 dark:text-white font-bold truncate max-w-xs sm:max-w-md">
                    {item.label}
                  </span>
                ) : (
                  <Link
                    href={item.href}
                    className="hover:text-sky-600 dark:hover:text-white transition-colors truncate"
                  >
                    {item.label}
                  </Link>
                )}
              </React.Fragment>
            );
          })}
        </div>
      </nav>
    </>
  );
}
