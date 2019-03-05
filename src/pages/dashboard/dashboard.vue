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
