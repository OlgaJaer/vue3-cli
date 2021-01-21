import { createRouter, createWebHistory } from 'vue-router'
import Login from './views/Login.vue'

createRouter({
  history: createWebHistory,
  routes: [
    { path: '/login', component: Login }

  ]
})
