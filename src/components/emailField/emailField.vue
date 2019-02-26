<template>
    <b-form-group> 
        <label for="email" class="sr-only"><span v-text="$ml.with('VueJS').get('email')"></span></label>
        <b-form-input :value="email" :size="size || ''" :state="$v.email.$dirty ? !$v.email.$invalid : null" @change="emitChanges" :placeholder="$ml.with('VueJS').get('email')" type="text"  name="email" /> 
        <b-form-invalid-feedback>
            <div class="error" v-if="!$v.email.required&&$v.email.$dirty">Enter Email</div>
            <div class="error" v-if="!$v.email.email&&$v.email.$dirty">Email address error</div>
        </b-form-invalid-feedback>
    </b-form-group>
</template>
<script>
import { required, email } from "vuelidate/lib/validators";
import formMixin from '@/mixins/form';
    export default {   
        mixins:
            [formMixin]
        ,        
        props: {
            size: {
                type: String,
                default: ''
            },
            email:{
                type: String,
                default: ''
            },
            resetField:{
                type:Object
            }
        },
        methods:{
            emitChanges(value) {
                this.$emit('change', value);
                this.$v.email.$touch();
            },
            reset(){
                this.$emit('change', '');
                this.$v.$reset();
            }
        },
        validations: {
            email: {
                required,
                //mustConfirmPwd:confirmValidator,
                email
            }
        }


    }
</script>