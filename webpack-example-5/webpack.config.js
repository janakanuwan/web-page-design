const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: './src/index.js',
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
				test: /\.js$/,
				exclude: /(node_modules)/,
				use: {
					loader: 'babel-loader',
					options: {
					  presets: ['@babel/preset-env']
					}
				}
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
