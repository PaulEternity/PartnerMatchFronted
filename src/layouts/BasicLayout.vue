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
  <slot name="content">

  </slot>
  <div id="content">
    <template v-if="active === 'index'">
      <Index></Index>
    </template>
    <template v-if="active === 'team'">
      <Team></Team>
    </template>
  </div>



  <van-tabbar v-model="active" @change="onChange">
    <van-tabbar-item icon="home-o" name="index">主页</van-tabbar-item>
    <van-tabbar-item icon="search" name="team">队伍</van-tabbar-item>
    <van-tabbar-item icon="user" name="user">个人</van-tabbar-item>

  </van-tabbar>

</template>

<script setup>
import {ref} from 'vue';
import {Toast} from 'vant';
import Index from "../pages/Index.vue";
import Team from "../pages/Team.vue";

const active = ref("index"); //默认主页高亮
const onChange = (index) => Toast(`标签 ${index}`);


const onClickLeft = () => history.back();
const onClickRight = () => alert("右侧");


</script>


<style scoped>

</style>