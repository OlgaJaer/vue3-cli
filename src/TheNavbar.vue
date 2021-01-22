<template>
  <header class="navbar">
    <strong>Counter {{ counter }}</strong>

    <button class="btn" @click="add">Add</button>
  </header>
</template>

<script>
export default {
  computed: {
    counter () {
      return this.$store.state.counter
    }
  },
  methods: {
    add () {
      this.$store.commit({
        type: 'add',
        value: 5
      })
      // this.$store.commit('add', {
      //   value: 5
      // })
      // this.$store.commit('add', 5)
    }
  }
}
</script>
