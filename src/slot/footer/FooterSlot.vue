<script setup lang="ts">

</script>

<template>
  <div class="footer">
    <el-row :gutter="20" style="height: 100%;">

      <el-col :span="7" style="height: 100%;">
        <div class="footer-left">
          <slot name="footer-left"></slot>
        </div>
      </el-col>

      <el-col :span="7" style="height: 100%;">
        <div class="footer-middle">
          <slot name="footer-middle"></slot>
        </div>
      </el-col>

      <el-col :span="10" style="height: 100%;">
        <div class="footer-right">
          <slot name="footer-right"></slot>
        </div>

      </el-col>
    </el-row>
  </div>
</template>

<style lang="less" scoped>

.footer {
  background: #99a6b3;
  &-left,
  &-middle,
  &-right {
    height: 100%;
  }
}
</style>