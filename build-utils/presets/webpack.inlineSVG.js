//
module.exports = (env) => ({
  module: {
    rules: [{ test: /\.svg$/i, use: ["svg-inline-loader"] }],
  },
});
