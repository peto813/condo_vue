import axios from "axios";
import { Script } from "vm";
//USE DIFFERENT BASE URLS DEPEDING IF PRODUCTION OR DEVELPMENT
const baseUrl = process.env.NODE_ENV==='production' ? 'https://condominioaldia.net/' : 'http://localhost:8000/';



function login(data){
    let url = baseUrl + 'users/login/';
    return axios.post(url, data)
}

function register(form){
  let url = baseUrl + 'condos/registration/';
  let formData = new FormData();
  // return axios.post(url, data)
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
    // .then(function(){
    //   console.log('SUCCESS!!');
    // })
    // .catch(function(){
    //   console.log('FAILURE!!');
    // }


  

}

function recoverPwd(data){
    let url = baseUrl + 'users/password/reset/';
    return axios.post(url, data)
}

let api = {
    register,
    login,
    recoverPwd,
  }


export default api