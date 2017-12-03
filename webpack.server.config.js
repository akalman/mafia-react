const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  context: path.resolve(__dirname),
  entry: './src/server.js',

  output: {
    filename: 'server.js',
    path: path.resolve(__dirname, 'output')
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['babel-preset-env']
          }
        }
      }
    ]
  },

  target: 'node',
  node: {
    __dirname: true
  },

  externals: [nodeExternals()]
};
