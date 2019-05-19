

<template>
  <div>
	<h1>Cuentas Bancarias</h1>
  
  <!-- <vuetable ref="vuetable"
    :api-url="accountsUrl"
    :fields="['name', 'email', 'birthdate']"
    :http-options="httpOptions"
    data-path="results"
    pagination-path=""
  ></vuetable> -->


     <b-button v-b-modal.modalPrevent>Registrar Cuenta</b-button>

    <!-- Modal Component -->
    <b-modal
      id="modalPrevent"
      ref="modal"
      title="Registre su cuenta"
      @ok="handleOk"
      @show="handleShow"
    >
    <add-account-form></add-account-form>
    </b-modal>
  </div>
</template>
<script>
import Vue from 'vue';
import Vuetable from 'vuetable-2';
import { mapState } from 'vuex';
import api from '@/services/api.js';
import addAccountForm from '@/components/addAccountForm/addAccountForm.vue';

export default {
  components:{
    Vuetable,
    'add-account-form':addAccountForm,
    'vuetable-pagination': Vuetable.VuetablePagination
  },

  data:function(){
    return{
      currencies:[],
      accountsUrl:api.getAccountsUrl,
      httpOptions: { headers: { Authorization: 'Token ' + this.$store.state.userData.token } },
    }
  },
  mounted: function () {
    this.$nextTick(function () {
      //alert(api.getAccountsUrl())
      //console.log(this.$store.state.userData.token)
      //let token=localStorage.getItem('vuex_user');
      // Code that will run only after the
      // entire view has been rendered
    })
  },

  computed:{

    ...mapState([
    'userData',
    ])      
  },
  methods: {
      handleShow() {
        api.getCurrencies()
          .then(function(response){
            this.currencies= response;
          })
          .catch(function(error){
            console.log(error)
          })
      },
      handleOk(evt) {
        // Prevent modal from closing
        evt.preventDefault()
        if (!this.name) {
          alert('Please enter your name')
        } else {
          this.handleSubmit()
        }
      },
      handleSubmit() {
        this.names.push(this.name)
        this.clearName()
        this.$nextTick(() => {
          // Wrapped in $nextTick to ensure DOM is rendered before closing
          this.$refs.modal.hide()
        })
      },
      addAccount(){
        api.logIn(this.form)
          .then(response => {
              this.updateUser(response.data)
              this.$router.push('/dashboard');
          })
          .catch(error =>{
              this.showAlert({
                  message:error.response.data.non_field_errors[0],
                  type:'danger',
                  visible:true
          });
          })
        
      }
      // onPaginationData (paginationData) {
      //   this.$refs.pagination.setPaginationData(paginationData)
      // },
      // onChangePage (page) {
      //   this.$refs.vuetable.changePage(page)
      // },
      // editRow(rowData){
      //   alert("You clicked edit on"+ JSON.stringify(rowData))
      // },
      // deleteRow(rowData){
      //   alert("You clicked delete on"+ JSON.stringify(rowData))
      // }
    }
}
</script>
