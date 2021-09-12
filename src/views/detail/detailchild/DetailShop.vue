<!-- 店铺 -->
<template>
  <div class="detail-shop">
    <div class="shop-logo">
      <div class="logo-image">
        <img :src="shop.logo" alt="">
      </div>
      <span>{{shop.name}}</span>
    </div>
    <div class="shop-data">
      <div class="shop-sell-all">
        <div class="shop-sell">
          <span class="sell-data">{{counterFilter(shop.sells)}}</span>
          <div>总销量</div>
        </div>
        <div class="shop-all">
          <span class="all-data">{{shop.goodsCount}}</span>
          <div>全部宝贝</div>
        </div>
      </div>
      <div class="shop-dec">
        <div class="shop-dec-item" v-for="(item,index) in shop.score" :key="index">
          <span class="dec-name">{{item.name}}</span>
          <span class="dec-score" :class="{ colorRed: item.isBetter}">{{item.score}}</span>
          <span class="dec-better" :class="{ betterRed: item.isBetter}">{{item.isBetter ? '高' : '低'}}</span>
        </div>
      </div>
    </div>
    <button>进店逛逛</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  props: {
    shop: {
      type: Object,
      default(){
        return {}
      }
    }
  },
  methods: {
    counterFilter(value){
      if(value < 10000) return value
      return (value/10000).toFixed(1) + '万'
    }
  },
}
</script>

<style  scoped>
.detail-shop {
  border-bottom: 5px solid #eee;
}
.shop-logo {
  padding: 20px 0px;
}
.logo-image {
  float: left;
  margin: 0px 10px;
  width: 44px;
  height: 44px;
  border-radius: 22px;
  border: 1px solid #ccc;
  overflow: hidden;
}
.logo-image img {
  width: 44px;
}
.shop-logo span {
  line-height: 44px;
}
.shop-sell-all {
  position: relative;
  margin-top: 15px;
  float: left;
}
.shop-sell-all::after {
  content: '';
  position: absolute;
  top: -7px;
  right: -30px;
  width: 2px;
  height: 55px;
  background-color: #eee;
}
.shop-sell,
.shop-all {
  float: left;
  margin-left: 25px;
  text-align: center;
}
.sell-data,
.all-data {
  font-size: 18px;
}
.shop-sell div,
.shop-all div {
  font-size: 13px;
  margin-top: 10px;
}
.shop-dec {
  float: left;
  margin-left: 60px;
  font-size: 14px;
}
.shop-dec-item {
  margin-bottom: 10px;
}
.dec-score {
  margin: 0 10px;
  color: #7ab656;
}
.dec-better {
  float: right;
  padding: 1px;
  background-color: #7ab656;
  color: #fff;
}
.colorRed {
  color: #f13e3a;
}
.betterRed {
  background-color: #f13e3a;
}

button {
  display: block;
  margin: 20px auto;
  padding: 5px 60px;
  background-color: #eee;
  border: 0;
  border-radius: 10px;
}

</style>
