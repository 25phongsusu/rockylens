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
              ? 'bg-[var(--button-middle)]/20 text-[var(--button-start)] border border-[var(--button-middle)]/40'
              : 'bg-[var(--site-bg-middle)]/50 text-[var(--color-primary)] border border-[var(--color-border)]'
          }`}
        >
          {badge}
        </span>
      )}
      <h2
        className={`text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight leading-tight ${
          dark ? 'text-white' : 'text-heading'
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 text-sm sm:text-base leading-relaxed ${
            dark ? 'text-slate-300' : 'text-brand-muted'
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
