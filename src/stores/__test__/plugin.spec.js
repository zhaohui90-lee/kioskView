import { describe } from "vitest";
import { createPinia } from "pinia";
import { beforeEach } from "vitest";
import { createApp } from "vue";
import { setActivePinia } from "pinia";
import { afterEach } from "vitest";
import { defineStore } from "pinia";
import { expect } from "vitest";

describe('plugin test', () => {

  let pinia
  let app
  beforeEach(() => {
    app = createApp({})
    pinia = createPinia()
    app.use(pinia)
    setActivePinia(pinia)
  })

  afterEach(() => {
    setActivePinia(null)
  
  })

  it('pinia store can be implement by outer action', () => {


    const useTempStore = defineStore('temp', {
      actions: {
        tempSearch() {
          return 'tempSearch'
        }
      },
      debounce: {
        tempSearch: 1000
      }
    })

    pinia.use(({options, store}) => {
      if (options.debounce) {
        return Object.keys(options.debounce).reduce((debounceAction, action) => {
          debounceAction[action] = function() {
            return 'debounceAction'
          }
          return debounceAction
        }, {})
      }
    })

    expect(useTempStore().tempSearch()).toBe('debounceAction')
  })
})