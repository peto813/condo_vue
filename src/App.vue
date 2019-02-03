<template>
<div id="app">
  <nav-bar :user-data="userData"></nav-bar>
  <transition
          name="fade"
          mode="out-in"
        >
    <router-view class="pt-4"></router-view>
  </transition>
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
<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.3s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0
}
</style>