<template>
  <div class="container">
    <Header />
    <Navbar v-if="$store.state.isLogin" />
    <router-view></router-view>

    <!-- <Binding />
      <Estructura />
      <Atributos />
      <Contadores />
      <Formulario />
      <FormularioAv /> -->

    <!-- <div class="row">
        <div class="col-4"><Binding /></div>
        <div class="col-4"><Estructura /></div>
        <div class="col-4"><Atributos /></div>
      </div> -->
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Navbar from './components/Navbar.vue';
export default {
  name: 'App',
  components: {
    Navbar,
    Header,
  },
};
</script>

<style>
h1 {
  color: blue;
}
</style>
