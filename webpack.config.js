const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const {
  CleanWebpackPlugin
} = require('clean-webpack-plugin');
const autoprefixer = require('autoprefixer');
const ghpages = require('gh-pages');


module.exports = {
  entry: {
    'index': './src/pages/index.ts',
    'registration': './src/pages/registration/registration.ts',
    'room-search': './src/pages/room-search/room-search.ts',
    'details': './src/pages/room-details/room-details.ts',
    'landing': './src/pages/landing/landing.ts',
    'color-type': './src/pages/color-type/color-type.ts',
    'headers-footers': './src/pages/headers-footers/headers-footers.ts',
    'form-elements': './src/pages/form-elements/form-elements.ts',
    'cards': './src/pages/cards/cards.ts',
  },
  resolve: {
    extensions: ['.js',
      '.ts',
      '.json'],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: "babel-loader"
      }
    },
      {
        test: /\.s?css$/,
        use: ['style-loader',
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              plugins: () => autoprefixer({
                overrideBrowserslist: ['last 4 versions', '> 1%']
              }),

            }
          },
          'sass-loader']
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.pug$/,
        loader: 'pug-loader',
        options: {
          pretty: true
        }
      },
      {
        test: /\.(jpg|png|svg)$/,
        loader: 'file-loader',
        options: {
          name: 'images/[name].[ext]',
        }
      },
      {
        test: /\.(woff|woff2|eot|ttf|svg)$/,
        loader: 'file-loader',
        options: {
          name: 'fonts/[name].[ext]?[hash]'
        }
      }]
  },

  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
    new HtmlWebpackPlugin({
      inject: false,
      hash: true,
      template: './src/pages/index.pug',
      favicon: './src/images/icon/favicon.png',
      filename: 'index.html'
    }),
    new HtmlWebpackPlugin({
      inject: false,
      hash: true,
      template: './src/pages/registration/registration.pug',
      favicon: './src/images/icon/safari-favicon.svg',
      filename: 'registration.html'
    }),
    new HtmlWebpackPlugin({
      inject: false,
      hash: true,
      template: './src/pages/room-details/room-details.pug',
      filename: 'room-details.html'
    }),
    new HtmlWebpackPlugin({
      inject: false,
      hash: true,
      template: './src/pages/room-search/room-search.pug',
      filename: 'room-search.html'
    }),
    new HtmlWebpackPlugin({
      inject: false,
      hash: true,
      template: './src/pages/form-elements/form-elements.pug',
      filename: 'form-elements.html'
    }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery'
    }),
    new HtmlWebpackPlugin({
      inject: false,
      hash: true,
      template: './src/pages/headers-footers/headers-footers.pug',
      filename: 'headers-footers.html'
    }),
    new HtmlWebpackPlugin({
      inject: false,
      hash: true,
      template: './src/pages/color-type/color-type.pug',
      filename: 'color-type.html'
    }),
    new HtmlWebpackPlugin({
      inject: false,
      hash: true,
      template: './src/pages/cards/cards.pug',
      filename: 'cards.html'
    }),
    new HtmlWebpackPlugin({
      inject: false,
      hash: true,
      template: './src/pages/landing/landing.pug',
      filename: 'landing.html'
    }),
  ],
  devtool: 'inline-source-map',
  devServer: {
    stats: 'errors-only',
    index: 'index.html',
    open: true,
  }
};

ghpages.publish('dist', function (err) {});