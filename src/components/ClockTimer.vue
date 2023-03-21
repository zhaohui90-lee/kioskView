<script lang="ts" setup>
import { ref, type Ref } from 'vue';
import moment from 'moment'

let now = moment().utc().utcOffset(8)
let hour: Ref<string> = ref(now.format('HH'))
let minute: Ref<string> = ref(now.format('mm'))
let second: Ref<string> = ref(now.format('ss'))

setInterval(() => {
  hour.value = moment().format('HH')
  minute.value = moment().format('mm')
  second.value = moment().format('ss')
}, 1000)
</script>
<template>
  <div class="timer-temp">
    <strong>
      {{ hour }}:{{ minute }}:{{ second }}
    </strong>
  </div>
</template>
<style lang="less" scoped>
.timer-temp {
  text-align: center;
  color: var(--el-text-color-primary);
  font-size: var(--font-size-extra-large);
  line-height: var(--line-height-extra-large);
}
</style>