<template>
    <Filed
        class="auth-password"
        :isError="!!errorMessage"
        :errors="errorMessage"
    >
        <Input
            v-model="value"
            :type="passwordType"
            placeholder="Введите ваш пароль"
            name="password"
            class="auth-password__control"
            :isError="!!errorMessage"
            :isDisabled="isDisabled"
        />
        <button
            type="button"
            class="auth-password__swipe-visibility"
            @click="changePasswordType"
        >
            <UIIconClosedEye v-if="isTypePassword" />
            <UIIconOpenEye v-if="!isTypePassword" />
        </button>
    </Filed>
</template>

<script setup>
import { ref } from 'vue'
import { useField } from 'vee-validate'
import Filed from '@/UI/Field'
import Input from '@/UI/Input'

const isTypePassword = ref(true)
const passwordType = ref('password')
const { value, errorMessage } = useField('password')

defineProps({
    isDisabled: {
        type: Boolean,
        default: false
    }
})

function changePasswordType() {
    switch (isTypePassword.value) {
        case true:
            passwordType.value = 'text'
            isTypePassword.value = false
            break
        case false:
            passwordType.value = 'password'
            isTypePassword.value = true
            break
        default:
            passwordType.value = 'password'
            isTypePassword.value = true
    }
}
</script>

<style scoped lang="scss">
.auth-password {
    position: relative;

    &__swipe-visibility {
        position: absolute;
        top: 50%;
        right: 1.4rem;
        width: 20px;
        height: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        transform: translateY(-50%);

        &:focus-visible {
            outline: none;
        }

        &:focus {
            color: var(--color-blue);
        }
    }

    &__control {
        padding-right: 4.4rem;
    }
}
</style>
