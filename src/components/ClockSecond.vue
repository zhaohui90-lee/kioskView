<script setup lang="ts">
import { reactive, watchEffect } from 'vue';
import { useRouter } from 'vue-router';

const second = reactive({value: 120})
const router = useRouter();

const secondInterval = setInterval(() => {
  second.value--
}, 1000)

console.log('secondInterval', secondInterval);

const remainingSeconds = () => `${second.value}秒`;

watchEffect(() => {
  if(second.value <= 0) {
    // 清除定时器
    clearInterval(secondInterval)
    // 跳转首页
    router.push('/')
  }
})


// watch(second, (newVal, oldVal) => {
//   // console.log(newVal, oldVal);
//   if (0 >= newVal) {
//     // 清除定时器
//     clearInterval(secondInterval)
//     // 跳转首页
//     router.push('/')
//   } 
// })
</script>
<template>
  <div class="clock-second-container">
    <span class="clock-second">{{ remainingSeconds() }}</span>
  </div>
</template>
<style lang="less" scoped>
.clock-second {
  color: var(--home-second-color);
  font-size: 35px;
}
</style>