<script setup lang="ts">
import { onBeforeMount, onBeforeUpdate, onMounted, onUpdated } from 'vue';



onBeforeMount(() => {
  console.log('home before mounted...');
})


onMounted(() => {
  console.log('home mounted...');
})



onBeforeUpdate(() => {
  console.log('home before updated...');
})

onUpdated(() => {
  console.log('home updated...');
})

</script>

<template>
  <div class="home">
    <router-view class="view main-header" name="Header"></router-view>
    <router-view class="view main-ad" name="Ad"></router-view>
    <router-view class="view main-content" name="Content"></router-view>
    <router-view class="view main-footer" name="Footer"></router-view>
  </div>

</template>

<style lang="less">
.home {
  // width: 100%;
  // height: 100%;
  // min-width: 1080px;
}
@media screen and (max-width: 1080px) {
  .main-header {
    height: 120px;
  }
  .main-ad {
    height: 610px;
  }
  .main-content {
    height: 1030px;
  }
  .main-footer {
    height: 160px;
  }
}
@media screen and (min-width: 1280px) {
  .main-header {
    height: 120px;
  }
  .main-ad {
    display: none;
  }
  .main-content {
    height: 744px;
  }
  .main-footer {
    height: 160px;
  }
}
</style>