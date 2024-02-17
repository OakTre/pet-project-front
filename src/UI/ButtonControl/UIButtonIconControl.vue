<template>
    <UIButtonControl
        :type="type"
        :name="name"
        v-model="value"
    >
        <component :is="icon" />
    </UIButtonControl>
</template>

<script setup>
import { computed } from 'vue'

import { UIButtonControl } from '@/UI/ButtonControl'

const props = defineProps({
    modelValue: {
        type: Boolean,
        required: true
    },
    icon: {
        type: String,
        default: 'UIIconReload'
    },
    type: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    }
})

const emit = defineEmits(['update:modelValue'])

const value = computed({
    get() {
        return props.modelValue
    },
    set(newValue) {
        emit('update:modelValue', newValue)
    }
})
</script>

<style lang="scss" scoped></style>
