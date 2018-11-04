const webpack = require('webpack')
module.exports = () => ({
  module: {
    rules: [
      {
        test: /\.styl$/,
        use: ["style-loader", "css-loader", "stylus-loader"]
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.js$/,
        use: ['babel-loader']
      }
    ]
  },
  plugins: [new webpack.HotModuleReplacementPlugin()]
});
