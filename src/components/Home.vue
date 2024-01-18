<script setup lang="ts">
import { effectScope, onScopeDispose, reactive, watch } from 'vue'
import { watchEffect } from 'vue'
import { readonly } from 'vue'
import { isRef } from 'vue'
import { computed, ref } from 'vue'
import { onBeforeMount, onBeforeUpdate, onMounted, onUpdated } from 'vue'

const author = ref({
  name: 'John Doe',
  books: [
    'Vue 2 - Advanced Guide',
    'Vue 3 - Basic Guide',
    'Vue 4 - The Mystery',
    {
      name: '小王子',
      price: 20,
    },
  ],
  address: '1111111',
})

console.log(author)
author.value.name = 'jack'
// console.log(author.__v_isRef);
// console.log(author.dep);
// console.log(author._rawValue);

const copy = readonly(author)
console.log(copy)

console.log(isRef(author))

watchEffect(() => {
  console.log('watchEffect...')

  author.value
})

// const originalArray = reactive<number[]>([]);

// const proxyArray = new Proxy(originalArray, {});

// proxyArray.push(1)

// proxyArray.push(2)

// console.log(proxyArray);

const author1 = reactive({
  name: 'John Doe',
  books: [
    'Vue 2 - Advanced Guide',
    'Vue 3 - Basic Guide',
    'Vue 4 - The Mystery',
    {
      name: '小王子',
      price: 20,
    },
  ],
  address: '1111111',
})

console.log(author1)

const publishedBooksMessage = computed({
  get: () => (author.value.books.length > 0 ? 'Yes' : 'No'),
  set: (val) => (author.value.name = val),
})

const publishedBooksMessage1 = computed(
  () => {
    return author.value.books[3] ? 'Yes' : 'No'
  },
  {
    onTrack: (e) => {
      console.log(e)
    },
    onTrigger: (e) => {
      console.log(e)
    },
  }
)

console.log(publishedBooksMessage)
console.log(publishedBooksMessage1)

onBeforeMount(() => {
  console.log('home before mounted...')
})

onMounted(() => {
  console.log('home mounted...')
})

onBeforeUpdate(() => {
  console.log('home before updated...')
})

onUpdated(() => {
  console.log('home updated...')
})

// effectScope
let counter = ref(100)

// watch(counter, () => {
//   console.log('counter changed: ', counter.value)
// })
// watchEffect(() => {
//   console.log('counter changed: ', counter.value)
// })
const scope = effectScope()
scope.run(() => {
  const doubled = computed(() => counter.value * 2)

  watch(doubled, () => console.log(doubled.value))

  watchEffect(() => console.log('Count: ', doubled.value))
})

scope.stop()

function useMouse() {
  const x = ref(0)
  const y = ref(0)

  function handler(e: any) {
    x.value = e.x
    y.value = e.y
  }

  window.addEventListener('mousemove', handler)

  onScopeDispose(() => {
    window.removeEventListener('mousemove', handler)
  })

  return { x, y }
}

console.log(useMouse());


// function createSharedComposable(composable) {
//   let subscriber = 0
//   let state

//   const dispose = () => {
//     subscriber--
//     if (subscriber === 0) {
//       scope.stop()
//       state = null
//       state = null
//     }
//   }

//   return (...args) => {
//     subscriber++
//     if (!state) {
//       scope = effectScope(true)
//       state = scope.run(() => composable(...args))
//     }
//     onScopeDispose(dispose)
//     return false
//   }
// }

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
