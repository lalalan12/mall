<!--  -->
<template>
  <div class="home-nav-bar">
    <nav-bar>
      <template #center>
        <h3>购物街</h3>
      </template>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
export default {
  data () {
    return {
    }
  },
  components: {
    NavBar
  }
}
</script>

<style  scoped>
.home-nav-bar {
  background-color: var(--color-high-text);
  color: #fff;
}

</style>
