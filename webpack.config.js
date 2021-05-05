const path = require("path");

module.exports = {
   mode: "development", // change this to production before doing the final build
   entry: "./index.js",
   output: {
      path: path.resolve( __dirname, "public" ),
      filename: "main.js"
   },
   target: "node",
   devServer: {
      port: "8888",
      contentBase: ["./public"],
      open: true
   },
   resolve: {
      extensions: [".js", ". jsx", ". json"]
   },
   module: {
      rules: [{
         test: /\.(js|jsx)$/,
         exclude: / node_modules /,
         use: {
            loader: "babel-loader"
         }
      }]
   }
}