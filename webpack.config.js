var path = require('path')
var CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = {
  mode: 'production',
  devtool: false,
  context: path.resolve(__dirname, './'),
  entry: {
    app: './src/zuji/widget.js',
  },
  output: {
    path: path.resolve(__dirname, './public/dist'),
    filename: 'widget.min.js'
  },
  resolve: {
    extensions: ['.js']
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader'
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['dist'], {
      root: path.resolve(__dirname, './public'),
      verbose: false
    })
  ],
  stats: {
    children: false,
    chunks: false,
    chunkGroups: false,
    chunkModules: false,
    chunkOrigins: false,
    modules: false,
    moduleTrace: false,
    reasons: false,
    performance: false
  }
}
