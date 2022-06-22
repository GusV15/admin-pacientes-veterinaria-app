<template>
<div class="container-fluid mt-3">
    <div class="jumbotron">
      <h1>Header de Mario</h1>
      <br>

    <Navbar />
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
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
export default {
  name: "App",
  components: {
    Navbar,
  }
}
</script>

<style>
h1 {
    color: blue;    
  }

</style>
