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
    <RouterView class="view main-header" name="Header"></RouterView>
    <RouterView class="view main-content"></RouterView>
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