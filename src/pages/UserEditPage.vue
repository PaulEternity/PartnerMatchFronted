<script setup lang="ts">
import {useRoute, useRouter} from "vue-router";
import {ref} from "vue";
import myAxios from "../plugins/myAxios.ts";
import {Toast} from "vant";
import {getCurrentUser} from "../services/user.ts";

const route = useRoute();
const router = useRouter();
const editUser = ref({
  editKey: route.query.editKey,
  editName:route.query.editName,
  currentValue:route.query.currentValue
})

const onSubmit = async () => {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    Toast.fail('用户未登录');
    return;
  }

  console.log(currentUser, '当前用户')

  const res = await myAxios.post('/user/update', {
    'id': currentUser.id,
    [editUser.value.editKey as string]: editUser.value.currentValue,
  })
  console.log(res, '更新请求');
  if (res.code === 0 && res.data > 0) {
    Toast.success('修改成功');
    router.back();
  } else {
    Toast.fail('修改错误');
  }
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
