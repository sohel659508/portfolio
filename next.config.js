/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['192.168.130.226', 'mrsohelrana.com'], // Add your IP or domain
  },
}

module.exports = nextConfig;
