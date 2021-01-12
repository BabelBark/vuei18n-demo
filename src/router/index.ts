import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import LocalComponents from '../views/LocalComponents.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'LocalComponents',
    component: LocalComponents
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
