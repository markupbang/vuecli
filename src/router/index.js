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
    name: 'brick',
    component: () => import('../views/Brick.vue'),
    children: [
      { path: '', component: () => import('@/components/BrickHome.vue') },
      { path: 'about', component: () => import('@/components/About.vue')},
      { path: 'addition', component: () => import('@/components/Addition.vue')},
      { path: 'subheader', component: () => import('@/components/Subheader.vue')},
      { path: 'notice', component: () => import('@/components/Notice.vue')},
      { path: 'grid', component: () => import('@/components/Grid.vue')},
      { path: 'eventbnr', component: () => import('@/components/EventBnr.vue')},
      { path: 'plan', component: () => import('@/components/Plan.vue')},
      { path: 'bricktitle', component: () => import('@/components/BrickTitle.vue')},
      { path: 'item', component: () => import('@/components/Item.vue')},
      { path: 'consult', component: () => import('@/components/Consult.vue')},
      { path: 'faq', component: () => import('@/components/Faq.vue')}
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
