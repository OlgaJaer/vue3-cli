<template>
  <div v-if="people.length !== 0">
    <div class="card center"
      v-for="person in people" :key="person.id">
      <h3>{{person.firstName}}</h3>
    </div>
  </div>
  <div class="card center" v-else>
    <h4>No people yet</h4>
    <button class="btn" @click="$emit('load')">Download list of people</button>
  </div>
</template>

<script>
export default {
  emits: ['load'],
  props: ['people']
}
</script>

<style>

</style>
