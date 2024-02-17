<template>
    <Filed
        :isError="!!errorMessage"
        :errors="errorMessage"
        label="Укажите ваше имя"
        class="reg-input"
    >
        <Input
            v-model="value"
            placeholder="Введите имя"
            name="name"
            :isDisabled="isDisabled"
            :isError="!!errorMessage"
            type="text"
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

const { value, errorMessage } = useField('name')
</script>

<style scoped lang="scss">
.reg-input {
    --c-label: var(--color-black);
}
</style>
