/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
  webpack(config){
    config.resolve.alias['@adminapp'] = path.join(__dirname, './adminapp/src');
    config.resolve.alias['@vinstacore'] = path.join(__dirname, './vinstacore/src');
    config.resolve.alias['@storefront'] = path.join(__dirname, './storefront/src');
    config.resolve.alias['@pages'] = path.join(__dirname, './pages');
    return config;
  },
   
  // experimental : {
   
    
  //   cache: false,
  //   modularizeImports: {
     
  //     '@mui/material': {
  //       transform: '@mui/material/{{member}}'
  //     },
      
  //     '@mui/icons-material/?(((\\w*)?/?)*)': {
  //       transform: '@mui/icons-material/{{ matches.[1] }}/{{member}}'
  //     }
  //   }
  
  // generateEtags: false,

  reactStrictMode: true,
  images: {
    domains: ['images.freeimages.com'],
  },
}

module.exports = nextConfig
