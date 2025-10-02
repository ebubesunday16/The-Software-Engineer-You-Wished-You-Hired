import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */


  typescript: {
    ignoreBuildErrors: true,
  },

  eslint: {
    ignoreDuringBuilds: true,
  },

  experimental: {
    turbo: {
      rules: {
        '*.svg': {
          loaders: ['@svgr/webpack'],
          as: '*.js',
        }
      }
    }
  }
};

export default nextConfig;
