import { createApp } from 'vue'
import App from './App.vue'
import './assets/styles/main.scss'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import PicturesSection from './components/PicturesSection.vue'

const app = createApp(App)
app.component('PicturesSection', PicturesSection)

createApp(App).mount('#app')
