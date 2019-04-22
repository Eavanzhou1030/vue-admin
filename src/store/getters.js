const getters = {
  sidebar: state => state.app.sidebar,
  language: state => state.app.language,
  size: state => state.app.size,
  device: state => state.app.device,
  errorLogs: state => state.errorLog.logs,
  permission_routes: state => state.permission.routes,
  addRoutes: state => state.permission.addRoutes
}

export default getters