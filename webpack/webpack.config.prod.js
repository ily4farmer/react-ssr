const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const WebpackNotifierPlugin = require('webpack-notifier');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { createWebpackAliases } = require('./webpack.alias');

module.exports = {
	mode: 'production',
	entry: ['./src/index.tsx'],
	output: {
		clean: true,
		filename: '[name].[contenthash].js',
		path: path.resolve(__dirname, '../dist')
	},
	devServer: {
		compress: true
	},
	// настройка распознавания файлов
	resolve: {
		// расширения файлов
		extensions: ['.js', '.jsx', '.ts', '.tsx', '.css'],
		alias: createWebpackAliases()
	},
	stats: 'errors-warnings',
	optimization: {
		minimize: true,
		sideEffects: true,
		concatenateModules: true,
		runtimeChunk: 'single',
		splitChunks: {
			chunks: 'all',
			maxInitialRequests: 10,
			minSize: 0,
			cacheGroups: {
				vendor: {
					name: 'vendors',
					test: /[\\/]node_modules[\\/]/,
					chunks: 'all'
				}
			}
		}
	},
	module: {
		rules: [
			{
				test: /\.js(x?)$/,
				use: ['babel-loader'],
				exclude: /node_modules/
			},
			{
				test: /\.ts(x?)$/,
				loader: 'ts-loader',
				exclude: /node_modules/,
				options: {
					transpileOnly: true
				}
			},
			{
				test: /\.css$/,
				use: [MiniCssExtractPlugin.loader, 'css-loader'],
				exclude: /node_modules/
			},
			{
				test: /\.(png|jpg|svg|gif)$/,
				use: ['file-loader'],
				exclude: /node_modules/
			},
			{
				test: /\.(ttf|woff|woff2|eot)$/,
				use: ['file-loader'],
				exclude: /node_modules/
			}
		]
	},
	plugins: [
		new CleanWebpackPlugin(),
		new HTMLWebpackPlugin({
			filename: 'index.html',
			template: path.resolve(__dirname, '../src/index.html'),
			minify: {
				removeComments: true,
				collapseWhitespace: true,
				removeRedundantAttributes: true,
				useShortDoctype: true,
				removeEmptyAttributes: true,
				removeStyleLinkTypeAttributes: true,
				removeScriptTypeAttributes: true,
				keepClosingSlash: true,
				minifyJS: true,
				minifyCSS: true,
				minifyURLs: true
			}
		}),
		new MiniCssExtractPlugin({
			filename: '[name].[contenthash].css'
		})
	]
};
