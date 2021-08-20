<!--  -->
<template>
  <div id="home">
    <nav-bar id="home-nav"><template #center>购物街</template></nav-bar>
    <home-recommend :recommend="recommend" />
    <home-goods />
    <goods-bar :title="title" />
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar.vue";
import { getHomeMultidata } from "network/home.js";
import HomeRecommend from "./homeChild/HomeRecommend.vue";
import HomeGoods from "./homeChild/HomeGoods.vue";
import GoodsBar from "components/content/goodsbar/GoodsBar.vue";

export default {
  components: { NavBar, HomeRecommend, HomeGoods, GoodsBar },
  data() {
    return {
      banners: [],
      recommend: [],
      title: ["流行", "新款", "精选"],
    };
  },
  created() {
    getHomeMultidata().then((res) => {
      this.banners = res.data.banner.list;
      this.recommend = res.data.recommend.list;
    });
  },
};
</script>

<style  scoped>
#home {
  padding-top: 44px;
}
#home-nav {
  position: fixed;
  top: 0;
  width: 100%;
  background-color: var(--color-tint);
  color: #fff;
}
</style>
