<script setup lang="ts">
import HeaderSlot from '@/slot/header/HeaderSlot.vue';
import SubTitleName from '@/components/SubTitleName.vue';
import SubTitleStep from '@/components/SubTitleStep.vue';
import ClockSecond from '@/components/ClockSecond.vue';
</script>

<template>
  <HeaderSlot class="sub-title">
    <template #header-left>
      <div class="sub-title-left">
        <SubTitleName></SubTitleName>
        <SubTitleStep></SubTitleStep>
      </div>

    </template>
    <template #header-middle></template>
    <template #header-right>
      <ClockSecond></ClockSecond>
    </template>
  </HeaderSlot>
</template>
<style lang="less" scoped>
.sub-title {
  background: var(--gray-400);
  &-left {
    height: 100%;
  }
}

.sub-title-left {
  display: flex;
}
</style>