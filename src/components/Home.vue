<script setup lang="ts">
import Header from './header/Index.vue'
import Content from './content/Index.vue'
import Footer from './footer/Index.vue'
</script>

<template>
  <div class="home">
    <Header>
    </Header>
    <Content></Content>
    <Footer></Footer>
  </div>

</template>

<style lang="less">
.home {
  width: 100%;
  display: flex;
  flex-direction: column;
}
</style>