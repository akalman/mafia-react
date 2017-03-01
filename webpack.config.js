module.exports = {
    entry: './src/client/main.tsx',
    output: {
        path: 'output/client',
        filename: '[name].js'
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
}