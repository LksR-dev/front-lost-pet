const path = require('path');
const dev = process.env.NODE_ENV == 'development';
const liveServer = require('live-server');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

if (dev) {
	liveServer.start({
		root: './',
		file: 'index.html',
	});
}

module.exports = {
	entry: './src/index.tsx',
	watch: dev,
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: 'ts-loader',
				exclude: /node_modules/,
			},
			{
				test: /\.css$/i,
				use: [
					'style-loader',
					{
						loader: 'css-loader',
						options: {
							modules: true,
						},
					},
				],
			},
			{
				test: /\.svg$/i,
				use: [{ loader: 'file-loader' }],
			},
		],
	},
	resolve: {
		extensions: ['.ts', '.tsx', '.js'],
		plugins: [
			new TsconfigPathsPlugin({
				configFile: './tsconfig.json',
			}),
		],
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js',
	},
};
