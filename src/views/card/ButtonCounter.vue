<script lang="ts" setup>
import { watch,ref } from 'vue';

const props = defineProps({
    list:Array
})

const updateCount = ref(0)

watch(props,(newVal,oldVal)=>{
    console.log(newVal,oldVal);
    updateCount.value ++
})

</script>

<template>
 list：{{list}}
 <br/>
 updateCount： {{updateCount}}
</template>