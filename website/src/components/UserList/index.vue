<script setup lang="ts">
import UserItem from './UserItem/index.vue';
import {useP2PChatRoom} from "@/stores/p2p.ts";

const {online} = useP2PChatRoom();
</script>

<template>
  <div class="user-list-wrapper">
    <div class="user-list-header">
      在线人数：{{online.size}}
    </div>
    <TransitionGroup tag="ul" name="fade" class="user-list">
      <UserItem
          :key="username"
          :username="username"
          v-for="[username] of online.entries()"
      />
    </TransitionGroup>
  </div>
</template>

<style lang="scss" src="./style.scss" scoped />

<style>
/* 1. 声明过渡效果 */
.fade-move,
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s cubic-bezier(0.55, 0, 0.1, 1);
}

/* 2. 声明进入和离开的状态 */
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: scaleY(0.01) translate(30px, 0);
}

/* 3. 确保离开的项目被移除出了布局流
      以便正确地计算移动时的动画效果。 */
.fade-leave-active {
  position: absolute;
}
</style>
