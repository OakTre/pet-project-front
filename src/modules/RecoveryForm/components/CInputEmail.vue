<template>
    <Filed label="Ваш E-mail">
        <Input
            v-model="email"
            placeholder="examle@mail.com"
            name="email"
        />
    </Filed>
</template>

<script setup>
import { ref } from 'vue'

import Filed from '@/UI/Field'
import Input from '@/UI/Input'

const email = ref('')
</script>

<style scoped>

</style>
