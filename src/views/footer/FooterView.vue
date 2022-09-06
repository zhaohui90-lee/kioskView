<script setup lang="ts">
import FooterSlot from '@/slot/footer/FooterSlot.vue';
import { onBeforeMount, ref } from 'vue';
import api from "@/http/index";
const welcomeMessage = ref<String>('欢迎使用')

const deviceNumber = ref<String>('001')
const softwareVersion = ref<String>('0.0.0.0')
const ipAddr = ref<String>('')


onBeforeMount(() => {
  // 获取设备信息
  api.deviceInfo({
    deviceNo: deviceNumber.value.toString()
  }).then(res => {
    // console.log(res);
    
    ipAddr.value = res.data.ip
  })

  // 获取软件版本
  api.softwareVersion()
    .then(res => {
      softwareVersion.value = res.data
    })
})



</script>
<template>
  <FooterSlot>
    <template #footer-left>
      <div class="userinfo-temp">
        <div class="userinfo-temp-img"></div>
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
      width: 50%;
      height: 90px;
      background: url(@/assets/img/userHeaderImg.png) center no-repeat;
    }

    &-msg {
      color: #fff;
      font-size: 35px;
      text-align: center;
    }
  }

  .device-info-temp {
    background: var(--gray-700);
    height: 90px;
    border-radius: 24px;
    color: #fff;
    text-align: center;

    .device-info {
      display: flex;
      align-items: center;
      font-size: 20px;
      height: 50%;

      .device-number,
      .software-version {
        flex: 1;
      }
    }

    .ip-addr {
      font-size: 30px;
      height: 50%;
    }
  }
</style>