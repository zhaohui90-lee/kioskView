import { describe, expect } from 'vitest'
import { test } from 'vitest'
import { setupPuppeteer, E2E_TIMEOUT } from './eleUtils'
import path from 'node:path'
import { beforeEach } from 'vitest'

describe('e2e: Transition', () => {
  const { page, html, classList, isVisible, timeout, nextFrame, click } = setupPuppeteer()

  const baseUrl = `file://${path.resolve(__dirname, './transition.html')}`

  const duration = process.env.CI ? 200 : 50
  const buffer = process.env.CI ? 20 : 5

  const transitionFinish = (time = duration) => timeout(time + buffer)

  const classWhenTransitionStart = () =>
    page().evaluate(() => {
      ;(document.querySelector('#toggleBtn') as any)!.click()
      return Promise.resolve().then(() => {
        return document.querySelector('#container div')!.className.split(/\s+/g)
      })
    })

  beforeEach(async () => {
    await page().goto(baseUrl)
    await page().waitForSelector('#app')
  })

  describe('transition with Suspense', () => {
    test('trigger again when transition is not finished & correctly anchor', async () => {
      await page().evaluate((duration) => {
        const { createApp, shallowRef, h } = (window as any).Vue
        const One = {
          async setup() {
            return () =>
              h(
                'div',
                {
                  class: 'test',
                },
                'one'
              )
          },
        }
        const Two = {
          async setup() {
            return () =>
              h(
                'div',
                {
                  class: 'test',
                },
                'two'
              )
          },
        }
        createApp({
          teamplate: `
          <div id="container">
            <transition name="test" mode="out-in" duration="${duration}">
              <Suspense>
                <component :is="view"/>
              </Suspense>
            </transition>
          </div>
          <button id="toggleBtn" @click="click">button</button>
          `,
          setup: () => {
            const view = shallowRef(One)
            const click = () => {
              view.value = view.value === One ? Two : One
            }
            return {
              view,
              click,
            }
          },
        }).mount('#app')
      }, duration)

      await nextFrame()
      expect(await html('#container')).toBe(
        '<div>Top</div><div class="test test-enter-active test-enter-to">one</div><div>Bottom</div>',
      )

    }, E2E_TIMEOUT)
  })
})
