<template >

  <section class="src-components-edit-patient">
    <div class="jumbotron">
    <h2>{{ "Editar Paciente " | pasarAMayuscula }}</h2>
    <p><pre>{{saludar()}}</pre></p> 
    <hr />
    <br>
    </div>
  </section>

</template>

<script >

  export default  {
    name: 'src-components-edit-patient',
    props: [],
    mounted () {

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

<style scoped lang="css">
  .src-components-edit-patient {

  }
  .jumbotron {
    background-color: cadetblue;
    color: white;
}

hr {
    background-color: #bbb;
}  

pre {
  color: white;
}

.item { text-align: right; }
.finp { width: 60%; }

label{
display: inline-block;
width: 80px;
}

td{
color:black;
background-color:whitesmoke;
}
input{
border-radius: 5px;
}
.item { text-align: right; }
.finp { width: 60%; }
</style>
