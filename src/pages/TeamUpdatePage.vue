<template>
  <div id="teamAddPage">
    <van-form @submit="onSubmit">
      <van-cell-group inset>
        <van-field
            v-model="addTeamData.name"
            name="name"
            label="队伍名"
            placeholder="请输入队伍名"
            :rules="[{ required: true, message: '请输入队伍名' }]"
        />
        <van-field
            v-model="addTeamData.description"
            rows="4"
            autosize
            label="队伍描述"
            type="textarea"
            placeholder="请输入队伍描述"
        />
        <van-field
            v-model="addTeamData.expireTime"
            is-link
            readonly
            name="datePicker"
            label="过期时间"
            placeholder="点击选择时间"
            @click="showPicker = true"
        />
        <van-popup v-model:show="showPicker" position="bottom">
          <van-date-picker @confirm="onConfirm" @cancel="showPicker = false" :min-date="minDate" />
        </van-popup>

        <van-field name="stepper" label="最大人数">
          <template #input>
            <van-stepper v-model="addTeamData.maxNum" max="10" min="3"/>
          </template>
        </van-field>
        <van-radio-group v-model="addTeamData.status" direction="horizontal">
          <van-radio name="0">公开</van-radio>
          <van-radio name="1">私有</van-radio>
          <van-radio name="2">加密</van-radio>
        </van-radio-group>

        <van-field
            v-if="Number(addTeamData.status) === 2"
            v-model="addTeamData.password"
            type="password"
            name="password"
            label="密码"
            placeholder="请输入队伍密码"
            :rules="[{ required: true, message: '请填写密码' }]"
        />
      </van-cell-group>
      <div style="margin: 16px;">
        <van-button round block type="primary" native-type="submit">
          提交
        </van-button>
      </div>
    </van-form>
  </div>
</template>

<script setup lang="ts">

import {useRouter} from "vue-router";
import {onMounted, ref} from "vue";
import myAxios from "../plugins/myAxios";
import {showFailToast, showSuccessToast} from "vant";

const router = useRouter();
// 展示日期选择器
const showPicker = ref(false);

const minDate = new Date();

// 需要用户填写的表单数据
const addTeamData = ref()

onMounted(async () => {
  const res = await myAxios.get("/team/get",{
    params:{
      id:null,
    }
  });
  if (res.data.code === 0 && res.data){
    addTeamData.value = res.data;
    showSuccessToast('添加成功');
  } else {
    showFailToast('添加失败');
  }
})

// 提交
const onSubmit = async () => {
  const postData = {
    ...addTeamData.value,
    status: Number(addTeamData.value.status)
  }

  // todo 前端参数校验
  const res = await myAxios.post("/team/update", postData);
  if (res.data.code === 0 && res.data){
    showSuccessToast('更新成功');
    router.push({
      path: '/team',
      replace: true,
    });
  } else {
    showFailToast('更新失败');
  }

}
const onConfirm = ({ selectedValues }) => {
  const [year, month, day] = selectedValues;
  addTeamData.value.expireTime = `${year}-${month}-${day}`;
  showPicker.value = false;
};

const doUpdateTeam = (id:number) => {
  router.push({
    path:'/team/update',
    query:{
      id,
    }
  })
}

</script>

<style scoped>
#teamPage {

}
</style>
