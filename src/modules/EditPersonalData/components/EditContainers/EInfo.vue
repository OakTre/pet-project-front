<template>
    <EditInfoContainer label="Персональные данные">
        <div class="edit-info">
            <EInput
                class="edit-info__control"
                label="Ваше имя"
                placeholder="Алексей"
                name="name"
            />
            <EInput
                class="edit-info__control"
                label="Пол"
                placeholder="Пол"
                name="sex"
            />
            <EInput
                class="edit-info__control"
                label="Дата рождения"
                placeholder="99.99.9999"
                name="birthday"
            />
            <EInput
                class="edit-info__control"
                label="Город"
                placeholder="Москва"
                name="city"
            />
        </div>
    </EditInfoContainer>
</template>

<script setup>
import EditInfoContainer from '../EditInfoContainer.vue'
import EInput from '../UI/EInput.vue'
</script>

<style scoped lang="scss">
.edit-info {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: var(--offset-24) var(--offset-16);

    &__control {
        grid-column: 2 span;
    }
}
</style>
