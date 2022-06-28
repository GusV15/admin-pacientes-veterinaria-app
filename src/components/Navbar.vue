<template>
  <section class="src-components-navbar">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <router-link to="{ name: 'Dashboard' }">
        <a class="navbar-brand" href="#">Inicio</a>
      </router-link>

      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <!-- Ruta al componente Add Appointment -->
          <li class="nav-item">
            <router-link to="/addappointment">
              <a class="nav-link" href="#">Add Appointment</a>
            </router-link>
          </li>

          <!-- Ruta al componente Appointments -->
          <li class="nav-item">
            <router-link to="/appointments">
              <a class="nav-link" href="#">Appointment</a>
            </router-link>
          </li>

          <!-- Ruta al componente Add HistoryAppoiment -->
          <li class="nav-item">
            <router-link to="/historyappoiment">
              <a class="nav-link" href="#">History Appoiment</a>
            </router-link>
          </li>

          <!-- Ruta al componente Add Patients -->
          <li class="nav-item">
            <router-link to="/addpacients">
              <a class="nav-link" href="#">Agregar Paciente</a>
            </router-link>
          </li>

          <!-- Ruta al componente List Patients -->
          <li class="nav-item">
            <router-link to="/patientlist">
              <a class="nav-link" href="#">Lista de Pacientes</a>
            </router-link>
          </li>

          <!-- Ruta al componente Edit Patient -->
          <li class="nav-item">
            <router-link to="/editpatient">
              <a class="nav-link" href="#">Editar Paciente</a>
            </router-link>
          </li>
        </ul>
      </div>
    </nav>
  </section>
</template>

<script lang="js">

  export default  {
    name: 'src-components-navbar',
    props: [],
    mounted () {

    },
    data () {
      return {

      }
    },
    methods: {

    },
    computed: {

    }
}
</script>

<style scoped lang="css">
.src-components-navbar {
}
</style>
