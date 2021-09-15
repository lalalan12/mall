<!-- 底部 -->
<template>
  <div class="detail-bottom-bar">
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
    <div class="center" @click="addCart">加入购物车</div>
    <div class="right">购买</div>
    <toast :isShow="isShow" />
  </div>
</template>

<script>
import Toast from 'components/common/toast/Toast.vue'
export default {
  data () {
    return {
      isShow: false
    }
  },
  components: {
    Toast
  },
  methods: {
    addCart(){
      this.$emit('addCart')
      this.isShow = true
      setTimeout(()=>{
        this.isShow = false
      },1000)
    }
  }
}
</script>

<style  scoped>
.detail-bottom-bar {
  position: fixed;
  bottom: 0;
  height: 60px;
  width: 100%;
  background-color: #fff;
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
