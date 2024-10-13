<template>
  <div id="home" class="container">
    <HomeMessage />
    <OurPartners />
  </div>
</template>

<script lang="ts">
import HomeMessage from '@/components/HomeMessage.vue';
import OurPartners from '@/components/OurPartners.vue';

export default {
  components: {
    HomeMessage,
    OurPartners,
  },
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column; 
  align-items: center;
  justify-content: flex-start; 
  width: 100%; 
}
</style>
