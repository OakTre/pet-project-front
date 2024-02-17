import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useDefaultLoading = defineStore('defaultLoading', () => {
    const isLoading = ref(false)

    return { isLoading }
})
