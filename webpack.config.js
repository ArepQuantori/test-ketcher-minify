const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
  entry: "./src/index.tsx",
  mode: "production",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  module: {
    rules: [
      //   {
      //     test: /\.html$/,
      //     use: "html-loader?minimize=false",
      //   },
      {
        test: /\.(js|jsx|ts|tsx)$/,
        use: {
          loader: "swc-loader",
        },
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      global: "self", //used by draft-js used by ketcher and by raf
    }),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
  ],
  //   optimization: {
  //     minimize: true,
  //     minimizer: [new TerserPlugin()],
  //   },
};
