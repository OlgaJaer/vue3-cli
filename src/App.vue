<template>
  <div class="card">
    <h2 v-color="myColor">Directives</h2>

    <div class="form-control">
      <label for="input">Default Active</label>
      <input type="text" v-focus id='input'>
    </div>
    <button class="btn" @click="myColor = 'darkblue'">Make blue</button>
  </div>
</template>

<script>
import focusDirective from './components/focusDirective'
import colorDirective from './components/colorDirective'
export default {
  data () {
    return {
      myColor: 'darkred'
    }
  },
  directives: {
    focus: focusDirective,
    color: colorDirective
  }

}
</script>
