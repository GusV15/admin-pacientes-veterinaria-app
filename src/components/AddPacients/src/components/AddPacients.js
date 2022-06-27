
 export default  {
  name: 'src-components-patients',
  props: [],
  mounted () {
document.querySelector('#macho').checked = true;
this.getPacientes();

this.getInicialData()
/* obtenerPacientes() */
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
  sexo:'macho',
  nombre_duenio:'',
  direccion:'',
  email:'',
  id:'',
}
},
async agregar() {
  let pacienteNuevo = {...this.formData}

     try {
        let { data: paciente } = await this.axios.post(this.url, pacienteNuevo, {'content-type' : 'application/json'})
        console.log('AXIOS POST paciente', paciente)

        //this.getpacientes()
        this.pacientes.push(paciente)
      }
      catch(error) {
        console.error('Error en posPaciente()', error.message)
      }
        this.formData = this.getInicialData() 
      this.formState._reset()
      document.querySelector('#macho').checked = true;
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


