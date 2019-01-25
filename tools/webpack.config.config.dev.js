/* eslint-env node */
const config = require('./webpack.config.config.js');
const webpack = require('webpack');

config.plugins.push(new webpack.NamedModulesPlugin());
config.plugins.push(new webpack.HotModuleReplacementPlugin());
config.devServer = {
  contentBase: './build',
  historyApiFallback: true,
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
  proxy: {
    "/assets/common/": {
      target: "http://localhost:8234",
      pathRewrite: { "^/": "" }
    },
    "/assets/navbar/": {
      target: "http://localhost:8235",
      pathRewrite: { "^/": "" }
    },
    "/assets/people/": {
      target: "http://localhost:8236",
      pathRewrite: { "^/": "" }
    },
    "/assets/planets/": {
      target: "http://localhost:8237",
      pathRewrite: { "^/": "" }
    },
    "/assets/utils/": {
      target: "http://localhost:8238",
      pathRewrite: { "^/": "" }
    }
  }
}

config.mode = 'development'

module.exports = config;
