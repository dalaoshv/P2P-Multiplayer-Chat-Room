<script setup lang="ts">
import {ref} from "vue";
import {useUserInfo} from "@/stores/userinfo.ts";

const username = ref('');
const password = ref('');

const {loginState, handleLogin} = useUserInfo();
</script>

<template>
  <ElDialog class="login-box-modal" v-model="loginState.showLogin" :width="380" center>
    <div class="login-box">
      <!-- 标题 -->
      <p class="box-title">P2P多人在线聊天室</p>
      <div class="box-body">
        <!-- 用户名输入框 -->
        <label class="label">用户名</label>
        <input
            class="input"
            v-model="username"
            placeholder="3-8位中文、字母和数字"
        />

        <!-- 密码输入框 -->
        <label class="label">密码</label>
        <input
            class="input"
            v-model="password"
            placeholder="6-9位字母和数字"
        />

        <!-- 登录按钮 -->
        <button class="login" @click="handleLogin(username, password)" :disabled="loginState.loading">
          登录
        </button>
        <p class="tips">如果用户名未注册，登录将自动注册</p>
      </div>
    </div>
  </ElDialog>
</template>

<style lang="scss" src="./style.scss" />
