<!--  -->
<template>
  <div class="tabBarItems" @click="clickItems" :class="{ color: isActive }">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    path: String,
  },
  data() {
    return {};
  },
  computed: {
    isActive() {
      return this.$route.path.indexOf(this.path) !== -1;
    },
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
.color {
  color: var(--color-tint);
}
</style>
