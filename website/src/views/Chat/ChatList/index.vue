<script setup lang="ts">
import {ref, nextTick, onBeforeUpdate, computed} from "vue";

import {useUserInfo} from "@/stores/user.ts";
import {useP2PChatRoom} from "@/stores/p2p.ts";

const props = defineProps<{
  username?: string;
}>();

const el = ref();
const p2p = useP2PChatRoom();
const {loginState} = useUserInfo();
const chatLogs = computed(() => (
    loginState.hasLogin ? p2p.chatlogs[props.username || '@'] : []
));

onBeforeUpdate(() => {
  nextTick(() => {
    el.value.scrollTo({
      top: el.value.scrollHeight - el.value.clientHeight,
      behavior: "smooth"
    })
  });
})

</script>

<template>
  <div class="chat-msg-list">
    <div class="scroll-list" ref="el">
      <div
          class="chat-item"
          :key="index"
          :class="{'is-me': logs.type === 'me'}"
          v-for="(logs, index) in chatLogs"
      >
        <span class="tips-block" v-if="logs.type === 'it'">{{logs.content}}</span>

        <div class="msg-wrap" v-else>
          <div class="username">{{logs.username}}</div>
          <div class="content-wrap">
            <div class="text">{{logs.content}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" src="./style.scss" scoped />
