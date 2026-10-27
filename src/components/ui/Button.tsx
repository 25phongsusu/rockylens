'use client';

import React from 'react';
import Link from 'next/link';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'b2b';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  isExternal?: boolean;
  className?: string;
  children: React.ReactNode;
}

export default function Button({
  variant = 'primary',
  size = 'md',
  href,
  isExternal = false,
  className = '',
  children,
  disabled,
  type = 'button',
  ...rest
}: ButtonProps) {
  const sizeClasses = {
    sm: 'px-4 py-2 text-xs font-semibold rounded-full',
    md: 'px-6 py-3 text-sm sm:text-base font-bold rounded-full',
    lg: 'px-8 py-3.5 text-base sm:text-lg font-bold rounded-full',
  }[size];

  const variantClass = {
    primary: 'button-primary',
    secondary: 'button-secondary',
    b2b: 'button-b2b',
  }[variant];

  const combinedClass = `${variantClass} ${sizeClasses} ${className}`.trim();

  if (href) {
    if (isExternal || href.startsWith('http') || href.startsWith('tel:') || href.startsWith('mailto:')) {
      return (
        <a
          href={href}
          className={combinedClass}
          target={isExternal || href.startsWith('http') ? '_blank' : undefined}
          rel={isExternal || href.startsWith('http') ? 'noopener noreferrer' : undefined}
        >
          {children}
        </a>
      );
    }

    return (
      <Link href={href} className={combinedClass}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      disabled={disabled}
      className={combinedClass}
      {...rest}
    >
      {children}
    </button>
  );
}
