import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/locksmith-livingstone',
        destination: '/locksmith-livingston',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
