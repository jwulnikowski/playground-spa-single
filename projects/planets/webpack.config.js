const webpack = require('webpack')
const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, 'src/planets.js'),
  output: {
    filename: 'planets.[hash].js',
    library: 'planets',
    libraryTarget: 'amd',
    path: path.resolve(__dirname, 'build/planets'),
    publicPath: '/assets/planets/'

  },
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        exclude: [path.resolve(__dirname, 'node_modules')],
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ]
      }
    ]
  },
  plugins: [
    new webpack.BannerPlugin({
      banner: '"format amd";',
      raw: true,
    }),
    new VueLoaderPlugin(),
    new CleanWebpackPlugin(['build/planets']),
  ],
  devtool: 'source-map',
  externals: [
    /^.+!sofe$/,
    /^lodash$/,
    /^single-spa$/,
    /^rxjs\/?.*$/,
  ],
}
