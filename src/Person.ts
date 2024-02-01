import { ref } from 'vue'

// const personCount = ref(0)

export function personFactory(name: string | undefined) {
  const obj = {
    name: ref(name),
  }

  // personCount.value += 1
  return obj
}
