import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import AOS from 'aos'
import '@/assets/css/style.css';
import 'aos/dist/aos.css'
import 'boxicons/css/boxicons.min.css';
import 'swiper/css';
import 'swiper/css/navigation'
// Initialize AOS
AOS.init()

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
    