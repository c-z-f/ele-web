const requireStore = require.context('.', false, '/.store.js/')

const modules = {}
requireStore.keys().forEach(fileName => {
  const moduleName = fileName.replace(/(\.\/|\.store.js)/g, '')
  modules[moduleName] = requireStore[fileName].default
})

export default modules
