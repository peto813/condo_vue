<template>
  <div>
  <div style="background:#E3E3E3">
    <h2 class="text-center welcomeMessage">{{$ml.with('VueJS').get('landingPageWelcome')}}</h2>
    <h4 class="text-center mt-4 mb-5">Condominioaldia tiene una variedad de caracteristicas que lo hacen ideal para todo relacionado a gestion de condominios</h4>

<b-container>
    <b-row class="text-center">
        <b-col></b-col>
        <b-col cols="12" sm="auto" class="mb-5">

      <b-form @submit.prevent="handleSubmit" inline>
          <email-field size="lg" :validationObject="$v.form.email" @change="onChangeEmail"></email-field>
          <b-button id ="regButton" size="lg" variant="primary" class="ml-2">{{$ml.with('VueJS').get('getStarted')}}</b-button>
      </b-form>

        </b-col>
        <b-col></b-col>
    </b-row>
</b-container>
</div>



    <hr >
  <b-container >
    <b-row class="mt-3">

      <b-col cols="12" lg="3" xl="5" class="mb-4" >
        <b-row class="mt-3">
          <b-col cols="2" class="mt-5"><v-icon name="book" scale="3.5"/></b-col>
          <b-col cols="10">
            <div><h3>{{$ml.with('VueJS').get('landingFeature1')}}</h3><p>Buy and sell popular digital currencies, keep track of them in the one place.</p></div>

            <p>Here you can use rows and columns here to organize your footer content. Lorem ipsum dolor sit
              amet, consectetur adipisicing elit.</p> 
          </b-col>
        </b-row>
        <b-row>
          <b-col cols="2" class="mt-5"><v-icon name="money-bill" scale="3.5"/></b-col>
          <b-col cols="10">
        <div><h3>{{$ml.with('VueJS').get('landingFeature2')}}</h3><p>Buy and sell popular digital currencies, keep track of them in the one place.</p></div>

        <p>Here you can use rows and columns here to organize your footer content. Lorem ipsum dolor sit
          amet, consectetur adipisicing elit.</p> 
          </b-col>
        </b-row>
        <b-row>
          <b-col cols="2" class="mt-5"><v-icon name="university" scale="3.5"/></b-col>
          <b-col cols="10">
        <div><h3>{{$ml.with('VueJS').get('landingFeature3')}}</h3><p>Buy and sell popular digital currencies, keep track of them in the one place.</p></div>

        <p>Here you can use rows and columns here to organize your footer content. Lorem ipsum dolor sit
          amet, consectetur adipisicing elit.</p> 
          </b-col>
        </b-row>
        <b-row>
          <b-col cols="2" class="mt-5"><v-icon name="recycle" scale="3.5"/></b-col>
          <b-col cols="10">
        <div><h3>{{$ml.with('VueJS').get('landingFeature4')}}</h3><p>Buy and sell popular digital currencies, keep track of them in the one place.</p></div>

        <p>Here you can use rows and columns here to organize your footer content. Lorem ipsum dolor sit
          amet, consectetur adipisicing elit.</p> 
          </b-col>
        </b-row>
      </b-col>


      <b-col cols="12" lg="9" xl="7" class="mb-4" >
        <b-row class="mt-3">
          <b-col cols="12">
            <div><h3>Showcase some screen shots of the app</h3><p>Mobile phone screenshots as well</p></div>
            <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p> 
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </b-container>
    <condo-footer></condo-footer>

  </div>
</template>
<script>
import Vue from 'vue';
import bJumbotron from 'bootstrap-vue/es/components/jumbotron/jumbotron';
import carousel from '../../components/carousel/carousel.vue';
import footer from '@/components/footer/footer.vue';
Vue.component('carousel-landing', carousel);
Vue.component('b-jumbotron', bJumbotron);
Vue.component('condo-footer', footer);
import 'vue-awesome/icons/user';
import 'vue-awesome/icons/recycle';
import 'vue-awesome/icons/university';
import 'vue-awesome/icons/money-bill';
import 'vue-awesome/icons/book';
import emailField from '@/components/emailField/emailField.vue';
import formMixin from '@/mixins/form';
import { required, email } from "vuelidate/lib/validators";


import Icon from 'vue-awesome/components/Icon';
export default {
    mixins:[formMixin],
    components:{
      'v-icon': Icon,
      'email-field':emailField
    },
  data: function() {
       return {
          form:{
            email:''
          }
        }
    },
  validations: {
      form:{
            email:{
                email,
                required
            }
      }
    },
    methods: {
        onChangeEmail (value) {
            this.form.email = value;
            this.$v.form.email.$touch()
        },
        submit() {
          //this.v$.$touch();
        //   if (this.$v.form.$invalid) {
        //     this.submitStatus = 'ERROR'
        //   } else {
        //     // do your submit logic here
        //     this.submitStatus = 'PENDING'
        //     setTimeout(() => {
        //       this.submitStatus = 'OK'
        //     }, 500)
        //   }
        }
        //...mapActions('account', ['login', 'logout']),
        // handleSubmit (e) {
        //     this.submitted = true;
        //     const { username, password } = this;
        //     if (username && password) {
        //         this.login({ username, password })
        //     }
        // }
    }
}
</script>

<style>
@media only screen and (min-width: 495px) {
  #regButton{
    position: absolute;
      top: 1px;
      left: 380px;

  }
}
/* #regButton{
  position: absolute;
    top: 1px;
    left: 380px;

} */

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
.welcomeMessage{
  font-size: 48px;

  font-weight: 600;

  font-style: normal;

  line-height: 1.17;

  margin: 0px;
}
</style>