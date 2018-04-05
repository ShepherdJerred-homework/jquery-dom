const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const path = require('path');

module.exports = {
  entry: {
    jquery: 'jquery',
    email_list: './src/index.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'static/lib')
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'source-map-loader',
        enforce: 'pre'
      }
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'jquery',
      minChunks: Infinity
    }),
    new UglifyJsPlugin({
      sourceMap: true,
      extractComments: true
    }),
    new BrowserSyncPlugin({
      host: 'localhost',
      port: 3000,
      server: {
        baseDir: [
          './static'
        ]
      }
    })
  ]
};
