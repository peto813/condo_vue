<template>
<div>
  <b-card-group deck>
    <b-card
      :header="header"
      header-tag="header"
      :footer="footer"
      footer-tag="footer"
      header-bg-variant="warning"
      footer-border-variant="dark"
    >
    <slot></slot>
      <!-- <b-card-text>Header and footers using props.</b-card-text>
      <b-button href="#" variant="primary">Go somewhere</b-button> -->
    </b-card>
  </b-card-group>
</div>
</template>
<script>
export default {
    props:{
        header: String,
        footer:String,
    }
}
</script>
<style scoped>
    .card-deck{
        font-size: 18px;
        font-weight: bold;
    }
    .card-body:hover{
        cursor: pointer;
    }
</style>
