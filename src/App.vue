<template>
  <div class="container">
    <app-loader v-if="loading"></app-loader>

    <app-alert
      v-else
      :alert="alert"
      @close="alert = null"
    ></app-alert>
    <form class="card"
      @submit.prevent="createPerson">
      <h2>Работа с базой данных</h2>

      <div class="form-control" >
        <label for="name">Add name</label>
        <input type="text" id="name" v-model.trim="name">
      </div>

      <button
      class="btn primary"
      :disabled="name.length === 0" >
        Create person
      </button>

    </form>
    <app-people-list
      :people="people"
      @load="loadPeople"
      @remove="removePerson"
    ></app-people-list>
  </div>
</template>

<script>
import AppPeopleList from './AppPeopleList'
import AppAlert from './AppAlert'
import AppLoader from './AppLoader'
// eslint-disable-next-line no-unused-vars
import axios from 'axios'

export default {
  data () {
    return {
      name: '',
      people: [],
      alert: null,
      loading: false
    }
  },
  mounted () {
    this.loadPeople()
  },
  methods: {
    async createPerson () {
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
      this.people.push({
        firstName: this.name,
        id: firebaseData.name
      })
      this.name = ''
    },
    async loadPeople () {
      try {
        this.loading = true
        const { data } = await axios.get('https://vue-http-44ded-default-rtdb.europe-west1.firebasedatabase.app/people.json')
        // console.log(data)
        if (!data) {
          throw new Error('List of people is empty')
        }
        const result = Object.keys(data).map(key => {
          return {
            id: key,
            // firstName: data[key].firstName
            ...data[key]
          }
        })
        // console.log(result)
        this.people = result
        this.loading = false
      } catch (error) {
        this.alert = {
          type: 'danger',
          title: 'Error!',
          text: error.message
        }
        this.loading = false
        // console.log(error.message)
      }
    },
    async removePerson (id) {
      try {
        const name = this.people.find(person => person.id === id).firstName

        await axios.delete(`https://vue-http-44ded-default-rtdb.europe-west1.firebasedatabase.app/people/${id}.json`)
        this.people = this.people.filter(person => person.id !== id)

        this.alert = {
          type: 'primary',
          title: 'Success!',
          text: `Person '${name}' was deleted`
        }
      } catch (error) {

      }
    }
  },
  components: { AppPeopleList, AppAlert, AppLoader }
}
</script>

<style>

</style>
