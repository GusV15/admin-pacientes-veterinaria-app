<template >
  <section>
    <div class="jumbotron">
      <h2>{{ "History Appointment" | pasarAMayuscula }}</h2>
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
      <div
        class="media alert alert-info"
        v-for="(cita, index) in mostrarAtendidos(formData.nombre)"
        :key="index"
      >
        <!--  <img v-if="cita.atendido"  :src="cita.foto" width="150" :alt="cita.nombre" :style="{'border-radius': '10px'}">  -->
        <div class="media-body ml-4">
          <h6 class="mt-0">
            <b>
              {{ "dating history" | pasarAMayuscula }} {{ index + 1 }} -
              {{ "create" | pasarAMayuscula }}
              {{ convertirFyh(cita.fecha_hora_atencion) }}</b
            >
          </h6>
          <p>
            Pet: <b>{{ cita.nombre }}</b>
          </p>
          <p>
            Human Name: <b>{{ cita.nombre_duenio }}</b>
          </p>
          <p>
            Date and time of attention: <b>{{ cita.fecha_hora_atencion }}</b>
          </p>
          <p>
            Email: <b>{{ cita.email }}</b>
          </p>
          <p>
            Observation: <b>{{ cita.sintomas }}</b>
          </p>
          <!--  <p>atendido: <b>{{ cita.atendido }}</b></p> -->
          <!-- <button class="btn btn-danger mt-3" @click="deleteHistorial(cita.id)">DELETE</button> -->
        </div>
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
        >Total de registros:
        {{ calcularHistorialPorNombre.totalEnGeneral }}</span
      >
      <span :class="getClass(estado)" v-else-if="this.formData.nombre != null">
        Se encontro {{ calcularHistorialPorNombre.cantidadPorNombre }} de
        {{ calcularHistorialPorNombre.totalEnGeneral }} registros
      </span>
    </div>
  </section>
</template>

<script lang="js">

export default  {
  name: 'src-components-history-appoiment',
  props: [],
  
  mounted () {
  this.getCitas()
  },

  data () {
    return {
      url:"https://62b25de3c7e53744afcb7292.mockapi.io/admin-vet/citas/",
      citas:[],
      nombreMinLength:2,
      estado:false,
      formData : this.getInicialData(),
      formDirty : this.getInicialData(),
      cantHistorial :0,
    }
  },
  methods: {
  convertirFyh(fyh) {
    return new Date(fyh).toLocaleString()
  },
  
  async getCitas() {
    try {
      let { data: citas } = await this.axios(this.url)
      console.log('AXIOS GET citas', citas)
      this.citas = citas
      this.cantHistorial=citas.length
      this.$emit('cantHistorial',this.cantHistorial);
    }
    catch(error) {
      console.error('Error en getCitas()', error.message);
    }
  },

  mostrarAtendidos(nom){
    return !nom ?
    this.citas.filter(cita => cita.atendido)
    :this.citas.filter(cita => cita.atendido && cita.nombre.toUpperCase().includes(nom.toUpperCase()));
  },

  obtenerCantidadAtendidos(){
    return this.calcularHistorialPorNombre.totalEnGeneral;
  },
  
  getInicialData() {
    return {
      nombre: null,
    }
  },
  enviar() {
    this.formData = this.getInicialData(),
    this.formDirty = this.getInicialData();
  },
  pasarAMayuscula(nom){
    if(nom){
      return nom.toUpperCase();
    }
  },

  getClass(estado) {
    return [{ 'alert alert-secondary':estado,'alert alert-success':!estado }, 'text-black', 'p-2', 'rounded'];          
  }

},
computed: {
  calcularHistorialPorNombre() {
    let cant = this.citas.filter(cita => cita.atendido && (cita.nombre.toUpperCase().includes(this.pasarAMayuscula(this.formData.nombre)))).length;
    let total = this.citas.filter(cita => cita.atendido).length;
    return {
            ningunoPorNombre : cant == 0,
            existeEnGeneral: total > 0,
            existePorNombre: cant > 0,
            cantidadPorNombre : cant,
            totalEnGeneral : total,
            todos : cant == total,
    }
  }
}
}


</script>

<style scoped lang="css">
.jumbotron {
  background-color: white;
}

hr {
  background-color: darkgray;
}

pre {
  color: black;
}
p {
  margin: 0;
  color: black;
}
h5 {
  margin: 0;
}
</style>