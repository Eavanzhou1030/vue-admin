import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export const constantRoutes = [
  {
    path: '/',
    name: 'login',
    component: () => import('@/views/login/index')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/index')
  }
];

export const asyncRoutes = [];


const createRouter = new Router({
  scrollBehavior: () => ({y: 0}),
  routes: constantRoutes,
})

const router = createRouter;

export default router;