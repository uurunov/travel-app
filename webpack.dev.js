const path = require('path');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: ['@babel/polyfill', './src/client/index.js'],
	mode: 'development',
	devtool: 'source-map',
	stats: 'verbose',
	output: {
		libraryTarget: 'var',
		library: 'Client'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader'
			},
			{
				test: /\.scss$/,
				use: [ 'style-loader', 'css-loader', 'sass-loader' ]
			},
			{
				test: /\.html$/,
				loader: 'html-loader'
			},
			{
				test: /\.(png|jpe?g|gif)$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: '[name].[hash].[ext]',
							outputPath: 'images'
						}
					}
				]
			}
		]
	},
	plugins:[
		new CleanWebpackPlugin({
            // Simulate the removal of files
            // default: false
            dry: true,
            // Write Logs to Console
            // default: false
            verbose: true,
            // Automatically remove all unused webpack assets on rebuild
            // default: true
            cleanStaleWebpackAssets: true,
            // Do not allow removal of current webpack assets
            // default: true
            protectWebpackAssets: false
		}),
		new HtmlWebpackPlugin({
			template: './src/client/views/index.html',
			filename: 'index.html'
		}),
	]
};