export default [
    {
        path: '/',
        name: 'Главная',
        component: () => import('@/pages/MainPage'),
        meta: {
            isNeedAuth: true
        }
    },
    {
        path: '/settings',
        name: 'Настройки',
        component: () => import('@/pages/SettingsPage'),
        meta: {
            isNeedAuth: true
        }
    },
    {
        path: '/auth',
        name: 'Авторизация',
        component: () => import('@/pages/AuthPage'),
        meta: {
            layout: 'AppLayoutAuth',
            isNeedAuth: false
        }
    },
    {
        path: '/registration',
        name: 'Ркгистрация',
        component: () => import('@/pages/RegistrationPage'),
        meta: {
            layout: 'AppLayoutAuth',
            isNeedAuth: false
        }
    },
    {
        path: '/recovery',
        name: 'Восстановление пароля',
        component: () => import('@/pages/RecoveryPage'),
        meta: {
            layout: 'AppLayoutAuth',
            isNeedAuth: false
        }
    }
]
