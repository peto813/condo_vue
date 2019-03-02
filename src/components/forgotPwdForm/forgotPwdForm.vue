<template>
    <div>
        <h2>{{$ml.with('VueJS').get('pwdRecovery')}}</h2>
        <form @submit.prevent="submit">
            <email-field :email ="form.email" :validationObject="$v.form.email" @change="onChangeEmail"></email-field>
            <div class="form-group">
                <button class="btn btn-primary" >{{$ml.with('VueJS').get('recover')}}</button>
            </div>
        </form>
    </div>
</template>

<script>
import { required, email } from "vuelidate/lib/validators";
import emailField from '@/components/emailField/emailField.vue';
import formMixin from '@/mixins/form';
import api from '@/services/api.js';
import { mapMutations } from 'vuex'
export default {
    mixins:[formMixin, ],
    components:{
        'email-field':emailField
    },
    data () {
        return {
            form:{
                email: ''
            }
        }
    },
  validations: {
      form:{
            email:{
                email,
                required
            }
      }
    },
    methods: {
        ...mapMutations([
            'showAlert'
        ]),
        onChangeEmail (value) {
            this.form.email = value;
            this.$v.form.email.$touch()
        },
        submit() {
            api.recoverPwd({email:this.form.email})
                .then(response => {
                    this.showAlert({
                        message:this.$ml.with('VueJS').get('emailResetSuccess'),
                        type:'success',
                        visible:true
                    });
                    this.$router.push('/login');
                })
                .catch(error =>{
                    this.showAlert({
                        message:error.response.data.email[0],
                        type:'danger',
                        visible:true
                    });
                })
        }
    }
};
</script>