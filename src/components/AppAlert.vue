<template>
  <div class="alert" :class="type">
    <h2 class="alert-title">{{title}}</h2>
    <p>{{text}}</p>
    <button class="btn" :class='type' v-if='closeble' @click="$emit('close')">{{close_text}}</button>
  </div>
</template>

<script>
export default {
  emits: ['close'],
  props: {
    title: String,
    text: String,
    closeble: {
      type: Boolean,
      required: false,
      default: false
    },
    close_text: String,
    type: {
      type: String,
      default: 'primary',
      required: false,
      validator (value) {
        return ['warning', 'primary', 'danger'].includes(value)
      }
    }
  }

}
</script>

<style>

</style>
