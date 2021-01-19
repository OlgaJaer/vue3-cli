<template>
  <div class="container">
    <app-alert
      v-if="alert"
      title='Atention!'
      text='This is a very important message'
      type='warning'
      close_text='Close'
      :closeble='true'
      @close="alert = false"
    ></app-alert>
    <div class="card">
      <button class="btn primary" @click="toggleAlert">{{alert ? "hide" : 'Show'}} message</button>
    </div>

  <app-block></app-block>
  </div>
</template>

<script>
import AppAlert from './components/AppAlert'
import AppBlock from './components/AppBlock'
import alertMixin from './components/alertMixin'
export default {
  mixins: [alertMixin],
  components: { AppAlert, AppBlock }
}
</script>
