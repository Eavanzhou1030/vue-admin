import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'
import 'normalize.css/normalize.css'
import store from './store'

import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import i18n from './lang'

Vue.config.productionTip = false

Vue.use(Element, {
  i18n: (key, value) => i18n.t(key, value)
})

new Vue({
  render: h => h(App),
  router,
  store,
  i18n,
}).$mount('#app')
