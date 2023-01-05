import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import './assets/main.css'
import 'normalize.css'


/// test
const app = createApp(App)

app.use(createPinia()).use(router)

app.mount('#app')
