var webpack = require('webpack')
var path = require('path')
var UglifyJsPlugin = webpack.optimize.UglifyJsPlugin
var env = process.env.WEBPACK_ENV

var libraryName = 'Turntable',
	plugins = [],
	outoutFile = ''

if (env === 'build') {
	plugins.push(new UglifyJsPlugin({
		minimize: true,
		compress: {
			warnings: false,
		}
	}))
	outputFile = libraryName + '.min.js'
} else {
	outputFile = libraryName + '.js'
}

var config = {
	devtool: 'source-map',
	entry: __dirname + '/src/index.js',
	output: {
		path: __dirname + '/lib',
		filename: outputFile,
		library: libraryName,
		libraryTarget: 'umd',
		umdNamedDefine: true
	},
	module: {
		loaders: [{
			test: /(\.jsx|\.js)$/,
			loader: 'babel',
			exclude: /node_modules/
		}, {
			test: /(\.jsx|\.js)$/,
	        loader: "eslint-loader",
	        exclude: /(node_modules|bower_components)/
		}]
	},
	resolve: {
		extensions: ['', '.js'],
		alias: {
			TweenLite: 'gsap/src/uncompressed/TweenLite',
			CSSPlugin: 'gsap/src/uncompressed/plugins/CSSPlugin'
		},
	},
	plugins: plugins
}

module.exports = config
