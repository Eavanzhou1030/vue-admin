import { constantRoutes, asyncRoutes } from './router';

function hasPermission(roles, route) {
  if(route.meta && route.meta.roles) {
    return roles.some(role => route.meta.roles.include(role))
  }
  return true
}

function filterAsyncRoute(routes, roles) {
  let res = []

  routes.forEach(route => {
    let tmp = { ...route }
    if(hasPermission(roles, route)) {
      if(tmp.children) {
        tmp.children = filterAsyncRoute(tmp.children, roles)
      }
      res.push(tmp)
    }
  })
  return res
}

const permission = {
  state: {
    routes: [],
    addRoutes: []
  },
  mutations: {
    SET_ROUTES(state, route) {
      state.addRoutes = route
      state.routes = constantRoutes.concat(route)
    }
  },
  actions: {
    generateRoute({ commit }, data) {
      return new Promise(resolve => {
        let { roles } = data
        let accessRoute
        if(roles.includes('admin')) {
          accessRoute = asyncRoutes
        } else {
          accessRoute = filterAsyncRoute(asyncRoutes, roles)
        }
        commit('SET_ROUTES', accessRoute)
        resolve(accessRoute)
      })
    }
  }
}

export default permission;