<template>
  <div class="container">
    <app-alert
      v-if="alert"
      title='Atention!'
      text='This is a very important message'
      close_text='Close'
      @close="alert = false"
    ></app-alert>
    <div class="card">
      <button class="btn primary" @click="toggleAlert">{{alert ? "hide" : 'Show'}} message</button>
    </div>
  </div>
</template>

<script>
import AppAlert from './AppAlert'
export default {
  data () {
    return {
      alert: false
    }
  },
  methods: {
    toggleAlert () {
      this.alert = !this.alert
    }

  },
  components: { AppAlert }
}
</script>
