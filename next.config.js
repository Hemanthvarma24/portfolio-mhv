/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, // Ensures better debugging and performance
  swcMinify: true, // Enables faster builds with SWC compiler
  output: "export", // Ensures the project is statically exported
  trailingSlash: true, // Adds a trailing slash to URLs for static hosting compatibility
  eslint: {
    ignoreDuringBuilds: true, // Prevents ESLint errors from breaking the build
  },
  images: {
    unoptimized: true, // Ensures images work properly in static exports
  },
  experimental: {
    optimizeCss: true, // Improves CSS performance
  },
  webpack: (config) => {
    config.resolve.fallback = { fs: false }; // Prevents issues with modules requiring 'fs'
    return config;
  },
};

module.exports = nextConfig;
