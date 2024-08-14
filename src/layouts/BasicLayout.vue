<template>
  <van-nav-bar
      title="标题"
      left-text="返回"
      right-text="按钮"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
  >
    <template #right>
      <van-icon name="search" size="18"/>
      <!--    插槽语法-->
    </template>

  </van-nav-bar>
  <router-view />
  <van-tabbar route >
    <van-tabbar-item replace to="/" icon="home-o" name="index">主页</van-tabbar-item>
    <van-tabbar-item replace to="/team" icon="search" name="team">队伍</van-tabbar-item>
    <van-tabbar-item replace to="/user" icon="user" name="user">个人</van-tabbar-item>

  </van-tabbar>

</template>

<script setup>
import {ref} from 'vue';
import {Toast} from 'vant';
import {useRouter} from "vue-router";

const active = ref("index"); //默认主页高亮
const onChange = (index) => Toast(`标签 ${index}`);

const router = useRouter()

const onClickLeft = () => history.back();
const onClickRight = () => {
  router.push('/search')
}


</script>


<style scoped>

</style>