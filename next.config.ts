import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  transpilePackages: ['three'],

};

module.exports = nextConfig
export default nextConfig;
