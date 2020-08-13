const path = require("path");
const NotifyWhenDonePlugin = require(path.resolve(
  __dirname,
  "myPlugins",
  "NotifyWhenDonePlugin.js"
));

module.exports = () => {
  return {
    //   mode: "none",
    entry: "./src/index.js",
    output: {
      path: path.resolve(__dirname, "myDist"),
      filename: "./bundle.js",
    },
    plugins: [new NotifyWhenDonePlugin()],
  };
};
