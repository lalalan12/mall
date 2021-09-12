<!-- 商品展示 -->
<template>
  <div class="detail-goods">
    <p>{{this.goods.title}}</p>
    <div class="priceAll">
      <span class="price">{{this.goods.newPrice}}</span>
      <span class="oldPrice">{{this.goods.oldPrice}}</span>
      <span class="discount">{{this.goods.discount}}</span>
    </div>
    <div class="sellParams">
      <div v-for="(item,index) in this.goods.columns" :key="index">{{item}}</div>
    </div>
    <div class="services">
      <div v-for="(item,index) in this.goods.services" :key="index">
        <img :src="item.icon" alt="">
        <span>{{item.name}}</span>
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
    goods: {
      type: Object,
      default(){
        return {}
      }
    }
  }
}
</script>

<style  scoped>
.detail-goods p {
  padding: 10px 10px;
}
.priceAll {
  position: relative;
  padding: 0 10px;
  margin-top: 3px;
}
.price {
  font-size: 22px;
  color: var(--color-high-text);
}
.oldPrice {
  margin: 0px 5px;
  font-size: 14px;
  color: var(--color-gray);
  text-decoration: line-through;
}
.discount {
  position: absolute;
  top: 0px;
  padding: 2px 4px;
  border-radius: 8px;
  background-color: var(--color-high-text);
  font-size: 12px;
  color: #fff;
}
.sellParams {
  display: flex;
  margin-top: 20px;
  overflow: hidden;
}
.sellParams div {
  flex: 1;
  font-size: 14px;
  color: var(--color-gray);
  padding: 0px 10px 10px 10px;
  border-bottom: 1px solid #eee;
}
.sellParams div:nth-child(2) {
  text-align: center;
}
.sellParams div:last-child {
  text-align: right;
}
.services {
  display: flex;
  flex-wrap: wrap;
  padding: 12px 10px;
  border-bottom: 5px solid #eee;
}
.services div {
  padding: 8px 0;
  width: 33%;
  font-size: 13px;
}
.services div img {
  width: 18px;
}

</style>
