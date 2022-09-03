<script setup lang="ts">
import { ref, watch, type Ref } from 'vue';
import { useRouter } from 'vue-router';

let count = 120;
let second = ref<number>(count)
const router = useRouter();

setInterval(() => {
  second.value = --count;
}, 1000)

watch(second, (newVal, oldVal) => {
  // console.log(newVal, oldVal);
  if(110 === newVal) {
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
}
</style>