let HtmlWebpackPlugin = require('html-webpack-plugin');
let ExtractTextPlugin = require('extract-text-webpack-plugin');

let extractLessPlugin = new ExtractTextPlugin('output/client/main.css');

module.exports = {
    entry: './src/client/main.tsx',
    output: {
        path: 'output/client',
        filename: 'main.js'
    },
    resolve: {
        extensions: ['.webpack.js', '.web.js', '.ts', '.tsx', '.js']
    },
    module: {
        loaders: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader'
            },
            {
                test: /\.less$/,
                loader: extractLessPlugin.extract({
                    loader: 'css-loader!less-loader',
                    fallbackLoader: 'style-loader'
                })
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Mafia',
            template: '!!html-loader!src/client/index.html'
        }),
        extractLessPlugin
    ]
}