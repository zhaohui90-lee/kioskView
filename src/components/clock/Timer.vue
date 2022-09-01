<script lang="ts" setup>
import { ref, type Ref } from 'vue';
import moment from 'moment'

let hour: Ref = ref<String>(moment().format('HH'))
let minute: Ref = ref<String>(moment().format('mm'))

setInterval(() => {
  hour.value = moment().format('HH')
  minute.value = moment().format('mm')
}, 60 * 1000)
</script>
<template>
  <div class="timer-temp">
    <div class="timer-temp-hour">{{ hour }}</div>
    <div class="timer-temp-minute">:{{ minute }}</div>
  </div>
</template>
<style lang="less" scoped>
.timer-temp {
  color: var(--pink);

  &-hour {
    display: inline-block;
    font-size: 60px;
  }

  &-minute {
    display: inline-block;
    font-size: 36px;
  }
}
</style>