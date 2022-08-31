<template>
  <div>
    <h1>message: {{ msg }}</h1>
  </div>
</template>


<script setup lang="ts">
import axios from 'axios'
import { computed, ref, toRef } from 'vue';

let msgRaw: String;
axios.get('http://localhost:3000/test')
  .then(res => {
    msgRaw = res.data
  })
  .catch(error => {
    console.log(error);

  })




</script>

<style scoped>
h1,
h2 {
  font-weight: normal;
}
</style>