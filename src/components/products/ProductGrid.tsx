import React from 'react';
import { Product } from '@/features/products/product-types';
import ProductCard from './ProductCard';

interface ProductGridProps {
  products: Product[];
  emptyMessage?: string;
}

export default function ProductGrid({
  products,
  emptyMessage = 'Không tìm thấy sản phẩm nào phù hợp với bộ lọc hiện tại.',
}: ProductGridProps) {
  if (products.length === 0) {
    return (
      <div className="text-center py-16 px-4 bg-slate-50 rounded-2xl border border-dashed border-slate-200">
        <p className="text-sm text-slate-500">{emptyMessage}</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
