<template>
    <EditInfoContainer label="Контакты">
        <div class="edit-contacts">
            <EInput
                label="Номер телефона"
                name="phone"
                placeholder="+7 (999) - 999 - 99 - 99"
            />
            <EInput
                label="Эл. почта"
                name="email"
                placeholder="example@mail.ru"
            />
        </div>
    </EditInfoContainer>
</template>

<script setup>
import EditInfoContainer from '../EditInfoContainer.vue'
import EInput from '../UI/EInput.vue'
</script>

<style scoped lang="scss">
.edit-contacts {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: var(--offset-16);
}
</style>
