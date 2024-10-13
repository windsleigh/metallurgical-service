<script setup lang="ts">
import NavbarItem from './components/NavbarItem.vue'
import FooterItem from "./components/FooterItem.vue";
</script>

<template>
  <div class="App">
    <NavbarItem />
    <div class="content">
      <RouterView />
    </div>
    <FooterItem />
  </div>
</template>

<style scoped>
.App {
  display: flex;
  flex-direction: column;
}

.content {
  margin-top: 20vh; /* Match the height of the Navbar */
}
</style>
