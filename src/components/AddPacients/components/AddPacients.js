export default {
  name: 'src-components-patients',
  props: ['pacienteAEditar'],
  mounted() {
    document.querySelector('#macho').checked = true;
    this.obtenerPacientes();
    console.log(this.pacienteAEditar);
    if (this.pacienteAEditar) {
      this.completarFormulario();
    }
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
      ) {
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
      await fetch('http://localhost:3000/api/v1/newPatient', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(pacienteNuevo),
      });

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
        edad: this.formData.edad,
      };
      this.editarPaciente(pacienteUpdate, this.pacienteAEditar.id);
      this.$swal({
        icon: 'success',
        title: 'Paciente editado exitosamente',
      });
      this.formData = this.getInicialData();
      this.formState._reset();
      this.$router.back();
    },
    completarFormulario() {
      if (this.pacienteAEditar) {
        console.log(this.pacienteAEditar);
        const {
          id,
          nombre,
          nombre_duenio,
          especie,
          raza,
          sexo,
          edad,
          direccion,
          email,
        } = this.pacienteAEditar;
        let paciente = {
          nombre,
          nombre_duenio,
          especie,
          raza,
          edad,
          sexo,
          direccion,
          email,
          id,
        };
        this.formData = paciente;
      }
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
