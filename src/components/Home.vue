<script setup lang="ts">
import { nextTick, onBeforeMount, onBeforeUpdate, onMounted, onUpdated, ref } from 'vue';
import { useRouter } from 'vue-router';




onBeforeMount(() => {
  console.log('home before mounted...');

})


onMounted(() => {
  console.log('home mounted...');

  // 编程式导航
  const router = useRouter()
  router.push({
    path: '/'
  })
})



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