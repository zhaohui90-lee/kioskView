import { describe } from "vitest";
import { setActivePinia, createPinia } from "pinia";
import { useUserStore } from "../user.ts";
import { it } from "vitest";
import { expect } from "vitest";
import { beforeEach } from "vitest";

describe("user store", () => {

  beforeEach(() => {
    // Create a fresh pinia instance
    setActivePinia(createPinia())
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
})