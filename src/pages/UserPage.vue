<script setup lang="ts">
import {useRouter} from "vue-router";
import {onMounted, ref} from "vue";
import myAxios from "../plugins/myAxios.ts";
import {Toast} from "vant";
import {getCurrentUser} from "../services/user.ts"
// const user = {
//   id: 1,
//   username: '11',
//   userAccount: '33333',
//   avatarUrl: 'https://www.indonesia.travel/content/dam/indtravelrevamp/en/destinations/bali-nusa-tenggara/west-nusa-tenggara/lombok/lombok1.jpg',
//   gender: '男',
//   phone: '122121',
//   email: '123132123',
//   planetCode:'12344',
//   createTime: new Date(),
// }
const user = ref();
const router = useRouter();
onMounted(async () => {
 user.value = await getCurrentUser();

})
const toEdit = (editKey: string, editName: string ,currentValue: string) => {
  router.push({
    path: '/user/edit',
    query: {
      editKey,
      editName,
      currentValue,
    }
  })
}
</script>

<template>
<template v-if="user">
  <van-cell title="昵称" is-link to="/user/edit" :value="user.username" @click="toEdit('昵称','昵称',user.username)"/>
  <van-cell title="账号"  :value="user.userAccount" />
  <van-cell title="头像" is-link to="/user/edit">
    <template #value>
      <img :src="user.avatarUrl" alt="avatar" style="width: 30px; height: 30px; border-radius: 50%;" />
    </template>
  </van-cell>
  <van-cell title="性别" is-link  :value="user.gender"  @click="toEdit('性别','性别',user.gender)"/>
  <van-cell title="电话" is-link to="/user/edit" :value="user.phone" @click="toEdit('电话','电话',user.phone)"/>
  <van-cell title="邮箱" is-link to="/user/edit" :value="user.email" @click="toEdit('邮箱','邮箱',user.email)"/>
  <van-cell title="星球编号" :value="user.planetCode" />
  <van-cell title="注册时间" :value="user.createTime" />
</template>
</template>

<style scoped>
</style>
