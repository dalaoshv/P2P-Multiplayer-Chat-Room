<script setup lang="ts">
const props = defineProps<{
  username: string;
}>()
</script>

<template>
  <li class="user-list-item" tabindex="0">
    <Avatar
        :size="24"
        :src="null"
        :online="true"
        showStatus
    />
    <div class="user-name">
      <div class="text">{{props.username}}</div>
    </div>
  </li>
</template>

<style lang="scss" src="./style.scss" scoped />
