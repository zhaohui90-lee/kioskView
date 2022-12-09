<script lang="ts" setup>
import { ref, type Ref } from 'vue';
import moment from 'moment'

let now = moment().utc().utcOffset(8)
let hour: Ref = ref<String>(now.format('HH'))
let minute: Ref = ref<String>(now.format('mm'))
let second: Ref = ref<String>(now.format('ss'))

setInterval(() => {
  hour.value = moment().format('HH')
  minute.value = moment().format('mm')
  second.value = moment().format('ss')
}, 1000)
</script>
<template>
  <div class="timer-temp">
    {{ hour }}:{{  minute  }}:{{  second  }}
  </div>
</template>
<style lang="less" scoped>
.timer-temp {
  text-align: center;
  color: var(--el-text-color-primary);
  font-size: var(--kiosk-font-size-extra-large);
  line-height: var(--kiosk-line-height-extra-large);
}
</style>