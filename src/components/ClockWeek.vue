<script setup lang="ts">
import moment from "moment";
import { computed } from "vue";

interface valToWeek {
  code: string,
  value: string
}

const weekToCN: readonly valToWeek[] = [
  {
    code: '0',
    value: '星期天',
  },
  {
    code: '1',
    value: '星期一',
  },
  {
    code: '2',
    value: '星期二',
  },
  {
    code: '3',
    value: '星期三',
  },
  {
    code: '4',
    value: '星期四',
  },
  {
    code: '5',
    value: '星期五',
  },
  {
    code: '6',
    value: '星期六',
  }
]

// 实现一个计算属性 week
const week = computed(() => {
  const week = moment().format('d');
  const weekCN = weekToCN.find(item => item.code === week)?.value;
  return weekCN;
})
</script>

<template>
  <div class="temp-week">{{ week }}</div>
</template>

<style lang="less" scoped>
.temp-week {
  font-size: var(--font-size-large);
  line-height: var(--line-height-large);
  color: var(--el-text-color-primary);
}
</style>