export default {
  install (app, options) {
    let current = 'ru'

    const changeLanguage = name => {
      current = name
      console.log(current)
    }

    app.config.globalProperties.$i18n = key => {
      console.log(key)
      // app.title -> [app, title]
      return key.split('.').reduce((words, k) => {
        console.log(words[k])
        return words[k] || '=== UNKNOWN==='
      }, options[current])
    }

    app.provide('changeI18N', changeLanguage)
  }
}
