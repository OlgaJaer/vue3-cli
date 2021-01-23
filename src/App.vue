<template>
  <the-navbar></the-navbar>
  <div class="container with-nav">
    <div class="card">
      <h1>Про Vuex</h1>
      <h2>Счетчик {{$store.getters.counter}} ({{$store.getters.doubleCounter}}) </h2>
      <button class="btn primary" @click="inc">Add</button>
      <button class="btn danger" @click="incAsync">Add 10</button>
    </div>
  </div>
</template>

<script>
import TheNavbar from './TheNavbar.vue'

export default {
  components: { TheNavbar },
  methods: {
    inc () {
      this.$store.commit('increment')
    },
    incAsync () {
      this.$store.dispatch('incAsync', {
        value: 10,
        delay: 500
      })
    }
  }
}
</script>
