<template>
    <div class="aside-avatar">
        <UIAvatar class="aside-avatar__image" />
        <h3 class="aside-avatar__label">
            {{ name }}
        </h3>
        <UIButtonSimple
            :isLink="true"
            to="/settings"
            class="aside-avatar__button"
        >
            Редактировать
        </UIButtonSimple>
    </div>
</template>

<script setup>
import UIAvatar from '@/UI/Avatar'
import { UIButtonSimple } from '@/UI/Button'

defineProps({
    name: {
        type: String,
        default: 'Алексей, 24'
    }
})
</script>

<style scoped lang="scss">
.aside-avatar {
    align-self: center;
    display: flex;
    flex-direction: column;
    align-items: center;

    &__image {
        margin-bottom: 1.6rem;
    }

    &__label {
        text-align: center;
        font: var(--font-20-24-regular);
        margin-bottom: var(--offset-4);
    }

    &__button {
        --c: var(--color-blue);

        position: relative;
        display: inline-block;
        text-align: center;
        padding-left: 0px;
        padding-right: 0px;

        &::before {
            position: absolute;
            left: 0;
            bottom: 0.8rem;
            width: 100%;
            margin-bottom: 1px;
            border-bottom: 1px dashed currentColor;
            content: '';
        }

        &:hover {
            &::before {
                opacity: 0;
            }
        }
    }
}
</style>
