const HtmlWebpackPlugin = require('html-webpack-plugin');
const NodeExternals = require('webpack-node-externals');

module.exports = {
	entry: {
		main: './public/index.js',
		vendor: './public/vendor.js'
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: '!!raw-loader!views/pages/index.ejs',
			filename: 'index.ejs',
			excludeChunks: [ 'app' ],
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
				conservativeCollapse: true,
				removeAttributeQuotes: true
			}
		})
	],
	target: 'node',
	externals: [ NodeExternals() ],
	module: {
		rules: [
			{
				test: /\.ejs$/,
				loader: 'ejs-html-loader'
			},
			{
				test: /\.(svg|png|jpg|gif)$/,
				use: {
					loader: 'file-loader',
					options: {
						name: '[name].[hash].[ext]',
						outputPath: 'imgs'
					}
				}
			}
		]
	}
};
