import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ['84b4-105-127-16-244.ngrok-free.app'],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "picsum.photos",
      },
      {
        protocol: "https",
        hostname: "fastly.picsum.photos",
      },
    ],
  },
};

export default nextConfig;
