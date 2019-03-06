const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: './src/index.jsx',
	output: {
		filename: 'main.js',
		path: path.resolve(__dirname, 'dist')
	},
	module: {
		rules: [
			{
				test: /\.scss$/,
				use: [
					'style-loader', // creates style nodes from JS strings
					'css-loader',   // translates CSS into CommonJS
					'sass-loader'   // compiles Sass to CSS, using Node Sass by default
				]
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader'],
			},
			{
				test: /\.jsx?$/,
				exclude: /(node_modules)/,
				resolve: {
					extensions: [".js", ".jsx"]
				},
				use: {
					loader: 'babel-loader',
					options: {
					  presets: ['@babel/preset-env', '@babel/preset-react']
					}
				}
			},
			{
				test: /\.(png|jpg|gif)$/,
				use: [
					{
						loader: 'url-loader',
						options: {
							name: 'media/[name].[ext]',
							limit: 8192
						}
					}
				]
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './assets/index.html',  // instead of creating a new file, use the template
		})
	],
	devServer: {
		contentBase: path.join(__dirname, 'dist')
	},
	devtool: 'cheap-module-source-map'
};
