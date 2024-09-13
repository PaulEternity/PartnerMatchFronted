<script setup lang="ts">
import { onMounted, ref } from "vue";
import { getCurrentUser } from "../services/user.ts";

const user = ref();
const loading = ref(true); // Add loading state

onMounted(async () => {
  try {
    user.value = await getCurrentUser();
  } catch (error) {
    console.error("Error fetching user data:", error);
  } finally {
    loading.value = false; // Set loading to false once data is fetched
  }
});
</script>

<template>
  <!-- Show a loading indicator or hide content until loading is done -->
  <div class="loading-container" v-if="loading">
    <van-loading size="32px">加载中...</van-loading>
  </div>

  <template v-else-if="user">
    <van-cell title="当前用户" :value="user.userName" />
    <van-cell title="修改信息" is-link to="/user/update" />
    <van-cell title="我加入的队伍" is-link to="/user/team/join" />
    <van-cell title="我创建的队伍" is-link to="/user/team/create" />
  </template>

  <template v-else>
    <div class="guest-container">
      <van-cell title="未登录" value="请登录后查看用户信息" />
      <div class="button-container">
        <van-button block round type="primary" to="/user/login">登录</van-button>
        <van-cell value="还没有账号？立即注册" />
        <van-button block round type="info" to="/user/register" style="margin-top: 10px;">注册</van-button>
      </div>
    </div>
  </template>
</template>

<style scoped>
.loading-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.guest-container {
  padding: 20px;
}

.button-container {
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 15px;
}

van-button {
  font-size: 16px;
}

van-cell {
  margin-bottom: 10px;
}
</style>
