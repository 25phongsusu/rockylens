import { siteConfig } from '@/config/site';
import { Product } from '@/features/products/product-types';
import { Article } from '@/features/articles/article-types';

export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    url: siteConfig.url,
    logo: `${siteConfig.url}/images/brands/partner-Artboard 1.png`,
    description: siteConfig.description,
    telephone: siteConfig.phones.hotlineDisplay,
    email: siteConfig.emails.contact,
    address: siteConfig.addresses.map((addr) => ({
      '@type': 'PostalAddress',
      streetAddress: addr.street,
      addressLocality: addr.city,
      addressCountry: 'VN',
    })),
    sameAs: [siteConfig.social.facebook].filter(Boolean),
  };
}

export function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.slogan,
  };
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${siteConfig.url}${item.url.startsWith('/') ? item.url : `/${item.url}`}`,
    })),
  };
}

export function productSchema(product: Product) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.shortDescription,
    image: product.images.map((img) => `${siteConfig.url}${img}`),
    sku: product.specifications.sku || product.id,
    brand: {
      '@type': 'Brand',
      name: siteConfig.name,
    },
    category: 'Tròng kính quang học',
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'VND',
      availability: 'https://schema.org/InStock',
    },
  };
}

export function articleSchema(article: Article) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.description,
    image: `${siteConfig.url}${article.coverImage}`,
    datePublished: article.publishedAt,
    dateModified: article.updatedAt || article.publishedAt,
    author: {
      '@type': 'Person',
      name: article.author,
    },
    publisher: {
      '@type': 'Organization',
      name: siteConfig.name,
      logo: {
        '@type': 'ImageObject',
        url: `${siteConfig.url}/images/brands/partner-Artboard 1.png`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${siteConfig.url}/kham-pha-trong-kinh/bai-viet/${article.slug}/`,
    },
  };
}
