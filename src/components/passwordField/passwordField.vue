<template>
    <div>
        <b-form-group>
            <label for="email" class="sr-only"><span v-text="$ml.with('VueJS').get('password')"></span></label>
           

            <b-input-group>
                <b-input-group-text @click="toggleVisibility" slot="append">
                    <strong>
                    <v-icon class="eye" scale="1.5" :name="getName"/>
                    </strong>
                </b-input-group-text>
                <b-form-input :state="$v.password.$dirty ? !$v.password.$invalid : null" :size="size || ''" :value="password" :type="getType"  @input="emitChanges" :placeholder="placeholder" /> 
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
import 'vue-awesome/icons/eye-slash';
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
        data(){
            return {
                field_type:'password'
            }
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
                //default:false
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
        computed:{
            getType(){
                let response= this.showPwd ? 'text' : 'password';
                return response ? response : 'password';
            },
            getName(){
                let response= this.showPwd===true ? 'eye-slash' : 'eye';
                return response ? response : 'password';
            }
        },
        methods:{
            toggleVisibility(){
                this.$emit('eye-clicked', !this.showPwd);
            },
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
<style scoped>
    .eye{
        cursor:pointer;
    }
    .eye:focus{
        color:red!important;
    }
</style>
