import { Metadata } from 'next';
import { siteConfig } from '@/config/site';

interface MetadataProps {
  title?: string;
  description?: string;
  ogTitle?: string;
  ogDescription?: string;
  path?: string;
  canonicalPath?: string;
  image?: string;
  keywords?: string[];
  noIndex?: boolean;
}

export function constructMetadata({
  title,
  description = siteConfig.description,
  ogTitle,
  ogDescription,
  path = '',
  canonicalPath,
  image = '/assets/og-banner.jpg',
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
  const fullTitle = title
    ? (title.includes(siteConfig.name) ? title : `${title} | ${siteConfig.name}`)
    : `${siteConfig.name} - ${siteConfig.slogan}`;
  const effectiveOgTitle = ogTitle || fullTitle;
  const effectiveOgDescription = ogDescription || description;
  const targetPath = canonicalPath ?? path;
  const canonicalUrl = `${siteConfig.url}${targetPath.startsWith('/') ? targetPath : `/${targetPath}`}`;
  const absoluteImageUrl = image.startsWith('http')
    ? image
    : `${siteConfig.url}${image.startsWith('/') ? image : `/${image}`}`;

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
      title: effectiveOgTitle,
      description: effectiveOgDescription,
      url: canonicalUrl,
      siteName: siteConfig.name,
      images: [
        {
          url: absoluteImageUrl,
          width: 1200,
          height: 630,
          alt: effectiveOgTitle,
          type: 'image/jpeg',
        },
      ],
      locale: 'vi_VN',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: effectiveOgTitle,
      description: effectiveOgDescription,
      images: [absoluteImageUrl],
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
