<!--  -->
<template>
  <div id="goods-bar">
    <div
      v-for="(item, index) in title"
      :key="index"
      class="goods-bar-items"
      @click="changeCurrentIndex(index)"
    >
      <span :class="{ color: currentIndex === index }">{{ item }}</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentIndex: 0,
    };
  },
  props: {
    title: Array,
  },
  methods: {
    changeCurrentIndex(index) {
      this.currentIndex = index;
    },
  },
};
</script>

<style  scoped>
#goods-bar {
  display: flex;
  line-height: 40px;
}
.goods-bar-items {
  flex: 1;
  text-align: center;
}
.goods-bar-items span {
  padding: 4px;
}

.color {
  color: var(--color-tint);
  border-bottom: 2px solid var(--color-tint);
}
</style>
