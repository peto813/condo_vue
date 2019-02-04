<template>
    <div>
        <h2>{{$ml.with('VueJS').get('pwdChange')}}</h2>
        <form @submit.prevent="submit">
            <password-field :placeholder="$ml.with('VueJS').get('oldPwd')" :password="form.old_password" @change="onOldPwdChange"></password-field>
            <password-field :placeholder="$ml.with('VueJS').get('password')" :password="form.new_password1" @change="onNewPwd1Change"></password-field>
            <password-field :isConfirm="true" :placeholder="$ml.with('VueJS').get('confirm')" :confirm="form.new_password1" :password="form.new_password2" @change="onNewPwd2Change"></password-field>
            <div class="form-group">
                <button class="btn btn-primary" :disabled="$v.form.$invalid">{{$ml.with('VueJS').get('change')}}</button>
            </div>
        </form>
    </div>
</template>

<script>
import { required } from "vuelidate/lib/validators";

import passwordField  from '@/components/passwordField/passwordField.vue';
import formMixin from '@/mixins/form';

export default {
    mixins:[formMixin],
    components:{
        'password-field':passwordField
    },
    data () {
        return {
            form:{
                new_password1: '',
                new_password2:'',
                old_password:''
            }
        }
    },
  validations: {
      form:{
        new_password1: {required},
        new_password2:{required},
        old_password:{required}
      }
    },
    methods: {
        onOldPwdChange (value) {
            this.form.old_password = value;
            this.$v.form.old_password.$touch();
        },
        onNewPwd1Change (value) {
            this.form.new_password1 = value;
            this.$v.form.new_password1.$touch();
        },
        onNewPwd2Change (value) {
            this.form.new_password2 = value;
            this.$v.form.new_password2.$touch();
        },
        submit() {
          //this.v$.$touch();
        //   if (this.$v.form.$invalid) {
        //     this.submitStatus = 'ERROR'
        //   } else {
        //     // do your submit logic here
        //     this.submitStatus = 'PENDING'
        //     setTimeout(() => {
        //       this.submitStatus = 'OK'
        //     }, 500)
        //   }
        }
        //...mapActions('account', ['login', 'logout']),
        // handleSubmit (e) {
        //     this.submitted = true;
        //     const { username, password } = this;
        //     if (username && password) {
        //         this.login({ username, password })
        //     }
        // }
    }
};
</script>