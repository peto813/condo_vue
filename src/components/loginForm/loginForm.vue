<template>
    <div>
        <h2>{{$ml.with('VueJS').get('login')}}</h2>
        <form @submit.prevent="submit">
            <email-field :email="form.email" @change="onChangeEmail"></email-field>
            <password-field :placeholder="$ml.with('VueJS').get('password')" :password="form.password" @change="onPwdChange"></password-field>

            <div class="form-group">
                <button class="btn btn-primary" :disabled="$v.form.$invalid">{{$ml.with('VueJS').get('login')}}</button>
                <router-link to="/forgot" class="btn btn-link">{{$ml.with('VueJS').get('forgot')}}</router-link>
            </div>
        </form>
    </div>
</template>

<script>

import { required, email } from "vuelidate/lib/validators";
import emailField from '@/components/emailField/emailField.vue';
import formMixin from '@/mixins/form';
import passwordField  from '@/components/passwordField/passwordField.vue';
// import api from '@/services/api.js';
// import { mapMutations } from 'vuex'
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