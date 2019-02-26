<template>
    <div>
        <h2>{{$ml.with('VueJS').get('signUp')}}</h2>
        <form @submit.prevent="submit"  name="registerForm">
            <b-form-group> 
                <label for="name" class="sr-only"><span v-text="$ml.with('VueJS').get('legalName')"></span></label>
                <b-form-input @change="$v.form.name.$touch()" :state="$v.form.name.$dirty ? !$v.form.name.$error : null" :placeholder="$ml.with('VueJS').get('legalName')" type="text" v-model="form.name" name="name" />
                <b-form-invalid-feedback  v-if="$v.form.name.$dirty&&$v.form.name.$invalid">
                    <div class="error" v-if="!$v.form.name.required">Enter legal name</div>
                </b-form-invalid-feedback>
            </b-form-group>

            <email-field ref="email" :email="form.email"  @change="onChangeEmail"></email-field>

            <password-field ref="pwd1" :confirm="form.password1" :placeholder="$ml.with('VueJS').get('password')" :password="form.password1" @change="onPwd1Change"></password-field>

            <password-field ref="pwd2" :isConfirm="true" :placeholder="$ml.with('VueJS').get('confirm')"  :password="form.password2" :confirm="form.password1" @change="onPwd2Change"></password-field>

            <b-form-group>
                <b-form-file
                    :lang="lang"
                    accept=".jpg, .png, .gif"
                    v-model="form.id_proof" 
                    :state="$v.form.id_proof.$dirty ? !$v.form.id_proof.$invalid : null"
                    :placeholder="$ml.with('VueJS').get('fiscalProof')"
                    @change="onFileChange"
                    ref="id_proof"
                    >
                </b-form-file>
                <div v-if="$v.form.id_proof.$invalid">
                    <div v-if="$v.form.id_proof.required"><code><strong></strong>tipo de archivo no aceptable</code></div>                    
                </div>
                <!-- <b-form-invalid-feedback>
                    <div class="error" v-if="!$v.form.id_proof.required">Cargue un comprobante</div>
                </b-form-invalid-feedback> -->
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
import { required, email, sameAs, minLength } from "vuelidate/lib/validators";
import emailField from '@/components/emailField/emailField.vue';
import formMixin from '@/mixins/form';
import passwordField  from '@/components/passwordField/passwordField.vue';
import api from '@/services/api.js';
import { mapMutations } from 'vuex'

const filesValid = (value) => {
    let allowedTypes= ['image/jpeg', 'image/png', 'image/gif']
    return  value ? allowedTypes.indexOf(value.type)>=0 : false
}

export default {
    mixins:
        [formMixin]
    ,
    props:{
        lang:String,
        email:String
    },
    components:{
        'email-field':emailField,
        'password-field': passwordField
    },
    data () {
        return {
            form:{
                name:'',
                password1: '',
                password2: '',
                email: this.$route.params.email,
                id_proof: null,
                terms: false,
            }
        }
    },
  validations: {
      form:{
            name: {
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
                required,
                filesValid
            },
            terms:{
                accepted: sameAs(()=>true)
            },
            email:{
                required,
                email
            }
      }

    },
    methods: {
        resetForm(){
            this.form.name='';
            this.form.terms= false;
            this.$refs.id_proof.reset()
            this.$refs.email.reset();
            this.$refs.pwd1.reset();
            this.$refs.pwd2.reset();
            this.$v.$reset();
        },
        ...mapMutations([
            'showAlert'
        ]),
        onChangeEmail (value) {
            this.form.email = value;
            this.$v.form.email.$touch()
        },
         onPwd1Change (value) {
            this.form.password1 = value;
        },
         onPwd2Change (value) {
            this.form.password2 = value;
        },
        onFileChange() {
            this.$v.form.id_proof.$touch();
        },
        submit(event) {
            api.register(this.form)
                .then(response => {
                    this.$v.$reset();
                    this.showAlert({
                        message:response.data.message,
                        type:'success',
                        visible:true
                    });
                    this.resetForm();
                })
                .catch(error =>{
                    console.log(error)
                    let errorObj = error.response.data
                    this.showAlert({
                        message:errorObj[Object.keys(errorObj)[0]][0],
                        type:'danger',
                        visible:true
                    });
                })
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