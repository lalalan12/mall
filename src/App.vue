<!-- app -->
<template>
  <div class="app">
    <tab-control />
    <router-view />
  </div>
</template>

<script>
import TabControl from 'components/content/tabcontrol/TabControl.vue'
export default {
  data () {
    return {}
  },
  components: {
    TabControl,
  }
}
</script>

<style  scoped>
@import "~assets/css/base.css"

</style>
