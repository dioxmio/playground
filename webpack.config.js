var path = require('path');

console.log(__dirname);

module.exports = {
    entry: './src/init.js',
    resolve: {
        extensions: [ '', '.js', '.jsx']
    },
    output: {
        path: __dirname,
        filename: 'dist/bundle.js'
    },
    module: {
        loaders: [
            { test: path.join(__dirname, 'src'),
              loader: 'babel-loader' }
        ]
    }
};
