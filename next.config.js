const path = require('path')

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

const nextConfig = { 
  
  webpack(config){
  config.resolve.alias['@adminapp'] = path.join(__dirname, '/adminapp/src');
  config.resolve.alias['@vinstacore'] = path.join(__dirname, '/vinstacore/src');
  config.resolve.alias['@storefront'] = path.join(__dirname, '/storefront/src');
  return config;
},
  transpilePackages : ["@vinstastore/storefront","@vinstastore/vinstaadmin","@vinstastore/vinstacore"],
  modularizeImports: {
    
    "@mui/material": {
      transform: "@mui/material/{{member}}",
    },
    "@mui/icons-material": {
      transform: "@mui/icons-material/{{member}}",
    },
   
  },


  reactStrictMode: true,
  images: {
    domains: ['images.freeimages.com'],
  },

}

module.exports = withBundleAnalyzer(nextConfig)
