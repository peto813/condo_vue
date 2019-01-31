
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

//import careers from './pages/careers.vue';

//components imports
import navBar from '@/components/navBar/navBar.vue';
import './ml';
//import acceptButton from './components/acceptButton/acceptButton.vue';

//import bNavbar from 'bootstrap-vue/es/components/navbar/navbar';

Vue.config.productionTip = false
Vue.use(BootstrapVue);
Vue.use(VueRouter)

Vue.component('nav-bar', navBar);


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
const routes = [
  { path: '/', component: landingPage },
  { path: '/about', component: aboutUs },
  { path: '/accounts', component: accounts },
  { path: '/faq', component: faq },
  { path: '/invoices', component: invoices },
  { path: '/login', component: login },
  { path: '/payments', component: payments },
  { path: '/profile', component: profile },
  { path: '/properties', component: properties },
  { path: '/register', component: register },
  { path: '/forgot', component: forgot },
  { path: '*', redirect: '/' }
]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = new VueRouter({
  routes // short for `routes: routes`
})


new Vue({
	router, 
	render: h => h(App),

}).$mount('#app')

