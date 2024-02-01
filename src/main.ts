import { createApp } from 'vue'
import { createPinia } from 'pinia'

import './assets/main.css'
import 'normalize.css'
import App from './App.vue'
import router from './router'
import * as Sentry from "@sentry/vue";



/// test
const app = createApp(App)

Sentry.init({
  app,
  dsn: "https://b23d02fce92bc8ec98037eb4b7738cdf@o4506669054099456.ingest.sentry.io/4506669253984256",
  release: "v1.0.0",
  integrations: [
    new Sentry.BrowserTracing({
      // Set 'tracePropagationTargets' to control for which URLs distributed tracing should be enabled
      tracePropagationTargets: ["localhost", /^https:\/\/yourserver\.io\/api/],
    }),
    new Sentry.Replay({
      maskAllText: false,
      blockAllMedia: false,
    }),
  ],
  // Performance Monitoring
  tracesSampleRate: 1.0, //  Capture 100% of the transactions
  // Session Replay
  replaysSessionSampleRate: 0.1, // This sets the sample rate at 10%. You may want to change it to 100% while in development and then sample at a lower rate in production.
  replaysOnErrorSampleRate: 1.0, // If you're not already sampling the entire session, change the sample rate to 100% when sampling sessions where errors occur.
});

// 触发异常
Sentry.captureException(new Error('第一个错误'))

app.use(createPinia()).use(router)

app.mount('#app')
