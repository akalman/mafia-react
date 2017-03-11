module.exports = {
    target: 'node',
    node: {
        __dirname: false
    },
    entry: './src/server/server.tsx',
    output: {
        path: 'output',
        filename: 'server.js'
    },
    resolve: {
        extensions: ['.ts', '.tsx']
    },
    externals: {
        express: 'commonjs express',
        ws: 'commonjs ws'
    },
    module: {
        loaders: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader'
            }
        ]
    }
}