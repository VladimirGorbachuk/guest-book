const path = require("path");
module.exports = {
  entry: ["./node_modules/regenerator-runtime/runtime.js", "./src/index.js"],
  output: {
    path: path.resolve(__dirname, "static/frontend/"),
    filename: "main.js",
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.js$/,

        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
};
