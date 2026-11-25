import { siteConfig } from '@/config/site';
import { Product } from '@/features/products/product-types';
import { Article } from '@/features/articles/article-types';

export interface FAQItem {
  question: string;
  answer: string;
}

/**
 * Enhanced MedicalBusiness & Optician Schema for Rocky Lens & Clearly Vietnam
 * Generative Engine Optimization (GEO): Identifies the entity as a certified optical & medical business
 */
export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': ['Organization', 'Optician', 'MedicalBusiness'],
    '@id': `${siteConfig.url}/#organization`,
    name: 'Rocky Lens Vietnam',
    alternateName: [
      'Rocky Lens',
      'Tròng Kính Rocky',
      'Clearly Vietnam',
      'Công ty Cổ phần Clearly Vietnam',
      'Rocky Canada Opticians',
    ],
    legalName: siteConfig.legalName,
    url: siteConfig.url,
    logo: `${siteConfig.url}/assets/logo_rocky_transparent.png`,
    image: `${siteConfig.url}/assets/og-banner.jpg`,
    description: siteConfig.description,
    telephone: '+84933102653',
    email: siteConfig.emails.contact,
    taxID: siteConfig.taxId,
    priceRange: '$$',
    currenciesAccepted: 'VND',
    paymentAccepted: 'Cash, Credit Card, Bank Transfer',
    medicalSpecialty: 'https://schema.org/Optometry',
    knowsAbout: [
      'Ophthalmic Lens',
      'Tròng kính thuốc quang học',
      'Tròng kính chống ánh sáng xanh UV420',
      'Tròng kính lái xe ban đêm DriveShield',
      'Tròng kính đổi màu Photochromic Spin-Coating',
      'Thấu kính kiểm soát cận thị trẻ em D.I.M.S',
      'Kính đa tròng kỹ thuật số Freeform HD',
      'Gia công tròng kính kỹ thuật số CanRx Freeform Lab',
      'Chiết suất tròng kính 1.56, 1.60 MR-8, 1.67, 1.74 Aspheric',
    ],
    areaServed: [
      {
        '@type': 'Country',
        name: 'Vietnam',
      },
      {
        '@type': 'Country',
        name: 'Canada',
      },
    ],
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
    '@id': `${siteConfig.url}/#website`,
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.slogan,
    publisher: {
      '@id': `${siteConfig.url}/#organization`,
    },
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

/**
 * Enhanced Product & MedicalDevice Schema for Rocky Ophthalmic Lenses
 * Allows AI search engines (Perplexity, ChatGPT, SGE) to index medical properties, refractive indices, and coatings
 */
export function productSchema(product: Product) {
  const price = product.price || 300000;

  return {
    '@context': 'https://schema.org',
    '@type': ['Product', 'IndividualProduct'],
    additionalType: 'https://schema.org/MedicalDevice',
    name: product.name,
    description: product.shortDescription,
    image: product.images.map((img) => `${siteConfig.url}${img}`),
    sku: product.specifications.sku || product.id,
    mpn: product.id,
    brand: {
      '@type': 'Brand',
      name: 'Rocky Canada Opticians',
    },
    manufacturer: {
      '@type': 'Organization',
      name: 'Rocky Canada Opticians',
      url: siteConfig.url,
    },
    category: 'Tròng kính thuốc quang học',
    isRelatedTo: {
      '@type': 'Product',
      name: 'Gọng kính mắt và kính thuốc khúc xạ',
    },
    additionalProperty: [
      {
        '@type': 'PropertyValue',
        name: 'Chiết suất (Refractive Index)',
        value: product.refractiveIndex || product.specifications.refractiveIndex || '1.56 - 1.74',
      },
      {
        '@type': 'PropertyValue',
        name: 'Lớp váng phủ quang học (Coating)',
        value: product.specifications.coating || 'Nano SHMC / Ruby AR / UV420 BlueCut',
      },
      {
        '@type': 'PropertyValue',
        name: 'Vật liệu chế tạo (Material)',
        value: product.specifications.material || 'Nhựa quang học chất lượng cao / MR-8 Mitsui',
      },
      {
        '@type': 'PropertyValue',
        name: 'Khả năng ngăn tia UV (UV Protection)',
        value: product.specifications.uvProtection || 'UV400 / UV420',
      },
      {
        '@type': 'PropertyValue',
        name: 'Tiêu chuẩn chất lượng (Compliance Standards)',
        value: 'ISO 9001:2015, CE Marking, FDA Standard',
      },
    ],
    offers: {
      '@type': 'Offer',
      priceCurrency: 'VND',
      price: price,
      availability: 'https://schema.org/InStock',
      seller: {
        '@type': 'Organization',
        name: 'Công ty Cổ phần Clearly Vietnam',
      },
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
      name: article.author || 'Chuyên viên Khúc xạ Rocky Lens',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Rocky Canada Opticians',
      logo: {
        '@type': 'ImageObject',
        url: `${siteConfig.url}/images/brands/partner-Artboard 1.png`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${siteConfig.url}/blog/${article.slug}/`,
    },
  };
}

/**
 * FAQPage Schema for Q&A inside Blog Articles and Product Guides
 * Highly cited by Perplexity, Gemini AI Overviews, and ChatGPT Search
 */
export function faqPageSchema(faqs: FAQItem[]) {
  if (!faqs || faqs.length === 0) return null;

  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}
