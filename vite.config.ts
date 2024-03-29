import { sentryVitePlugin } from "@sentry/vite-plugin";
import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vitest/config'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx(), AutoImport({
    resolvers: [ElementPlusResolver()]
  }), Components({
    resolvers: [ElementPlusResolver()]
  }), sentryVitePlugin({
    org: "melody-lee",
    project: "javascript-vue"
  })],

  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },

  test: {
    isolate: false,
    environment: 'happy-dom',
    globals: true, // Specifically to make createTestingPinia happy
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
    }
  },

  build: {
    sourcemap: true
  }
})