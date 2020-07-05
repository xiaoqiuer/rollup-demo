export default {
  input: 'src/split.js',
  output: {
    dir: 'dist',
    format: 'es',
    entryFileNames: '[name]-2.js',
    chunkFileNames: '[name]-split2.[hash].js'
  }
}