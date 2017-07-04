let path = require('path')
let webpack = require('webpack')

module.exports = {
    entry: [
        './src/index.js',
        'webpack/hot/dev-server',
        'webpack-dev-server/client?http://localhost:8080',
    ],
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        //public url of the files
        publicPath: '/dist',
        filename: 'bundle.js'
    }
}