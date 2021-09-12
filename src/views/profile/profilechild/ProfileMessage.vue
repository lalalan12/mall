<!--  -->
<template>
  <div class="profile-message">
    <div class="message-top">
      <div class="top-something">
        <img src="~assets/img/profile/message.png" alt="">
        <span>我的消息</span>
      </div>
      <div class="top-something">
        <img src="~assets/img/profile/shop.png" alt="">
        <span>积分商城</span>
      </div>
      <div class="top-something">
        <img src="~assets/img/profile/vip.png" alt="">
        <span>会员卡</span>
      </div>
    </div>
    <div class="message-bottom">
      <div class="bottom-something">
        <img src="~assets/img/profile/shop-car.png" alt="">
        <span>我的购物车</span>
      </div>
      <div class="bottom-something">
        <img src="~assets/img/profile/app.png" alt="">
        <span>下载购物APP</span>
      </div>
    </div>
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
.profile-message {
  border-top: 10px solid #eee;
}
.message-top {

}
.top-something,
.bottom-something {
  padding: 15px;
  border-bottom: 1px solid #eee;
}
.top-something img,
.bottom-something img {
  width: 20px;
}
.top-something span,
.bottom-something span {
  margin-left: 10px;
}

.message-bottom {
  border-top: 10px solid #eee;
}
</style>
