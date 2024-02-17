<template>
    <Filed
        :isError="!!errorMessage"
        :errors="errorMessage"
        label="Введите ваш E-mail"
        class="reg-input"
    >
        <Input
            v-model="value"
            placeholder="example@mail.com"
            name="email"
            :isDisabled="isDisabled"
            :isError="!!errorMessage"
            type="email"
        />
    </Filed>
</template>

<script setup>
import { useField } from 'vee-validate'
import Filed from '@/UI/Field'
import Input from '@/UI/Input'

defineProps({
    isDisabled: {
        type: Boolean,
        default: false
    }
})

const { value, errorMessage } = useField('email')
</script>

<style scoped lang="scss">
.reg-input {
    --c-label: var(--color-black);
}
</style>
