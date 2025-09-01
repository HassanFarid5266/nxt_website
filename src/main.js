import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import AOS from 'aos'
import 'aos/dist/aos.css'

// Initialize AOS
AOS.init()

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
