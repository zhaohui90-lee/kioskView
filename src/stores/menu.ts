import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useMenuStore = defineStore('menuStore', () => {
  let menu = ref<any>([])

  function getMenu(data: any) {
    menu.value = data
  }

  return {
    menu,
    getMenu
  }
})
