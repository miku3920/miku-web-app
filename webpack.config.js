const path = require('path')

module.exports = [{
  name: 'production-cjs',
  mode: 'production',
  entry: './src/cjs/index.js',
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
  name: 'production-cjs-min',
  mode: 'production',
  entry: './src/cjs/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'telegram.min.js',
    library: {
      type: 'umd',
      name: 'Telegram',
    },
  },
},
{
  name: 'production-esm',
  mode: 'production',
  entry: './src/esm/index.mjs',
  optimization: {
    minimize: false,
  },
  experiments: {
    outputModule: true,
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'telegram.mjs',
    library: {
      type: 'module',
    },
  },
},
{
  name: 'production-esm-min',
  mode: 'production',
  entry: './src/esm/index.mjs',
  experiments: {
    outputModule: true,
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'telegram.min.mjs',
    library: {
      type: 'module',
    },
  },
}]
