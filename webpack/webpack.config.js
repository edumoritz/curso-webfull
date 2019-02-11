const modoDev = process.env.NODE_ENV !== 'production'
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')

module.exports = {
  mode: modoDev ? 'development' : 'production',
  entry: './src/principal.js',
  output: { // definindo nomes de saida
    filename: 'principal.js', // mudando main.js para principal.js
    path: __dirname + '/public'
  },
  devServer: {
    contentBase: "./public",
    port: 9000
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true
      }),
      new OptimizeCSSAssetsPlugin({})
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "estilo.css"
    })
  ],
  module: {
    rules: [{
      test: /\.s?[ac]ss$/,
      use: [
        MiniCssExtractPlugin.loader,
        //'style-loader', // adiciona CSS a DOM injetando a tag <style>
        'css-loader', // interpretar @import, url()...
        'sass-loader',
      ]
    }, {
      test: /\.(png|svg|jpg|gif)$/,
      use: ['file-loader']
    }]
  }
}

/**
 * no cmd:
 * npm start - para gerar pasta dist compilada para desenvolvimento
 * node dist/main.js - reproduz o principal.js
 * 
 * npm start && node .\public\principal.js
 */