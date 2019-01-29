<template>
  <b-navbar toggleable="md" type="dark" variant="dark" sticky>

    <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

    <b-navbar-brand href="#">
      <div style="height:80px">
          <b-img :src="require('../../assets/static/brand.png')" />
      </div>
      
    </b-navbar-brand>

    <b-collapse is-nav id="nav_collapse">

      <b-navbar-nav class="navLinkContainer">
        <b-nav-item href="#"><router-link to="/"><span v-text="$ml.get('HomeLink')" /></router-link></b-nav-item>
        <b-nav-item class="anonymousLink" v-if="!userLoggedIn" href="#"><router-link to="/about">Registro</router-link></b-nav-item>
        <b-nav-item class="anonymousLink" v-if="!userLoggedIn" href="#"><router-link to="/careers">Ingresar</router-link></b-nav-item>
        <b-nav-item class="anonymousLink" v-if="!userLoggedIn" href="#"><router-link to="/careers">Preguntas</router-link></b-nav-item>

        <!--condos-->
        <b-nav-item class="condoLink" v-if="userIsCondo" href="#"><router-link to="/inmuebles">Inmuebles</router-link></b-nav-item>
        <b-nav-item class="condoLink" v-if="userIsCondo" href="#"><router-link to="/accounts">Cuentas</router-link></b-nav-item>
        <!-- <b-nav-item class="condoLink" v-if="userIsCondo" href="#"><router-link to="/inmuebles">Cuentas</router-link></b-nav-item> -->
        <!--owners-->
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">

<!--         <b-nav-form>
          <b-form-input size="sm" class="mr-sm-2" type="text" placeholder="Buscar"/>
          <b-button size="sm" class="my-2 my-sm-0" type="submit">Buscar</b-button>
        </b-nav-form> -->

        <b-nav-item-dropdown text="Idioma" right>
          <b-dropdown-item href="#">EN</b-dropdown-item>
          <b-dropdown-item href="#">ES</b-dropdown-item>
          <b-dropdown-item href="#">PT</b-dropdown-item>
          <b-dropdown-item href="#">FA</b-dropdown-item>
        </b-nav-item-dropdown>
<!-- 
        <b-nav-item-dropdown right> -->
          <!-- Using button-content slot -->
<!--           <template slot="button-content">
            <em>User</em>
          </template>
          <b-dropdown-item href="#">Profile</b-dropdown-item>
          <b-dropdown-item href="#">Signout</b-dropdown-item>
        </b-nav-item-dropdown> -->
      </b-navbar-nav>

    </b-collapse>
  </b-navbar>  
</template>
<script>
  import { MLBuilder } from 'vue-multilanguage';
  export default {
    //name: 'HelloWorld',
    props: {
      src: String
    },
    data: function() {
         return {
            //userIsResident: false,
            //userIsCondo:true,
            userLoggedIn: false,
          }
      },
    computed: {
      mlHomeLink () {
        return new MLBuilder('home'); //.with('f', 5).with('l', 406)
      },
      mlRegisterLink () {
        return new MLBuilder('register'); //.with('f', 5).with('l', 406)
      }
    }
  }
</script>

  <style scoped>
   .navLinkContainer a{
      color:white;
      font-weight:bold;
    }
 </style>

