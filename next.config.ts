import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // output: 'export',
  // 本番環境のみ設定（basePath)
  // basePath: '/cafe-app',
  eslint: {
    ignoreDuringBuilds: true,
  },
};
export default nextConfig;
