<!--  -->
<template>
  <div class="profile-user">
    <div class="user">
      <div class="user-img">
        <img src="~assets/img/profile/logo.png" alt="">
      </div>
      <div class="user-info">
        <div class="login">登录/注册</div>
        <div class="iphone">
          <img src="~assets/img/profile/iPhone.png" alt="">
          <span>暂无绑定手机号</span>
        </div>
      </div>
    </div>
    <div class="counter">
      <div class="counter-item">
        <div class="item-score">
          <h3>0.00</h3>
          <span>元</span>
        </div>
        <div class="item-name">我的余额</div>
      </div>
      <div class="counter-item">
        <div class="item-score">
          <h3>0</h3>
          <span>个</span>
        </div>
        <div class="item-name">我的优惠</div>
      </div>
      <div class="counter-item">
        <div class="item-score">
          <h3>0</h3>
          <span>分</span>
        </div>
        <div class="item-name">我的积分</div>
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
.profile-user {

}
.user {
  background-color: var(--color-high-text);
  color: #fff;
  padding: 15px 0;
  overflow: hidden;
}
.user-img {
  margin-left: 20px;
}
.user-img img {
  float: left;
  width: 44px;
}
.user-info {
  position: relative;
  float: left;
  margin-left: 12px;
}
.user-info::after {
  content: '';
  position: absolute;
  top: 16px;
  right: -150px;
  width: 8px;
  height: 8px;
  border: 1px solid #fff;
  border-bottom: 0;
  border-left: 0;
  transform: rotate(45deg);
}
.login {
  font-size: 15px;
  line-height: 22px;
}
.iphone {
  font-size: 14px;
}
.iphone img {
  width: 20px;
}
.counter {
  display: flex;
  text-align: center;
}
.counter-item {
  flex: 1;
  padding: 20px 0;
  border-left: 1px solid #eee;
}
.item-score h3 {
  display: inline-block;
  color: var(--color-high-text);
}
.item-score span {
  font-size: 14px;
}
.item-name {
  font-size: 14px;
  margin-top: 5px;
}

</style>
