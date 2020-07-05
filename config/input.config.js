export default {
  // input: ['src/a.js', 'src/f.js'],
  input: {
    a1: '../src/a.js'
    // b1: '../src/f.js'
  },
  output: {
    entryFileNames: './dist/[name].js',
    format: 'cjs'
  }
}