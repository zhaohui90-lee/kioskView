import { describe, it, expect, beforeEach, afterEach } from "vitest";
import { setActivePinia, createPinia } from "pinia";
import { useUserStore } from "../user.ts";
import { createApp } from "vue";

describe("user store", () => {

  beforeEach(() => {
    // Create a fresh pinia instance
    // setActivePinia(createPinia())

    // must creat app before install plugin
    // app can be null
    let app = createApp({})
    const pinia = createPinia()
    app.use(pinia)
    setActivePinia(pinia)

    pinia.use(UserPlugin)

    function UserPlugin() {
      return {
        plugin: 'userPlugin',
      }
    }
  })

  afterEach(() => {
    // Unset the active pinia so we can create a fresh one in the next test
    setActivePinia(null)
  })

  it("should return user store", () => {
    const userStore = useUserStore();
    expect(userStore).toBeDefined();
  });

  it('user age shoule be 0', () => {
    const userStore = useUserStore();
    expect(userStore.age).toBe(0);
  })

  it('user name should be empty', () => {
    const userStore = useUserStore();
    expect(userStore.name).toBe('');
  })

  it('user age should be 1', () => {
    const userStore = useUserStore();
    const id = userStore.$id
    expect(id).toBe('user');
    userStore.$patch({age: 1});
    expect(userStore.age).toBe(1);
  })

  it('user name should be "test"', () => {
    const userStore = useUserStore();
    userStore.$patch({name: 'test'});
    expect(userStore.name).toBe('test');
  })

  it('user age plus 10 should be 10', () => {
    const userStore = useUserStore();
    userStore.addAge(10);
    expect(userStore.age).toBe(10);
  })

  it('user name should be "test"', () => {
    const userStore = useUserStore();
    userStore.modifyName('test');
    expect(userStore.name).toBe('test');
  })

  it('user store reset', () => {
    const userStore = useUserStore();
    userStore.$reset();
    expect(userStore.age).toBe(0)
  })

  it('user store plugin test', () => {
    const userStore = useUserStore();
    expect(userStore.plugin).toBe('userPlugin');  
  })
})