<script setup lang="ts">
import {useRoute, useRouter} from "vue-router";
import {ref} from "vue";
import myAxios from "../plugins/myAxios.ts";
import {showFailToast, showSuccessToast, Toast} from "vant";
import {getCurrentUser} from "../services/user.ts";

const route = useRoute();
const router = useRouter();

const editUser = ref({
  editKey: route.query.editKey || '',
  currentValue: route.query.currentValue || '',
  editName: route.query.editName || '',
});

const onSubmit = async () => {
  try {
    const currentUser = await getCurrentUser();
    if (!currentUser) {
      Toast.fail('用户未登录');
      return;
    }

    console.log(currentUser, '当前用户');

    const res = await myAxios.post('/user/update', {
      'id': currentUser.id,
      'userAccount': currentUser.userAccount,
      'userPassword':currentUser.userPassword,
      'planetCode':currentUser.planetCode,
      'createTime':currentUser.createTime,
      [editUser.value.editKey as string]: editUser.value.currentValue,
    });

    console.log(res, '更新请求');
    if (res?.code === 0 && res.data > 0) {
      showSuccessToast('修改成功');
      router.back();
    } else {
      showFailToast('修改错误');
    }
  } catch (error) {
    console.error('提交时出错:', error);
    showFailToast('提交失败，请稍后再试');
  }
};

</script>

<template>
  <van-form @submit="onSubmit">
    <van-field
        v-model="editUser.currentValue"
        :name="editUser.editKey"
        :label="editUser.editName"
        :placeholder="`请输入${editUser.editName}`"
    />
    <div style="margin: 16px;">
      <van-button round block type="primary" native-type="submit">
        提交
      </van-button>
    </div>
  </van-form>
</template>

<style scoped>
</style>
