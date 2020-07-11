export default function myExample () {
  return {
    name: 'my-example', // this name will show up in warnings and errors
    options (options) { // 替换options
      console.log('options')
      return {
        ...options,
        input: 'virtual-module'
      }
    },
    buildStart (options) {
      console.log('buildstart', options.input)
    },
    resolveId ( source ) {
      // 返回对象，可以替换现有的resolveid，并将其排除
      // null 不管
      // false，将source 在代码中排除
      // true，
      console.log('resolve')
      if (source === 'virtual-module') {
        return source; // this signals that rollup should not ask other plugins or check the file system to find this id
      }
      return null; // other ids should be handled as usually
    },
    load ( id ) {
      // null 不管
      // 
      console.log('load')
      if (id === 'virtual-module') {
        return 'export default "This is virtual!"'; // the source code for "virtual-module"
      }
      return null; // other ids should be handled as usually
    }
  };
}