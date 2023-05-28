/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'rahmforcongress-payload-cloud.payloadcms.app',
        pathname: '/media/**',
      }
    ],
  },
}

module.exports = nextConfig
