<template>
    <div>
        <h2>{{$ml.with('VueJS').get('login')}}</h2>
        <form @submit.prevent="submit">
            <email-field :validationObject="$v.form.email" @change="onChangeEmail"></email-field>
            <password-field :placeholder="$ml.with('VueJS').get('password')" :password="form.password" @change="onPwdChange"></password-field>

            <div class="form-group">
                <button class="btn btn-primary" :disabled="$v.form.$invalid">{{$ml.with('VueJS').get('login')}}</button>
                <router-link to="/forgot" class="btn btn-link">{{$ml.with('VueJS').get('forgot')}}</router-link>
            </div>
        </form>
    </div>
</template>

<script>
import 'es6-promise/auto';

import { required, email } from "vuelidate/lib/validators";
import emailField from '@/components/emailField/emailField.vue';
import formMixin from '@/mixins/form';
import passwordField  from '@/components/passwordField/passwordField.vue';

export default {
    mixins: [formMixin],
    components:{
        'email-field':emailField,
        'password-field': passwordField
    },
    data () {
        return {
            form:{
                email:'',
                password: ''
            }
        }
    },
  validations: {
      form:{
            email:{
                email,
                required
            },
            password: {
                required,
            }
      }

    },
    methods: {
        onChangeEmail (value) {
            this.form.email = value;
            this.$v.form.email.$touch()
        },
        onPwdChange (value) {
            this.form.password = value;
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