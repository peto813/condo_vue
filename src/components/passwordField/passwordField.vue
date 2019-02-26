<template>
    <div>
        <b-form-group>
            <label for="email" class="sr-only"><span v-text="$ml.with('VueJS').get('password')"></span></label>
            <b-input-group class="mt-3">
                <b-input-group-text slot="append">
                    <strong class="text-info">
                        <v-icon name="eye" scale="1.5"/>
                    </strong>
                </b-input-group-text>
                <b-form-input :state="$v.password.$dirty ? !$v.password.$invalid : null" :size="size || ''" :value="password"  @change="emitChanges" :placeholder="placeholder" /> 
            </b-input-group>
            <b-form-invalid-feedback>
                <div class="error" v-if="!$v.password.required&&$v.password.$dirty">Enter Password</div>
                <div class="error" v-if="!$v.password.mustConfirmPwd&&$v.password.$dirty">Passwords dont match</div>
                <div class="error" v-if="!$v.password.minLength&&$v.password.$dirty">At least 8 Characters</div>
            </b-form-invalid-feedback>
        </b-form-group>
    </div>

</template>
<script>
import 'vue-awesome/icons/eye';
import Icon from 'vue-awesome/components/Icon';
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
        components:{
        'v-icon': Icon
        },
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
        },
        methods:{
            emitChanges(value) {
                this.$emit('change', value);
                this.$v.password.$touch();
            },
            reset(){
                this.$emit('change', '');
                this.$v.$reset();
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