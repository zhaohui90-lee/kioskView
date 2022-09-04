import { defineStore } from 'pinia'

export const useCounterStore = defineStore({
  id: 'counter',
  state: () => ({
    counter: 120
  }),
  getters: {
    doubleCount: (state) => state.counter * 2
  },
  actions: {
    initCounter() {
      this.counter = 120
    },
    increment() {
      this.counter++
    },
    decrement() {
      this.counter--
    }
  }
})

