<template>
    <div class="ui-dropdown">
        <div class="ui-dropdown__container">
            <UIInput
                v-model="value"
                :name="name"
                :placeholder="placeholder"
                :type="type"
            />

            <div class="ui-dropdown__list">
                <div class="ui-dropdown__list-item">
                    123
                </div>
                <div class="ui-dropdown__list-item">
                    123
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import UIInput from '../Input/UIInput.vue'

const value = ref('')

const props = defineProps({
    modelValue: {
        type: String
    },
    isDisabled: {
        type: Boolean,
        default: false
    },
    isError: {
        type: Boolean,
        default: false
    },
    name: {
        type: String,
        required: true
    },
    placeholder: {
        type: String,
        required: true
    },
    type: {
        type: String,
        default: 'text'
    }
})
</script>

<style lang="scss" scoped>
.ui-dropdown {
    &__container {
        position: relative;
    }

    &__list {
        position: absolute;
        width: 100%;
        padding: var(--offset-16);
        margin-top: var(--offset-8);
        background-color: var(--color-white);
        border-radius: var(--offset-8);
        box-shadow:
            0px 1px 3.9px 0px rgba(28, 19, 51, 0.03),
            0px 5px 24px 0px rgba(28, 19, 51, 0.05);

        &-item {
            width: 100%;
            padding: 1rem;
            cursor: pointer;
        }
    }
}
</style>
