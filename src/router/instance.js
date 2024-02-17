import { createRouter, createWebHistory } from 'vue-router'
import routes from './routes'

import loadLayoutMiddleware from './middleware/loadLayout'
import checkAuth from './middleware/checkAuth'

const instance = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [...routes]
})

instance.beforeEach(loadLayoutMiddleware)
instance.beforeEach(checkAuth)

export default instance
