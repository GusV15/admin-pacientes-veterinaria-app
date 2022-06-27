<template >

  <section class="src-components-patients">
     <div class="jumbotron">
      <h2>{{ "Registro de Pacientes " | pasarAMayuscula }}</h2>
      <hr />
      <br>
        <vue-form :state="formState" @submit.prevent="enviar()">
    
        <!-- --------------------- -->
        <!--     Campo nombre      -->
        <!-- --------------------- -->
        <validate tag="div">
          <!-- Elemento de entrada -->
          <div clase="item"><label for="nombre">Nombre: </label>
          <input 
           style="width : 450px
          heigth : 50px"
            type="text"
            id="nombre"
            name="nombre" 
            class="finp"
            autocomplete="off"
            v-model.trim="formData.nombre" 
            required
            :minlength="nombreMinLength"
            no-espacios
            
          />
        </div>

          <!-- Mensajes de validación -->
          <field-messages name="nombre" show="$dirty">
            <!-- <div class="alert alert-success mt-1">Success!</div> -->
            <div slot="required" class="alert alert-danger mt-">Campo requerido</div>
            <div slot="minlength" class="alert alert-danger mt-1">
              Este campo requiere como mínimo {{nombreMinLength}} caracteres.
            </div>
            <div slot="no-espacios" class="alert alert-danger mt-1">
              No se permiten espacios intermedios en este campo.
            </div>
          </field-messages>
        </validate>
        <br>

    <!-- --------------------- -->
        <!--     Campo Especie      -->
        <!-- --------------------- -->
        <validate tag="div">
          <!-- Elemento de entrada -->
          <div clase="item"><label for="nombre">Especie: </label>
          <input 
           style="width : 450px
           heigth : 50px"
            type="text"
            id="especie"
            name="especie" 
            class="finp"
            autocomplete="off"
            v-model.trim="formData.especie" 
            required 
            :minlength="nombreMinLength"
            no-espacios
          />
        </div>
          <!-- Mensajes de validación -->
          <field-messages name="especie" show="$dirty">
            <!-- <div class="alert alert-success mt-1">Success!</div> -->
            <div slot="required" class="alert alert-danger mt-1">Campo requerido</div>
            <div slot="minlength" class="alert alert-danger mt-1">
              Este campo requiere como mínimo {{nombreMinLength}} caracteres.
            </div>
            <div slot="no-espacios" class="alert alert-danger mt-1">
              No se permiten espacios intermedios en este campo.
            </div>
          </field-messages>
        </validate>
        <br>

        <!-- --------------------- -->
        <!--     Campo Raza      -->
        <!-- --------------------- -->
        <validate tag="div">
          <!-- Elemento de entrada -->
        <div clase="item"><label for="nombre">Raza: </label>
          <input 
            style="width : 450px
            heigth : 50px"
            type="text"
            id="raza"
            name="raza" 
            class="finp"
            autocomplete="off"
            v-model.trim="formData.raza" 
            required 
            :minlength="nombreMinLength"
            no-espacios
          />
      </div>

          <!-- Mensajes de validación -->
          <field-messages name="raza" show="$dirty">
            <!-- <div class="alert alert-success mt-1">Success!</div> -->
            <div slot="required" class="alert alert-danger mt-1">Campo requerido</div>
            <div slot="minlength" class="alert alert-danger mt-1">
              Este campo requiere como mínimo {{nombreMinLength}} caracteres.
            </div>
            <div slot="no-espacios" class="alert alert-danger mt-1">
              No se permiten espacios intermedios en este campo.
            </div>
          </field-messages>
        </validate>
        <br>


        <!-- --------------------- -->
        <!--      Campo edad       -->
        <!-- --------------------- -->
        <validate tag="div">
          <!-- Elemento de entrada -->
          <div clase="item"><label for="nombre">Edad: </label>
          <input 
           style="width : 50px
          heigth : 50px"
            type="number"
            id="edad"
            name="edad" 
            class="finp"
            autocomplete="off"
            v-model.number="formData.edad" 
            required 
            :min="edadMin"
            :max="edadMax"
          />
          </div>
           <!-- Mensajes de validación -->
          <field-messages name="edad" show="$dirty">
            <!-- <div class="alert alert-success mt-1">Success!</div> -->
            <div slot="required" class="alert alert-danger mt-1">Campo requerido</div>
            <div slot="min" class="alert alert-danger mt-1">
              La edad mínima permitida es de {{edadMin}} años.
            </div>
            <div slot="max" class="alert alert-danger mt-1">
              La edad máxima permitida es de {{edadMax}} años.
            </div>
          </field-messages>
        </validate>
        


        <!-- --------------------- -->
        <!--    Campo Sexo     -->
        <!-- --------------------- -->
       
          <!-- Elemento de entrada -->
        <input class="my-4" type="radio" name="sexo" id="macho"  value="macho" v-model="formData.sexo" checked>
        <label class="radio-inline">Macho </label>   
        
        <input type="radio"  name="sexo" id="hembra" class="ml-3" value="hembra" v-model="formData.sexo" checked>
        <label for="mujer">Hembra </label>
            <br> 
              



              <!-- --------------------- -->
        <!--     Campo Nombre De Dueño      -->
        <!-- --------------------- -->
        <validate tag="div">
          <!-- Elemento de entrada -->
            <div clase="item"><label for="nombre"> Humano: </label>
          <input 
           style="width : 450px
          heigth : 50px"
            type="text"
            id="nombre_duenio"
            name="nombre_duenio" 
            class="finp"
            autocomplete="off"
            v-model.trim="formData.nombre_duenio" 
            required 
            :minlength="nombreMinLength"
            no-espacios
          />
          </div>

          <!-- Mensajes de validación -->
          <field-messages name="nombre_duenio" show="$dirty">
            <!-- <div class="alert alert-success mt-1">Success!</div> -->
            <div slot="required" class="alert alert-danger mt-1">Campo requerido</div>
            <div slot="minlength" class="alert alert-danger mt-1">
              Este campo requiere como mínimo {{nombreMinLength}} caracteres.
            </div>
            <div slot="no-espacios" class="alert alert-danger mt-1">
              No se permiten espacios intermedios en este campo.
            </div>
          </field-messages>
        </validate>
        <br>

          <!-- --------------------- -->
          <!--     Campo Direccion     -->
          <!-- --------------------- -->
        <validate tag="div">
          <!-- Elemento de entrada -->
         <div clase="item"><label for="nombre"> Dirección: </label>
          <input 
          style="width : 450px
          heigth : 50px"
            type="text"
            id="direccion"
            name="direccion" 
            class="finp"
            autocomplete="off"
            v-model.trim="formData.direccion" 
            required 
            :minlength="nombreMinLength"
            
          />
          </div>

          <!-- Mensajes de validación -->
          <field-messages name="direccion" show="$dirty">
            <!-- <div class="alert alert-success mt-1">Success!</div> -->
            <div slot="required" class="alert alert-danger mt-1">Campo requerido</div>
            <div slot="minlength" class="alert alert-danger mt-1">
              Este campo requiere como mínimo {{nombreMinLength}} caracteres.
            </div>
            <div slot="no-espacios" class="alert alert-danger mt-1">
              No se permiten espacios intermedios en este campo.
            </div>
          </field-messages>
        </validate>
        <br>
      
        <!-- --------------------- -->
        <!--    Campo email     -->
        <!-- --------------------- -->
        <validate tag="div">
          <!-- Elemento de entrada -->
          <div clase="item"><label for="nombre"> Email: </label>
          <input 
           style="width : 450px
            heigth : 50px"
            type="email"
            id="email"
            name="email" 
            class="finp"
            autocomplete="off"
            v-model.trim="formData.email" 
            required 
          />
        </div>
          <!-- Mensajes de validación -->
          <field-messages name="email" show="$dirty">
            <!-- <div class="alert alert-success mt-1">Success!</div> -->
            <div slot="required" class="alert alert-danger mt-1">Campo requerido</div>
            <div slot="email" class="alert alert-danger mt-1">Email no válido</div>
          </field-messages>
        </validate>

        <!-- Botón de envío -->
        <button class="btn btn-success my-4" :disabled="formState.$invalid">Enviar</button>
      </vue-form>      

<hr>
<h2>REGISTRO DE PACIENTES</h2>
      <br>
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
    name: 'src-components-patients',
    props: [],
    mounted () {
document.querySelector('#macho').checked = true;
this.getPacientes()
    },
    data () {
      return {
        formState : {},
        formData : this.getInicialData(),
        nombreMinLength : 3,
        edadMin: 1,
        edadMax: 30,
        url: 'https://62b25de3c7e53744afcb7292.mockapi.io/admin-vet/pacientes',
        pacientes:[],
      }
    },
    methods: {
getInicialData(){
 return {
    nombre:'',
    especie:'',
    raza:'',
    edad:'',
    sexo:'',
    nombre_duenio:'',
    direccion:'',
    email:'',
    id:'',
}
},
enviar() {
    let paciente = {...this.formData}
        paciente.fecha = new Date().toLocaleString()

         console.log(paciente)
        this.pacientes.push(paciente)

        this.formData = this.getInitialData()
        this.formstate._reset()
    },
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
  .src-components-patients {

  }

   .jumbotron {
      background-color: steelblue;
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
  background-color:gainsboro;
}
input{
  border-radius: 5px;
}
  
</style>
