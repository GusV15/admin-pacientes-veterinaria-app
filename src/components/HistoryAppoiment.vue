<template >

  <section class="src-components-history-appoiment">
     <div class="jumbotron">
    <h2>History Appointment</h2>
      <hr>
      <hr>
      <br>


<button class="btn btn-success mr-2 mb-3" @click="getMascotas()">GET</button>
      <button class="btn btn-info mb-3" @click="postMascotas()">POST</button>

      <div class="media alert alert-info" v-for="(mascota,index) in mascotas" :key="index">
          <img :src="mascota.foto" width="400" :alt="mascota.nombre" :style="{'border-radius': '10px'}">
          <div class="media-body ml-4">
              <h4 class="mt-0">
                <u>Historial de Mascota {{ index + 1 }} - ID: {{ mascota.id }} - creado: {{ convertirFyh(mascota.fechaDeAtencion) }}</u>
              </h4>
              <br>
              <p>Nombre: <b>{{ mascota.nombre }}</b></p>
              <p>Edad: <b>{{ mascota.edad }}</b></p>
              <p>Especie: <b>{{ mascota.especie }}</b></p>
              <p>Raza: <b>{{ mascota.raza }}</b></p>
              <p>Sexo: <b>{{ mascota.sexo }}</b></p>
              <p>Observación: <i>{{ mascota.observacion}}</i></p>
              <p>Fecha de Atencion: <b>{{ mascota.fechaDeAtencion }}</b></p>
              
              <p>Nombre de Humano: {{ mascota.nombreDuenio }}</p>
              <p>Dirección De Humano: <i><u>{{ mascota.direccion }}</u></i> </p>

              <button class="btn btn-warning mr-3 mt-3" @click="putMascota(mascota.id)">PUT</button>
              <button class="btn btn-danger mt-3" @click="deleteMascota(mascota.id)">DELETE</button>
          </div>
      </div>

      </div>
  </section>

</template>

<script lang="js">

  export default  {
    name: 'src-components-history-appoiment',
    props: [],
    mounted () {
this.getMascotas()
    },
    data () {
      return {
url:'https://628b0d3f667aea3a3e2655ba.mockapi.io/HistoryAppoiment',
mascotas:[]
      }
    },
    methods: {
convertirFyh(fyh) {
        return new Date(fyh).toLocaleString()
      },
      /* ---------------------------------- */
      /*           API REST : GET           */
      /* ---------------------------------- */
      async getMascotas() {
        try {
          let { data: mascotas } = await this.axios(this.url)
          console.log('AXIOS GET mascotas', mascotas)
          this.mascotas = mascotas
        }
        catch(error) {
          console.error('Error en getMascotas()', error.message)
        }
      },
    },
    computed: {

    }
}


</script>

<style scoped lang="css">
  .src-components-history-appoiment {

  }
    .jumbotron {
    /* Permalink - use to edit and share this gradient: https://colorzilla.com/gradient-editor/#b4ddb4+0,83c783+17,52b152+33,008a00+67,005700+83,002400+100;Green+3D+%231 */
    background: #b4ddb4; /* Old browsers */
    background: -moz-linear-gradient(left,  #b4ddb4 0%, #83c783 17%, #52b152 33%, #008a00 67%, #005700 83%, #002400 100%); /* FF3.6-15 */
    background: -webkit-linear-gradient(left,  #b4ddb4 0%,#83c783 17%,#52b152 33%,#008a00 67%,#005700 83%,#002400 100%); /* Chrome10-25,Safari5.1-6 */
    background: linear-gradient(to right,  #b4ddb4 0%,#83c783 17%,#52b152 33%,#008a00 67%,#005700 83%,#002400 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#b4ddb4', endColorstr='#002400',GradientType=1 ); /* IE6-9 */

    color: #222;
  }

  hr {
    background-color: #ddd;
  }

  pre {
    color: #333;
  }
</style>
