import { Product } from './product-types';

export interface FilterState {
  category: string;
  refractiveIndex: string;
  technology: string;
  search: string;
}

export function filterProducts(products: Product[], filters: FilterState): Product[] {
  return products.filter((product) => {
    // Category filter
    if (filters.category && filters.category !== 'all') {
      if (!product.categoryIds.includes(filters.category as any)) {
        return false;
      }
    }

    // Refractive index filter
    if (filters.refractiveIndex && filters.refractiveIndex !== 'all') {
      if (!product.refractiveIndex?.includes(filters.refractiveIndex)) {
        return false;
      }
    }

    // Technology filter
    if (filters.technology && filters.technology !== 'all') {
      if (!product.technologyIds.includes(filters.technology)) {
        return false;
      }
    }

    // Search query
    if (filters.search.trim()) {
      const q = filters.search.toLowerCase().trim();
      const matchName = product.name.toLowerCase().includes(q);
      const matchDesc = product.shortDescription.toLowerCase().includes(q);
      const matchSku = product.specifications.sku?.toLowerCase().includes(q);
      const matchIndex = product.refractiveIndex?.toLowerCase().includes(q);

      if (!matchName && !matchDesc && !matchSku && !matchIndex) {
        return false;
      }
    }

    return true;
  });
}
