<template>
    <label class="ui-button-control">
        <input
            v-model="value"
            :type="type"
            :name="name"
            class="visually-hidden ui-button-control__input"
            :class="{ 'ui-button-control__input--is-disabled': isDisabled }"
            :disabled="isDisabled"
            :value="valueName"
        />
        <span class="ui-button-control__label">
            <slot
                v-if="iconPosition === 'left'"
                name="left-icon"
            >
                <component :is="icon" />
            </slot>
            <span class="ui-button-control__label-text"><slot /></span>
            <slot
                v-if="iconPosition === 'right'"
                name="right-icon"
            >
                <component :is="icon" />
            </slot>
        </span>
    </label>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
    modelValue: {
        type: [String, Boolean]
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
    type: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    valueName: {
        type: String
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
.ui-button-control {
    --text-color: var(--color-black);
    --bg-color: var(--color-white);
    --b-color: var(--color-grey);
    --p-control: 0.9rem 3rem;

    position: relative;
    display: inline-block;

    &__label {
        display: inline-flex;
        justify-content: center;
        width: 100%;
        gap: 0.5rem;
        padding: var(--p-control);
        color: var(--text-color);
        border-radius: var(--offset-8);
        background-color: var(--bg-color);
        font: var(--font-14-20-regular);
        border: 1px solid var(--b-color);
        transition: all var(--transition);
        cursor: pointer;
        user-select: none;
    }

    &__input {
        &:focus-visible {
            outline: none;
        }

        &:focus {
            + .ui-button-control__label {
                --b-color: var(--color-blue);
                --text-color: var(--color-blue);
            }
        }

        &:hover {
            + .ui-button-control__label {
                --b-color: var(--color-blue);
                --text-color: var(--color-blue);
            }
        }

        &:active {
            + .ui-button-control__label {
                --b-color: var(--color-blue);
                --bg-color: var(--color-blue);
                --text-color: var(--color-white);
            }
        }

        &:checked {
            + .ui-button-control__label {
                --b-color: var(--color-blue);
                --bg-color: var(--color-blue);
                --text-color: var(--color-white);

                &:hover {
                    --b-color: var(--color-checkbox-checked) !important;
                    --bg-color: var(--color-checkbox-checked) !important;
                }
            }

            &:focus {
                + .ui-button-control__label {
                    --b-color: var(--color-checkbox-checked) !important;
                    --bg-color: var(--color-checkbox-checked) !important;
                }
            }
        }

        &--is-disabled {
            + .ui-button-control__label {
                --b-color: var(--color-grey);
                --bg-color: var(--color-grey);
                --text-color: var(--color-darker-grey);
            }
        }
    }
}
</style>
