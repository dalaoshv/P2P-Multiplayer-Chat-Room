<script setup lang="ts">
import {computed, ref} from 'vue';
import {useP2PChatRoom} from "@/stores/p2p.ts";
import {useUserInfo} from "@/stores/user.ts";
import {connections} from "@/utils/socket.ts";

const props = defineProps<{
  username?: string;
}>();

const msg = ref('');

const p2p = useP2PChatRoom();
const {loginState} = useUserInfo();

const isClearDisabled = computed(() => !(
    loginState.hasLogin && p2p.chatlogs[props.username || '@']?.length
));

const currentPermitState = computed(() => (
    props.username ? p2p.permits[props.username] || 0 : 2
))

const sendMsgHandler = () => {
  // 空消息时禁止发送
  if (!msg.value?.trim().length) {
    return;
  }

  p2p.sendP2PMsg(props.username, msg.value);
  msg.value = '';
}

const clearMsgHandler = () => {
  if(isClearDisabled.value) return;

  p2p.chatlogs[props.username || '@'] = [];
}

const handleP2P = (msg) => {
  const conn = connections.get(props.username);

  if(!conn.open) {
    conn.once('open', () => {
      conn.send(msg);
    });
  } else {
    conn.send(msg);
  }

  if(msg.event == 'auth') {
    p2p.permits[props.username] = 2;
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
          @keydown.enter="sendMsgHandler"
          :disabled="!loginState.hasLogin || currentPermitState !== 2"
          autofocus
      />
      <div
          @click="clearMsgHandler"
          :class="['action', { 'disabled': isClearDisabled }]"
      >
        <Icon class="send" icon="shanchu" :size="20" />
      </div>
      <div class="divider"/>
      <div
          @click="sendMsgHandler"
          :class="['action', { 'disabled': !msg.length }]"
      >
        <Icon class="send" icon="huojian" :size="20" />
      </div>
    </div>
    <span class="tips" v-if="!loginState.ready">
      正在初始化连接中，请稍后...
    </span>
    <span class="tips" v-else-if="!loginState.hasLogin ">
      请先点击 <span class="tips-text" @click="loginState.showLogin = true">登录</span> 之后再发言~
    </span>
    <span class="tips" v-else-if="currentPermitState === 0">
      点击 <span class="tips-text" @click="handleP2P({event: 'call', data: null})">请求</span> 聊天通话
    </span>
    <span class="tips" v-else-if="currentPermitState === 1">
      点击 <span class="tips-text" @click="handleP2P({event: 'auth', data: 'agree'})">同意</span> 聊天请求
    </span>
  </div>
</template>

<style lang="scss" src="./style.scss" scoped/>
