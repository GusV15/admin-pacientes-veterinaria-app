<template>
  <section class="header">
    <div class="divHeader">
      <img
        class="media-body ml-1 mt-1"
        alt="Vet logo"
        src="https://www.pinclipart.com/picdir/big/396-3964195_clnica-veterinaria-hospital-veterinario-24-horas-vetersalud-dog.png"
        width="80"
      />
    </div>
    <div class="divHeader">
      <h1>Administrador Pacientes Veterinaria</h1>
    </div>
    <div class="divHeader mr-3">
      <div class="d-flex align-items-center">
        <div class="mr-1 text-white">
          <span>{{ mostrarDatosLogin.username }}</span>
        </div>
        <img
          alt="Usuario logo"
          src="https://c0.klipartz.com/pngpicture/81/570/gratis-png-perfil-logo-iconos-de-computadora-usuario-usuario.png"
          width="50"
        />
      </div>
      <div v-if="!mostrarDatosLogin.auth">
        <router-link to="/home" class="login">
          <a class="text-center">Log in</a>
        </router-link>
      </div>
      <div v-if="mostrarDatosLogin.auth" @click="desloguearse()">
        <router-link to="/login" class="login">
          <a>Log Out</a>
        </router-link>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'src-components-header',
  props: [],
  mounted() {},
  data() {
    return {};
  },
  methods: {},
  computed: {},
};
</script>

<style scoped lang="css">
.header {
  background: #5f9ea0;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
h1 {
  color: azure;
  text-align: center;
}
h6 {
  color: azure;
  text-align: right;
}
.divHeader {
  display: inline-block;
}
.login {
  display: inline-block;
  width: 100%;
  color: azure;
  text-align: right;
  font-size: 0.8rem;
  text-decoration: underline;
}
</style>
