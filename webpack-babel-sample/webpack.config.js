const path = require("path");
const webpack = require("webpack");
const Dotenv = require("dotenv-webpack");
const debug = process.env.NODE_ENV !== "production";
module.exports = {
  mode: 'development',
  entry: {
    app: ['babel-polyfill','./src/app.js']
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.bundle.js',
    publicPath: '/'
  },
  plugins: debug ? [
    new Dotenv(),
    new webpack.optimize.OccurrenceOrderPlugin()
  ] : [
    new Dotenv(),
    new webpack.optimize.OccurrenceOrderPlugin()
  ]
};
