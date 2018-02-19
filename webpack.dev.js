var webpack = require('webpack');
const path = require('path');
const Merge = require('webpack-merge');
const CommonConfig = require('./webpack.config.js');

module.exports = Merge(CommonConfig, {
  devServer: {
    historyApiFallback: true,
    hot: true,
    contentBase: path.join(__dirname, 'public'),
    host: '0.0.0.0',
    port: 7000,
    inline: true
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ]
});