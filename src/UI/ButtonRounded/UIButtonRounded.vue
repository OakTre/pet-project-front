<template>
    <button
        v-if="!isLink"
        class="ui-button-rounded"
    >
        <slot />
    </button>
    <RouterLink
        v-else
        class="ui-button-rounded"
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
.ui-button-rounded {
    --c: var(--color-blue);
    --bg: var(--color-white);
    --f: var(--font-14-20-regular);

    display: inline-block;
    padding: 1.8rem 3rem;
    border-radius: 3rem;
    background-color: var(--bg);
    font: var(--f);
    color: var(--c);
}
</style>
