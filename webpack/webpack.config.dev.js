const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { createWebpackAliases } = require('./webpack.alias');

module.exports = {
	mode: 'development',
	entry: ['./src/index.tsx'],
	output: {
		clean: true,
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, '../dist')
	},
	devServer: {
		open: true,
		port: 3000
	},
	// настройка распознавания файлов
	resolve: {
		// расширения файлов
		extensions: ['.js', '.jsx', '.ts', '.tsx', '.css'],
		alias: createWebpackAliases()
	},
	stats: 'errors-warnings',
	devtool: 'cheap-module-source-map',
	optimization: {
		splitChunks: {
			chunks: 'all'
		}
	},
	performance: {
		hints: false
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
				test: /\.(c|sa|sc)ss$/i,
				use: ['style-loader', 'css-loader'],
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
			template: path.resolve(__dirname, '../src/index.html')
		})
	]
};
