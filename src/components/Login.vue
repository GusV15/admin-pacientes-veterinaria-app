<template>

  <section class="src-components-login">
    <div class="jumbotron">
      <h2>Login</h2>
      <hr>
      <hr>
      <br>
      
      <vue-form :state="formState" @submit.prevent="login()">
       
       <!-- --------------------- -->
        <!--     Campo usuario     -->
        <!-- --------------------- -->
        <validate tag="div">
          <!-- Elemento de entrada -->
          <label for="usuario">Usuario</label>
          <input 
            type="text"
            id="usuario"
            name="usuario" 
            class="form-control"
            autocomplete="off"
            v-model.trim="formData.usuario" 
            required 
            :minlength="usuarioMinLength"
            :maxlength="usuarioMaxLength"
            no-espacios
          />
          <!-- Mensajes de validación -->
          <field-messages name="usuario" show="$dirty">
            <div slot="required" class="alert alert-danger mt-1">Campo requerido</div>
            <div slot="minlength" class="alert alert-danger mt-1">
              Este campo requiere como mínimo {{usuarioMinLength}} caracteres.
            </div>
            <div slot="no-espacios" class="alert alert-danger mt-1">
              No se permiten espacios intermedios en este campo.
            </div>
          </field-messages>
        </validate>
        <br>
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
            <div slot="required" class="alert alert-danger mt-1">Campo requerido</div>
            <div slot="minlength" class="alert alert-danger mt-1">
              Este campo requiere como mínimo {{passwordMinLength}} caracteres.
            </div>
            <div slot="no-espacios" class="alert alert-danger mt-1">
              No se permiten espacios intermedios en este campo.
            </div>
          </field-messages>
        </validate>
        <br>

        <!-- Botón de Login -->
        <!-- <button class="btn btn-outline-primary my-4 " style="width: 100%" :disabled="formState.$invalid" @click="login()">Login</button> -->
        <button class="btn btn-success my-4" :disabled="formState.$invalid" @click="login()">Enviar</button>

        <hr>
        <p><u>formData</u></p>
        <pre>{{formData }}</pre>
        <pre>{{usuarioRegistado}}</pre>
        <pre>{{usuarioLogin}}</pre>
        <pre>{{isLogin}}</pre>
        <br>
        <p><u>formState</u></p>
        <pre>{{formState}}</pre>

      </vue-form>
    </div>
  </section>

</template>

<script>

  export default  {
    name: 'src-components-login',
    props: [],
    mounted () {

    },
    data () {
      return {
        formState: {},
        formData: this.getInicialData(),
        usuarioMinLength: 5,
        usuarioMaxLength: 15,
        passwordMinLength: 8,
        passwordMaxLength: 15,
        usuarioRegistado:{usuario:'user123', password:'12345678'},
        usuarioLogin:{},
        isLogin: false
      }
    },
    methods: {
      getInicialData() {
        return {
          usuario: '',
          password: '',
          
        }
      },
      login() {
        this.usuarioLogin = this.formData
        this.formData = this.getInicialData()
        this.formState._reset()
        if(this.usuarioRegistado.usuario != this.usuarioLogin.usuario){
          window.alert("Usuario invalido")
        }else if(this.usuarioRegistado.password != this.usuarioLogin.password){
          window.alert("Contraseña invalido")
        }else{
          this.isLogin = true
          
        }
      },
    },
    computed: {

    }
}


</script>

<style scoped lang="css">
  .src-components-login {

  }
</style>
