import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/tailwind.css'

// import Global Components
import BaseNavbar from './components/BaseNavbar.vue'

const app = createApp(App)
app.component('base-navbar', BaseNavbar)

app.use(router).mount('#app')
