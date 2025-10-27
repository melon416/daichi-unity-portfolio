/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  basePath: '/daichi-unity-portfolio',
  assetPrefix: '/daichi-unity-portfolio'
}

module.exports = nextConfig
