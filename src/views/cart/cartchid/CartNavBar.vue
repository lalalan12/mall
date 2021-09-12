<!--  -->
<template>
  <div class="cart-nav-bar">
    <nav-bar>
      <template #center>
        <h3>
          购物车
          (<span>{{counter}}</span>)
        </h3>
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
      counter: 0
    }
  }
}
</script>

<style  scoped>
.cart-nav-bar {
  background-color: var(--color-high-text);
  color: #fff;
}

</style>
