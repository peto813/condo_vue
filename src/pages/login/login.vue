<template>
	<div>
	<b-jumbotron>
	<b-container class="bv-example-row">
		<b-row>
			<b-col></b-col>
			<b-col cols="8">
				<login-form></login-form>
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

