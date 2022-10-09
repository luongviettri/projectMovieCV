/* eslint-disable no-undef */
const path = require("path");
const webpack = require("webpack");
module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filname: "bundle.js",
    publicPath: "/"
  },
  devServer: {
    hot: true
  },
  plugins: [new webpack.NamedModulesPlugin(), new webpack.HotModuleReplacementPlugin()]
};
