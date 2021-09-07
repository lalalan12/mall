<!-- 底部导航 -->
<template>
  <div class="tab-bar">
    <slot></slot>
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
.tab-bar {
  position: absolute;
  bottom: 0px;
  display: flex;
  width: 100%;
  height: 50px;
  background-color: #f6f6f6;
  box-shadow: 0px 12px 5px 10px black;
  border: 0;
  text-align: center;
  font-size: 12px;
  z-index: 2;
}

</style>
