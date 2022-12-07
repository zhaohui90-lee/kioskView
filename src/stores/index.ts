import type { CardModule } from '@/shared'
import { defineStore } from 'pinia'
import { ref, type Ref } from 'vue'

export const useSubTitleStore = defineStore('subTitle', () => {

  let titleName: Ref<string> = ref('欢迎使用')

  return {
    titleName
  }
})

export const useCardModuleStore = defineStore('cardModule', () => {

  let cardModule: Ref<Array<CardModule>> = ref([])

  return {
    cardModule
  }
})