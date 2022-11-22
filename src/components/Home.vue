<template lang="html">
  <section class="">
    <h1 class="text-center text-success">
      Bienvenido al Gestor de Citas para Pacientes Caninos ;)
    </h1>
    <ul class="p-0 d-flex flex-wrap justify-content-center align-items-center">
      <li class="list-unstyled gap" v-for="(animalGif, index) in mostrarGifsDeAnimales" :key="index">
        <img style="width: 200px; height: 200px" :src="animalGif" />
      </li>
    </ul>
  </section>
</template>

<script lang="js">
  export default  {
    name: 'home-view',
    props: [],
    mounted () {
      this.getAnimalGifs()
    },
    data () {
      return {
      }
    },
    methods: {
    },
    computed: {

    }
}
</script>

<style scoped lang="css"></style>
