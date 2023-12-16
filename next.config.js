/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'tailwindui.com',
        port: '',
        pathname: '**'
      },
      {
        protocol: 'https',
        hostname: 'github.com',
        port: '',
        pathname: '**'
      }
    ]
  }
}

module.exports = nextConfig
