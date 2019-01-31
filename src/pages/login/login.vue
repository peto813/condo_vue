<template>
  <div class="main">
  	<b-jumbotron>
	<b-container class="bv-example-row">
	    <b-row>
	        <b-col></b-col>
	        <b-col cols="8">
				
				  <login-form></login-form>
				  <!-- <b-btn variant="primary" href="#">More Info</b-btn> -->
				
	        </b-col>
	        <b-col></b-col>
	    </b-row>
	</b-container>
	</b-jumbotron>
  </div>
</template>
<script>
import loginForm from '@/components/loginForm/loginForm.vue';
import Vue from 'vue';
Vue.component('login-form', loginForm);
export default {}
</script>

<style scoped>
.main {
  padding-top: 80px;;
}

</style>