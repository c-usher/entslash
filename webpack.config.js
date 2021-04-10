const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const webpack = require("webpack");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const path = require("path");

module.exports = {
  mode: "production",
  optimization: {
    minimize: false,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: { minimize: true },
          },
        ],
      },
      {
        test: /\.(gif|png|jpe?g|svg|xml)$/i,
        use: [
          {
            loader: "file-loader",
          },
        ],
      },
      {
        test: [/\.vert$/, /\.frag$/],
        use: [
          {
            loader: "raw-loader",
          },
        ],
      },
    ],
  },
  performance: {
    maxEntrypointSize: 900000,
    maxAssetSize: 900000,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "./index.html",
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: "./src/assets", to: "src/assets" },
        {
          from: "./src/json",
          to: "src/json",
        },
      ],
    }),
    new webpack.DefinePlugin({
      "typeof CANVAS_RENDERER": JSON.stringify(true),
      "typeof WEBGL_RENDERER": JSON.stringify(true),
    }),
    new HtmlWebpackPlugin({
      template: "/src/index.html",
      hash: false,
    }),
    new CleanWebpackPlugin(),
  ],
};
