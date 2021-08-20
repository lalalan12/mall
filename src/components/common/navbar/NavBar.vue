<!-- 头部 -->
<template>
  <div class="nav-bar">
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style  scoped>
.nav-bar {
  display: flex;
  line-height: 44px;
  text-align: center;
  box-shadow: 0 -5px 4px 4px black;
}
.left,
.right {
  width: 60px;
}
.center {
  flex: 1;
}
</style>
