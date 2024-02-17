<template>
    <AsideLink
        @click="logout"
        :isLink="false"
    >
        Выход
    </AsideLink>
</template>

<script setup>
import { useRouter } from 'vue-router'
import http from '../api/request.js'
import { useAuthStore } from '@/stores'
import { useStorage } from '@vueuse/core'

import AsideLink from './AsideLink.vue'
import HandleError from '@/lib/HandleError.js'

const authStore = useAuthStore()
const router = useRouter()

const logout = async () => {
    try {
        const { data, success } = await http.logout()

        if (success) {
            const token = useStorage('token')

            authStore.isAuthenticated = false
            authStore.user = {}

            token.value = null

            router.push('/auth')
        }

    } catch (error) {
        HandleError.ShowToast(error.response.data.message)
    }
}
</script>
