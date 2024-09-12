<script setup lang="ts">
import {onMounted, ref} from "vue";
import {getCurrentUser} from "../services/user.ts"


const user = ref();
onMounted(async () => {
  user.value = await getCurrentUser();

})


</script>

<template>
  <template v-if="user">
    <van-cell title="当前用户"  :value="user.userName"/>
    <van-cell title="修改信息" is-link to="/user/update"/>
    <van-cell title="我加入的队伍" is-link to="/user/team/join"/>
    <van-cell title="我创建的队伍" is-link to="/user/team/create"/>
  </template>
  <template v-else>
    <van-cell title="未登录" value="请登录后查看用户信息" />
    <van-button type="primary" to="/user/login">登录</van-button>
  </template>
</template>

<style scoped>
</style>
