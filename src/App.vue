<template>
  <div class="container pt-1">
    <div class="card center">
      <h2>Actual news {{now}} </h2>
      <span>Opened {{ openRate }} </span>
    </div>

    <app-news
    v-for="item in news"
    :key="item.id"
    :title="item.title"
    :id="item.id"
    :is-open="item.isOpen"
    @open-news="openNews"
    ></app-news>

  </div>
</template>

<script>
import AppNews from './AppNews'

export default {
  data () {
    return {
      now: new Date().toLocaleDateString(),
      news: [
        {
          title: 'Start a new block of the course',
          id: 1,
          isOpen: false
        },
        {
          title: 'Made a short walk to the park',
          id: 2,
          isOpen: false
        }
      ],
      openRate: 0
    }
  },
  methods: {
    openNews (data, data2) {
      this.openRate++
      console.log(data, data2)
    }
  },
  components: {
    AppNews
  }
}

</script>

<style >

</style>
