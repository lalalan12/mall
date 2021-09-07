<!-- 顶部导航 -->
<template>
  <div class="nav-bar">
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
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
.nav-bar {
  position: relative;
  top: 0;
  display: flex;
  width: 100%;
  height: 50px;
  line-height: 50px;
  text-align: center;
  background-color: #ff8198;
  color: #fff;
  box-shadow: 0px -10px 3px 9px black;
  z-index: 2;
}
.left,
.center,
.right {
  flex: 1;
}

</style>
