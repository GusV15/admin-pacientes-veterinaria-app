import Vue from 'vue';

const miMixinGlobal = {
  methods: {
    saludar() {
      return 'Hola Bienvenido a nuestro servicio Veterinario';
    },
    // Auth
    loguearse(name) {
      this.$store.dispatch('logIn', { name, auth: true });
    },
    desloguearse() {
      this.$store.dispatch('logOut', { name: null, auth: false });
    },
    // Citas Pendientes
    obtenerCitas() {
      this.$store.dispatch('getCitas');
    },
    editarCitaPendiente(citaAtendida, id) {
      this.$store.dispatch('editarCita', {
        citaAtendida,
        id,
      });
    },
    eliminarCitaPendiente(id) {
      this.$store.dispatch('eliminarCitaPendiente', id);
    },
    // Pacientes de Veterinaria
    obtenerPacientes() {
      this.$store.dispatch('getPacientes');
    },
    agregarPaciente(nuevoPaciente) {
      this.$store.dispatch('agregarPaciente', nuevoPaciente);
    },
    editarPaciente(pacienteEditado, id) {
      this.$store.dispatch('editarPaciente', { pacienteEditado, id });
    },
    eliminarPaciente(paciente) {
      this.$store.dispatch('eliminarPaciente', paciente);
    },
    getAnimalGifs() {
      this.$store.dispatch('getAnimalGifs');
    },
  },
  computed: {
    mostrarDatosLogin() {
      return {
        auth: this.$store.state.auth,
        username: this.$store.state.username,
      };
    },
    mostrarCitasPendientes() {
      return this.$store.state.citas.filter((cita) => !cita.atendido);
    },
    mostrarCitasAtendidas() {
      return this.$store.state.citas.filter((cita) => cita.atendido);
    },
    mostrarPacientes() {
      return this.$store.state.pacientes;
    },
    mostrarGifsDeAnimales() {
      return this.$store.state.gifAnimales;
    },
  },
};

Vue.mixin(miMixinGlobal);
