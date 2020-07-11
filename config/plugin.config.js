import myPlugin from '../plugin/plugin.js'
export default {
  input: 'virtual-module-1',
  output: {
    file: 'dist/plugin.js',
    format: 'es'
  },
  plugins:[
    myPlugin()
  ]
}