const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const path = require('path');

const config = {
    entry: path.join(__dirname, 'src') + '/js/script.js',
    output: {
        path: path.join(__dirname, 'dist/scripts'),
        filename: 'bundle.js'
    },
    plugins: [
        new UglifyJSPlugin({
            sourceMap: true
        })
    ]
};

module.exports = config;