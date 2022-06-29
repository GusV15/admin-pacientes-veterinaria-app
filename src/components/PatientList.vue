<template>
  <section class="src-components-patient-list">
    <div class="jumbotron">
      <!-- <button @click="getPacientes()">Traer pacientes</button> -->
      <h2>{{ 'Listado de Pacientes' | pasarAMayuscula }}</h2>
      <hr />
      <form novalidate @submit.prevent="enviar()">
        <!-- Campo nombre -->
        <div class="form-group">
          <label for="nombre">Name</label>
          <input
            id="nombre"
            class="form-control"
            type="search"
            placeholder="Search by name"
            v-model.trim="formData.nombre"
            @input="formDirty.nombre = true"
          />
        </div>
      </form>
      <br />

      <div v-if="this.mostrarPacientes.length" class="table-responsive">
        <table class="table table-dark">
          <tr>
            <th>NOMBRE</th>
            <th>ESPECIE</th>
            <th>RAZA</th>
            <th>EDAD</th>
            <th>SEXO</th>
            <th>HUMANO</th>
            <th>DIRECCION</th>
            <th>EMAIL</th>
            <th class="columnaFija">ACCION</th>
          </tr>

          <tr
            v-for="(paciente, index) in mostrarPorNombre(formData.nombre)"
            :key="index"
          >
            <td>{{ paciente.nombre }}</td>
            <td>{{ paciente.especie }}</td>
            <td>{{ paciente.raza }}</td>
            <td>{{ paciente.edad }}</td>
            <td>{{ paciente.sexo }}</td>
            <td>{{ paciente.nombre_duenio }}</td>
            <td>{{ paciente.direccion }}</td>
            <td>{{ paciente.email }}</td>
            <td class="columnaFija">
              <button
                class="btn btn-danger"
                @click="deletePaciente(paciente.id)"
              >
                X</button
              ><button
                class="btn btn-warning ml-2"
                @click="irAActualizarPaciente(paciente.id)"
              >
                Editar
              </button>
            </td>
          </tr>
        </table>
      </div>
      <h3 v-else class="alert alert-info">No hay Pacientes Registrados</h3>
    </div>
    <span
      class="alert alert-danger"
      v-if="!calcularHistorialPorNombre.existeEnGeneral"
    >
      No hay Registro</span
    >
    <span
      :class="getClass(!estado)"
      v-else-if="this.formData.nombre == null || this.formData.nombre == ''"
      >Total de registros: {{ calcularHistorialPorNombre.totalEnGeneral }}</span
    >
    <span :class="getClass(estado)" v-else-if="this.formData.nombre != null">
      Se encontro {{ calcularHistorialPorNombre.cantidadPorNombre }} de
      {{ calcularHistorialPorNombre.totalEnGeneral }} registros
    </span>
  </section>
</template>

<script>
export default {
  name: 'src-components-patient-list',
  props: [],
  mounted() {
    this.obtenerPacientes();
  },
  data() {
    return {
      estado: false,
      formData: this.getInicialData(),
      formDirty: this.getInicialData(),
      cantPacientes: 0,
    };
  },
  methods: {
    getClass(estado) {
      return [
        { 'alert alert-secondary': estado, 'alert alert-success': !estado },
        'text-black',
        'p-2',
        'rounded',
      ];
    },
    enviar() {
      (this.formData = this.getInicialData()),
        (this.formDirty = this.getInicialData());
    },
    getInicialData() {
      return {
        nombre: null,
      };
    },
    pasarAMayuscula(nom) {
      if (nom) {
        return nom.toUpperCase();
      }
    },
    mostrarPorNombre(nom) {
      return !nom
        ? this.mostrarPacientes
        : this.mostrarPacientes.filter((p) =>
            p.nombre.toUpperCase().includes(nom.toUpperCase())
          );
    },

    async deletePaciente(id) {
      console.log('deletePaciente', id);
      this.$swal({
        title: 'Eliminando Paciente',
        text: '¿Está seguro que desea eliminar el paciente?',
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        confirmButtonText: 'Si, estoy seguro',
      }).then((result) => {
        if (result.value) {
          this.eliminarPaciente(id);
          this.obtenerPacientes();
        }
      });
    },
    async irAActualizarPaciente(id) {
      console.log(id);
      this.$router.push({
        path: '/addpacients',
        name: 'addpacients',
        params: { id: id },
      });
    },
  },

  computed: {
    calcularHistorialPorNombre() {
      let cant = this.mostrarPacientes.filter((p) =>
        p.nombre
          .toUpperCase()
          .includes(this.pasarAMayuscula(this.formData.nombre))
      ).length;
      let total = this.mostrarPacientes.length;
      return {
        ningunoPorNombre: cant == 0,
        existeEnGeneral: total > 0,
        existePorNombre: cant > 0,
        cantidadPorNombre: cant,
        totalEnGeneral: total,
        todos: cant == total,
      };
    },
  },
};
</script>

<style scoped lang="css">
.src-components-patient-list {
}
.jumbotron {
  background-color: cadetblue;
  color: white;
}

hr {
  background-color: #bbb;
}

pre {
  color: white;
}

.item {
  text-align: right;
}
.columnaFija {
  width: 60%;
  position: sticky;
  border-width: 1px 0;
  border-style: 1px solid black;
  border-left-color: black;
  box-shadow: -2px 1px 7px -2px black !important;
  right: 0;
}

label {
  display: inline-block;
  width: 80px;
}

td {
  color: black;
  background-color: whitesmoke;
}
input {
  border-radius: 5px;
}
.item {
  text-align: right;
}
.finp {
  width: 60%;
}

button {
  width: auto;
  font-size: 0.8rem;
  padding: 2px;
}
</style>
