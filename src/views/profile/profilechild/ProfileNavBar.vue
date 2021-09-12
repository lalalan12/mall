<!--  -->
<template>
  <div class="profile-nav-bar">
    <nav-bar>
      <template #center>
        <h3>小码哥商城</h3>
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
.profile-nav-bar {
  background-color: var(--color-high-text);
  color: #fff;
}

</style>
