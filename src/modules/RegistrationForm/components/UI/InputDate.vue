<template>
    <Filed
        :isError="!!errorMessage"
        :errors="errorMessage"
        label="Укажите вашу дату рождения"
        class="reg-input"
    >
        <Input
            v-model="value"
            placeholder="00.00.0000"
            name="birthday"
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

const { value, errorMessage } = useField('birthday')
</script>

<style scoped lang="scss">
.reg-input {
    --c-label: var(--color-black);
}
</style>
