import axios from "axios";

function setCredentials(data){
    localStorage.setItem('user', JSON.stringify(data.user));
    localStorage.setItem('token', data.token);
    //need service that refreshes the user object in the vuex store
}

let userService = {
    setCredentials
}

export default userService;