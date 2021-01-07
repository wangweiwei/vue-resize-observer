var path = require("path");
var webpack = require("webpack");

const config = {
  mode: "development",
  entry: {
    example: ["./example/example.js"],
    vendor: ["vue"]
  },
  output: {
    path: path.resolve(__dirname, "../example"),
    library: "__vue_resize_observer__",
    libraryTarget: "umd",
    filename: "[name].build.js"
  },
  resolve: {
    alias: {
      vue$: "vue"
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: ["babel-loader"],
        exclude: path.resolve(__dirname, "../node_modules")
      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader",
        exclude: path.resolve(__dirname, "../node_modules")
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: process.env.NODE_ENV
          ? JSON.stringify(process.env.NODE_ENV)
          : "'development'"
      }
    })
  ],
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: "vue",
          chunks: "all"
        }
      }
    }
  },
  devtool: "cheap-module-eval-source-map",
  performance: {
    hints: false
  }
};

module.exports = config;
