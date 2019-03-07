<template>
    <b-container fluid>
        <div v-if="userData.user.role=='condo'">
            <condo-dashboard></condo-dashboard>
        </div>
         <div v-else-if="userData.user.role=='resident'">
            <!-- <resident-dashboard></resident-dashboard> -->
        </div>       
        <div v-else>
            <!-- <resident-dashboard></resident-dashboard> -->
        </div>
    </b-container>
</template>
<script>
import { mapState } from 'vuex'
import condoDashboard from '@/components/condoDashboard/condoDashboard.vue';

export default {
    components:{
      condoDashboard,
    },
    beforeRouteEnter (to, from, next) { 
        console.log(to, from, next)
        // next(vm => { 
        //     // access to component's instance using `vm` . this is done because this navigation guard is called before the component is created.

        //     vm.initializeSearch();
        //     next();
        // }) 
        next()
    },
    computed:{
        ...mapState([
        'alert',
        'userData',
        ])      
    }
}
</script>

<style scoped>

</style>
