<template>
  <div class="card">

    <slot name='header' />
    <slot name='default'>no text</slot>
    <div v-if="$slots.footer">
      <slot name='footer' />
    </div>

  </div>
</template>

<script>
export default {
  mounted () {
    console.log(this.$slots)
  }

}
</script>

<style>

</style>
