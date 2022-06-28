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

      <div v-if="pacientes.length" class="table-responsive">
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
    this.getPacientes();
  },
  data() {
    return {
      url: 'https://62b25de3c7e53744afcb7292.mockapi.io/admin-vet/pacientes',
      pacientes: [],
      estado: false,
      formData: this.getInicialData(),
      formDirty: this.getInicialData(),
      cantPacientes: 0,
    };
  },
  methods: {
    async getPacientes() {
      try {
        let { data: pacientes } = await this.axios(this.url);
        console.log('AXIOS GET pacientes', pacientes);
        this.pacientes = pacientes;
      } catch (error) {
        console.error('Error en getPacientes()', error.message);
      }
    },
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
        ? this.pacientes
        : this.pacientes.filter((p) =>
            p.nombre.toUpperCase().includes(nom.toUpperCase())
          );
    },

    async deletePaciente(id) {
      console.log('deletePaciente', id);

      if (!confirm('¿Desea eliminar este paciente?')) return;
      try {
        let { data: paciente } = await this.axios.delete(this.url + '/' + id);
        console.log('AXIOS DELETE paciente', paciente);

        let index = this.pacientes.findIndex((p) => p.id == paciente.id);
        if (index == -1) throw new Error('paciente no encontrado');
        this.pacientes.splice(index, 1);
      } catch (error) {
        console.error('Error en deletePaciente()', error.message);
      }
    },
    async irAActualizarPaciente(id) {
      console.log(id);
      this.$router.push({
        path: '/editPatient',
        name: 'editPatient',
        params: { id: id },
      });
    },
  },

  computed: {
    calcularHistorialPorNombre() {
      let cant = this.pacientes.filter((p) =>
        p.nombre
          .toUpperCase()
          .includes(this.pasarAMayuscula(this.formData.nombre))
      ).length;
      let total = this.pacientes.length;
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
