<template>
    <div class="recovery-form">
        <h1 class="recovery-form__label">Введите ваш E-mail</h1>
        <p class="recovery-form__text">
            Мы вышлем на него инструкцию по восстановлению пароля
        </p>
        <form>
            <InputEmail />
        </form>

        <div class="recovery-form__btns">
            <UIButtonSecond
                :isLink="true"
                to="/auth"
            >
                Назад
            </UIButtonSecond>
            <UIButton class="recovery-form__send">
                Восстановить пароль
            </UIButton>
        </div>
    </div>
</template>

<script setup>
import InputEmail from './CInputEmail.vue'
import { UIButton, UIButtonSecond } from '@/UI/Button'
</script>

<style scoped lang="scss">
.recovery-form {
    width: 100%;

    &__label {
        font: var(--font-14-20-semibold);
        margin-bottom: var(--offset-4);
    }

    &__text {
        margin-bottom: var(--offset-12);
    }

    &__btns {
        display: flex;
        justify-content: flex-end;
        gap: 1.2rem;
        margin-top: 3.2rem;
    }

    &__send {
        padding: 1rem 2.4rem;
    }
}
</style>
