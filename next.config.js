
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{
      protocol: 'http',
      hostname: 'localhost',
    },
    {
      protocol: 'http',
      hostname: '192.168.50.14',
    },
    {
      protocol: 'http',
      hostname: '127.0.0.1',
      port:'3000'
    },
    {
      protocol: 'http',
      hostname: '127.0.0.1',
      port:'3001'
    }
    ],
  },
}

module.exports = nextConfig
