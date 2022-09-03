<script setup lang="ts">

</script>

<template>
  <div class="sub-header">
    <div class="header-left">
      <slot name="header-left"></slot>
    </div>
    <div class="header-middle">
      <slot name="header-middle"></slot>
    </div>
    <div class="header-right">
      <slot name="header-right"></slot>
    </div>
  </div>
</template>

<style lang="less" scoped>
.sub-header {
  width: 100%;
  height: 13%;
  display: flex;
  align-items: center;

  .header-left {
    height: 100%;
    width: 50%;
  }

  .header-middle {
    width: 30%;
  }

  .header-right {
    width: 20%;
  }
}
</style>