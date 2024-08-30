<script setup lang="ts">

import {useRoute} from "vue-router";
import {onMounted, ref} from "vue";
import myAxios from "../plugins/myAxios.ts";
import qs from "qs";
import {Toast} from "vant";
import UserCardList from "../components/UserCardList.vue";

const route = useRoute();
const {tags} = route.query;

const userList = ref([]);

onMounted(async () => {
  const userListData = await myAxios.get('/user/search/tags', {
    params: {
      tagNameList: tags
    },
    paramsSerializer: params => {
      return qs.stringify(params, {indices: false})
    }
  })
      .then(function (response) {
        console.log('/user/search/tags succeed', response);
        return response?.data;
      })
      .catch(function (error) {
        console.error('/user/search/tags error', error);
        Toast.fail('请求失败');
      })
  console.log(userListData)
  if (userListData) {
    userListData.forEach(user => {
      if (user.tags) {
        user.tags = JSON.parse(user.tags);
      }
    })
    userList.value = userListData;
  }
})


// const mockUser = [{
//   id: 1212,
//   username: 'dssdds',
//   userAccount: 's',
//   profile: "dqdnwqdqwoidhqodi",
//   avatarUrl: 'https://cdn.pixabay.com/photo/2023/09/04/17/48/flamingos-8233303_1280.jpg',
//   gender: 1,
//   phone: 'string',
//   email: 'string',
//   userStatus: 1,
//   userRole: 1,
//   planetCode: 121,
//   tags: ['java', 'javaWeb', 'qaaffwefewf', 'sdqdqwdqdwdqd'],
//   createTime: new Date(),
// }]

</script>

<template>
  <user-card-list :user-list="userList" />
  <van-empty v-if="!userList || userList.length < 1" description="搜索结果为空" />
</template>

<!--<template>-->
<!--  <van-card-->
<!--      v-for="user in mockUser"-->
<!--      :key="user.id"-->
<!--      :desc="user.profile"-->
<!--      :thumb="user.avatarUrl"-->
<!--      :title="`${user.username} (${user.planetCode})`"-->
<!--  >-->
<!--    <template #tags>-->
<!--      <van-tag plain type="danger" v-for="tag in user.tags" style="margin-right: 8px; margin-top: 8px">-->
<!--        {{ tag }}-->
<!--      </van-tag>-->
<!--    </template>-->
<!--    <template #footer>-->
<!--      <van-button size="mini">联系我</van-button>-->
<!--    </template>-->
<!--  </van-card>-->
<!--</template>-->

<style scoped>

</style>