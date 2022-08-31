<script setup lang="ts">
import HospitalLogo from '@/slot/header/HospitalLogo.vue';
</script>

<template>
  <div class="sub-header">
    <HospitalLogo>
      <template #header-left></template>
    </HospitalLogo>
    <slot name="header-middle"></slot>
    <slot name="header-right"></slot>
  </div>
</template>

<style lang="less" scoped>
.sub-header {
  width: 100%;
  height: 140px;
  border-bottom: 1px solid #ccc;
  display: flex;
  flex: 1;
  background: red;
  &header-left {
    background: pink;
  }
}
</style>