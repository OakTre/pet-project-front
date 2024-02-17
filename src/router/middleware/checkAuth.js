import { useAuthStore } from '@/stores'

export default function checkAuth(route, from, next) {
    const { isNeedAuth } = route.meta
    const authStore = useAuthStore()

    if (!isNeedAuth && authStore.isAuthenticated) {
        if (
            route.path === '/auth' ||
            route.path === '/registration' ||
            route.path === '/recovery'
        ) {
            next('/')

            return
        }
    }

    if (isNeedAuth && authStore.isAuthenticated) {
        next()
    } else if (isNeedAuth && !authStore.isAuthenticated) {
        next('/auth?message=need_auth')
    } else {
        next()
    }
}
