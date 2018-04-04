const webpack = require('webpack');
const uglifyjsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {

  // All input files are found in the lib/client directory
  context: __dirname + "/lib/client",

  // Entry points: pack these files with all their dependencies
  entry: {
    jquery: "jquery",                          // third party library
    main: "./main.js",                         // client file (relative to context)
    multi: ["./one.js", "two.js", "three.js"]  // multiple client files
  },

  // Output specification - one output per entry
  output: {
    filename: "[name].js",            // use entry name as the filename
    path: __dirname + "/static/lib"   // store in static directory
  },

  // Enable sourcemaps for debugging webpack's output
  devtool: "source-map",

  // Modules
  module: {
    rules: [
      // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "source-map-loader",
        enforce: "pre"
      }
    ]
  },

  // Plug-ins
  plugins: [
    // Any modules in jquery should be removed from other files
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
