/**
 * Copyright (c) Daniel Solarte Chaverra
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */

const dotenv = require('dotenv');
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebPackPlugin = require("html-webpack-plugin");

// Load .env configuration.
dotenv.config();

const isDevelopment = process.env.NODE_ENV != 'production';

module.exports = {
  entry: [
    'react-hot-loader/patch',
    './src/index.js',
  ],
  mode: isDevelopment ? 'development' : 'production',
  output: {
    filename: `[name].${isDevelopment ? '[hash]' : 'min'}.js`,
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loaders: [
          "react-hot-loader/webpack",
          "babel-loader",
        ],
      },
      {
        test: /\.html$/,
        use: "html-loader"
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              sassOptions: {
                outputStyle: 'compressed',
              },
            },
          },
        ],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        loader: 'file-loader',
        options: {
          name: `images/[name]${isDevelopment ? '.[hash]' : ''}.[ext]`,
        },
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        loader: 'file-loader',
        options: {
          name: `fonts/[name]${isDevelopment ? '.[hash]' : ''}.[ext]`,
        },
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebPackPlugin({
      template: './public/index.html',
      filename: './index.html',
      favicon: './public/favicon.ico',
    }),
  ],
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    host: process.env.HOST || '0.0.0.0',
    port: process.env.PORT || 8000,
    publicPath: '/',
    inline: true,
    open: true,
    hot: true,
  },
};
