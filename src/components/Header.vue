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
    <div class="divHeader">
      <router-link to="/login" class="login">
        <a>
          <img
            alt="Usuario logo"
            src="https://c0.klipartz.com/pngpicture/81/570/gratis-png-perfil-logo-iconos-de-computadora-usuario-usuario.png"
            width="50"
          />Log in</a
        >
      </router-link>
    </div>
  </section>
</template>

<script>
export default {
  name: "src-components-header",
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
  width: 50%;
  color: azure;
  text-align: right;
}
</style>
