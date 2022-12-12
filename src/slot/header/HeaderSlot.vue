<script setup lang="ts">

</script>

<template>
  <el-row :gutter="20">
    <el-col :span="16">
      <div class="grid-content ep-bg-purple sub-header">
        <div class="header-left">
          <slot name="header-left"></slot>
        </div>
        <div class="header-middle">
          <slot name="header-middle"></slot>
        </div>
      </div>
    </el-col>
    <el-col :span="8">
      <div class="grid-content ep-bg-purple clock-header">
        <div class="header-right">
          <slot name="header-right"></slot>
        </div>
      </div>
    </el-col>
  </el-row>
</template>

<style lang="less" scoped>
.sub-header {
  width: 100%;
  // height: 120px;
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