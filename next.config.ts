import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  webpack: (config) => {
    config.externals = {
      bcrypt: 'commonjs bcrypt', // Ensures bcrypt is treated as a CommonJS module
    };
    return config;
  },
};

export default nextConfig;
