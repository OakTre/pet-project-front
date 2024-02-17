<template>
    <div class="info-container">
        <h3 class="info-container__label">
            {{ label }}
        </h3>
        <slot />
        <EditDivider />
    </div>
</template>

<script setup>
import EditDivider from './UI/EditDivider.vue'

defineProps({
    label: {
        type: String,
        required: true
    }
})
</script>

<style scoped lang="scss">
.info-container {
    &__label {
        font: var(--font-20-24-semibold);
        margin-bottom: var(--offset-24);
    }
}
</style>
