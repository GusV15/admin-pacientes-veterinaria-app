<template >

  <section class="src-components-history-appoiment">
     <div class="jumbotron">
    <h2>History Appointment</h2>
      <hr>
      <br>
   
   <form  novalidate @submit.prevent="enviar()">

      <!-- Campo nombre -->
      <div class="form-group">
        <label for="nombre">Name</label>
        <input 
          id="nombre" 
          class="form-control" 
          type="search"
          placeholder="Search by name"
          v-model.trim="formData.nombre"
          @input="formDirty.nombre=true"
        >
       
        <div v-if="(!formData.nombre || formData.nombre.length<3) && formDirty.nombre" class="alert alert-danger mt-1">
          <div v-if="!formData.nombre">Campo requerido</div>
          <div v-else-if="formData.nombre.length<3">Este campo requiere al menos 3 caracteres</div>
        </div>
      </div>
      </form>
        <br>
      <div  class="media alert alert-info" v-for="(cita,index) in mostrarAtendidos(formData.nombre)  "   :key="index" >    
  <img v-if="cita.atendido"  :src="cita.foto" width="150" :alt="cita.nombre" :style="{'border-radius': '10px'}"> 
         <div  class="media-body ml-4">
              <h5 class="mt-0">
                <u>dating history {{ index + 1 }}  - create: {{ convertirFyh(cita.fecha_hora_atencion) }}</u>
              </h5>
              <p>Pet: <b>{{ cita.nombre }}</b></p>
              <p >Human Name: <b>{{ cita.nombre_duenio }}</b></p>
              <p>Date and time of attention: <b>{{ cita.fecha_hora_atencion }}</b></p>
              <p>Email: <b>{{ cita.email }}</b></p>
              <p>Observation: <b>{{ cita.sintomas }}</b></p>
             <!--  <p>atendido: <b>{{ cita.atendido }}</b></p> -->
              <!-- <button class="btn btn-danger mt-3" @click="deleteHistorial(cita.id)">DELETE</button> -->
          </div>
          </div>
         <h6 class="alert alert-secondary">
         <div v-if="!calcularHistorialPorNombre.existeEnGeneral " > No hay Registro</div>
         <span v-if="this.formData.nombre ==null || this.formData.nombre ==''">Total de registros: {{ calcularHistorialPorNombre.totalEnGeneral }}</span>
        <!--   <span v-else-if="this.formData.nombre !=null">All records {{ calcularHistorialPorNombre.cantidadPorNombre }} </span> -->
                  <span v-else-if="this.formData.nombre !=null">
                      Se encontro {{ calcularHistorialPorNombre.cantidadPorNombre }} de {{ calcularHistorialPorNombre.totalEnGeneral }} registros
                   <!--   {{calcularHistorialPorNombre.todos}}
                     {{this.formData.nombre!=''}} -->
                  </span>
                  
                 
      </h6>
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
url:'https://62861febf0e8f0bb7c10b9cd.mockapi.io/citas',
citas:[],
nombreMinLength:2,
formData : this.getInicialData(),
formDirty : this.getInicialData()
      }
    },
methods: {
      convertirFyh(fyh) {
        return new Date(fyh).toLocaleString()
      },
      /* ---------------------------------- */
      /*           API REST : GET           */
      /* ---------------------------------- */
      async getCitas() {
        try {
          let { data: citas } = await this.axios(this.url)
          console.log('AXIOS GET citas', citas)
          this.citas = citas
        }
        catch(error) {
          console.error('Error en getCitas()', error.message)
        }
      },

    mostrarAtendidos(nom){
     return nom==null || nom==""?
     this.citas.filter(cita => cita.atendido)
     :this.citas.filter(cita => cita.atendido && cita.nombre== nom)
    },

     getInicialData() {
      return {
      nombre: null,
      }
    },

     enviar() {
      console.log({...this.formData})
      this.formData = this.getInicialData()
      this.formDirty = this.getInicialData()
    }

    },
computed: {
    calcularHistorialPorNombre() {
  let cant = this.citas.filter(cita => cita.atendido && cita.nombre==this.formData.nombre).length
          let total = this.citas.filter(cita => cita.atendido).length
      return{
      /*   ninguno : totalAtendidos == 0,
        totalAtendidos:totalAtendidos,
        totalPorNombre:totalPorNombre,
        nombre:nombre */

              ningunoPorNombre : cant == 0,
              existeEnGeneral: total > 0,
              existePorNombre: cant > 0,
              cantidadPorNombre : cant,
              totalEnGeneral : total,
              todos : cant == total
}
}
    }
}


</script>

<style scoped lang="css">
  .src-components-history-appoiment {

  }
    .jumbotron {
 background-color: white;
  }

  hr {
    background-color: darkgray;
  }

  pre {
    color: black;
  }
 p { margin: 0;
  color:black
  }
  h5 { margin: 0; }
</style>
