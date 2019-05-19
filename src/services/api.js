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


function logOut(){
  let url = baseUrl + 'users/logout/';
  return axios.post(url, {})
}

function getCurrencies(){
  let url = baseUrl+'currencies/';
  console.log(url)
  return axios.get(url)
}

const getAccountsUrl="http://localhost:8000/condos/accounts/";


function createAccount(data){
  let url = getAccountsUrl;
  return axios.post(url, data)
}

function getProfile(){
  // this function requests the user profile from backend
  // returns an object of form {user: {}, profile: {}}
  let url = baseUrl + 'users/profile/';
  return axios.get(url)
}

let api = {
    register,
    logIn,
    recoverPwd,
    logOut,
    baseUrl,
    getAccountsUrl,
    createAccount,
    getCurrencies,
    getProfile
  }


  

export default api