<!-- 底部导航 -->
<template>
  <div class="tab-bar-items" @click="isShowActive">
    <div v-show="isShow"><slot name="items-img-active"></slot></div>
    <div v-show="!isShow"><slot name="items-img"></slot></div>
    <div :class="{color: isShow}"><slot name="items-text"></slot></div>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  props: {
    path:{
      type: String,
    }
  },
  computed:{
    isShow(){
      return this.$route.path.indexOf(this.path)!==-1;
    }
  },
  methods: {
    isShowActive(){
      this.$router.replace(this.path)
    }
  }
}
</script>

<style  scoped>
.tab-bar-items {
  flex:1;
}
.color {
  color: #fd6481;
}

</style>
