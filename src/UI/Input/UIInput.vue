<template>
    <input
        v-model="value"
        :type="type"
        :name="name"
        class="ui-input"
        :class="{
            'ui-input--is-disabled': isDisabled,
            'ui-input--is-error': isError
        }"
        :disabled="isDisabled"
        :placeholder="placeholder"
    />
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
    modelValue: {
        type: String
    },
    isDisabled: {
        type: Boolean,
        default: false
    },
    isError: {
        type: Boolean,
        default: false
    },
    name: {
        type: String,
        required: true
    },
    placeholder: {
        type: String,
        required: true
    },
    type: {
        type: String,
        default: 'text'
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

<style scoped lang="scss">
.ui-input {
    --bc: var(--color-grey);
    --br: var(--offset-8);
    --h: var(--offset-48);

    width: 100%;
    height: var(--h);
    border: 1px solid var(--bc);
    border-radius: var(--br);
    font: var(--font-14-20-regular);
    padding: 1.4rem;
    transition: all var(--transition);

    @include placeholder() {
        font: var(--font-14-20-regular);
        color: var(--color-darker-grey);
    }

    &:focus-visible {
        outline: none;
    }

    &:focus {
        --bc: var(--color-darker-grey);

        outline: none;
    }

    &--is-disabled {
        --bc: var(--color-grey);

        background-color: var(--color-grey);
        color: var(--color-darker-grey);
    }

    &--is-error {
        --bc: var(--color-red) !important;
    }
}
</style>
