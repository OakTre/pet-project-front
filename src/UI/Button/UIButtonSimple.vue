<template>
    <button
        v-if="!isLink"
        class="ui-button-simple"
    >
        <slot />
    </button>
    <RouterLink
        v-else
        class="ui-button-simple"
        :to="to"
    >
        <slot />
    </RouterLink>
</template>

<script setup>
import { RouterLink } from 'vue-router'

defineProps({
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

<style scoped lang="scss">
.ui-button-simple {
    --c: var(--color-darker-grey);

    padding: var(--offset-8);
    font: var(--font-14-20-regular);
    color: var(--c);

    &:focus-visible {
        outline: none;
    }

    &:focus {
        --c: var(--color-blue);
    }

    &:hover {
        --c: var(--color-blue);
    }

    &:active {
        --c: var(--color-blue);
    }
}
</style>
