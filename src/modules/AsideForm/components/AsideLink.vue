<template>
    <div class="aside-link__wrapper">
        <UIButtonSimple
            class="aside-link"
            :isLink="isLink"
            :to="to"
        >
            <slot />
        </UIButtonSimple>
        <slot name="content" />
    </div>
</template>

<script setup>
import { UIButtonSimple } from '@/UI/Button'

defineProps({
    to: {
        type: String,
        default: '/'
    },
    isLink: {
        type: Boolean,
        default: true
    }
})
</script>

<style scoped lang="scss">
.aside-link {
    padding: 0;

    &__wrapper {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
}
</style>
