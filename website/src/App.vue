<template>
  <div class="app-wrapper">
    <RouterView />
  </div>
</template>

<style scoped>
.app-wrapper {
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  overflow: hidden;
  background: url('@/assets/bg.webp') center/cover no-repeat;
}
</style>
