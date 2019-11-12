import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/component',
    name: 'Component',
    // route level code-splitting
    // this generates a separate chunk (components.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "components" */ '../views/Component.vue')
  },
  {
    path: '/brick',
    name: 'Brick',
    component: () => import('../views/Brick.vue')
  },
  {
    path: '/components/About',
    name: 'About',
    component: () => import('@/components/About.vue')
  },
  {
    path: '/components/Subheader',
    name: 'Subheader',
    component: () => import('@/components/Subheader.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
