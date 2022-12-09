<script setup lang="ts">
import AdSlot from "@/slot/ad/AdSlot.vue";
</script>
<template>
  <ad-slot>
    <template #main-ad>
      <div class="main-ad">

      </div>
    </template>
  </ad-slot>
</template>
<style lang="less" scoped>
.main-ad {
  background: var(--el-overlay-color) url('@/assets/img/ad/ad-emic.png') center/95% no-repeat;
}
</style>