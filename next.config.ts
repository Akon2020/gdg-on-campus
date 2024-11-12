import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  typescript: {
    ignoreBuilErrors: true,
  }
};

export default nextConfig;
