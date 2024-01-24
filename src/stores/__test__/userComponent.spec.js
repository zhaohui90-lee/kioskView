import { mount } from "@vue/test-utils";
import { createTestingPinia } from "@pinia/testing";
import { describe, it, vi, expect } from "vitest";
import { useUserStore } from "../user.ts";
import UserComponent from "./UserComponent.vue";

const wrapper = mount(UserComponent, {
  global: {
    plugins: [createTestingPinia({
      createSpy: () => vi.fn()
    })],
  }
})

const userStore = useUserStore()

describe('component test', () => {

  it('modify user name in component', () => {

    
    // watch param in component
    const spy = vi.spyOn(userStore, 
      'modifyName'
    )

    expect(spy).toHaveBeenCalledTimes(0)
    
    
    userStore.modifyName('jack')

    

    expect(spy).toHaveBeenCalledTimes(1)
    
  })
})