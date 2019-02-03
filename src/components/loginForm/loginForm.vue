<template>
    <div>
        <h2>{{$ml.with('VueJS').get('login')}}</h2>
        <form @submit.prevent="submit">
            <email-field :validationObject="$v.form.email" @change="onChangeEmail"></email-field>
            <div class="form-group">
                <label htmlFor="password" class="sr-only">Password</label>
                <b-form-input :placeholder="$ml.with('VueJS').get('password')" type="password" v-model="form.password" name="password" class="form-control" />
            </div>
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

export default {
    mixins: [formMixin],
    components:{
        'email-field':emailField
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