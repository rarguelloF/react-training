var path = require('path');

module.exports = {
  context:  path.resolve(__dirname, 'src'),
  devtool: 'source-map',
  entry: './index.jsx',
  output: {
    path: path.resolve(__dirname, 'public/js'),
    filename: 'app.bundle.js',
  },
  devServer: {
    host: '127.0.0.1',
    port: 3000,
    contentBase: './public',
  },
  resolve: {
    // This config allow us to import .js(x) files without specifing extension
    // Example:
    // import Main from './components/Main';
    extensions: ['.js', '.jsx'],
  },
  module: {
    loaders: [
      // We are gonna tell webpack how it should load files depending on the extension
      {
        test: /\.jsx?$/,
        loader: [
          'react-hot-loader',
          'babel-loader',
        ],
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        loader: [
          'style-loader',
          'css-loader',
        ],
      },
      {
        test: /\.html$/,
        loader: 'file-loader?name=[name].[ext]',
      },
    ],
  },
};
