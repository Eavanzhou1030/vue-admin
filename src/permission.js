// import router from './router'
// import store from './store'
// import { Message } from 'element-ui'
// import nprogress from 'nprogress'
// import 'nprogress/nprogress.css'
// import {getToken} from '@/utils/auth'

// function hasPermission(roles, permissionRoutes) {
//   if(roles.includes('admin')) return true
//   if(!permissionRoutes) return true
//   return roles.some(role => permissionRoutes.includes(role))
// }

// const whiteList = ['/login', '/authorized']

// router.beforeEach((to, from, next) => {
//   nprogress.start();
//   if(getToken()) {
//     if(to.path === '/login') {
//       next({ path: '/' })
//       nprogress.done()
//     } else {
//       // console.log('拉取用户数据');
//     }
//   } else {
//     if(whiteList.includes(to.path)) {
//       next()
//     } else {
//       next({path: '/login'})
//       nprogress.done()
//     }
//   }
// });

// router.afterEach(() => {
//   nprogress.done()
// })