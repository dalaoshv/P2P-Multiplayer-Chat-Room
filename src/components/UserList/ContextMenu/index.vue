<script setup lang="ts">
import { computed, toRef } from 'vue'
import { ContextMenu, ContextMenuItem, type MenuOptions } from '@imengyu/vue3-context-menu'

const props = defineProps<{
  // 消息体
  uid?: number
  // 菜单设置-其它的参数透传
  options?: MenuOptions
}>()

const uid = toRef(props.uid)

// 拉黑用户
const onBlockUser = async () => {

}
// 添加好友
const onAddFriend = async () => {

}

</script>

<template>
  <ContextMenu :options="{ theme: 'dark', x: 0, y: 0, ...props.options }">
    <ContextMenuItem label="发送消息">
      <template #icon> <span class="icon">@</span> </template>
    </ContextMenuItem>
    <ContextMenuItem label="请求聊天">
      <template #icon>
        <Icon icon="tianjia" :size="13" />
      </template>
    </ContextMenuItem>
  </ContextMenu>
</template>

<style lang="scss" src="./style.scss" />
