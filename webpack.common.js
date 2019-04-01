const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	mode: 'development',
	entry: './public/index.js',
	output: {
		filename: 'bundle.[contentHash].js',
		path: path.resolve(__dirname, 'dist')
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: '!!raw-loader!views/pages/index.ejs',
			filename: 'index.ejs',
			minify: {
				removeComments: true,
				collapseWhitespace: true,
				conservativeCollapse: true
			}
		}),
		new HtmlWebpackPlugin({
			template: '!!raw-loader!views/pages/flappy.ejs',
			filename: 'flappy.ejs',
			minify: {
				removeComments: true,
				collapseWhitespace: true,
				conservativeCollapse: true
			}
		})
	],
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [ 'style-loader', 'css-loader' ]
			}
		]
	}
};
