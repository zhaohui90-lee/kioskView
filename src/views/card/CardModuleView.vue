<script setup lang="ts">
// console.log('这里是读卡页面...');
import ContentSlot from "@/slot/content/ContentSlot.vue";

</script>
<template>
  <ContentSlot>
    <template #main-content>
      <div class="card-module">
        <div class="card-module-title">请选择卡类型</div>
        <div class="card-module-template">
          <div class="card-item" v-for="item in 4" :key="item">读卡模板</div>
        </div>
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
    height: 10%;
    font-size: 35px;
    text-align: center;
    border-bottom: 1px solid #ccc;
  }
  &-template {
    height: 90%;
    display: flex;
    flex-wrap: wrap;
    
    .card-item {
      width: 500px;
      height: 300px;
    }
  }
}
</style>