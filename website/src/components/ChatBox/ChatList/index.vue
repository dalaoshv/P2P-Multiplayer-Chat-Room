<script setup lang="ts">


</script>

<template>
  <div class="chat-msg-list" @contextmenu.prevent>
    <div class="scroll-list">
      <div class="chat-item">
        <span class="tips-block">"我是大佬鼠"撤回了一条消息</span>
      </div>
      <div class="chat-item">
        <div class="msg-wrap">
          <div class="username">我是大佬鼠</div>
          <div class="content-wrap">
            <div class="text">这是一条消息</div>
          </div>
        </div>
      </div>
      <div class="chat-item is-me">
        <div class="msg-wrap">
          <div class="username">我是大佬鼠</div>
          <div class="content-wrap">
            <div class="read-count">
              <span class="num">0</span>
            </div>
            <div class="text">这是一条消息</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" src="styles.scss" scoped />
