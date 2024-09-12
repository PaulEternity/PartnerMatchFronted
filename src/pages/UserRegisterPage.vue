<script setup lang="ts">
import {ref} from 'vue';
import myAxios from "../plugins/myAxios.ts";
import {showFailToast, showSuccessToast} from "vant";
import {useRoute, useRouter} from "vue-router";

const router = useRouter();
const currentRoute = useRoute();
const userAccount = ref('');
const userPassword = ref('');
const checkPassword = ref('');
const planetCode = ref('');

// 跳转到用户登录
const toUserLogin = () => {
  router.push({
    path: "/user/login"
  })
}

const onSubmit = async () => {
  // Validate if passwords match
  if (userPassword.value !== checkPassword.value) {
    showFailToast('两次密码不一致！');
    return;
  }

  try {
    const res = await myAxios.post('/user/register', {
      userAccount: userAccount.value,
      userPassword: userPassword.value,
      checkPassword: checkPassword.value,
      planetCode: planetCode.value
    });

    console.log("用户在注册");

    if (res.data) {
      showSuccessToast("注册成功！");
      toUserLogin();
      // window.location.href = currentRoute.query?.redirect as string ?? '/user/login';  // Redirect after success
    } else {
      showFailToast("注册失败");
      console.log('错误错误错误');
    }
  } catch (error) {
    showFailToast("请求失败，请稍后重试");
    console.error('Error during registration:', error);
  }
};
</script>

<template>
  <van-form @submit="onSubmit">
    <van-cell-group inset>
      <van-field
          v-model="userAccount"
          name="userAccount"
          label="账号"
          placeholder="账号"
          :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <van-field
          v-model="userPassword"
          type="password"
          name="password"
          label="密码"
          placeholder="密码"
          :rules="[{ required: true, message: '请填写密码' }]"
      />
      <van-field
          v-model="checkPassword"
          type="password"
          name="confirmPassword"
          label="确认密码"
          placeholder="请确认密码"
          :rules="[{ required: true, message: '请确认密码' }]"
      />
      <van-field
          v-model="planetCode"
          type="number"
          name="planetCode"
          label="编号"
          placeholder="请输入自己的编号"
          :rules="[{ required: true, message: '请输入自己的独特编号' }]"
      />
    </van-cell-group>
    <div style="margin: 16px;">
      <van-button round block type="primary" native-type="submit">
        提交
      </van-button>
    </div>
  </van-form>
</template>

<style scoped>
</style>
