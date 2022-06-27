<template>
  <section class="container mt-3">
    <vue-form class="pt-4" :state="formState" @submit.prevent="enviarCita()">
      <h2>Completar formulario para crear cita nueva</h2>
      <!-- Campo Nombre de Mascota -->
      <validate tag="div">
        <label for="nombreMascota">Nombre de Mascota</label>
        <input
          type="text"
          id="nombreMascota"
          name="nombreMascota"
          placeholder="Nombre Mascota"
          class="form-control"
          autocomplete="off"
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
            <!-- Ruta al componente Appointments -->
            <router-link to="/patients">
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
          autocomplete="off"
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
          autocomplete="off"
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
          autocomplete="off"
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
          autocomplete="off"
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
export default {
  name: "src-components-add-appointment",
  props: [],
  mounted() {},
  data() {
    return {
      url: "https://62b25de3c7e53744afcb7292.mockapi.io/admin-vet/citas",
      urlPacientes:
        "https://62b25de3c7e53744afcb7292.mockapi.io/admin-vet/pacientes",
      existePaciente: false,
      formState: {},
      formData: this.getInicialData(),
      nombreMascotaMinLength: 3,
      nombreMascotaMaxLength: 15,
      nombreDuenioMinLength: 3,
      nombreDuenioMaxLength: 15,
    };
  },
  methods: {
    getInicialData() {
      return {
        nombreMascota: "",
        nombreDuenio: "",
        fechaAtencion: "",
        horaAtencion: "",
        email: "",
        sintomas: "",
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
        email: email,
        sintomas: sintomas,
        atendido: false,
      };
      try {
        let { data: citas } = await this.axios.post(this.url, cita, {
          "content-type": "application/json",
        });
        console.log("AXIOS POST Citas", citas);
      } catch (error) {
        console.error("Error en enviarCita()", error.message);
      }
    },
    async consultarPacientes(nombre) {
      try {
        let { data: pacientes } = await this.axios(this.urlPacientes);
        let pacienteBuscado =
          pacientes.length > 0
            ? pacientes.find((paciente) => paciente.nombre == nombre)
            : {};
        this.existePaciente = pacienteBuscado ? true : false;
        console.log("pacientes", pacienteBuscado);
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
