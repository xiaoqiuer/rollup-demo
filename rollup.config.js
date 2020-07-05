// import entry from './build/config.json'

export default {
  // input: entry.entry,
  input: ['src/a.js', 'src/f.js'],
  output: {
    entryfileNames: './dist/[name].js',
    format: 'cjs'
  }
}