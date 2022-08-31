<template>
  <div>
    <h1>message: {{ msg }}</h1>
  </div>
</template>


<script setup lang="ts">
import axios from 'axios'
import { computed, reactive, ref, toRef } from 'vue';

// let msg = reactive<Number[]>([])
let msg = ref<String>('')
axios.get('http://localhost:3000/test')
  .then(res => {
    // msg.push(res.data)
    msg.value = res.data
  })
  .catch(error => {
    console.log(error);

  })



// let message1 = reactive<Number[]>([])

// setTimeout(() => {
//   let arr = [1,2,3,4]
//   message1.push(...arr)
// }, 1000);


</script>

<style scoped>
h1,
h2 {
  font-weight: normal;
}
</style>