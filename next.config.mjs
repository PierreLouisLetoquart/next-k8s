/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  cacheHandler: path.resolve('./cache-handler.mjs'),
  // Nginx will do gzip compression. We disable
  // compression here so we can prevent buffering
  // streaming responses
  compress: false,
};

export default nextConfig;
