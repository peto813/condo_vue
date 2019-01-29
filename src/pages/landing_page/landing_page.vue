<template>
  <div>
<!--     <b-jumbotron v-bind:header="headerTitle" v-bind:lead="leadMsg" >
      <p>{{msg}}</p>
      <b-btn variant="primary" href="#">¡Registrate ahora!</b-btn>
    </b-jumbotron> -->
<!--     <carousel-landing></carousel-landing>    -->
  </div>
</template>
<script>
import Vue from 'vue';
import bJumbotron from 'bootstrap-vue/es/components/jumbotron/jumbotron';
import carousel from '../../components/carousel/carousel.vue';
Vue.component('carousel-landing', carousel);
Vue.component('b-jumbotron', bJumbotron);
export default {
  //name: 'HelloWorld',
  // props: {
  //   msg: String
  // },
  data: function() {
       return {
          headerTitle: 'Administrador de condominios',
          leadMsg :'Gestion y consulta',
          msg: 'Tu informacion a la mano'
        }
    }
}
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>