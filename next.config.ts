import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Allow SVGs served from the public folder to pass through next/image unoptimized
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    remotePatterns: [
      {
        protocol: "https",
        hostname: "placehold.co",
      },
    ],
  },
};

export default nextConfig;
