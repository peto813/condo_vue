<template>
  <div id="navBar">
  <b-navbar toggleable="md" type="dark" variant="dark" sticky>

    <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

    <b-navbar-brand href="#">
      <div style="height:80px">
          <b-img :src="require('../../assets/static/brand.png')" />
      </div>
      
    </b-navbar-brand>

    <b-collapse is-nav id="nav_collapse">

      <b-navbar-nav class="navLinkContainer">
        <b-nav-item href="#"><router-link to="/"><span v-text="$ml.with('VueJS').get('home')" /></router-link></b-nav-item>
        <b-nav-item class="anonymousLink" v-if="!userData.loggedIn" href="#"><router-link to="/register"><span v-text="$ml.with('VueJS').get('register')" /></router-link></b-nav-item>
        <b-nav-item class="anonymousLink" v-if="!userData.loggedIn" href="#"><router-link to="/login"><span v-text="$ml.with('VueJS').get('login')" /></router-link></b-nav-item>
        <b-nav-item class="anonymousLink" v-if="!userData.loggedIn" href="#"><router-link to="/faq"><span v-text="$ml.with('VueJS').get('faq')" /></router-link></b-nav-item>

        <!--condos-->
        <b-nav-item class="condoLink" v-if="canViewInmuebles" href="#"><router-link to="/properties"><span v-text="$ml.with('VueJS').get('properties')" /></router-link></b-nav-item>
        <b-nav-item class="condoLink" v-if="canViewInmuebles" href="#"><router-link to="/accounts"><span v-text="$ml.with('VueJS').get('accounts')" /></router-link></b-nav-item>
        <b-nav-item class="condoLink" v-if="userData.role=='condo'" href="#"><router-link to="/invoices"><span v-text="$ml.with('VueJS').get('invoices')" /></router-link></b-nav-item>

        <!--resident/rentee-->
        <b-nav-item class="condoLink" v-if="canViewPayments" href="#"><router-link to="/payments"><span v-text="$ml.with('VueJS').get('payments')" /></router-link></b-nav-item>
        <!-- <b-nav-item class="condoLink" v-if="userIsCondo" href="#"><router-link to="/inmuebles">Cuentas</router-link></b-nav-item> -->
        <!--owners-->
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">

<!--         <b-nav-form>
          <b-form-input size="sm" class="mr-sm-2" type="text" placeholder="Buscar"/>
          <b-button size="sm" class="my-2 my-sm-0" type="submit">Buscar</b-button>
        </b-nav-form> -->

        <b-nav-item-dropdown :text="$ml.with('VueJS').get('lang')" right>
          <b-dropdown-item href="#"
            v-for="lang in $ml.list"
            :key="lang"
            v-text="lang"
            @click="$ml.change(lang)"
          >
          EN</b-dropdown-item>
        </b-nav-item-dropdown>

        <b-nav-item-dropdown right v-if="userData.loggedIn"> 
            <!-- Using button-content slot -->
          <template  slot="button-content">
            <em ><v-icon name="user" scale="1.5"/> {{userData.first_name}}</em>
          </template>
          <b-dropdown-item href="#" v-on:click="goToProfile"><span v-text="$ml.with('VueJS').get('profile')" /></b-dropdown-item>
          <b-dropdown-item href="#"><span v-text="$ml.get('signOut')" /></b-dropdown-item>
        </b-nav-item-dropdown> 
      </b-navbar-nav>

    </b-collapse>
  </b-navbar>    
  </div>

</template>
<script>
  //import  '@/ml'
  //import { MLBuilder } from 'vue-multilanguage';
  //import 'vue-awesome/icons/User';
  import Icon from 'vue-awesome/components/Icon';
  import 'vue-awesome/icons/user';
  export default {
    name: 'navBar',
    components:{
      'v-icon': Icon
    },
    methods: {
      goToProfile () {
        this.$router.push('/profile')
      }
    },
      props: {
      userData: Object
    },
    computed: {
      canViewInmuebles () {
        let userIsCondo = (this.userData.role=='condo');
        let userIsResident = (this.userData.role=='resident');
        return userIsCondo || userIsResident;
      },
      canViewPayments () {
        let userIsRentee = (this.userData.role=='rentee');
        let userIsResident = (this.userData.role=='resident');
        return userIsRentee || userIsResident;
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

