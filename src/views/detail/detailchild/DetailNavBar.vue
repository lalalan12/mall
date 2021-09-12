<!--  -->
<template>
  <div class="detail-nav-bar">
    <nav-bar>
      <template #left>
        <img @click="goClick" src="~assets/img/common/back.svg" alt="">
      </template>
      <template #center>
        <div class="detail-nav-bar-title" v-for="(item,index) in title" :key="index" :class="{ color: currentIndex==index }" @click="detailNavBarItem(index)">{{item}}</div>
      </template>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar.vue'
export default {
  data () {
    return {
      currentIndex: 0
    }
  },
  props:{
    title: {
      type: Array,
      default: []
    }
  },
  components: {
    NavBar
  },
  methods: {
    detailNavBarItem(index){
      this.currentIndex=index
      this.$emit('itemIndex',index)
    },
    goClick(){
      this.$router.go(-1)
    }
  }
}
</script>

<style  scoped>
.detail-nav-bar {
  background-color: #fff;
}
.detail-nav-bar-title{
  float: left;
  margin: 0 12px;
  font-size: 15px;
}
.color {
  color: var(--color-high-text);;
}

</style>
