<template>
<div class="card">
  <p>Название: <strong>{{ name }}</strong></p>
  <p>Версия: <strong>{{ version }} | {{doubleVersion}}</strong></p>

  <button class="btn warning" @click="changetoThree">Change to 3</button>
</div>

</template>

<script>
import { computed } from 'vue'
export default {
  props: ['name', 'version'],
  emits: ['change-version'],
  // computed: {
  //   doubleVersion () {
  //     return this.version * 2
  //   }
  // }
  setup (props, context) {
    function change () {
      context.emit('change-version', 3)
      console.log(context)
    }
    return {
      changetoThree: change,
      doubleVersion: computed(() => props.version * 2)
    }
  }
}

</script>

<style>

</style>
