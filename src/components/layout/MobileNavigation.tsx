'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronRight, Phone, Mail, FileText, ArrowRight } from 'lucide-react';
import { mainNavigation } from '@/config/navigation';
import { siteConfig } from '@/config/site';

export default function MobileNavigation() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleOpen = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <div className="lg:hidden">
      {/* Hamburger Button */}
      <button
        type="button"
        onClick={toggleOpen}
        aria-label={isOpen ? 'Đóng menu' : 'Mở menu điều hướng'}
        aria-expanded={isOpen}
        className="p-2.5 rounded-lg text-slate-700 hover:text-[#0B7B8A] hover:bg-slate-100 transition-colors focus:outline-none focus:ring-2 focus:ring-[#0B7B8A]"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs z-40 transition-opacity"
          onClick={closeMenu}
          aria-hidden="true"
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 bottom-0 w-[85%] max-w-sm bg-white z-50 shadow-2xl flex flex-col transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Drawer Header */}
        <div className="p-5 border-b border-slate-100 flex items-center justify-between bg-slate-50">
          <Link href="/" onClick={closeMenu} className="flex items-center space-x-2">
            <span className="text-xl font-bold tracking-tight text-[#0B7B8A]">ROCKY LENS</span>
            <span className="text-xs font-semibold px-2 py-0.5 rounded bg-teal-100 text-[#0B7B8A]">B2B Đại Lý</span>
          </Link>
          <button
            onClick={closeMenu}
            aria-label="Đóng menu"
            className="p-2 text-slate-500 hover:text-slate-800 rounded-md hover:bg-slate-200 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation Items */}
        <nav className="flex-1 overflow-y-auto p-4 space-y-1">
          {mainNavigation.map((item) => {
            const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href));
            return (
              <div key={item.href} className="py-1">
                <Link
                  href={item.href}
                  onClick={closeMenu}
                  className={`flex items-center justify-between px-3.5 py-3 rounded-lg font-medium text-base transition-colors ${
                    isActive
                      ? 'bg-teal-50 text-[#0B7B8A] font-semibold'
                      : 'text-slate-700 hover:bg-slate-50 hover:text-[#0B7B8A]'
                  }`}
                >
                  <span>{item.title}</span>
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                </Link>
                {/* Sub-items if any */}
                {item.children && (
                  <div className="pl-4 pr-1 py-1 space-y-0.5 border-l-2 border-slate-100 ml-4 mt-1">
                    {item.children.slice(0, 4).map((sub) => (
                      <Link
                        key={sub.href}
                        href={sub.href}
                        onClick={closeMenu}
                        className="block px-3 py-2 text-xs text-slate-600 hover:text-[#0B7B8A] rounded hover:bg-slate-50"
                      >
                        {sub.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        {/* Drawer Footer Actions */}
        <div className="p-4 border-t border-slate-100 bg-slate-50 space-y-2.5">
          <a
            href={siteConfig.zalo.url}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center space-x-2 py-2.5 px-4 bg-[#0B7B8A] text-white rounded-lg text-sm font-medium hover:bg-[#096370] shadow-xs transition-colors"
          >
            <span>Zalo Tiếp Nhận Đại Lý</span>
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href={`tel:${siteConfig.phones.hotline}`}
            className="w-full flex items-center justify-center space-x-2 py-2.5 px-4 bg-white border border-slate-200 text-slate-700 rounded-lg text-sm font-medium hover:border-[#0B7B8A] hover:text-[#0B7B8A] transition-colors"
          >
            <Phone className="w-4 h-4 text-[#0B7B8A]" />
            <span>Hotline B2B: {siteConfig.phones.hotlineDisplay}</span>
          </a>
        </div>
      </div>
    </div>
  );
}
