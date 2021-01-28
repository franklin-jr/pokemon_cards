import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Main from '@/layout/Main.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    component: Main,
    children: [
      {
        path: '/',
        name: 'Home',
        component: Home
      },
      {
        path: '/pokemon/:id',
        name: 'Pokemon',
        component: () => import('@/views/DetailsPokemon.vue')
      },
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
