import router from './router'
import store from './store'
import { Message } from 'element-ui'
import nprogress from 'nprogress'
import 'nprogress/nprogress.css'
import {getToken} from '@/utils/auth'

function hasPermission(roles, routes) {
  if(routes.meta && routes.meta.roles) {
    return roles.some(role => routes.meta.roles.includes(role))
  }
  return true
}

const whiteList = ['/login', '/authorized']

router.beforeEach((to, from, next) => {
  nprogress.start();
  if(getToken()) {
    if(to.path === '/login') {
      next({ path: '/' })
      nprogress.done()
    } 
    // else if () {
      // 
    // }
  } else {
    if(whiteList.includes(to.path)) {
      next()
    } else {
      next({path: '/login'})
      nprogress.done()
    }
  }
});

router.afterEach((to, from, next) => {
  nprogress.done()
})