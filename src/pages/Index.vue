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
  const userListData = await myAxios.get('/user/recommend', {
    params: {
      pageSize:8,
      pageNum:1,
    },
    paramsSerializer: params => {
      return qs.stringify(params, {indices: false})
    }
  })
      .then(function (response) {
        console.log('/user/recommend succeed', response);
        return response?.data?.records;
      })
      .catch(function (error) {
        console.error('/user/recommend error', error);
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

</script>

<template>
  <user-card-list :user-list="userList" />
  <van-empty v-if="!userList || userList.length < 1" description="数据为空" />
</template>


<style scoped>

</style>