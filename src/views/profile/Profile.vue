<!--  -->
<template>
  <div class="profile">
    <profile-nav-bar />
    <profile-user />
    <profile-message />
  </div>
</template>

<script>
import ProfileMessage from './profilechild/ProfileMessage.vue';
import ProfileNavBar from './profilechild/ProfileNavBar.vue';
import ProfileUser from './profilechild/ProfileUser.vue';
export default {
  components: {ProfileNavBar, ProfileUser, ProfileMessage  },
  data() {
    return {};
  },
};
</script>

<style  scoped>
.profile-nav {
  background-color: var(--color-high-text);
  color: #fff;
}
</style>
