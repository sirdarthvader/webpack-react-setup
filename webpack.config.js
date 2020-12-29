const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  //This property defines starting point of application (main entry)
  entry: "./src/index.js",
  //This property defines the file path and the file name which will be used for deploying the final production bundle
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "index_bundle.js",
  },
  //Setup loaders
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
  plugins: [
    new HtmlWebpackPlugin({
      title: "Custom template",
      // Load a custom template (lodash by default)
      template: "./src/index.html",
      meta: {
        viewport: "width=device-width, initial-scale=1, shrink-to-fit=no",
        // Will generate: <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        "theme-color": "#4285f4",
        // Will generate: <meta name="theme-color" content="#4285f4">
      },
    }),
  ],
};
