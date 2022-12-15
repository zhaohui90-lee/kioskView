<script setup lang="ts">
import HeaderSlot from '@/slot/header/HeaderSlot.vue';
import HospitalLogo from '@/components/HospitalLogo.vue';
import ClockDate from '@/components/ClockDate.vue';
import ClockTimer from '@/components/ClockTimer.vue';
import ClockWeek from "@/components/ClockWeek.vue";
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
        <div class="fill-content">
          <clock-week></clock-week>
        </div>
      </div>
    </template>

  </HeaderSlot>
</template>

<style lang="less" scoped>

.home-timer {
  display: flex;
  align-items: center;
  height: 100%;

  &-clock {
    width: 60%;
  }

  .fill-content {
    width: 40%;
  }
}
</style>