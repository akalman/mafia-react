const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  context: path.resolve(__dirname),
  entry: './src/client/index.js',

  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'output', 'static')
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['babel-preset-env', 'react']
          }
        }
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      filename: path.resolve(__dirname, 'output', 'index.html'),
      template: path.resolve(__dirname, 'src', 'client', 'index.html.tmpl')
    })
  ]
};
