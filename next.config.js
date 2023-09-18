const path = require("path");

const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

const nextConfig = {
  webpack(config) {
    config.resolve.alias["@adminapp"] = path.join(__dirname, "/adminapp/src");
    config.resolve.alias["@vinstacore"] = path.join(
      __dirname,
      "/vinstacore/src"
    );
    config.resolve.alias["@storefront"] = path.join(
      __dirname,
      "/storefront/src"
    );

    if (Boolean(process.env.STATS)) {
      const { StatsWriterPlugin } = require("webpack-stats-plugin");

      config.plugins.push(
        new StatsWriterPlugin({
          filename: "../analyze/webpack-stats.json",
          stats: {
            assets: true,
            chunks: true,
            modules: true,
            chunkModules: true
          },

        })
      );


      const Visualizer = require('webpack-visualizer-plugin2');
      config.plugins.push(
        new Visualizer({
          filename: '../analyze/statistics.html'
        })
      );
    }

   

    return config;
  },
  transpilePackages: [
    "@vinstastore/storefront",
    "@vinstastore/vinstaadmin",
    "@vinstastore/vinstacore",
  ],
  modularizeImports: {
    "@mui/material": {
      transform: "@mui/material/{{member}}",
    },
    "@mui/icons-material": {
      transform: "@mui/icons-material/{{member}}",
    },
  },

  reactStrictMode: true,
  
};

module.exports = withBundleAnalyzer(nextConfig);
