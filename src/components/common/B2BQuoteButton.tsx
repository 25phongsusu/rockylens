'use client';

import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { openB2BQuoteModal } from './B2BQuoteModal';

interface B2BQuoteButtonProps {
  className?: string;
  children?: React.ReactNode;
  showIcon?: boolean;
}

export default function B2BQuoteButton({
  className = 'inline-flex items-center space-x-2 px-6 py-3.5 rounded-xl font-bold text-sm bg-[#0B7B8A] hover:bg-[#086370] text-white shadow-md shadow-[#0B7B8A]/20 transition-all cursor-pointer',
  children = 'Nhận Báo Giá Cho Đại Lý',
  showIcon = true,
}: B2BQuoteButtonProps) {
  return (
    <button
      type="button"
      onClick={openB2BQuoteModal}
      className={className}
    >
      <span>{children}</span>
      {showIcon && <ArrowUpRight className="w-4 h-4 shrink-0" />}
    </button>
  );
}
