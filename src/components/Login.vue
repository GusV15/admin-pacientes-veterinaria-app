<template>
  <section class="src-components-login">
    <div class="jumbotron">
      <h2>Login</h2>
      <hr />

      <vue-form :state="formState" @submit.prevent="logIn()">
        <!-- --------------------- -->
        <!--     Campo usuario     -->
        <!-- --------------------- -->
        <validate tag="div">
          <!-- Elemento de entrada -->
          <label for="name">Usuario</label>
          <input
            type="text"
            id="name"
            name="name"
            class="form-control"
            autocomplete="off"
            v-model.trim="formData.name"
            required
            :minlength="nameMinLength"
            :maxlength="nameMaxLength"
            no-espacios
          />
          <!-- Mensajes de validación -->
          <field-messages name="name" show="$dirty">
            <div slot="required" class="alert alert-danger mt-1">
              Campo requerido
            </div>
            <div slot="minlength" class="alert alert-danger mt-1">
              Este campo requiere como mínimo {{ nameMinLength }} caracteres.
            </div>
            <div slot="no-espacios" class="alert alert-danger mt-1">
              No se permiten espacios intermedios en este campo.
            </div>
          </field-messages>
        </validate>
        <br />
        <!-- --------------------- -->
        <!--     Campo password      -->
        <!-- --------------------- -->
        <validate tag="div">
          <!-- Elemento de entrada -->
          <label for="password">Contraseña</label>
          <input
            type="password"
            id="password"
            name="password"
            class="form-control"
            autocomplete="off"
            v-model.trim="formData.password"
            required
            :minlength="passwordMinLength"
            :maxlength="passwordMaxLength"
            no-espacios
          />
          <!-- Mensajes de validación -->
          <field-messages name="password" show="$dirty">
            <div slot="required" class="alert alert-danger mt-1">
              Campo requerido
            </div>
            <div slot="minlength" class="alert alert-danger mt-1">
              Este campo requiere como mínimo
              {{ passwordMinLength }} caracteres.
            </div>
            <div slot="no-espacios" class="alert alert-danger mt-1">
              No se permiten espacios intermedios en este campo.
            </div>
          </field-messages>
        </validate>
        <br />

        <!-- Botón de Login -->
        <button
          class="btn btn-outline-primary my-4"
          style="width: 100%"
          :disabled="formState.$invalid"
          @click="logIn()"
        >
          Log in
        </button>
      </vue-form>
    </div>
  </section>
</template>

<script>
export default {
  name: 'src-components-login',
  props: [],
  mounted() {},
  data() {
    return {
      urlUsers:
        'https://62b25de3c7e53744afcb7292.mockapi.io/admin-vet/usuarios/',
      formState: {},
      formData: { name: 'gustavo123', password: '12345678' },
      nameMinLength: 5,
      nameMaxLength: 15,
      passwordMinLength: 8,
      passwordMaxLength: 15,
    };
  },
  methods: {
    getInicialData() {
      return {
        name: '',
        password: '',
      };
    },
    async getUser(name, password) {
      try {
        let { data: usuarios } = await this.axios.get(this.urlUsers);
        console.log('AXIOS POST Citas', usuarios);
        let usuarioBuscado = usuarios.filter(
          (user) => user.name == name && user.password == password
        )[0];
        console.log('usuarioBuscado', usuarioBuscado);
        if (
          usuarioBuscado?.name != name ||
          usuarioBuscado?.password != password
        ) {
          this.$swal({
            icon: 'error',
            title: 'Usuario o contraseña inexistente',
            text: 'Por favor, vuelva a intentarlo',
          });
        } else {
          this.$store.dispatch('doLogin', { name, auth: true });
          this.$router.push({ name: 'Home' });
        }
      } catch (error) {
        console.error('Error en getUser()', error.message);
      }
    },
    logIn() {
      const { name, password } = this.formData;
      this.getUser(name, password);
      this.formData = this.getInicialData();
      this.formState._reset();
    },
  },
  computed: {},
};
</script>

<style scoped lang="css">
.src-components-login {
  width: 40%;
  margin-top: 40px;
  margin-left: auto;
  margin-right: auto;
}
</style>
