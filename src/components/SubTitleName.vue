<script setup lang="ts">
import { ref } from 'vue';

const titleName = ref('缴费')
</script>
<template>
  <div class="sub-title-container">
    <div class="title-name">{{ titleName }}</div>
  </div>
</template>
<style lang="less" scoped>
.sub-title-container {
  background: var(--main_light);

  .title-name {
    color: #fff;
    font-size: 35px;
    border-radius: 0 50px 50px 0;
  }
}
</style>