module.exports = () => ({
  devtool: "source-maps",
  devServer: {
    open: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
});
