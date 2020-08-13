const path = require("path");
const webpack = require("webpack");
const { merge } = require("webpack-merge");

const modeConfig = (env) => require(`./build-utils/webpack.${env}`)(env);

const HtmlWebpackPlugin = require("html-webpack-plugin");
const NotifyWhenDonePlugin = require("./build-utils/plugins/NotifyWhenDonePlugin");

module.exports = ({ mode, presets } = { mode: "production", presets: [] }) => {
  const baseConfig = {
    mode,
    entry: "./src/index.js",
    output: {
      path: path.resolve(__dirname, "myDist"),
      filename: "./bundle.js",
    },
    plugins: [
      new webpack.ProgressPlugin(),
      new NotifyWhenDonePlugin(),
      new HtmlWebpackPlugin(),
    ],
  };
  return merge(baseConfig, modeConfig(mode));
};
