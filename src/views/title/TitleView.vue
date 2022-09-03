<script setup lang="ts">
import HeaderSlot from '@/slot/header/HeaderSlot.vue';
import HospitalLogo from '@/components/HospitalLogo.vue';
import ClockDate from '@/components/ClockDate.vue';
import ClockTimer from '@/components/ClockTimer.vue';
</script>

<template>
  <HeaderSlot class="title-container">
    <template #header-left>
      <HospitalLogo></HospitalLogo>
    </template>
    <template #header-middle></template>
    <template #header-right>
      <div class="home-timer">
        <div class="home-timer-clock">
          <ClockTimer></ClockTimer>
          <ClockDate></ClockDate>
        </div>
        <div class="fill-content"></div>
      </div>
    </template>
  </HeaderSlot>
</template>

<style lang="less" scoped>
.title-container {
  background: url('@/assets/img/43inch-header-bg.png') center/110%;
}

.home-timer {
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
</style>