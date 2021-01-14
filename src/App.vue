<template>
  <div class="container">
    <form class="card" @submit.prevent="createPerson">
      <h2>Работа с базой данных</h2>

      <div class="form-control" >
        <label for="name">Add name</label>
        <input type="text" id="name" v-model.trim="name">
      </div>

      <button class="btn primary" :disabled="name.length === 0" >Create person</button>

    </form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      name: ''
    }
  },
  methods: {
    async createPerson () {
      // https://vue-http-44ded-default-rtdb.europe-west1.firebasedatabase.app/people.json
      // this.name

      const response = await fetch('https://vue-http-44ded-default-rtdb.europe-west1.firebasedatabase.app/people.json', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify({
          firstName: this.name
        })
      })

      const firebaseData = await response.json()
      console.log(firebaseData)
      this.name = ''
    }
  }
}
</script>

<style>

</style>
