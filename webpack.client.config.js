const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

let extractTextPlugin = new ExtractTextPlugin('output/client/main.css');

module.exports = {
    entry: './src/client/main.tsx',
    output: {
        path: path.resolve(__dirname, 'output/client'),
        filename: 'main.js'
    },
    resolve: {
        extensions: ['.webpack.js', '.web.js', '.ts', '.tsx', '.js']
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader'
            },
            {
                test: /\.less$/,
                loader: extractTextPlugin.extract({
                    loader: 'css-loader!less-loader'
                })
            }
        ]
    },
    plugins: [
        extractTextPlugin
    ]
}
