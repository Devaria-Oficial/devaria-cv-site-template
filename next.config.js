/** @type {import('next').NextConfig} */
const path = require('path')
const nextConfig = {
  trailingSlash: true,
  reactStrictMode: false,
  basePath: process.env.NODE_ENV === 'development' ? '' : '',
  async rewrites() {
    return [
      {
        source: '/blogpost/:slug',
        destination: '/blogpost/:slug', // The :path parameter isn't used here so will be automatically passed in the query
      },
    ]
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  pageExtensions: ['pages.ts', 'tsx']
}
module.exports = nextConfig