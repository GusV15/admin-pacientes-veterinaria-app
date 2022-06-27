<template >

  <section class="src-components-patient-list">
   <div class="jumbotron">
    <h2>{{ "Listado de Pacientes" | pasarAMayuscula }}</h2>
    <hr />
 
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
             <th>ACCION</th>
      </tr>
     
      <tr v-for="(paciente, index) in pacientes" :key="index" >
       <td>{{ paciente.nombre }}</td>
        <td>{{ paciente.especie }}</td>
        <td>{{ paciente.raza }}</td>
        <td>{{ paciente.edad }}</td>
        <td>{{ paciente.sexo}}</td>
        <td>{{ paciente.nombre_duenio}}</td>
        <td>{{ paciente.direccion}}</td>
        <td>{{ paciente.email}}</td>
        <td class="finp"><button  class="btn btn-danger" >X</button><button class="btn btn-warning ml-2" >E</button></td>
         
        
      </tr>
      
    </table>
    </div>
     <h3 v-else class="alert alert-info">No hay Pacientes Registrados</h3>
    </div>
<span  class="alert alert-secondary ">{{ "Cantidad de registros: " | pasarAMayuscula }} {{this.actualizarRegistros.total}}</span><br><br>
    
  </section>

</template>

<script >

  export default  {
    name: 'src-components-patient-list',
    props: [],
    mounted () {
this.getPacientes();
    },
    data () {
      return {
 url: 'https://62b25de3c7e53744afcb7292.mockapi.io/admin-vet/pacientes',
      pacientes:[],
      }
    },
    methods: {
async getPacientes() {
      try {
        let { data: pacientes } = await this.axios(this.url)
        console.log('AXIOS GET pacientes', pacientes)
        this.pacientes = pacientes
      }
      catch(error) {
        console.error('Error en getPacientes()', error.message)
      }
    },
    },
    computed: {
actualizarRegistros(){
let totalRegistros=this.pacientes.length

return{
total:totalRegistros 
} 
  }
    }
}


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

.item { text-align: right; }
.finp { width: 60%; }

label{
display: inline-block;
width: 80px;
}

td{
color:black;
background-color:whitesmoke;
}
input{
border-radius: 5px;
}
.item { text-align: right; }
.finp { width: 60%; }
</style>
