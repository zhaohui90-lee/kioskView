<script setup lang="ts">
// console.log('这里是读卡页面...');
import ContentSlot from "@/slot/content/ContentSlot.vue";

</script>
<template>
  <ContentSlot>
    <template #main-content>
      <div class="card-module">
        <div class="card-module-title">这里是读卡页面</div>
      </div>

    </template>
  </ContentSlot>
</template>
<style lang="less" scoped>
  .card-module {
    height: 100%;
    width: 100%;
    background: #fff;

    &-title {
      font-size: 35px;
      text-align: center;
    }
  }
</style>