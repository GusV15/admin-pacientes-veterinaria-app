export default {
  name: 'src-components-patients',
  props: ['id'],
  mounted() {
    document.querySelector('#macho').checked = true;
    this.obtenerPacientes();
    this.devolverPaciente(this.id);

    this.id && (this.formData = this.getInicialData());
  },
  data() {
    return {
      formState: {},
      formData: this.getInicialData(),
      nombreMinLength: 3,
      edadMin: 1,
      edadMax: 30,
    };
  },
  methods: {
    getInicialData() {
      return {
        nombre: '',
        especie: '',
        raza: '',
        edad: '',
        sexo: 'macho',
        nombre_duenio: '',
        direccion: '',
        email: '',
        id: '',
      };
    },
    async agregarPacienteNuevo() {
      let pacienteNuevo = { ...this.formData };
      if (
        this.mostrarPacientes.find(
          (paciente) =>
            paciente.nombre.toUpperCase() == pacienteNuevo.nombre.toUpperCase()
        )
      ) 
      {
        this.$swal({
          icon: 'error',
          title: `Paciente: ${pacienteNuevo.nombre} ya existe.`,
          text: 'Por favor, vuelva a intentarlo',
        });
      } else {
        this.agregarPaciente(pacienteNuevo);
        this.$swal({
          icon: 'success',
          title: 'Paciente agregado exitosamente',
        });
      }

      // AVISO AL USUARIO QUE SE DIO DE ALTA A UN NUEVO PACIENTE
      await fetch('http://localhost:3000/api/v1/newPatient',{
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(pacienteNuevo),
      })

      this.formData = this.getInicialData();
      this.formState._reset();
      document.querySelector('#macho').checked = true;
    },
    actualizarPaciente() {
      let pacienteUpdate = {
        nombre: this.formData.nombre,
        especie: this.formData.especie,
        raza: this.formData.raza,
        sexo: this.formData.sexo,
        nombre_duenio: this.formData.nombre_duenio,
        direccion: this.formData.direccion,
        email: this.formData.email,
      };
      this.editarPaciente(pacienteUpdate, this.id);
      this.$swal({
        icon: 'success',
        title: 'Paciente editado exitosamente',
      });
      this.formData = this.getInicialData();
      this.formState._reset();
      this.$router.back();
    },
    devolverPaciente(id) {
      console.log('devolverPaciente-->', this.id);
      let unPaciente = this.mostrarPacientes.filter((p) => p.id == id);
      this.formData = { ...unPaciente[0] };
      console.log('formData-->', this.formData);
    },
  },
  computed: {
    /*     actualizarRegistros() {
      return {
        total: this.mostrarPacientes.length,
      };
    }, */
  },
};
