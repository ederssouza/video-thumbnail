'use strict'

const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  target: 'web',

  entry: {
    app: './src/index.js'
  },

  output: {
    path: path.join(__dirname, '../', 'dist'),
    filename: path.join('js', 'video-thumbnail.js'),
    publicPath: '/dist/',
    libraryTarget: 'var',
    library: 'VideoThumbnail'
  },

  cssLoader: {
    test: /\.s?[ac]ss$/,
    use: [
      MiniCssExtractPlugin.loader,
      { loader: 'css-loader', options: { url: false, sourceMap: true } },
      { loader: 'sass-loader', options: { sourceMap: true } }
    ]
  },

  jsLoader: {
    test: /\.js$/,
    exclude: [/node_modules/, /dist/, /webpack/],
    use: ['babel-loader']
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: path.join('css', 'video-thumbnail.css')
    })
  ]
}
