<template>
    <Filed
        :isError="!!errorMessage"
        :errors="errorMessage"
        :label="label"
    >
        <Input
            v-model="value"
            :placeholder="placeholder"
            :name="name"
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

const props = defineProps({
    isDisabled: {
        type: Boolean,
        default: false
    },
    label: {
        type: String,
        default: ''
    },
    placeholder: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    }
})

const { value, errorMessage } = useField(props.name)
</script>

<style scoped></style>
