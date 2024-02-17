<template>
    <label class="ui-checkbox">
        <input
            v-model="value"
            type="checkbox"
            :name="name"
            class="visually-hidden ui-checkbox__control"
            :class="{ 'ui-checkbox__control--is-disabled': isDisabled }"
            :disabled="isDisabled"
            :checked="value"
        />
        <span class="ui-checkbox__label">
            <slot />
        </span>
    </label>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
    modelValue: {
        type: Boolean
    },
    isDisabled: {
        type: Boolean,
        default: false
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

<style lang="scss" scoped>
.ui-checkbox {
    --text-color: var(--color-black);
    --b-color: var(--color-grey);

    position: relative;
    display: inline-block;
    cursor: pointer;

    &__label {
        position: relative;
        display: block;
        font: var(--font-14-20-regular);
        color: var(--color-darker-grey);
        padding-left: 2.8rem;

        &::before {
            position: absolute;
            top: -0.2rem;
            left: 0;
            width: 2rem;
            height: 2rem;
            border-radius: 0.4rem;
            border: 1px solid var(--b-color);
            content: '';
        }

        &::after {
            position: absolute;
            top: 0.3rem;
            left: 0.5rem;
            width: 1.2rem;
            height: 1.2rem;
            border-radius: 0.2rem;
            background-color: var(--color-blue);
            opacity: 0;
            content: '';
        }
    }

    &__control {
        &:focus-visible {
            outline: none;
        }

        &:focus {
            + .ui-checkbox__label {
                --b-color: var(--color-blue);
            }
        }

        &:hover {
            + .ui-checkbox__label {
                --b-color: var(--color-blue);
            }
        }

        &:checked {
            + .ui-checkbox__label {
                --b-color: var(--color-blue);

                &::after {
                    opacity: 1;
                }

                &:hover {
                    --b-color: var(--color-checkbox-checked) !important;
                }
            }

            &:focus {
                + .ui-checkbox__label {
                    --b-color: var(--color-checkbox-checked) !important;
                }
            }
        }

        &--is-disabled {
            + .ui-checkbox__label {
                --b-color: var(--color-grey);

                &::after {
                    background-color: var(--b-color);
                }
            }
        }
    }
}
</style>
