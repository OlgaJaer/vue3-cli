import { createApp } from 'vue'
import App from './App.vue'
import translitePlagin from './components/translitePlagin'
import './theme.css'

const ru = {
  app: {
    title: 'Как работает плагин во Vue',
    changeBtn: 'Переключить язык'
  }
}
const en = {
  app: {
    title: 'How works a plagin in Vue',
    changeBtn: 'Toggle language'

  }
}

const app = createApp(App)

app.use(translitePlagin, { ru, en })
app.mount('#app')
