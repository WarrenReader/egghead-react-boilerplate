const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.join(__dirname, "dist"),
    filename: "app.bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          presets: ["@babel/preset-env", "@babel/preset-react"],
          plugins: [
            "react-hot-loader/babel",
            "@babel/plugin-proposal-class-properties"
          ]
        }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"], //css-loader handles css, style-loader injects style tag into our HTML at run time
        exclude: /node_modles/
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html"
    })
  ]
};
