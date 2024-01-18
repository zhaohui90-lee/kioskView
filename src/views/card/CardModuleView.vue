<script setup lang="ts">
import type { CardModule } from "@/shared"
import ContentSlot from "@/slot/content/ContentSlot.vue";
import { useCardModuleStore } from "@/stores";
import { onBeforeMount } from "vue";
const cardModuleStore = useCardModuleStore();

const cardModule: Array<CardModule> = cardModuleStore.cardModule

console.log('cardModule', cardModule);


onBeforeMount(() => {

})

function selectCard() {
  
}
</script>
<template>
  <ContentSlot>
    <template #main-content>
      <div class="card-module">
        <div class="card-module-title">
          <div class="title-name">
            <span>请选择卡类型</span>
          </div>
        </div>
        <div class="card-module-template">
          <div class="card-item" v-for="item in cardModule" @click="selectCard">
            {{item.cardName}}
          </div>
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
  .title-name {
    padding: 15px 0;
    span {
      display: inline-block;
      height: 80px;
      width: 300px;
      line-height: 80px;
      font-size: 40px;
      border-radius: 30px;
      color: var(--main);
      background: var(--main_opacity_2);
      border-bottom: 10px solid var(--main_opacity_5);
    }
  }

  &-title {
    height: 15%;
    font-size: 35px;
    text-align: center;
    border-bottom: 1px solid #ccc;
  }
  &-template {
    display: flex;
    flex-wrap: wrap;
    margin: 40px 125px 0 125px;
    
    .card-item {
      width: 485px;
      height: 210px;
    }
  }
}
</style>