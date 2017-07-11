let path = require('path')
let webpack = require('webpack')

const DEVELOPMENT = process.env.NODE_ENV === 'development';
const PRODUCTION = process.env.NODE_ENV === 'production';

DEVELOPMENT ? console.log('DEVELOPMENT') : console.log('PRODUCTION')

let entry = PRODUCTION
    ? ['./src/index.js']
    : [
        './src/index.js',
        'webpack/hot/dev-server',
        'webpack-dev-server/client?http://localhost:8080'
    ]
let plugins = PRODUCTION
    ? []
    : [new webpack.HotModuleReplacementPlugin()]

module.exports = {
    entry: entry,

    plugins: plugins,

    module: {
        loaders: [{
			test: /\.js$/,
			loaders: ['babel-loader'],
			exclude: /node_modules/
        }]
    },

    output: {
        path: path.join(__dirname, 'dist'),
        //public url of the files
        publicPath: '/dist',
        filename: 'bundle.js'
    }
}