const path = require('path');
const HtmlWepbackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        app: './index.js',
    },
    plugins: [],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'public')
    },
    devServer: {
        contentBase: './public'
    },
    plugins:[
        new HtmlWepbackPlugin()
    ]
};