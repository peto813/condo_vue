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

            <email-field :email="form.email" :validationObject="$v.form.email" @change="onChangeEmail"></email-field>

            <password-field :confirm="form.password1" :placeholder="$ml.with('VueJS').get('password')" :password="form.password1" @change="onPwd1Change"></password-field>

            <password-field :isConfirm="true" :placeholder="$ml.with('VueJS').get('confirm')" :confirm="form.password1" :password="form.password2" @change="onPwd2Change"></password-field>

            <b-form-group>
                <b-form-file
                    :lang="lang"
                    accept=".jpg, .png, .gif"
                    v-model="form.id_proof" 
                    :state="$v.form.id_proof.$dirty ? !$v.form.id_proof.$invalid : null"
                    :placeholder="$ml.with('VueJS').get('fiscalProof')"
                    @change="onFileChange"
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
                terms: undefined,
                submitStatus:undefined
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
    // created () {
    //     // reset login status
    //     this.logout();
    // },
    methods: {
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
        onFileChange(e) {
            this.$v.form.id_proof.$touch();
            let files = e.target.files || e.dataTransfer.files;
            console.log(files)
            // if (!files.length)
            //     return;
            // this.createImage(files[0]);
        },
        //...mapActions('account', ['login', 'logout']),
        submit() {
          //console.log(this.form)
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