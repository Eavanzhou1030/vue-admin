import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // 导航菜单
    menu: [],
    // 导航侧边栏折叠状态
    collapse: JSON.parse(localStorage.collapse || false),
    // 顶部导航栏标题
    headerNavTitle: '客户运营系统',
  },
  mutations: {
    SET_MENU(state, payload) {
      state.menu = payload;
    },
    TOGGLE_COLLAPSE(state) {
      state.collapse = !state.collapse;
      localStorage.collapse = state.collapse;
    },
    UPDATE_HEADERNAVTITLE(state, payload) {
      state.headerNavTitle = payload;
    }
  }
})