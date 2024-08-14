<template>
  <form action="/">
    <van-search
        v-model="searchText"
        show-action
        placeholder="请输入搜索标签"
        @search="onSearch"
        @cancel="onCancel"
    />
  </form>
  <van-divider content-position="left">已选标签</van-divider>
  <div v-if="activeIds.length===0">选择标签</div>
  <van-row>
    <van-col v-for="tag in activeIds" span="4">
      <van-tag  closeable size="small" type="primary" @close="doClose(tag)">
        {{ tag }}
      </van-tag>
    </van-col>
  </van-row>

  <van-divider content-position="left">选择标签</van-divider>
  <van-tree-select
      v-model:active-id="activeIds"
      v-model:main-active-index="activeIndex"
      :items="tagList"
  />


</template>
<script setup>
import {ref} from 'vue';
import {showToast} from 'vant';

const activeIds = ref([]);
const activeIndex = ref(0);
const originTagList = [
  {
    text: '性别',
    children: [
      {text: '男', id: '男'},
      {text: '女', id: '女'},
    ],
  },
  {
    text: '年级',
    children: [
      {text: '大一', id: '大一'},
      {text: '大二', id: '大二'},
      {text: '大三', id: '大三'},
    ],
  },
  {text: '尺度'},
];
let tagList = ref(originTagList);

const searchText = ref('');
// const onSearch = (val) => {
//   tagList.value = originTagList.map(parentTag => {
//     const tempChildren = [...parentTag.children];
//     const tempParentTag = {...parentTag};
//     tempParentTag.children = tempChildren.filter(item => item.text.includes(searchText.value));
//     return tempParentTag;
//     // .filter(item => item.text.include(SearchText.value))
//   });
// }
const onSearch = (val) => {
  // const searchText = searchText.value.toLowerCase();
  tagList.value = originTagList.map(parentTag => {
    // 复制对象，确保不会直接修改原始数据
    const tempParentTag = {...parentTag};

    // 如果 parentTag 存在 children 属性，则进行过滤
    if (tempParentTag.children) {
      const tempChildren = [...tempParentTag.children];
      tempParentTag.children = tempChildren.filter(item => item.text.toLowerCase().includes(searchText.value));
    }

    return tempParentTag;
  });
}

// const onCancel = () => showToast('取消');
const onCancel = () => {
  searchText.value = '';
  tagList.value = originTagList;
};
//移除标签
const doClose = (tag) => {
  activeIds.value = activeIds.value.filter(item => {
    return item !== tag;
  })
}

</script>

<style scoped>

</style>