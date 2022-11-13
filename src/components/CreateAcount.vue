<template>
  <section class="src-components-login">
    <div class="jumbotron">
      <h2>Crear Cuenta</h2>
      <hr />

      <vue-form :state="formState" @submit.prevent="createAccount()">
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
        <!--      Campo email      -->
        <!-- --------------------- -->
        <validate tag="div">
            <!-- Elemento de entrada -->
            <div clase="item"><label for="nombre" > Email: </label>
            <input 
            type="email"
            id="email"
            name="email"
            class="form-control"
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
          @click="createAccount()"
        >
          Crear Cuenta
        </button>
      </vue-form>
    </div>
  </section>
</template>

<script>
import {CREAR_USUARIO} from '../endpoints.js'

export default {
  name: 'src-components-create-account',
  props: [],
  mounted() {},
  data() {
    return {
      urlCreateAccount: CREAR_USUARIO,
      formState: {},
      formData: {},
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
        email:'',
        password: '',
      };
    },
    async addUser(newUser) {
      try {
        let { data: user } = await this.axios.post(this.urlCreateAccount, newUser, {
          'content-type': 'application/json',
        });
        console.log('AXIOS POST User', user);
      } catch (error) {
        console.error('Error en addUser()', error.message);
      }
      let redirect = this.$router.push({ name: 'Login' });
      this.$swal({
        icon: 'success',
        title: 'Usuario cargado exitosamente',
        timer: 1000,
        showConfirmButton: false,
      }).then(function () {
        redirect;
      });
    },
    async createAccount() {
      const { name, password } = this.formData;
      this.addUser({name, password});
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