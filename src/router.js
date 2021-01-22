import { createRouter, createWebHistory } from 'vue-router'
import Login from './views/Login.vue'
import Forget from './views/Forget.vue'
import Dashboard from './views/Dashboard.vue'
// import Mail from './views/Mail.vue'
import AppEmailBody from './components/AppEmailBody.vue'
import NotFound from './views/NotFound.vue'

const Mail = () => import('./views/Mail.vue')

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/login', component: Login, alias: '/' },
    { path: '/forget', component: Forget, meta: { cantEnter: true } },
    {
      path: '/dashboard',
      component: Dashboard,
      name: 'home',
      beforeEnter () {
        console.log('beforeEnter')
      }
    },
    {
      path: '/mail',
      component: Mail,
      children: [
        { path: ':mailId?', component: AppEmailBody, name: 'email', props: true }
      ]
    },
    { path: '/:notFound(.*)', component: NotFound }
  ],
  linkActiveClass: 'active',
  linkExactActiveClass: 'active'
})

router.beforeEach((to, from, next) => {
  // console.log('to', to)
  // console.log('from', from)
  console.log('beforeEach')
  if (to.meta.cantEnter) {
    // next('/mail')
    next({ name: 'home' })
  } else {
    next()
  }

  next()
})

router.afterEach((to, from) => {

})

export default router
