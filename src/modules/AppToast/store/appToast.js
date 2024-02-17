import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useAppToast = defineStore('toastMessage', () => {
    const isMessageShown = ref(false)
    const content = ref('')
    const type = ref('notifications')
    let time

    const closeMessage = () => {
        isMessageShown.value = false
        content.value = ''
        type.value = 'notifications'
        clearTimeout(time)
    }

    const autoCloseMessage = (TIMEOUT = 5000) => {
        time = setTimeout(() => {
            closeMessage()
        }, TIMEOUT)
    }

    const showToast = (payload) => {
        isMessageShown.value = true
        content.value = payload.message

        autoCloseMessage()
    }

    return {
        isMessageShown,
        content,
        closeMessage,
        autoCloseMessage,
        showToast
    }
})
