<template>
  <div class="container pt-1">
    <div class="card center">
      <h2>Actual news {{now}} </h2>
      <span>Opened <strong>{{ openRate }}</strong> | Read <strong>{{ readRate }}</strong> </span>
    </div>

    <app-news
      v-for="item in news"
      :key="item.id"
      :title="item.title"
      :id="item.id"
      :is-open="item.isOpen"
      :was-read="item.wasRead"
      @open-news="openRate++"
      @read-news="readNews"
      @unmark="unReadNews"
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
          isOpen: false,
          wasRead: false
        },
        {
          title: 'Made a short walk to the park',
          id: 2,
          isOpen: false,
          wasRead: false
        }
      ],
      openRate: 0,
      readRate: 0
    }
  },
  methods: {
    // openNews (data, data2) {
    //   this.openRate++
    // },
    readNews (id) {
      const idx = this.news.findIndex(news => news.id === id)
      this.news[idx].wasRead = true
      this.readRate++
      console.log(id)
    },
    unReadNews (id) {
      const news = this.news.find(news => news.id === id)
      news.wasRead = false
      this.readRate--
    }
  },
  components: {
    AppNews
  }
}

</script>

<style >

</style>
