<template>
    <div
        class="toast"
        :class="{ 'toast--is-error': type === 'error' }"
    >
        <div class="toast__icon-wrapper">
            <component :is="iconConfig[type]" />
        </div>
        <div class="toast__content">
            <slot />
        </div>
        <button
            @click="closeWarningMessage"
            class="toast__close"
        >
            <UIIconCross />
        </button>
    </div>
</template>

<script setup>
defineProps({
    type: {
        type: String,
        default: 'notifications'
    }
})

const iconConfig = {
    error: 'UIIconInfo',
    chat: 'UIIconChatsCircle',
    like: 'UIIconTwoHearts',
    notifications: 'UIIconBell'
}
const emit = defineEmits(['close'])

const closeWarningMessage = () => {
    emit('close', true)
}
</script>

<style scoped lang="scss">
.toast {
    --icon-bg: #DFD0FF;
    --icon-color: #7237ec;

    position: relative;
    display: flex;
    max-width: 28.8rem;
    width: 100%;
    box-shadow:
        0px 0.4px 1.625px 0px rgba(38, 18, 82, 0.04),
        0px 2px 10px 0px rgba(38, 18, 82, 0.07);
    min-height: 6rem;
    border-radius: 0.8rem;
    overflow: hidden;
    color: var(--icon-color);

    &--is-error {
        --icon-bg: #fa9898;
        --icon-color: var(--color-red);
    }

    &__icon-wrapper {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
        width: 4rem;
        background-color: var(--icon-bg);
    }

    &__content {
        padding: 1rem 4rem 1rem 1rem;
        font: var(--font-14-20-semibold);
        color: var(--color-black);
        background-color: var(--color-white);
    }

    &__close {
        position: absolute;
        top: 1rem;
        right: 1rem;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 2rem;
        height: 2rem;
        color: var(--color-black);

        svg {
            width: 100%;
            height: 100%;
        }
    }
}
</style>
