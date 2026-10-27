import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Layers, ShieldCheck, Sparkles } from 'lucide-react';
import { Product } from '@/features/products/product-types';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="group card-surface rounded-2xl hover:border-[var(--button-middle)] shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden">
      {/* Product Image & Badge */}
      <div className="relative aspect-4/3 bg-[var(--site-bg-start)] overflow-hidden border-b border-[var(--color-border)] flex items-center justify-center p-6">
        {product.badge && (
          <span className="absolute top-3 left-3 z-10 px-2.5 py-1 rounded-md text-[11px] font-bold tracking-wide uppercase bg-[var(--button-middle)] text-white shadow-xs">
            {product.badge}
          </span>
        )}

        {product.refractiveIndex && (
          <span className="absolute top-3 right-3 z-10 px-2 py-0.5 rounded-md text-[11px] font-bold bg-[var(--b2b-end)]/85 text-white backdrop-blur-xs">
            Index {product.refractiveIndex}
          </span>
        )}

        <div className="relative w-full h-full transition-transform duration-500 group-hover:scale-105 flex items-center justify-center">
          <Image
            src={product.featuredImage || product.images[0] || '/images/products/category-solution-1.png'}
            alt={product.name}
            fill
            className="object-contain p-2"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          {/* Tech labels / category tags */}
          <div className="flex flex-wrap gap-1.5 mb-2.5">
            {product.specifications.coating && (
              <span className="inline-flex items-center space-x-1 text-[11px] font-medium text-primary bg-[var(--site-bg-middle)]/40 px-2 py-0.5 rounded">
                <Sparkles className="w-3 h-3" />
                <span>{product.specifications.coating.split(' ')[0]}</span>
              </span>
            )}
            {product.specifications.material && (
              <span className="inline-flex items-center space-x-1 text-[11px] font-medium text-slate-600 bg-slate-100 px-2 py-0.5 rounded">
                <span>{product.specifications.material.split(' ')[0]}</span>
              </span>
            )}
          </div>

          {/* Title */}
          <h3 className="font-bold text-base text-heading group-hover:text-primary transition-colors line-clamp-2">
            <Link href={`/trong-kinh/${product.slug}/`}>
              {product.name}
            </Link>
          </h3>

          {/* Short Description */}
          <p className="mt-2 text-xs text-brand-muted line-clamp-2 leading-relaxed">
            {product.shortDescription}
          </p>
        </div>

        {/* Action Link (NO PRICE, NO CART) */}
        <div className="mt-5 pt-3.5 border-t border-slate-100 flex items-center justify-between">
          <span className="text-[11px] text-slate-400 font-medium">
            Mã: {product.specifications.sku || 'RL-STD'}
          </span>
          <Link
            href={`/trong-kinh/${product.slug}/`}
            className="inline-flex items-center space-x-1 text-xs font-semibold text-primary group-hover:text-[var(--color-primary-hover)] transition-colors"
          >
            <span>Xem Chi Tiết</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform ml-1" />
          </Link>
        </div>
      </div>
    </div>
  );
}
