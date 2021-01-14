const path = require("path");
const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const PATHS = {
  src: path.join(__dirname, "./src"),
  dist: path.join(__dirname, "./dist"),
  assets: "assets/",
};

module.exports = {
  externals: {
    paths: PATHS,
  },
  entry: "./src/index.js",
  //   {
  //     main: "./src/index.js",
  //     newjs: "./src/newindex.js",
  //   },
  output: {
    //filename: "[name].[hash].js",
    filename: `${PATHS.assets}js/[name].js`,
    path: PATHS.dist,
    //publicPath: "/assets",
  },
  devServer: {
    overlay: true,
    port: 8084,
    // publicPath: "/",
    //contentBase: "./dist",
    // hot: true,
  },
  //   resolve: {
  //     extensions: [".png", ".svg", ".jpg"],
  //   },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: "/node_modules/",
      },
      {
        test: /\.css$/i,
        use: [
          "style-loader",
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: { sourceMap: true },
          },
          {
            loader: "postcss-loader",
            options: {
              sourceMap: true,
              config: { path: "./postcss.config.js" },
            },
          },
        ],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          "style-loader",
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: { sourceMap: true },
          },
          {
            loader: "postcss-loader",
            options: {
              sourceMap: true,
              config: { path: "./postcss.config.js" },
            },
          },
          {
            loader: "sass-loader",
            options: { sourceMap: true },
          },
        ],
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: "file-loader",
        options: {
          name: "[name].[ext]",
        },
      },
      {
        test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
        loader: "file-loader",
        options: {
          name: "[name].[ext]",
        },
      },
    ],
  },
  devtool: "cheap-module-eval-source-map",
  optimization: {
    splitChunks: {
      chunks: "all",
    },
  },
  plugins: [
    new MiniCssExtractPlugin({
      //filename: "[name].[hash].css",
      filename: `${PATHS.assets}css/[name].css`,
    }),
    new CopyWebpackPlugin({
      patterns: [
        // {
        //   from: path.resolve(__dirname, "src/assets/img/favicon.ico"),
        //   to: path.resolve(__dirname, "dist/assets/img"),
        // },
        {
          from: `${PATHS.src}/assets/img`,
          to: `${PATHS.assets}/img`,
        },
        { from: `${PATHS.src}/assets/fonts`, to: `${PATHS.dist}/assets/fonts` },
        //{ from: `${PATHS.src}/assets`, to: `${PATHS.assets}` },
      ],
    }),
    new HtmlWebpackPlugin({
      //hash: false,
      template: "./src/index.html",
      //filename: "index.html",
    }),
    new CleanWebpackPlugin(),
    new webpack.SourceMapDevToolPlugin({
      filename: "[file].map",
    }),
  ],
};
