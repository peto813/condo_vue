<template>
<!-- Footer -->
<footer color="unique-color-dark" class="page-footer font-small pt-0">
  <div style="backgroundColor: #938F71">

    <b-container class="text-left">
      <b-row class="py-4 d-flex align-items-center">
        <b-col md="6" lg="5" class="text-center text-md-left mb-4 mb-md-0">
          <h6 class="mb-0 text-white">{{$ml.with('VueJS').get('socialMedia')}}</h6>
        </b-col>
        <b-col md="6" lg="7" class="text-center text-md-right">
          <a class="fb-ic ml-0">
            <v-icon name="brands/facebook" class="text-white mr-lg-4"/>
          </a>
          <a class="tw-ic"><v-icon name="brands/twitter" class="text-white mr-lg-4"/></a>
          <a class="gplus-ic"><v-icon name="brands/google-plus" class="text-white mr-lg-4"/></a>
          <a class="li-ic">
            <v-icon name="brands/linkedin-in" class="text-white mr-lg-4"/>
          </a>
          <a><v-icon name="brands/instagram" class="text-white mr-lg-4"/></a>
        </b-col>
      </b-row>
    </b-container>

  </div>
  <b-container class="mt-5 mb-4 text-center text-md-left">
    <b-row class="mt-3">
      <b-col md="3" lg="4" xl="3" class="mb-4">
        <h6 class="text-uppercase font-weight-bold"><strong>Fractal Software, Corp.</strong></h6>
        <hr class="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style="width: 60px" />
        <p>A la vanguardia de la tecnologia.</p>
      </b-col>
      <b-col md="2" lg="2" xl="2" class="mb-4">
        <h6 class="text-uppercase font-weight-bold"><strong>Products</strong></h6>
        <hr class="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style="width: 60px" />
        <p><a href="#!">MDBootstrap</a></p>
        <p><a href="#!">MDWordPress</a></p>
        <p><a href="#!">BrandFlow</a></p>
        <p><a href="#!">Bootstrap Angular</a></p>
      </b-col>
      <b-col md="3" lg="2" xl="2" class="mb-4">
        <h6 class="text-uppercase font-weight-bold"><strong>Useful links</strong></h6>
        <hr class="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style="width: 60px" />
        <p><a href="#!">Your Account</a></p>
        <p><a href="#!">Become an Affiliate</a></p>
        <p><a href="#!">Shipping Rates</a></p>
        <p><a href="#!">{{$ml.with('VueJS').get('help')}}</a></p>
      </b-col>
      <b-col md="4" lg="3" xl="3" class="mb-4">
        <h6 class="text-uppercase font-weight-bold"><strong>{{$ml.with('VueJS').get('contact')}}</strong></h6>
        <hr class="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style="width: 60px" />
        <p>
          <v-icon name="home" class="mr-3"/>Miami, FL 33196, US
        </p>
        <p>
          <v-icon name="envelope" class="mr-3"/>
          contact@condominioaldia.net
        </p>
        <p><v-icon name="phone" class="mr-3"/> + 01 786 401 9338</p>
        <p><v-icon name="print" class="mr-3"/> + 01 786 401 9338</p>
      </b-col>
    </b-row>
  </b-container>
  <div class="footer-copyright text-center py-3">
    <b-container fluid>
      &copy; 2019 Copyright: <a href="https://www.MDBootstrap.com"> Condominioaldia.net </a>
    </b-container>
  </div>
</footer>

</template>
<script>

import 'vue-awesome/icons/home';
import 'vue-awesome/icons/envelope';
import 'vue-awesome/icons/phone';
import 'vue-awesome/icons/print';
import 'vue-awesome/icons/brands/facebook';
import 'vue-awesome/icons/brands/twitter';
import 'vue-awesome/icons/brands/linkedin-in';
import 'vue-awesome/icons/brands/google-plus';
import 'vue-awesome/icons/brands/instagram';
import Icon from 'vue-awesome/components/Icon';
  export default {
    name: 'navBar',
    components:{
      'v-icon': Icon
    },
  }
</script>