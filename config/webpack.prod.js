const common = require('./webpack.common');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { merge } = require('webpack-merge');

module.exports = merge(common, {
  mode: 'production',

  devtool: 'source-map',

  optimization: {
    minimize: true
  },

  performance: {
    hints: false,
  },

  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ],
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    })
  ],
});
