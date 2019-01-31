<template>
<!-- Footer -->
<footer color="unique-color-dark" class="page-footer font-small pt-0">
  <div style="backgroundColor: #938F71">
    <b-container class="text-left">
      <b-row class="py-4 d-flex align-items-center">
        <b-col md="6" lg="5" class="text-center text-md-left mb-4 mb-md-0">
          <h6 class="mb-0 white-text">Get connected with us on social networks!</h6>
        </b-col>
        <b-col md="6" lg="7" class="text-center text-md-right">
          <a class="fb-ic ml-0"><i class="fab fa-facebook white-text mr-lg-4"> </i></a>
          <a class="tw-ic"><i class="fab fa-twitter white-text mr-lg-4"> </i></a>
          <a class="gplus-ic"><i class="fab fa-google-plus white-text mr-lg-4"> </i></a>
          <a class="li-ic"><i class="fab fa-linkedin-in white-text mr-lg-4"> </i></a>
          <a class="ins-ic"><i class="fab fa-instagram white-text mr-lg-4"> </i></a>
        </b-col>
      </b-row>
    </b-container>
  </div>
  <b-container class="mt-5 mb-4 text-center text-md-left">
    <b-row class="mt-3">
      <b-col md="3" lg="4" xl="3" class="mb-4">
        <h6 class="text-uppercase font-weight-bold"><strong>Fractal Software, Corp.</strong></h6>
        <hr class="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style="width: 60px" />
        <p>Here you can use rows and columns here to organize your footer content. Lorem ipsum dolor sit
          amet, consectetur adipisicing elit.</p>
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
        <p><a href="#!">Help</a></p>
      </b-col>
      <b-col md="4" lg="3" xl="3" class="mb-4">
        <h6 class="text-uppercase font-weight-bold"><strong>{{$ml.with('VueJS').get('contact')}}</strong></h6>
        <hr class="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style="width: 60px" />
        <p><i class="fas fa-home mr-3"></i> Miami, FL 33196, US</p>
        <p><i class="fas fa-envelope mr-3"></i> contact@condominioaldia.net</p>
        <p><i class="fas fa-phone mr-3"></i> + 01 786 401 9338</p>
        <p><i class="fas fa-print mr-3"></i> + 01 786 401 9338</p>
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