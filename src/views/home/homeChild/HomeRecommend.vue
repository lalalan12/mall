<!--推荐-->
<template>
  <div id="home-recommend">
    <div
      v-for="(item, index) in recommend"
      :key="index"
      class="home-recommend-item"
    >
      <a v-bind:href="item.link">
        <img v-bind:src="item.image" alt="" />
        <div>{{ item.title }}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    recommend: Array,
  },
};
</script>

<style  scoped>
#home-recommend {
  display: flex;
  width: 100%;
  padding: 10px 0 20px;
  border-bottom: 8px solid #eee;
  font-size: 14px;
  text-align: center;
}
.home-recommend-item {
  flex: 1;
}
.home-recommend-item img {
  width: 65px;
}
</style>
