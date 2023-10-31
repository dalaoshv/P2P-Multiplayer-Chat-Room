<script setup lang="ts">
import UserItem from './UserItem/index.vue'

</script>

<template>
  <div class="user-list-wrapper">
    <div class="user-list-header">在线人数：0</div>
    <template v-if="true">
      <div class="list-no-data">暂无成员~</div>
    </template>
    <TransitionGroup tag="ul" name="fade" class="user-list">
      <UserItem :user="{avatar: '',id: 'aaa',connected: true, name: '游客'}" />
      <UserItem :user="{avatar: '',id: 'aaa',connected: true, name: '游客'}" />
      <UserItem :user="{avatar: '',id: 'aaa',connected: true, name: '游客'}" />
      <UserItem :user="{avatar: '',id: 'aaa',connected: true, name: '游客'}" />
      <UserItem :user="{avatar: '',id: 'aaa',connected: true, name: '游客'}" />
      <UserItem :user="{avatar: '',id: 'aaa',connected: true, name: '游客'}" />
      <UserItem :user="{avatar: '',id: 'aaa',connected: true, name: '游客'}" />
      <UserItem :user="{avatar: '',id: 'aaa',connected: true, name: '游客'}" />
      <UserItem :user="{avatar: '',id: 'aaa',connected: true, name: '游客'}" />
      <UserItem :user="{avatar: '',id: 'aaa',connected: true, name: '游客'}" />
      <UserItem :user="{avatar: '',id: 'aaa',connected: true, name: '游客'}" />
      <UserItem :user="{avatar: '',id: 'aaa',connected: true, name: '游客'}" />
      <UserItem :user="{avatar: '',id: 'aaa',connected: true, name: '游客'}" />
      <UserItem :user="{avatar: '',id: 'aaa',connected: true, name: '游客'}" />
      <UserItem :user="{avatar: '',id: 'aaa',connected: true, name: '游客'}" />
      <UserItem :user="{avatar: '',id: 'aaa',connected: true, name: '游客'}" />
      <UserItem :user="{avatar: '',id: 'aaa',connected: true, name: '游客'}" />
      <UserItem :user="{avatar: '',id: 'aaa',connected: true, name: '游客'}" />
      <UserItem :user="{avatar: '',id: 'aaa',connected: true, name: '游客'}" />
      <UserItem :user="{avatar: '',id: 'aaa',connected: true, name: '游客'}" />
      <UserItem :user="{avatar: '',id: 'aaa',connected: true, name: '游客'}" />
      <UserItem :user="{avatar: '',id: 'aaa',connected: true, name: '游客'}" />
      <UserItem :user="{avatar: '',id: 'aaa',connected: true, name: '游客'}" />
      <UserItem :user="{avatar: '',id: 'aaa',connected: true, name: '游客'}" />
      <UserItem :user="{avatar: '',id: 'aaa',connected: true, name: '游客'}" />
      <UserItem :user="{avatar: '',id: 'aaa',connected: true, name: '游客'}" />
      <UserItem :user="{avatar: '',id: 'aaa',connected: true, name: '游客'}" />
      <UserItem :user="{avatar: '',id: 'aaa',connected: true, name: '游客'}" />
      <UserItem :user="{avatar: '',id: 'aaa',connected: true, name: '游客'}" />
      <UserItem :user="{avatar: '',id: 'aaa',connected: true, name: '游客'}" />
      <UserItem :user="{avatar: '',id: 'aaa',connected: true, name: '游客'}" />
      <UserItem :user="{avatar: '',id: 'aaa',connected: true, name: '游客'}" />
      <UserItem :user="{avatar: '',id: 'aaa',connected: true, name: '游客'}" />
      <UserItem :user="{avatar: '',id: 'aaa',connected: true, name: '游客'}" />
      <UserItem :user="{avatar: '',id: 'aaa',connected: true, name: '游客'}" />
      <UserItem :user="{avatar: '',id: 'aaa',connected: true, name: '游客'}" />
      <UserItem :user="{avatar: '',id: 'aaa',connected: true, name: '游客'}" />
      <UserItem :user="{avatar: '',id: 'aaa',connected: true, name: '游客'}" />
      <UserItem :user="{avatar: '',id: 'aaa',connected: true, name: '游客'}" />
      <UserItem :user="{avatar: '',id: 'aaa',connected: true, name: '游客'}" />
      <UserItem :user="{avatar: '',id: 'aaa',connected: true, name: '游客'}" />
      <UserItem :user="{avatar: '',id: 'aaa',connected: true, name: '游客'}" />
      <UserItem :user="{avatar: '',id: 'aaa',connected: true, name: '游客'}" />
      <UserItem :user="{avatar: '',id: 'aaa',connected: true, name: '游客'}" />
      <UserItem :user="{avatar: '',id: 'aaa',connected: true, name: '游客'}" />
      <UserItem :user="{avatar: '',id: 'aaa',connected: true, name: '游客'}" />
      <UserItem :user="{avatar: '',id: 'aaa',connected: true, name: '游客'}" />
      <UserItem :user="{avatar: '',id: 'aaa',connected: true, name: '游客'}" />
      <UserItem :user="{avatar: '',id: 'aaa',connected: true, name: '游客'}" />
      <UserItem :user="{avatar: '',id: 'aaa',connected: true, name: '游客'}" />
      <li key="visible_el" ref="groupListLastElRef">&nbsp;</li>
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
