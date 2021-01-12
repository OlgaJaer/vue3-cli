<template>
  <div class="container pt-1">
    <div class="card center">
      <h2>Slots</h2>
    </div>

    <app-list>
      <!-- <template #default="slotProps"> -->
      <template #default="{iter,idx}">
        <!-- <strong>{{slotProps.idx + 1 }}</strong>
        <span style="color: green">Item {{slotProps.iter}} </span> -->
        <strong>{{ idx + 1 }}</strong>
        <span style="color: green"> Item {{iter}} </span>
      </template>
    </app-list>

    <app-block>
      <p>The main content</p>

      <template #header >
        <h3>title</h3>
      </template>

      <template v-slot:footer>
        <!-- <strong>This is a footer</strong> -->
      </template>

    </app-block>
  </div>
</template>

<script>
import AppBlock from './AppBlock'
import AppList from './AppList'

export default {
  components: { AppBlock, AppList }
}

</script>

<style scoped >

</style>
