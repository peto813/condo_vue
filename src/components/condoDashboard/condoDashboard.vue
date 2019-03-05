<template>
<div>
    <h1>Resumen</h1>
    <hr>
  <b-jumbotron fluid>
    <b-row>
        <b-col cols="12" sm="12" md="4">
            <summary-card class="text-center" header="Pagos por aprobar" footer="Ver">
                <span>3</span>
            </summary-card>
        </b-col>
        <b-col  cols="12" sm="12" md="4">
            <summary-card class="text-center" header="En Mora" footer="Ver">
                <span>5</span>
            </summary-card>
        </b-col>
        <b-col cols="12" sm="12" md="4">
            <summary-card class="text-center" header="Pagos por aprobar" footer="Ver">
                <span>0</span>
            </summary-card>           
        </b-col>
    </b-row>
  </b-jumbotron>
  <board></board>


</div>

</template>
<script>
import summaryCard from '@/components/summaryCard/summaryCard.vue';
import board from '@/components/board/board.vue';

import 'vue-awesome/icons/money-bill';
import Icon from 'vue-awesome/components/Icon';


export default {
    components:{
      summaryCard,
      board,
      'v-icon': Icon
    }
}
</script>

<style scoped>
    span{
        font-size:40px;
    }   
</style>
