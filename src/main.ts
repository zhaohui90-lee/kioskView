import { createApp } from 'vue'
import { createPinia } from 'pinia'

import './assets/main.css'
import 'normalize.css'
import App from './App.vue'
import router from './router'



/// test
const app = createApp(App)

app.use(createPinia()).use(router)

app.mount('#app')
