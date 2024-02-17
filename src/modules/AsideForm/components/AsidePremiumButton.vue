<template>
    <AsideLink :isLink="false">
        Premium статус
        <template v-slot:content>
            {{ isPremium ? 'Активен' : 'Неактивен' }}
        </template>
    </AsideLink>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { useAuthStore } from '@/stores'
import AsideLink from './AsideLink.vue'

const authStore = useAuthStore()
const { user } = storeToRefs(authStore)

const isPremium = !!user.value.roles.includes('premium')
</script>
