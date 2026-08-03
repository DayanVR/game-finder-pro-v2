import type { NextConfig } from 'next';
import withFlowbiteReact from 'flowbite-react/plugin/nextjs';

const nextConfig: NextConfig = {
  experimental: {
    viewTransition: true,
  },
  images: {
    remotePatterns: [new URL('https://images.igdb.com/**')],
  },
  reactStrictMode: true,
};

export default withFlowbiteReact(nextConfig);
