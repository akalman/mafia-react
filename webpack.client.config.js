let HtmlWebpackPlugin = require('html-webpack-plugin');

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
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Mafia',
            template: '!!html-loader!src/client/index.html'
        })
    ]
}