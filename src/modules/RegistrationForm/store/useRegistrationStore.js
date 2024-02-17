import { ref } from 'vue'
import { defineStore } from 'pinia'
import { useStorage } from '@vueuse/core'
import HandleError from '@/lib/HandleError.js'
import { useAuthStore } from '@/stores'
import timeout from '@/utils/timeout'
import http from '../api'

const authStore = useAuthStore()

export const useRegistrationStore = defineStore('registrationForm', () => {
    const isLoading = ref(false)

    const registration = async (payload) => {
        try {
            isLoading.value = true
            const { data, success } = await http.registration(payload)

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

    return { registration, isLoading }
})
