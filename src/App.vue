<template>
<div id="app">
  <nav-bar :user-data="userData"></nav-bar>
  <alert class="alertComponent" :show="alert.visible" :type="alert.type">{{alert.message}}</alert>
  <transition
          name="fade"
          mode="out-in"
        >
    <router-view class="pt-4"></router-view>
  </transition>
</div>
</template>
<script>
import alert from '@/components/alert/alert.vue';
import { mapState } from 'vuex'
  export default{
    components:{
      alert,
    },
    data: function() {
         return {
            // userData: {
            //   role:undefined,
            //   first_name:'Einstein',
            //   loggedIn : false
            // }
          }
      },
      computed:{
        ...mapState([
        'alert',
        'userData',
        ])      
      }
    // computed: mapState([
    //   'alertVisible',
    //   'userData'
    // ])
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