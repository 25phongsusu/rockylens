import { getAllProducts, getProductBySlug, getRelatedProducts, getProductById } from '@/lib/content/load-products';
import { Product, LensCategory } from './product-types';

export {
  getAllProducts,
  getProductBySlug,
  getRelatedProducts,
  getProductById,
};

export function getProductsByCategory(category: LensCategory): Product[] {
  const products = getAllProducts();
  return products.filter((p) => p.categoryIds.includes(category));
}

export function getProductsByTechnology(techId: string): Product[] {
  const products = getAllProducts();
  return products.filter((p) => p.technologyIds.includes(techId));
}

export function getFeaturedProducts(limit = 6): Product[] {
  const products = getAllProducts();
  return products.slice(0, limit);
}
