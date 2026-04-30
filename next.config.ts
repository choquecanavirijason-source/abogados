import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();
const isStaticExport = process.env.NEXT_OUTPUT_EXPORT === "true";

const nextConfig: NextConfig = {
  output: isStaticExport ? "export" : "standalone",
  compress: true,
  trailingSlash: true,
  poweredByHeader: false,
  reactCompiler: true,
  images: {
    unoptimized: true,
  },
  experimental: {
    optimizeCss: true,
  },
  

};

export default withNextIntl(nextConfig);
