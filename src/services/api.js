import axios from "axios";
import { Script } from "vm";
//USE DIFFERENT BASE URLS DEPEDING IF PRODUCTION OR DEVELPMENT
const baseUrl = process.env.NODE_ENV==='production' ? 'https://condominioaldia.net/' : 'http://localhost:8000/';

axios.interceptors.request.use(
  (config) => {
    let token =localStorage.getItem('vuex_user') ? JSON.parse(localStorage.getItem('vuex_user')).userData.token : undefined;
    if (token) {
      config.headers['Authorization'] = `Token ${ token }`;
    }

    return config;
  }, 

  (error) => {
    return Promise.reject(error);
  }
);

function logIn(data){
    let url = baseUrl + 'users/login/';
    return axios.post(url, data)
}

function register(form){
  let url = baseUrl + 'condos/registration/';
  let formData = new FormData();
  for ( let key in form ) {
    formData.append(key, form[key]);
  }
  
  return axios.post( url,
      formData,
      {
      headers: {
          'Content-Type': 'multipart/form-data'
      }
    }
    )
}

function recoverPwd(data){
    let url = baseUrl + 'users/password/reset/';
    return axios.post(url, data)
}


// function logOut(data){
//   let url = baseUrl + 'users/password/reset/';
//   return axios.post(url, data)
// }


let api = {
    register,
    logIn,
    recoverPwd,
  }


  

export default api