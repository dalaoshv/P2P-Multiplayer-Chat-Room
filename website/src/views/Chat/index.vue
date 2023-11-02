<script setup lang="ts">
import {computed} from "vue";
import {useRoute, useRouter} from "vue-router";

import SendBar from './SendBar/index.vue';
import ChatList from './ChatList/index.vue';
import {useP2PChatRoom} from "@/stores/p2p.ts";
import {useUserInfo} from "@/stores/userinfo.ts";

const route = useRoute();
const user = useUserInfo();
const p2p = useP2PChatRoom();

const username = computed(() => (
    user.username && user.username !== route.params.id && route.params.id && p2p.online.has(route.params.id) ? route.params.id : ''
));

const router = useRouter();
const handleGoBack = () => {
  if(username.value) router.push({path: '/'});
}

</script>

<template>
  <div class="chat-box">
    <div class="room-name">
      <span class="name">
        {{ username || '公共聊天室' }}
      </span>
      <span class="setting" v-if="username" @click="handleGoBack">
        <Icon class="send" icon="yichu" :size="20" />
      </span>
    </div>
    <ChatList :username="username" />
    <SendBar :username="username" />
  </div>
</template>

<style lang="scss" src="./style.scss"/>