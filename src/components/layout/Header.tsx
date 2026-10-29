'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronRight, Phone, MessageSquare } from 'lucide-react';
import { mainNavigation } from '@/config/navigation';
import B2BQuoteModal from '@/components/common/B2BQuoteModal';

export default function Header() {
  const pathname = usePathname();
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isB2BModalOpen, setIsB2BModalOpen] = useState(false);

  React.useEffect(() => {
    const handler = () => setIsB2BModalOpen(true);
    window.addEventListener('open-b2b-modal', handler);
    (window as any).openB2BQuoteModal = handler;
    return () => {
      window.removeEventListener('open-b2b-modal', handler);
    };
  }, []);

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/' || pathname === '';
    return pathname.startsWith(href);
  };

  return (
    <>
      {/* TOP SLIM BAR: OFFICIAL IDENTITY & CONTACT (MATCHES HOME EXACTLY) */}
      <div className="bg-[var(--b2b-end)] text-white py-2.5 px-6 text-base">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="text-[var(--button-start)] font-semibold text-base">Rocky Lens Canada</span>
            <span className="text-slate-300 font-medium text-base hidden sm:inline">
              Phân phối độc quyền bởi Clearly Vietnam
            </span>
          </div>
          <div className="flex items-center gap-6 text-base font-medium">
            <a href="tel:0933102653" className="text-white hover:text-[var(--button-start)] transition-colors">
              Hotline B2B: 0933 102 653
            </a>
            <a
              href="https://zalo.me/0933102653"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--button-start)] hover:text-white transition-colors"
            >
              Zalo B2B Đại Lý
            </a>
          </div>
        </div>
      </div>

      {/* APPLE FLUID NAVIGATION: STICKY FROSTED GLASS (MATCHES HOME EXACTLY) */}
      <header className="sticky top-0 z-40 bg-[var(--site-bg-start)]/90 backdrop-blur-md border-b border-[var(--color-border)] transition-shadow">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between gap-6">
          
          {/* Brand Logo with Real Rocky Image (+30% size) */}
          <Link href="/" className="flex items-center gap-3 group">
            <img
              src="/assets/logo_rocky_transparent.png"
              alt="Rocky Lens Canada"
              className="h-12 sm:h-[52px] w-auto object-contain transition-transform group-hover:scale-105"
            />
          </Link>

          {/* Primary Multi-Page Navigation Items */}
          <nav className="hidden lg:flex items-center gap-8 text-base font-semibold text-slate-800">
            {mainNavigation.map((item) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`transition-colors ${
                    active ? 'text-[var(--color-primary)] font-bold' : 'hover:text-[var(--color-primary)]'
                  }`}
                >
                  {item.title}
                </Link>
              );
            })}
          </nav>

          {/* Action Button: Open B2B Dealer Quote Modal */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setIsB2BModalOpen(true)}
              className="button-primary hidden sm:inline-block px-5 py-2.5 rounded-full text-base transition-all text-center cursor-pointer shadow-xs hover:shadow-md active:scale-95"
            >
              Nhận Báo Giá Đại Lý
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              type="button"
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="lg:hidden p-2 rounded-xl text-slate-700 hover:bg-slate-200/60 transition-colors"
              aria-label="Menu"
            >
              {isMobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>

        {/* Mobile Navigation Drawer */}
        {isMobileOpen && (
          <div className="lg:hidden border-t border-[var(--color-border)] bg-[var(--site-bg-start)] px-6 py-5 space-y-4 shadow-xl">
            <nav className="flex flex-col space-y-3">
              {mainNavigation.map((item) => {
                const active = isActive(item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsMobileOpen(false)}
                    className={`flex items-center justify-between py-2 text-base font-semibold ${
                      active ? 'text-[var(--color-primary)] font-bold' : 'text-slate-800'
                    }`}
                  >
                    <span>{item.title}</span>
                    <ChevronRight className="w-4 h-4 text-slate-400" />
                  </Link>
                );
              })}
            </nav>

            <div className="pt-3 border-t border-[var(--color-border)] space-y-3">
              <button
                type="button"
                onClick={() => {
                  setIsMobileOpen(false);
                  setIsB2BModalOpen(true);
                }}
                className="button-primary w-full py-3 rounded-full text-base text-center transition-all cursor-pointer"
              >
                Nhận Báo Giá Đại Lý
              </button>
              <div className="flex items-center justify-around text-sm font-medium text-slate-600 pt-1">
                <a href="tel:0933102653" className="flex items-center gap-1.5 hover:text-[var(--color-primary)]">
                  <Phone className="w-4 h-4 text-[var(--color-primary)]" />
                  <span>Hotline B2B: 0933 102 653</span>
                </a>
                <a
                  href="https://zalo.me/0933102653"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-[var(--color-primary)] hover:text-[var(--color-primary-hover)]"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Zalo B2B Đại Lý</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* B2B Dealer Quote Modal */}
      <B2BQuoteModal
        isOpen={isB2BModalOpen}
        onClose={() => setIsB2BModalOpen(false)}
      />
    </>
  );
}
