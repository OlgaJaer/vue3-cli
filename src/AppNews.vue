<template>
  <div class="card center" >
      <h3>{{ title }}</h3>
      <button class="btn" @click="open">{{isOpenLocale ? 'Close' : 'Open'}} </button>
      <p v-if="isOpenLocale">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga sunt necessitatibus, deleniti officiis, iusto ab modi culpa sed cupiditate ratione, at aut quam eligendi. Pariatur, adipisci? Aliquid voluptatum placeat animi?</p>
    </div>
</template>

<script>
export default {
  // props: ['title'],
  props: {
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
    }
  }
}
</script>
