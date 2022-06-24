<template >

  <section class="src-components-history-appoiment">
     <div class="jumbotron">
    <h2>History Appointment</h2>
      <hr>
      <br>
   
   <form  novalidate @submit.prevent="enviar()">

      <!-- Campo nombre -->
      <div class="form-group">
        <label for="nombre">Nombre</label>
        <input 
          id="nombre" 
          class="form-control" 
          type="text"
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
<!--           <img v-if="cita.atendido"  :src="cita.foto" width="200" :alt="cita.nombre" :style="{'border-radius': '10px'}">  -->   
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
         <span v-if="calcularHistorialPorNombre.ninguno">History is empty</span>
          <span v-else> Number of records: {{calcularHistorialPorNombre.totalAtendidos}} </span>
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
totalAtendidos:0,
totalPorNombre:0,
nombreMinLength:2,
nombre:null,
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
          console.error('Error en getcitas()', error.message)
        }
      },

    mostrarAtendidos(nom){
      console.log(nom);
      console.log(this.calcularHistorialPorNombre.nombre)
     return nom==null || nom==""?this.citas.filter(cita => cita.atendido):this.citas.filter(cita => cita.atendido && cita.nombre==nom)
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
  let totalAtendidos= this.citas.filter(cita => cita.atendido).length
  let totalPorNombre= this.citas.filter(cita => cita.nombre).length
  let nombre=this.formData.nombre
return{
  ninguno : totalAtendidos == 0,
totalAtendidos:totalAtendidos,
totalPorNombre:totalPorNombre,
nombre:nombre
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
    color: #333;
  }
 p { margin: 0;
  }
  h5 { margin: 0; }
</style>
