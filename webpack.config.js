const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const autoprefixer = require('autoprefixer');
const ghpages = require('gh-pages');
//const ErudaWebpackPlugin = require('eruda-webpack-plugin');


// модули --- ***
module.exports = {
	entry: {
	  'index': './src/pages/index/index.js',
	  'landing': './src/pages/landing/landing.js',
	  'color-type': './src/pages/color-type/color-type.js',
	   'headers-footers': './src/pages/headers-footers/headers-footers.js',
	    'form-elements': './src/pages/form-elements/form-elements.js',
	    'cards': './src/pages/cards/cards.js',
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
				use: ['style-loader', MiniCssExtractPlugin.loader, 'css-loader', {
					loader: 'postcss-loader',
					options: {
						plugins: () => autoprefixer({
							overrideBrowserslist: ['last 4 versions', '> 1%']
						}),
						
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
					name: 'fonts/[name].[ext]?[hash]'
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
	//	new ErudaWebpackPlugin({
 //    entry: [/index\.js$/, /color-type\.js$/],
   //   plugins: ['dom'],
 //   }),
		new HtmlWebpackPlugin({
			inject: false,
			hash: true,
			template: './src/pages/index/index.pug',
			filename: 'index.html'
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
	// Стартовая страница
	devtool: 'inline-source-map',
	devServer: {
		stats: 'errors-only',
		index: 'index.html',
		open: true,
	}
};

ghpages.publish('dist', function (err) {});