<script setup lang="ts">
import { ref, watch, type Ref } from 'vue';
import { useRouter } from 'vue-router';

let second = ref<number>(120)
const router = useRouter();

const secondInterval = setInterval(() => {
  second.value--
}, 1000)

console.log('secondInterval', secondInterval);


watch(second, (newVal, oldVal) => {
  // console.log(newVal, oldVal);
  if (0 >= newVal) {
    // 清除定时器
    clearInterval(secondInterval)
    // 跳转首页
    router.push('/')
  } 
})
</script>
<template>
  <div class="clock-second-container">
    <span class="clock-second">{{ second }}秒</span>
  </div>
</template>
<style lang="less" scoped>
.clock-second {
  color: var(--pink);
  font-size: 35px;
}
</style>