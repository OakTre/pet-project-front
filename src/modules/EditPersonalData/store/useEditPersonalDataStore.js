import { ref } from 'vue'
import { defineStore } from 'pinia'
import { useAuthStore } from '@/stores'
import timeout from '@/utils/timeout'
import HandleError from '@/lib/HandleError'
import http from '../api'

const authStore = useAuthStore()

export const useEditPersonalDataStore = defineStore('editPersonalData', () => {
    const isLoading = ref(false)

    const update = async (id, payload) => {
        try {
            isLoading.value = true
            const { data, success } = await http.update(id, payload)

            if (success) {
                authStore.user = data

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

    return { update, isLoading }
})
