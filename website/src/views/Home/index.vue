<script setup lang="ts">
import UserList from '../../components/UserList/index.vue'
import UserLogin from '../../components/UserLogin/index.vue'
</script>

<template>
  <main class="home">
    <UserLogin />
    <UserList />
    <RouterView />
  </main>
</template>

<style scoped>
.home {
  gap: 20px;
  display: flex;

  width: 70vw;
  height: 80vh;
  padding: 20px;
  color: #ffffff;
  min-width: 650px;
  border-radius: 16px;
  background-color: #272a37;
}
</style>