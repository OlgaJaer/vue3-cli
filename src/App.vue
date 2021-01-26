<template>
  <div class="container">
    <div class="card">
      <h1>Vue Composition Api</h1>
      <hr>
      <p>Название: <strong>{{ name }}</strong></p>
      <p>Версия: <strong>{{ version }} | {{doubleVersion}}</strong></p>

      <div class="form-control">
        <input type="text" ref="textInput">
        <input type="text" v-model="firstName">
      </div>

      <button class="btn" @click="change">Изменить</button>
    </div>
  </div>
</template>

<script>
import {
  ref,
  reactive,
  isReactive,
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
    const textInput = ref(0)
    const firstName = ref('')

    const doubleVersion = computed(() => {
      return version.value * 2
    })

    // watch([doubleVersion, name], (newValues, oldValues) => {
    //   console.log('new Values', newValues)
    //   console.log('old Values', oldValues)
    // })
    watch(firstName, (newV, old) => {
      console.log(newV)
    })

    // console.log(isRef(doubleVersion))

    console.log(isReactive(framework))

    function changeInfo () {
      name.value = 'Vue JS!'
      version.value = 42
      console.log(textInput.value.value)
    }
    return {
      name, version: version, change: changeInfo, doubleVersion, textInput, firstName
    }
  }

}
</script>
