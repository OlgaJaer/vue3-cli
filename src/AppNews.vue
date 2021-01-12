<template>
  <div class="card" >
      <h3>{{ title }}</h3>
      <button class="btn" @click="open">{{isOpenLocale ? 'Close' : 'Open'}} </button>
      <button class="btn danger" v-if="wasRead" @click="$emit('unmark', id)">
        Mark unread
      </button>
      <div v-if="isOpenLocale">
        <hr />
        <p >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga sunt necessitatibus, deleniti officiis, iusto ab modi culpa sed cupiditate ratione, at aut quam eligendi. Pariatur, adipisci? Aliquid voluptatum placeat animi?</p>
        <button class="btn primary" v-if="!wasRead" @click="mark">Read News</button>
      </div>

    </div>
</template>

<script>

export default {
  // props: ['title'],
  props: {
    wasRead: Boolean,
    title: {
      type: String,
      required: true
    },
    id: {
      type: Number,
      required: true
    },
    isOpen: {
      type: Boolean,
      required: false,
      default: true,
      validator (value) {
        return true
      }
    }
  },
  emits: {
    'open-news': null,
    'read-news' (id) {
      if (id) {
        return true
      }
      console.warn('No id for emit "read-news')
      return false
    },
    'unmark' (id) {
      if (id) {
        return true
      }
      console.warn('No id for emit "unmark')
      return false
    }
  },
  data () {
    return {
      isOpenLocale: this.isOpen
    }
  },
  methods: {
    open () {
      this.isOpenLocale = !this.isOpenLocale
      if (this.isOpenLocale) {
        this.$emit('open-news', 42, 24)
      }
    },
    mark () {
      this.isOpenLocale = false
      this.$emit('read-news', this.id)
    }
    // unmark () {
    //   this.$emit('unmark', this.id)
    // }
  }
}
</script>
