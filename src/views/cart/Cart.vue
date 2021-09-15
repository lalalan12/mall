<!--  -->
<template>
  <div class="cart">
    <cart-nav-bar/>
    <scroll class="content">
      <cart-goods-item/>
    </scroll>
    <cart-bottom/>
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
      
    }
  }
};
</script>

<style  scoped>
.content {
  position: absolute;
  top: 50px;
  bottom: 80px;
  left: 0;
  right: 0;
  overflow: hidden;
}
</style>
