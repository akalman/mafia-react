const path = require('path');

module.exports = {
    target: 'node',
    node: {
        __dirname: false
    },
    entry: './src/server/server.tsx',
    output: {
        path: path.resolve(__dirname, 'output'),
        filename: 'server.js'
    },
    resolve: {
        extensions: ['.ts', '.tsx']
    },
    externals: {
        express: 'commonjs express',
        ws: 'commonjs ws',
        redux: 'commonjs redux'
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader'
            }
        ]
    }
}
