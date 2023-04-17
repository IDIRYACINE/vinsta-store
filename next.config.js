/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
  webpack(config){
    config.resolve.alias['@admin'] = path.join(__dirname, './admin-panel/src');
    config.resolve.alias['@vinstacore'] = path.join(__dirname, './vinstacore/src');

    
    return config;
  },
  reactStrictMode: true,
}

module.exports = nextConfig
