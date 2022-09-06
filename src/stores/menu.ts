import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useMenuStore = defineStore('menuStore', () => {
  let menu = ref<any>([])

  return {
    menu
  }
})
