<template>
    <form
        @submit="sendForm"
        class="reg-form"
    >
        <EmailStep />
        <PasswordStep />
        <NameStep />
        <SexStep />
        <DateStep />

        <div class="reg-form__btns">
            <UIButtonSecond
                @click="currentStepIndex--"
                type="button"
                v-if="currentStepIndex > 0"
            >
                Назад
            </UIButtonSecond>

            <UIButton
                iconPosition="left"
                :isIcon="regStore.isLoading"
                icon="UIIconLoading"
                :isLoading="regStore.isLoading"
                :isDisabled="regStore.isLoading"
            >
                {{ isLastStep ? 'Зарегистрироваться' : 'Далее' }}
            </UIButton>
        </div>
    </form>
</template>

<script setup>
import { provide } from 'vue'
import { useRouter } from 'vue-router'

import { UIButton, UIButtonSecond } from '@/UI/Button'
import PasswordStep from './Steps/PasswordStep.vue'
import NameStep from './Steps/NameStep.vue'
import SexStep from './Steps/SexStep.vue'
import EmailStep from './Steps/EmailStep.vue'
import DateStep from './Steps/DateStep.vue'

import useRegistrationFormComposable from '../composables/useRegistrationForm'
import { useRegistrationStore } from '../store/useRegistrationStore'

const router = useRouter()
const { currentStepIndex, stepCounter, isLastStep, values, handleSubmit } =
    useRegistrationFormComposable()
const regStore = useRegistrationStore()

provide('step_counter', stepCounter)
provide('current_step_index', currentStepIndex)

const sendForm = handleSubmit(async () => {
    if (!isLastStep.value) {
        currentStepIndex.value++

        return
    }

    const { success } = await regStore.registration(values)

    if (success) {
        router.push('/')
    }
})
</script>

<style scoped lang="scss">
.reg-form {
    display: flex;
    flex-direction: column;

    &__btns {
        display: flex;
        align-self: flex-end;
        gap: var(--offset-12);
        margin-top: var(--offset-32);
    }
}
</style>
