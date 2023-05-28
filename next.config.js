/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
  webpack(config){
    config.resolve.alias['@adminapp'] = path.join(__dirname, './adminapp/src');
    config.resolve.alias['@vinstacore'] = path.join(__dirname, './vinstacore/src');
    config.resolve.alias['@storeapp'] = path.join(__dirname, './storeapp');
    config.resolve.alias['@pages'] = path.join(__dirname, './pages');

    
    return config;
  },
  reactStrictMode: true,
  images: {
    domains: ['images.freeimages.com'],
}
}

module.exports = nextConfig
