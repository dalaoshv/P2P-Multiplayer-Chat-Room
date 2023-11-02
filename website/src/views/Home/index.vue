<script setup lang="ts">
import UserList from "@/components/UserList";
import UserLogin from "@/components/UserLogin";
</script>

<template>
  <main class="home">
    <UserList />
    <UserLogin />
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