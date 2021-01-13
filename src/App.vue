<template>
  <div class="container">
    <form class="card" @submit.prevent="submitForm">
      <h1>Анкета на Vue разработчика!</h1>
      <div class="form-control">
        <label for="name">Как тебя зовут?</label>
        <input
        type="text"
        id="name"
        placeholder="Введи имя"
        v-model.trim="name"
        >
      </div>

      <div class="form-control">
        <label for="age">Выбери возраст</label>
        <input
          type="number"
          id="age"
          max='70'
          v-model.number="age">
      </div>

      <div class="form-control">
        <label for="city">Твой город</label>
        <select id="city" v-model="city">
          <option value="spb">Санкт-Петербург</option>
          <option value="msk">Москва</option>
          <option value="kzn">Казань</option>
          <option selected value="ufa">Уфа</option>
        </select>
      </div>

      <div class="form-checkbox">
        <span class="label">Готов к переезду в Токио?</span>
        <div class="checkbox">
          <label><input type="radio" name="trip" v-model="relocate" value="yes"/> Да</label>
        </div>

        <div class="checkbox">
          <label><input type="radio" name="trip" v-model="relocate" value="no"/> Нет</label>
        </div>
      </div>

      <div class="form-checkbox">
        <span class="label">Что знаешь во Vue?</span>
        <div class="checkbox">
          <label><input type="checkbox" name="skills" v-model="skills" value="vuex"/> Vuex</label>
        </div>
        <div class="checkbox">
          <label><input type="checkbox" name="skills" v-model="skills" value="cli"/> Vue CLI</label>
        </div>
        <div class="checkbox">
          <label><input type="checkbox" name="skills" v-model="skills" value="router"/> Vue Router</label>
        </div>
      </div>

      <div class="form-checkbox">
        <span class="label">Правила компании</span>
        <div class="checkbox">
          <label><input type="checkbox"  v-model="agree" />С правилами согласен</label>
        </div>
      </div>

      <button type="submit" class="btn primary">Отправить</button>
    </form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      name: '',
      age: 23,
      city: 'ufa',
      relocate: null,
      skills: [],
      agree: false
    }
  },
  methods: {
    submitForm () {
      console.group('Form Data')
      console.log(this.name)
      console.log(this.age)
      console.log(this.city)
      console.log(this.relocate)
      console.log(this.skills)
      console.log(this.agree)

      console.groupEnd()
    }
  }
}
</script>

<style>

</style>
