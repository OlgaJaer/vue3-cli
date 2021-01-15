<template>
  <div v-if="people.length !== 0">
    <div class="card inline"
      v-for="person in people" :key="person.id">
      <h3>{{person.firstName}}</h3>
      <button class="btn danger" @click="$emit('remove', person.id)">Remove</button>
    </div>
  </div>
  <div class="card center" v-else>
    <h4>No people yet</h4>
    <button class="btn" @click="$emit('load')">Download list of people</button>
  </div>
</template>

<script>
export default {
  emits: ['load', 'remove'],
  props: ['people']
}
</script>

<style scoped>
  .inline {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
</style>
