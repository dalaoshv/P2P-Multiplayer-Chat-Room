<script setup lang="ts">
import ChatList from './ChatList/index.vue'
import SendBar from './SendBar/index.vue'

</script>

<template>
  <div class="chat-box">
    <div class="room-name">
      <span class="name">这是聊天窗口标题</span>
    </div>
    <ChatList />
    <SendBar />
  </div>
</template>

<style lang="scss" src="./style.scss" />