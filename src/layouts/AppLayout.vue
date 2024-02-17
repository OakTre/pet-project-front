<script setup>
import { useRoute } from 'vue-router'
import { onBeforeMount } from 'vue'

import { AppToast } from '@/modules/AppToast'
import { useAuthStore } from '@/stores'

const route = useRoute()
const authStore = useAuthStore()

onBeforeMount(async () => {
    await authStore.checkAuth()
})
</script>

<template>
    <AppToast />

    <component :is="route.meta.layoutComponent">
        <slot />
    </component>
</template>
