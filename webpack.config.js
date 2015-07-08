'use strict';

var path = require('path');
var webpack = require('webpack');
var isProduction = process.env.NODE_ENV === 'production';

var devtool;
var plugins = [];
var entry = [
  './src/index.js',
  './src/index.html'
];

if (isProduction) {
  plugins.push(
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      sourceMap: false,
      mangle: true,
      compress: {
        warnings: false
      }
    })
  );
} else {
  devtool = 'eval';
  plugins = [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ];

  entry.unshift('webpack/hot/only-dev-server');
  entry.unshift('webpack-dev-server/client?http://0.0.0.0:8080');
}

module.exports = {
  devtool: devtool,
  entry: entry,
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: '/build/'
  },
  plugins: plugins,
  resolve: {
    extensions: ['', '.html', '.js', '.jsx', '.styl']
  },
  module: {
    loaders: [
      {
        test: /\.styl$/,
        loaders: ['style-loader', 'css-loader', 'stylus-loader']
      },
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        loaders: ['react-hot', 'babel']
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
          'file?hash=sha512&digest=hex&name=[hash].[ext]',
          'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
        ]
      },
      {
        test: /\.html$/,
        loader: 'file?name=[name].[ext]',
      }
    ]
  }
};
