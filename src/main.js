import { createApp } from 'vue'
import Toast from 'vue-toastification'
import 'vue-toastification/dist/index.css'
import App from './App.vue'
import router from './router'

import 'animate.css'
import '@/assets/css/tailwind.css'

const app = createApp(App)

app.use(router)
app.use(Toast)
app.mount('#app')
