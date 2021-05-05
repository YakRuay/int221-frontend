import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/tailwind.css'

// import Global Components
import BaseMainNavbar from './components/BaseMainNavbar.vue'

const app = createApp(App)
app.component('base-main-navbar', BaseMainNavbar)

app.use(router).mount('#app')
