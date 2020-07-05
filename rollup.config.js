// import entry from './build/config.json'

export default {
  // input: entry.entry,
  imput: ['src/a.js', 'src/f.js'],
  output: {
    entryfileNames: './dist/[name].js',
    file: './dist/rollup.js',
    format: 'cjs'
  }
}