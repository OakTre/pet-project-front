<template>
    <div class="ui-field">
        <span
            v-if="label !== ''"
            class="ui-field__label"
        >
            {{ label }}
        </span>
        <div class="ui-field__content">
            <slot />
        </div>
        <ul
            class="ui-field__errors"
            v-if="isError"
        >
            <li class="ui-field__errors-item">
                <UIIconWarningCircle
                    class="ui-field__errors-icon"
                    :width="12"
                    :height="14"
                />
                <span class="ui-field__errors-label">
                    {{ errors }}
                </span>
            </li>
        </ul>
    </div>
</template>

<script setup>
defineProps({
    label: {
        type: String,
        default: ''
    },
    errors: {
        type: String,
        default: ''
    },
    isError: {
        type: Boolean,
        default: false
    }
})
</script>

<style scoped lang="scss">
.ui-field {
    display: block;
    --c-label: var(--color-darker-grey);

    &__label {
        display: block;
        font: var(--font-14-20-regular);
        margin-bottom: var(--offset-8);
        color: var(--c-label);
    }

    &__errors {
        margin-top: var(--offset-4);

        &-item {
            display: flex;
            align-items: center;
            gap: 0.5rem;
        }

        &-icon {
            color: var(--color-red);
            transform: translateY(-0.5px);
        }

        &-label {
            display: block;
            font: var(--font-12-16-regular);
            color: var(--color-darker-grey);
        }
    }

    &__content {
        position: relative;
    }
}
</style>
