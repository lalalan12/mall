<!-- recommend -->
<template>
  <div class="home-recommend">
    <div class="home-recommend-items" v-for="(item,index) in recommend" :key="index">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <div>{{item.title}}</div>
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
  props:{
    recommend: {
      type: Array
    }
  }
}
</script>

<style  scoped>
.home-recommend {
  display: flex;
  padding-bottom: 30px;
  border-bottom: 10px solid #eeeeee;
}
.home-recommend-items {
  flex: 1;
  text-align: center;
  font-size: 15px;
}
.home-recommend-items img {
  width: 80px;
  margin: 12px 0;
}

</style>
