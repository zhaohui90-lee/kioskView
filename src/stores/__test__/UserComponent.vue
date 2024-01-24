<script setup lang="ts">
import { watch } from "vue";
import { useUserStore } from "../user";

const userStore = useUserStore();
watch(() => userStore.name, (newVal) => {
  console.log('newVal', newVal);
})
</script>
<template></template>