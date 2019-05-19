<template>
  <div>
	<b-container class="bv-example-row">
		<b-row>
			<b-col></b-col>
			<b-col cols="8" class="profile-container">
        <h1>Perfil</h1>
        <hr>
        <div><strong>Miembro desde:</strong> {{userData.user.date_joined}}</div>
        <div><strong>Tipo:</strong> {{userData.user.role}}</div>
        <div><strong>Email:</strong> {{userData.user.email}}</div>
        <div><strong>Logo</strong></div>
        <div><strong>Photo</strong></div>
        <div v-if="userData.user.role == 'condo'">
            <div><strong>Nombre:</strong> {{userData.profile.name}}</div>
            <div><strong>Direccion:</strong> {{userData.profile.address}}</div>
            <div><strong>Celular:</strong> {{userData.user.mobile}}</div>
            <div><strong>Oficina:</strong> {{userData.user.office}}</div>
            <div><strong>Otro:</strong> {{userData.user.other}}</div>
        </div>
        <div v-else-if="userData.user.role == 'resident'">
          <div><strong>Nombre(s):</strong> {{userData.user.first_name}}</div>
          <div><strong>Apellidos:</strong> {{userData.user.last_name}}</div>
        </div>
        
        <hr>
        <!-- <b-button variant="primary" class="float-right">Cambiar contraseña</b-button> -->
        <b-button size="lg" variant="primary" class="save-btn">Guardar</b-button>
			</b-col>
			<b-col></b-col>
		</b-row>
	</b-container>

  </div>
</template>
<script>
import { mapState } from 'vuex';
import api from '@/services/api.js';

export default {
    components:{
      //alert,
    },
    computed:{
      ...mapState([
      'alert',
      'userData',
      ])      
    },
    // mounted: function () {
    //   this.$nextTick(function () {
    //     api.getProfile()
    //             .then(response => {
    //                 this.updateUser(response.data)
    //             })
    //             .catch(error =>{
    //                 this.showAlert({
    //                     message:error.response.data.non_field_errors[0],
    //                     type:'danger',
    //                     visible:true
    //                 });
    //             })
    //     //let token=localStorage.getItem('vuex_user');
    //     // Code that will run only after the
    //     // entire view has been rendered
    //   })
    // }
}
</script>
<style scoped>
  .profile-container{
    border:3px solid gray;
    border-radius: 10px;
    padding:25px;
  }
  .save-btn{
    margin-right: 10px;
  }
</style>
