import { createStore } from 'vuex'

export default createStore({
  state () {
    return {
      counter: 1
    }
  },
  mutations: {
    increment (state) {
      state.counter++
    },
    add (state, payload) {
      state.counter += payload.value
    }
  },
  actions: {
    incAsync ({ commit }, payload) {
      // console.log(context)
      setTimeout(() => {
        commit('add', payload)
      }, payload.delay)
    }
  },
  getters: {
    counter (state) {
      // if (state.counter > 20) {
      //   return 0
      // }
      return state.counter
    },
    doubleCounter (_, getters) {
      return getters.counter * 2
    }
  }
})
