let fs = require('fs');

let nodeModules = {};
fs.readdirSync('node_modules')
    .filter(function(x) {
        return ['.bin'].indexOf(x) === -1;
    })
    .forEach(function(mod) {
        nodeModules[mod] = 'commonjs ' + mod;
    });

module.exports = {
    target: 'node',
    node: {
        __dirname: false
    },

    entry: './src/server.tsx',
    output: {
        path: 'output',
        filename: 'server.js'
    },
    resolve: {
        extensions: ['.ts', '.tsx']
    },
    externals: {
        express: 'commonjs express'
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