<template>
  <the-navbar></the-navbar>
  <div class="container with-nav">
    <div class="card">
      <h1>Про Vuex</h1>
      <h2>Счетчик {{$store.state.counter}}</h2>
      <button class="btn primary" @click="inc">Add</button>
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
    }
  }
}
</script>
