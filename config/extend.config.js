// import resolve from 'rollup-plugin-node-resolve'
// import common from 'rollup-plugin-commonjs'
// import json from '@rollup/plugin-json'
export default {
  input: 'src/axios.js',
  extend: ['axios'],
  output: {
    name: 'bundle',
    file: 'dist/extend.js',
    format: 'umd',
    globals: {
      axios: 'axios'
    }
  }
  // plugins:[
  //   resolve(),
  //   common(),
  //   json()
  // ]
}