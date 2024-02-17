import { ref } from 'vue'
import { defineStore } from 'pinia'
import http from '../api'
import { useStorage } from '@vueuse/core'
import HandleError from '@/lib/HandleError.js'
import { useAuthStore } from '@/stores'
import timeout from '@/utils/timeout'

const authStore = useAuthStore()

export const useAuthForm = defineStore('authForm', () => {
    const isLoading = ref(false)

    const login = async (payload) => {
        try {
            isLoading.value = true
            const { data, success } = await http.login(payload)

            if (success) {
                authStore.user = data
                authStore.isAuthenticated = true

                useStorage('token', data.token)

                return {
                    data,
                    success
                }
            }
        } catch (error) {
            return HandleError.ShowToast(error.response.data.message)
        } finally {
            await timeout(500)
            isLoading.value = false
        }
    }

    return { login, isLoading }
})
