<script lang="ts" setup>
import FooterSlot from '@/slot/footer/FooterSlot.vue';
import { useRouter } from 'vue-router';

const router = useRouter()

function returnPrePage() {
  console.log('返回上一页');
  router.go(-1)
}

function returnHomePage() {
  console.log('回到首页...');
  router.push({
    path: '/'
  })
}
</script>
<template>
  <FooterSlot>
    <template #footer-left></template>
    <template #footer-middle></template>
    <template #footer-right>
      <div class="btn-template">
        <div class="btn-pre-page">
          <span class="iconfont">&#xe89e;</span>
          <span class="btn-name" @click="returnPrePage">上一页</span>
        </div>
        <div class="btn-main-page">
          <span class="iconfont">&#xe631;</span>
          <span class="btn-name" @click="returnHomePage">主页</span>
        </div>
      </div>
    </template>
  </FooterSlot>
</template>
<style lang="less" scoped>
  .btn-template {
    height: 100%;
    display: flex;
    align-items: center;
    text-align: center;
    color: #fff;
    font-size: 40px;

    .btn-pre-page,
    .btn-main-page{
      flex: 1;
      height: 110px;
      width: 140px;
      margin: 5px;
      line-height: 110px;
      background: var(--deep_yellow);

      span {
        padding: 5px;
      }
    }
  }
</style>