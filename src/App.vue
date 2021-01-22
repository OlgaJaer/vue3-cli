<template>
  <the-navbar></the-navbar>
  <div class="container with-nav">
    <div class="card">
      <h1>Про Vuex</h1>
      <h2>Счетчик {{$store.state.counter}}</h2>
      <button class="btn" @click="inc">Add</button>
    </div>
  </div>
</template>

<script>
import TheNavbar from './TheNavbar.vue'

export default {
  components: { TheNavbar },
  // data () {
  //   return {
  //     counter: 0
  //   }
  // },
  methods: {
    inc () {
      this.$store.state.counter++
    }
  }
}
</script>
