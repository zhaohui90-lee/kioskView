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
    <div class="clock-header">
      <div class="header-right">
        <slot name="header-right"></slot>
      </div>
    </div>
  </div>



</template>

<style lang="less" scoped>
.sub-header {
  width: 100%;
  display: flex;
  align-items: center;

  .header-left {
    height: 100%;
    width: 100%;
  }

  .header-middle {
    width: 20%;
  }


}

.clock-header {
  width: 100%;
  height: 120px;

  .header-right {
    height: 100%;
    width: 100%;
  }
}
</style>