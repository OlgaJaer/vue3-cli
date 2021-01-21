<template>
  <div class="card">
    <h2>{{ $i18n('app.title') }}</h2>

  <nutton class="btn" @click="changeLang">{{$i18n('app.changeBtn')}}</nutton>
  </div>
</template>

<script>

export default {
  inject: ['changeI18N'],
  methods: {
    changeLang () {
      this.changeI18N('en')
      this.$forceUpdate()
    }

  }
}
</script>
