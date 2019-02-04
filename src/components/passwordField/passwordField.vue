<template>
    <div>
        <b-form-group> 
            <label for="email" class="sr-only"><span v-text="$ml.with('VueJS').get('password')"></span></label>
            <b-form-input :state="$v.password.$dirty ? !$v.password.$invalid : null" :size="size || ''"  @change="emitChanges" :placeholder="placeholder" type="password"  name="email" /> 
            <b-form-invalid-feedback>
                <div class="error" v-if="!$v.password.required">Enter Password</div>
                <div class="error" v-if="!$v.password.mustConfirmPwd">Passwords dont match</div>
                <div class="error" v-if="!$v.password.minLength">At least 8 Characters</div>
            </b-form-invalid-feedback>
        </b-form-group>
    </div>

</template>
<script>
import { required, email, sameAs, minLength } from "vuelidate/lib/validators";
import formMixin from '@/mixins/form';

const confirmValidator =(value, vm) => {
    if (vm.isConfirm){
        if(!vm.confirm){
            return false;
        }
        return vm.confirm ? value===vm.confirm : true; 
    }
    return true;
}

    export default { 
        mixins:
            [formMixin]
        ,          
        props: {
            size: {
                type: String,
                default: ''
            },
            isConfirm: {
                type: Boolean,
                default: false
            },
            showPwd:{
                type:Boolean,
                default:false
            },
            password:{
                type:String,
                default:''
            },
            placeholder:{
                type:String,
                default:''
            },
            confirm:{
                type:String,
                default: ''
            }
        }
    ,
    methods:{
        emitChanges(value) {
            this.$emit('change', value);
            this.$v.password.$touch();
        }
    },
    validations: {
            password: {
                required,
                mustConfirmPwd:confirmValidator,
                minLength: minLength(8)
            }
      }
}
</script>