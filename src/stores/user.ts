import { defineStore } from "pinia";

export const useUserStore = defineStore('user', {

  state() {
    return {
      name: '',
      age: 0,
    }
  },
  actions: {
    // actions
    addAge(plusNumber: number) {
      this.age += plusNumber
    },
    modifyName(newName: string) {
      this.name = newName
    }
  },
  getters: {
    // getters
  },
  hydrate() {
    // hydrate state
  }
})