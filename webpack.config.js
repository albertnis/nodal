var ExtractTextPlugin = require('extract-text-webpack-plugin');

var config = {
    entry: './src/js/main.js',

    output: {
        path:__dirname,
        filename: 'index.js',
    },

    devServer: {
        inline: true,
        port: 8080
    },

    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',

                query: {
                    presets: ['es2017', 'react']
                }
            },
            {
                test: /\.scss$/,
                loader: "style-loader!css-loader!sass-loader"
            }
        ]
    },

    plugins: [
        new ExtractTextPlugin({
            filename: './index.css',
            allChunks: true
        })
    ]
}

module.exports = config;
