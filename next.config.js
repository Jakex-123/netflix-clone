/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
}
module.exports = nextConfig
module.exports =withTM( {
  images: {
    domains: ['image.tmdb.org','rb.gy'],
  },
});