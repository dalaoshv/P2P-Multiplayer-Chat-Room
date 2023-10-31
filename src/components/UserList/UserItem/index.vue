<script setup lang="ts">
import { computed, ref, toRef } from 'vue'
import ContextMenu from '../ContextMenu/index.vue'

const props = defineProps<{
  user: {
    id: string;
    name: string;
    avatar: string;
    connected: boolean
  }
}>()


const propUser = toRef(props.user)
const isShowMenu = ref(false) // 是否显示菜单

// 弹出定位
const menuOptions = ref({ x: 0, y: 0 })

/** 右键菜单 */
const handleRightClick = (e: MouseEvent) => {
  const { x, y } = e
  menuOptions.value.x = x
  menuOptions.value.y = y
  isShowMenu.value = true
}

</script>

<template>
  <li
    class="user-list-item"
    tabindex="0"
    @contextmenu.prevent.stop="handleRightClick($event)"
  >
    <Avatar
      :src="null"
      :size="24"
      showStatus
      :online="true"
    />
    <div class="user-name">
      <div class="text">游客</div>
      <div class="badge flex-center">
        12424
      </div>
    </div>
    <ContextMenu v-model:show="isShowMenu" :options="menuOptions" />
  </li>
</template>

<style lang="scss" src="./style.scss" scoped />
