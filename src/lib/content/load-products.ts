import fs from 'fs';
import path from 'path';
import { Product, ProductStatus } from '@/features/products/product-types';

const PRODUCTS_DIRECTORY = path.join(process.cwd(), 'content', 'products');

export function getAllProducts(includeDrafts = false): Product[] {
  if (!fs.existsSync(PRODUCTS_DIRECTORY)) {
    return [];
  }

  const fileNames = fs.readdirSync(PRODUCTS_DIRECTORY);
  const products: Product[] = [];

  for (const fileName of fileNames) {
    if (!fileName.endsWith('.json')) continue;

    const fullPath = path.join(PRODUCTS_DIRECTORY, fileName);
    try {
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const product = JSON.parse(fileContents) as Product;

      if (includeDrafts || product.status === 'published') {
        products.push(product);
      }
    } catch (err) {
      console.error(`Error parsing product file ${fileName}:`, err);
    }
  }

  return products;
}

export function getProductBySlug(slug: string): Product | null {
  const products = getAllProducts(true);
  const found = products.find((p) => p.slug === slug);
  return found || null;
}

export function getProductById(id: string): Product | null {
  const products = getAllProducts(true);
  return products.find((p) => p.id === id) || null;
}

export function getRelatedProducts(product: Product, limit = 4): Product[] {
  const allProducts = getAllProducts(false);

  // Filter out the current product
  const others = allProducts.filter((p) => p.id !== product.id);

  // Rank by shared categories and technologies
  const ranked = others.map((p) => {
    let score = 0;
    const sharedCategories = p.categoryIds.filter((c) => product.categoryIds.includes(c));
    score += sharedCategories.length * 3;

    const sharedTech = p.technologyIds.filter((t) => product.technologyIds.includes(t));
    score += sharedTech.length * 2;

    if (p.refractiveIndex && p.refractiveIndex === product.refractiveIndex) {
      score += 1;
    }

    return { product: p, score };
  });

  ranked.sort((a, b) => b.score - a.score);
  return ranked.slice(0, limit).map((item) => item.product);
}
