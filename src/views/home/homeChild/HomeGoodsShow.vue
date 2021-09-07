<!-- 物品展示 -->
<template>
  <div class="goods-show">
    <div class="goods-show-items" v-for="(item,index) in goods" :key="index">
      <a :href="item.link" >
        <img :src="item.show.img" alt="">
        <div class="text">
          <p>{{item.title}}</p>
          <span class="price">￥{{item.price}}</span>
          <span class="cfav">{{item.cfav}}</span>
        </div>
      </a>
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
        return null
      }
    }
  },
}
</script>

<style  scoped>
.goods-show {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}
.goods-show-items{
  width: 47%;
  overflow: hidden;
}
.goods-show-items a img {
  width: 100%;
  border-radius: 8px;
}
.text {
  font-size: 12px;
  margin: 5px;
  text-align: center;
}
.text p{
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.text .price{
  color: #ff6985;
  margin-right: 25px;
}
.text .cfav {
  position: relative;
  margin-bottom: 12px;
}
.text .cfav::before{
  content: '';
  position: absolute;
  left: -15px;
  top: 0;
  width: 14px;
  height: 14px;
  background: url(~assets/img/common/collect.svg) 0 0/14px 14px;
}

</style>
