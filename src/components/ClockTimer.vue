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
    <div class="timer-temp-hour">{{ hour }}</div>
    <div class="timer-temp-minute">:{{ minute }}</div>
    <div class="timer-temp-second">:{{ second }}</div>
  </div>
</template>
  <style lang="less" scoped>
  .timer-temp {
    color: var(--black);
  
    &-hour {
      display: inline-block;
      font-size: 36px;
    }
  
    &-minute {
      display: inline-block;
      font-size: 36px;
    }
    &-second {
      display: inline-block;
      font-size: 36px;
    }
  }
  </style>