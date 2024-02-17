<template>
    <button
        class="ui-button"
        :class="{
            'ui-button--is-disabled': isDisabled,
            'ui-button--is-icon': format === 'icon',
            'ui-button--is-loading': isLoading
        }"
        :disabled="isDisabled"
    >
        <slot
            v-if="iconPosition === 'left' && isIcon"
            name="left-icon"
        >
            <component :is="icon" />
        </slot>
        <span class="ui-button__label">
            <slot />
        </span>
        <slot
            v-if="iconPosition === 'right' && isIcon"
            name="right-icon"
        >
            <component :is="icon" />
        </slot>
    </button>
</template>

<script setup>
defineProps({
    format: {
        type: String,
        default: 'button'
    },
    isDisabled: {
        type: Boolean,
        default: false
    },
    icon: {
        type: String,
        default: 'UIIconReload'
    },
    iconPosition: {
        type: String,
        default: ''
    },
    isLoading: {
        type: Boolean,
        default: false
    },
    isIcon: {
        type: Boolean,
        default: false
    }
})
</script>

<style lang="scss" scoped>
.ui-button {
    --text-color: var(--color-white);
    --bg-color: var(--color-blue);

    align-items: center;
    justify-content: center;
    gap: 0.5rem;
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
        --bg-color: var(--color-btn-hover);
    }

    &:hover {
        --bg-color: var(--color-btn-hover);
    }

    &:active {
        --bg-color: var(--color-btn-active);
    }

    &--is-disabled {
        --bg-color: var(--color-darker-grey) !important;

        cursor: no-drop;
    }

    &--is-icon {
        padding: 1rem 1.4rem;
    }

    &--is-loading {
        svg {
            animation: rotate 1s infinite linear;
        }
    }

    @keyframes rotate {
        from {
            transform: rotate(0);
        }

        to {
            transform: rotate(360deg);
        }
    }
}
</style>
