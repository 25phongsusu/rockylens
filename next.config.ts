import type { NextConfig } from 'next';

const isProd = process.env.NODE_ENV === 'production';
const basePath = isProd ? (process.env.NEXT_PUBLIC_BASE_PATH ?? '/rockylens') : '';

const nextConfig: NextConfig = {
  output: 'export',
  basePath: basePath || undefined,
  assetPrefix: basePath || undefined,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
