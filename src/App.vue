<template>
  <div class="card">
    <h2>Directives</h2>

    <div class="form-control">
      <label for="input">Default Active</label>
      <input type="text" v-focus id='input'>
    </div>
  </div>
</template>

<script>
import focusDirective from './components/focusDirective'
export default {
  directives: {
    focus: focusDirective
  }

}
</script>
