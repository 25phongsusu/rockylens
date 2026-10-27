'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Phone, Mail, ChevronDown, Award, Sparkles, ArrowRight } from 'lucide-react';
import { mainNavigation } from '@/config/navigation';
import { siteConfig } from '@/config/site';
import MobileNavigation from './MobileNavigation';

export default function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-40 w-full bg-white transition-shadow duration-200">
      {/* Top Utility Bar */}
      <div className="bg-[#050E10] text-slate-300 text-xs py-2 px-4 sm:px-6 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <span className="inline-flex items-center space-x-1.5 text-slate-300">
              <Award className="w-3.5 h-3.5 text-[#D97706]" />
              <span className="font-medium text-slate-200">Rocky Lens</span>
              <span className="hidden sm:inline text-slate-400">— Công nghệ Quang học Canada Opticians</span>
            </span>
          </div>

          <div className="flex items-center space-x-6">
            <a
              href={`tel:${siteConfig.phones.hotline}`}
              className="inline-flex items-center space-x-1.5 hover:text-white transition-colors"
            >
              <Phone className="w-3 h-3 text-[#0B7B8A]" />
              <span className="hidden sm:inline text-slate-400">Hotline:</span>
              <span className="font-semibold text-slate-200">{siteConfig.phones.hotlineDisplay}</span>
            </a>
            <a
              href={siteConfig.zalo.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center space-x-1 text-teal-400 hover:text-teal-300 transition-colors font-medium"
            >
              <span>Zalo Hợp Tác B2B</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div
        className={`border-b border-slate-100 ${
          isScrolled ? 'shadow-md shadow-slate-900/5' : ''
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#0B7B8A] to-[#050E10] flex items-center justify-center text-white font-black text-xl shadow-xs group-hover:scale-105 transition-transform">
              R
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-extrabold tracking-tight text-[#050E10] group-hover:text-[#0B7B8A] transition-colors leading-none">
                ROCKY LENS
              </span>
              <span className="text-[10px] tracking-wider uppercase font-semibold text-slate-500 mt-1">
                Canada Opticians
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {mainNavigation.map((item) => {
              const isActive =
                pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href));
              const hasDropdown = Boolean(item.children && item.children.length > 0);

              return (
                <div
                  key={item.href}
                  className="relative"
                  onMouseEnter={() => hasDropdown && setActiveDropdown(item.href)}
                  onMouseLeave={() => hasDropdown && setActiveDropdown(null)}
                >
                  <Link
                    href={item.href}
                    className={`inline-flex items-center space-x-1 px-3.5 py-2 rounded-lg text-sm font-medium transition-all ${
                      isActive
                        ? 'text-[#0B7B8A] bg-teal-50/70 font-semibold'
                        : 'text-slate-700 hover:text-[#0B7B8A] hover:bg-slate-50'
                    }`}
                  >
                    <span>{item.title}</span>
                    {hasDropdown && (
                      <ChevronDown
                        className={`w-4 h-4 text-slate-400 transition-transform ${
                          activeDropdown === item.href ? 'rotate-180 text-[#0B7B8A]' : ''
                        }`}
                      />
                    )}
                  </Link>

                  {/* Dropdown Menu */}
                  {hasDropdown && activeDropdown === item.href && (
                    <div className="absolute top-full left-0 w-72 bg-white rounded-xl shadow-xl border border-slate-100 p-2 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                      {item.children!.map((sub) => (
                        <Link
                          key={sub.href}
                          href={sub.href}
                          className="block p-2.5 rounded-lg hover:bg-teal-50/60 transition-colors group"
                        >
                          <div className="text-sm font-medium text-slate-800 group-hover:text-[#0B7B8A]">
                            {sub.title}
                          </div>
                          {sub.description && (
                            <div className="text-xs text-slate-500 line-clamp-1 mt-0.5">
                              {sub.description}
                            </div>
                          )}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          {/* Header Action CTA & Mobile Navigation */}
          <div className="flex items-center space-x-3">
            <Link
              href="/danh-cho-doi-tac/"
              className="hidden sm:inline-flex items-center space-x-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold bg-[#0B7B8A] text-white hover:bg-[#086370] shadow-xs hover:shadow transition-all"
            >
              <span>Nhận Báo Giá Đại Lý</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>

            <MobileNavigation />
          </div>
        </div>
      </div>
    </header>
  );
}
