const requireStore = require.context('.', false, /.store.js$/)

const modules = {}
console.log('%c --------开始-------- ', 'background: #222; color: #bada55')
requireStore.keys().forEach(fileName => {
  const moduleName = fileName.replace(/(\.\/|\.store.js)/g, '')
  console.log('%c 模块名称 ' + moduleName, 'background: #666666; color: #F5F5F5')

  modules[moduleName] = requireStore(fileName).default
})
console.log('%c --------结束-------- ', 'background: #222; color: #bada55')

export default modules
