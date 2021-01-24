<template>
  <the-navbar></the-navbar>
  <div class="container with-nav">
    <div class="card">
      <h1>Про Vuex | {{uppercaseTitle}}</h1>
      <h2>Счетчик {{counter}} ({{doubleCounter}}) </h2>
      <button class="btn primary" @click="inc">Add</button>
      <button class="btn danger" @click="incAsync({
        value: 10,
        delay: 500
      })">Add 10</button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from 'vuex'
import TheNavbar from './TheNavbar.vue'

export default {
  components: { TheNavbar },
  // computed: mapGetters(['counter', 'doubleCounter', 'uppercaseTitle']),
  computed: {
    ...mapGetters(['uppercaseTitle']),
    ...mapGetters('count', ['counter', 'doubleCounter'])
  },
  methods: {
    ...mapMutations({ inc: 'count/increment' }),
    ...mapActions('count', ['incAsync'])
  }
}
</script>
