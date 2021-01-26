<template>
  <div class="container">
    <div class="card">
      <h1>Vue Composition Api</h1>
      <hr>
      <p>Название: <strong>{{ name }}</strong></p>
      <p>Версия: <strong>{{ version }} | {{doubleVersion}}</strong></p>

      <button class="btn" @click="change">Изменить</button>
    </div>
  </div>
</template>

<script>
import {
  ref,
  reactive,
  isReactive,
  isRef,
  computed,
  watch
} from 'vue' //  toRefs,
export default {
  setup () {
    const framework = reactive({
      name: 'VueJS',
      version: 3
    })

    const name = ref('VueJS')
    const version = ref(3) // ref.value : 3

    const doubleVersion = computed(() => {
      return version.value * 2
    })

    watch([doubleVersion, name], (newValues, oldValues) => {
      console.log('new Values', newValues)
      console.log('old Values', oldValues)
    })

    console.log(isRef(doubleVersion))

    // console.log(framework)
    console.log(isReactive(framework))
    // console.log(isRef(name.value))

    function changeInfo () {
      // framework.name = 'Vue JS!'
      // framework.version = 42
      name.value = 'Vue JS!'
      version.value = 42
    }
    return {
      // name: framework.name,
      // version: framework.version,
      // ...toRefs(framework),
      // framework,
      // changeInfo
      name, version: version, change: changeInfo, doubleVersion
    }
  }

}
</script>
