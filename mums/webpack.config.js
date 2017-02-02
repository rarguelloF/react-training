var path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.bundle.js'
  },
  devServer: {
    host: '127.0.0.1',
    port: 3000,
    contentBase: './dist',
    inline: true
  }
};
