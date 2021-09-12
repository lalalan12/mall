<!--  -->
<template>
  <div class="cart-bottom">
    <div class="bottom-left">
      <div class="checkbox">
        <img src="~assets/img/cart/tick.svg" alt="">
      </div>
      <span class="checkbox-text">全选</span>
      <span class="allMoney">合计：</span>
      <span class="money"></span>
    </div>
    <button>去计算(<span></span>)</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  props: {
    produces: {
      type: Array,
      default: []
    }
  }
}
</script>

<style  scoped>


</style>
