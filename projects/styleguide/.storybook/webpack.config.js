var webpack = require('../webpack.config');

webpack.module.rules.push({
  test: /stories\.js?$/,
  loaders: [require.resolve('@storybook/addon-storysource/loader')],
  enforce: 'pre',
})


module.exports = {module: webpack.module};