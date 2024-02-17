<template>
    <StepContainer>
        <InputPassword
            label="Придумайте пароль"
            placeholder="Ваш пароль"
        />
        <InputPassword
            placeholder="Повторите пароль"
            name="confirmPass"
        />
    </StepContainer>
</template>

<script setup>
import StepContainer from './StepContainer.vue'
import InputPassword from '../UI/InputPassword.vue'
</script>
