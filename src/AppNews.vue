<template>
  <div class="card" >
      <h3>{{ title }}</h3>
      <app-button
        @action="open"
      >{{isOpenLocale ? 'Close' : 'Open'}}
      </app-button>
      <app-button
        :color="'danger'"
        v-if="wasRead"
        @action="$emit('unmark', id)"
      >Mark unread</app-button>
      <div v-if="isOpenLocale">
        <hr />
        <p >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga sunt necessitatibus, deleniti officiis, iusto ab modi culpa sed cupiditate ratione, at aut quam eligendi. Pariatur, adipisci? Aliquid voluptatum placeat animi?</p>
        <app-button
          color="primary"
          v-if="!wasRead"
          @action="mark"
        >Read News</app-button>
      </div>

    </div>
</template>

<script>
import AppButton from './AppButton'

export default {
  // props: ['title'],
  // emits: ['open-news],
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
  },
  components: { AppButton }
}
</script>
