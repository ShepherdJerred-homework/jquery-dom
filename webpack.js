const webpack = require('webpack');
const uglifyjsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  context: __dirname + "/lib/client",
  entry: {
    main: "./main.js",
  },
  output: {
    filename: "[name].js",
    path: __dirname + "/static/lib"
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "source-map-loader",
        enforce: "pre"
      }
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: "jquery",
      minChunks: Infinity,
    }),

    // Run results through UglifyJS; create source maps
    new uglifyjsPlugin({
      sourceMap: true
    }),
  ]
};
