import path from "path";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  cacheHandler: path.resolve('./cache-handler.mjs'),
  // Nginx will do gzip compression. We disable
  // compression here so we can prevent buffering
  // streaming responses
  compress: false,
  env: {
    NEXT_PUBLIC_REDIS_INSIGHT_URL:
      process.env.REDIS_INSIGHT_URL ?? "http://localhost:8001",
  },
};

export default nextConfig;
