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
      
    }
  },
  props: {
    title: {
      type: Array,
      default() {
        return []
      }
    },
    currentIndex: {
      type: Number,
      default(){
        return 0
      }
    }
  },
  methods: {
    activeBar(index){
      //发出事件
      this.$emit('itemsBar',index)
    }
  }
}
</script>

<style  scoped>
.goods-bar {
  display: flex;
  width: 100%;
  padding: 15px;
  background-color: #fff;
  z-index: 2;
}
.goods-bar div {
  flex: 1;
  text-align: center;
}
.goods-bar span {
  padding: 8px;
}
.active {
  color: var(--color-high-text);
  border-bottom: 2px solid var(--color-high-text);
}

</style>
