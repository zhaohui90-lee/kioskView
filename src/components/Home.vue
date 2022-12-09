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
  width: 100%;
  height: 100%;
}
</style>