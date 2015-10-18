var webpack = require('webpack');

module.exports = {
  devtool: 'source-map',
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    //'webpack/hot/only-dev-server',
    './index'
  ],
  output: {
    path: __dirname + '/build/',
    filename: 'griddle.js',
    publicPath: '/build/'
  },
  plugins: [
    //new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  resolve: {
    extensions: ['', '.js', '.jsx'],
    alias: {
      "react": __dirname + '/node_modules/react',
      "react/addons": __dirname + '/node_modules/react/addons'
    }
  },
  module: {
    loaders: [
      { test: /\.jsx?$/, loaders: ['babel?{"plugins":["babel-plugin-object-assign"]}'], exclude: /node_modules/ }
    ]
  }
};
