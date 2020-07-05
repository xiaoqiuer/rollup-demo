const path = require('path');
const entry = require('./build/config.json')
module.exports = {
  entry: entry.entry,
  output: {
    filename: 'webpack.js',
    path: path.resolve(__dirname, 'dist')
  }
  // mode: 'development'
};