import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/tailwind.css'

// import Global Components
import BaseMainNavbar from './components/BaseMainNavbar.vue'
import ProductCard from './components/TheProductCard.vue'

const app = createApp(App)

app.component('base-main-navbar', BaseMainNavbar)
app.component("ProductCard", ProductCard)
app.use(router).mount('#app')
