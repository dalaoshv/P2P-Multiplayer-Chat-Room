<script setup lang="ts">
import UserList from '@/components/UserList/index.vue'
import ChatBox from '@/components/ChatBox/index.vue'
</script>

<template>
  <main class="home">
    <UserList />
    <ChatBox />
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
  border-radius: 16px;
  background-color: #272a37;
}
</style>