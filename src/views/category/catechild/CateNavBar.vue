<!--  -->
<template>
  <div class="cate-nav-bar">
    <nav-bar>
      <template #center>
        <h3>商品分类</h3>
      </template>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar.vue'
export default {
  components: { NavBar },
  data () {
    return {
    }
  }
}
</script>

<style  scoped>
.cate-nav-bar {
  background-color: var(--color-high-text);
  color: #fff;
}

</style>
