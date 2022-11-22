<template>
  <section class="container mt-3">
    <vue-form class="pt-4" :state="formState">
      <h2>{{ formTitle }}</h2>
      <!-- Campo Nombre de Mascota -->
      <validate tag="div">
        <label for="nombreMascota">Nombre de Mascota</label>
        <input
          type="text"
          id="nombreMascota"
          name="nombreMascota"
          placeholder="Nombre Mascota"
          class="form-control"
          v-model.trim="formData.nombreMascota"
          required
          :minlength="nombreMascotaMinLength"
          :maxlength="nombreMascotaMaxLength"
          @blur="consultarPacientes(formData.nombreMascota)"
          no-existe
        />

        <field-messages name="nombreMascota" show="$dirty">
          <div slot="required" class="alert alert-danger mt-1 mb-0">
            Campo requerido
          </div>
          <div slot="no-existe" class="alert alert-danger mt-1 mb-0">
            No existe paciente con nombre {{ formData.nombreMascota }}. Dar de
            alta en:
            <!-- Ruta al componente Patients -->
            <router-link to="/addpacients">
              <a class="d-inline" href="#">Patients</a>
            </router-link>
          </div>
          <div slot="minlength" class="alert alert-danger mt-1 mb-0">
            Este campo requiere como mínimo
            {{ nombreMascotaMinLength }} caracteres.
          </div>
          <div slot="maxlength" class="alert alert-danger mt-1 mb-0">
            Este campo requiere como máximo
            {{ nombreMascotaMaxLength }} caracteres.
          </div>
        </field-messages>
      </validate>
      <br />
      <!-- Campo Nombre de Mascota -->
      <validate tag="div">
        <label for="nombreDuenio">Nombre de Dueño</label>
        <input
          type="text"
          id="nombreDuenio"
          name="nombreDuenio"
          placeholder="Nombre Dueño Mascota"
          class="form-control"
          v-model.trim="formData.nombreDuenio"
          required
          :minlength="nombreDuenioMinLength"
          :maxlength="nombreDuenioMaxLength"
        />

        <field-messages name="nombreDuenio" show="$dirty">
          <div slot="required" class="alert alert-danger mt-1 mb-0">
            Campo requerido
          </div>
          <div slot="minlength" class="alert alert-danger mt-1 mb-0">
            Este campo requiere como mínimo
            {{ nombreDuenioMinLength }} caracteres.
          </div>
          <div slot="maxlength" class="alert alert-danger mt-1 mb-0">
            Este campo requiere como máximo
            {{ nombreDuenioMaxLength }} caracteres.
          </div>
        </field-messages>
      </validate>
      <br />

      <!-- Campo Fecha de Atención -->
      <validate tag="div">
        <label for="fechaAtencion">Fecha atención</label>
        <input
          type="date"
          id="fechaAtencion"
          name="fechaAtencion"
          class="form-control"
          v-model.trim="formData.fechaAtencion"
          required
        />

        <field-messages name="fechaAtencion" show="$dirty">
          <div slot="required" class="alert alert-danger mt-1 mb-0">
            Campo requerido
          </div>
        </field-messages>
      </validate>
      <br />

      <!-- Campo Hora de Atención -->
      <validate tag="div">
        <label for="horaAtencion">Hora atención</label>
        <input
          type="time"
          id="horaAtencion"
          name="horaAtencion"
          class="form-control"
          v-model.trim="formData.horaAtencion"
          required
        />

        <field-messages name="horaAtencion" show="$dirty">
          <div slot="required" class="alert alert-danger mt-1 mb-0">
            Campo requerido
          </div>
        </field-messages>
      </validate>
      <br />

      <!-- Campo Email -->
      <validate tag="div">
        <label for="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          class="form-control"
          v-model.trim="formData.email"
          required
        />

        <field-messages name="email" show="$dirty">
          <div slot="required" class="alert alert-danger mt-1 mb-0">
            Campo requerido
          </div>
          <div slot="email" class="alert alert-danger mt-1 mb-0">
            Email no válido
          </div>
        </field-messages>
      </validate>
      <br />

      <!-- Campo Síntomas -->
      <validate tag="div">
        <label for="sintomas">Síntomas</label>
        <textarea
          type="text"
          id="sintomas"
          name="sintomas"
          class="form-control"
          placeholder="Describe los Sintomas"
          v-model.trim="formData.sintomas"
          required
        ></textarea>

        <field-messages name="sintomas" show="$dirty">
          <div slot="required" class="alert alert-danger mt-1 mb-0">
            Campo requerido
          </div>
        </field-messages>
      </validate>
      <br />

      <!-- Botón de envío -->
      <button
        v-if="this.citaAEditar"
        type="submit"
        @click.prevent="editarCita()"
        class="py-3 mt-2 btn btn-success btn-block"
        :disabled="formState.$invalid"
      >
        EDITAR
      </button>
      <button
        v-else-if="!this.citaAEditar"
        type="submit"
        @click.prevent="enviarCita()"
        class="py-3 mt-2 btn btn-success btn-block"
        :disabled="formState.$invalid"
      >
        AGREGAR
      </button>
    </vue-form>
    <br />
  </section>
</template>

<script>
import { CITAS, PACIENTES } from '../endpoints.js'
export default {
  name: 'src-components-add-appointment',
  props: ['citaAEditar'],
  mounted() {
    if (this.citaAEditar) {
      this.completarFormulario();
    }
  },
  data() {
    return {
      urlCitas: CITAS,
      urlPacientes:
        PACIENTES,
      existePaciente: false,
      formState: {},
      formData: this.getInicialData(),
      nombreMascotaMinLength: 3,
      nombreMascotaMaxLength: 15,
      nombreDuenioMinLength: 3,
      nombreDuenioMaxLength: 15,
      formTitle: this.citaAEditar
        ? 'Editar Cita'
        : 'Completar formulario para crear cita nueva',
    };
  },
  methods: {
    getInicialData() {
      return {
        nombreMascota: '',
        nombreDuenio: '',
        fechaAtencion: '',
        horaAtencion: '',
        email: '',
        sintomas: '',
      };
    },
    enviarCita() {
      this.altaCita();
      this.formData = this.getInicialData();
      this.formState._reset();
    },
    async altaCita() {
      const { nombreMascota, nombreDuenio, fechaAtencion, email, sintomas } =
        this.formData;
      let cita = {
        nombre: nombreMascota,
        nombre_duenio: nombreDuenio,
        fecha_hora_atencion: fechaAtencion,
        email,
        sintomas,
        atendido: false,
      };

      // AVISO AL USUARIO QUE SE DIO DE ALTA EL USUARIO
       await fetch('http://localhost:3000/api/v1/newAppointment',{
          method: "POST",
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(this.formData),
        })

      try {
        let { data: citas } = await this.axios.post(this.urlCitas, cita, {
          'content-type': 'application/json',
        });
        console.log('AXIOS POST Citas', citas);
      } catch (error) {
        console.error('Error en enviarCita()', error.message);
      }
      this.$swal({
        icon: 'success',
        title: 'Cita cargada exitosamente',
      });
    },
    async editarCita() {
      console.log('Editar Citas');
      const { nombreMascota, nombreDuenio, fechaAtencion, email, sintomas } =
        this.formData;
      let citaEditada = {
        nombre: nombreMascota,
        nombre_duenio: nombreDuenio,
        fecha_hora_atencion: fechaAtencion,
        email,
        sintomas,
        atendido: false,
      };
      try {
        let { data: citas } = await this.axios.put(
          this.urlCitas + this.citaAEditar.id,
          citaEditada,
          {
            'content-type': 'application/json',
          }
        );
        console.log('AXIOS PUT Citas', citas);
      } catch (error) {
        console.error('Error en enviarCita()', error.message);
      }
      this.formData = this.getInicialData();
      this.formState._reset();
      let redirect = this.$router.push({ name: 'appointments' });
      this.$swal({
        icon: 'success',
        type: 'success',
        title: 'Cita editada exitosamente',
        timer: 1000,
        showConfirmButton: false,
      }).then(function () {
        redirect;
      });
    },
    async consultarPacientes(nombre) {
      try {
        let { data: pacientes } = await this.axios(this.urlPacientes);
        let pacienteBuscado =
          pacientes.length > 0
            ? pacientes.find((paciente) => paciente.nombre == nombre)
            : {};
        this.existePaciente = pacienteBuscado ? true : false;
        if (this.existePaciente) {
          this.formData = {
            ...this.formData,
            nombreDuenio: pacienteBuscado.nombre_duenio,
            email: pacienteBuscado.email,
          };
        }
      } catch (error) {
        console.error(error);
      }
    },
    completarFormulario() {
      if (this.citaAEditar) {
        const { nombre, nombre_duenio, fecha_hora_atencion, email, sintomas } =
          this.citaAEditar;
        let cita = {
          nombreMascota: nombre,
          nombreDuenio: nombre_duenio,
          fechaAtencion: fecha_hora_atencion,
          email,
          sintomas,
        };
        this.formData = cita;
      }
    },
  },
  computed: {},
};
</script>

<style scoped lang="css">
.container {
  width: 80%;
  color: white;
  font-weight: 600;
  background-color: darkseagreen;
  border-radius: 1%;
}

h2 {
  padding-bottom: 10px;
  font-size: 2em;
  text-align: center;
}

hr {
  background-color: #bbb;
}

textarea {
  height: 100px;
}

pre {
  color: white;
}
</style>
