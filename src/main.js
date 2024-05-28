import './assets/main.css'
import '../Layout.js'
import { createApp, inject } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import { ServiceB } from './serviceb'
import { Service } from './services'

const pinia = createPinia()
const app = createApp(App)
app.provide('url', 'http://localhost:8080')
app.provide('serviceB', () => new ServiceB(inject('url')), true)
app.provide('service', () => new Service(inject('serviceB')), true)
app.use(pinia)

app.mount('#app')
