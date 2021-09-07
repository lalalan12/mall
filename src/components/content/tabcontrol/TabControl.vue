<!-- 底部导航 -->
<template>
  <div class="tab-control">
    <tab-bar>
      <tab-bar-items class="tab-bar-items" path="/home">
        <template #items-img-active>
          <img src="~assets/img/tabbar/home_active.svg" alt="">
        </template>
        <template #items-img>
          <img src="~assets/img/tabbar/home.svg" alt="">
        </template>
        <template #items-text>
          <div>首页</div>
        </template>
      </tab-bar-items>
      <tab-bar-items class="tab-bar-items" path="/category">
      <template #items-img-active>
          <img src="~assets/img/tabbar/category_active.svg" alt="">
        </template>
        <template #items-img>
          <img src="~assets/img/tabbar/category.svg" alt="">
        </template>
        <template #items-text>
          <div>分类</div>
        </template>
      </tab-bar-items>
      <tab-bar-items class="tab-bar-items" path="/cart">
        <template #items-img-active>
          <img src="~assets/img/tabbar/cart_active.svg" alt="">
        </template>
        <template #items-img>
          <img src="~assets/img/tabbar/cart.svg" alt="">
        </template>
        <template #items-text>
          <div>购物车</div>
        </template>
      </tab-bar-items>
      <tab-bar-items class="tab-bar-items" path="profile">
        <template #items-img-active>
          <img src="~assets/img/tabbar/profile_active.svg" alt="">
        </template>
        <template #items-img>
          <img src="~assets/img/tabbar/profile.svg" alt="">
        </template>
        <template #items-text>
          <div>我的</div>
        </template>
      </tab-bar-items>
    </tab-bar>
  </div>
</template>

<script>
import TabBar from 'components/common/tabbar/TabBar'
import TabBarItems from 'components/common/tabbar/TabBarItems'
export default {
  data () {
    return {
    }
  },
  components: {
    TabBar,
    TabBarItems
  }
}
</script>

<style  scoped>

.tab-bar-items img {
  width: 23px;
  margin-top: 5px;
}
.tab-bar-items div {
  margin-top: 3px;
}

</style>
