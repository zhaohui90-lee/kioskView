import { mount } from '@vue/test-utils'
import { createTestingPinia } from '@pinia/testing'
import { describe, it, vi, expect } from 'vitest'
import { useUserStore } from '../user.ts'
import UserComponent from './UserComponent.vue'

mount(UserComponent, {
  global: {
    plugins: [
      createTestingPinia({
        createSpy: () => vi.fn(),
      }),
    ],
  },
})

const userStore = useUserStore()

describe('component test', () => {
  it('modify user name in component', () => {
    // watch param in component
    const spy = vi.spyOn(userStore, 'modifyName').mockImplementation(() => null)

    spy.mockReturnValue('jack')
    expect(userStore.modifyName('jack')).toBe('jack')
    expect(spy).toHaveBeenCalledTimes(1)

    userStore.modifyName('jack')
    userStore.addAge(10)

    expect(spy).toHaveBeenCalledTimes(2)
  })
})
