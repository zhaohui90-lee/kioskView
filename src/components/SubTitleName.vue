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
  height: 100%;
  display: flex;
  align-items: center;
  flex: 1;
  text-align: center;
  border-radius: 0 50px 50px 0;


  .title-name {
    flex: 1;
    color: #fff;
    line-height: 100%;
    font-size: 35px;
  }
}
</style>