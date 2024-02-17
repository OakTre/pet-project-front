<template>
    <form
        @submit="sendForm"
        class="auth-form"
    >
        <div class="auth-form__inner">
            <InputEmail />
            <InputPassword />

            <CheckboxRememberMe class="auth-form__remember-me" />
        </div>
        <UIButton
            type="submit"
            class="auth-form__btn"
            iconPosition="left"
            :isIcon="authFormStore.isLoading"
            icon="UIIconLoading"
            :isLoading="authFormStore.isLoading"
            :isDisabled="authFormStore.isLoading"
        >
            Войти
        </UIButton>
        <UIButtonSimple
            :isLink="true"
            to="/recovery"
            class="auth-form__recovery"
        >
            Я не помню пароль
        </UIButtonSimple>
    </form>
</template>

<script setup>
import { useForm } from 'vee-validate'
import * as yup from 'yup'
import { useRouter } from 'vue-router'

import { useAuthForm } from '../store/useAuthFormStore'
import { UIButton, UIButtonSimple } from '@/UI/Button'
import InputEmail from './CInputEmail.vue'
import InputPassword from './CInputPassword.vue'
import CheckboxRememberMe from './CCheckboxRememberMe.vue'

const router = useRouter()
const authFormStore = useAuthForm()
const schema = yup.object({
    email: yup.string().email().required(),
    password: yup.string().min(8).required(),
    remember_me: yup.boolean()
})
const { handleSubmit } = useForm({
    validationSchema: schema,
    initialValues: {
        email: '',
        password: ''
    }
})

const sendForm = handleSubmit(async (values) => {
    const { success } = await authFormStore.login(values)

    if (success) {
        router.push('/')
    }
})
</script>

<style scoped lang="scss">
.auth-form {
    max-width: 34.1rem;
    width: 100%;
    margin: 0 auto;

    &__inner {
        display: flex;
        flex-direction: column;
        gap: var(--offset-16);
        margin-bottom: var(--offset-24);
    }

    &__btn {
        width: 100%;
    }

    &__recovery {
        text-align: center;
        margin: var(--offset-16) auto 0;
        display: block;
    }

    &__remember-me {
        align-self: flex-start;
    }
}
</style>
