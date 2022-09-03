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
  background: #99a6b3;
  width: 100%;
  height: 12%;
  display: flex;
  align-items: center;

  &-left {
    width: 22%;
  }

  &-middle {
    width: 45%;
  }

  &-right {
    width: 30%;
  }
}
</style>