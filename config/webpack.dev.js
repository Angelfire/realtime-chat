const common = require('./webpack.common');
const paths = require('./paths');
const webpack = require('webpack');
const { merge } = require('webpack-merge');

module.exports = merge(common, {
  mode: 'development',

  devtool: 'inline-source-map',

  devServer: {
    contentBase: paths.build,
    open: true,
    compress: true,
    hot: true,
    port: 3000
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
});
