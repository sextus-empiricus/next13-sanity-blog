/** @type {import('next').NextConfig} */
const nextConfig = {
   reactStrictMode: true,
   experimental: {
      appDir: true,
   },
   images: {
      domains: ['cdn.britannica.com', 'cdn.sanity.io'],
   },
};

module.exports = nextConfig;
