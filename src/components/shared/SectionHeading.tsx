import React from 'react';

interface SectionHeadingProps {
  badge?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  dark?: boolean;
}

export default function SectionHeading({
  badge,
  title,
  description,
  align = 'center',
  dark = false,
}: SectionHeadingProps) {
  const isCenter = align === 'center';

  return (
    <div
      className={`max-w-3xl mb-12 ${
        isCenter ? 'mx-auto text-center' : 'text-left'
      }`}
    >
      {badge && (
        <span
          className={`inline-block text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-3 ${
            dark
              ? 'bg-[#0B7B8A]/20 text-teal-300 border border-[#0B7B8A]/40'
              : 'bg-teal-50 text-[#0B7B8A] border border-teal-200'
          }`}
        >
          {badge}
        </span>
      )}
      <h2
        className={`text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight leading-tight ${
          dark ? 'text-white' : 'text-slate-900'
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 text-sm sm:text-base leading-relaxed ${
            dark ? 'text-slate-400' : 'text-slate-600'
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
