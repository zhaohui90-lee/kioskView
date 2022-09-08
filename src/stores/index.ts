import { defineStore } from 'pinia'
import { ref, type Ref } from 'vue'

export const useSubTitleStore = defineStore('subTitle', () => {

  let titleName: Ref<string> = ref('欢迎使用')

  return {
    titleName
  }
})