import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

import { CITAS, PACIENTES, ANIMAL_GIFS } from './endpoints';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    username: null,
    auth: false,
    pacientes: [],
    citasPendientes: [],
    gifAnimales: [],
  },
  actions: {
    // Auth
    logIn({ commit }, payload) {
      commit('doLogin', payload);
    },
    logOut({ commit }, payload) {
      commit('doLogout', payload);
    },
    // Citas
    async getCitas({ commit }) {
      try {
        let { data: citas } = await axios(CITAS);
        console.log('AXIOS GET Citas', citas);
        let citasPendientes = citas.filter((cita) => !cita.atendido);
        commit('guardarCitasPendientes', citasPendientes);
      } catch (error) {
        console.error('Error en getCitas()', error.message);
      }
    },
    async editarCitaPendiente({ commit }, { citaAtendida, id }) {
      try {
        let { data: citaActualizada } = await axios.put(
          CITAS + id,
          citaAtendida,
          { 'content-type': 'application/json' }
        );
        console.log('AXIOS PUT Citas', citaActualizada);
        commit('guardarCitaEditada', citaActualizada);
        this.obtenerCitas();
      } catch (error) {
        console.error('Error en pasarAHistorial()', error.message);
      }
    },
    async eliminarCitaPendiente({ commit }, id) {
      try {
        let { data: cita } = await axios.delete(CITAS + id);
        console.log('AXIOS DELETE Cita', cita);
        commit('eliminarCitaPendiente', id);
      } catch (error) {
        console.error('Error en eliminarCita()', error.message);
      }
    },
    // Pacientes
    async getPacientes({ commit }) {
      try {
        let { data: pacientes } = await axios(PACIENTES);
        commit('guardarPacientes', pacientes);
      } catch (error) {
        console.error(error);
      }
    },
    async agregarPaciente({ commit }, pacienteNuevo) {
      try {
        let { data: paciente } = await axios.post(PACIENTES, pacienteNuevo, {
          'content-type': 'application/json',
        });
        console.log('AXIOS POST paciente', paciente);

        commit('guardarPaciente', paciente);
      } catch (error) {
        console.error('Error en posPaciente()', error.message);
      }
    },
    async editarPaciente({ commit }, payload) {
      try {
        let { data: paciente } = await axios.put(
          PACIENTES + payload.id,
          payload.pacienteEditado,
          { 'content-type': 'application/json' }
        );
        console.log('AXIOS PUT paciente', paciente);
        commit('modificarPaciente', paciente);
      } catch (error) {
        console.error('Error en editarPaciente()', error.message);
      }
    },
    async eliminarPaciente({ commit }, id) {
      try {
        let { data: paciente } = await axios.delete(PACIENTES + id);
        console.log('AXIOS DELETE paciente', paciente);
        commit('eliminarPaciente', paciente);
      } catch (error) {
        console.error('Error en deletePaciente()', error.message);
      }
    },
    async getAnimalGifs({ commit }) {
      try {
        let { data: animalGifs } = await axios(ANIMAL_GIFS);
        commit('guardarGifsAnimales', animalGifs);
        console.log('AXIOS GET animal gifs', animalGifs);
      } catch (error) {
        console.error('Error en getAnimalGifs()', error.message);
      }
    },
  },
  mutations: {
    // Auth
    doLogin(state, { auth, name }) {
      state.auth = auth;
      state.username = name;
    },
    doLogout(state, { auth, name }) {
      state.auth = auth;
      state.username = name;
    },
    // Citas
    guardarCitasPendientes(state, citasPendientes) {
      state.citasPendientes = citasPendientes;
    },
    guardarCitaEditada(state, citaActualizada) {
      let index = state.citasPendientes.findIndex(
        (cita) => cita.id == citaActualizada.id
      );
      if (index == -1) throw new Error('Cita no encontrada.');
      state.citasPendientes.splice(index, 1, citaActualizada);
    },
    eliminarCitaPendiente(state, id) {
      let index = state.citasPendientes.findIndex((cita) => cita.id == id);
      if (index == -1) throw new Error('Cita no encontrada.');
      state.citasPendientes.splice(index, 1);
    },
    // Pacientes
    guardarPacientes(state, pacientes) {
      state.pacientes = pacientes;
    },
    guardarPaciente(state, pacienteNuevo) {
      if (state.pacientes.find((paciente) => paciente.id == pacienteNuevo.id))
        throw new Error(`Paciente: ${pacienteNuevo.nombre} ya existe.`);
      state.pacientes.push(pacienteNuevo);
    },
    modificarPaciente(state, paciente) {
      let index = state.pacientes.findIndex((user) => user.id == paciente.id);
      if (index == -1) throw new Error('paciente no encontrado');
      state.pacientes.splice(index, 1, paciente);
    },
    eliminarPaciente(state, paciente) {
      let index = state.pacientes.findIndex((p) => p.id == paciente.id);
      if (index == -1) throw new Error('paciente no encontrado');
      state.pacientes.splice(index, 1);
    },
    guardarGifsAnimales(state, gifAnimales) {
      state.gifAnimales = gifAnimales;
    },
  },
});
