import 'bootstrap/dist/css/bootstrap.css'
import { createApp } from 'vue'
import router from './router'
import App from './App.vue'
import TheHeader from './components/layouts/TheHeader.vue'

const app = createApp(App)

app.component('the-header', TheHeader)

app.use(router)
app.mount('#app')
