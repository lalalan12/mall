<!--  -->
<template>
  <div class="cart">
    <cart-nav-bar />
    <scroll class="content">
      <cart-goods-item :produces="produces" />
    </scroll>
    <!-- <cart-bottom :produces="produces" /> -->
  </div>
</template>

<script>
import Scroll from 'components/common/scroll/Scroll.vue';
import CartBottom from './cartchid/CartBottom.vue';
import CartGoodsItem from './cartchid/CartGoodsItem.vue';
import CartNavBar from './cartchid/CartNavBar.vue';
export default {
  components: { CartNavBar, CartBottom, CartGoodsItem, Scroll },
  data() {
    return {
      produces: []
    };
  },
  created(){
    this.produces.push(...this.$store.state.produces)
  }
};
</script>

<style  scoped>
.content {
  position: absolute;
  top: 50px;
  bottom: 80px;
  overflow: hidden;
}
</style>
