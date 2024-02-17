<template>
    <form
        @submit="sendForm"
        class="edit-profile"
    >
        <EditInfoHeading />

        <EInfo />
        <EContacts />

        <div class="edit-profile__btns">
            <UIButtonSecond
                :isLink="true"
                to="/"
            >
                Отмена
            </UIButtonSecond>
            <UIButton
                iconPosition="left"
                :isIcon="editStore.isLoading"
                icon="UIIconLoading"
                :isLoading="editStore.isLoading"
                :isDisabled="editStore.isLoading"
                type="submit"
            >
                Сохранить
            </UIButton>
        </div>
    </form>
</template>

<script setup>
import { UIButton, UIButtonSecond } from '@/UI/Button'
import { useAppToast } from '@/stores'
import { EInfo, EContacts } from './EditContainers'
import EditInfoHeading from './EditInfoHeading.vue'

import useEditPersonalDataForm from '../composables/useEditPersonalDataForm'
import { useEditPersonalDataStore } from '../store/useEditPersonalDataStore'

const { values, handleSubmit, userId } = useEditPersonalDataForm()
const editStore = useEditPersonalDataStore()
const toast = useAppToast()

const sendForm = handleSubmit(async () => {
    const { success } = await editStore.update(userId, values)

    if (success) {
        toast.showToast({
            message: 'Данные обновлены успешно :)'
        })
    }
})
</script>

<style scoped lang="scss">
.edit-profile {
    display: flex;
    flex-direction: column;

    &__btns {
        align-self: flex-end;
        display: flex;
        gap: var(--offset-12);
    }
}
</style>
