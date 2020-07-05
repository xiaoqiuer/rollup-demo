export default {
  // input: ['src/a.js', 'src/f.js'],
  input: {
    a1: 'src/f.js',
    b1: 'src/c.js'
  },
  cache: true,
  output: {
    entryFileNames: '[name].js',
    dir: './dist',
    format: 'cjs'
  }
}