<template>
    <UIButton format="icon">
        <component :is="icon" />
    </UIButton>
</template>

<script setup>
import { UIButton } from '@/UI/Button'

defineProps({
    icon: {
        type: String,
        default: 'UIIconReload'
    }
})
</script>

<style scoped></style>
