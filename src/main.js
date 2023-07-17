import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import '@fortawesome/fontawesome-free/css/all.css';
import i18n from './locales/i18n';

const app = createApp(App)

app.use(router)
app.use(i18n)

app.mount('#app')
