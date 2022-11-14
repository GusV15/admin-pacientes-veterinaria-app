<template >

  <section class="src-components-edit-patient">
    <div class="jumbotron">
    <h2>{{ "Editar Paciente " | pasarAMayuscula }}</h2>
    <p><pre>{{saludar()}}</pre>{{$route.params.id}}</p> 
    <hr />
    <br>
      <vue-form :state="formState" @submit.prevent="actualizarPaciente()">
  
      <!-- --------------------- -->
      <!--     Campo nombre      -->
      <!-- --------------------- -->
      <validate tag="div">
        <!-- Elemento de entrada -->
        <div clase="item"><label for="nombre" readonly>Nombre: </label>
        <input 
         style="width : 450px
        heigth= 50px"
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
         heigth = 50px"
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
          heigth = 50px"
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
        heigth = 50px"
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
      <input class="my-4" type="radio" name="sexo" id="macho"  value="macho" v-model="formData.sexo" selected="true" >
      <label class="radio-inline">Macho </label>   
      
      <input type="radio"  name="sexo" id="hembra" class="ml-3" value="hembra" v-model="formData.sexo">
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
        heigth = 50px"
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
        heigth = 50px"
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
        <div clase="item"><label for="nombre" > Email: </label>
        <input 
         style="width : 450px
          heigth = 50px"
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
      <button class="btn btn-success my-4" :disabled="formState.$invalid">Editar</button>
    </vue-form>   
    <hr />
    <br>
    </div>
  </section>

</template>

<script >
  import { PACIENTES } from '../endpoints.js'
  export default  {
    name: 'src-components-edit-patient',
    props: ['id'],
    mounted () {
      this.getPacientes()
   

    },
    data () {
      return {
   formState : {},
      formData : this.getInicialData(),
      nombreMinLength : 3,
      edadMin: 1,
      edadMax: 30,
      url: PACIENTES,
      pacientes:[],

      }
    },
    methods: {
      async getPacientes() {
      try {
        let { data: pacientes } = await this.axios(this.url)
        console.log('AXIOS GET pacientes', pacientes)
        this.pacientes = pacientes
         this.devolverPaciente(this.id)
      }
      catch(error) {
        console.error('Error en getPacientes()', error.message)
      }
    },
getInicialData(){
  console.log('getInicialData-->',this.id)
  
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
async actualizarPaciente() {
        console.log('actualizarPaciente', this.id)
console.log('probando data nombre',this.nombre)
        let pacienteUpdate = {
       nombre:this.formData.nombre,
       especie:this.formData.especie,
       raza:this.formData.raza,
       sexo:this.formData.sexo,
       nombre_duenio:this.formData.nombre_duenio,
       direccion:this.formData.direccion,
       email:this.formData.email,
        }

        try {
          let { data: paciente } = await this.axios.put(this.url+"/"+this.id, pacienteUpdate, {'content-type' : 'application/json'})
          console.log('AXIOS PUT paciente', paciente)

          //this.getpacientes()
          let index = this.pacientes.findIndex(user => user.id == paciente.id)
          if(index == -1) throw new Error('paciente no encontrado')
          this.pacientes.splice(index, 1, paciente)
        
        }
        catch(error) {
          console.error('Error en putpaciente()', error.message)
        }
         this.formData = this.getInicialData() 
      this.formState._reset()
       this.$router. back()
      },

devolverPaciente(id){
 console.log('devolverPaciente-->',this.id)
let unPaciente= this.pacientes.filter(p=>p.id == id)
this.formData= {...unPaciente[0]}
console.log('formData-->',this.formData)
}
    },
    computed: {

    }
}


</script>

<style scoped lang="css">
  .src-components-edit-patient {

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
