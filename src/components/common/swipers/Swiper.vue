<!--  -->
<template>
  <div class="swiper">
    <div class="swiper-items" v-for="(item,index) in banner" :key="index">
      <a :href="item.link">
        <img :src="item.image" alt="">
      </a>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      
    }
  },
  props: {
    banner:{
      type: Object
    }
  }
}
</script>

<style  scoped>
.swiper {
  margin-top: 50px;
  display: flex;
  overflow: hidden;
}
.swiper-items {
  flex: 1;
}
.swiper-items a img {
  width: 100vmin;
}
</style>
