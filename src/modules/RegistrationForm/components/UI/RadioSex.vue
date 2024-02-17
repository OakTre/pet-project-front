<template>
    <Filed
        :isError="!!errorMessage"
        :errors="errorMessage"
        label="Укажите ваш пол"
        class="reg-radio"
    >
        <div class="reg-radio__content">
            <UIButtonControl
                v-model="value"
                valueName="male"
                name="sex"
                :isDisabled="isDisabled"
                :isError="!!errorMessage"
                icon="UIIconMale"
                type="radio"
                iconPosition="right"
                class="reg-radio__btn"
            >
                Женский
            </UIButtonControl>

            <UIButtonControl
                v-model="value"
                valueName="female"
                name="sex"
                :isDisabled="isDisabled"
                :isError="!!errorMessage"
                icon="UIIconFemale"
                type="radio"
                iconPosition="right"
                class="reg-radio__btn"
            >
                Мужской
            </UIButtonControl>
        </div>
    </Filed>
</template>

<script setup>
import { useField } from 'vee-validate'
import Filed from '@/UI/Field'
import { UIButtonControl } from '@/UI/ButtonControl'

defineProps({
    isDisabled: {
        type: Boolean,
        default: false
    }
})

const { value, errorMessage } = useField('sex')
</script>

<style scoped lang="scss">
.reg-radio {
    --c-label: var(--color-black);

    &__content {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: var(--offset-8);
    }

    &__btn {
        --p-control: 1.4rem 0.9rem;
    }
}
</style>
