<template>
    <div
        v-if="isShown"
        class="reg-form__step"
    >
        <slot />
    </div>
</template>

<script setup>
import { computed, inject } from 'vue'

const currentIndex = inject('step_counter').value++
const formStepIndex = inject('current_step_index')

const isShown = computed(() => currentIndex === formStepIndex.value)
</script>
