<script setup lang="ts">
import Home from './components/Home.vue'
import { computed } from 'vue'
import { personFactory } from './Person'

const props = defineProps({
  name: {
    type: String,
    defualt: 'Bob',
  },
})



// err11()

const person = computed(() => {
  return personFactory(props.name)
})

</script>

<template>
  <Home class="top-app"></Home>
  <div>{{ person.name.value }}</div>
</template>

<style lang="less" scoped></style>

