<template>
	<div class="main">
		<b-jumbotron>
		<b-container class="bv-example-row">
			<b-row>
				<b-col></b-col>
				<b-col cols="8">
					
				<register-form :lang="$ml.get('langShort')"></register-form>
				</b-col>
				<b-col></b-col>
			</b-row>
		</b-container>
		</b-jumbotron>
	</div>
</template>
<script>
import registerForm from '@/components/registerForm/registerForm.vue';
import Vue from 'vue';
Vue.component('register-form', registerForm);
export default {}
</script>

<style scoped>
.main {
  padding-top: 80px;;
}

</style>