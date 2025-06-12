import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [{ hostname: 'cms.automicus.com' }],
  },
};

export default nextConfig;
