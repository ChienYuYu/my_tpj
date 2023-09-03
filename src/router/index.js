import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/20230816/ChartTest01',
    name: 'chart01',
    component: () => import(/* webpackChunkName: "about" */ '../views/20230816/ChartTest01.vue')
  },
  {
    path: '/20230903/ScrollTest',
    name: 'chart01',
    component: () => import(/* webpackChunkName: "about" */ '../views/20230903/ScrollTest.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
