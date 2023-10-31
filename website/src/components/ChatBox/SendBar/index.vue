<script setup lang="ts">
import { ref } from 'vue'

const isSign = ref(true)
const isSending = ref(false)
const inputMsg = ref('')


const sendMsgHandler = () => {
  // 空消息或正在发送时禁止发送
  if (!inputMsg.value?.trim().length || isSending.value) {
    return
  }

  isSending.value = true
}

</script>

<template>
  <div class="send-bar">
    <div class="msg-edit">
      <input
          class="msg-input"
          placeholder="来聊点什么吧~"
          :disabled="!isSign || isSending"
          autofocus
      />
      <Icon class="action" icon="wenjianjia2" :size="20" colorful />
      <div class="divider" />
      <div
        :class="['action', { 'is-edit': inputMsg.length, 'disabled': !inputMsg.length }]"
        @click="sendMsgHandler"
      >
        <Icon class="send" icon="huojian" :size="20" />
      </div>
    </div>
    <span v-if="!isSign" class="tips">
      <ElIcon class="icon-lock"><IEpLock /></ElIcon>
      点我<span class="tips-text">登录</span>之后再发言~
    </span>
  </div>
</template>

<style lang="scss" src="./style.scss" scoped />
