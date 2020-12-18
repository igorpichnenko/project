const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const autoprefixer = require('autoprefixer');

// модули --- ***
module.exports = {
	entry: {
	  'index': './src/pages/index/index.js',
	   'color-type': './src/pages/color-type/color-type.js',
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
				test: /\.scss$/,
				use: ['style-loader', MiniCssExtractPlugin.loader, 'css-loader', {
					loader: 'postcss-loader',
					options: {
						plugins: () => autoprefixer({
							overrideBrowserslist: ['last 4 versions', '> 1%']
						})
					}
				}, 'sass-loader']
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
					name: 'images/[name].[ext]'
				}
			},
			{
				test: /\.(woff|woff2|eot|ttf|svg)$/,
				loader: 'file-loader',
				options: {
					name: 'fonts/[name].[ext]'
				}
			}
		]
	},
	
	// Плагины *** ---
	plugins: [
		new CleanWebpackPlugin(),
		new MiniCssExtractPlugin({
			filename: '[name].css',
		}),
		new HtmlWebpackPlugin({
			inject: false,
			hash: true,
			template: './src/pages/index/index.pug',
			filename: 'index.html'
		}),
		new HtmlWebpackPlugin({
			inject: false,
			hash: true,
			template: './src/pages/color-type/color-type.pug',
			filename: 'color-type.html'
		}),
	],
	// Стартовая страница
	devtool: 'inline-source-map',
	devServer: {
		stats: 'errors-only',
		index: 'index.html',
		open: true,
	}
};
