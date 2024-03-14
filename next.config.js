
/** @type {import('next').NextConfig} */

const withPwa = require('next-pwa')({
  dest:'public',
  cacheOnFrontEndNav:true,
  reloadOnOnline:true,
  disable:process.env.NODE_ENV === "development",
  // disable:false,
  swSrc:'/service-worker.js',
  })
const nextConfig = {
  images: {
    remotePatterns: [{
      protocol: 'http',
      hostname: 'localhost',
    },
    {
      protocol: 'http',
      hostname: '192.168.50.14',
      port:'3000'
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
    },
    {
      protocol: 'http',
      hostname: '192.168.171.25',
      port:'3000'
    }
    ],
  },
  // async rewrites() {
  //   return [
  //     {
  //       source: '/api/:path*',
  //       destination: 'http://192.168.50.14:3000/api/:path*',
  //     },
  //   ];
  // },
}

// module.exports = nextConfig

module.exports = withPwa(nextConfig);
