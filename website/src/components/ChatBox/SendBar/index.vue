<script setup lang="ts">
import {ref, toRef} from 'vue';
import {useUserInfo} from "@/stores/userinfo.ts";

const msg = ref('');
const isSending = ref(false);
const {loginState} = useUserInfo();


const sendMsgHandler = () => {
  // 空消息或正在发送时禁止发送
  if (!msg.value?.trim().length || isSending.value) {
    return
  }
}

</script>

<template>
  <div class="send-bar">
    <div class="msg-edit">
      <input
          v-model="msg"
          class="msg-input"
          placeholder="来聊点什么吧~"
          :disabled="!loginState.hasLogin || isSending"
          autofocus
      />
      <Icon class="action" icon="wenjianjia2" :size="20" colorful/>
      <div class="divider"/>
      <div
          :class="['action', { 'is-edit': msg.length, 'disabled': !msg.length }]"
          @click="sendMsgHandler"
      >
        <Icon class="send" icon="huojian" :size="20"/>
      </div>
    </div>
    <span class="tips" v-if="!loginState.ready">
      正在初始化连接中，请稍后...
    </span>
    <span class="tips" v-else-if="!loginState.hasLogin ">
      请先点击 <span class="tips-text" @click="loginState.showLogin = true">登录</span> 之后再发言~
    </span>
  </div>
</template>

<style lang="scss" src="./style.scss" scoped/>
