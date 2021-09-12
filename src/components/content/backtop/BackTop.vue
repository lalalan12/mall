<!-- 回到顶部 -->
<template>
  <div class="back-top">
    <img src="~assets/img/common/top.png" alt="" @click="backTop">
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  methods: {
    backTop(){
      this.$emit('backTop')
    }
  }
}
</script>

<style  scoped>
.back-top {
  position: absolute;
  bottom: 60px;
  right: 20px;
}
.back-top img {
  width: 55px;
}

</style>
