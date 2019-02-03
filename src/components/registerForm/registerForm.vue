<template>
    <div>
        <h2>{{$ml.with('VueJS').get('signUp')}}</h2>
        <form @submit.prevent="submit">
            <b-form-group> 
                <label for="name" class="sr-only"><span v-text="$ml.with('VueJS').get('legalName')"></span></label>
                <b-form-input @change="$v.form.name.$touch()" :state="$v.form.name.$dirty ? !$v.form.name.$error : null" :placeholder="$ml.with('VueJS').get('legalName')" type="text" v-model="form.name" name="name" />
                <b-form-invalid-feedback  v-if="$v.form.name.$dirty&&$v.form.name.$invalid">
                    <div class="error" v-if="!$v.form.name.required">Enter legal name</div>
                </b-form-invalid-feedback>
            </b-form-group>

            

            <b-form-group> 
                <label for="email" class="sr-only"><span v-text="$ml.with('VueJS').get('email')"></span></label>
                <b-form-input @change="$v.form.email.$touch()" :state="$v.form.email.$dirty ? !$v.form.email.$error : null" :placeholder="$ml.with('VueJS').get('email')" type="text" v-model="form.email" name="email" />
                <b-form-invalid-feedback  v-if="$v.form.email.$dirty&&$v.form.email.$invalid">
                    <div class="error" v-if="!$v.form.email.required">Enter Email</div>
                    <div class="error" v-if="!$v.form.email.email">Email address error</div>
                </b-form-invalid-feedback>
            </b-form-group>



            <b-form-group> 
                <label for="password1" class="sr-only">Password</label>
                <b-form-input @change="$v.form.password1.$touch()" :state="$v.form.password1.$dirty ? !$v.form.password1.$error : null" :placeholder="$ml.with('VueJS').get('password')" type="password" v-model="form.password1" name="password1" />
                <b-form-invalid-feedback  v-if="$v.form.password1.$dirty&&$v.form.password1.$invalid">
                    <div class="error" v-if="!$v.form.password1.required">Ingrese contraseña</div>
                    <div class="error" v-if="!$v.form.password1.minLength">Al menos 8 caracteres</div>
                </b-form-invalid-feedback>
            </b-form-group>



            
            <b-form-group> 
                <label for="password2" class="sr-only">Password</label>
                <b-form-input @change="$v.form.password2.$touch()" :state="$v.form.password2.$dirty ? !$v.form.password2.$error : null" :placeholder="$ml.with('VueJS').get('password')" type="password" v-model="form.password2" name="password2" />
                <b-form-invalid-feedback  v-if="$v.form.password2.$dirty&&$v.form.password2.$invalid">
                    <div class="error" v-if="!$v.form.password2.sameAsPassword">No coincide con su contraseña</div>
                </b-form-invalid-feedback>
            </b-form-group>




    <b-form-group>
        <b-form-file :lang="lang" accept=".jpg, .png, .gif" v-model="form.id_proof"  :state="Boolean(form.id_proof) ? Boolean(form.id_proof) : null" :placeholder="$ml.with('VueJS').get('fiscalProof')"></b-form-file>
            <b-form-invalid-feedback >
                <div class="error" v-if="!$v.form.id_proof.required">Cargue un comprobante</div>
            </b-form-invalid-feedback>
    </b-form-group>

    <b-form-group>
        <b-form-checkbox 
            id="terms"
            v-model="form.terms"
            name="terms"
            @change="$v.form.terms.$touch()"
            :state="$v.form.terms.$dirty?  $v.form.terms.accepted : null"
            >
          {{$ml.with('VueJS').get('terms')}}
        </b-form-checkbox>

   
        <div><code class="error" v-if="!$v.form.terms.accepted&&$v.form.terms.$dirty">Acepte los terminos</code></div>
   
    </b-form-group>

    <b-form-group>
        <button class="btn btn-primary" :disabled="$v.form.$invalid">{{$ml.with('VueJS').get('createAcc')}}</button>
        <router-link to="/login" class="btn btn-link">{{$ml.with('VueJS').get('alreadyAcc')}}</router-link>
    </b-form-group>

        </form>
    </div>
</template>

<script>
import 'es6-promise/auto';

import formMixin from '@/mixins/form';


import { required, minLength, email, sameAs } from "vuelidate/lib/validators";
//import { mapState, mapActions } from 'vuex';
//import { MLBuilder } from 'vue-multilanguage';
export default {
    mixins:
        [formMixin]
    ,
    props:{
        lang:String
    },
    data () {
        return {
            form:{
                name:'',
                email: '',
                password1: '',
                password2: '',
                //submitted: false,
                id_proof: null,
                completeName:'',
                terms: undefined,
                submitStatus:undefined
            }
        }
    },
    computed: {
       // ...mapState('account', ['status'])

    },

  validations: {
      form:{
            name: {
                required,
                //minLength: minLength(4)
            },
            email:{
                email,
                required
            },
            password2: {
                sameAsPassword: sameAs('password1')
            },
            password1: {
                required,
                minLength: minLength(8)
            },
            id_proof:{
                required
            },
            terms:{
                accepted: sameAs(()=>true)

            }
      }

    },
    // created () {
    //     // reset login status
    //     this.logout();
    // },
    methods: {
        //...mapActions('account', ['login', 'logout']),
        submit() {
          console.log(this.form)
          //this.v$.$touch();
          if (this.$v.form.$invalid) {
            this.submitStatus = 'ERROR'
          } else {
            // do your submit logic here
            this.submitStatus = 'PENDING'
            setTimeout(() => {
              this.submitStatus = 'OK'
            }, 500)
          }
        }
    }
};
</script>
<style>
.custom-file-input:lang(es) ~ .custom-file-label::after {

    content: "Buscar";

}
.custom-file-input:lang(en) ~ .custom-file-label::after {

    content: "Browse";

}
.error{
    font-size: 14px;
}
</style>