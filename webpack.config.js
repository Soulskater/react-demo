const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  entry: "./src/index.tsx",
  output: {
    path: __dirname + "/dist",
    filename: '[name].bundle.js'
  },
  devtool: "source-map",
  optimization: {
    splitChunks: {
      cacheGroups: {
        node_vendors: {
          test: /[\\/]node_modules[\\/]/,
          chunks: 'initial',
          priority: 1
        }
      },
      chunks: 'all'
    }
  },
  devServer: {
    contentBase: __dirname + '/dist',
    compress: true,
    port: 8080,
    historyApiFallback: true
  },
  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: [".ts", ".tsx", ".js", ".json"]
  },

  module: {
    rules: [
      {
        test: /\.html$/,
        loader: 'html-loader'
      },
      {
        test: /\.scss$/,
        use: [{
          loader: "style-loader"
        }, {
          loader: "css-loader", options: {
            sourceMap: true
          }
        }, {
          loader: "sass-loader", options: {
            sourceMap: true
          }
        }]
      },
      { test: /\.tsx?$/, loader: "ts-loader" },
      { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: "./index.html"
    })
  ]
};