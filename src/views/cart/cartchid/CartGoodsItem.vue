<!--  -->
<template>
  <div class="cart-goods-item">
    <div class="item-info" v-for="(item,index) in produces" :key="index">
      <div class="left" :class="{checkedActive: item.checked}" @click="checkedActive(index)">
        <img src="~assets/img/cart/tick.svg" alt="">
      </div>
      <div class="center">
        <img :src="item.image" alt="">
      </div>
      <div class="right">
        <p class="title">{{item.title}}</p>
        <p class="desc">商品描述：{{item.desc}}</p>
        <span class="price">￥{{item.price}}</span>
        <span class="counter">×{{item.count}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      produces: []
    }
  },
  created(){
    this.produces.push(...this.$store.state.produces)
  },
  methods: {
    checkedActive(index){
      this.produces[index].checked = !this.produces[index].checked
    }
  }
}
</script>

<style  scoped>
.item-info {
  border-bottom: 1px solid #ccc;
  padding: 10px 0;
  overflow: hidden;
}
.left {
  position: relative;
  float: left;
  width: 20px;
  height: 20px;
  border-radius: 10px;
  border: 1px solid #888;
  overflow: hidden;
  margin: 30px 5px 0 5px;
}
.left img {
  position: absolute;
  top: 1px;
  left: 1px;
}
.center {
  float: left;
  width: 75px;
  height: 90px;
  overflow: hidden;
  border-radius: 5px;
}
.center img {
  width: 75px;
}
.right {
  float: left;
  width: 65%;
  margin-left: 10px;
}
.right .title,
.right .desc {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.desc {
  font-size: 15px;
  color: #666;
  margin: 15px 0;
}
.price {
  color: var(--color-high-text);
}
.counter {
  float: right;
}
.checkedActive {
  background-color: var(--color-high-text);
}


</style>
