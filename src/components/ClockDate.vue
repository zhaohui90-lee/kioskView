<script setup lang="ts">
import { ref, type Ref } from 'vue';
import moment from 'moment'

let currentDate: Ref = ref<String>(moment().format('YYYY-MM-DD'))

setInterval(() => {
  currentDate.value = moment().format('YYYY-MM-DD')
}, 1000);
</script>
  <template>
  <div class="date-temp">{{ currentDate }}</div>
</template>
  <style lang="less" scoped>
  .date-temp {
    text-align: center;
    font-size: var(--kiosk-font-size-large);
    line-height: var(--kiosk-line-height-large);
    color: var(--el-text-color-primary);
  }
  </style>