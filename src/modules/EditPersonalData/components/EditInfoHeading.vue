<template>
    <h1 class="edit-heading">
        {{ fullName }}
    </h1>
    <EditDivider />
</template>

<script setup>
import { computed } from 'vue'
import { storeToRefs } from 'pinia'
import { useAuthStore } from '@/stores'
import calculateAge from '../utils/calculateAge'

import EditDivider from './UI/EditDivider.vue'

const authStore = useAuthStore()
const { user } = storeToRefs(authStore)
const age = calculateAge(user.value.birthday)
const fullName = computed(() => `${user.value.name}, ${age}`)
</script>

<style scoped lang="scss">
.edit-heading {
    font: var(--font-24-32-semibold);
}
</style>
