<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <div class="app-wrapper">
    <RouterView />
  </div>
</template>

<style scoped>
.app-wrapper {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background: url('@/assets/bg.webp') center/cover no-repeat;

  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
