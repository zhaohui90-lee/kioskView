<script setup lang="ts">
import Header from './header/Index.vue'
import Content from './content/Index.vue'
import Footer from './footer/Index.vue'
import Timer from './clock/Timer.vue';
import Date from './clock/Date.vue';
import { ref } from 'vue';

const welcomeMessage = ref('欢迎使用')
const deviceNumber = ref('001')
const softwareVersion = ref('0.0.0.0')
const ipAddr = ref('127.0.0.1')

</script>

<template>
  <div class="home">
    <Header>
      <template #header-left>
        <div class="logo"></div>
      </template>
      <template #header-middle></template>
      <template #header-right>
        <div class="home-timer">
          <div class="home-timer-clock">
            <Timer></Timer>
            <Date></Date>
          </div>
          <div class="fill-content"></div>
        </div>
      </template>
    </Header>
    <Content></Content>
    <Footer>
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
          <div class="ip-addr">{{ ipAddr }}</div>
        </div>
      </template>
    </Footer>
  </div>

</template>

<style lang="less">
.home {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  .logo {
    height: 140px;
    z-index: 99;
    background: url(../assets/img/logo/hospital_logo_浙大眼科.png) center no-repeat;
  }

  &-timer {
    display: flex;
    height: 100%;

    &-clock {
      flex-direction: column;
      width: 60%;
      flex: 1;
    }

    .fill-content {
      width: 40%;
    }
  }

  .userinfo-temp {
    height: 100%;
    display: flex;
    align-items: center;

    &-img {
      width: 50%;
      height: 90px;
      background: url(../assets/img/userHeaderImg.png) center no-repeat;
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
}
</style>