<script setup lang="ts">
import {ref} from 'vue';
import myAxios from "../plugins/myAxios.ts";
import {Toast} from "vant";

// const router = useRouter();
const userAccount = ref('');
const userPassword = ref('');
const onSubmit = async () => {
  const res = await myAxios.post('/user/login', {
    userAccount: userAccount.value,
    userPassword: userPassword.value
  })
  console.log("用户在登录")
  if (res.data) {
    // Toast.success("登录成功！");
    // const redirectUrl = route.query?.redirect as string ?? '/';
    // window.location.href = redirectUrl;
  } else {
    // Toast.fail("登录失败");
    console.log('错误错误错误');
  }
};

// return {
//   username,
//   password,
//   onSubmit,
// };

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
          name="密码"
          label="密码"
          placeholder="密码"
          :rules="[{ required: true, message: '请填写密码' }]"
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