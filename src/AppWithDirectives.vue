<template>
  <div class="card">
    <h2 v-color:[type].blink.hover="myColor">Directives</h2>

    <div class="form-control">
      <label for="input">Default Active</label>
      <input type="text" v-focus id='input'>
    </div>
    <button class="btn" @click="myColor = 'darkblue'">Make blue</button>
    <button class="btn" @click="type = type === 'color' ? 'backgroundColor' : 'color'">Change type</button>
  </div>
</template>

<script>
import focusDirective from './components/focusDirective'
import colorDirective from './components/colorDirective'
export default {
  data () {
    return {
      myColor: 'darkred',
      type: 'color'
    }
  },
  directives: {
    focus: focusDirective,
    color: colorDirective
  }

}
</script>
