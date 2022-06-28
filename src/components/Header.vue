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
      <div>
        <img
          alt="Usuario logo"
          src="https://c0.klipartz.com/pngpicture/81/570/gratis-png-perfil-logo-iconos-de-computadora-usuario-usuario.png"
          width="50"
        />
      </div>
      <div v-if="!$store.state.isLogin">
        <router-link to="/" class="login">
          <a>Log in</a>
        </router-link>
      </div>
      <div v-if="$store.state.isLogin">
        <router-link to="/login" class="login" @click="logOut()">
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
  methods: {
    logOut() {
      this.$store.dispatch('setValueIsLogin', false);
    },
  },
  computed: {},
};
</script>

<style scoped lang="css">
.header {
  background: steelblue;
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
  text-align: center;
}
</style>
