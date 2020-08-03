'use strict';
const path = require('path');
module.exports = {
  publicPath: '/',
  outputDir: 'dist',
  assetsDir: 'static',
  lintOnSave: false,
  //show Sources
  productionSourceMap: false,
  devServer: {
    port: 9521,
    open: false,
    overlay: {
      warnings: false,
      errors: false
    },
  },
  configureWebpack: {
    name: 'MosserNote',
    resolve: {
      alias: {
        '@': path.join(__dirname, 'src'),
      }
    }
  },
  chainWebpack(config) {
    // config.plugin('webpack-bundle-analyzer').use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin)
  },
  pwa: {
    manifestOptions: {
      icons: [],
    },
    iconPaths: {
      favicon32: 'test.ico',
      favicon16: 'test.ico',
      appleTouchIcon: 'test.ico',
      maskIcon: 'test.ico',
      msTileImage: 'test.ico'
    }
  }
};
