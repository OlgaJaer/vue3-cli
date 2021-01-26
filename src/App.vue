<template>
  <div class="container">
    <div class="card">
      <h1>Vue Composition Api</h1>

      <div class="form-control">
        <input type="text" v-model="firstName">
      </div>

      <button class="btn" @click="change">Изменить</button>
    </div>

  <framework-info
    :name="name"
    :version="version"
    @change-version="changeVersion"
  ></framework-info>
  </div>
</template>

<script>
import {
  ref,
  reactive,
  isReactive,
  watch
} from 'vue' //  toRefs,
import FrameworkInfo from './FrameworkInfo.vue'

export default {
  setup () {
    const framework = reactive({
      name: 'VueJS',
      version: 3
    })

    const name = ref('VueJS')
    const version = ref(3) // ref.value : 3
    const firstName = ref('')

    watch(firstName, (newV, old) => {
      console.log(newV)
    })

    // console.log(isRef(doubleVersion))

    console.log(isReactive(framework))

    function changeInfo () {
      name.value = 'Vue JS!'
      version.value = 42
    }

    function changeVersion (num) {
      version.value = num
    }
    return {
      name, version, change: changeInfo, firstName, changeVersion
    }
  },
  components: { FrameworkInfo }

}
</script>

    FrameworkInfo
