import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLogin: true,
    pacientes: [],
  },
  actions: {
    setValueIsLogin({ commit }, value) {
      console.log('action', value);
      commit('refreshIsLogin', value);
    },

    getPacientes({ commit }) {
      /* delay(1000)
          .then(() => { commit('incrementar',cant) })
          .catch( error => console.error(error) ) */
      try {
        let { data: pacientes } = axios(
          'https://62b25de3c7e53744afcb7292.mockapi.io/admin-vet/pacientes'
        );
        console.log(pacientes);

        commit('guardarPacientes', pacientes);
      } catch (error) {
        console.error(error);
      }
    },
  },
  mutation: {
    refreshIsLogin(state, value) {
      console.log('mutation', value);
      state.isLogin = value;
    },

    guardarPacientes(state, pacientes) {
      console.warn(
        'mutations -> guardarPacientes',
        state,
        pacientes,
        new Date().toLocaleString()
      );
      state.pacientes = pacientes;
    },
  },
});
