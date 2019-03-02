<template>
    <b-container>
        <div v-if="Math.random() > 0.5">
            <!-- <condo-dashboard></condo-dashboard> -->
        </div>
         <div v-else-if="Math.random() <= 0.5">
            <!-- <resident-dashboard></resident-dashboard> -->
        </div>       
        <div v-else>
            <!-- <resident-dashboard></resident-dashboard> -->
        </div>
    </b-container>
</template>
<script>
export default {
    
}
</script>

<style scoped>

</style>
