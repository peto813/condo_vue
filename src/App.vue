<template>
<div id="app">
<nav-bar :user-data="userData"></nav-bar>
  <router-view></router-view>
  
</div>
</template>
<script>
  export default{
    data: function() {
         return {
            userData: {
              role:undefined,
              first_name:'Einstein',
              loggedIn : false
            }
            //leadMsg :'Gestion y consulta',
            //msg: 'Tu informacion a la mano'
          }
      }
  }
</script>