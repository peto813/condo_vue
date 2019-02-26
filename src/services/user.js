import axios from "axios";
//import { Script } from "vm";
//USE DIFFERENT BASE URLS DEPEDING IF PRODUCTION OR DEVELPMENT
//const baseUrl = process.env.NODE_ENV==='production' ? 'https://condominioaldia.net/' : 'http://localhost:8000/';



function isLoggedIn(data){
    let url = baseUrl + 'users/login/';
    return axios.post(url, data)
}

let user = {
    isLoggedIn,
  }


export default user