import { Metadata } from 'next';
import { siteConfig } from '@/config/site';

interface MetadataProps {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
  keywords?: string[];
  noIndex?: boolean;
}

export function constructMetadata({
  title,
  description = siteConfig.description,
  path = '',
  image = '/images/banners/hero-banner.png',
  keywords = [
    'tròng kính rocky lens',
    'canada opticians',
    'tròng kính phân phối chính hãng',
    'tròng kính đơn tròng',
    'tròng kính đa tròng freeform',
    'tròng đổi màu photochromic',
    'tròng chống ánh sáng xanh uv420',
    'tròng lái xe driveshield',
    'đại lý tròng kính',
  ],
  noIndex = false,
}: MetadataProps = {}): Metadata {
  const fullTitle = title ? `${title} | ${siteConfig.name}` : `${siteConfig.name} - ${siteConfig.slogan}`;
  const canonicalUrl = `${siteConfig.url}${path.startsWith('/') ? path : `/${path}`}`;

  return {
    title: fullTitle,
    description,
    keywords,
    authors: [{ name: siteConfig.name, url: siteConfig.url }],
    creator: siteConfig.name,
    publisher: siteConfig.legalName,
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: fullTitle,
      description,
      url: canonicalUrl,
      siteName: siteConfig.name,
      images: [
        {
          url: image.startsWith('http') ? image : `${siteConfig.url}${image}`,
          width: 1200,
          height: 630,
          alt: fullTitle,
        },
      ],
      locale: 'vi_VN',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [image.startsWith('http') ? image : `${siteConfig.url}${image}`],
    },
    robots: noIndex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
          },
        },
  };
}
