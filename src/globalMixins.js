import Vue from 'vue';
const miMixinGlobal = {
  methods: {
    saludar() {
      return 'Hola Bienvenido a nuestro servicio Veterinario';
    },

    obtenerPacientes() {
      this.$store.dispatch('getPacientes');
    },
  },
  computed: {
    mostrarPacientes() {
      let pacientes = this.$store.state.pacientes;
      return pacientes;
    },
  },
};

Vue.mixin(miMixinGlobal);
