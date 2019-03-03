
//dependencies imports
import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import BootstrapVue from 'bootstrap-vue';

//pages imports
import landingPage from './pages/landing_page/landing_page.vue';
import aboutUs from './pages/about/about.vue';
import forgot from './pages/forgot/forgot.vue';
import faq from './pages/faq/faq.vue';
import accounts from './pages/accounts/accounts.vue';
import invoices from './pages/invoices/invoices.vue';
import login from './pages/login/login.vue';
import payments from './pages/payments/payments.vue';
import profile from './pages/profile/profile.vue';
import properties from './pages/properties/properties.vue';
import register from './pages/register/register.vue';
import dashboard from './pages/dashboard/dashboard.vue';
import createPersistedState from 'vuex-persistedstate'

//vuex
import 'es6-promise/auto';
import Vuex from 'vuex';

function userIsloggedIn(){
  return localStorage.getItem('vuex_user') ? JSON.parse(localStorage.getItem('vuex_user')).userData.token : undefined;
}

//VUEX MODULE
const userModule = {
  state: {
      user:{},
      token:undefined
  },
  mutations: {
      updateUser(state, userObject) {
        state.user=  userObject.user;
        state.token =userObject.key;
      },
      logOut (state) {
        state.user =  {};
        state.token  =undefined;       
      }
  }
}


Vue.use(Vuex);
const store = new Vuex.Store({
  modules: {
    userData: userModule,
  },
  //PERSISTED STATE FOR VUE
  plugins: [
    createPersistedState({
      key: 'vuex_user',
      storage: window.localStorage,
      paths: ['userData']
    })
  ],
  state: {
    alert:{
      visible:false,
      type:'info',
      message:'',
    },
    // userData:{
    //   loggedIn:false
    // }
  },
  // getters: {
  //   token (state) {
  //     alert('a')
  //     return state.token
  //   }
  // },
  mutations: {
    showAlert (state, messageObject) {
      state.alert= messageObject;
    },
    hideAlert (state) {
      state.alertVisible = false;
    }
  }
})

//axios (requests package)
import axios from 'axios';
import VueAxios from 'vue-axios';
Vue.use(VueAxios, axios);

//components imports
import navBar from '@/components/navBar/navBar.vue';
import './ml';
//import acceptButton from './components/acceptButton/acceptButton.vue';

//import bNavbar from 'bootstrap-vue/es/components/navbar/navbar';

Vue.config.productionTip = false
Vue.use(BootstrapVue);
Vue.use(VueRouter)

Vue.component('nav-bar', navBar);


//validation global imports
//import Vuelidate from 'vuelidate';
//Vue.use(Vuelidate);

// 0. If using a module system (e.g. via vue-cli), import Vue and VueRouter
// and then call `Vue.use(VueRouter)`.

// 1. Define route components.
// These can be imported from other files
//const Foo = { template: '<div>foo</div>' }
//const Bar = { template: '<div>bar</div>' }

// 2. Define some routes
// Each route should map to a component. The "component" can
// either be an actual component constructor created via
// `Vue.extend()`, or just a component options object.
// We'll talk about nested routes later.
function loggedInRoute(to, from, next){

  if (userIsloggedIn()) {
    next()
  } else {
    next({
      path: '/'
    })
  }
}

function anonRoute(to, from, next){

  if (!userIsloggedIn()) {
    next()
  } else {
    next({
      path: '/dashboard'
    })
  }
}

const routes = [
  { path: '/', component: landingPage, beforeEnter:anonRoute },
  { path: '/about', component: aboutUs },
  { path: '/accounts', component: accounts },
  { path: '/faq', component: faq },
  { path: '/invoices', component: invoices, beforeEnter:loggedInRoute },
  { path: '/login', component: login },
  { path: '/payments', component: payments, beforeEnter:loggedInRoute },
  { path: '/profile', component: profile, beforeEnter:loggedInRoute },
  { path: '/properties', component: properties, beforeEnter:loggedInRoute },
  { path: '/dashboard/', component: dashboard, beforeEnter:loggedInRoute },
  {path: "/register", name:"register", component: register,  props: true},
  { path: '/forgot', component: forgot },
  { path: '*', redirect: '/' }
]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = new VueRouter({
  routes // short for `routes: routes`
})

// router.beforeEach((to, from, next) => {
//   console.log(to)
//   console.log(from)
//   console.log(next)
// })

new Vue({
  router,
  store,
	render: h => h(App),

}).$mount('#app')

