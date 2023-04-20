<script setup lang="ts">
import { ref, type Ref } from 'vue';
import moment from 'moment'

// 定义一个ref类型的变量
const currentDate: Ref<string> = ref(moment().format('YYYY-MM-DD'))

// 实现半秒更新一次时间
setInterval(() => {
  currentDate.value = moment().format('YYYY-MM-DD')
}, 500);

</script>
  <template>
  <div class="date-temp">{{ currentDate }}</div>
</template>
  <style lang="less" scoped>
  .date-temp {
    text-align: center;
    font-size: var(--font-size-large);
    line-height: var(--line-height-large);
    color: var(--el-text-color-primary);
  }
  </style>