const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const rimraf = require('rimraf')
const NODE_ENV = process.env.NODE_ENV || 'development'

module.exports = {
  entry: NODE_ENV === 'development' ? {
    app: path.join(__dirname, './example/app.js')
  } : {
    JkReactMarkdown: path.join(__dirname, './src/JkReactMarkdown.js')
  },
  output: {
    filename: '[name].js',
    path: NODE_ENV === 'development' ? path.join(__dirname, './dist-dev') : path.join(__dirname, './dist'),
    library: 'JkReactMarkdown',
    libraryTarget: 'umd'
  },
  watch: NODE_ENV === 'development',
  devtool: NODE_ENV === 'development' ? 'eval' : false,
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: NODE_ENV === 'development' ? ['css-loader'] : ['css-loader', 'postcss-loader']
        })
      },
      {
        test: /\.(png|jpg|gif|svg|ttf|eot|woff|woff2)$/,
        use: {
          loader: 'url-loader?name=[path][name].[ext]&limit=15000'
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
    })
  ]
}

if (NODE_ENV === 'production') {
  module.exports.externals = {
    'react': 'react',
    'react-dom': 'react-dom'
  }
  module.exports.plugins.push(
    new UglifyJSPlugin()
  )
}
