<script setup lang="ts">
import moment from "moment";
import { ref } from "vue";

interface valToWeek {
  code: string,
  value: string
}

const weekToCN: Array<valToWeek | any> = [
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
let week = ref(weekToCN.find(item => item.code === moment().format('d')).value)
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