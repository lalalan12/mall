<!--  -->
<template>
  <div class="cart-goods-item">
    <div class="item-info" v-for="(item,index) in produces" :key="index">
      <div class="left">
        <img src="~assets/img/cart/tick.svg" alt="">
      </div>
      <div class="center">
        <img :src="item.image" alt="">
      </div>
      <div class="right">
        <p class="title">{{item.title}}</p>
        <p class="desc">商品描述：{{item.desc}}</p>
        <span class="price">{{item.price}}</span>
        <span class="counter">×{{item.count}}</span>
      </div>
    </div>
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
.item-info {
  border-bottom: 1px solid #ccc;
  padding: 10px 0;
}
.item-info::after {
  content: '';
  clear: both;
  display: block;
}
.left {
  position: relative;
  float: left;
  width: 20px;
  height: 20px;
  border-radius: 10px;
  border: 1px solid #888;
  overflow: hidden;
  background-color: pink;
}
.left img {
  position: absolute;
  top: 1px;
  left: 1px;
}
.center {
  float: left;
  width: 70px;
  height: 90px;
  overflow: hidden;
  border-radius: 5px;
}
.center img {
  width: 70px;
}
.right {
  float: left;
  width: 65%;
}
.right .title {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

</style>
