import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export const constantRoutes = [
  {
    path: '/login',
    component: () => import('../views/login/index'),
    hidden: true,
  }
]

export const asyncRoutes = []

export default new Router({
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})