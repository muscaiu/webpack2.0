let path = require('path')

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, 'dist'),
        //public url of the files
        publicPath: '/dist',
        filename: 'bundle.js'
    }
}