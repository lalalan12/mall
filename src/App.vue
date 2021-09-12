<!-- app -->
<template>
  <div class="app">
    <router-view v-slot="{ Component }">
      <keep-alive>
        <component :is="Component" v-if="$route.meta.keepAlive" />
      </keep-alive>
      <component :is="Component" v-if="!$route.meta.keepAlive" />
    </router-view>
    <tab-control />
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
