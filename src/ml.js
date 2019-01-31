//multilanguage settings file

import Vue from 'vue'
import { MLInstaller, MLCreate, MLanguage } from 'vue-multilanguage'

Vue.use(MLInstaller)
 
export default new MLCreate({
  initial: 'Español',
  save: process.env.NODE_ENV === 'production',
  languages: [
    new MLanguage('English').create({
      //title: 'Oi {0}!',
      login: 'Login',
      home:'Home',
      register:'Register',
      faq: 'Faq',
      lang:'Language',
      accounts:'Accounts',
      properties: 'Properties',
      profile:'Profile',
      signOut:'Sign Out',
      invoices: 'Invoices',
      payments: 'Payments',
      username:'Username',
      password:'Password',
      signUp:'Sign Up',
      email:'E-mail',
      forgot:'Forgot Password?',
      contact:'Contact',
      createAcc:'Create Account',
      alreadyAcc:'Already have an account?',
      pwdRecovery: 'Password Recovery',
      recover: 'Recover',
      landingPageWelcome: 'Your Condo a click away'
    }),
    new MLanguage('Español').create({
      //title: 'Hello {0}!',
      login: 'Ingresar',
      home:'Inicio',
      register:'Registro',
      faq: 'Preguntas',
      lang:'Idioma',
      accounts:'Cuentas',
      properties: 'Inmuebles',
      profile:'Perfil',
      signOut:'Salir',
      invoices: 'Facturas',
      payments: 'Pagos',
      username:'Usuario',
      password:'Contraseña',
      signUp:'Registro',
      email:'Correo Electronico',
      forgot:'¿Olvido contraseña?',
      contact:'Contacto',
      createAcc:'Crear Cuenta',
      alreadyAcc:'¿Ya posees una cuenta?',
      pwdRecovery: 'Recuperacion de contraseña',
      recover: 'Recuperar',
      landingPageWelcome: 'Tu condominio a un click de distancia'
    }),
 
    // new MLanguage('portuguese').create({
    //   //title: 'Oi {0}!',
    //   //msg: 'Você tem {f} amigos e {l} curtidas',
    //   home:''
    // })


  ]
})