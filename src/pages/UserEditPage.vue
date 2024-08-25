<script setup lang="ts">
import {useRoute} from "vue-router";
import {ref} from "vue";

const route = useRoute();
const editUser = ref({
  editKey: route.query.editKey,
  editName:route.query.editName,
  currentValue:route.query.currentValue
})
const onSubmit = (values) => {
  console.log('submit', values);
};
</script>

<template>
  <van-form @submit="onSubmit">
    <van-cell-group inset>
      <van-field
          v-model="editUser.currentValue"
          :name = "editUser.editName"
          :label="editUser.editKey"
          :placeholder="`请输入${editUser.editName}`"
          />

    </van-cell-group>
    <div style="margin: 16px">
      <van-button round block type="primary" native-type="submit">
        确认修改
      </van-button>
    </div>
  </van-form>
<!--  <van-cell title="昵称" is-link to="/user/edit" :value="user.username"/>-->
<!--  <van-cell title="账号" is-link :value="user.userAccount"/>-->
<!--  <van-cell title="头像" is-link to="/user/edit">-->
<!--    <template #value>-->
<!--      <img :src="user.avatarUrl" alt="avatar" style="width: 30px; height: 30px; border-radius: 50%;"/>-->
<!--    </template>-->
<!--  </van-cell>-->
<!--  <van-cell title="性别" is-link arrow-direction="down" :value="user.gender" @click="toEdit('gender',user.gender)"/>-->
<!--  <van-cell title="电话" is-link arrow-direction="down" :value="user.phone"/>-->
<!--  <van-cell title="邮箱" is-link arrow-direction="down" :value="user.email"/>-->
<!--  <van-cell title="星球编号" is-link arrow-direction="down" :value="user.planetCode"/>-->
<!--  <van-cell title="注册时间" :value="user.createTime.toLocaleString()"/>-->
</template>

<style scoped>
</style>
