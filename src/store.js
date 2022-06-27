import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLogin: true,
  },
  actions: {
    setValueIsLogin({commit}, value) {
      commit('refreshIsLogin',value);
    },
  },
  mutation: {
    refreshIsLogin(state, value) {
      state.isLogin = value;
    },
  },
});
