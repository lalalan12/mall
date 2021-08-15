<!--  -->
<template>
  <div id="tabBar">
    <slot></slot>
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
@import "~assets/css/base.css";

#tabBar {
  display: flex;
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 40px;
  line-height: 40px;
  box-shadow: 0 10px 10px 5px black;
}
</style>
