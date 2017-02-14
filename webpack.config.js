var path = require("path")

module.exports = {
  entry: ["babel-polyfill", "whatwg-fetch", "./src/index"],
  output: {
    path: path.resolve(__dirname, "public/javascripts"),
    filename: "bundle.js",
    publicPath: "/javascripts"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        query: {
          presets: ["latest", "stage-2", "react"]
        }
      }
    ]
  }
}
