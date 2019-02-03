<template>
    <b-form-group> 
        <label for="email" class="sr-only"><span v-text="$ml.with('VueJS').get('email')"></span></label>
        <b-form-input :state="validationObject.$dirty ? !validationObject.$invalid : null" @change="$emit('change', $event)" :placeholder="$ml.with('VueJS').get('email')" type="text"  name="email" /> 
        <b-form-invalid-feedback  v-if="validationObject.$dirty&&validationObject.$invalid">
            <div class="error" v-if="!validationObject.required">Enter Email</div>
            <div class="error" v-if="!validationObject.email">Email address error</div>
        </b-form-invalid-feedback>
    </b-form-group>
</template>
<script>
    export default {            
        props: {
            email: {
                type: String,
                default: ''
            },
            validationObject:{
                type:Object,
            }
        }
    }
</script>