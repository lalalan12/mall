<!-- 底部 -->
<template>
  <div class="detail-buttom-bar">
    <div class="left">
      <div class="left-item">
        <div class="item">
          <img class="itemImg1" src="~assets/img/detail/detail_bottom.png" alt="">
        </div>
        <div class="text">客服</div>
      </div>
      <div class="left-item">
        <div class="item">
          <img class="itemImg2" src="~assets/img/detail/detail_bottom.png" alt="">
        </div>
        <div class="text">店铺</div>
      </div>
      <div class="left-item">
        <div class="item">
          <img src="~assets/img/detail/detail_bottom.png" alt="">
        </div>
        <div class="text">收藏</div>
      </div>
    </div>
    <div class="center">加入购物车</div>
    <div class="right">购买</div>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>

<style  scoped>
.detail-buttom-bar {
  position: fixed;
  bottom: 0;
  height: 60px;
  width: 100%;
  background-color: #fff;
  box-shadow: 0px 15px 11px 8px black;
  z-index: 5;
}
.left {
  display: flex;
  float: left;
  width: 50%;
}
.left-item {
  flex: 1;
}
.item {
  position: relative;
  width: 25px;
  height: 25px;
  overflow: hidden;
  margin: 8px 0px 5px 19px;
}
.item img {
  position: absolute;
  width: 25px;
}
.itemImg1 {
  top: -60px;
}
.itemImg2 {
  top: -111px;
}
.left-item .text {
  text-align: center;
  font-size: 15px;
}

.center,
.right {
  float: left;
  height: 60px;
  line-height: 60px;
  text-align: center;
}
.center {
  width: 30%;
  background-color: #ffe817;
}
.right {
  width: 20%;
  color: #fff;
  background-color: #ff6699;
}

</style>
