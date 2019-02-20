import axios from "axios";
import { Script } from "vm";
//USE DIFFERENT BASE URLS DEPEDING IF PRODUCTION OR DEVELPMENT
const baseUrl = process.env.NODE_ENV==='production' ? 'https://condominioaldia.net/' : 'http://localhost:8000/';



function login( data){
    let url = baseUrl + 'users/login/'
    return axios.post(url, data)
        .then(function(response){
            console.log(response)
        })
        .catch(function(error){
            console.log(error)
        })
}

function recoverPwd(data){
    let url = baseUrl + 'users/password/reset/'
    return axios.post(url, data)
}

let api = {
    login,
    recoverPwd,
  }


export default api