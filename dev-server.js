var WebpackDevServer = require('webpack-dev-server');
var webpack = require('webpack');
var config = require('./webpack.config.js');

var compiler = webpack(config);

var server = new WebpackDevServer(compiler, {
	hot: true,
	filename: config.output.filename,
	publicPath: config.output.publicPath,
	stats: {
		colors: true
	}
});

console.log('DEV SERVER LOADED ============ OK ')
console.log('filename ============', config.output.filename)
console.log('publicPath ==========', config.output.publicPath)

server.listen(8080, 'localhost', function() {});
