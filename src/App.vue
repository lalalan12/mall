<!--  -->
<template>
  <div>
    <router-view></router-view>
    <tab-bar>
      <tab-bar-items path="/home">首页</tab-bar-items>
      <tab-bar-items path="/category">分类</tab-bar-items>
      <tab-bar-items path="/cart">购物车</tab-bar-items>
      <tab-bar-items path="/profile">我的</tab-bar-items>
    </tab-bar>
  </div>
</template>

<script>
import TabBar from "components/common/tabbar/TabBar";
import TabBarItems from "components/common/tabbar/TabBarItems";

export default {
  components: { TabBar, TabBarItems },
  data() {
    return {};
  },
};
</script>

<style  scoped>
</style>
