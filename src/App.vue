<template>
  <div class="container">
    <div class="card">
      <h1>Vue Composition Api</h1>
      <hr>
      <p>Название: <strong>{{ name }}</strong></p>
      <p>Версия: <strong>{{ versionOf }}</strong></p>

      <button class="btn" @click="change">Изменить</button>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
  setup () {
    const name = ref('VueJS')
    const version = ref(3) // ref.value : 3

    function changeInfo () {
      name.value = 'Vue JS!'
      version.value = 4
    }
    return {
      name, versionOf: version, change: changeInfo
    }
  }
  // data () {
  //   return {
  //     name: 'VueJS',
  //     version: 3
  //   }
  // },
  // methods: {
  //   changeInfo () {
  //     this.name = 'Vue JS!'
  //     this.version = 4
  //   }
  // }
}
</script>
