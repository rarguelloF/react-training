var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: {
    app: './src/index.jsx',
    styles: [
      'font-awesome/css/font-awesome.min.css',
      'bootstrap/dist/css/bootstrap.min.css',
      './src/styles/main.css'
    ]
  },
  output: {
    path: path.resolve(__dirname, 'public/dist'),
    filename: '[name].bundle.js',
  },
  devServer: {
    host: '127.0.0.1',
    port: 3000,
    publicPath: '/dist/',
    contentBase: './public',
  },
  devtool: 'source-map',
  resolve: {
    // Create our custom aliases here so we don't have to write relative paths.
    // To integrate this with eslint, you have to specify it in your .eslintrc file
    // and use the 'eslint-import-resolver-webpack' plugin.
    alias: {
      src: path.resolve(__dirname, './src')
    },
    // This config allow us to import .js(x) files without specifing extension
    // Example:
    // import Main from './components/Main';
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
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
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader'
        })
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]'
            }
          }
        ]
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]'
            }
          }
        ]
      }
    ],
  },
  plugins: [
    new ExtractTextPlugin('styles.bundle.css'),
  ],
};
