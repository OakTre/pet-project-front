import './assets/style/app.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import { instance } from './router'

import icons from './Ui/Icons'

const pinia = createPinia()
const app = createApp(App)

icons.forEach((icon) => {
    // eslint-disable-next-line no-underscore-dangle
    app.component(icon.__name, icon)
})

app.use(pinia)
app.use(instance)

app.mount('#app')
