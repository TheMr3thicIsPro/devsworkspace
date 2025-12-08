import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Optimize for edge environments like Cloudflare Pages
  turbopack: {}, // Enable Turbopack without custom webpack config
  // Reduce image optimization overhead
  images: {
    unoptimized: true, // Skip image optimization to reduce bundle size
  },
};

export default nextConfig;
