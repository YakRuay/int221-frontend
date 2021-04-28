import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/tailwind.css'

// import Global Components
import BaseMainNavbar from './components/BaseMainNavbar.vue'
import TheSecNavbar from './components/TheSecNavbar.vue'

const app = createApp(App)
app.component('base-main-navbar', BaseMainNavbar)
app.component('the-sec-navbar', TheSecNavbar)
app.use(router).mount('#app')
