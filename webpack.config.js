const path = require('path')

module.exports = [{
  name: 'production-normal',
  mode: 'production',
  entry: './src/index.js',
  optimization: {
    minimize: false,
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'telegram.js',
    library: {
      type: 'umd',
      name: 'Telegram',
    },
  },
},
{
  name: 'production-min',
  mode: 'production',
  entry: './src/index.js',
  devtool: 'source-map',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'telegram.min.js',
    library: {
      type: 'umd',
      name: 'Telegram',
    },
  },
}]
