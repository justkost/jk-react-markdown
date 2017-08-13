const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const webpack = require('webpack')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const rimraf = require('rimraf')

module.exports = {
  entry: path.join(__dirname, './src/JkReactMarkdown.js'),
  output: {
    filename: 'JkReactMarkdown.js',
    path: path.join(__dirname, './dist')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['react', 'es2015', 'stage-2']
          }
        }
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'postcss-loader']
        })
      },
      {
        test: /\.(png|jpg|gif|svg|ttf|eot|woff|woff2)$/,
        use: {
          loader: 'url-loader?name=[path][name].[ext]&limit=10000'
        }
      }
    ]
  },
  plugins: [
    {
      apply: compiler => {
        rimraf.sync(compiler.options.output.path)
      }
    },
    new ExtractTextPlugin({
      filename: 'jk-react-markdown.css'
    }),
    new UglifyJSPlugin({
      compress: true
    })
  ]
}
