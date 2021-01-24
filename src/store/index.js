import { createStore } from 'vuex'
import counterModule from './modules/counter'

export default createStore({
  modules: {
    count: counterModule
  },
  state () {
    return {
      appTitle: 'Vuex is working!'
    }
  },
  getters: {
    uppercaseTitle (state) {
      return state.appTitle.toUpperCase()
    }
  }
})
