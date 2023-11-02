<script setup lang="ts">
import {computed} from "vue";
import {useRoute, useRouter} from "vue-router";
import {useUserInfo} from "@/stores/user.ts";
import {useP2PChatRoom} from "@/stores/p2p.ts";

const props = defineProps<{
  username: string;
}>()

const router = useRouter();
const user = useUserInfo();

const route = useRoute();
const p2p = useP2PChatRoom();
const isActive = computed(() => (
    router.currentRoute.value.params?.id === props.username ||
    (!(user.username && user.username !== route.params.id && route.params.id && p2p.online.has(route.params.id)) && user.username === props.username)
))

const handleJump = () => {
  router.push({
    path: `/${
      props.username !== user.username ? props.username : ''
    }`
  });
}
</script>

<template>
  <li
      :class="{active: isActive}"
      class="user-list-item"
      tabindex="0"
      @click="handleJump"
  >
    <Avatar
        :size="24"
        :src="null"
        :online="true"
        showStatus
    />
    <div class="user-name">
      <div class="text">{{props.username}}</div>
      <div class="status" v-if="p2p.active.has(props.username)" />
    </div>
  </li>
</template>

<style lang="scss" src="./style.scss" scoped />
