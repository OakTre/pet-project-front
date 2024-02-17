<template>
    <button
        v-if="!isLink"
        class="ui-button-second"
        :class="{ 'ui-button-second--is-disabled': isDisabled }"
        :disabled="isDisabled"
    >
        <slot />
    </button>
    <RouterLink
        v-else
        class="ui-button-second"
        :to="to"
    >
        <slot />
    </RouterLink>
</template>

<script setup>
import { RouterLink } from 'vue-router'

defineProps({
    isDisabled: {
        type: Boolean,
        default: false
    },
    isLink: {
        type: Boolean,
        default: false
    },
    to: {
        type: String,
        default: '/'
    }
})
</script>

<style lang="scss" scoped>
.ui-button-second {
    --text-color: var(--color-black);
    --bg-color: var(--color-grey);

    justify-content: center;
    padding: 1rem 3.1rem;
    color: var(--text-color);
    border-radius: var(--offset-8);
    background-color: var(--bg-color);
    font: var(--font-14-20-regular);
    transition: var(--transition);

    &:focus-visible {
        outline: none;
    }

    &:focus {
        --bg-color: var(--color-btn-second-hover);
    }

    &:hover {
        --bg-color: var(--color-btn-second-hover);
    }

    &:active {
        --bg-color: var(--color-btn-second-active);
    }

    &--is-disabled {
        --text-color: var(--color-darker-grey) !important;
        --bg-color: var(--color-grey) !important;

        cursor: no-drop;
    }
}
</style>
