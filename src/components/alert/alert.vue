<template>
    <div id="alertComponent">
        <b-alert :show="show" :variant="type" dismissible fade><slot></slot></b-alert>
    </div>
</template>
<style scoped>
    #alertComponent{
        position: fixed;
        width:100%;
        text-align:center;
        font-weight: bold;
        font-size:20px;
        transition:all 1s ease-in;
        z-index: 100;
    }
</style>

<script>
  export default {
      props:{
          show:Boolean,
          type:String
      }
  }
</script>