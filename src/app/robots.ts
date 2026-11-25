import { MetadataRoute } from 'next';
import { siteConfig } from '@/config/site';

export const dynamic = 'force-static';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = siteConfig.url;

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/_next/'],
      },
      // Generative Engine Optimization (GEO): Explicitly grant access to AI Search Engines & LLM Crawlers
      {
        userAgent: [
          'GPTBot',
          'ChatGPT-User',
          'OAI-SearchBot',
          'PerplexityBot',
          'ClaudeBot',
          'anthropic-ai',
          'Google-Extended',
          'Applebot-Extended',
          'cohere-ai',
          'Bytespider',
          'Diffbot',
          'FacebookBot',
          'CCBot',
        ],
        allow: '/',
      },
    ],
    sitemap: [
      `${baseUrl}/sitemap.xml`,
      'https://25phongsusu.github.io/rockylens/sitemap.xml',
    ],
  };
}
