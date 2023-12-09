/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  images: {
    domains: ["*"],
    formats: ["image/avif", "image/webp"],
  },
};

module.exports = nextConfig;
