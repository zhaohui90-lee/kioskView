<script setup lang="ts">
import FooterSlot from '@/slot/footer/FooterSlot.vue';
import { onBeforeMount, ref } from 'vue';
import { fetchPost } from "@/http";
import api from "@/api";
const welcomeMessage = ref<String>('欢迎使用')

const deviceNumber = ref<String>('001')
const softwareVersion = ref<String>('0.0.0.0')
const ipAddr = ref<String>('')


onBeforeMount(() => {
  // 获取设备信息
  fetchPost(api['getDeviceInfo'], {
    deviceNo: deviceNumber.value.toString()
  }).then(res => {
    ipAddr.value = res.data.ip
  })

  // 获取软件版本
  fetchPost(api['getSwVersion'], {})
    .then(res => {
      softwareVersion.value = res.data
    })
})



</script>
<template>
  <FooterSlot>

    <template #footer-left>
      <div class="userinfo-temp">
        <div class="userinfo-temp-img">
          <img src="@/assets/img/userHeaderImg.png" alt="">
        </div>
        <div class="userinfo-temp-msg">{{ welcomeMessage }}</div>
      </div>
    </template>

    <template #footer-middle></template>

    <template #footer-right>
      <div class="device-info-temp">
        <div class="device-info">
          <div class="device-number">终端编号：{{ deviceNumber }}</div>
          <div class="software-version">软件版本：{{ softwareVersion }}</div>
        </div>
        <div class="ip-addr">IP地址：{{ ipAddr }}</div>
      </div>
    </template>
    
  </FooterSlot>
</template>
<style lang="less" scoped>
.userinfo-temp {
  height: 100%;
  display: flex;
  align-items: center;

  &-img {
    // height: 160px;
    flex: 1;
    text-align: center;
  }

  &-msg {
    color: #fff;
    font-size: var(--font-size-large);
    line-height: var(--line-height-large);
    text-align: left;
    flex: 2;
  }
}

.device-info-temp {
  background: var(--gray-700);
  height: 100%;
  color: #fff;
  text-align: center;

  .device-info {
    display: flex;
    align-items: center;
    font-size: var(--font-size-medium);
    line-height: var(--line-height-medium);
    height: 50%;

    .device-number,
    .software-version {
      flex: 1;
    }
  }

  .ip-addr {
    font-size: var(--font-size-large);
    line-height: var(--line-height-large);
    height: 50%;
  }
}
</style>