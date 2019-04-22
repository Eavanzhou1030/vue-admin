import Vue from 'vue'
import Vuex from ' vuex'
import getters from './getters'
import errorLog from './modules/errorLog'
import permission from './modules/permission'

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    errorLog,
    permission,
  },
  getters,
})

export default store