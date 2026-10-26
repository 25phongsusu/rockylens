'use client';

import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'next/navigation';
import { Product } from './product-types';
import { FilterState, filterProducts } from './product-filters';
import ProductFilters from '@/components/products/ProductFilters';
import ProductGrid from '@/components/products/ProductGrid';

interface ProductCatalogViewProps {
  initialProducts: Product[];
}

export default function ProductCatalogView({ initialProducts }: ProductCatalogViewProps) {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get('category') || 'all';
  const initialTech = searchParams.get('tech') || 'all';

  const [filters, setFilters] = useState<FilterState>({
    category: initialCategory,
    refractiveIndex: 'all',
    technology: initialTech,
    search: '',
  });

  const filteredProducts = useMemo(() => {
    return filterProducts(initialProducts, filters);
  }, [initialProducts, filters]);

  return (
    <div className="space-y-8">
      {/* Interactive Filters Bar */}
      <ProductFilters
        filters={filters}
        onFilterChange={setFilters}
        totalResults={filteredProducts.length}
      />

      {/* Filtered Grid */}
      <ProductGrid products={filteredProducts} />
    </div>
  );
}
