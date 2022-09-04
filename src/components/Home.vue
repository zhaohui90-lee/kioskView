<script setup lang="ts">
import { nextTick, onBeforeMount, onBeforeUpdate, onMounted, onUpdated, ref } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';


let menu = ref<Object>({})
// 获取设备信息

// 获取首页菜单信息        
fetchMenu('001')

onBeforeMount(() => {
  console.log('home before mounted...');
})


onMounted(() => {
  console.log('home mounted...');

  // 编程式导航
  const router = useRouter()
  router.push('/')
})

function fetchMenu(deviceNo: string) {
  axios.post('http://localhost:3000/menu')
    .then(res => {
      // 判断是否交易成功
      if ('0' === res.data.code) {
        menu.value = res.data
      } else {
        menu.value = '交易失败！'
      }
    })
    .catch(error => {
      console.log(error);

    })
}



onBeforeUpdate(() => {
  console.log('home before updated...');
})

onUpdated(() => {
  console.log('home updated...');

  nextTick()
})

</script>

<template>
  <div class="home">
    <RouterView class="view main-header" name="Header"></RouterView>
    <RouterView class="view main-content" :menu="menu"></RouterView> 
    <RouterView class="view main-footer" name="Footer"></RouterView>
  </div>

</template>

<style lang="less">
.home {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  
}
</style>