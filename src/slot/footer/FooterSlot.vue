<script setup lang="ts">

</script>

<template>
  <div class="footer">
    <div class="footer-left">
      <slot name="footer-left"></slot>
    </div>

    <div class="footer-middle">
      <slot name="footer-middle"></slot>
    </div>

    <div class="footer-right">
      <slot name="footer-right"></slot>
    </div>
  </div>
</template>

<style lang="less" scoped>
.footer {
  background: var(--background-footer);
  display: flex;
  &-left {
    height: 100%;
    flex: 7;
  }
  &-middle {
    height: 100%;
    flex: 7;
  }
  &-right {
    height: 100%;
    flex: 10;
  }

}
</style>