<template>
<div class="modal-backdrop" @click="$emit('close')">
  <div class="modal">
    <h3>Title Modal</h3>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique neque quaerat exercitationem magni ratione molestias, ea vel voluptates eos quidem quod magnam iure, accusamus enim inventore quos animi quasi provident!</p>
  </div>

</div>

</template>

<script>
export default {
  emits: ['close']

}
</script>

<style>

</style>
