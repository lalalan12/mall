<!--  -->
<template>
  <div class="tabBarItems" @click="clickItems"><slot></slot></div>
</template>

<script>
export default {
  props: {
    path: String,
  },
  data() {
    return {};
  },
  methods: {
    clickItems() {
      this.$router.replace(this.path);
    },
  },
};
</script>

<style  scoped>
.tabBarItems {
  flex: 1;
  text-align: center;
}
</style>
