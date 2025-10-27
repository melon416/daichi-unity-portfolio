/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  basePath: process.env.NODE_ENV === 'production' ? '/daichi-unity-portfolio' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/daichi-unity-portfolio' : ''
}

module.exports = nextConfig
