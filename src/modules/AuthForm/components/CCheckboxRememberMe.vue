<template>
    <Filed
        :isError="!!errorMessage"
        :errors="errorMessage"
    >
        <UICheckbox
            name="remember_me"
            class="auth-form__remember-me"
            v-model="value"
        >
            Запомнить меня
        </UICheckbox>
    </Filed>
</template>

<script setup>
import { useField } from 'vee-validate'
import UICheckbox from '@/UI/Checkbox'
import Filed from '@/UI/Field'

const { value, errorMessage } = useField('remember_me')
</script>

<style scoped></style>
