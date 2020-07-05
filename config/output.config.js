import {terser} from 'rollup-plugin-terser';
export default [{
  input: 'src/c.js',
  output: {
    file: 'dist/amd.js',
    format: 'amd',
    name: 'bundle',
    plugins: [terser()]
  }
}, {
  input: 'src/c.js',
  output: {
    file: 'dist/cjs.js',
    format: 'cjs',
    name: 'bundle'
  }
}, {
  input: 'src/c.js',
  output: {
    file: 'dist/es.js',
    format: 'es',
    name: 'bundle',
  }
}, {
  input: 'src/c.js',
  output: {
    file: 'dist/iife.js',
    format: 'iife',
    name: 'bundle'
  }
}, {
  input: 'src/c.js',
  output: {
    file: 'dist/umd.js',
    format: 'umd',
    name: 'bundle'
  }
}, {
  input: 'src/c.js',
  output: {
    file: 'dist/system.js',
    format: 'system',
    name: 'bundle'
  }
}]