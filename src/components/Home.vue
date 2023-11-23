<script setup lang="ts">
import { computed, reactive } from 'vue';
import { onBeforeMount, onBeforeUpdate, onMounted, onUpdated } from 'vue';

const author = reactive({
  name: 'John Doe',
  books: [
    'Vue 2 - Advanced Guide',
    'Vue 3 - Basic Guide',
    'Vue 4 - The Mystery'
  ]
})

const publishedBooksMessage = computed({
  get: () => author.books.length > 0 ? 'Yes' : 'No',
  set: (val) => author.name = val 
})

const publishedBooksMessage1 = computed(() => {
  return author.books.length > 0 ? 'Yes' : 'No'
}, {
  onTrack: (e) => {
    console.log(e);
    debugger
  },
  onTrigger: (e) => {
    console.log(e);
    debugger
  }
})

console.log(publishedBooksMessage);
console.log(publishedBooksMessage1);


onBeforeMount(() => {
  console.log('home before mounted...');
})


onMounted(() => {
  console.log('home mounted...');
})



onBeforeUpdate(() => {
  console.log('home before updated...');
})

onUpdated(() => {
  console.log('home updated...');
})

</script>

<template>
  <div class="home">
    <header>
      <router-view class="view main-header" name="Header"></router-view>
    </header>
    <main>
      <router-view class="view main-ad" name="Ad"></router-view>
      <router-view class="view main-content" name="Content"></router-view>
    </main>
    <footer>
      <router-view class="view main-footer" name="Footer"></router-view>
    </footer>
  </div>


</template>

<style lang="less">
@media screen and (max-width: 1080px) {
  .main-header {
    height: 120px;
  }

  .main-ad {
    height: 610px;
  }

  .main-content {
    height: 1030px;
  }

  .main-footer {
    height: 160px;
  }
}

@media screen and (min-width: 1280px) {
  .main-header {
    height: 120px;
  }

  .main-ad {
    display: none;
  }

  .main-content {
    height: 744px;
  }

  .main-footer {
    height: 160px;
  }
}
</style>