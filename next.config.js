/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = nextConfig
module.exports = {
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  images: {
    domains: ['image.tmdb.org','rb.gy','localhost:3000','image.tmdb.org/t/p','image.tmdb.org/t/p/original','www.youtube.com'],
  },
};