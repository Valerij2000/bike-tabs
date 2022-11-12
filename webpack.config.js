const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ImageminWebpWebpackPlugin = require("imagemin-webp-webpack-plugin");

let mode = 'development';
let target = 'web';
if (process.env.NODE_ENV === 'production') {
  mode = 'production';
  target = 'browserslist';
}

module.exports = {
  mode,
  target,
  entry: ['@babel/polyfill', path.resolve(__dirname, 'src', 'webpack/index.js')],
  output: {
    path: path.resolve(__dirname, 'dist'),
    clean: false,
    filename: 'js/[name].[contenthash].js',
    assetModuleFilename: 'assets/[name][ext]'
  },
  devServer: {
    port: 3553,
    open: true,
    hot: true,
    watchFiles: [
      `src/**/*.html`,
      `src/styles/**/*.scss`
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      minify: true,
      template: path.resolve(__dirname, 'src', `index.html`),
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash].css',
    }),
    new ImageminWebpWebpackPlugin()
  ],
  module: {
    rules: [{
        test: /\.html$/i,
        loader: 'html-loader',
      },
      {
        test: /\.(c|sa|sc)ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'group-css-media-queries-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(png|jpe?g|gif|svg|webp|ico)$/i,
        use: [{
          loader: 'image-webpack-loader',
          options: {
            mozjpeg: {
              progressive: true,
            },
            optipng: {
              enabled: false,
            },
            pngquant: {
              quality: [0.65, 0.90],
              speed: 4
            },
            gifsicle: {
              interlaced: false,
            },
            webp: {
              quality: 75
            },
          }
        }],
        type: mode === 'production' ? 'asset' : 'asset/resource',
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/, // not indexing node_modules
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true, // Use cache to avoid recompilation on every start
          },
        },
      },
    ]
  }
}