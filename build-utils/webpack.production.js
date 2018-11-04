const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = () => ({
  // output: {
  //   filename: "bundle.js"
  // },
  module: {
    rules: [
      {
        test: /\.styl$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "stylus-loader"]
        // use: ["style-loader", "css-loader", "stylus-loader"]
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"]
      },
      {
        test: /\.js$/,
        use: ['babel-loader']
      }
    ]
  },
  plugins: [new MiniCssExtractPlugin()]
});
