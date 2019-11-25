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
    component: () => import('../views/Brick.vue'),
    children: [
      { path: 'about', component: () => import('@/components/About.vue')},
      { path: 'addition', component: () => import('@/components/Addition.vue')},
      { path: 'subheader', component: () => import('@/components/Subheader.vue')},
      { path: 'notice', component: () => import('@/components/Notice.vue')}
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
