<!--  -->
<template>
  <div class="goods-bar">
    <div v-for="(item,index) in title" :key="index">
      <span :class="{active: currentIndex==index}" @click="activeBar(index)">{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      currentIndex: 0
    }
  },
  props: {
    title: {
      type: Array,
      default() {
        return []
      }
    }
  },
  methods: {
    activeBar(index){
      this.currentIndex=index
      //发出事件
      this.$emit('itemsBar',index)
    }
  }
}
</script>

<style  scoped>
.goods-bar {
  display: flex;
  margin: 20px 0;
}
.goods-bar div {
  flex: 1;
  text-align: center;
}
.goods-bar span {
  padding: 8px;
}
.active {
  color: #ff6985;
  border-bottom: 2px solid #ff6985;
}

</style>
