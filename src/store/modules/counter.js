export default {
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
      setTimeout(() => {
        commit('add', payload)
      }, payload.delay)
    }
  },
  getters: {
    counter (state) {
      return state.counter
    },
    doubleCounter (_, getters) {
      return getters.counter * 2
    }
  }
}
