<template>
    <Filed
        :isError="!!errorMessage"
        :errors="errorMessage"
    >
        <Input
            v-model="value"
            placeholder="Введите ваш E-mail"
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

<style scoped></style>
