import { ref } from 'vue'
import { defineStore } from 'pinia'
import { useStorage } from '@vueuse/core'
import HandleError from '@/lib/HandleError.js'
import axios from 'axios'

export const useAuthStore = defineStore('auth', () => {
    const isLoading = ref(false)
    const isAuthenticated = ref(false)
    const user = ref({})

    const checkAuth = async () => {
        try {
            isLoading.value = true
            const { data } = await axios.get(
                `${import.meta.env.VITE_API_URL}/auth/refresh`,
                { withCredentials: true }
            )

            if (data.success) {
                isAuthenticated.value = true
                user.value = data.data
                useStorage('token', data.token)
            }

            return data.success
        } catch (error) {
            return HandleError.ShowToast(error.response.data.message)
        } finally {
            isLoading.value = false
            // setTimeout(() => {
            // }, 3000)
        }
    }

    return { isAuthenticated, user, checkAuth, isLoading }
})
