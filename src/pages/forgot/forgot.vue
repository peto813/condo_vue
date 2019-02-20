<template>
  <div class="main">
	<b-jumbotron>
	<b-container class="bv-example-row">
		<b-row>
			<b-col></b-col>
			<b-col cols="8">
				<forgot-pwd-form></forgot-pwd-form>
			</b-col>
			<b-col></b-col>
		</b-row>
	</b-container>
	</b-jumbotron>
  </div>
</template>
<script>
import forgotPwdForm from '@/components/forgotPwdForm/forgotPwdForm.vue';
import Vue from 'vue';
Vue.component('forgot-pwd-form', forgotPwdForm);
export default {}
</script>
